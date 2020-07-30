"use strict";

// CONSTANTS, VARIABLES
const kanaDisplay: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("kanaDisplay")
);
const answer: HTMLTextAreaElement = <HTMLTextAreaElement>(
  document.getElementById("answer")
);
const feedback: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("feedback")
);
let hiragana: Syllable[];
let katakana: Syllable[];
let displayedSyllable: Syllable;
let attempts: number;

// EVENTS
window.onload = (): void => {
  initialize();
};

// CLASSES
class Syllable {
  kana: string;
  romaji: string;

  constructor(kana: string, romaji: string) {
    this.kana = kana;
    this.romaji = romaji;
  }
}

// FUNCTIONS
const initialize = (): void => {
  populateHiragana();
  populateKatakana();
  reset();
};

const reset = (): void => {
  attempts = 0;
  answer.value = "";
  feedback.innerHTML = "Check answer.";
  displayRandom();
};

const checkAnswer = (): void => {
  attempts++;

  if (displayedSyllable.romaji == answer.value) {
    feedback.innerHTML = "Correct!";
  } else if (attempts < 3) {
    feedback.innerHTML = "Wrong - try again!";
  } else {
    feedback.innerHTML =
      "Wrong - correct answer is [" + displayedSyllable.romaji + "].";
  }
};

const displayRandom = (): void => {
  displayedSyllable = getRandomSyllable();

  if (displayedSyllable != null) {
    kanaDisplay.innerHTML = displayedSyllable.kana;
  }
};

const getRandomSyllable = (): Syllable => {
  switch (randomNumber(0, 1)) {
    case 0:
      return hiragana[randomNumber(0, hiragana.length - 1)];
    case 1:
      return katakana[randomNumber(0, katakana.length - 1)];
    default:
      return null;
  }
};

const populateHiragana = (): void => {
  hiragana = [
    new Syllable("あ", "a"),
    new Syllable("い", "i"),
    new Syllable("う", "u"),
    new Syllable("え", "e"),
    new Syllable("お", "o"),
    new Syllable("か", "ka"),
    new Syllable("き", "ki"),
    new Syllable("く", "ku"),
    new Syllable("け", "ke"),
    new Syllable("こ", "ko"),
    new Syllable("さ", "sa"),
    new Syllable("し", "shi"),
    new Syllable("す", "su"),
    new Syllable("せ", "se"),
    new Syllable("そ", "so"),
    new Syllable("た", "ta"),
    new Syllable("ち", "chi"),
    new Syllable("つ", "tsu"),
    new Syllable("て", "te"),
    new Syllable("と", "to"),
    new Syllable("な", "na"),
    new Syllable("に", "ni"),
    new Syllable("ぬ", "nu"),
    new Syllable("ね", "ne"),
    new Syllable("の", "no"),
    new Syllable("は", "ha"),
    new Syllable("ひ", "hi"),
    new Syllable("ふ", "fu"),
    new Syllable("へ", "he"),
    new Syllable("ほ", "ho"),
    new Syllable("ま", "ma"),
    new Syllable("み", "mi"),
    new Syllable("む", "mu"),
    new Syllable("め", "me"),
    new Syllable("も", "mo"),
    new Syllable("や", "ya"),
    new Syllable("ゆ", "yu"),
    new Syllable("よ", "yo"),
    new Syllable("ら", "ra"),
    new Syllable("り", "ri"),
    new Syllable("る", "ru"),
    new Syllable("れ", "re"),
    new Syllable("ろ", "ro"),
    new Syllable("わ", "wa"),
    new Syllable("ゐ", "wi"),
    new Syllable("ゑ", "we"),
    new Syllable("を", "wo"),
    new Syllable("ん", "n"),
  ];
};

const populateKatakana = (): void => {
  katakana = [
    new Syllable("ア", "a"),
    new Syllable("イ", "i"),
    new Syllable("ウ", "u"),
    new Syllable("エ", "e"),
    new Syllable("オ", "o"),
  ];
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (+max + 1 - +min) + +min);
};
