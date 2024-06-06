function showContent(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');

    const activeContent = document.getElementById(tabId);
    activeContent.style.display = 'block';
}

// Display the first tab by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('accredible');
});