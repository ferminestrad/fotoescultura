/* Estilos generales */
body {
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    margin: 0;
    padding: 0;
    text-align: center;
}

/* Estilos para el encabezado */
header {
    background-color: #000; /* Fondo negro */
    display: flex; /* Utiliza flexbox */
    justify-content: space-between; /* Alinea los elementos al inicio y al final */
    align-items: center; /* Centra verticalmente los elementos */
    padding: 20px;
}

/* Hero */
.hero {
  height: 100%;
  display: flex;
  align-items: auto;
  justify-content: auto;
}
.hero-text {
  background: rgba(0,0,0,0.6);
  padding: 1em;
  text-align: center;
  color: var(--white);
}
.hero-text h1 { font-size: 3rem; margin-bottom: 0.5rem; }
.hero-text p { font-size: 1.2rem; }
.gallery-section { padding: 4rem 2rem; }
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:0;
  width: 100%;         /* ahora ocupa todo el viewport width */
  justify-items: auto;  /* centra los items horizontalmente */
  align-items: 0;          /* sin márgenes laterales */
}
.gallery-item {
  position: relative;
  overflow: hidden;
  min-height: 100%;
}

.gallery-item img {
  width: 100%;
  height: 100%;         /* ocupa todo el alto del contenedor */
  object-fit: cover;    /* recorta el exceso manteniendo proporción */
}
.gallery-item img:hover {
  transform: scale(1.1);
}
/* Si la imagen es horizontal, ocupa ambas columnas */
.gallery-item.horizontal {
  grid-column: 1 / -1;  /* ya lo tenías para el ancho */
  grid-row: span 2;     /* o el número de “filas” que quieras cubrir */
}
/* Opcional: en móviles usamos 1 sola columna */
@media (max-width: 600px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}

/* Lightbox */
.lightbox {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.9);
  display: none;
  align-items: center;
  justify-content: center;
}
.lightbox-img { max-width: 90%; max-height: 80vh; }
.lightbox-caption { color: var(--white); margin-top: 1rem; text-align: center; }
.nav {
  position: absolute;
  top: 50%;
  color: var(--white);
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
}
.prev { left: 2rem; }
.next { right: 2rem; }
.close {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 2.5rem;
  color: var(--white);
  cursor: pointer;
}

/* 🔹 Estilos del deslizador dentro del Lightbox */
.slider-container {
  position: absolute;
  bottom: 20px;   /* Se ubica abajo */
  left: 50%;      /* Centrado horizontal */
  transform: translateX(-50%);
  background: rgba(0,0,0,0.6);
  padding: 8px 15px;
  border-radius: 10px;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

#colorSlider {
  width: 200px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-text h1 { font-size: 2.5rem; }
  .hero-text p { font-size: 1rem; }
  .info-section { flex-direction: column; align-items: center; }
}
header {
    background-color: #000; /* Fondo negro */
    display: flex; /* Utiliza flexbox */
    justify-content: space-between; /* Alinea los elementos al inicio y al final */
    align-items: center; /* Centra verticalmente los elementos */
    padding: 20px;
}

.logo {
    width: 250px;
    height: auto;
}

header nav a {
    color: white; /* Color blanco para los enlaces */
    text-decoration: none; /* Sin subrayado */
    margin: 0 10px;
}

header nav a:hover {
    text-decoration: underline;
}

/* Menú hamburguesa (oculto en pantallas grandes) */
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
}

/* Menú desplegable móvil */
.mobile-menu {
    display: none;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: black;
    padding: 10px;
    border-radius: 8px;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}

.mobile-menu a {
    margin: 5px 0;
    color: white;
    text-decoration: none;
}

/* Mostrar menú móvil cuando está activo */
.mobile-menu.active {
    display: flex;
}

/* Sección */
section {
    padding: 20px;
}

/* Estilo responsivo */
@media (max-width: 768px) {
    nav {
        display: none; /* Ocultar navegación en pantallas pequeñas */
    }

    .menu-toggle {
        display: flex; /* Mostrar menú hamburguesa */
    }

    .mobile-menu {
        display: none; /* Mantener oculto el menú desplegable */
    }

    .mobile-menu.active {
        display: flex; /* Mostrar el menú móvil cuando se activa */
    }
}

/* Estilos del modal */
.modal {
    display: none; /* Ocultar el modal por defecto */
    position: fixed;
    z-index: 1000; /* Mostrarlo por encima de otros elementos */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; /* Agregar scroll si la imagen es muy grande */
    background-color: rgba(0, 0, 0, 0.8); /* Fondo negro semitransparente */
}

.modal-content {
    display: block;
    margin: auto;
    max-width: 80%; /* Limitar el tamaño de la imagen al 80% del ancho de la pantalla */
    max-height: 80%; /* Limitar el tamaño de la imagen al 80% del alto de la pantalla */
}

.close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
}

#caption {
    margin: auto;
    display: block;
    text-align: center;
    color: white;
    font-size: 18px;
    padding: 10px;
}
