document.querySelectorAll(".accordion").forEach((el) => {
    el.addEventListener('click', () => {
        let img = el.lastElementChild;
        let text = el.firstElementChild;
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            document.querySelectorAll(".collapse__content").forEach((elc) => {
                elc.style.maxHeight = null
                img.src = "images/plus.svg";
                text.style.color = "#393939";
            })
        } else {
            document.querySelectorAll(".collapse__content").forEach((elc) => {
                elc.style.maxHeight = null
                let row = elc.parentElement;
                let accordion = row.firstElementChild;
                let img = accordion.lastElementChild;
                let text = accordion.firstElementChild;
                img.src = "images/plus.svg";
                text.style.color = "#393939";
            })
            content.style.maxHeight = content.scrollHeight + 'px';
            img.src = "images/minus.svg";
            text.style.color = "#006A66";
        }
    })
})