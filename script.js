// Scroll to blog section
function scrollToBlogs() {
    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });
}

// Read More popup
function readMore(text) {
    document.getElementById("popupText").innerText = text;
    document.getElementById("popup").style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Search blogs
function searchBlogs() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {

        let title = blog
            .querySelector("h3")
            .innerText
            .toLowerCase();

        let description = blog
            .querySelector("p")
            .innerText
            .toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }
    });
}