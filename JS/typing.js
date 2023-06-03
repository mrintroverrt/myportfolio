const skills = [
  "Full Stack Web Development",
  "API Programming",
  "CLI Building",
  "Socket Programming",
  "DevOps",
  "JQuery",
  "Appium Mobile Testing",
  "Selenium Automation",
  "API Testing",
]; // Add your skills here

const slidingText = document.getElementById("sliding-text");
const slidingTextClone = document.getElementById("sliding-text-clone");

function createSlidingText() {
  let text = "";

  // Concatenate the skills array into a single string
  skills.forEach((skill, index) => {
    text += index !== skills.length - 1 ? skill + " | " : skill;
  });

  slidingText.textContent = text;
  slidingTextClone.textContent = text;
}

createSlidingText();

document.getElementById("redirect-button").addEventListener("click", function() {
  window.location.href = "#home";
});
window.onload = function() {
  // When all resources are loaded, hide the loader
  document.getElementById("onloading").style.display = "none";
};

if (/Mobi/.test(navigator.userAgent)) {
  // If the user is on a mobile device
  var containerWrapper = document.getElementById('container-wrapper');
  containerWrapper.parentNode.removeChild(containerWrapper);
}
