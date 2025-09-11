document.addEventListener("DOMContentLoaded", () => {
    const testimonialsData = [
        {
            name: "Ana López",
            text: "Desde que uso los shampoos de Huerto de Plata, mi cabello nunca ha estado tan sano y brillante. ¡Los recomiendo 100%!",
            avatar: "assets/user.jpg"
        },
        {
            name: "Carlos Méndez",
            text: "Me encantan los productos naturales y la forma en que respetan el cabello. ¡Definitivamente volveré a comprar!",
            avatar: "assets/user.jpg"
        },
        {
            name: "Lucía Fernández",
            text: "La mascarilla de manzanilla es increíble. Mi cabello seco ahora está suave y nutrido, ¡gracias Huerto de Plata!",
            avatar: "assets/user.jpg"
        },
        {
            name: "Diego Ramírez",
            text: "Productos de calidad, totalmente naturales y efectivos. Noté la diferencia desde el primer uso.",
            avatar: "assets/user.jpg"
        }
    ];

    const testimonialsGrid = document.getElementById("testimonials-grid");
    if (testimonialsGrid) {
        testimonialsData.forEach(testimonial => {
            const col = document.createElement("div");
            col.className = "col-12 col-md-6 col-lg-4";
            col.innerHTML = `
                <div class="card h-100 p-4 shadow-sm text-center">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="rounded-circle mx-auto mb-3" style="width: 80px; height: 80px; object-fit: cover;">
                    <p class="mb-3 fst-italic text-muted">"${testimonial.text}"</p>
                    <h5 class="fw-bold mb-0 text-success">${testimonial.name}</h5>
                </div>
            `;
            testimonialsGrid.appendChild(col);
        });
    }
});