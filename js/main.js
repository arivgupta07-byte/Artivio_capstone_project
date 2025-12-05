// <>
let searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        if (searchInput.value.trim() === "") {
            alert("Please type something to search!");
        } else {
            alert("You searched for: " + searchInput.value);
        }
    }
});

// <>
let signInBtn = document.querySelector(".nav-signin");

signInBtn.addEventListener("click", function () {
    console.log("Sign-in button clicked");
});
//  <> 
let cartBtn = document.querySelector(".fa-cart-shopping");

cartBtn.addEventListener("click", function () {
    console.log("Cart button clicked");
});

// <>

// <>





