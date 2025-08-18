import { morseToTextMap } from './alphabet-morse-to-text.js';

export const alphabetMorseToTextMap = (text) => {
    const chars = ['.', '-', ' ', '/'];

    for (const char of text) {
        if (!chars.includes(char)) {
            return false;
        }
    }

    const words = text.trimn().split(/ +/);

    return words.every(word => morseToTextMap()[word] !== undefined);
}