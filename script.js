document.addEventListener("DOMContentLoaded", function () {
    const stateForm = document.getElementById("stateForm");
    const stateInput = document.getElementById("stateInput");
    const output = document.getElementById("output");
    const clearButton = document.getElementById("clearButton");

    const censusData = [
        { abbr: "AL", name: "Alabama", capital: "Montgomery", population: "4,903,185" },
        { abbr: "AK", name: "Alaska", capital: "Juneau", population: "731,545" },
        { abbr: "AZ", name: "Arizona", capital: "Phoenix", population: "7,278,717" },
        { abbr: "AR", name: "Arkansas", capital: "Little Rock", population: "3,017,825" },
        { abbr: "CA", name: "California", capital: "Sacramento", population: "39,512,223" },
        { abbr: "CO", name: "Colorado", capital: "Denver", population: "5,758,736" },
    ];

    stateForm.addEventListener("submit", function (e) {
        e.preventDefault();
        output.innerHTML = ""; // Clear previous output

        const userInput = stateInput.value.trim().toLowerCase(); // Convert user input to lowercase
        let found = false;

        for (const state of censusData) {
            if (userInput === state.abbr.toLowerCase() || userInput === state.name.toLowerCase()) {
                found = true;
                displayStateInfo(state);
                break;
            }
        }

        if (!found) {
            displayErrorMessage("Sorry, we do not have information about this state!");
        }
    });

    clearButton.addEventListener("click", function () {
        stateInput.value = "";
        output.innerHTML = "";
    });

    function displayStateInfo(state) {
        const result = document.createElement("div");
        result.innerHTML = `
            <p>Thanks for your inquiry, here is the information you requested:</p>
            <p>State abbr = ${state.abbr}</p>
            <p>State Name = ${state.name}</p>
            <p>Capital = ${state.capital}</p>
            <p>Population = ${state.population}</p>
        `;
        output.appendChild(result);
    }

    function displayErrorMessage(message) {
        const error = document.createElement("p");
        error.textContent = message;
        output.appendChild(error);
    }
});
