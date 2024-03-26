const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const btnSend = document.getElementById('enviarCorreo');

btnSend.addEventListener('click', function () {
    alert('El correo fue enviado correctamente');
});

document.getElementsByTagName('h2')[0].ondblclick = function () {
    this.style.color = 'red';
};

document.getElementsByTagName('h2')[1].ondblclick = function () {
    this.style.color = 'red';
};

document.querySelectorAll('.toggle-content').forEach(item => {
    item.addEventListener('click', event => {
        const cardBody = event.target.nextElementSibling;
        cardBody.classList.toggle('d-none');
    });
});
