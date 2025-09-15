const productos = [
    {
      nombre: "SHAMPOO CLÁSICO",
      imagen: "../img/clasico.png",
      frase: "Despierta el cabello de tus sueños",
      descripcion: "Fórmula 100% natural, elaborado con el poder de 25 plantas ancestrales como Romero, Jengibre, Espinosilla, Ortiga y Moringa, para transformar tu cabellera desde la raíz. No recomendado para rizos (puede relajar la ondulación).",
      link: "https://www.mercadolibre.com.mx/"
    },
    {
      nombre: "SHAMPOO REFORZADO",
      imagen: "../img/reforzado.png",
      frase: "El secreto natural para un cabello fuerte y saludable",
      descripcion: "Elaborado con el poder de 35 plantas medicinales, incluyendo Ajo, Clavo, Pimienta, Canela y Cúrcuma, para nutrir tu cuero cabelludo y estimular el crecimiento sin químicos y sin hormonas. No recomendado para rizos, (puede relajar la ondulación).",
      link: "https://www.mercadolibre.com.mx/"
    },
    {
      nombre: "SHAMPOO MELIS",
      imagen: "../img/melis.png",
      frase: "¡Tu cabello fuerte, sano y abundante está a un baño de distancia!",
      descripcion: "Fórmula con el poder de 45 extractos naturales, incluyendo Bergamota, Pino y Guayaba para un cabello que roba miradas. 100% natural, 100% efectivo. No recomendado para rizos (puede relajar la ondulación).",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SHAMPOO CABALLERO",
      imagen: "../img/caballero.png",
      frase: "La fórmula definitiva para un cabello fuerte, sano y con crecimiento acelerado",
      descripcion: "¿Sueñas con un cabello más grueso, o detener la caída? Nuestro Shampoo Caballero está elaborado con 35 extractos de plantas (ajo, clavo, pimienta, canela y cúrcuma) para revitalizar tu cabello de forma 100% natural.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SHAMPOO HIDRATANTE",
      imagen: "../img/hidratante.png",
      frase: "Hidratación profunda que se nota al primer uso",
      descripcion: "Un baño de humectación para cabellos secos o maltratados. ¡Dile adiós al frizz y hola a un pelo suave, manejable y radiante! No recomendado para rizos (puede suavizar el patrón rizado).",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SHAMPOO REPARACIÓN EXTREMA",
      imagen: "../img/extrema.png",
      frase: "Transforma tu cabello dañado en una cabellera sedosa y llena de vida",
      descripcion: "No solo limpia, ¡reconstruye desde la raíz hasta las puntas! Ideal para cabellos castigados por químicos, calor o falta de cuidado. No recomendado para rizos (puede suavizar el patrón rizado).",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SHAMPOO RIZOS",
      imagen: "../img/rizos.png",
      frase: "Tus rizos. ¡Pero en su mejor versión!",
      descripcion: "Disfruta de todos los beneficios de tu shampoo favorito (Clásico, Reforzado o Melis)… ¡pero potenciados! Si tiñes tu cabello: La versión Melis y Reforzado podrían resecarlo por el tinte, lo ideal para ti es uno de nuestros tónicos.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SHAMPOO HIDRATACION MEDIA",
      imagen: "../img/media.png",
      frase: "¡Despierta tu cabello, vive la experiencia!",
      descripcion: "Controla la grasa en raíces sin sacrificar la hidratación de tus puntas. Ideal para cabello largo: luce cabelleras sedosas, ligeras y libres de resequedad.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SHAMPOO FELAS",
      imagen: "../img/felas.png",
      frase: "¡Transforma tu cabello y revive tu confianza!",
      descripcion: "No es solo un shampoo… es el cuidado que tu cabello siempre soñó. Potenciado con los beneficios de la naturaleza: más caléndula, manzanilla y miel para un cabello radiante y lleno de vida.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SHAMPOO PITA",
      imagen: "../img/pita.png",
      frase: "Cuidado natural que nutre y protege el cabello de tus pequeños",
      descripcion: "Diseñado para cabellos delicados – Elaborado con ingredientes naturales como caléndula, manzanilla y miel, que limpian suavemente sin irritar, dejando el cabello de tus niños protegido, suave y lleno de vida.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SHAMPOO KIDS",
      imagen: "../img/kids.png",
      frase: "El secreto natural para el cabello de tus hijos",
      descripcion: "Fórmula exclusiva con miel. No solo limpia... ¡transforma! Limpieza delicada que cuida cada hebra, respetando la ternura del cabello infantil.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "ACONDICIONADOR SOFT",
      imagen: "../img/soft.png",
      frase: "Despierta tu cabello de ensueño",
      descripcion: "Fórmula Botánica de 6 Plantas Hidratantes. Tu cabello merece lo mejor: un elixir nutritivo que no solo lo repara, sino que lo transforma.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "ACONDICIONADOR DE ALMENDRAS",
      imagen: "../img/almendras.png",
      frase: "Tu cabello merece amor natural",
      descripcion: "Transforma tu rutina capilar con el poder hidratante de 7 extractos botánicos, diseñado para nutrir, reparar y hacer brillar cada hebra como nunca antes.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "MÁSCARILLA HIDRATANTE",
      imagen: "../img/mascarilla.png",
      frase: "El secreto de una cabellera de ensueño",
      descripcion: "¡Transforma tu cabello en una sedosa cascada de hidratación! Nuestra mascarilla intensiva, enriquecida con el poder de 12 extractos botánicos, nutre, repara y devuelve la vida a tu pelo, dejándolo tan suave que no podrás dejar de tocarlo.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "OLEO REPARADOR",
      imagen: "../img/oleo.png",
      frase: "El secreto de un cabello de ensueño",
      descripcion: "Transforma tu cabello en una sensación brillante, suave y libre de frizz con nuestro Oleo Reparador, enriquecido con los poderes naturales del Argán, Aguacate y Almendras.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "TÓNICO CLÁSICO B5",
      imagen: "../img/tonico.png",
      frase: "Revitaliza tu cabello con la magia de la naturaleza",
      descripcion: "Descubre el Tónico Capilar  UNISEX de 25 Plantas Medicinales, una fórmula ancestral para un cabello fuerte, abundante y lleno de vida. Enriquecido con Vitamina B5 para un cuero cabelludo sano.",
      link: "https://www.mercadolibre.com.mx/"
    },
    ,
    {
      nombre: "SERUM ESTIMULADOR DE PESTAÑAS Y CEJAS",
      imagen: "../img/serum.png",
      frase: "¡Despierta tus pestañas y cejas, luce una mirada de ensueño!",
      descripcion: "Nuestro Sérum Estimulador de Pestañas y Cejas es el ritual nocturno que transforma tu mirada: más largas, densas y seductoras… ¡100% naturales. Fortalece desde la raíz: Activa el crecimiento con ingredientes eficaces.",
      link: "https://www.mercadolibre.com.mx/"
    }
  ];
  
  const container = document.getElementById('productos-container');
  
  productos.forEach((producto, index) => {
    const card = document.createElement('div');
    card.className = 'col-12 col-md-12 col-lg-4 mb-4 mb-lg-3';
  
    card.innerHTML = `
      <div class="card h-100">
        <center><img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></center>
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.frase}</p>
          <div class="d-flex gap-2 mt-3 justify-content-center">
          <button class="btn btn-primary w-50" onclick="mostrarDetalles(${index})">Ver más</button>
          <button class="btn btn-primary w-50" onclick="mostrarCompra(${index})">Comprar</button>
          </div>
        </div>
      </div>
    `;
  
    container.appendChild(card);
  });
  
  function mostrarDetalles(index) {
    const producto = productos[index];
  
    document.getElementById('modalTitulo').innerText = producto.nombre;
  
    document.getElementById('modalContenido').innerHTML = `
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12 text-center mb-3 mb-md-0">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-show">
        </div>
        <div class="col-12 col-md-12 col-lg-12">
          <p style="text-align: justify;">${producto.descripcion}</p>
        </div>
      </div>
    `;
  
    const modal = new bootstrap.Modal(document.getElementById('productoModal'));
    modal.show();
  }

  function mostrarCompra(index) {
    const whats = 'https://wa.me/message/QPGNI25GRI6GJ1';
    const producto = productos[index];
  
    document.getElementById('modalTitulo').innerText = producto.nombre;
  
    document.getElementById('modalContenido').innerHTML = `
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12 text-center mb-3 mb-md-0">
          <p>Realiza tu pedido: </p>
          <a href="${whats}" class="btn btn-secondary w-50" target="_blank">Whatsapp</a>
        </div>
        <div class="col-12 col-md-12 col-lg-12 text-center mb-3 mt-3 mb-md-0">
          <p>Próximamente: </p>
          <a href="${producto.link}" class="btn btn-warning w-50" target="_blank" onclick="return false;" style="pointer-events: none; cursor: default;">Mercado Libre</a>
        </div>
      </div>
    `;
  
    const modal = new bootstrap.Modal(document.getElementById('productoModal'));
    modal.show();
  }