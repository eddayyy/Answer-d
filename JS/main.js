// Functions for Login.html
// ============================================================
// Changes Login/Signup link in the navbar to the profile link
var changed = false;

function ChangeText() {
    var p1 = document.getElementById("loginProfile");
    p1.innerHTML = "Profile";
    p1.href = "Profile.html";
    changed = true;
    sessionStorage.setItem('loggedIn', 'true');
}

// Functions for SignUp.html
// ============================================================
// Saves the user's information and checks for password match
function saveUserData() {
    const username = document.getElementById('usernameField').value;
    const email = document.getElementById('emailField').value;
    const password = document.getElementById('passwordField').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password != confirmPassword) {
        alert('Passwords do not match. Please try again!');
        return false;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('User data saved successfully');
    window.location.href = "Profile.html";
    return true;
}

// Functions for Profile.html
// ============================================================
// Updates the username and email with saved user data
function displayUserData() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (username && email) {
        document.getElementById('displayName').innerText = username;
        document.getElementById('displayEmail').innerText = email;
    }
}

// Once logout button is clicked the following is done
function handleLogout() {
    resetNavBarToLogin();
    deleteUserData();
    location.href = 'index.html';
}

// Restores NavBar after thelogout button is clicked
function resetNavBarToLogin() {
    sessionStorage.removeItem('loggedIn');
    var p1 = document.getElementById("loginProfile");
    p1.innerHTML = "LOGIN/SIGN UP";
    p1.href = "Login.html";
}

// Functions for all pages
// ============================================================
// Updates the navigation bar based on the loggedIn flag
function updateNavigationBar() {
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (loggedIn) {
        var p1 = document.getElementById("loginProfile");
        p1.innerHTML = "Profile";
        p1.href = "Profile.html";
    }
}

// Call the updateNavigationBar function when the window loads
window.addEventListener('load', updateNavigationBar);

// Deletes user data and displays dummy data
function deleteUserData() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
}



