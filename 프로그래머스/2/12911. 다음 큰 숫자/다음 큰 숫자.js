function solution(n) {
    let num = n;
    const countOne = (n.toString(2)).split("1").length - 1;
    
    
    while(true) {
        num += 1;
        const numCountOne = (num.toString(2)).split("1").length - 1;
        
        if (numCountOne === countOne) {
            return num;
        }
    }
}