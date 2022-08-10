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
                "#mount_0_0_wM > div > div > div > div:nth-child(4) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div._a3gq._ab-1 > div > div > div._aaqg._aaqh > button"
            )
            .click();

        getImage();
        setTimeout(clickNext, 3000);
        console.log(data);
    }
    function getImage() {
        const image = [];
        document.querySelectorAll("img._aagt").forEach((value, keys) => {
            image.push(
                document.querySelectorAll("img._aagt")[keys].srcset.split(",")[
                    document
                        .querySelectorAll("img._aagt")
                        [keys].srcset.split(",").length - 1
                ]
            );
        });
        data.push(image);
    }

    clickNext();
})();

(() => {
    var video = 0;
    const data = [];
    function getImage() {
        document.querySelectorAll("img._aagt").forEach((value, keys) => {
            data.push(
                document.querySelectorAll("img._aagt")[keys].srcset.split(",")[
                    document
                        .querySelectorAll("img._aagt")
                        [keys].srcset.split(",").length - 1
                ]
            );
        });
    }

    function pageScroll() {
        getImage();
        window.scrollBy(0, 1000);
        video += 1;
        let max = document.querySelectorAll("img._aagt").length;
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
