export const convert = (text, dictionary, split, join) => {
    // const textFinal = text.split(' ');

    return text.split(split).map(code => dictionary[code] || '').join(join)
}