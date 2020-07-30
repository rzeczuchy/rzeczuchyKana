"use strict";
// CONSTANTS, VARIABLES
var kanaDisplay = (document.getElementById("kanaDisplay"));
var answer = (document.getElementById("answer"));
var feedback = (document.getElementById("feedback"));
var hiragana;
var katakana;
var displayedSyllable;
var attempts;
// EVENTS
window.onload = function () {
    initialize();
};
// CLASSES
var Syllable = /** @class */ (function () {
    function Syllable(kana, romaji) {
        this.kana = kana;
        this.romaji = romaji;
    }
    return Syllable;
}());
// FUNCTIONS
var initialize = function () {
    populateHiragana();
    populateKatakana();
    reset();
};
var reset = function () {
    attempts = 0;
    answer.value = "";
    feedback.innerHTML = "Click submit to check.";
    displayRandom();
};
var checkAnswer = function () {
    attempts++;
    if (displayedSyllable.romaji == answer.value) {
        feedback.innerHTML = "Correct!";
    }
    else if (attempts < 3) {
        feedback.innerHTML = "Wrong - try again!";
    }
    else {
        feedback.innerHTML =
            "Wrong - correct answer is [" + displayedSyllable.romaji + "].";
    }
};
var displayRandom = function () {
    displayedSyllable = getRandomSyllable();
    if (displayedSyllable != null) {
        kanaDisplay.innerHTML = displayedSyllable.kana;
    }
};
var getRandomSyllable = function () {
    switch (randomNumber(0, 1)) {
        case 0:
            return hiragana[randomNumber(0, hiragana.length - 1)];
        case 1:
            return katakana[randomNumber(0, katakana.length - 1)];
        default:
            return null;
    }
};
var populateHiragana = function () {
    hiragana = [
        new Syllable("あ", "a"),
        new Syllable("い", "i"),
        new Syllable("う", "u"),
        new Syllable("え", "e"),
        new Syllable("お", "o"),
    ];
};
var populateKatakana = function () {
    katakana = [
        new Syllable("ア", "a"),
        new Syllable("イ", "i"),
        new Syllable("ウ", "u"),
        new Syllable("エ", "e"),
        new Syllable("オ", "o"),
    ];
};
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (+max + 1 - +min) + +min);
};
