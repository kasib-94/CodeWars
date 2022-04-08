function pigIt(str){
    const punctuations = [".", ",", ":", "!", "?"];
    let final = ""
    str.split(" ").forEach(word=>{
        if ( punctuations.includes(word)){
            final = final.concat(word ," ")

        }else{

            let newWord = word.split('')
            newWord[newWord.length]= word[0]
            newWord.shift()
            newWord[newWord.length]= "a"
            newWord[newWord.length]= "y"
            final = final.concat(newWord.toString().replace(/,/g, ""), " ")
        }



    })
    final=final.trim()
    console.log(final)
    return final
}