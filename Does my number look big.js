function narcissistic(value) {
    let sum =0;
    [...value.toString().split('')].forEach(number=>{
        sum +=(Math.pow(parseInt(number), value.toString().length))
    })
    return sum == value ? true : false

}