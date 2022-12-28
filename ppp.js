document.addEventListener("DOMContentLoaded", function(){

    
    document.querySelector("#button").onclick = function(){
        
        let imie = document.querySelector("#podaneImie").value;
        let nazwisko = document.querySelector("#podaneNazwisko").value;
        let miasto = document.querySelector("select").value;
        let tech = document.querySelectorAll(".tech");
        let stan = document.querySelectorAll(".stan");
        let uwagi = document.querySelector("textarea").value;
        let tab_tech = [];
        let tab_stan = [];
        

        document.querySelector("#imie").innerHTML = imie;
            
            if(imie == 0){
                document.querySelector("#error_imie").innerHTML = "Błąd"; 
            }
            if(imie != 0){
                document.querySelector("#error_imie").innerHTML = null;
            }
        
        document.querySelector("#nazwisko").innerHTML = nazwisko;
            if(nazwisko == 0){
                document.querySelector("#error_nazwisko").innerHTML = "Błąd";
            }
            if(nazwisko != 0){
                document.querySelector("#error_nazwisko").innerHTML = null;
            }
            

        document.querySelector("#miasto").innerHTML = miasto;
            if(miasto == 0){
                document.querySelector("#error_miasto").innerHTML = "Błąd";
            }
            if(miasto != 0){
                document.querySelector("#error_miasto").innerHTML = null;
            }


        for(let x of tech){
           
            if(x.checked){
                tab_tech.push(x.value);
            }
        }

        document.querySelector("#technologie").innerHTML = tab_tech;
            if(tab_tech == 0){
                document.querySelector("#error_technologia").innerHTML = "Błąd";
            }
            if(tab_tech != 0){
                document.querySelector("#error_technologia").innerHTML = null;
            }

        for(let x of stan){
            if(x.checked){
                tab_stan.push(x.value);
            }
        }
        document.querySelector("#stanowisko").innerHTML = tab_stan;
            if(tab_stan == 0){
                document.querySelector("#error_stanowisko").innerHTML = "Błąd";
            }
            if(tab_stan != 0){
                document.querySelector("#error_stanowisko").innerHTML = null;
            }

        document.querySelector("#uwagi").innerHTML = uwagi;
      
            
    }
})
