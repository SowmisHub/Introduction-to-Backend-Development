import boxen from "boxen"

const message = "I am using my first external module!"
const title = "Hurray!!!"

console.log(
  boxen(message, {
    title: title,
    padding: 1
  })
)

console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "singleDouble"
  })
)

console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "round"
  })
)
