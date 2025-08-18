import { morseAlphabet } from '../data/morse-alphabet.js';

export const alphabetMorseToTextMap = () => {
    const result = {};
    
    Object.keys(morseAlphabet).forEach(key => {
        result[morseAlphabet[key]] = key;
    });

    return result;
}