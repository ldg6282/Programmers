function solution(n, words) {
    let answer = [0, 0];
    let arr = [];
    
    for (let i = 0; i < words.length; i++) {
        if (arr.length === 0) {
            arr.push(words[i]);
        } else {
            const prev = arr[arr.length - 1];
            const now = words[i];
            
            if (prev[prev.length - 1] === now[0] && !arr.includes(now) && now.length > 1) {
                arr.push(now);
            } else {
                answer = [(i % n) + 1, Math.floor(i / n) + 1];
                break;
            }
        }
    }
    
    return answer;
}