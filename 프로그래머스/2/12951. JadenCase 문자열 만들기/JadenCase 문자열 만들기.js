function solution(s) {
    const answer = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i - 1] === " " || i === 0) {
        answer.push(s[i].toUpperCase());
      } else if (!isNaN(s[i - 1])) {
        answer.push(s[i].toLowerCase());
      } else {
        answer.push(s[i].toLowerCase());
      }
    }
    
    return answer.toString().replaceAll(",", "");
}