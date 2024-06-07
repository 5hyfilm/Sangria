function showContent(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.left = '100%';
    });

    const activeContent = document.getElementById(tabId);
    activeContent.classList.add('active');
    setTimeout(() => {
        activeContent.style.left = '0';
    }, 10); // Slight delay to trigger transition
}

function handleIframeError(iframe) {
    iframe.contentWindow.location = 'about:blank';
    const errorMsg = document.createElement('div');
    errorMsg.textContent = 'Content cannot be displayed. Please check the source.';
    errorMsg.style.color = 'red';
    iframe.parentNode.appendChild(errorMsg);
}

function logout() {
    // Perform logout actions here, such as clearing session data
    // Redirect to login page
    window.location.href = 'login.html';
}

function openChatGPT() {
    window.open('https://chatgpt.com/g/g-1DHKWZRPl-marko-hr-bot', '_blank', 'width=800,height=600');
}

document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('error', () => handleIframeError(iframe));
    });

    showContent('accredible'); // Display the first tab by default
});
