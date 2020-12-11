var cene=[600,700,500,500,750,1100,
    750,700,700,500,750,800,1250,200,300,250,500];

function kupovina(index){
    let cena=cene[index-1];
    let rezultat=document.querySelector('#rez');
    console.log(rezultat);
    rezultat.innerText=Number(rezultat.innerText)+Number(cena);
}
function kolicina(index){
    let tk=(document.querySelector("#kom"+index)).innerText;
    tk=Number(tk)+1;
    let nk=document.querySelector("#kom"+index);
    nk.innerText=tk;
    // console.log(nk);
}
function obrisi(index){
    let tk=(document.getElementById("kom"+index)).innerText;
    // console.log(tk);
    if(tk==0){
         
    }else{
        tk=Number(tk)-1;
        let nk=document.getElementById("kom"+index);
        nk.innerText=tk;
        let cena=cene[index-1];
        let rezultat=document.querySelector('#rez');
        rezultat.innerText=Number(rezultat.innerText)-Number(cena);
    }
}


// **********************************************************************************

function myFunction() {
    let confirmVal = confirm('Da li sigurno želite obrisati korpu?');
    if(confirmVal == true){
        document.getElementById("rez").innerHTML=0;
        for (let index = 1; index < 18; index++) {
            document.getElementById("kom"+index).innerHTML=0;
        }
    }
 
    
}

// **********************************************************************************




function popUp(){
    var imePrezime = document.getElementById('imePrezime').value;
    var mail=document.getElementById('email').value;
    var number=document.getElementById('number').value;
    var adresa=document.getElementById('adress').value;
    
    if (imePrezime==""||mail==""||number==""||adresa=="") {
        
    }else{
        alert("Uspesno ste obavili kupovinu.\nOčekujte pošiljku u narednih 3-5 radnih dana.\n\nSrdačan pozdrav!");
    }
}

