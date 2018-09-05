const IsogramFinder = function (word) {
  this.word = word.toUpperCase();
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.split("").every((letter, index) => this.word.indexOf(letter) === index);
}

module.exports = IsogramFinder;
