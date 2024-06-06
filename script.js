function showContent(id) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const activeContent = document.getElementById(id);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// Default to showing the first tab
document.addEventListener('DOMContentLoaded', () => {
    showContent('accredible');
});
