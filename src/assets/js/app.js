export function loadJs() {
    const jsArr = [
        // { id: "js-1", src: "./assets/js/jquery-1.11.1.min.js" },
        // { id: "js-2", src: "./assets/js/bootstrap.min.js" },
        { id: "js-3", src: "./assets/js/all.js" },
    ];
    const srcArr = document.getElementsByTagName("script");
    for (let i = 0; i < srcArr.length; i++) {
        for (let j = 0; j < jsArr.length; j++) {
            if (srcArr[i].id == jsArr[j].id) {
                srcArr[i].remove();
            }
        }
    }

    const body = document.getElementsByTagName('body')[0];
    for (let i = 0; i < jsArr.length; i++) {
        const script = document.createElement("script");
        script.id = jsArr[i].id;
        script.src = jsArr[i].src;
        script.defer = true;
        body.append(script);
    }
}