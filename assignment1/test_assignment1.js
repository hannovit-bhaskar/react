// Question : What will be printed for the following code:
const getPromise = (value) => {
    return new Promise((res, rej) => {
      if (value > 10) {
        rej("Oops!");
      } else {
        res(value + 10);
      }
    });
};
  
const p = getPromise(10);
p.then((result) => {
    return result - 10;
}).then((result) => {
    console.log(result);
    return result * 10;
});
  
const q = getPromise(12);
  
q.then((result) => console.log(result))
    .catch((error) => console.error(error))
.finally(() => {
    console.log("done");
});
/*
Ans: 
    10
    oops!
    done
*/ 