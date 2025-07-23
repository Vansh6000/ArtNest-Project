//
// console.log('Hii')

const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
});


// redirect to the specific section of the specific page

function redirectToPageSection(event){
    const targetButton = event.currentTarget;
    const targetPage = targetButton.dataset.targetPage
    const targetSection = targetButton.dataset.targetSection

    const targetUrl = `${targetPage}#${targetSection}`;
    window.location.href = targetUrl;

}

const redirectBtns = document.querySelectorAll('.collection-item .description div button');
redirectBtns.forEach( button => {
  button.addEventListener('click', redirectToPageSection);
})

const redirectBtnsOfGallery = document.querySelectorAll('.g-art-item div button');
redirectBtnsOfGallery.forEach( button => {
  button.addEventListener('click', redirectToPageSection);
})


// to show the underline of active page

// Get the current file name from the URL
const currentPage = window.location.pathname.split("/").pop();

// Select all nav links
const navigationLink = document.querySelectorAll(".nav-links a");

navigationLink.forEach(link => {
  const href = link.getAttribute("href");

  // If href matches current page (or empty for home), add active class
  if (href === currentPage || (currentPage === "" && href.includes("index"))) {
    link.classList.add("active");
  }
});


// g-p

document.querySelectorAll('.art-view-more-btn').forEach(button => {
  button.addEventListener('click', function() {
    // to get the closest section
    const section = this.closest('section');

    // Only unhide cards in this section
    const hiddenCards = section.querySelectorAll('.art-masonry-card.art-hidden');
    hiddenCards.forEach(card => {
      card.classList.remove('art-hidden');
    });

    // Hiding the button after use
    this.style.display = 'none';
  });
});


// gallery images when clicked, go to those html pages
const redirectArtistImage = document.querySelector('.artist-spotlight-image');
redirectArtistImage.addEventListener('click', redirectToPageSection);

const redirectGalleryImage = document.querySelector('.gallery-events-image');
redirectGalleryImage.addEventListener('click', redirectToPageSection);

const redirectArtworks = document.querySelectorAll('.filters button');
redirectArtworks.forEach( button => {
    button.addEventListener('click', redirectToSection);
})


//