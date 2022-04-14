const submitBtn = document.getElementsByClassName('app-section--subscribe');

export const sub = submitBtn.addEventListener('click', function validate(email){
    
    const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru'];

    email = document.getElementsByClassName('app-section--email').value;

    if (email.includes(VALID_EMAIL_ENDINGS[0]) || email.includes(VALID_EMAIL_ENDINGS[1]) || email.includes(VALID_EMAIL_ENDINGS[2])){
        return true;
    } else {
        alert ('arasworia');
        return false;
    }

},false) 