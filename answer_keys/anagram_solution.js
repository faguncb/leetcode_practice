function groupAnagrams(strs) {
    // Create a map where key = sorted word, value = array of original words
    const map = new Map();   // or {} if you prefer plain object

    // Go through each word
    for (const word of strs) {
        // Sort the letters to create the "signature"
        const sorted = word.split('').sort().join('');

        // If we already have this signature, add the word to its group
        // If not, create a new group with this word
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(word);
    }

    // Return all the groups (the values of the map)
    return Array.from(map.values());
}