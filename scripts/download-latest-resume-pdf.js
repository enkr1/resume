document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('fab-download-pdf-button');
    const fabContainer = document.getElementById('fab-download-pdf-container');

    if (!downloadButton || !fabContainer) return

    // Create a loader element
    const loader = document.createElement('div');
    loader.className = 'fab-loader';
    loader.style.display = 'none'; // Initially hidden
    fabContainer.appendChild(loader); // Append to the container to be styled relative to it

    downloadButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Show loader and hide button icon/text temporarily
        loader.style.display = 'block';
        const buttonContent = downloadButton.innerHTML;
        downloadButton.innerHTML = ''; // Clear button content to show only loader if loader is inside button
        // Or, adjust styling so loader overlays or replaces button icon

        // Path to your manually uploaded PDF
        const pdfPath = 'assets/pdfs/resume.pdf';
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const fileName = `Jing Hui PANG - 彭竞辉 - Resume - ${formattedDate}.pdf`;

        // Create a temporary anchor element to trigger the download
        const tempLink = document.createElement('a');
        tempLink.href = pdfPath;
        tempLink.setAttribute('download', fileName);
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

        // Hide loader and restore button content after a short delay
        setTimeout(() => {
            loader.style.display = 'none';
            downloadButton.innerHTML = buttonContent; // Restore original button content
        }, 1500); // Adjust delay as needed
    });
});