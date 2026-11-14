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


const projectImageButton =
  document.getElementById("project-image-button");

const projectImage =
  document.getElementById("project-image");

const projectCaption =
  document.getElementById("project-caption");

const projectImages = [
  "img/technical-project.jpg",
  "img/technical-project2.jpg",
  "img/technical-project3.jpg"
];

let currentProjectImage = 0;

function changeProjectImage() {
  currentProjectImage = currentProjectImage + 1;

  if (currentProjectImage === projectImages.length) {
    currentProjectImage = 0;
  }

  const imageNumber = currentProjectImage + 1;

  projectImage.src = projectImages[currentProjectImage];

  projectImage.alt =
    "View " + imageNumber + " of my technical project";

  projectCaption.textContent =
    "View " + imageNumber + " of my technical project";
}

projectImageButton.addEventListener(
  "click",
  changeProjectImage
);


console.log("I see you sneaking in the console :D");