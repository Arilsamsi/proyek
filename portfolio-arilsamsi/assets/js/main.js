/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Anime Lovers", "Gamers", "Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// Switch Theme

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disabledDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disabledDarkmode();
});


//Form Contact 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzJDT95PG2UD_u2mNZifQbh-ZSXcQtUtS1Z6UImE812mmoA_6UIcx9qvyvsuOfs4w_n4w/exec'
      const form = document.forms['aril-samsi-contact-person']
    
      form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pesan berhasil dikirim!!",
                showConfirmButton: true,
                timer: 3000
            });
            form.reset();
        } else {
            throw new Error('Gagal mengirim pesan.');
        }
    })
    .catch(error => {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Pesan gagal dikirim!",
            text: error.message,
            showConfirmButton: true
        });
        console.error('Error!', error.message);
    });
});
//End Form Contact

//Event Trigger
document.addEventListener('keydown', e => {
  if(e.key === 'Enter' && e.target.value !== 'TEXTAREA') {
    e.preventDefault();
    form.dispatchEvent(new Event('submit'));
  }
})
//End Event Trigger


// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when scrolling down
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// // Fungsi untuk mengganti konten embed
// function updateEmbed(platform) {
//   const embedContainer = document.getElementById("sosmed-container");
  
//   // Bersihkan konten sebelumnya
//   embedContainer.innerHTML = "";

//   // Tambahkan embed sesuai platform
//   if (platform === "tiktok") {
//     embedContainer.innerHTML = `
//      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@deyissmyluvvv" data-unique-id="deyissmyluvvv" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@deyissmyluvvv?refer=creator_embed">@deyissmyluvvv</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
//     `;
//   } else if (platform === "instagram") {
//     embedContainer.innerHTML = `
// <a href="https://www.instagram.com/arilsamsi/" target="_blank">
//   <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="50">
//   Lihat Profil Instagram
// </a>


//     `;
//   } else if (platform === "facebook") {
//     embedContainer.innerHTML = `
//       <div id="fb-root"></div>
//       <script async defer crossorigin="anonymous" 
//               src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0"></script>
//       <div class="fb-post" 
//            data-href="https://www.facebook.com/facebook/posts/10157887545481729"
//            data-width="500"></div>
//     `;
//   }
// }

// // Tambahkan event listener pada tombol
// document.getElementById("btnTiktok").addEventListener("click", () => updateEmbed("tiktok"));
// document.getElementById("btnInstagram").addEventListener("click", () => updateEmbed("instagram"));
// document.getElementById("btnFacebook").addEventListener("click", () => updateEmbed("facebook"));
