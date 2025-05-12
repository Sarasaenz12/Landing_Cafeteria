
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-rese");
    const modal = document.getElementById("modalExito");
    const btnCerrar = document.getElementById("cerrarModal");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const correo = document.getElementById("Correo").value.trim();
        const personas = document.getElementById("personas").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;

        if (!nombre || !telefono || !correo || !personas || !fecha || !hora) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        // Mostrar el modal personalizado aviso de que se ha hecho la reserva
        modal.style.display = "flex";
        form.reset();
    });

    btnCerrar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cierra modal si el usuario hace clic fuera del contenido
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
