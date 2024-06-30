

document.addEventListener("DOMContentLoaded", function () {
    var articleLinks = document.querySelectorAll(".article-link");
    var popup = document.getElementById("popup");
    var popupTitle = document.getElementById("popupTitle");
    var popupText = document.getElementById("popupText");
    var closePopup = document.getElementById("closePopup");

    if (!popup || !popupTitle || !popupText || !closePopup) {
        console.error("One or more elements are not found in the DOM.");
        return;
    }

    var articles = {
        1: {
            title: "Article 1 Title",
            content: "This is the content for Article 1."
        },
        2: {
            title: "Article 2 Title",
            content: "This is the content for Article 2."
        },
        3: {
            title: "Article 3 Title",
            content: "This is the content for Article 3."
        }
    };

    articleLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var articleId = this.getAttribute("data-article-id");
            var article = articles[articleId];

            if (!article) {
                console.error("Article not found for ID:", articleId);
                return;
            }

            popupTitle.innerText = article.title;
            popupText.innerText = article.content;

            popup.style.display = "block";
        });
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
