// Download button
const downloadButton = document.querySelector(".download-button");
const downloadMessage = document.querySelector(".download-message");

const osIsMac = navigator.platform.toLowerCase().includes("mac"); // TODO Change navigator.platform to a non-deprecated value
if (!osIsMac) {
  downloadButton.classList.add("disabled");
  downloadMessage.innerHTML = `The installer can only be run on <strong>macOS</strong>.<br /><button class="btn btn-outline-danger btn-sm m-2" onclick="disableCheck()">Disable Check <small>(Not Recommended)</small></button>`;
}

function disableCheck() {
  downloadButton.classList.remove("disabled");
  downloadMessage.innerHTML = "";

  return "Successfully enabled button.";
}

// Typing effect

const TEXT_CODE = `truth = "This is an easy language too!"\nprint("It's very simplistic. " + truth)\nprint("It also has a lot of potential...")\nstrToIter = "Boa"\n\nfor char : strToIter do {\n    \tprint(char)\n}\n\nfor i = 0 to 5 do {\n    \tprint(i)\n}\n\ni = 0\nwhile i < lenOf(strToIter) do {\n    \tprint(strToIter ? i)\n    \ti += 1\n}\n\nprint("See? Simple, readable Boa code!")`;

const carouselList = [{ text: TEXT_CODE }];

const typeSentence = async (sentence, eleRef, delay = 100) => {
  const letters = sentence.split("");
  let i = 0;

  while (i < letters.length) {
    if (TEXT_CODE.charAt(i) == "\n") {
      document.querySelector("#sentence").innerHTML += "<br />";
    } else if (TEXT_CODE.charAt(i) == "\t") {
      document.querySelector("#sentence").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
};

const waitForMs = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        await typeSentence(carouselList[0].text, "#sentence");

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

lazyLoad(document.querySelector("#sentence"));
