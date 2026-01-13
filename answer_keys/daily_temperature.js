function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);   // default to 0 (no warmer day)
    const stack = [];                      // will store indices

    for (let i = 0; i < n; i++) {
        const currentTemp = temperatures[i];

        // While stack is not empty AND previous day was colder than today
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < currentTemp) {
            const prevIndex = stack.pop();              // get the waiting day
            answer[prevIndex] = i - prevIndex;          // days waited = current - previous
        }

        // Now push current day (it might wait for warmer later)
        stack.push(i);
    }

    return answer;
}