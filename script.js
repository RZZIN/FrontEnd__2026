document.addEventListener("DOMContentLoaded", () => {

    const cria = document.getElementById("mainImage");

    const estados = {
        normal: "b_n.png",
        morto: "b_d.png",
        comendo: "b_c.png",
        feliz: "b_a.png",
        brincar: "b_b.png",
        alegre: "b_l.png",
        puto: "b_p.png"
    };

    let timeoutAcao = null;
    let morto = false;

    // 🍪 COMER
    window.alimentar = function() {
        if (morto) return;

        cria.src = estados.comendo;

        resetarTimeout();

        timeoutAcao = setTimeout(() => {
            cria.src = estados.feliz;

            setTimeout(() => {
                cria.src = estados.normal;
            }, 2000);
        }, 1000);
    }

    // 🎮 BRINCAR
    window.brincar = function() {
        if (morto) return;

        cria.src = estados.brincar;

        resetarTimeout();

        timeoutAcao = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);
    }

    // 💀 MATAR
    window.matar = function() {
        if (morto) return;

        morto = true;
        cria.src = estados.morto;

        resetarTimeout();

        alert("💀 Você matou o pet...");
    }

    // 💀 REVIVER
    window.reviver = function() {
        if (!morto) return;

        morto = false;
        cria.src = estados.normal;

        alert("✨ Pet reviveu!");
    }

    window.alegre = function() {
    if (morto) return;

    cria.src = estados.alegre;

    resetarTimeout();

    timeoutAcao = setTimeout(() => {
        cria.src = estados.feliz;

        timeoutAcao = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

// 😡 PUTO
window.puto = function() {
    if (morto) return;

    cria.src = estados.puto;

    resetarTimeout();

    timeoutAcao = setTimeout(() => {
        cria.src = estados.normal;
    }, 2000);
}

    function resetarTimeout() {
        if (timeoutAcao) clearTimeout(timeoutAcao);
    }

    // 🌙 DIA/NOITE
    const toggle = document.getElementById("day-night-toggle");

    toggle.addEventListener("change", () => {

        const input = document.querySelector("input[type='text']");
        const textos = document.querySelectorAll("body, p, h1, h2, button");

        if (toggle.checked) {
            document.body.style.backgroundImage = "url('bg_noite.png')";

            input.style.backgroundColor = "white";
            input.style.color = "black";

            textos.forEach(el => {
                el.style.color = "white";
            });

        } else {
            document.body.style.backgroundImage = "url('bg.png')";

            input.style.backgroundColor = "";
            input.style.color = "";

            textos.forEach(el => {
                el.style.color = "";
            });
        }
    });

});