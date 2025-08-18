import { morseAlphabet } from './data/morse-alphabet.js';
import { alphabetMorseToTextMap } from './utils/alphabet-morse-to-text.js';
import { convert } from './utils/convert.js';
import { validateIsMorse } from './utils/validate-is-morse.js';

const convertTextToMorse = (text) => {
    if (text.length === 0) {
        return '';
    }

    return convert(text.toUpperCase(), morseAlphabet, '', ' ')
}

const convertMorseToText = (morse) => {
    const invertedText = alphabetMorseToTextMap();

    return convert(morse.trim(), invertedText, ' ', '');
}

const executeConversion = (input) => {
    return validateIsMorse(input) ? convertMorseToText(input) : convertTextToMorse(input);
}

const text = executeConversion('Hello World');

console.log(text);

const morse = executeConversion(text);

console.log(morse);