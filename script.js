console.log('connecté');
//Je selectionne et le stocke

//icone contient le premier élément <i> trouvé dans le code
const icone = document.querySelector('i');
console.log(icone);

//Je soumets à une action au clic
icone.addEventListener('click', function() {
    console.log('icone cliquée !');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
})

//btnButton contient le premier élément avec la classe btn
const btnButton = document.querySelector('.btn');
console.log(btnButton);

//Je soumets le bouton à une action au clic
btnButton.addEventListener('click', function(){
    console.log('bouton cliqué');
    
    //on vérifie le text du bouton
    if(btnButton.innerText === "Abonné"){
        //action à réaliser si condition est vraie
        btnButton.innerText = "Abonnez-vous";
    }else{
        console.log('else');
        //Action à réaliser si condition fausse
        btnButton.innerText = "Abonné";
        
        
    }
});