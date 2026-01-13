const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

header.style.textAlign = 'center';
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.padding = '20px';
footer.style.textAlign = 'center';
footer.style.bottom = '0';
footer.style.width = '100%';
footer.style.position = 'absolute'; 

const date = new Date();
const currentYear = date.getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Pizza Journey`;