import { faqData } from './faq.js';

const container = document.querySelector('.container');
const accordionContainer = document.querySelector('.accordion-container');

faqData.forEach((item) => {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');
    accordionContainer.appendChild(accordionItem);

    const header = document.createElement('button');
    header.classList.add('accordion-header');
    header.textContent = item.question;
    accordionItem.appendChild(header);

    const icon = document.createElement('span');
    icon.classList.add('icon');
    header.appendChild(icon);

    const context = document.createElement('p');
    context.textContent = item.answer;
    context.classList.add('accordion-content');
    accordionItem.appendChild(context);

    header.addEventListener('click', () => {
        document.querySelectorAll('.accordion-item').forEach((otherItem) => {
            if (otherItem !== accordionItem) {
                otherItem.querySelector('.accordion-content').classList.remove('open');
                otherItem.querySelector('.icon').classList.remove('icon-minus');
                otherItem.classList.remove('open');
            }
        });
        icon.classList.toggle('icon-minus');
        context.classList.toggle('open');
    });
});
