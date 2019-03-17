/*
  Node JS gives us a core module called fs which helps us to read and write files in our computer.
  Pretty useful module.
*/

var fs = require('fs');

/*
  fs provide the method readFileSync() which a synchronous method. Blocking code
  synchronous method --> will not let the program flow to next line untill the excution is completed.
                        In this case untill the fs module has read the txt file it will stop at that point
                        and only go to next line once the read process is complete.

  Arguments required for the readFileSync():
      ---> First Argument: the file from where we want to read.
      ---> Second Argument: encoding standard. utf8 is the encoding we can read in otherwies it will return bytes.
*/
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

/*
  To write to new a file fs provides writeFileSync() methods.
      first argument--> the name of the new file you want to write in
      second argument --> the content ypu want to write in that file.
 */
fs.writeFileSync('writeMe.txt', readMe);
