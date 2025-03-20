export default null
export function getParticle(word: string) {
    if (typeof word !== "string" || word.length === 0) {
        throw new Error("단어를 입력하세요.");
    }
    const lastChar = word[word.length - 1];
    const lastCharCode = lastChar.charCodeAt(0);
    if (lastCharCode < 0xAC00 || lastCharCode > 0xD7A3) {
        return word + "를";
    }
    const hasFinalConsonant = (lastCharCode - 0xAC00) % 28 !== 0;
    return word + (hasFinalConsonant ? "을" : "를");
}
export function numberWithCommas(number: number) {
    if (typeof number !== "number") {
        throw new Error("숫자를 입력하세요.");
    }
    return number.toLocaleString("en-US");
}