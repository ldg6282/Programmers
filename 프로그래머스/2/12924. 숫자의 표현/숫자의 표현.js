function solution(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        let sum = i;
        for (let j = i + 1; j <= n; j++) {
            if (sum === n) {
                count++;
                break;
            } else if (sum < n) {
                sum += j;
            } else {
                break;
            }
            
        }
    }
    
    return count + 1;
}