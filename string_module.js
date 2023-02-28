function trimString(str) {
    return str.split(" ").map(word => word.trim()).filter(s => s != "").join(" ").split(".")
        .map(w => w.trim()).join(". ").split(",").map(w => w.trim()).join(", ").trim()

}

function getCountOfWords(str) {
    return trimString(str).split(" ").length;
}

function getCountUniqueWords(str) {
    let arr = str.toLowerCase().split(" ");
    let result = new Map();
    for (let word of arr) {
        word = word.split("").filter(item => item !== item.toUpperCase()).join("");
        if (!result.has(word)) {
            result.set(word, 1);
        }else {
            result.set(word, result.get(word) + 1);
        }
    }
    return result;
}

function setFirstLatterUpperCase(str) {
    return str[0]?.toUpperCase() + str.slice(1).toLowerCase();
}


export {trimString, getCountOfWords, getCountUniqueWords, setFirstLatterUpperCase}