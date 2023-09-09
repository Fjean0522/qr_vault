const form = document.getElementById('generate-form');
const qrcode = document.getElementById('qrcode');

const submitDetails = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('Enter a URL')
    } else {
        loadSpinner();

        setTimeout(() => {

            hideSpinner();
            generateQRCode(url, size);

            setTimeout(() => {
              const saveUrl = qrcode.querySelector('img').src;
              downloadBtn(saveUrl);
            }, 50);

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
};

const hideSpinner = () => {
    document.getElementById('load-spinner').style.display = 'none'
};

const clearUI = () => {
    qrcode.innerHTML = '';
    const saveLink = document.getElementById('save-link');

    if (saveLink) {
        saveLink.remove();
    }
};

const downloadBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Download QR Code';
    document.getElementById('generated').appendChild(link);
};

form.addEventListener('submit', submitDetails);