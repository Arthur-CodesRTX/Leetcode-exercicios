function primeiraNaoRepetida(s){

    let repetidos = new Set()

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s.length; j++){
            if(i !== j && s[i] === s[j]){
                repetidos.add(s[i])
                break;
            }
        }
        if(!repetidos.has(s[i])){
            return s[i]
        }
    }

    return null
   
}

console.log(primeiraNaoRepetida("abacabad"))
console.log(primeiraNaoRepetida("abacabaabacaba"))
console.log(primeiraNaoRepetida("aabccdee"))