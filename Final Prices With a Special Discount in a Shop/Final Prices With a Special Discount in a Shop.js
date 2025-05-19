/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
    const n = prices.length;
    const answer = [...prices];
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            const idx = stack.pop();
            answer[idx] -= prices[i];
        }
        stack.push(i);
    }

    return answer;
}

console.log(finalPrices([8,4,6,2,3]))
console.log(finalPrices([1,2,3,4,5]))