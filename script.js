// Animation au chargement des sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});

// Animation de type écriture pour le titre principal
document.addEventListener('DOMContentLoaded', () => {
    const text = "SSG Sécurité";
    const titleElement = document.querySelector('.te');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            titleElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

// Défilement doux pour les liens de navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation pour la barre de navigation en défilement
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Empêche de réanimer l’élément après l’apparition initiale
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
window.addEventListener('scroll', () => {
    const haider = document.querySelector('.haider');
    haider.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});
document.addEventListener('DOMContentLoaded', () => {
    const waveText = document.querySelector('.wave-text');
    waveText.innerHTML = waveText.textContent.split('').map((letter, index) =>
        `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`
    ).join('');
});


// Animation pour les sections si elles existent
const sections = document.querySelectorAll('section');
if (sections.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-section');

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.contact-section, footer');

    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight) {
                section.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // to reveal elements on page load if they are in view
});
document.addEventListener("DOMContentLoaded", function () {
    // Animation de défilement pour les champs de formulaire
    const formFields = document.querySelectorAll(".devis-form fieldset");

    function handleScrollAnimation() {
        formFields.forEach((field) => {
            const fieldPosition = field.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (fieldPosition < windowHeight - 100) {
                field.classList.add("visible");
            }
        });
    }

    // Exécute l'animation au défilement
    window.addEventListener("scroll", handleScrollAnimation);

    // Validation en temps réel
    const inputs = document.querySelectorAll(".devis-form input, .devis-form textarea, .devis-form select");

    inputs.forEach((input) => {
        input.addEventListener("input", function () {
            if (input.checkValidity()) {
                input.classList.remove("error");
                input.classList.add("valid");
            } else {
                input.classList.add("error");
                input.classList.remove("valid");
            }
        });
    });

    // Animation de confirmation après soumission
    const form = document.querySelector(".devis-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi pour l'exemple
        form.classList.add("submitted");
        alert("Merci ! Votre demande de devis a été envoyée.");
        form.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(
        ".about-us-section, .values-section, .team-section, .testimonial-section"
    );

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionPosition < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check
});
function recherche() {
    // Récupère le terme de recherche entré par l'utilisateur
    const query = document.getElementById("search-input").value.trim();
    
    // Si le champ est vide, on arrête le formulaire
    if (!query) {
      alert("Veuillez entrer un terme de recherche.");
      return false;
    }

    // Redirige vers la page de recherche avec le terme dans l'URL
    window.location.href = `recherche.html?q=${encodeURIComponent(query)}`;
    return false; // Empêche le rechargement de la page
  }
  document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  });
  // Fonction pour afficher le formulaire de contact
function displayContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.qualite, .reactivite, .suivi');

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(revealSection, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


