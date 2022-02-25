// QUIZ JAVASCRIPT 

// ANSWERS IDS
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let sc = document.getElementById("score")


// EVENT LISTENER
document.getElementById("btn").addEventListener("click", check)



// Function
function check(){


let quest1 = q1.value.toLowerCase();
let quest2 = q2.value.toLowerCase();
let quest3 = q3.value.toLowerCase();
let quest4 = q4.value.toLowerCase();
let score = 0;


    if (quest1 === "hestia" || quest1 === "aphrodite" ){
        document.getElementById("a1").innerHTML = "Correct";
        score = score + 1
        
        
} else {
    document.getElementById("a1").innerHTML = "Incorrect"

}

    if (quest2 === "jupiter"){
        document.getElementById("a2").innerHTML = "Correct"
        score = score + 1        
    } else {
        document.getElementById("a2").innerHTML = "Incorrect"
    }


    if (quest3 === "dionysus"){
        document.getElementById("a3").innerHTML = "Correct"
        score = score + 1        
    } else {
        document.getElementById("a3").innerHTML = "Incorrect"
    }


    if (quest4 === "titan"){
        document.getElementById("a4").innerHTML = "Correct"
        score = score + 1        
    } else {
        document.getElementById("a4").innerHTML = "Incorrect"
    }

    sc.innerHTML = score + "/4      (" + score / 4 * 100 + "%)"

    if (score >= 3){
        document.getElementById("msg").innerHTML = "NICE JOB ON THE QUIZ"
    } else {
        document.getElementById("msg").innerHTML = "SORRY TRY HARDER NEXT TIME"
    }
}