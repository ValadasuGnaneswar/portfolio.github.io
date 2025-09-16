

  <script>
    // Sticky Navigation Menu
    const nav = document.querySelector("nav");
    const scrollBtn = document.querySelector(".scroll-button a");
    const body = document.querySelector("body");
    const navBar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const navLinks = document.querySelectorAll(".menu li a");

    // Function to handle scroll events for sticky nav and scroll-to-top button
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
      } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
      }
    };

    // Function to open the side navigation
    const openNavMenu = () => {
      navBar.classList.add("active");
      menuBtn.style.opacity = "0";
      menuBtn.style.pointerEvents = "none";
      body.style.overflow = "hidden";
      scrollBtn.style.pointerEvents = "none";
    };

    // Function to close the side navigation
    const closeNavMenu = () => {
      navBar.classList.remove("active");
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
      body.style.overflow = "auto";
      scrollBtn.style.pointerEvents = "auto";
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    menuBtn.addEventListener('click', openNavMenu);
    cancelBtn.addEventListener('click', closeNavMenu);

    // Close side navigation when a menu link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", closeNavMenu);
    });
  </script>
</body>
</html>
