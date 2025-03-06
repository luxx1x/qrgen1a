document.getElementById('generate-btn').addEventListener('click', function() {
    const qrInput = document.getElementById('qr-input').value;
    const qrCodeDiv = document.getElementById('qr-code');

    // Clear previous QR code
    qrCodeDiv.innerHTML = '';

    if (qrInput) {
        // Generate QR code
        $(qrCodeDiv).qrcode({
            text: qrInput,
            width: 200,
            height: 200
        });
    } else {
        alert('Please enter a URL or text to generate a QR code.');
    }
});
