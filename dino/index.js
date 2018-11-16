window.onload = function() {
  var moment = require('moment');
  document.querySelector('p').textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
  document.querySelectorAll('.btn').forEach((btnEl) => {
    btnEl.addEventListener('click', (e) => {
      document.querySelector('p').textContent = moment().format(e.target.textContent);
    });
  });
};
