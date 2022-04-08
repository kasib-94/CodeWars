function findOutlier(integers){
    const odds =  [integers[0],integers[1],integers[2]].filter(number =>{
        let result
        return number % 2 !==0;
    })

    if(odds.length>=2 ){

        result = integers.filter(number => {
            return number % 2 == 0;
        });
    }else{

        result = integers.filter(number => {
            if (number %2 ==1 || number %2 ==-1){
                return number
            }
        });
    }
    console.log(result)
    return result[0]

}