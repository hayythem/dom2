let heartBtns = document.getElementsByClassName("fa-heart");
let trashBtns = document.getElementsByClassName("fa-trash-can");
let plusBtns = document.getElementsByClassName("plus-btn");
let minusBtns = document.getElementsByClassName("minus-btn");
let quantities = document.getElementsByClassName("qte");
let cards = document.getElementsByClassName("card");
let prices = document.getElementsByClassName("unit-price");
let total = document.getElementById("total-price");
for (const heart of heartBtns) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("toggleHeart");
  });
}
for (let trashBtn of trashBtns) {
  trashBtn.addEventListener("click", function () {
    trashBtn.parentElement.parentElement.remove();
  });
}
for (const plusBtn of plusBtns) {
  plusBtn.addEventListener("click", function () {
    plusBtn.nextElementSibling.textContent++;
    let sum = 0;
for (let i = 0; quantities.length; i++) {
  let sum =
    sum + Number(quantities[i].textContent) * Number(prices[i].textContent);
}
total.textContent = sum;

  });
}
for (const minusBtn of minusBtns) {
  minusBtn.addEventListener("click", function () {
    if (minusBtn.previousElementSibling.textContent > 0)
      minusBtn.previousElementSibling.textContent--;
  });
}
