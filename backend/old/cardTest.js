function numberToDate(number) {
    let d = new Date(number);
    return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
}

console.log(Date.now())
console.log(numberToDate(Date.now()));
