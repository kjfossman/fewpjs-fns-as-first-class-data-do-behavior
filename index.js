/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string){
  let hour = parseInt(string);
  if (hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 25) return "Good Evening";
  return "Not a Valid Time Buddy"
}

function displayMessage(string){
  let greeting = document.getElementById("greeting")
  greeting.innerText = string
  
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
