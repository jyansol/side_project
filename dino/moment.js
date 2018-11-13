const sendBtn = document.querySelector('.sendBtn');
const input = document.querySelector('input');

const key = (e) => {
  console.log(e.target.value);
  if (e.which !== 13) return;
  document.querySelector('p').textContent = moment().format(e.target.value);
};
input.addEventListener('keypress', key);
sendBtn.addEventListener('click', (e) => {
  console.log(input.value);
  document.querySelector('p').textContent = moment().format(input.value);
});
