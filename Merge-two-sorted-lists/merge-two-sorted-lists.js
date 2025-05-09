function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Função para mesclar duas listas ordenadas
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); // Nó temporário para facilitar a manipulação
    let current = dummy;

    // Enquanto as duas listas tiverem elementos
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;   // adiciona o menor nó
            list1 = list1.next;     // avança na lista1
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;     // avança na lista mesclada
    }

    // Anexa o resto da lista que ainda tiver nós
    current.next = list1 !== null ? list1 : list2;

    return dummy.next; // retorna o início da lista mesclada
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))
console.log(mergeTwoLists([],[]))
console.log(mergeTwoLists([],[0]))


// for(let i = 0; i < list1.length; i++){
//     listResultado.push(list1[i])
// };

// for(let i = 0; i < list2.length; i++){
//     listResultado.push(list2[i])
// };

// listResultado.sort();

// if(listResultado.length === 0){
//     return null
// }

// return listResultado;