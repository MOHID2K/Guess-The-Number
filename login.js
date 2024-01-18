// Create the login function here.
function Login() 
{
    player_name = document.getElementById("playername").value;
    localStorage.setItem("player", player_name);
    window.location = "gamepage.html";
}

