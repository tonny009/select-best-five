// function to get any thing by calling id----
function getNamesbyId(player_name) {
    const playerName = document.getElementById(player_name);
    const display_playerName = playerName.innerText;
    return display_playerName;
}


//function to check total number selected
function totalNumberChecking(name) {
    const total = document.querySelectorAll('.total_selected_player li')//getting here total selected players in list
    const totalPlayers = total.length;
    if (totalPlayers === 5) {
        alert("Sorry ...You have already selected 5 players! ");
    }
    else {
        createNewListItem(name);
    }
}

// get total players count---
function total_list() {
    const total = document.querySelectorAll('.total_selected_player li')//getting here total selected players in list
    const totalPlayers = total.length;
    return totalPlayers;
}



//function to add new list with selected button clicking
function createNewListItem(name) {
    const newList = document.createElement('li');
    newList.innerText = name;
    document.getElementById('total-number').appendChild(newList);

}

function updatedPlayerCost(player_cost, totalplayer) {
    const newplayerCost = player_cost * totalplayer;
    return newplayerCost;
}

//calculation field inputs getting ...
function inputFieldNumbers(inputId) {
    const prevAmount = document.getElementById(inputId);
    const PrevAmountString = prevAmount.value;
    const finalAmount = parseInt(PrevAmountString);
    return finalAmount;
}

