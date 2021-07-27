let array1 = ['|', '/', '-', '\\', '|', '\/', '-', '\\' ];

const func1 = function(arr) {
  let delay = 100;
  for(let ele of arr){
    delay += 200
    //console.log(ele);
    setTimeout(() => {
      process.stdout.write('\r' + ele + ' ') ;
    }, delay);
  }
};

func1(array1);


