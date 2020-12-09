let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  console.log("slides. :", slides)
  slides.forEach((slide, index) => {
    console.log("inside loop :", slide)
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })

  

  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})

