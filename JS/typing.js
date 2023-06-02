const skills = ["Full Stack Web Development", "API Programing", "CLI Building", "Socket Programing","DevOps","JQuery"]; // Add your skills here
let currentSkillIndex = 0;
let currentText = "";
let isDeleting = false;
let typingDelay = 250; // Delay between each character typing
let deletingDelay = 250; // Delay after typing complete before deleting

function typeSkillText() {
  const skill = skills[currentSkillIndex];
  if (isDeleting) {
    currentText = skill.substring(0, currentText.length - 1);
  } else {
    currentText = skill.substring(0, currentText.length + 1);
  }
  document.getElementById("typing-text").textContent = currentText;

  let delay = typingDelay;
  if (isDeleting) {
    delay /= 2;
  }

  if (!isDeleting && currentText === skill) {
    delay = deletingDelay;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentSkillIndex++;
    if (currentSkillIndex === skills.length) {
      currentSkillIndex = 0;
    }
  }

  setTimeout(typeSkillText, delay);
}

typeSkillText();
