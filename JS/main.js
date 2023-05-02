var changed = false;

function ChangeText(p1) {
    var p1 = document.getElementById("loginProfile");
    p1.innerHTML = "Profile";
    p1.href = "Profile.html";
    //document.location = 'profile.html';
    changed = true;
}

function checkChanged() {
    if (changed == true) {
        ChangeText();
    }
    return;
}

// SignUp.HTML - This function saves the user's information 
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

// Profile.html - Updates the username and email with saveUserData()
function displayUserData() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (username && email) {
        document.getElementById('displayName').innerText = username;
        document.getElementById('displayEmail').innerText = email;
    }
}
