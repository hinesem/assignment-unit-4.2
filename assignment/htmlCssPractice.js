let dropdown = document.getElementsByClassName("drop-down-btn");
let m;

for (m = 0; m < dropdown.length; m++) {
    dropdown[m].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    })
}

