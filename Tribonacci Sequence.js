function tribonacci(signature,n){
    tribArr = signature

    for (let i=3;i<n;i++){
        tribArr[i]= tribArr[i-1]+ tribArr[i-2]+ tribArr[i-3]
        console.log("haloi")
    }
    console.log(tribArr)
    tribArr = tribArr.slice(0,n)

    return tribArr

}