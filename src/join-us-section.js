let instance = null;

class Section {
    constructor(headlineText, subscribeText) {
        this.headlineText = headlineText;
        this.subscribeText = subscribeText;
        if(!instance){
            window.addEventListener('load', () => {
                const joinOurProgramSection = document.createElement('section');
                joinOurProgramSection.className = 'app-section app-section--image-program'
                const main = document.getElementById("app-container");     
                main.appendChild(joinOurProgramSection); 
                main.insertBefore(joinOurProgramSection, main.children[4]);
                const headline = document.createElement('h1');
                headline.className = 'app-title--ourprogram';
                headline.innerText = headlineText;
                joinOurProgramSection.appendChild(headline);
                const smlHeadline = document.createElement('h2');
                smlHeadline.className = 'app-smlTitle';
                smlHeadline.innerText = `Sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua.`
                joinOurProgramSection.appendChild(smlHeadline);
                const divFlex = document.createElement('div');
                divFlex.className = 'input-div-flex';
                joinOurProgramSection.appendChild(divFlex);
                const email = document.createElement('input');
                email.setAttribute('type', 'email');
                email.setAttribute('value', 'Email');
                email.className = 'app-section--email';
                divFlex.appendChild(email);
                const subscribe = document.createElement('button');
                subscribe.innerHTML = subscribeText;
                subscribe.className = 'app-section--subscribe';
                divFlex.appendChild(subscribe);
                

                subscribe.addEventListener('click', function(event){
                    event.preventDefault();
                    console.log(event);
                },false) 
});
        }
    }
}

export class SectionCreator {
    create(type){
        switch(type){
            case 'standard':
                return new Section ('Join Our Program','SUBSCRIBE');
            case 'advanced':
                return new Section ('Join Our Advanced Program','Subscribe to Advanced Program');
        }
    }
    remove(){
        setTimeout(function () {
            let mainTag = document.getElementById('app-container');
            let removeMainTag = mainTag.children[4];
            removeMainTag.remove();
        }, 2000)
    }
};




