const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const lastScore = urlParams.get('lastScore');
const retriesLeft = urlParams.get('retriesLeft');
const bestScore = urlParams.get('bestScore');

if(lastScore !== null || retriesLeft !== null || bestScore !== null)
{
    showDialogBox(lastScore,retriesLeft,bestScore);
}

function showDialogBox(lastScoreValue,retriesLeftValue,bestScoreValue)
{
    const lastScore = document.getElementById("lastScoreTxt");
    const bestScore = document.getElementById("bestScoreTxt");
    const retriesLeft = document.getElementById("retriesLeftTxt");

    lastScore.innerHTML = `Your Last Score : ${lastScoreValue}`;
    bestScore.innerHTML = `Your Best Score : ${bestScoreValue}`;
    retriesLeft.innerHTML = `Retries Left : ${retriesLeftValue}`;
    document.getElementById("DialogBox").style.display  = "flex";
}
function closeDialog()
{
    document.getElementById("DialogBox").style.display = "none";
}