const findMedianSortedArrays = (nums1, nums2) => { 
  const res = nums1.concat(nums2)
  const sortArr = res.sort( (a,b) => a - b)
  const len = sortArr.length;
  
  const pos = Math.ceil(len / 2);  
  const median =
    len % 2 == 0 ? (sortArr[pos] + sortArr[pos - 1]) / 2 : sortArr[pos - 1];
  
  return median;
};

console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));
console.log(findMedianSortedArrays([2], []));