document.addEventListener('DOMContentLoaded', () => {
    const fileListContainer = document.getElementById('fileListContainer');
    const fileContentContainer = document.getElementById('fileContentContainer');
    const fileList = document.getElementById('fileList');
    const fileContent = document.getElementById('fileContent');

    const storedFile = localStorage.getItem('uploadedFile');
    if (storedFile) {
        const fileData = JSON.parse(storedFile);
        const listItem = document.createElement('li');
        const fileButton = document.createElement('button');
        fileButton.textContent = fileData.name;
        fileButton.onclick = () => {
            displayFileContent(fileData.content);
        };
        listItem.appendChild(fileButton);
        fileList.appendChild(listItem);
        fileListContainer.classList.remove('hidden');
    } else {
        const noFilesMessage = document.createElement('p');
        noFilesMessage.textContent = 'No files uploaded yet.';
        fileList.appendChild(noFilesMessage);
    }

    document.getElementById('backToDashboard').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
});

function displayFileContent(base64DataUrl) {
    const base64Data = base64DataUrl.split(',')[1];
    const decodedText = atob(base64Data); // Decode base64 to text
    const fileContent = document.getElementById('fileContent');
    fileContent.textContent = decodedText;
    const fileContentContainer = document.getElementById('fileContentContainer');
    fileContentContainer.classList.remove('hidden');
}
