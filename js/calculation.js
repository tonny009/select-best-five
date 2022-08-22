document.getElementById('calculate-btn').addEventListener('click', function () {
    //get per person input from input field----
    const perPlayerCost = inputFieldNumbers('per-player-field');

    //  after adding new player total playercost ---
    const total_player = total_list();
    const TotalPlayerCost = updatedPlayerCost(perPlayerCost, total_player);
    document.getElementById('player-expenses-display').innerText = TotalPlayerCost;

})

document.getElementById('totalcalculate-btn').addEventListener('click', function () {
    // 3 lines from prev portion---
    const perPlayerCost = inputFieldNumbers('per-player-field');
    const total_player = total_list();
    const TotalPlayerCost = updatedPlayerCost(perPlayerCost, total_player);

    const manager = inputFieldNumbers('manager-field');
    const coach = inputFieldNumbers('coach-field');

    const SubTotalCost = TotalPlayerCost + manager + coach;
    document.getElementById('total-display').innerText = SubTotalCost;
})