function ShowMoreInfo() {
    var button = document.getElementById("ShowMoreBtn");
    var list = document.getElementById("ShowMoreList");
    if (button.classList.contains("show")) {
        list.classList.remove('d-none');
        button.classList.remove('show');
        button.classList.add('hide');
        button.innerHTML = "Show less";
    } else {
        list.classList.add('d-none');
        button.classList.remove('hide');
        button.classList.add('show');
        button.innerHTML = "Show More";
    }
}