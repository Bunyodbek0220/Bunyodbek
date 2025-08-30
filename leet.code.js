function findWordsContaining(arr, a) {
  return arr
    .map((word, i) => (word.includes(a) ? i : -1))
    .filter(i => i !== -1)
}
console.log(findWordsContaining(["salom","axror","bunyodbek"],"a"))
