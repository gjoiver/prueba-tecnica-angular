import { alphabetMorseToTextMap } from './alphabet-morse-to-text.js';

export const validateIsMorse = (text) => {
    const chars = ['.', '-', ' ', '/'];

    for (const char of text) {
        if (!chars.includes(char)) {
            return false;
        }
    }

    const words = text.trim().split(/ +/);

    return words.every(word => alphabetMorseToTextMap()[word] !== undefined);
}