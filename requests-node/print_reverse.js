module.exports = function reverse(html) {
  let reversedHTML = html.split(" ").reverse().join(" ");
  console.log(reversedHTML)
}