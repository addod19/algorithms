const maxArea = height => {
  let maxx = 0,
    len = height.length;
    
  for (let i = 0, j = len - 1; i < len; i++) {     
    while (i < j) {
      minn = Math.min(height[i], height[j]);
      maxx = Math.max(maxx, minn * (j - i));
      if (height[i] < height[j]) {
        i++;
      }
      else {
        j--
      }
    }
  } 
  return maxx;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));