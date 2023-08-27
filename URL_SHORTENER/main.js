document.addEventListener("DOMContentLoaded", () => {
    let original_link = document.getElementById("original_link");
    let generate = document.getElementById("generate");
    let shorten_link = document.getElementById("shorten_link");
    let copy = document.getElementById("copy");
    let container = document.querySelector(".container");

    generate.addEventListener("click", () => {
        let url = original_link.value;
        fetch('https://api.shrtco.de/v2/shorten?url=' + url + '/very/long/link.html')
            .then((resp) => resp.json())
            .then((value) => {
                shorten_link.textContent = value.result.short_link;
                container.style.height = "200px";
            }).catch((error) => {
                shorten_link.textContent = "Something went wrong.";
            });
    });

    copy.addEventListener("click", () => {
        navigator.clipboard.writeText(shorten_link.textContent);
        copy.innerHTML = "Copied!"; // Updated button content

        setTimeout(() => {
            copy.innerHTML = "<i class='fa-regular fa-copy'></i>"; // Reset button content
        }, 1000);
    });
});
