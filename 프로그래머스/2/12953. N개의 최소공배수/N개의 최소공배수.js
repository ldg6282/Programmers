function solution(arr) {
    let answer = 1;
    
    while (true) {
        let isBool = true;
        for (let i = 0; i < arr.length; i++) {
            if (answer % arr[i] !== 0) {
                isBool = false;
                break;
            }
        }
        
        if (isBool) {
            return answer;
        }
        
        answer++;
    }
}