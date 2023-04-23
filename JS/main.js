var changed = false;

function ChangeText(p1) {
    var p1 = document.getElementById("loginProfile");
    p1.innerHTML = "Profile";
    p1.href = "profile.html";
    //document.location = 'profile.html';
    changed = true;
}

function checkChanged() {
    if (changed == true) {
        ChangeText();
    }
    return;
}