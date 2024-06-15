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

    // Highlight the active link in the sidebar
    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.sidebar ul li a[href="#${tabId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
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

function showCreateProject() {
    const projectDefaultIframe = document.querySelector('iframe[title="projectListBi"]');
    const projectCreateIframe = document.getElementById('projectCreateIframe');
    const backProjectButton = document.querySelector('.back-project-button');
    projectDefaultIframe.style.display = "none";
    projectCreateIframe.src = "https://forms.office.com/Pages/ResponsePage.aspx?id=e14dJ1ATlkurhFLb2kz0DGbi-Pp1oBxMjYHfLAdpEJxUN0I4Q0RNNDJHSFZIMEc2Q0ZYMVZZRExLVy4u&embed=true";
    projectCreateIframe.style.display = "block";
    backProjectButton.style.display = "inline-block";
}

function showProjectList() {
    const projectDefaultIframe = document.querySelector('iframe[title="projectListBi"]');
    const projectCreateIframe = document.getElementById('projectCreateIframe');
    const backProjectButton = document.querySelector('.back-project-button');
    projectDefaultIframe.style.display = "block";
    projectCreateIframe.style.display = "none";
    backProjectButton.style.display = "none";
}
