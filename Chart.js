// Function to generate QR code
const generateQRCode = (text) => {
    const qrCodeContainer = document.getElementById('qr-code-container');
    qrCodeContainer.innerHTML = ''; // Clear previous QR code

    const qrCodeUrl = `https://image-charts.com/chart?chs=300x300&cht=qr&chl=${encodeURIComponent(text)}`;
    const img = document.createElement('img');
    img.src = qrCodeUrl;
    img.alt = 'QR Code';
    qrCodeContainer.appendChild(img);
};

// Event listener for the button click
document.getElementById('generate-qr').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    generateQRCode(text);
});
// Function to change the location and fetch weather data for the new location
const changeText = () => {
    let text = document.getElementById('text').value;
    console.log(text)

    document.getElementById('qr-link').href = text;

    // Call the getLocalWeather function with the new latitude and longitude
    getLocalWeather(newLatitude, newLongitude);
}

