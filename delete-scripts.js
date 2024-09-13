document.addEventListener('DOMContentLoaded', () => {
    const storedFile = JSON.parse(localStorage.getItem('uploadedFile'));
    if (storedFile) {
        document.getElementById('fileName').textContent = storedFile.name;
        document.getElementById('fileDetails').classList.remove('hidden');
    }

    document.getElementById('deleteButton').addEventListener('click', () => {
        localStorage.removeItem('uploadedFile');
        alert('File deleted successfully.');
        document.getElementById('fileDetails').classList.add('hidden');
    });

    document.getElementById('backToDashboard').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
});
