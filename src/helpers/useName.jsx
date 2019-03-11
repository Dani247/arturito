// * returns the first letter as Capital and the rest as lower and removes extra spaces
export default str => {
  return (str[0].toUpperCase() + str.substr(1, str.length).toLowerCase()).replace(/\s+/g, ' ').trim()
}
