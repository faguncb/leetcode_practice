function lengthOfLongestSubstring(s) {
    // If string is empty → answer is 0
    if (s.length === 0) return 0;

    // This Set will hold characters currently in our window
    const seen = new Set();

    let maxLength = 0;   // best answer so far
    let left = 0;        // left side of window

    // Move right pointer from start to end
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // While we have a duplicate → shrink from left
        while (seen.has(currentChar)) {
            seen.delete(s[left]);   // remove the leftmost char
            left++;                 // move left pointer right
        }

        // Now it's safe — add the new character
        seen.add(currentChar);

        // Current window size = right - left + 1
        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}