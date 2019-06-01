function opennav() {
    document.getElementById("navbar").style.width = "100%";
}

function closenav() {
    document.getElementById("navbar").style.width = "0%";
}

function openCategPage(id){
   window.location.href = "shop-category.html?cat=" + id;
}
