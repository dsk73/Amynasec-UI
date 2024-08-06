document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.querySelector('.mode-toggle');
    const modeCircle = document.querySelector('.mode-circle');
    const modeText = document.querySelector('.mode-text');
    const body = document.body;

    const dateTimeElement = document.getElementById('date-time');
    const textBoxes = document.querySelectorAll('.text-box');
    
    
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
    }
    
    
    function updateTextBoxes() {
        textBoxes[0].querySelector('.line-large').textContent = `${Math.floor(Math.random() * 201)} KM`;
        textBoxes[1].querySelector('.line-large').textContent = `${['Location A', 'Location B', 'Location C'][Math.floor(Math.random() * 3)]} (${Math.floor(Math.random() * 101)} KM)`;
        textBoxes[2].querySelector('.line-large').textContent = `${Math.floor(Math.random() * 201)} Km/Hr`;
        textBoxes[3].querySelector('.line-large').textContent = `${Math.floor(Math.random() * 101)} kWh`;
    }

    
    function toggleMode() {
        if (modeCircle.style.backgroundColor === 'green' || modeCircle.style.backgroundColor === '') {
            modeCircle.style.backgroundColor = 'red';
            body.style.background = 'radial-gradient(circle, #600b04, black)'; 
            modeText.textContent = 'Power Mode';
        } else {
            modeCircle.style.backgroundColor = 'green';
            body.style.background = 'radial-gradient(circle, #010630, black)'; 
            modeText.textContent = 'Eco Mode';
        }
    }

    
    setInterval(updateDateTime, 1000);

    
    setInterval(updateTextBoxes, 5000);

    
    updateDateTime();
    updateTextBoxes();

    
    modeToggle.addEventListener('click', toggleMode);
});
