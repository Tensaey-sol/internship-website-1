var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  // Function to increment the number and update the display
  function incrementNumber(targetNumber, className) {
    let number = 0;
    const numberDisplay = document.querySelector(className);

    function updateNumberDisplay() {
      if (number < targetNumber) {
        number++;
        numberDisplay.textContent = number;
      } else {
        clearInterval(intervalId);
      }
    }

    const intervalId = setInterval(updateNumberDisplay, 100); // Increment every 100ms (0.1 seconds).
  }

  // Function to handle the intersection of the target section
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        incrementNumber(12, ".counter1");
        incrementNumber(1, ".counter2");
        incrementNumber(15, ".counter3");

        // After the numbers are incremented, disconnect the observer to avoid unnecessary calls
        observer.disconnect();
      }
    });
  }

  // Target section you want to observe
  const targetSection = document.querySelector("#counter");

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1, // Set the threshold to 0.1, which means 10% of the section is visible
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);

  // Start observing the target section
  observer.observe(targetSection);
