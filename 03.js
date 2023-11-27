const { makeSleep, run } = require('../tools');

const f1 = makeSleep(async function sum1(a) {
  return a + 1;
});

const f2 = makeSleep(async function mult2(b) {
  return b * 2;
});

// create f3 here!
const f3 = list => Promise.all(list.map(n => f1(n))).then(res => res.reduce((acc, n) => acc + n, 0));

const main = async () => {
  const res = await f3([1, 4, 7, 9, 10]);
  console.log(res);
};


run(main());
