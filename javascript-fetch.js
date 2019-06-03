let baseLink = "https://ingeniousneuron.com/lisstenderdatabase/wordpress/wp-json/wp/v2/";
const linkParameters = new URLSearchParams(window.location.search);
const categID = linkParameters.get("cat");

const template = document.querySelector("template").content;
const parentElement = document.querySelector(".container-item")



function loadListings(link) {
    fetch(link + "product?categories=" + categID + "&per_page=40&_embed").then(e => e.json()).then(data => loadApi(data));
}


function loadCategories(link) {
    fetch(link + "categories").then(e => e.json()).then(data => findCategory(data));
}




function loadApi(data) {
    data.forEach(listing => {
        //console.log(listing);
        const clone = template.cloneNode(true);

        clone.querySelector("h4").textContent = listing.title.rendered;
        clone.querySelector(".image-item").onclick = function () {
            openModal(listing.id)
        };
        clone.querySelector(".image-item").src = listing._embedded["wp:featuredmedia"][0].source_url;
        clone.querySelector(".image-item").alt = listing.featured_image_alt;
        clone.querySelector(".price").textContent = listing.price;
        clone.querySelector(".material").textContent = listing.material;
        clone.querySelector(".collection").textContent = listing.collection;
        clone.querySelector(".item").classList.add("hide");


        parentElement.appendChild(clone);
    })
};

function findCategory(data) {
    data.forEach(category => {
        //console.log(category);
        if (categID == category.id) {
            document.querySelector("h1").textContent = category.name;
        }
    })
};




loadCategories(baseLink);
loadListings(baseLink);


window.setTimeout(hideMockup, 1500);

function hideMockup() {
    var mockups = document.getElementsByClassName("mockup-listing");
    var listings = document.getElementsByClassName("item");
    for (var i = 0; i < mockups.length; i++) {
        mockups[i].style.display = "none";
    }
    for (var i = 0; i < listings.length; i++) {
        listings[i].classList.remove("hide");
    }
}
