document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the selected blog from localStorage
  const selectedBlog = JSON.parse(localStorage.getItem("selectedBlog"));

  if (selectedBlog) {
    const { blogDate, heading, content, image, author } = selectedBlog;

    document.title = heading;

    const checkContentType = (contents) => {
      let ui = "";

      if (Array.isArray(contents)) {
        contents.forEach((content) => {
          switch (content.status) {
            case "paragraph":
              ui += `<p>${content.data}</p>`;
              break;
            case "heading":
              ui += `<h3>${content.heading}</h3>`;
              break;
            case "image":
              ui += `<div class="blog-image"><img src="${content.src}" alt="${content.alt || "Image"}" /></div>`;
              break;
            case "ul":
              ui += `<ul>${content.list.map((item) => `<li>${item}</li>`).join("")}</ul>`;
              break;
            case "ol":
              ui += `<ol>${content.list.map((item) => `<li>${item}</li>`).join("")}</ol>`;
              break;
            case "link":
              ui += `<a href="${content.url}">${content.text}</a>`;
            default:
              console.log("Unknown content type");
              console.log(content);
              break;
          }
        });
      } else {
        console.error("Error: contents is not an array");
      }
      return ui;
    };

    // Generate HTML content for the blog
    const blogDetailHTML = `
        <div class="blog-detail">
          <div class="blog-header">
            <h1>${heading}</h1>
            <div class="blog-auth">
              <p class="blog-date">Exciting blog post by <span>@${author}</span> - Published on <span>${blogDate.day} ${blogDate.month}, ${
      blogDate.year
    }</span></p>
              <div class="share" id="share-icon">
                <i class="fa-regular fa-share-from-square"></i>
              </div>
            </div>
            <div class="blog_image">
              ${
                image
                  ? `<div class="blog-image">
                      <img src="${image}" alt="${heading}" />
                    </div>`
                  : ""
              }
            </div>
          </div>
          <div class="blog-content">
            ${checkContentType(content)}
          </div>
        </div>`;

    // Add the content to the blog detail container
    const blogDetailContainer = document.getElementById("blog-detail");
    blogDetailContainer.innerHTML = blogDetailHTML;

    // Share icon click event to copy the URL
    const shareIcon = document.getElementById("share-icon");
    shareIcon.addEventListener("click", () => {
      const url = window.location.href;

      // Copy the URL to clipboard
      navigator.clipboard
        .writeText(url)
        .then(() => {
          showToast("Copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
  } else {
    // Handle the case where no blog data is available
    document.title = "Blog Detail";
    const blogDetailContainer = document.getElementById("blog-detail");
    blogDetailContainer.innerHTML = `
        <p>No blog details found. Please return to the blog list.</p>
      `;
  }
});

// Function to show the toast message
function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;

  document.body.appendChild(toast);

  // Automatically remove the toast after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
