//ДЗ
// 1. Написать функцию, которая принимает две строки и возвращает самую длинную из них

const strLength = (str1, str2) => (str1.length > str2.length ? str1 : str2);
console.log(strLength("fefs", "jkhfjkshfjkh"));
// 2. Написать функцию, которая принимает массив со строками и возвращает самую короткую строку из массива

const strArr = [
    "hbh",
    "gfng",
    "fgngfn",
    "fgnfgnn",
    "ttntsx",
    "l,gnl;,fn;ll;",
    "fg",
    "ththt",
    "ngggn",
];
const strLengthMin = (arr) => {
    let str = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i].length < str.length ? (str = arr[i]) : str;
    }
    return str;
};

console.log(strLengthMin(strArr));
// *3. Дан массив с разными типами данных. Сформировать новый массив только из числовых элементов из массива arr (почитать про typeof)
const arr = [1, "hello", 66, 89, true, undefined, "hi", 78];
const arrNew = [];
for (let i = 0; i < arr.length; i++) {
    arr[i] / 1 === arr[i] ? arrNew.push(arr[i]) : null;
}
console.log(arrNew);
