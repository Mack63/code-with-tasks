
import {trimString, getCountOfWords, getCountUniqueWords, setFirstLatterUpperCase} from "./string_module.js";
import * as bi from './bigIntOperations.js';



// let str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."
// let  s = trimString(str);
// let c = getCountOfWords(str);

//let  u = getCountUniqueWords("Текст, в котором слово текст несколько раз встречается и слово тоже")
//let s = setFirstLatterUpperCase("pppppppPPP")

//let num = bi.subtraction(1209999, 900000)
let s = getCountUniqueWords("Текст:), в котором слово текст несколько раз встречается и \"слово\" тоже")
console.log(s)
