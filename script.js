// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
// This makes sure the page is loaded prior to running the rest of the script
window.addEventListener("load", function() {
   console.log('Page loaded.');
   //TODO Fetch planetary data JSON here
   init();
});

function init() {

   // variables
   let form = document.querySelector("form");
   let button = document.getElementById("formSubmit");
   let pilotName = document.getElementById("pilotStatus");
   let copilotName = document.getElementById("copilotStatus");

   let pilotNameInput = document.getElementById("pilotName");
   let copilotNameInput = document.getElementById("copilotName");
   let fuelLevelInput = document.getElementById("fuelLevel");
   let cargoMassInput = document.getElementById("cargoMass");
   
   // start of form validation
   form.addEventListener("submit", function(event) {
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            window.alert("All fields are required!");
            event.preventDefault();
      } else {
         if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            window.alert("Make sure to enter valid information for each field!");
            event.preventDefault();
         }
      }  

   }); // end of form validation

   function getLaunchReport() {
      pilotName.innerHTML = `1. ${pilotNameInput.value} is ready for launch`;
      copilotName.innerHTML = `2. ${copilotNameInput.value} is ready for launch`;
   }

   button.addEventListener("click", getLaunchReport);
}

