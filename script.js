// Load saved eggs from browser storage
let eggs = localStorage.getItem("eggs") 
            ? parseInt(localStorage.getItem("eggs")) 
            : 0;

document.getElementById("eggCount").innerText = eggs;

// Function to add eggs
function addEggs() {
    let add = parseInt(document.getElementById("addEggInput").value);
    if (!add || add < 0) return alert("Enter a valid number!");

    eggs += add;
    updateUI();
    document.getElementById("addEggInput").value = "";
}

// Function to use / consume eggs
function useEggs() {
    let use = parseInt(document.getElementById("useEggInput").value);
    if (!use || use < 0) return alert("Enter a valid number!");

    if (use > eggs) {
        return alert("Not enough eggs!");
    }

    eggs -= use;
    updateUI();
    document.getElementById("useEggInput").value = "";
}

// Reset eggs
function resetEggs() {
    if (confirm("Are you sure you want to reset?")) {
        eggs = 0;
        updateUI();
    }
}

// Update UI and save
function updateUI() {
    document.getElementById("eggCount").innerText = eggs;
    localStorage.setItem("eggs", eggs);
}
