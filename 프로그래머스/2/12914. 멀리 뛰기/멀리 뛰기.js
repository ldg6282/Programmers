function solution(n) {
    if (n <= 2) return n;
    
    let a = 1, b = 2;
    
    for (let i = 3; i <= n; i++) {
        let c = (a + b) % 1234567;
        a = b;
        b = c;
    }
    
    return b;
}