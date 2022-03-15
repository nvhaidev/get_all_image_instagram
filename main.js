const jsonData = require("./json.json");
const fs = require("fs");

(async () => {
  const json = [];
  const data = [];
  await jsonData.forEach((value, keys) => {
    value.forEach((val, index) => {
      json.push(val);
    });
  });

  const uniqueChars = [...new Set(json)];

  await uniqueChars.forEach((val, key) => {
    const check = val.split(" ")[1].includes("640w");
    if (check) {
      data.push(val);
    }
  });

  fs.writeFileSync("./done.json", JSON.stringify(data));
})();


//scan 
(() => {
  const data = [];
  function clickNext() {
    document
      .querySelector(
        "body > div.RnEpo._Yhr4 > div.Z2Inc._7c9RR > div > div.l8mY4.feth3 > button"
      )
      .click();
    getImage();
    setTimeout(clickNext, 3000);
    console.log(data);
  }
  function getImage() {
    const image = [];
    document.querySelectorAll("img.FFVAD").forEach((value, keys) => {
      image.push(
        document.querySelectorAll("img.FFVAD")[keys].srcset.split(",")[
          document.querySelectorAll("img.FFVAD")[keys].srcset.split(",")
            .length - 1
        ]
      );
    });
    data.push(image);
  }

  clickNext();
})();


//scan

(() => {
  var video = 0;
  const data = [];
  function getImage() {
    document.querySelectorAll("img.FFVAD").forEach((value, keys) => {
      data.push(
        document.querySelectorAll("img.FFVAD")[keys].srcset.split(",")[
          document.querySelectorAll("img.FFVAD")[keys].srcset.split(",")
            .length - 1
        ]
      );
    });
  }

  function pageScroll() {
    getImage();
    window.scrollBy(0, 1000);
    video += 1;
    let max = document.querySelectorAll("img.FFVAD").length;
    if (video > max) {
      console.log(data);
      return true;
    }
    setTimeout(pageScroll, 3000);
  }
  pageScroll();
})();
(async () => {
  const data = [];
  const uniqueChars = [...new Set(jsonData)];

  await uniqueChars.forEach((val, key) => {
    const check = val.split(" ")[1].includes("640w");
    if (check) {
      data.push(val);
    }
  });

  fs.writeFileSync("./done.json", JSON.stringify(data));
})();
