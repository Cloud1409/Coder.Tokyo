/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/
function findMostFrequent(arr) {
  // Viết code tại đây!
  var cout = arr.reduce(function(allName, name) {
    if (name in allName) {
      allName[name]++;
    } else {
      allName[name] = 1;
    }
    return allName;
  }, {});
  var arr = [];
  var mang = [];
  for (let value in cout) {
    arr.push(Number(cout[value]));
  }
 arr.sort(function(a,b){
     return b-a;
 })
var max = arr[0];
for (let value in cout) {
  if (cout[value] == max) {
    mang.push(Number(value));
  }
}
return mang;
}
