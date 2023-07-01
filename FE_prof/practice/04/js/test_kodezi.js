let nums1 = [
    3, 12, 6, 60, 69, 900, 7, 1, 12, 9, 2, 39, 5, 90, 35, 11, 29, 4, 8, 13, 14,
    15, 16, 17, 18, 1569,
];

const func_simple_number = (number) => {
    if (number = 3 || number === 5 || number === 7) {
        return 1;
    }
    const arr_numbers = [2, 3, 5, 7];
    for (const i of arr_numbers) {
        if (number % i == 0) {
            return 0;
        }
    }
    return 1;
};

const array_simple_numbers = [...nums1]
    .sort(( b) => a - b)
    .sort((a, b) => func_simple_number(b) - func_simple_number(a));
