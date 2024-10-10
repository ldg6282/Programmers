function solution(brown, yellow) {
    let result = [];
    
    for (let i = 1; i <= yellow; i++) {
        const newY = yellow / i;
        
        if (((newY + 2) * 2 + i * 2) === brown) {
            result = [i + 2, newY + 2];
        }
    }
    
    return result;
}