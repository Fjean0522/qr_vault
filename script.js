const form = document.getElementById('generate-form');
const qrcode = document.getElementById('qrcode');

const submitDetails = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('Enter a URL')
    } else {
        loadSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);
        }, 1000);
    };
};

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size
    });
};

const loadSpinner = () => {
    document.getElementById('load-spinner').style.display = 'block'
}

const hideSpinner = () => {
    document.getElementById('load-spinner').style.display = 'none'
}

form.addEventListener('submit', submitDetails);