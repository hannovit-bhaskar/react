const getPromise = (value) => {
    return new Promise((res, rej) => {
      if (value > 10) {
        rej("Oops!");
      } else {
        console.log(value+10)
        res(value + 10);
      }
    });
};
  
// const p = getPromise(10);
  
//   p.then((result) => {
//     console.log(result);
//     return result - 10;
//   }).then((result) => {
//     console.log(result);
//     return result * 10;
//   });
  
//   const q = getPromise(12);
  
//   q.then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => {
//       console.log("done");
//     });
  
async function test() {
    try {
        await Promise.all([getPromise(1), getPromise(20)]);
    } catch (e) {
        console.error("error happened");
    }
}
test();
      