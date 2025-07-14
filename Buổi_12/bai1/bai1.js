var index=0;
//click chuột lên ảnh thì chuyển hình khác
function changeimage() {
    var
    imgs = ["/img/vf3.jpg", "/img/banner.jpg", "/img/VF6-Lifestyle-00.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if (index==3){
        index=0;
    }
}
//tự động chuyển ảnh khác sau 1 khoảng thời gian
setInterval(changeimage, 2000);
