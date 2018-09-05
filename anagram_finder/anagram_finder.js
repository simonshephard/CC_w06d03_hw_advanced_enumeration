const AnagramFinder = function (word) {
  this.word = word.toUpperCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const result = otherWords.filter((word) => {
    return word.toUpperCase() !== this.word && word.toUpperCase().split("").sort().join("") === this.word.toUpperCase().split("").sort().join("");
  });
  return result;
}

module.exports = AnagramFinder;
