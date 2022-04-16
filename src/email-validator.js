
export const sub = setTimeout(function() {
    const main = document.getElementById('app-container');
    const btn = main.children[4].children[2].children[1];
    const input = main.children[4].children[2].children[0];

    btn.addEventListener('click', () => {
        const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru'];
        const email = input.value;
        const end = email.substring(email.indexOf('@') + 1);
        const start = email.substring(0, email.indexOf('@'));

        if(end === VALID_EMAIL_ENDINGS[0] && start.length > 0
        || end === VALID_EMAIL_ENDINGS[1] && start.length > 0
        || end === VALID_EMAIL_ENDINGS[2] && start.length > 0){
            alert('true');
        } else {
            alert('false');
        }
    }, false)

},1000) 
    

    





