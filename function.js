// the background loader and hidden
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader-container').classList.add('loader-hidden');
    }, 1);
    
    setTimeout(function() {
        document.querySelector('.loader').classList.add('loader-hidden');
    }, 1);
});

// send message to your email
let emailSent = false;

document.querySelector('.btn-no').addEventListener('click', function() {
    if (!emailSent) {
        emailjs.send("service_vsb3nak", "template_bad")  // Thay YOUR_SERVICE_ID và YOUR_TEMPLATE_ID bằng Service ID và Template ID của bạn từ EmailJS
        .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );emailSent = true;
    };
    if (currentQuestion == 1) {
        currentQuestion++;
        updateText();
        document.getElementById('response-text').innerText = text.Q4;
        document.querySelector('.btn-yes').classList.add('btn-hidden');
        document.querySelector('.btn-no').classList.add('btn-hidden');
        const linkButton = document.createElement('a');
        linkButton.href = 'https://www.facebook.com';
        linkButton.className = 'btn btn-primary btn-messenger';
        linkButton.innerText = 'thank you... 🥰'; //change the text here
        document.querySelector('.btn-group').appendChild(linkButton);
    }else if (currentQuestion == 2) {
        document.getElementById('response-text').innerText = text.Q5;
        document.querySelector('.btn-yes').classList.add('btn-hidden');
        document.querySelector('.btn-no').classList.add('btn-hidden');
        const linkButton = document.createElement('a');
        linkButton.href = 'https://m.me/dat.lequocdat6996/'; // change your link here
        linkButton.className = 'btn btn-primary btn-messenger';
        linkButton.innerText = 'Bạn có thể viết ở đây 🙁'; //change the text here
        document.querySelector('.btn-group').appendChild(linkButton);
    };
});

document.querySelector('.btn-yes').addEventListener('click', function() {
    if (!emailSent) {
        emailjs.send("service_vsb3nak", "template_good")  // Thay YOUR_SERVICE_ID và YOUR_TEMPLATE_ID bằng Service ID và Template ID của bạn từ EmailJS
        .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );emailSent = true;
    };
    currentQuestion++;
    updateText();
    if (currentQuestion == 3) {
        document.querySelector('.btn-yes').classList.add('btn-hidden');
        document.querySelector('.btn-no').classList.add('btn-hidden');
        const linkButton = document.createElement('a');
        linkButton.href = 'https://m.me/dat.lequocdat6996/'; // change your link here
        linkButton.className = 'btn btn-primary btn-messenger';
        linkButton.innerText = 'Để lại lời nhắn cho mình nha 🥰'; //change the text here
        document.querySelector('.btn-group').appendChild(linkButton);
    };
});

// change the text you want to display
let currentQuestion = 1;
const text = {
    Q1: 'Trong năm 2025 bạn đã có bồ chưa?',
    Q2: 'Nếu chưa có thì bạn cho mình cơ hội được làm quen bạn nhé ^.^',
    Q3: 'Tuy mình không phải là 1 người hoàn hảo nhưng mình biết nấu ăn, biết chăm sóc và biết lắng nghe, có thể chở bạn đi bất cứ nơi nào bạn muốn, vậy bạn để lại lời nhắn cho mình biết với nhoa ^.^',
    Q4: 'Cảm ơn bạn đã hoàn thành bài khảo sát của mình, chúc bạn một ngày tốt lành',
    Q5: 'Bạn có thể cho mình biết lý do được không? 😥',
    A11: 'chưa có bồ ^.^',
    A12: 'có rồi nè 😉',
    A21: 'ô keee...',
    A22: 'bây giờ mình chưa muốn 😓'
};
function updateText() {
    document.getElementById('response-text').innerText = text[`Q${currentQuestion}`];
    document.getElementById('response-text-btn_y').innerText = text[`A${currentQuestion}1`];
    document.getElementById('response-text-btn_n').innerText = text[`A${currentQuestion}2`];
}
document.getElementById('response-text').innerText = text.Q1;
document.getElementById('response-text-btn_y').innerText = text.A11;
document.getElementById('response-text-btn_n').innerText = text.A12;




        
