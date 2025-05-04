/**
 * @param {string[]} strs
 * @return {string}
 */
function maiorPrefixoComum(strs) {
    if (strs.length === 0) return " ";
  
    let prefixo = strs[0];
  
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefixo) !== 0) {
        prefixo = prefixo.slice(0, -1); // Remove o último caractere
        if (prefixo === "") return " ";
      }
    }
  
    return prefixo;
  }
  

console.log(maiorPrefixoComum(["flower","flow","flight"])) 
console.log(maiorPrefixoComum(["flower","flow","fligot"])) 
console.log(maiorPrefixoComum(["lower","ad","figt"])) 