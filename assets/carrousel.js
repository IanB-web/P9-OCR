const slides = [
  {
    image: "ryoji-iwata-1920w.jpg",
    m_image: "ryoji-iwata-650w.jpg",
    alt: "Ryoji Itawa",
  },
  {
    image: "edward-cisneros-1920w.jpg",
    m_image: "edward-cisneros-650w.jpg",
    alt: "Edward Cisneros",
  },
  {
    image: "nicholas-green-1920w.jpg",
    m_image: "nicholas-green-650w.jpg",
    alt: "Nicholas Green",
  },
];

const carouselContainer = document.getElementById("carousel");
const carouselImgContainer = carouselContainer.querySelector(".carousel__img");
const dotsContainer = document.querySelector(".dots");

const btnSliderPrevious = document.getElementById("left");
const btnSliderNext = document.getElementById("right");

let currentSlide = 0;

/**
 * création des dots en fonction du nombre de slides
 */
for (let i = 0; i < slides.length; i++) {
  let dotSpan = document.createElement("span");

  dotSpan.setAttribute("id", "dot" + i);
  dotSpan.classList.add("dot");

  dotsContainer.appendChild(dotSpan);
}

const dot = document.querySelectorAll(".dot");

/**
 * Affiche la slide en fonction de la variable currentSlide
 */
function displaySlide(slideToDisplay) {
  // Met à jour l'affichage de la slide (title, tag, src)
  let carouselImg = slides[slideToDisplay].image;
  let carouselImgMobile = slides[slideToDisplay].m_image;
  let carouselAlt = slides[slideToDisplay].alt;

  carouselImgContainer.setAttribute(
    "srcset",
    "./assets/images/slider/" +
      carouselImg +
      " 1920w, ./assets/images/slider/" +
      carouselImgMobile +
      " 650w"
  );
  carouselImgContainer.setAttribute(
    "sizes", "(max-width: 650px) 100vw, 1920px"
  )
 carouselImgContainer.setAttribute(
    "alt", carouselAlt
  );
  carouselImgContainer.setAttribute(
    "src",
    "./assets/images/slider/" + carouselImg
  );

 
  // Met à jour les classes du dots
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("dot_selected");
  }

  dot[slideToDisplay].classList.add("dot_selected");
}

/**
 * Affiche la slide précedente en cliquant sur la fleche de gauche
 */
btnSliderPrevious.addEventListener("click", () => {
  // Mise à jours du compteur currentSlide
  if (currentSlide > 0) {
    // On incrémente le compteur
    currentSlide--;
  } else {
    // On réinitialise le compteur à la fin du slider
    currentSlide = slides.length - 1;
  }

  // currentSlide = ( currentSlide > 0 ? currentSlide - 1 : slides.length - 1 )

  // Affichage de la slide
  displaySlide(currentSlide);
});

/**
 *Affiche la slide suivante en cliquant sur la fleche de droite
 */

btnSliderNext.addEventListener("click", () => {
  // mise à jours du compteur currentSlide
  if (currentSlide < slides.length - 1) {
    // On augmente le compteur
    currentSlide++;
  } else {
    // On réinitialise le compteur au début du slider
    currentSlide = 0;
  }

  // Affichage de la slide
  displaySlide(currentSlide);
});

/**
 * Affichage de la slide concernée au click sur un dot
 */

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", () => {
    // Mise à jours du compteur currentSlide
    currentSlide = i;

    // Affichage de la slide
    displaySlide(currentSlide);
  });
}

//
displaySlide(currentSlide);
