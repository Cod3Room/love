function createFlower() {
  const flower = document.createElement("img");
  flower.src = "flower.png";
  flower.classList.add("flower");

  // Asegura que nunca se salga del ancho visible
  const left = Math.floor(Math.random() * 90); // Máximo 90vw
  flower.style.left = `${left}vw`;

  flower.style.animationDuration = (5 + Math.random() * 5) + "s";
  flower.style.opacity = Math.random();
  flower.style.pointerEvents = "none"; // Evita que interfiera con clics
  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 10000);
}

setInterval(createFlower, 500);

    function reproducirMusica() {
      const audio = document.getElementById("musica");
      audio.play();
    }

    async function handleYes() {
      reproducirMusica();
      document.querySelector(".no").style.display = "none";

      const form = document.getElementById("yes-form");
      const data = new FormData(form);

      await fetch("https://formspree.io/f/xrblkqdv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      showLove();
    }

    async function handleNo() {
      reproducirMusica();

      const form = document.getElementById("no-form");
      const data = new FormData(form);

      await fetch("https://formspree.io/f/xrblkqdv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      alert("Bueno… pero seguiré intentándolo 😅");
    }

    function showLove() {
      document.getElementById("respuesta").classList.remove("hidden");
    }
