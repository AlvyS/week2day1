module.exports = function printLeet(html) {
  let leet = html.split(" ").reverse().join(" ");
  console.log(leet);
}