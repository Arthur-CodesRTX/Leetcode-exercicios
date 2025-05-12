function intToRoman(number) {
    const romanMap = {
        1: "I", 4: "IV", 5: "V", 9: "IX",
        10: "X", 40: "XL", 50: "L", 90: "XC",
        100: "C", 400: "CD", 500: "D", 900: "CM",
        1000: "M"
    };

    let n = String(number);
    let total = "";
    const casas = [1000, 100, 10, 1]; // milhar, centena, dezena, unidade

    let idxCasa = casas.length - n.length;

    for (let i = 0; i < n.length; i++) {
        let digito = Number(n[i]);
        let fator = casas[idxCasa++];
        let valor = digito * fator;

        // Montar a parte romana desse valor
        total += converterDigito(valor, fator, romanMap);
    }

    return total;
}

function converterDigito(valor, base, romanMap) {
    // Tenta direto
    if (romanMap[valor]) return romanMap[valor];

    let resultado = "";
    const chaves = Object.keys(romanMap).map(Number).sort((a, b) => b - a);

    for (const k of chaves) {
        while (valor >= k) {
            resultado += romanMap[k];
            valor -= k;
        }
    }

    return resultado;
}

console.log(intToRoman(1)) // I
console.log(intToRoman(2)) // II
console.log(intToRoman(15)) // XV
console.log(intToRoman(236))


// for(let i = n.length - 1; i >= 0 ; i--){

//         let atual = n[i]
//         let proximo = n[i - 1]

//         if(atual > proximo){
//             total += romanMap[number - atual];
//             total += romanMap[atual]
//             // i++;
//         } else{
//             total += romanMap[n[i]];
//         }

//     }
//     return total;