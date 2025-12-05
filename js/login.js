let inpuT= document.getElementById("pas");
        let PTag= document.getElementById("emailError");
        let PTag2= document.getElementById("p2");
        inpuT.addEventListener("input",function(){
            if (inpuT.value.length < 4) {
            PTag.innerText = "Password must be at least 4 characters";
            PTag.style.color = "red"; 
            }
            else {

                PTag.innerText = "Looks good!";
                PTag.style.color = "green";
            }

            if(inpuT.value.includes("@")){
                PTag2.textContent="Password Strength : Strong";

            } else if (inpuT.value.length>8){
                PTag2.textContent="Password Strength : Normal"; 

            }

            else{ 
                PTag2.textContent="Password Strength : Weak";  

            }
            if(inpuT.value===""){
                PTag.textContent="";


            }
            if(inpuT.value===""){
                PTag2.textContent="";


            }
        })

