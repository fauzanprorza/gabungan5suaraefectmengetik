var texts = [
  "HELLO, I'm mHFz",
  "I'm a novice developer",
  "Python",
  "IoT",
  "Android Flutter"
];
var speed = 300; // Kecepatan efek pengetikan (ms)
var eraseDelay = 500; // Waktu jeda sebelum penghapusan dimulai (ms)
var eraseSpeed = 250; // Kecepatan efek penghapusan (ms)

var element = document.getElementById("typing-effect");
var textIndex = 0;
var isDeleting = false;
var typingSpeed = speed;

function typeEffect() {
  var currentText = texts[textIndex];

  if (isDeleting) {
    element.textContent = currentText.substring(0, element.textContent.length - 1);
  } else {
    element.textContent = currentText.substring(0, element.textContent.length + 1);
  }

  if (!isDeleting && element.textContent === currentText) {
    typingSpeed = eraseDelay;
    isDeleting = true;
    speak(currentText); // Memainkan suara setelah teks ditampilkan sepenuhnya
  } else if (isDeleting && element.textContent === "") {
    isDeleting = false;
    textIndex++;
    typingSpeed = speed;

    if (textIndex === texts.length) {
      textIndex = 0;
    }
  }

  setTimeout(typeEffect, typingSpeed);
}

function speak(text) {
  var utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

typeEffect();