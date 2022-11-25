function addUser() {
    player1Name=document.getElementById("player1NameInput").value;
    player2Name=document.getElementById("player2NameInput").value;

    localStorage.setItem("player1_name",player1Name)
    localStorage.setItem("player2_name",player2Name)

    window.location="game_page.html"
    
}