const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const btnSliderNext = document.querySelector("#btnSliderNext");
const btnSliderPrevious = document.querySelector("#btnSliderPrevious");

const sliderActiveImage = document.querySelector(".banner-img"); 
const sliderActiveText = document.querySelector("p");
//Les éléments HTML sont sélectionnés à l'aide de la méthode document.querySelector
const dotsNode = document.querySelector('.dots')

//compteur est une variable qui garde la trace de l'index de la diapositive en cours
let compteur = 0;

/**
 * array dots is declared to keep track of all navigation points
 */
const dots = [];

/**
 * Function to update the slider and selected dot
 */
function updateSlider() {
    sliderActiveImage.setAttribute('src', '/assets/images/slideshow/' + slides[compteur].image);
    sliderActiveText.innerHTML = slides[compteur].tagLine;
    
/* Chaque point est parcouru grace forEach et la classe de points sélectionnée est ajoutée 
si l'index du point est le même que l'index */

    // dots.forEach((dot, index) => dot.classList.toggle('dot_selected', index === compteur));

    // Supprime la classe dot_selected à tous les dots
    dots.forEach((dot, index) => {
        dot.classList.remove('dot_selected')

        if(index === compteur){
            dot.classList.add('dot_selected')
        }
    });
}

/**
 * Add the right number of dots to the DOM based on the number of images in the slider
 */
//Cette fonction crée et affiche des points de navigation
function displayDots() {

    for (let i = 0; i < slides.length; i++) {
        //Un nouvel élément div est créé pour chaque point, ajouté au DOM et ajouté au tableau de points
         const dotNode = document.createElement('div')
         dotNode.classList.add('dot')       

        //punctul ales
         dotsNode.append(dotNode)       

        //Un événement de clic est ajouté pour chaque point, qui met à jour la diapositive active lorsque vous cliquez dessus
         dotNode.addEventListener('click', function () {    

             compteur = i;
             updateSlider();
             //compteur = ??
             //updateSlider()
         })

         dots.push(dotNode);
    }
    
    // la classe sélectionnée par le point est ajoutée au premier point pour le mettre en évidence initialement
    dots[compteur].classList.add('dot_selected');
}

/**
 * Move the slider to the right when clicking on the "next" button
 */
btnSliderNext.addEventListener("click", function () {
    //compteur = (compteur + 1) % slides.length;

    compteur++

    if(compteur > slides.length - 1){
        compteur = 0        
    } 

    updateSlider();
});

/**
 * Move the slider to the left when clicking on the "previous" button
 */
btnSliderPrevious.addEventListener("click", function () {
    //compteur = (compteur - 1 + slides.length) % slides.length;
    compteur--

    if(compteur < 0){
        compteur = slides.length - 1
    }

    updateSlider();
});

//Ces appels initiaux garantissent que le curseur et les points sont correctement initialisés lors du chargement de la page.
displayDots();
updateSlider();