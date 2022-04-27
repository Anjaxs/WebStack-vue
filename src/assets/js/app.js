export function loadJs() {
    const jsArr = [
        { id: "js-1", src: "./assets/js/jquery-1.11.1.min.js" },
        { id: "js-2", src: "./assets/js/bootstrap.min.js" },
        { id: "js-3", src: "./assets/js/TweenMax.min.js" },
        { id: "js-4", src: "./assets/js/resizeable.js" },
        { id: "js-5", src: "./assets/js/joinable.js" },
        { id: "js-6", src: "./assets/js/xenon-api.js" },
        { id: "js-7", src: "./assets/js/xenon-toggles.js" },
        { id: "js-8", src: "./assets/js/xenon-custom.js" },
        { id: "js-9", src: "./assets/js/app.js" },
    ];
    const srcArr = document.getElementsByTagName("script");
    for (let i = 0; i < srcArr.length; i++) {
        for (let j = 0; j < jsArr.length; j++) {
            // console.log(`srcArr[${i}]`, srcArr[i]);
            // console.log(`jsArr[${j}]`, jsArr[j]);
            if (srcArr[i].id == jsArr[j].id) {
                srcArr[i].remove();
            }
        }
    }

    const body = document.getElementsByTagName('body')[0];
    for (let i = 0; i < jsArr.length; i++) {
        const script = document.createElement("script");
        script.src = jsArr[i].src;
        script.id = jsArr[i].id;
        script.defer = true;
        body.append(script);
    }
}