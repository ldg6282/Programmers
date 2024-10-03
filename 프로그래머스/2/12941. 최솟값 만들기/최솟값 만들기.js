function solution(A,B){
    const newA = A.sort((a, b) => a - b);
    const newB = B.sort((a, b) => b - a);
    let answer = 0;
    
    for (let i = 0; i < newA.length; i++) {
        answer = answer + newA[i] * newB[i];
    }

    return answer;
}