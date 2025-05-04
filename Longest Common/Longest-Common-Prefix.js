/**
 * @param {string[]} strs
 * @return {string}
 */
function maiorPrefixoComum(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
      while (!strs[i].startsWith(prefix)) {
          prefix = prefix.slice(0, -1);
          if (prefix === "") return "";
      }
  }

  return prefix;
  }
  

console.log(maiorPrefixoComum(["flower","flow","flight"])) 
console.log(maiorPrefixoComum(["flower","flow","fligot"])) 
console.log(maiorPrefixoComum(["lower","ad","figt"])) 