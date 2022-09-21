const createToastHtml = (type) => {
    const toast_holder = document.querySelector("#toast-holder");
    const title = document.querySelector("#title").value;

    if(title.length!==0){
        const div = document.createElement("div");
        div.className = `toast ${type}`;
        div.id = "toast";

        const i = document.createElement("i");
        i.className = `fa-solid fa-circle-${type}`
        div.appendChild(i);

        const p = document.createElement("p");
        p.className = "toast-text";
        p.innerText = title;
        div.appendChild(p)

        toast_holder.appendChild(div);

        setTimeout(() => {
            div.remove();
        },3000)
    }
}

export const createButtonEventListeners = () => {
    const successButton = document.querySelector("#success");
    const errorButton = document.querySelector("#error");
    const infoButton = document.querySelector("#info");

    successButton.addEventListener("click", () => {
        createToastHtml("check");
    });

    infoButton.addEventListener("click", () => {
        createToastHtml("info");
    });

    errorButton.addEventListener("click", () => {
        createToastHtml("exclamation");
    });
}
