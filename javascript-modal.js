let productModal = document.querySelector(".modal");
let productLink = "https://ingeniousneuron.com/lisstenderdatabase/wordpress/wp-json/wp/v2/product/";

function toggleModal() {
    productModal.style.display = "none";
}

function openModal(itemId) {
    //console.log(itemId);
    fetch(productLink + itemId + "?_embed").then(e => e.json()).then(showModal);
}


function showModal(listing) {
    //console.log(listing);
    document.querySelector(".presentation-images-tablet").classList.remove("img-fill");
    document.querySelector("body > main > div.modal > div > article > section.image-section > h2").textContent = listing.title.rendered;
    document.querySelector(".image-modal-main").src = listing._embedded["wp:featuredmedia"][0].source_url;
    document.querySelector(".image-modal-main").alt = listing.featured_image_alt;
    document.querySelector(".price-modal").textContent = listing.price;

    if (listing.additional_image) {

        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-first").style.display = "block";
        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-second").style.display = "block";
        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-third").style.display = "block";

        document.querySelector(".presentation-images").style.display = "grid";
        document.querySelector(".presentation-images-tablet").style.display = "block";

        document.querySelector(".image-section").style.gridTemplateRows = "90px 300px 130px 90px";
        document.querySelector(".image-modal-first").src = listing._embedded["wp:featuredmedia"][0].source_url;
        document.querySelector(".image-modal-first").alt = listing.featured_image_alt;


        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-first").src = listing._embedded["wp:featuredmedia"][0].source_url;
        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-first").alt = listing.featured_image_alt;


        document.querySelector(".image-modal-second").src = listing.additional_image.guid;
        document.querySelector(".image-modal-second").alt = listing.additional_image_alt;



        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-second").src = listing.additional_image.guid;
        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-second").alt = listing.additional_image_alt;

        if (listing.additional_image_2) {
            document.querySelector(".image-modal-third").style.display = "block";
            document.querySelector(".presentation-images").style.gridTemplateColumns = "repeat(3, 1fr)";
            document.querySelector(".image-modal-third").src = listing.additional_image_2.guid;
            document.querySelector(".image-modal-third").alt = listing.additional_image_2_alt;


            document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-third").src = listing.additional_image_2.guid;
            document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-third").alt = listing.additional_image_2_alt;

        } else {
            document.querySelector(".image-modal-third").style.display = "none";
            document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-third").style.display = "none";
            document.querySelector(".presentation-images").style.gridTemplateColumns = "repeat(2, 1fr)";
        }

    } else {
        document.querySelector(".presentation-images").style.display = "none";
        document.querySelector(".presentation-images-tablet").classList.add("img-fill");
        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-first").style.display = "none";
        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-second").style.display = "none";
        document.querySelector("body > main > div.modal > div > article > section.info-section > div.presentation-images-tablet > img.image-modal-third").style.display = "none";
        document.querySelector(".image-section").style.gridTemplateRows = "90px 300px 130px";
    }


    if (listing.option_1) {
        document.querySelector(".select-options").style.display = "block";
        document.querySelector(".option1").textContent = listing.option_1;


        if (listing.option_2) {
            document.querySelector(".option2").textContent = listing.option_2;
            document.querySelector(".option2").style.display = "block";

            if (listing.option_3) {
                document.querySelector(".option3").style.display = "block";
                document.querySelector(".option3").textContent = listing.option_3;
            } else {
                document.querySelector(".option3").style.display = "none";
            }
        } else {
            document.querySelector(".option2").style.display = "none";
            document.querySelector(".option3").style.display = "none";
        }
        document.querySelector(".option3").textContent = listing.option_3;
    } else {
        document.querySelector(".select-options").style.display = "none";
    }

    document.querySelector(".material-modal").textContent = listing.material;
    document.querySelector(".collection-modal").textContent = listing.collection;

    document.querySelector(".product-details").textContent = listing.description;



    productModal.style.display = "block";
}



function imageChange(source) {
    document.querySelector(".image-modal-main").src = source;
}
