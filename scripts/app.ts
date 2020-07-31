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
const next: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("next")
);
let syllables: Syllable[] = [];
let displayedSyllable: Syllable;
let attempts: number;

// EVENTS
window.onload = (): void => {
  initialize();
};
answer.onkeyup = (e: KeyboardEvent): void => {
  if (e.key == "Enter") {
    checkAnswer();
  }
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
  addHiragana();
  addHiraganaDakuten();
  addHiraganaDigraphs();
  addKatakana();
  addKatakanaDakuten();
  addKatakanaDigraphs();
  reset();
};

const reset = (): void => {
  attempts = 0;
  answer.value = "";
  feedback.innerHTML = "Check answer.";
  displayRandom();
  answer.focus();
};

const checkAnswer = (): void => {
  if (answer.value != "") {
    attempts++;

    if (displayedSyllable.romaji == answer.value.toLowerCase()) {
      feedback.innerHTML = "Correct!";
      next.focus();
    } else if (attempts < 2) {
      feedback.innerHTML = "Wrong - try again!";
    } else {
      feedback.innerHTML =
        "Wrong - correct answer is [" + displayedSyllable.romaji + "].";
      next.focus();
    }
  }
};

const displayRandom = (): void => {
  displayedSyllable = getRandomSyllable();

  if (displayedSyllable != null) {
    kanaDisplay.innerHTML = displayedSyllable.kana;
  }
};

const getRandomSyllable = (): Syllable => {
  return syllables[randomNumber(0, syllables.length - 1)];
};

