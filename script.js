const zoom = document.querySelector('.zoom');

const destruct = [...zoom.textContent].map(h => `<span class = "destruct">${h}</span>`).join('');
zoom.innerHTML = destruct
console.log(destruct)