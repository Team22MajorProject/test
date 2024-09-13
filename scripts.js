function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem(username));
    
    if (storedUser && storedUser.password === password) {
        alert('Login successful');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}

function showCreateAccount() {
    const accountForm = `
        <h2>Create Account</h2>
        <form id="createAccountForm" onsubmit="return createAccount(event)">
            <input type="text" id="newUsername" placeholder="Username" required>
            <input type="password" id="newPassword" placeholder="Password" required>
            <button type="submit">Create Account</button>
        </form>
        <div class="link" onclick="showLogin()">Back to Login</div>
    `;
    document.querySelector('.container').innerHTML = accountForm;
}

function showLogin() {
    const loginForm = `
        <h2>Login</h2>
        <form id="loginForm" onsubmit="return login(event)">
            <input type="text" id="username" placeholder="Username" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <div class="link" onclick="showCreateAccount()">Create an account</div>
    `;
    document.querySelector('.container').innerHTML = loginForm;
}

function createAccount(event) {
    event.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    if (localStorage.getItem(username)) {
        alert('Username already exists');
    } else {
        localStorage.setItem(username, JSON.stringify({ password }));
        alert('Account created successfully');
        showLogin();
    }
}
