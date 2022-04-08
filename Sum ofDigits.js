function digital_root(n) {

    let num

    while (n.toString().length != 1) {
        let sum = 0
        n.toString().split('').forEach(number => {
            num=parseInt(number)
            console.log(typeof num)
            sum+=num;

        })

        n=sum
    }
    return n
}