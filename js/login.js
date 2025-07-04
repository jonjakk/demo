// Login functionality for Mercedes-Benz Car Configurator

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    if (!isLoggedIn()) {
        createLoginOverlay();
    } else {
        addLogoutButton();
    }
});

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('mbLoggedIn') === 'true';
}

// Create login overlay
function createLoginOverlay() {
    // Add class to body to prevent scrolling
    document.body.classList.add('not-logged-in');
    
    const loginOverlay = document.createElement('div');
    loginOverlay.className = 'login-overlay';
    
    loginOverlay.innerHTML = `
        <div class="login-container">
            <img src="images/mercedes-logo.png" alt="Mercedes-Benz Logo">
            <h2>Welcome to Mercedes-Benz</h2>
            <p>Please enter the password to continue</p>
            <form class="login-form" id="login-form">
                <input type="password" id="password" placeholder="Enter password" required>
                <button type="submit" class="btn">Login</button>
                <p class="login-error" id="login-error">Incorrect password. Please try again.</p>
            </form>
            <p><small>Hint: The password is Next123!!</small></p>
        </div>
    `;
    
    document.body.appendChild(loginOverlay);
    
    // Focus on password field
    setTimeout(() => {
        document.getElementById('password').focus();
    }, 100);
    
    // Add event listener to form
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        
        if (password === 'Next123!!') {
            // Set logged in status
            localStorage.setItem('mbLoggedIn', 'true');
            
            // Remove login overlay
            document.body.removeChild(loginOverlay);
            
            // Remove not-logged-in class from body
            document.body.classList.remove('not-logged-in');
            
            // Add logout button
            addLogoutButton();
        } else {
            // Show error message
            document.getElementById('login-error').style.display = 'block';
        }
    });
}

// Logout function
function logout() {
    localStorage.removeItem('mbLoggedIn');
    window.location.reload();
}

// Add logout button to the page
function addLogoutButton() {
    const nav = document.querySelector('nav ul');
    
    if (nav) {
        // Check if logout button already exists
        if (document.querySelector('.logout-btn')) {
            return;
        }
        
        const logoutLi = document.createElement('li');
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.textContent = 'Logout';
        logoutLink.className = 'logout-btn';
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
        
        logoutLi.appendChild(logoutLink);
        nav.appendChild(logoutLi);
    }
}

// No need for this block as we're handling it in the DOMContentLoaded event above