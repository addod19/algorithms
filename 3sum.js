const threeSum = nums => {
  let result = [],
      i = 0,
      j = 0,
      k = 0;
  
  let len = nums.length;
  
  nums.sort((a,b) => a - b);
  
  for ( i; i < len - 2; i++) {
    if (nums[i] > 0) break;
      
    if (i > 0 && nums[i] === nums[i-1]) continue;
    j = i+1;
    k = len - 1;
      
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
              
        while (nums[j] == nums[j+1]) j++;
        while (nums[k] == nums[k-1]) k--;
        j++;
        k--;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
          k--;
        } else {
          j++;
      }
    }
  }
  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));