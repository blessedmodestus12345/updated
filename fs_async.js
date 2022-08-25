//writting to a file
const {readFile, writeFile, write} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err,result) => {
    if (err){
        console.log(err);
        return
    }
     const firstTxt = result;
     readFile('./content/second.txt', 'utf8', (err, result) =>{
      if(err){
          console.log(err);
          return
      }
      const secondTxt = result;
      writeFile('./content/result-async.txt', 
      `here is the result : ${firstTxt}, ${secondTxt}`,
      (err, result)=>{
          if(err) {
              console.log(err);
              return
          }
          console.log('starting next task');
      })
     })
})
console.log('done with this task');


