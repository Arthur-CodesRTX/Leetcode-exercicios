var mergeTwoLists = function(list1, list2) {
    
    function ListNode(valor, proximo) {
        this.val = valor;
        this.next = proximo;
    }

    function criaLista() {
        ListNode(list1,list2)
        let no2 = new ListNode(list2);        
        let no1 = new ListNode(list1, no2);
        let listResultado = no1.val;
        
            for(let i = 0; i < no2.val.length; i++){
                listResultado.push(no2.val[i])
            }
            listResultado.sort()
        
    
        return listResultado
    }

    return criaLista()
    
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