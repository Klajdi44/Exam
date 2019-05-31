let imagesArr = document.getElementsByClassName("envimg");
let imageIndex = 0;

showCurrentImage(imageIndex);

function showPrevious(no) {
    showCurrentImage(imageIndex += no);
}

function showNext(no) {
    showCurrentImage(imageIndex += no);
}

function showCurrentImage(no) {
    if(no < 0) {
        imageIndex = imagesArr.length - 1;
    }
    else if(no >= imagesArr.length) {
        imageIndex = 0;
    } else {
        imageIndex = no;
    }

    imagesArr[imageIndex].style.display = "block";

    for(let i = 0; i < imagesArr.length; i++) {
        if(i != imageIndex) {
            imagesArr[i].style.display = "none";
        }
    }
}

