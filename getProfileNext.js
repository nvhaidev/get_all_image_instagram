//CTRL + SHIFT + I

(() => {
    const data = [];
    function clickNext() {
        document.querySelectorAll("button").forEach((element) => {
            if (
                element.innerHTML ===
                '<div class="_abm0"><span style="display: inline-block; transform: rotate(90deg);"><svg aria-label="Tiếp" class="_ab6-" color="#000000" fill="#000000" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg></span></div>'
            ) {
                element.click();
            }
        });

        getImage();
        setTimeout(clickNext, 3000);
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
