
//Collect the keys, and match them

window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".kbd-key");
  const story = document.querySelector("#story");
  const lock = document.querySelector("#lock");
  const mod = document.querySelector("#adjustmd");
  const power = document.querySelector("#poweronoff");
  const enterKbd = document.querySelector("#enter");
  const space = document.querySelector("#spacebar");
  let newValue = "";
  let isUpperCase = false;
  let isNightMode = false;


  // The Story box
  kbdKey.forEach((value) => {
    value.addEventListener("click", (event) => {
      newValue = event.target.value;
      story.value += newValue;
    });
  });

  // The NightMod function

  // Create one event on click
  mod.addEventListener("click", () => {
    if (!isNightMode) {
      mod.value = "NIGHT-ON";
      // Create a new link for add css's nightmod
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/keyboard-night.css";
      // Check this link at the index[0] in link's HEAD
      document.getElementsByTagName("HEAD")[0].appendChild(link);
      isNightMode = true;
    } else {
      isNightMode = false;
      mod.value = "NIGHT-OFF";
      // Remove the link just created
      document.getElementsByTagName("link")[2].remove();
    } 
  });

  // The Letters upperCase or not
  lock.addEventListener("click", () => {
    if (!isUpperCase) {
      lock.value = "min";
      isUpperCase = true;

      kbdKey.forEach((btn) => {
        btn.value = btn.value.toUpperCase();
      });
    } else {
      lock.value = "MAJ";
      isUpperCase = false;
      kbdKey.forEach((btn) => {
        btn.value = btn.value.toLowerCase();
      });
    }
  });

  /*// Power kbd
  document.getElementById('poweronoff').addEventListener('click', function() {
    this.classList.toggle('on');
    this.classList.toggle('off');
    });*/

  // Enter kbd
  enter.addEventListener("click", () => {
    story.value += "\n";
  });

  // The spacebar
  space.addEventListener("click", () => {
    story.value += " ";
  });


});