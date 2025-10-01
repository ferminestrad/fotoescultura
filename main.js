// Galería y Lightbox
const imgs = Array.from(document.querySelectorAll('.gallery-img'));
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
const lbClose = document.getElementById('lb-close');
const lbPrev = document.getElementById('lb-prev');
const lbNext = document.getElementById('lb-next');
let current = 0;

function showLightbox(index) {
  current = index;
  lightbox.style.display = 'flex';
  lbImg.src = imgs[index].src;
  lbCaption.textContent = imgs[index].alt;

  // 🔹 resetear filtro al abrir una nueva imagen
  if (colorSlider) {
    colorSlider.value = 0;
    lbImg.style.filter = "none";
  }
}

imgs.forEach((img, i) => img.addEventListener('click', () => showLightbox(i)));

lbClose.addEventListener('click', () => lightbox.style.display = 'none');
lbPrev.addEventListener('click', () => showLightbox((current - 1 + imgs.length) % imgs.length));
lbNext.addEventListener('click', () => showLightbox((current + 1) % imgs.length));

document.addEventListener('keydown', e => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'Escape') lightbox.style.display = 'none';
    if (e.key === 'ArrowLeft') lbPrev.click();
    if (e.key === 'ArrowRight') lbNext.click();
  }
});

// Modal secundario
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    caption.innerHTML = image.alt;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
const modal = document.getElementById("imageModal");

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal(); // Cierra el modal si haces clic fuera de la imagen
    }
});

// — Detección de orientación y span de columnas —
window.addEventListener('load', () => {
  document.querySelectorAll('.gallery-item img').forEach(img => {
    if (img.naturalWidth > img.naturalHeight) {
      img.closest('.gallery-item').classList.add('horizontal');
    }
  });
});

// 🔹 Slider de color
const colorSlider = document.getElementById("colorSlider");

if (colorSlider) {
  colorSlider.addEventListener("input", () => {
    lbImg.style.filter = `hue-rotate(${colorSlider.value}deg)`;
  });
}
