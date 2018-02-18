//Random word is selected and exported
var wordsToGuess = ["Mario", "Luigi", "Nintendo", "DonkeyKong", "FireEmblem", "Kirby", "Wario", "Bowser", "Toad", "Peach", "Link"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;
