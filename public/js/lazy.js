// notes: native lazy loading for browsers only able to read "lazy" tag
// 2022-11-20

/*
var observer = new IntersectionObserver(lazyLoad, {
  rootMargin: "100px",
  threshold: 1.0,
});

function lazyLoad(elements) {
  elements.forEach((image) => {
    if (image.intersectionRatio > 0) {
      image.src = image.dataset.src;

      observer.unobserve(item.target);
    }
  });
}

var lazyImages = document.querySelectorAll("img.galleryLazyLoad");
lazyImages.forEach((img) => {
  observer.observe(img);
});

if ("loading" in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll("img.lazy");
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Use our own lazyLoading with Intersection Observers and all that jazz
}

*/

//New lazy loading

function lazyLoad(elements) {
  elements.forEach((picture) => {
    if (picture.intersectionRatio > 0) {
      var sources = picture.children;

      for (var s = 0; s < sources.length; s++) {
        var source = sources[s];

        /* 
        //enable if images have more than 1 size for diff device
        if (sources.hasAttribute("srcset")) {
          source.setAttribute("srcset", ONE_OF_OUR_BIGGER_IMAGES);
        } else {
          source.setAttribute("src", ONE_OF_OUR_BIGGER_IMAGES);
        }
        */
      }

      observer.unobserve(item.target);
    }
  });
}

source.addEventListener(
  "load",
  (image) => {
    image.target.closest("picture").classList.remove("lazy");
  },
  false
);
