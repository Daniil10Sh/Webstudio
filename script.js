const contact = document.querySelector('.contact');
console.log(contact);

const modalwindow = document.querySelector('.modalwindow')
console.log(modalwindow);

const cross = document.querySelector('.cross')
console.log(cross)

contact.addEventListener('click', function() {
    modalwindow.classList.add('active');
})

cross.addEventListener('click', function() {
    modalwindow.classList.remove('active');
})