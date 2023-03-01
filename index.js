
import {trimString, getCountOfWords, getCountUniqueWords, setFirstLatterUpperCase} from "./string_module.js";
import * as bi from './bigIntOperations.js';


console.log(setFirstLatterUpperCase("pppppppPPP"));
let str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."
console.log(trimString(str));
console.log(getCountOfWords(str));

console.log(getCountUniqueWords("Текст, в котором слово текст()$$ несколько раз встречается и слово тоже"));


console.log(bi.subtraction(1209999, 900000))

