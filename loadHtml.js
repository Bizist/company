function loadHTML(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.log('Error loading HTML:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('#header-placeholder', 'header.html');
    loadHTML('#footer-placeholder', 'footer.html');
});
