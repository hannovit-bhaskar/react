
const getPromise = (value) => {
    return new Promise((res, rej) => {
      if (value > 10) {
        rej("Oops!");
      } else {
        res(value + 10);
      }
    });
};

// QUESTION: What will the output of this function ?
async function test() {
    try {
        await Promise.all([getPromise(1), getPromise(20)]);
    } catch (e) {
        console.error("error happened");
    }
}
test();
/*
Ans: error hapened
*/