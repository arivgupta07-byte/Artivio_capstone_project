




let s =document.querySelector("#qty");
        let r =document.querySelector("#total");
        let q=1;
        let p = Number(document.getElementById("total").innerText);

        document.querySelector("#minus").addEventListener("click",function (){
            if (Number(s.innerText)>1){

                s.innerText=Number(s.innerText) -1;
                r.innerText=p*(Number(s.innerText));
            }

            
            



        })
        document.querySelector("#plus").addEventListener("click",function (){
            s.innerText=Number(s.innerText) + 1;
            r.innerText=p*(Number(s.innerText));




        })
        // document.querySelector("#plus").addEventListener("click",function (){
        //     r.innerText=Number(r.innerText)*(Number(s.innerText));




        // })
        // document.querySelector("#minus").addEventListener("click",function (){
        //     r.innerText=Number(r.innerText)/(Number(s.innerText));




        // })
    



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




