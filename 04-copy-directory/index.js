
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

 fs.mkdir(path.join(__dirname, 'files-copy'), {
   recursive: true
}, function(err) {
   if (err) {
      console.log(err)
   } else {
      console.log("New directory successfully created.")
   }
})

// fs.readdir(path.join(__dirname, './files'), { withFileTypes: true }, (error, files) => {       
    
//     if (error) 
//  console.log(error);
// else {
//     const filesArray = files.filter(fileName => fileName.isFile()).map(fileName => fileName.name);

//     const filesLink = filesArray.map(e => './files/' + e);
    
//     const filesCopy = filesLink.map((a) => {
       
//           return fs.copyFile(path.join(__dirname, a), path.join(__dirname, './files-copy'), (error, files) => {
//             if (error) 
//             console.log(error) 
//             else {
//                 return 
//             }
//           });
            
//       });
// }  

// })

// fs.copyFile (path.join(dirname, '../test-css.css'), path.join(dirname, './files-copy'), (err) => {
//     if (err) throw err;
//   console.log('File was copied to destination');
// }) 