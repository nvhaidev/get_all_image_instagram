//CTRL + SHIFT + I

(() => {
    const data = [];
    function clickNext() {
        for (let i = 0; i < document.querySelectorAll("button").length; i++) {
            if (
                document.querySelectorAll("button")[i].innerHTML ===
                '<div class="_abm0"><span style="display: inline-block; transform: rotate(90deg);"><svg aria-label="Next" class="_ab6-" color="#000000" fill="#000000" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg></span></div>'
            ) {
                document.querySelectorAll("button")[i].click();
                break;
            }
        }

        getImage();
        setTimeout(clickNext, 2000);
        console.log(data);
    }
    function getImage() {
        const image = [];
        document.querySelectorAll("img._aagt").forEach((value, keys) => {
            image.push(document.querySelectorAll("img._aagt")[keys]?.src);
        });
        data.push(image);
    }

    clickNext();
})();

vascript: (() => {
    const l = [];
    !(function e() {
        document.querySelectorAll("button").forEach((l) => {
            '<div class="_abm0"><span style="display: inline-block; transform: rotate(90deg);"><svg aria-label="Next" class="_ab6-" color="#000000" fill="#000000" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg></span></div>' ===
                l.innerHTML && l.click();
        }),
            (function () {
                const e = [];
                document.querySelectorAll("img._aagt").forEach((l, o) => {
                    e.push(document.querySelectorAll("img._aagt")[o]?.src);
                }),
                    l.push(e);
            })(),
            setTimeout(e, 3e3),
            console.log(l);
    })();
})();
ja;