const addHiragana = (): void => {
  const hiragana: Syllable[] = [
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
  syllables = syllables.concat(hiragana);
};

const addHiraganaDakuten = (): void => {
  const hiraganaDakuten: Syllable[] = [
    new Syllable("が", "ga"),
    new Syllable("ぎ", "gi"),
    new Syllable("ぐ", "gu"),
    new Syllable("げ", "ge"),
    new Syllable("ご", "go"),
    new Syllable("ざ", "za"),
    new Syllable("じ", "ji"),
    new Syllable("ず", "zu"),
    new Syllable("ぜ", "ze"),
    new Syllable("ぞ", "zo"),
    new Syllable("だ", "da"),
    new Syllable("ぢ", "ji"),
    new Syllable("づ", "dzu"),
    new Syllable("で", "de"),
    new Syllable("ど", "do"),
    new Syllable("ば", "ba"),
    new Syllable("び", "bi"),
    new Syllable("ぶ", "bu"),
    new Syllable("べ", "be"),
    new Syllable("ぼ", "bo"),
    new Syllable("ぱ", "pa"),
    new Syllable("ぴ", "pi"),
    new Syllable("ぷ", "pu"),
    new Syllable("ぺ", "pe"),
    new Syllable("ぽ", "po"),
  ];
  syllables = syllables.concat(hiraganaDakuten);
};

const addHiraganaDigraphs = (): void => {
  const hiraganaDigraphs: Syllable[] = [
    new Syllable("きゃ", "kya"),
    new Syllable("きゅ", "kyu"),
    new Syllable("きょ", "kyo"),
    new Syllable("しゃ", "sha"),
    new Syllable("しゅ", "shu"),
    new Syllable("しょ", "sho"),
    new Syllable("ちゃ", "cha"),
    new Syllable("ちゅ", "chu"),
    new Syllable("ちょ", "cho"),
    new Syllable("にゃ", "nya"),
    new Syllable("にゅ", "nyu"),
    new Syllable("にょ", "nyo"),
    new Syllable("ひゃ", "hya"),
    new Syllable("ひゅ", "hyu"),
    new Syllable("ひょ", "hyo"),
    new Syllable("みゃ", "mya"),
    new Syllable("みゅ", "myu"),
    new Syllable("みょ", "myo"),
    new Syllable("りゃ", "rya"),
    new Syllable("りゅ", "ryu"),
    new Syllable("りょ", "ryo"),
    new Syllable("ぎゃ", "gya"),
    new Syllable("ぎゅ", "gyu"),
    new Syllable("ぎょ", "gyo"),
    new Syllable("じゃ", "ja"),
    new Syllable("じゅ", "ju"),
    new Syllable("じょ", "jo"),
    new Syllable("ぢゃ", "ja"),
    new Syllable("ぢゅ", "ju"),
    new Syllable("ぢょ", "jo"),
    new Syllable("びゃ", "bya"),
    new Syllable("びゅ", "byu"),
    new Syllable("びょ", "byo"),
    new Syllable("ぴゃ", "pya"),
    new Syllable("ぴゅ", "pyu"),
    new Syllable("ぴょ", "pyo"),
  ];
  syllables = syllables.concat(hiraganaDigraphs);
};

const addKatakana = (): void => {
  const katakana: Syllable[] = [
    new Syllable("ア", "a"),
    new Syllable("イ", "i"),
    new Syllable("ウ", "u"),
    new Syllable("エ", "e"),
    new Syllable("オ", "o"),
    new Syllable("カ", "ka"),
    new Syllable("キ", "ki"),
    new Syllable("ク", "ku"),
    new Syllable("ケ", "ke"),
    new Syllable("コ", "ko"),
    new Syllable("サ", "sa"),
    new Syllable("シ", "shi"),
    new Syllable("ス", "su"),
    new Syllable("セ", "se"),
    new Syllable("ソ", "so"),
    new Syllable("タ", "ta"),
    new Syllable("チ", "chi"),
    new Syllable("ツ", "tsu"),
    new Syllable("テ", "te"),
    new Syllable("ト", "to"),
    new Syllable("ナ", "na"),
    new Syllable("ニ", "ni"),
    new Syllable("ヌ", "nu"),
    new Syllable("ネ", "ne"),
    new Syllable("ノ", "no"),
    new Syllable("ハ", "ha"),
    new Syllable("ヒ", "hi"),
    new Syllable("フ", "fu"),
    new Syllable("ヘ", "he"),
    new Syllable("ホ", "ho"),
    new Syllable("マ", "ma"),
    new Syllable("ミ", "mi"),
    new Syllable("ム", "mu"),
    new Syllable("メ", "me"),
    new Syllable("モ", "mo"),
    new Syllable("ヤ", "ya"),
    new Syllable("ユ", "yu"),
    new Syllable("ヨ", "yo"),
    new Syllable("ラ", "ra"),
    new Syllable("リ", "ri"),
    new Syllable("ル", "ru"),
    new Syllable("レ", "re"),
    new Syllable("ロ", "ro"),
    new Syllable("ワ", "wa"),
    new Syllable("ヰ", "wi"),
    new Syllable("ヱ", "we"),
    new Syllable("ヲ", "wo"),
    new Syllable("ン", "n"),
  ];
  syllables = syllables.concat(katakana);
};

const addKatakanaDakuten = (): void => {
  const katakanaDakuten: Syllable[] = [
    new Syllable("ガ", "ga"),
    new Syllable("ギ", "gi"),
    new Syllable("グ", "gu"),
    new Syllable("ゲ", "ge"),
    new Syllable("ゴ", "go"),
    new Syllable("ザ", "za"),
    new Syllable("ジ", "ji"),
    new Syllable("ズ", "zu"),
    new Syllable("ゼ", "ze"),
    new Syllable("ゾ", "zo"),
    new Syllable("ダ", "da"),
    new Syllable("ヂ", "ji"),
    new Syllable("ヅ", "dzu"),
    new Syllable("デ", "de"),
    new Syllable("ヂ", "do"),
    new Syllable("バ", "ba"),
    new Syllable("ビ", "bi"),
    new Syllable("ブ", "bu"),
    new Syllable("ベ", "be"),
    new Syllable("ボ", "bo"),
    new Syllable("パ", "pa"),
    new Syllable("ピ", "pi"),
    new Syllable("プ", "pu"),
    new Syllable("ペ", "pe"),
    new Syllable("ポ", "po"),
  ];
  syllables = syllables.concat(katakanaDakuten);
};

const addKatakanaDigraphs = (): void => {
  const katakanaDigraphs: Syllable[] = [
    new Syllable("キャ", "kya"),
    new Syllable("キュ", "kyu"),
    new Syllable("キョ", "kyo"),
    new Syllable("シャ", "sha"),
    new Syllable("シュ", "shu"),
    new Syllable("ショ", "sho"),
    new Syllable("チャ", "cha"),
    new Syllable("チュ", "chu"),
    new Syllable("チョ", "cho"),
    new Syllable("ニャ", "nya"),
    new Syllable("ニュ", "nyu"),
    new Syllable("ニョ", "nyo"),
    new Syllable("ヒャ", "hya"),
    new Syllable("ヒュ", "hyu"),
    new Syllable("ヒョ", "hyo"),
    new Syllable("ミャ", "mya"),
    new Syllable("ミュ", "myu"),
    new Syllable("ミョ", "myo"),
    new Syllable("リャ", "rya"),
    new Syllable("リュ", "ryu"),
    new Syllable("リョ", "ryo"),
    new Syllable("ギャ", "gya"),
    new Syllable("ギュ", "gyu"),
    new Syllable("ギョ", "gyo"),
    new Syllable("ジャ", "ja"),
    new Syllable("ジュ", "ju"),
    new Syllable("ジョ", "jo"),
    new Syllable("ヂャ", "ja"),
    new Syllable("ヂュ", "ju"),
    new Syllable("ヂョ", "jo"),
    new Syllable("ビャ", "bya"),
    new Syllable("ビュ", "byu"),
    new Syllable("ビョ", "byo"),
    new Syllable("ピャ", "pya"),
    new Syllable("ピュ", "pyu"),
    new Syllable("ピョ", "pyo"),
  ];
  syllables = syllables.concat(katakanaDigraphs);
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (+max + 1 - +min) + +min);
};
