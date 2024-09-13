function handleFileUpload(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            const fileData = {
                name: file.name,
                content: fileContent,
            };
            localStorage.setItem('uploadedFile', JSON.stringify(fileData));
            displayUploadedFile(fileData);
            alert('File uploaded successfully');
        };
        reader.readAsDataURL(file); // Use readAsDataURL to store the file as a base64 encoded string
    } else {
        alert('No file selected');
    }
}

function displayUploadedFile(fileData) {
    document.getElementById('uploadedFileName').textContent = `File Name: ${fileData.name}`;
    document.getElementById('uploadedFileContainer').classList.remove('hidden');
}

// Load and display the uploaded file if it exists in localStorage
document.addEventListener('DOMContentLoaded', () => {
    const storedFile = localStorage.getItem('uploadedFile');
    if (storedFile) {
        const fileData = JSON.parse(storedFile);
        displayUploadedFile(fileData);
    }

    document.getElementById('backToDashboard').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
});
