//Function that converts array to json
export function arrayToJson(array: Array<any>) {
  return JSON.stringify(array)
}

// function to convert json to csv
export function ConvertToCSV(objArray: Array<string>) {
  const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray
  let str = ""
  //Set the headers
  let line = ""
  for (const index in array[0]) {
    if (line !== "") line += ","
    line += index
  }
  str += line + "\r\n"

  for (let i = 0; i < array.length; i++) {
    let line = ""
    for (const index in array[i]) {
      if (line != "") line += ","

      line += array[i][index]
    }

    str += line + "\r\n"
  }

  return str
}
// function to convert csv to base64
export function csvToBase64(csv: string) {
  return Buffer.from(csv).toString("base64")
}
