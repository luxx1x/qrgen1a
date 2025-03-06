document.getElementById('generate-btn').addEventListener('click', function() {
    const qrInput = document.getElementById('qr-input').value;
    const qrSize = document.getElementById('qr-size').value;
    const qrColor = document.getElementById('qr-color').value;
    const qrCodeDiv = document.getElementById('qr-code');
    const downloadBtn = document.getElementById('download-btn');

    // Clear previous QR code
    qrCodeDiv.innerHTML = '';

    if (qrInput) {
        // Generate QR code
        $(qrCodeDiv).qrcode({
            text: qrInput,
            width: qrSize,
            height: qrSize,
            background: "#ffffff",
            foreground: qrColor
        });

        // Show download button
        downloadBtn.style.display = 'inline-block';
        downloadBtn.onclick = function() {
            const canvas = qrCodeDiv.querySelector('canvas');
            if (canvas) {
                const link = document.createElement('a');
                link.href = canvas.toData
