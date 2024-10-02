function solution(s) {
    const newS = s.split(" ");
    let min = "";
    let max = "";
    
    for (let i = 0; i < newS.length; i++) {
        const number = Number(newS[i]);
        
        if (i === 0) {
            min = number;
            max = number;
        }
        
        if (newS[i] < min) {
            min = number;
        }
        
        if (newS[i] > max) {
            max = number;
        }
    }
    
    
    return min + " " + max;
}