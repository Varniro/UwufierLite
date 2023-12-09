var faces = [`(・\`ω´・)`, `;;w;;`, `owo`, `UwU`, `>w<`, `^w^`, `ÚwÚ`, `:3`, `x3`];
var actions = [
    `*blushes*`,
    `*whispers to self*`,
    `*sweats*`,
    `*sees bulge*`,
    `*runs away*`,
    `*huggles tightly*`,
    `*boops your nose*`,
    `*starts twerking*`,
];
var exclamations = [`?!!`, `?!?1`, `!!11`, `?!?!`, `!?`];

function getElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uwufyWord(word) {
    // Check if the word is suitable for adding a face or action
    if (word.length > 3 && word.length <= 6 && !/[.,?!]+$/.test(word)) {
        if (Math.random() < 0.5) {
            // Add a face
            return word + " " + getElement(faces);
        } else {
            // Add an action
            return word + " " + getElement(actions);
        }
    } else {
        // Regular uwufication
        word = word.replace(/(?:r|l)/g, `w`);
        word = word.replace(/(?:R|L)/g, `W`);
        word = word.replace(/n([aeiou])/g, `ny$1`);
        word = word.replace(/N([aeiou])/g, `Ny$1`);
        word = word.replace(/N([AEIOU])/g, `Ny$1`);
        word = word.replace(/ove/g, `uv`);
        word = word.replace(/uwu/g, faces[Math.floor(Math.random() * (5)) + 2]);
        return word;
    }
}

function uwufySentence(sentence) {
    sentence = sentence.replace(/[?!]+$/, getElement(exclamations));
    var words = sentence.split(/\s+/);
    var urlPattern = new RegExp(/(?:https?|ftp):\/\/[\n\S]+/g);

    let uwufied = ``;
    words.forEach((word) => {
        uwufied += ` ${urlPattern.test(word) ? word : uwufyWord(word)}`;
    });
    return uwufied.trim();
}

// Get a random uwu face
function uwuFace() {
    return faces[Math.floor(Math.random() * faces.length)];
}

var activeElement = document.activeElement;

if (
    activeElement.tagName === 'INPUT' ||
    activeElement.tagName === 'TEXTAREA' ||
    activeElement.className == 'markup_a7e664 editor__66464 slateTextArea__0661c fontSize16Padding__48818'
) {
    var selectedText = document.activeElement.children[0].children[0].children[0].children[0].innerHTML;
    var convertedText = uwufySentence(selectedText);
    navigator.clipboard.writeText(convertedText);
}
