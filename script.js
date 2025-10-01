let currentTeam = null;
let currentAction = null; // "plus" ou "minus"

function openPopup(team, action) {
  currentTeam = team;
  currentAction = action;

  let title = action === "plus" ? "Ajouter des points" : "Retirer des points";
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("pointsInput").value = "";

  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function applyPoints() {
  let points = parseInt(document.getElementById("pointsInput").value);
  if (isNaN(points) || points <= 0) {
    alert("Veuillez entrer un nombre valide.");
    return;
  }

  let scoreElem = document.getElementById("score" + currentTeam);
  let currentScore = parseInt(scoreElem.innerText);

  if (currentAction === "plus") {
    currentScore += points;
  } else {
    currentScore -= points;
    if (currentScore < 0) currentScore = 0;
  }

  scoreElem.innerText = currentScore;
  closePopup();
}

function resetScores() {
  document.getElementById("scoreA").innerText = "0";
  document.getElementById("scoreB").innerText = "0";
}