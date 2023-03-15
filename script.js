// const p_tag_1stItem = document.querySelector(".error");
// const p_tag_2ndItem = document.querySelector("body > div.error");
// const p_tag_lists = document.querySelectorAll(".error");

// console.log(p_tag_1stItem);
// console.log(p_tag_2ndItem);
// console.log(p_tag_lists);

// let add_text = document.querySelector('p');
// add_text.innerText += " Wild thing.";

// let add_texts = document.querySelectorAll('p');

// add_texts.forEach(replace_text => {
//     replace_text.innerText += ' This text was added by ".forEach"'
// })

// let content_change = document.querySelector('.content')

// let person_list = ['Nick', 'Tom', 'Bill'];

// person_list.forEach(person => {
//     content_change.innerHTML += `<p>${person}</p>`;
// })

// const link = document.querySelector('a');
// console.log(link);
// link_attribute = link.getAttribute('href');
// console.log(link_attribute);
// link.setAttribute('href', 'https://www.yandex.ru');
// link.innerText = "Yandex search";

// const new_class = document.querySelector("p")
// new_class.setAttribute('class', 'success')

// const title = document.querySelector('h1');
// console.log(title);

// title.style.fontSize = '60px';
// title.style.marginTop = '10px';
// title.style.color = 'rgb(235, 169, 0)';

const change_class = document.querySelector(`div > p.error`)
// console.log(change_class.classList);
// change_class.classList.remove('error')
// console.log(change_class.classList);
// change_class.classList.add('success')

const initial_list = document.querySelectorAll('div p');
console.log(initial_list);

initial_list.forEach(tag => {
    let i = 1
    console.log(++i);
    if (tag.innerText.includes('error')) {
        tag.classList.add('error')
    }
    if (tag.innerText.includes('success')) {
        tag.classList.add('success')
    }
})

const title = document.querySelector('.title');
title.classList.toggle('test');
// title.classList.toggle('test');
