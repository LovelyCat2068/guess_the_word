function next_page(){
  var player_1_name =    document.getElementById("player1_name").value;
  var player_2_name =   document.getElementById("player2_name").value;

    localStorage.setItem("player1_name", player_1_name);
    localStorage.setItem("player2_name", player_2_name);

    window.location = "game_page.html";
}