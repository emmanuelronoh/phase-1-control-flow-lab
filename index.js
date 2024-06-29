
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!'
  } 
  if (feet <= 400 && feet >2000) {
    return "I will gladly take your twenty bucks."
  }
  else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks."
  }
   else {
    return "No can do."
  }
  }

  function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  }


  function switchOnCharmFromTip(tip) {
    if (tip === "generous") {
      return "Thank you so much.";
    } else if (tip === "not as generous") {
      return "Thank you.";
    } else {
      return "Bye.";
    }
  }

