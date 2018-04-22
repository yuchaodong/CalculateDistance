const URL_AIRPORT_SELECTIONS = '/airport_selections';


function createAutocompleteList(inputDiv, airportSelections) {
    inputDiv.addEventListener('input', function(e) {
        closeAllLists();
        if (!this.value) return false;
        const userInput = this.value.toUpperCase();
    
        const selections = {}
        for (let airport in airportSelections) {
            if (airport.indexOf(userInput) > -1) {
                const airportCode = airportSelections[airport].airportCode;
                selections[airportCode] = airportSelections[airport];
            }
        }

        const autocompleteList = document.createElement('DIV');
        autocompleteList.setAttribute('id', this.id + 'autocomplete-list');
        autocompleteList.setAttribute('class', 'autocomplete-items');
        this.parentNode.appendChild(autocompleteList);

        for (let airportCode in selections) {
            const { airportFullName } = selections[airportCode];
            const autocompleteItem = document.createElement('DIV');
            autocompleteItem.innerHTML = airportFullName;
            autocompleteItem.addEventListener('click', function(e) {
                inputDiv.value = airportFullName;
                inputDiv.setAttribute('data-airport-code', airportCode);
                closeAllLists();
            });
            autocompleteList.appendChild(autocompleteItem);
        }
    });

    function closeAllLists(element) {
        const autocompleteItems = document.getElementsByClassName('autocomplete-items');
        for (let autocompleteItem of autocompleteItems) {
            // if (element !== autocompleteItem && element !== inputDiv) {
                autocompleteItem.parentNode.removeChild(autocompleteItem);
            // }
        }
    }

    document.addEventListener('click', function (e) {
        closeAllLists(e.target);
    });
}


function loadAutocomplete() {
    axios.get(URL_AIRPORT_SELECTIONS)
        .then((response) => {
            const airportInput1 = document.getElementById('airportInput1');
            const airportInput2 = document.getElementById('airportInput2');
            createAutocompleteList(airportInput1, response.data.airportSelections);
            createAutocompleteList(airportInput2, response.data.airportSelections);
        })
        .catch((error) => {
            // TODO
        });    
}

loadAutocomplete();