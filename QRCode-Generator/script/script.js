const wrapper = document.querySelector('.generator__wrapper')
const qrInput = document.querySelector('.generator__form input')
const generateBtn = wrapper.querySelector('.generator__form button')
const qrImg = wrapper.querySelector('.generator__qr-code img')


generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value
    if (qrValue !== undefined && qrValue !== '') {
        generateBtn.innerText = "Generating..."
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
        qrImg.addEventListener('load', () => {
            wrapper.classList.add('active')
            generateBtn.innerText = "Generate your QR Code"
        });
    }
    return
});