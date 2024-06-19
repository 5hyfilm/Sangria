document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, let's assume the correct username is "user" and password is "password"
    if (username === 'user' && password === 'password') {
        // Redirect to the main content page
        window.location.href = 'main.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
