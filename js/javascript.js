//Collect the keys, and match them
window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".kbd-key");
  const story = document.querySelector("#story");
  const capsLock = document.querySelector("#blck");
  const shiftKey = document.querySelector('#shift')
  const mod = document.querySelector("#adjustmd");
  const power = document.querySelector("#poweronoff");
  const enterKey = document.querySelector("#enter");
  const space = document.querySelector("#spacebar");
  const tabKey = document.querySelector("#tab");
  const deleteKey = document.querySelector("#backspc");
  const delAll = document.querySelector("#del");

  let newValue = "";
  let isUpperCase = false;
  let isNightMode = false;
  let isCapsLocked = false;
  let isShift = false;

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

  // TabKey

  tabKey.addEventListener("click", () => {
    story.value += "     ";
  });

  // Delete
  deleteKey.addEventListener("click", () => {
    story.value = story.value.slice(0,-1);
  });


  // DelAll key

  delAll.addEventListener("click", () => {
    story.value = story.value.charAt((story.length = -1));
  });

  // Shift In progress
/* In progress : */

  /*shiftKey.addEventListener('click', () => {
    console.log(event.target);
        if (isCapsLocked === false) {
            capsLock.classList.add('focused');
            kbdKey.forEach((button) => {
              console.log(button);
                button.value = button.value.toUpperCase();
            });
            isCapsLocked = true;
            isShift = true;
        }
  }) */
/*
function shift () {
  shiftKey.forEach((button) => {
    button.classList.add('focused');

  });
  if (!isCapsLocked) {
    if (!isShift) {
      kbdKey.forEach((button) => {
        button.value = button.value.toUpperCase();
      });
      isShift = false;
    } else {
      kbdKey.forEach((button) => {
        button.value = button.value.toLowerCase();
      });
      isShift = true;
    }
  } else {    
      if (!isShift) {
       kbdKey.forEach((button) => {
          button.value = button.value.toLowerCase();
        });
        isShift = false;
      } else {
        kbdKey.forEach((button) => {
          button.value = button.value.toUpperCase();
        });
        isShift = true;
      }
  }
}*/

  // The NightMod function

  // Create one event on click
  mod.addEventListener("click", () => {
    if (!isNightMode) {
      isNightMode = true;
      mod.value = "|NIGHTMOD-ON|";
      // Create a new link for add css's nightmod
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/keyboard-night.css";
      // Check this link at the index[0] in link's HEAD
      document.getElementsByTagName("head")[0].appendChild(link);
    } else {
      isNightMode = false;
      mod.value = "|NIGHTMOD-OFF|";
      // Remove the link just created
      document.getElementsByTagName("link")[2].remove();
    } 
  });

  // The Letters upperCase or lowerCase with capsLock
  capsLock.addEventListener("click", () => {
    console.log(event.target);
    if (!isUpperCase) {
      capsLock.value = "";
      isUpperCase = true;
        kbdKey.forEach((button) => {
         // console.log(button);
         button.value = button.value.toUpperCase();
         
               
      });
    } else {
      capsLock.value = "";
      isUpperCase = false;
        kbdKey.forEach((button) => {
         // console.log(button);
         button.value = button.value.toLowerCase();
           
                 
      });
    }
  });
});