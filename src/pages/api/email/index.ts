import { students } from "./constants"
import { arrayToJson, ConvertToCSV, csvToBase64 } from "./functions"
import sgMail from "@sendgrid/mail"
import * as functions from "firebase-functions"

// import * as functions from "firebase-functions"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handleError = (res: functions.Response, message: string, status = 400) => {
  res.statusCode = status
  res.json({ status: "error", message })
}

// function to handle convert json to csv and send it to the client using cloud function
const handleEmail = functions.https.onRequest(async (req, res) => {
  if (!req.body || req.method !== "POST") {
    return handleError(res as functions.Response, "Invalid request")
  }
  // convert the array to json
  const convertedArr = arrayToJson(students)
  //Convert the json to csv
  const csv = await ConvertToCSV(JSON.parse(convertedArr))
  try {
    //Cloud function to send the email
    const email = req.body.email
    const subject = req.body.subject

    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_FROM,
      subject,
      text: "Please find the attached CSV file",
      attachments: [
        {
          content: csvToBase64(csv),
          filename: "students.csv",
          type: "text/csv",
          disposition: "attachment",
          contentId: "my-custom-file",
        },
      ],
    })

    res.json({
      status: "success",
      message: "Email sent successfully",
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({
      status: "error",
      message: "Email not sent",
      error,
    })
  } finally {
    res.end()
  }
  //Export sendEmail function to firebase cloud function
})

export default handleEmail
