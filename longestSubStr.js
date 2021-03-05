const lengthOfLongestSubstring = s => {
  let maxLen = 0,
      arr = [];  
  for (i = 0; i < s.length; i++) {
    if (arr.length > maxLen) {
      maxLen = arr.length;
    }
    if (arr.includes(s[i])) {
      while (arr.includes(s[i])) {
        arr.shift();
      }
    }
    arr.push(s[i])
  }
  return Math.max(maxLen, arr.length)
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abcdeabc"));