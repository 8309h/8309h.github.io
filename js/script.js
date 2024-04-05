// Resume Button 1 - Resume Section
const resumeButton1 = document.getElementById("resume-button-1");
resumeButton1.addEventListener("click", function() {
  window.open("./resume/Harshal-Wagh-Resume.pdf", "_blank");
});

// Resume Button 2 - Home/About Section
const resumeButton2 = document.getElementById("resume-button-2");
resumeButton2.addEventListener("click", function() {
  window.open("./resume/Harshal-Wagh-Resume.pdf", "_blank");
});

// GitHub Calendar
const activityCalendar = document.querySelector(".react-activity-calendar");
if (activityCalendar) {
  // Include the necessary npm package and configuration for the calendar to display
}

// GitHub Streak Stats
const streakStats = document.getElementById("github-streak-stats");
if (streakStats) {
  const streakStatsImg = document.createElement("img");
  streakStatsImg.src = "https://github-readme-streak-stats.herokuapp.com/demo/";
  streakStats.appendChild(streakStatsImg);
}

// GitHub Top Languages
const topLangs = document.getElementById("github-top-langs");
if (topLangs) {
  const topLangsImg = document.createElement("img");
  topLangsImg.src = "https://github.com/8309h/github-readme-stats";
  topLangs.appendChild(topLangsImg);
}

// GitHub Stats Card
const statsCard = document.getElementById("github-stats-card");
if (statsCard) {
  const statsCardImg = document.createElement("img");
  statsCardImg.src = "https://github.com/8309h/github-readme-stats";
  statsCard.appendChild(statsCardImg);
}


// *=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
};

// *=============================== github calender ==================================
    GitHubCalendar(".calendar", "8309h");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "8309h", { responsive: true });

// *=============================== resume open in new tab ==================================


    let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
    let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)

    function NewTab() {
      window.open(
        "https://drive.google.com/file/d/1zaKV0PMn3Zf79WhEMjPloyIMbvaWn_6R/view?usp=sharing",
        "_blank"
      );
    }

// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        });
    };

  });
  // *=============================== sticky navbar ==================================
   
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

// *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active')

};

// *=============================== scroll reveal ==================================

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .skills-container, .project-card, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'left'});

// *===============================  typed js==================================

const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Web Developer', 'Backend Developer', 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
})