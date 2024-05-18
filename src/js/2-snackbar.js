import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delay = document.querySelector('input');
const fulfilled = document.querySelector('[value="fulfilled"]');
const rejected = document.querySelector('[value="rejected"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilled.checked) {
        resolve(delay.value);
      } else if (rejected.checked) {
        reject(delay.value);
      }
    }, delay.value);
  });

  promise
    .then(value => {
      iziToast.show({
        title: '✅ OK',
        titleColor: '#FFF',
        message: `Fulfilled promise in ${delay.value}ms`,
        messageColor: '#FFF',
        backgroundColor: '#59A10D',
        borderBottom: '2px solid #B5EA7C',
        borderRadius: '4px',
        padding: '20px',
      });
    })
    .catch(error => {
      iziToast.show({
        title: '❌ Error',
        titleColor: '#FFF',
        message: `Rejected promise in ${delay.value}ms`,
        messageColor: '#FFF',
        backgroundColor: '#EF4040',
        borderBottom: '2px solid #FFBEBE',
        borderRadius: '4px',
        padding: '20px',
      });
    });
});
