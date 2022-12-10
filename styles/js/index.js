const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddencontact1 = document.querySelectorAll('.hiddencontact1');
hiddencontact1.forEach((el) => observer.observe(el));
const hiddencontact2 = document.querySelectorAll('.hiddencontact2');
hiddencontact2.forEach((el) => observer.observe(el));
const hiddencontact3 = document.querySelectorAll('.hiddencontact3');
hiddencontact3.forEach((el) => observer.observe(el));


const hiddenElements2 = document.querySelectorAll('.hidden');
hiddenElements2.forEach((el) => observer.observe(el));

const hiddenpro1 = document.querySelectorAll('.hiddenpro1');
hiddenpro1.forEach((el) => observer.observe(el));
const hiddenpro2 = document.querySelectorAll('.hiddenpro2');
hiddenpro2.forEach((el) => observer.observe(el));
const hiddenpro3 = document.querySelectorAll('.hiddenpro3');
hiddenpro3.forEach((el) => observer.observe(el));
