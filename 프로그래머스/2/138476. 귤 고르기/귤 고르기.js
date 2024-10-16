function solution(k, tangerine) {
    const tangCount = {};
    
    for (let size of tangerine) {
        tangCount[size] = (tangCount[size] || 0) + 1;
    }
    
    const counts = Object.values(tangCount).sort((a, b) => b - a);
    
    let sum = 0;
    let answer = 0;
    
    for (let i = 0; i < counts.length; i++) {
        sum += counts[i];
        answer++;
        if (sum >= k) break;
    }
    
    return answer;
}