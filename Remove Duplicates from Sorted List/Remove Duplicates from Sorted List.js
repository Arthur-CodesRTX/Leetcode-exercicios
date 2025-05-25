var deleteDuplicates = function(head) {
    let atual = head; 

    while (atual !== null) {
        let proximo = atual.next; 

        
        while (proximo !== null && atual.val === proximo.val) {
            proximo = proximo.next; 
        }

        atual.next = proximo; 
        atual = proximo; 
    }

    return head;
};


console.log(deleteDuplicates([1,1,2]))
console.log(deleteDuplicates([1,1,2,3,3]))
