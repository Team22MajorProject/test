function navigateToUpload() {
    window.location.href = 'upload.html';
}

function navigateToAccess() {
    window.location.href = 'access.html';
}

function deleteFile() {
    window.location.href = 'delete.html';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logout').addEventListener('click', () => {
        window.location.href = 'index.html'; // Assuming 'index.html' is the login page
    });
});
