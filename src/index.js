const images = [
  {
    src: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
  },
  {
    src: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
  },
  {
    src: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
  },
];
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".slider-dots");
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const sliderCount = images.length;
let indexSlide = 0;

function createImgSlides() {
  images.forEach((element) => {
    const slide = document.createElement("img");
    slide.classList.add("images");
    slide.src = element.src;
    slider.append(slide);
  });
}
createImgSlides();

function createDots() {
  for (let i = 1; i <= sliderCount; i++) {
    let spanEl = document.createElement("span");
    spanEl.classList.add("dots-item");
    dotsContainer.append(spanEl);
  }
}
createDots();

function updateSlide() {
  const allSlides = slider.querySelectorAll("img");
  allSlides.forEach((element, index) => {
    if (index === indexSlide) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    if (indexSlide === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }

    if (indexSlide === sliderCount - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  });
}
updateSlide();

const handleNextClick = () => {
  indexSlide = (indexSlide + 1) % sliderCount;
  currentSlideDot(indexSlide);
  updateSlide();
};
const handlePrevClick = () => {
  indexSlide = (indexSlide - 1) % sliderCount;
  currentSlideDot(indexSlide);
  updateSlide();
};

const allDots = document.querySelectorAll(".dots-item");
allDots[0].classList.add("active-dot");

function currentSlideDot(indexSlide) {
  allDots.forEach((element, index) => {
    if (index === indexSlide) {
      element.classList.add("active-dot");
    } else {
      element.classList.remove("active-dot");
    }
  });
}

function onDotsClick() {
  allDots.forEach((element, index) => {
    element.addEventListener("click", () => {
      indexSlide = index;
      currentSlideDot(indexSlide);
      updateSlide();
    });
  });
}
onDotsClick();

prevBtn.addEventListener("click", handlePrevClick);
nextBtn.addEventListener("click", handleNextClick);
