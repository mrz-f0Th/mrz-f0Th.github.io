const zoom = document.querySelector('.zoom');

const destruct = [...zoom.textContent].map(h => `<span class = "destruct">${h}</span>`).join('');
zoom.innerHTML = destruct;

const btnKirim = document.querySelector('.btn-kirim');
btnKirim.addEventListener('click', () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Maaf Form belum bisa di pakai',
        width: 400,
        // footer: '<a href>Why do I have this issue?</a>'
    })
})