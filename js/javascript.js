//Collect the keys, and match them
window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".kbd-key");
  const story = document.querySelector("#story");
  const capsLock = document.querySelector("#blck");
  const mod = document.querySelector("#adjustmd");
  const power = document.querySelector("#poweronoff");
  const enterKey = document.querySelector("#enter");
  const space = document.querySelector("#spacebar");
  const deleteBtn = document.querySelector("#backspc");

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

  // Enter
  enterKey.addEventListener("click", () => {
    story.value += "\n";
  });

  // Space
  space.addEventListener("click", () => {
    story.value += " ";
  });

  // Delete
  deleteBtn.addEventListener("click", () => {
    story.value = story.value.charAt((story.length = -1));
  });

  // The NightMod function

  // Create one event on click
  mod.addEventListener("click", () => {
    if (!isNightMode) {
      mod.value = "|NIGHTMOD-ON|";
      // Create a new link for add css's nightmod
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/keyboard-night.css";
      // Check this link at the index[0] in link's HEAD
      document.getElementsByTagName("HEAD")[0].appendChild(link);
      isNightMode = true;
    } else {
      isNightMode = false;
      mod.value = "|NIGHTMOD-OFF|";
      // Remove the link just created
      document.getElementsByTagName("link")[2].remove();
    } 
  });

  // The Letters upperCase or lowerCase with capsLock
  capsLock.addEventListener("click", () => {
    if (!isUpperCase) {
      capsLock.value = "Locked";
      isUpperCase = true;
        kbdKey.forEach((btn) => {
          btn.value = blck.value.toUpperCase();
         
               
      });
    } else {
      capsLock.value = "unlocked";
      isUpperCase = false;
        kbdKey.forEach((btn) => {
          btn.value = blck.value.toLowerCase();
           
                 
      });
    }
  });
});