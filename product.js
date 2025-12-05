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
    
