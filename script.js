function openCalculator() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("calculator").classList.remove("hidden");
}

function goBack() {
  document.getElementById("calculator").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const bmiValue = document.getElementById("bmi-value");
  const bmiCategory = document.getElementById("bmi-category");
  const dietAdvice = document.getElementById("diet-advice");
  const circle = document.querySelector(".circle");

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Please enter valid values!");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let category = "";
  let advice = "";
  let color = "";
  let angle = 0;

  if (bmi < 18.5) {
    category = "Underweight 😕";
    advice = "Eat calorie-dense foods: nuts, milk, cheese, and rice. Include healthy fats.";
    color = "#f1c40f";
    angle = 60;
  } else if (bmi < 25) {
    category = "Normal weight 😊";
    advice = "Maintain your current diet, exercise 30 minutes a day, and stay hydrated.";
    color = "#2ecc71";
    angle = 120;
  } else if (bmi < 30) {
    category = "Overweight 😐";
    advice = "Reduce sugar and carbs, include vegetables, and walk daily for 45 mins.";
    color = "#e67e22";
    angle = 220;
  } else {
    category = "Obese 😟";
    advice = "Avoid processed foods, eat lean proteins, and consult a dietitian.";
    color = "#e74c3c";
    angle = 300;
  }

  // Update UI
  bmiValue.textContent = bmi;
  bmiCategory.textContent = category;
  dietAdvice.textContent = advice;
  circle.style.background = `conic-gradient(${color} ${angle}deg, #333 ${angle}deg)`;

  // Voice feedback
  const msg = new SpeechSynthesisUtterance(`Your BMI is ${bmi}. ${category}. ${advice}`);
  msg.lang = "en-IN";
  msg.rate = 1;
  msg.pitch = 1;
  speechSynthesis.speak(msg);
}
