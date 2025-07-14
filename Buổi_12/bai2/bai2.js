var arr_image = [
    "img/banner.jpg",
    "img/vf3.jpg",
    "img/hero.jpg"
];

var index = 0;

function prev() {
    index--;
    if (index < 0) index = arr_image.length - 1; // đến hình đầu thì chuyển về hình cuối
    document.getElementById("hinh").src = arr_image[index];
}

function next() {
    index++;
    if (index == arr_image.length) index = 0; // hình cuối thì chuyển lại hình đầu
    document.getElementById("hinh").src = arr_image[index];
}

// setInterval("next()", 1000); // tự động chuyển qua các hình, đơn vị thời gian: ms