const skillsData = [
  {
    category: "Soft Skills",
    skills: "Problem Solving, Team Collaboration, Continuous Learning",
  },
  {
    category: "Frontend Development",
    skills: "HTML5, CSS3, Bootstrap, TailwindCSS, React, Vue",
  },
  {
    category: "Backend Frameworks",
    skills: "Node.js (Express), Laravel, Flask",
  },
  {
    category: "Database Management",
    skills: "MySQL, PostgreSQL, MongoDB",
  },
  { category: "Version Control", skills: "Git, GitHub & GitLab" },
  { category: "DevOps & Deployment", skills: "CI/CD" },
  { category: "Progressive Web Apps", skills: "Service Workers" },
  { category: "API Development", skills: "RESTful API" },
  { category: "Tools & Optimizations", skills: "Docker, Redis, Vite" },
];
const appData = [
  { title: "Miamor", url: "https://miamorpoto.com/", img: "miamor.png" },
  {
    title: "moneychanger",
    url: "https://mc.jogjatanpakamu.com/",
    img: "moneychanger.png",
  },
  { title: "PTJIM", url: "https://ptjim.co.id/", img: "ptjim.png" },
  {
    title: "PWA",
    url: "https://pwa.jogjatanpakamu.com/",
    img: "pwa-masdi.png",
  },
  {
    title: "BATIK",
    url: "https://batikkunayah.com/",
    img: "wijayakusuma-batik.png",
  },
];
const certificatesData = [
  {
    title: "Programming Logic 101",
    url: "https://www.dicoding.com/certificates/EYX42WVQ5ZDL",
    img: "c-logic.png",
  },

  {
    title: "Prinsip Pemrograman SOLID",
    url: "https://www.dicoding.com/certificates/81P2GY7RYPOY",
    img: "c-solid.png",
  },
];

$(document).ready(function () {
  let carouselContent = "";
  let indicators = "";
  for (let i = 0; i < skillsData.length; i += 3) {
    indicators += `<button type="button" data-bs-target="#skillsCarousel" data-bs-slide-to="${
      i / 3
    }" class="${i === 0 ? "active" : ""}" aria-current="true"></button>`;
    carouselContent += `<div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="row justify-content-center">`;
    for (let j = i; j < i + 3 && j < skillsData.length; j++) {
      carouselContent += `
              <div class="col-md-4 col-sm-12">
                  <div class="card mb-3">
                      <div class="card-body text-center h-100">
                          <h5 class="card-title">${skillsData[j].category}</h5>
                          <p class="card-text">${skillsData[j].skills}</p>
                      </div>
                  </div>
              </div>`;
    }
    carouselContent += `</div></div>`;
  }
  $("#carouselContent").html(carouselContent);
  $("#carouselIndicators").html(indicators);

  //   porfolio
  let appItem = "";
  for (let i = 0; i < appData.length; i++) {
    appItem += `  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/${appData[i].img}"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>${appData[i].title}</h4>
                  <p>App</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/${appData[i].img}"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox glightbox"
                      title="${appData[i].title}"
                      ><i class="bx bx-plus"></i
                    ></a>
                    <a
                     target="_blank"
                      href="${appData[i].url}"
                      class="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="${appData[i].title}"
                      ><i class="bx bx-link"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>`;
  }

  $("#portfolioApp").html(appItem);

  // Filter Functionality
  $("#portfolio-filters li").click(function () {
    $("#portfolio-filters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    let filterValue = $(this).attr("data-filter");
    if (filterValue === "*") {
      $(".portfolio-item").fadeIn();
    } else {
      $(".portfolio-item").fadeOut();
      $(filterValue).fadeIn();
    }
  });

  // certificates

  let portfolioCertificates = "";
  for (let i = 0; i < certificatesData.length; i++) {
    portfolioCertificates += `  <div class="col-lg-4 col-md-6 portfolio-item  filter-certificate">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/${certificatesData[i].img}"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>${certificatesData[i].title}</h4>
                  <p>App</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/${certificatesData[i].img}"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox glightbox"
                      title="${certificatesData[i].title}"
                      ><i class="bx bx-plus"></i
                    ></a>
                    <a
                     target="_blank"
                      href="${certificatesData[i].url}"
                      class="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="${certificatesData[i].title}"
                      ><i class="bx bx-link"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>`;
  }

  $("#portfolioCertificates").html(portfolioCertificates);

  const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
  });

  $(".php-email-form").submit(function (event) {
    event.preventDefault(); // Mencegah form melakukan submit biasa

    var message = $("textarea[name='message']").val();
    var phoneNumber = "6289694273720"; // Nomor WhatsApp tujuan

    if (message.trim() === "") {
      alert("Pesan tidak boleh kosong!");
      return;
    }

    // Format URL WhatsApp
    var whatsappURL =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect ke WhatsApp
    window.open(whatsappURL, "_blank");
  });
});
