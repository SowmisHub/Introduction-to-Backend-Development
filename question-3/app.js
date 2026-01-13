import os from "os"
import { writeFile, readFile, appendFile, unlink } from "fs/promises"

async function runApp() {
  try {
    console.log("Free Memory:", os.freemem())
    console.log("Total CPU Cores:", os.cpus().length)

    await writeFile("data.txt", "Hello World")
    console.log("data.txt created")

    await writeFile("Readme.md", "## This is first line in Readme")
    console.log("Readme.md created")

    const data = await readFile("data.txt", "utf-8")
    console.log("Content of data.txt:")
    console.log(data)

    await appendFile("data.txt", "\nThis is second line")
    console.log("Text appended to data.txt")

    await unlink("Readme.md")
    console.log("Readme.md deleted")
  } catch (error) {
    console.error("Error occurred:", error.message)
  }
}

runApp()