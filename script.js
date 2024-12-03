// DOM modification
document.addEventListener("DOMContentLoaded", function () {
  localStorage.clear();
  document.title = "Jagbandhu";
  const menuBar = document.querySelector(".menu-bar");
  const closeIcon = document.querySelector(".close");
  const navList = document.querySelector(".nav-list");
  const downloadButton = document.querySelector(".cta");
  const navItems = document.getElementsByClassName("nav-item");
  const heroButtons = document.getElementsByClassName("hero-button");
  const navBar = document.querySelector(".nav-bar");
  const Logo = document.querySelector(".brand-logo");
  const brandName = document.querySelector(".brand-name");
  const brandDiv = document.querySelector(".brand");

  brandDiv.addEventListener("click", () => {
    window.location.href = `index.html#`;
  });
  brandDiv.style.cursor = "Pointer";

  let checkScrollposition = () => {
    let scrollpostion = window.scrollY;

    if (scrollpostion > 50) {
      navBar.style.backgroundColor = "#026fbf";
      Array.prototype.forEach.call(navItems, (navItem) => {
        navItem.style.color = "#fff";
      });
      downloadButton.style.border = "1px solid #fff";
      downloadButton.style.color = "#fff";
      Logo.innerHTML = `<img src="assets/Jagbandhu_white_logo.svg" alt="Jagbandhu Logo" width="40rem" />`;
      brandName.style.color = "#fff";
      menuBar.style.color = "#fff";
      closeIcon.style.color = "#fff";
    } else {
      navBar.style.backgroundColor = "#edf2f6";
      Array.prototype.forEach.call(navItems, (navItem) => {
        navItem.style.color = "#4b4b4b";
      });
      downloadButton.style.border = "1px solid #026fbf";
      downloadButton.style.color = "#026fbf";
      Logo.innerHTML = `<img src="assets/Jagbandhu_Logo.svg" alt="Jagbandhu Logo" width="40rem" />`;
      brandName.style.color = "#026fbf";
      menuBar.style.color = "#026fbf";
      closeIcon.style.color = "#026fbf";
    }
  };

  checkScrollposition();

  window.addEventListener("scroll", checkScrollposition);

  downloadButton.addEventListener("click", function () {
    window.location.href = "https://onelink.to/9qh57b";
  });

  // Initially, display menuBar and hide closeIcon
  menuBar.style.display = "block";
  closeIcon.style.display = "none";

  menuBar.addEventListener("click", function () {
    // Hide menuBar and show closeIcon
    menuBar.style.display = "none";
    closeIcon.style.display = "block";

    // Show the navigation list and download button
    window.innerWidth <= 768 ? navList.classList.toggle("show") : null;
    window.innerWidth <= 768 ? downloadButton.classList.toggle("visible") : null;
  });

  closeIcon.addEventListener("click", function () {
    // Show menuBar and hide closeIcon
    menuBar.style.display = "block";
    closeIcon.style.display = "none";

    // Hide the navigation list and download button
    window.innerWidth <= 768 ? navList.classList.toggle("show") : null;
    window.innerWidth <= 768 ? downloadButton.classList.toggle("visible") : null;
  });
  Array.prototype.forEach.call(navItems, (navItem) => {
    navItem.addEventListener("click", function () {
      // Show menuBar and hide closeIcon
      menuBar.style.display = "block";
      closeIcon.style.display = "none";

      // Hide the navigation list and download button
      window.innerWidth <= 768 ? navList.classList.toggle("show") : null;
      window.innerWidth <= 768 ? downloadButton.classList.toggle("visible") : null;
    });
  });

  Array.prototype.forEach.call(heroButtons, (heroButton) => {
    heroButton.addEventListener("click", function () {
      window.location.href = "https://onelink.to/9qh57b";
    });
  });

  // Blog data array
  const blogs = [
    {
      blogDate: { day: "2nd", month: "Dec", year: 2024 },
      heading: "Jagbandhu: The Future of Digital Event Planning for Heritage and Cultural Events",
      author: "User name 1",
      content: [
        {
          status: "paragraph",
          data: "Cultural and heritage events hold a special place in many families, whether they’re celebrating a religious ceremony, a traditional ceremony, or marking important milestones. These events help pass down values, stories, and customs to the next generation. However, planning and coordinating these events across extended families can be a daunting task. This is where Jagbandhu’s advanced event management features come into play, offering a modern solution to organize cultural and heritage celebrations.",
        },
        {
          status: "heading",
          heading: "Preserving Tradition in a Digital Age",
        },
        {
          status: "paragraph",
          data: "Jagbandhu is designed to cater specifically to the needs of families who want to maintain their cultural heritage through events and gatherings. From sending out digital invites to managing guest lists, Jagbandhu supports you in every aspect of event planning, while also helping you stay rooted in your traditions.",
        },
        {
          status: "paragraph",
          data: "Here’s how Jagbandhu can assist you in planning cultural and heritage events:",
        },
        {
          status: "ol",
          list: [
            "Customized Cultural Templates: JagBandhu provides pre-made templates for various cultural and heritage events, making it easier to design event invitations that reflect your traditions. Whether it's a Diwali celebration, Eid gathering, or a milestone anniversary, the app offers a personalized experience by allowing you to select culturally relevant themes and languages.",
            "Invite Management for Large Families: For cultural events that bring together extended family and friends, Jagbandhu's invite management system ensures no one is left behind. You can organize your guest list based on family tree connections and easily send out group invitations. This allows you to include family members from all over the world in your celebration.",
            "Share Cultural Significance: Jagbandhu enables you to add details about the cultural significance of the event within your invitation. This feature is especially useful for multi-generational or multi-cultural families, helping everyone understand the importance and meaning behind the event.",
          ],
        },
        {
          status: "heading",
          heading: "Reinforcing Family Heritage Through Technology",
        },
        {
          status: "paragraph",
          data: "In today’s fast-paced digital world, it can be difficult to maintain the close-knit family ties that cultural events often represent. Jagbandhu serves as a bridge between modern technology and age-old traditions, ensuring that families stay connected and their heritage is celebrated.",
        },
        {
          status: "link",
          url: "https://onelink.to/9qh57b",
          text: "Download the JagBandhu app today and experience the future of digital event planning, tailored specifically for family and cultural gatherings.",
        },
      ],
    },
    // Add more blog objects here
  ];

  // Function to render blogs
  const renderBlogs = (blogs) => {
    const container = document.getElementById("blogs-list");

    const blogHTML = blogs
      .map((blog, index) => {
        const { blogDate, heading, content, image, author } = blog;

        return `
          <div class="blog-data">
            <div class="blog-date">
              <h2><span>${blogDate.day}</span></h2>
              <p>${blogDate.month}, ${blogDate.year}</p>
            </div>
            <div class="blog-preview">
              <h2 class="blog-heading">${heading}</h2>
              <p class="blog-paragraph">
                ${content[0].data}
              </p>
            </div>
          </div>`;
      })
      .join("");

    container.innerHTML = blogHTML;

    const blogHeadings = container.querySelectorAll(".blog-heading");
    blogHeadings.forEach((heading, index) => {
      heading.addEventListener("click", () => {
        localStorage.setItem("selectedBlog", JSON.stringify(blogs[index]));
        // Navigate to blog.html
        window.location.href = `blog.html?index=${index + 1}`;
      });
    });
  };

  renderBlogs(blogs);
});

// GSAP Animation
