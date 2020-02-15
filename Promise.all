/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
var ax = require("axios");

function linkdownPromise(resolve,reject){
  return new Promise(function(link){
    ax.get(link,function(err,data){
      if(err){
        reject(err);
      }
      else{
        resolve(data);
      }
    })
  });
};
Promise.all([
  ax.get(" https://jsonplaceholder.typicode.com/todos/1"),
  ax.get("https://jsonplaceholder.typicode.com/todos/2"),
  ax.get("https://jsonplaceholder.typicode.com/todos/3")
]).then (function(value){
  console.log(value);
}).catch(function(err){
  conso.log(err);
});
