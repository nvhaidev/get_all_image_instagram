//CTRL + SHIFT + I

(() => {
    var video = 0;
    const data = [];
    function getImage() {
        document.querySelectorAll("img._aagt").forEach((value, keys) => {
            data.push(document.querySelectorAll("img._aagt")[keys].src);
        });
    }
    function downloadLink(link) {
        const uid = window.location.href.split("/")[3];
        const file = new Blob([JSON.stringify(link)], { type: "text/plain" });
        const url = window.URL.createObjectURL(file);
        const b = document.createElement("a");
        b.style.display = "none";
        b.href = url;
        b.setAttribute("download", `${uid}-phamthanhnam.com.txt`);
        b.download = `${uid}-phamthanhnam.com.txt`;
        document.body.appendChild(b);
        b.click();
        window.URL.revokeObjectURL(url);
    }
    function pageScroll() {
        getImage();
        window.scrollBy(0, 1000);
        video += 1;
        let max = document.querySelectorAll("img._aagt").length;
        if (video > max) {
            console.log(data);
            downloadLink(data);
            return true;
        }
        setTimeout(pageScroll, 3000);
    }
    pageScroll();
})();