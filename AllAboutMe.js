function check1() {
  let answer = document.getElementById("sign").value;
  if (answer == "yes" || answer == "y") {
    alert("Absoultly not try again");
  } else {
    alert(
      "Correct! I was Born Dec 13th which makes me a indepedent, free spirited SAGITTARIUS."
    );
  }
}

function check2() {
  let child = document.getElementById("child").value;
  console.log("child", child);

  if (child == "yes") {
    alert("Of Course NOT Try again");
  } else {
    alert("Correct! I have a handsome 3year old son");
  }
}

function check3() {
  let HS = document.getElementById("HS").value;
  console.log("HS", HS);

  if (HS == "yes") {
    alert("Sorry Try again");
  } else {
    alert(
      "Correct! Actually in Highschool I wanted to almost everything and couldn't decide on one thing"
    );
  }
}

function check4() {
  let old = document.getElementById("old").value;
  console.log("old", old);

  if (old == "yes") {
    alert(
      "Thats Correct ! I love farm animals and it would be ideally cool to live on a farm and take care of them"
    );
  } else {
    alert("Incorrect Try Again");
  }
}

function check5() {
  let planet = document.getElementById("planet").value;
  console.log("planet", planet);

  if (planet == "yes") {
    alert(
      "Yes thats correct! I have always loved Juptier. and Yes Earth does tend to be very ghetto"
    );
  } else {
    alert("That isn't right try again");
  }
}

let name = prompt("what's your name before we begin?");

alert(
  "So" +
    " " +
    name +
    " you want to know about the face behind the screen? Thats a odd request usually noone asks any questions. But I guess im in the mood to spill the beans. All you have to do is guess five random facts about me ( with yes or no answers) I will go into details about the fact as a reward. Sounds Fair ?"
);

function check6() {
  let number = " ";
  let retry = 0;
  number = prompt("Number Guess");
  while (number != 4 && retry < 3) {
    if (number < 4) {
      alert("Nope thats too low");
      number = prompt("Please guess again");
    } else if (number > 4) {
      alert("Nope thats too high");
      number = prompt("Please  guess again");
    }
    retry = 1 + retry;
  }

  if (number == 4) {
    alert("You guess right! Yayyy ");
  } else {
    alert("Boooo you Suck");
  }
}

function check7() {
  let cookies = ["chocolate chip", "peanut butter", "sugar"];
  let retry = 0;
  let answerisright = false;
  while (retry < 6 && answerisright == false) {
    retry = 1 + retry
    let cookie = prompt("Guess the cookie flavor");
    let x = 0;
    
    while (x < cookies.length) {
      if (cookie == cookies[x]) {
        answerisright = true;
      }
      x = x + 1;
    }

    if (answerisright && retry < 6) {
      alert("Good job! It only took"+" "+ retry + " " + "times");
    } else {
      alert("Nope thats not it thats "+ " "+ retry + " " + "fails");
    }
  }
  //   retry = 1 + retry;
}

// function promptUser() {
//     let chancesLeft = 6;
//     let cookie = ["chocolate chip", "peanut butter", "sugar"];

//     while (chancesLeft > 0) {
//       const answer = prompt('Guess the cookie flavor!');
//       for(let x = 0; x > cookie.length; x++){
//         if(answer == cookie[x]){
//             let thisNew = cookie[x];
//         }
//       }
//       if (answer === null) {
//         break;
//       }
//       else if (answer === thisNew) {
//         answeredCorrectly = true;
//         break;
//       }
//       chancesLeft--;
//     }
//     if (!answeredCorrectly) {
//       alert('You are out of chances!');
//     }
//     else{
//         alert('You got it right!');
//     }
//   }
