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

    // Hide all right sidebars by default
    const rightSidebars = document.querySelectorAll('.right-sidebar');
    rightSidebars.forEach(sidebar => sidebar.style.display = 'none');
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

function toggleRightSidebar(sectionId) {
    const rightSidebar = document.getElementById(sectionId + 'RightSidebar');
    const buttonIcon = document.querySelector(`#${sectionId} .toggle-sidebar-button i`);
    
    if (rightSidebar.style.display === 'none' || rightSidebar.style.display === '') {
        rightSidebar.style.display = 'block';
        buttonIcon.classList.remove('fa-bars');
        buttonIcon.classList.add('fa-arrow-left');
    } else {
        rightSidebar.style.display = 'none';
        buttonIcon.classList.remove('fa-arrow-left');
        buttonIcon.classList.add('fa-bars');
    }
}

function showCreateProject() {
    const projectIframe = document.getElementById('projectCreateIframe');
    const projectListIframe = document.querySelector('#project .section-content iframe[title="projectListBi"]');
    const createButton = document.querySelector('.create-project-button');

    if (projectIframe.style.display === 'block') {
        projectIframe.style.display = 'none';
        projectListIframe.style.display = 'block';
        createButton.textContent = 'Create a Project';
    } else {
        projectIframe.src = 'https://forms.office.com/Pages/ResponsePage.aspx?id=e14dJ1ATlkurhFLb2kz0DGbi-Pp1oBxMjYHfLAdpEJxUN0I4Q0RNNDJHSFZIMEc2Q0ZYMVZZRExLVy4u&embed=true';
        projectIframe.style.display = 'block';
        projectListIframe.style.display = 'none';
        createButton.textContent = 'Back to Project List';
    }
}

function showCreateEmployee() {
    const employeeIframe = document.getElementById('employeeCreateIframe');
    const dashboardListIframe = document.querySelector('#dashboard .section-content iframe[title="employeeBi"]');
    const createButton = document.querySelector('.create-employee-button');

    if (employeeIframe.style.display === 'block') {
        employeeIframe.style.display = 'none';
        dashboardListIframe.style.display = 'block';
        createButton.textContent = 'Create an Employee';
    } else {
        employeeIframe.src = 'https://forms.office.com/r/QS8t1rUq3n?embed=true';
        employeeIframe.style.display = 'block';
        dashboardListIframe.style.display = 'none';
        createButton.textContent = 'Back to Dashboard List';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('error', () => handleIframeError(iframe));
    });

    showContent('accredible'); // Display the first tab by default
});
