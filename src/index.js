const studentA = {
  name: "A",
  score: 100
};

//const name = studentA.name;
//const score = studentA.score;
const { name, score: myScore } = studentA;

//const { name, score } = studentA;
//const { name, score:myScore } = studentA;

console.log(`${name} : ${myScore}`);
//console.log(`${name} : ${myScore}`);
