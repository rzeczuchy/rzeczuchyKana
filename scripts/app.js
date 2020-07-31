"use strict";
// CONSTANTS, VARIABLES
var kanaDisplay = (document.getElementById("kanaDisplay"));
var answer = (document.getElementById("answer"));
var feedback = (document.getElementById("feedback"));
var next = (document.getElementById("next"));
var syllables = [];
var displayedSyllable;
var attempts;
// EVENTS
window.onload = function () {
    initialize();
};
answer.onkeyup = function (e) {
    if (e.key == "Enter") {
        checkAnswer();
    }
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
    addHiragana();
    addHiraganaDakuten();
    addKatakana();
    addKatakanaDakuten();
    reset();
};
var reset = function () {
    attempts = 0;
    answer.value = "";
    feedback.innerHTML = "Check answer.";
    displayRandom();
    answer.focus();
};
var checkAnswer = function () {
    if (answer.value != "") {
        attempts++;
        if (displayedSyllable.romaji == answer.value.toLowerCase()) {
            feedback.innerHTML = "Correct!";
            next.focus();
        }
        else if (attempts < 2) {
            feedback.innerHTML = "Wrong - try again!";
        }
        else {
            feedback.innerHTML =
                "Wrong - correct answer is [" + displayedSyllable.romaji + "].";
            next.focus();
        }
    }
};
var displayRandom = function () {
    displayedSyllable = getRandomSyllable();
    if (displayedSyllable != null) {
        kanaDisplay.innerHTML = displayedSyllable.kana;
    }
};
var getRandomSyllable = function () {
    return syllables[randomNumber(0, syllables.length - 1)];
};
var addHiragana = function () {
    var hiragana = [
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
var addHiraganaDakuten = function () {
    var hiraganaDakuten = [
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
var addKatakana = function () {
    var katakana = [
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
var addKatakanaDakuten = function () {
    var katakanaDakuten = [
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
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (+max + 1 - +min) + +min);
};
