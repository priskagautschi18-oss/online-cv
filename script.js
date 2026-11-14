const photo = document.getElementById("profile-photo");
const funFactOutput = document.getElementById("fun-fact");

const funFacts = [
  "I won first place in the FRAISA ToolChampions competition.",
  "I completed a two-month language stay in Canada.",
  "I am a certified IPMA Level D Project Management Associate.",
  "In winter, I enjoy skiing and snowboarding."
];

let lastFactNumber = -1;

function createRandomNumber() {
  let randomNumber = Math.floor(Math.random() * funFacts.length);

  while (randomNumber === lastFactNumber) {
    randomNumber = Math.floor(Math.random() * funFacts.length);
  }

  return randomNumber;
}

function showFunFact() {
  const randomNumber = createRandomNumber();

  funFactOutput.textContent = funFacts[randomNumber];
  lastFactNumber = randomNumber;
}

photo.addEventListener("click", showFunFact);

console.log("I see you sneaking in the console :D");