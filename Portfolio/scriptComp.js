var $popupContainer = document.getElementById('popup-C1A1'),
    $popup = $popupContainer.querySelector('.popup');

document.getElementById('open-popup').onclick = function () {
    $popupContainer.querySelector('input').value = ''
    $popupContainer.style.display = 'block';
    //fade In 
    setTimeout(function () {
        $popupContainer.style.opacity = 1;
    }, 100);
}
$popupContainer.onclick = function () {
    //fade out 
    $popupContainer.style.opacity = 0;
    setTimeout(function () {
        $popupContainer.style.display = 'none'
    }, 900);
}
$popup.onclick = function (e) {
    e.stopPropagation();
}