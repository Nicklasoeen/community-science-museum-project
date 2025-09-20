document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");

  if (!header) {
    console.log("No header found");
    return;
  }

  console.log("adding eventlistener")

  window.addEventListener("scroll", () => {
    const y_position = window.scrollY;

    if (y_position > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  // Optional: Close menu when clicking a link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
});

