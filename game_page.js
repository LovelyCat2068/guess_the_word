function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case is = " + word);

    charat1 = word.charAt(1);
    console.log(charat1);

    mid = Math.floor(word.length/2);
    charat2 = word.charAt(mid);
    console.log(charat2);

    end = word.length - 1;
    charat3 = word.charAt(end);
    console.log(charat3);

    remove1 = word.replace(charat1, "_");
    remove2 = remove1.replace(charat2, "_");
    remove3 = remove2.replace(charat3, "_");
    console.log(remove3);
    question_word = "<h4 id='word_display'>Q."+remove3+"</h4>"
    text_input = "<br>answer is <input type='text' id='input_check_box'> ";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + text_input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player_1_score = 0;
player_2_score = 0;

question_turn ="player1";
answer_turn = "player2";

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "question turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);
    if(word == answer){
        if(answer_turn == "player2"){
            player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }

        if(answer_turn == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: "+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: "+player1_name;
    }


    if(answer_turn == "player2"){
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: "+player1_name;
    }
    else{
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: "+player2_name;
    }

    document.getElementById("output").innerHTML = "";
    document.getElementById("word").value = "";
}