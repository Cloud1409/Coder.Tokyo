/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/
function rearrangeChar(str1, str2) {
  // Viết code tại đây!
  var dem1 = [],
    dem2 = [];
  for (var i = 0; i < 26; i++) {
    dem1[i] = 0;
    dem2[i] = 0;
  }
  if (str1.length != str2.length) {
    return false;
  }
  for (var i = 0; i < str1.length; i++) {
    dem1[str1.charCodeAt(i) - 97]++;
    dem2[str2.charCodeAt(i) - 97]++;
  }
  for (i = 0; i < 26; i++) {
    if (dem1[i] != dem2[i]) {
      return false;
    } else {
      return true;
    }
  }
}
