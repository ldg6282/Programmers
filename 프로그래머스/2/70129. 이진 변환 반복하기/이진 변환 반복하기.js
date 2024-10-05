function solution(s) {
    let count = 0;
    let removeZero = 0;

    while (s !== "1") {
        let newS = "";
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "1") {
                newS += s[i];
            } else {
                removeZero++;
            }
        }

        s = newS.length.toString(2);
        count++;
    }

    return [count, removeZero];
}