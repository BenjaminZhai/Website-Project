// QUIZ JAVASCRIPT 

// ANSWERS IDS
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");

// Make score 0
// let score = 0;


// EVENT LISTENER
document.getElementById("btn").addEventListener("click", check)



// Function
function check(){


let quest1 = q1.value.toLowerCase();
let quest2 = q2.value.toLowerCase();
let quest3 = q3.value.toLowerCase();
let quest4 = q4.value.toLowerCase();



    if (quest1 === "hestia" || quest1 === "aphrodite" ){
        document.getElementById("a1").innerHTML = "Correct"
        
} else {
    document.getElementById("a1").innerHTML = "Incorrect"

}

    if (quest2 === "jupiter"){
        document.getElementById("a2").innerHTML = "Correct"
    } else {
        document.getElementById("a2").innerHTML = "Incorrect"
    }


    if (quest3 === "dionysus"){
        document.getElementById("a3").innerHTML = "Correct"
    } else {
        document.getElementById("a3").innerHTML = "Incorrect"
    }


    if (quest4 === "titan"){
        document.getElementById("a4").innerHTML = "Correct"
    } else {
        document.getElementById("a4").innerHTML = "Incorrect"
    }
}
















































// if ()
// doucument.getElementById("a1").innerHTML = "Correct"
// doucument.getElementById("a2").innerHTML = "Correct"
// doucument.getElementById("a3").innerHTML = "Correct"
// doucument.getElementById("a4").innerHTML = "Correct"
// doucument.getElementById("score").innerHTML = "4/4"
// } else if(quest1 !== "hestia" && quest2 === "jupiter" && quest3 === "dionysus" && quest4 === "titan"){
// doucument.getElementById("a1").innerHTML = "Incorrect"
// doucument.getElementById("a2").innerHTML = "Correct"
// doucument.getElementById("a3").innerHTML = "Correct"
// doucument.getElementById("a4").innerHTML = "Correct"
// doucument.getElementById("score").innerHTML = "3/4"
// } else if(quest1 === "hestia" && quest2 !== "jupiter" && quest3 === "dionysus" && quest4 === "titan"){
// doucument.getElementById("a1").innerHTML = "Correct"
// doucument.getElementById("a2").innerHTML = "Incorrect"
// doucument.getElementById("a3").innerHTML = "Correct"
// doucument.getElementById("a4").innerHTML = "Correct"
// doucument.getElementById("score").innerHTML = "3/4"
// } else if(quest1 === "hestia" && quest2 === "jupiter" && quest3 !== "dionysus" && quest4 === "titan"){
// doucument.getElementById("a1").innerHTML = "Correct"
// doucument.getElementById("a2").innerHTML = "Correct"
// doucument.getElementById("a3").innerHTML = "Incorrect"
// doucument.getElementById("a4").innerHTML = "Correct"
// doucument.getElementById("score").innerHTML = "3/4"
// } else if(quest1 === "hestia" && quest2 === "jupiter" && quest3 === "dionysus" && quest4 !== "titan"){
// doucument.getElementById("a1").innerHTML = "Correct"
// doucument.getElementById("a2").innerHTML = "Correct"
// doucument.getElementById("a3").innerHTML = "Correct"
// doucument.getElementById("a4").innerHTML = "Incorrect"
// doucument.getElementById("score").innerHTML = "3/4"
// } else if(quest1 !== "hestia" && quest2 !== "jupiter" && quest3 === "dionysus" && quest4 === "titan"){
// doucument.getElementById("a1").innerHTML = "Incorrect"
// doucument.getElementById("a2").innerHTML = "Incorrect"
// doucument.getElementById("a3").innerHTML = "Correct"
// doucument.getElementById("a4").innerHTML = "Correct"
// doucument.getElementById("score").innerHTML = "2/4"
// } else if(quest1 !== "hestia" && quest2 === "jupiter" && quest3 !== "dionysus" && quest4 === "titan"){
// doucument.getElementById("a1").innerHTML = "Incorrect"
// doucument.getElementById("a2").innerHTML = "correct"
// doucument.getElementById("a3").innerHTML = "Incorrect"
// doucument.getElementById("a4").innerHTML = "Correct"
// doucument.getElementById("score").innerHTML = "2/4"
// } else if(quest1 !== "hestia" && quest2 === "jupiter" && quest3 === "dionysus" && quest4 !== "titan"){
// doucument.getElementById("a1").innerHTML = "Incorrect"
// doucument.getElementById("a2").innerHTML = "Correct"
// doucument.getElementById("a3").innerHTML = "Correct"
// doucument.getElementById("a4").innerHTML = "Incorrect"
// doucument.getElementById("score").innerHTML = "2/4"
// } else if(quest1 === "hestia" && quest2 !== "jupiter" && quest3 !== "dionysus" && quest4 === "titan"){
// doucument.getElementById("a1").innerHTML = "Correct"
// doucument.getElementById("a2").innerHTML = "Incorrect"
// doucument.getElementById("a3").innerHTML = "Incorrect"
// doucument.getElementById("a4").innerHTML = "Correct"
// doucument.getElementById("score").innerHTML = "2/4"
// } else if(quest1 === "hestia" && quest2 !== "jupiter" && quest3 === "dionysus" && quest4 !== "titan"){
// doucument.getElementById("a1").innerHTML = "Correct"
// doucument.getElementById("a2").innerHTML = "Incorrect"
// doucument.getElementById("a3").innerHTML = "Correct"
// doucument.getElementById("a4").innerHTML = "Incorrect"
// doucument.getElementById("score").innerHTML = "2/4"
// } else if(quest1 !== "hestia" && quest2 === "jupiter" && quest3 !== "dionysus" && quest4 !== "titan"){
// doucument.getElementById("a1").innerHTML = "Correct"
// doucument.getElementById("a2").innerHTML = "Correct"
// doucument.getElementById("a3").innerHTML = "Incorrect"
// doucument.getElementById("a4").innerHTML = "Incorrect"
// doucument.getElementById("score").innerHTML = "2/4"
// } else if(quest1 !== "hestia" && quest2 !== "jupiter" && quest3 !== "dionysus" && quest4 === "titan"){
// alert("1/4")
// } else if(quest1 !== "hestia" && quest2 !== "jupiter" && quest3 === "dionysus" && quest4 !== "titan"){
// alert("1/4")
// } else if(quest1 !== "hestia" && quest2 === "jupiter" && quest3 !== "dionysus" && quest4 !== "titan"){
// alert("1/4")
// } else if(quest1 === "hestia" && quest2 !== "jupiter" && quest3 !== "dionysus" && quest4 !== "titan"){
// alert("1/4")
// } else if(quest1 !== "hestia" && quest2 !== "jupiter" && quest3 !== "dionysus" && quest4 !== "titan"){
// alert("0/4")
// }