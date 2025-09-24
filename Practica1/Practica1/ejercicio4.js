function mayorYMenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];

    for (let num of arr) {
        if (num > mayor) mayor = num;
        if (num < menor) menor = num;
    }

    return { mayor, menor };
}

let obj = mayorYMenor([3,1,5,4,2]);
console.log(obj);
