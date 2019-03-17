// We have a global object in node similar to window object when we access the web browser.
// Our global object in browser(window) gives us the different method and properties ( ex: alert, offSet etc)
// Similarly Node doesn't have a window object as global object, it has Global.
// Since we will be writing our code for the server we will be accessing the global object.
// Read the documentationon global object from node.js- documentation site.
// We can use the methods available in global object like window object.
// To run your node.js code all you need to do is write --> node <filename>  <-- in your terminal.

// console.log('My node');
//
// setTimeout(function(){
//   console.log('Timed for 2 seconds')
// }, 2000);
//
// var time = 0;
// var timer = setInterval(function(){
//   time += 2
//   console.log(time, 'seconds have passed')
//   if ( time > 5){
//     clearInterval(timer);
//   }
// }, 2000)

// Few things which can be helpful
// Node can tell us where we are or which directory we are in.
console.log(__dirname);
console.log(__filename);
