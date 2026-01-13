function lengthOfLongestSubstring(s) {
    // Edge case: empty string
    if (s.length === 0) return 0;

    // Map to store: char → last seen index
    const lastSeen = {};   // or use new Map() if you prefer

    let maxLength = 0;
    let left = 0;          // start of current window

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If we've seen this char AND its last position is inside current window
        if (lastSeen[char] !== undefined && lastSeen[char] >= left) {
            // Jump left to right after the previous occurrence
            left = lastSeen[char] + 1;
        }

        // Update the last seen index of this char (always update!)
        lastSeen[char] = right;

        // Current window length
        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}