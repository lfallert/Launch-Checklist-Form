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
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json();
      }).then(function(json) {
            let missionTarget = document.getElementById("missionTarget");
            let index = json.length;
            let randIndex = Math.floor(Math.random() * index);
            
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randIndex].name}</li>
               <li>Diameter: ${json[randIndex].diameter}</li>
               <li>Star: ${json[randIndex].star}</li>
               <li>Distance from Earth: ${json[randIndex].distance}</li>
               <li>Number of Moons: ${json[randIndex].moons}</li>
            </ol>
            <img src="${json[randIndex].image}">
            `;
         });

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
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");
   
   
   // start of form validation
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            window.alert("All fields are required!");   
      } else {
         if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            window.alert("Make sure to enter valid information for each field!"); 
         }
      }  
      
   }); // end of form validation


   //DOM manipulation
   function getLaunchReport() {
      faultyItems.style.visibility = "visible";
      pilotName.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;                 
      copilotName.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`;
      
    
    //Check if fuel level and cargo mass are acceptable
    if (fuelLevelInput.value < 10000) {
        // DOM manipulation for fuel level

        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch.";
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = "red";
    }
  
    if (cargoMassInput.value > 10000) {
        // DOM manipulation for cargo mass
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch.";
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = "red";
    }

    if (cargoMassInput.value < 10000 && fuelLevelInput.value > 10000) {
       // DOM manipulation for mission success
      

      document.getElementById("fuelStatus").innerHTML = "Fuel level is high enough for launch.";
      document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch.";
      launchStatus.innerHTML = "Shuttle is ready for launch.";
      launchStatus.style.color = "green";
    }
   }

   button.addEventListener("click", getLaunchReport);

}

 


