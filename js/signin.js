let inpuT= document.getElementById("email");
        let PTag= document.getElementById("emailError");
        inpuT.addEventListener("input",function(){
            if(inpuT.value.includes("@")){
                PTag.textContent="";
            } else{ 
                PTag.textContent="Invalid Email";  

            }
            if(inpuT.value===""){
                PTag.textContent="";


            }
        })