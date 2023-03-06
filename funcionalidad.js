// Eventos para el ver el perfil
const parrafo = document.getElementById('desplegar')
const enlace_mas = document.getElementById('mas');
const enlace_menos = document.getElementById('menos');

// Eventos para ver el modal de carta de presentacion
const abrir_modal = document.getElementById('abrir_modal');
const modal_container = document.getElementById('modal-container');
const cerrar_modal = document.getElementById('cerrar_modal');

// funciones que escucha el evento del ancla de ver perfil completo o menos
enlace_mas.addEventListener('click', function(){
    parrafo.style.display = 'block';
});

enlace_menos.addEventListener('click', function(){
    parrafo.style.display = 'none';
});

// funciones que escuchan del evento del boton ver carta de presentacion 
abrir_modal.addEventListener('click', function(){
   modal_container.classList.add('show');
});

cerrar_modal.addEventListener('click', function(){
   modal_container.classList.remove('show');
});