// JavaScript pour les fonctionnalités interactives

document.addEventListener('DOMContentLoaded', () => {
    // Gestion personnalisée du scroll pour les liens d'ancrage
    function handleAnchorLinks() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') return;
                
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = 80; // Ajustement très fin pour positionnement parfait
                    const offsetTop = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Initialiser la gestion des liens d'ancrage
    handleAnchorLinks();
    
    // Gestion de la modale des résultats
    console.log('DOM chargé, initialisation de la modale...');
    
    const modal = document.getElementById('resultatsModal');
    const resultButton = document.getElementById('openResultsModal');
    const closeButton = document.querySelector('.close-modal');

    console.log('Éléments trouvés:', {
        modal: modal,
        resultButton: resultButton,
        closeButton: closeButton
    });

    // Test de cliquabilité
    document.body.addEventListener('click', (e) => {
        console.log('Click détecté sur:', e.target);
    });

    if (!modal || !resultButton || !closeButton) {
        console.error('Éléments de la modale non trouvés');
        return;
    }

    resultButton.addEventListener('click', (e) => {
        console.log('Click sur le bouton résultats');
        e.preventDefault();
        e.stopPropagation();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        createPieChart();
    });

    // Fermer la modale avec le bouton X
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Réactiver le scroll
    });

    // Fermer la modale en cliquant en dehors
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactiver le scroll
        }
    });

    // Fermer avec la touche Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Fonction pour créer le pie chart
    function createPieChart() {
        const data = [
            { label: 'McGill', value: 25 },
            { label: 'Autres', value: 15 },
            { label: 'EPFL', value: 15 },
            { label: 'HEC', value: 12.5 },
            { label: 'Ginette', value: 10 },
            { label: 'Sydney', value: 7.5 },
            { label: 'Stanford', value: 5 },
            { label: 'UPENN', value: 5 },
            { label: 'UCL', value: 5 }
        ];

        const svg = document.querySelector('.piechart g');
        if (!svg) {
            console.error('SVG pour le pie chart non trouvé');
            return;
        }

        // Vider le SVG existant
        svg.innerHTML = '';

        let startAngle = 0;
        const radius = 150;

        data.forEach((segment, index) => {
            const percentage = segment.value / 100;
            const endAngle = startAngle + (percentage * Math.PI * 2);

            const x1 = Math.cos(startAngle) * radius;
            const y1 = Math.sin(startAngle) * radius;
            const x2 = Math.cos(endAngle) * radius;
            const y2 = Math.sin(endAngle) * radius;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const largeArcFlag = percentage > 0.5 ? 1 : 0;

            path.setAttribute('d', `
                M 0 0
                L ${x1} ${y1}
                A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
                Z
            `);
            path.setAttribute('class', `segment-${segment.label.toLowerCase()}`);
            
            // Animation d'entrée
            path.style.opacity = '0';
            path.style.transform = 'scale(0.8)';
            
            svg.appendChild(path);

            // Animer l'entrée du segment
            setTimeout(() => {
                path.style.transition = 'all 0.5s ease-out';
                path.style.opacity = '1';
                path.style.transform = 'scale(1)';
            }, index * 100);

            startAngle = endAngle;
        });
    }
});

// Gestion des modales
document.addEventListener('DOMContentLoaded', function() {
    // Modales existantes
    const resultsModal = document.getElementById('resultatsModal');
    const satModal = document.getElementById('satModal');
    const eiklilModal = document.getElementById('eiklilModal');
    const gemModal = document.getElementById('gemModal');
    const portfolioModal = document.getElementById('portfolioModal');
    const imageModal = document.getElementById('imageModal');
    const superprofModal = document.getElementById('superprofModal');
    const profileModal = document.getElementById('profileModal');
    const programmeModal = document.getElementById('programmeModal');
    const schoolsModal = document.getElementById('schoolsModal');

    // Boutons d'ouverture
    const openResultsBtn = document.getElementById('openResultsModal');
    const openSatBtn = document.getElementById('openSatModal');
    const openEiklilBtn = document.getElementById('openEiklilModal');
    const openGemBtn = document.getElementById('openGemModal');
    const openPortfolioBtn = document.getElementById('openPortfolioModal');
    const openSuperprofBtn = document.getElementById('openSuperprofModal');
    const openSuperprofBtn2 = document.getElementById('openSuperprofModal2');
    const openProfileBtn = document.getElementById('openProfileModal');
    const openProgrammeBtn = document.getElementById('openProgrammeModal');
    const openSchoolsBtn = document.getElementById('openSchoolsModal');

    // Boutons de fermeture
    const closeButtons = document.querySelectorAll('.close-modal');

    // Fonction pour ouvrir une modale
    function openModal(modal) {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Fonction pour fermer une modale
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Fonction pour ouvrir l'image en plein écran
    window.openImageModal = function(imageSrc) {
        const fullScreenImage = document.getElementById('fullScreenImage');
        fullScreenImage.src = imageSrc;
        openModal(imageModal);
    };

    // Gestionnaires d'événements pour l'ouverture
    if (openResultsBtn) {
        openResultsBtn.addEventListener('click', () => openModal(resultsModal));
    }
    if (openSatBtn) {
        openSatBtn.addEventListener('click', () => openModal(satModal));
    }
    if (openEiklilBtn) {
        openEiklilBtn.addEventListener('click', () => openModal(eiklilModal));
    }
    if (openGemBtn) {
        openGemBtn.addEventListener('click', () => openModal(gemModal));
    }
    if (openPortfolioBtn) {
        openPortfolioBtn.addEventListener('click', () => openModal(portfolioModal));
    }
    if (openSuperprofBtn) {
        openSuperprofBtn.addEventListener('click', () => openModal(superprofModal));
    }
    if (openSuperprofBtn2) {
        openSuperprofBtn2.addEventListener('click', () => openModal(superprofModal));
    }
    if (openProfileBtn) {
        openProfileBtn.addEventListener('click', () => openModal(profileModal));
    }
    if (openProgrammeBtn) {
        openProgrammeBtn.addEventListener('click', () => openModal(programmeModal));
    }
    if (openSchoolsBtn) {
        openSchoolsBtn.addEventListener('click', () => openModal(schoolsModal));
    }

    // Gestionnaire d'événements pour la fermeture
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal(resultsModal);
            closeModal(satModal);
            closeModal(eiklilModal);
            closeModal(gemModal);
            closeModal(portfolioModal);
            closeModal(imageModal);
            closeModal(superprofModal);
            closeModal(profileModal);
            closeModal(programmeModal);
            closeModal(schoolsModal);
        });
    });

    // Fermer la modale en cliquant en dehors
    window.addEventListener('click', (event) => {
        if (event.target === resultsModal) {
            closeModal(resultsModal);
        }
        if (event.target === satModal) {
            closeModal(satModal);
        }
        if (event.target === eiklilModal) {
            closeModal(eiklilModal);
        }
        if (event.target === gemModal) {
            closeModal(gemModal);
        }
        if (event.target === portfolioModal) {
            closeModal(portfolioModal);
        }
        if (event.target === imageModal) {
            closeModal(imageModal);
        }
        if (event.target === superprofModal) {
            closeModal(superprofModal);
        }
        if (event.target === profileModal) {
            closeModal(profileModal);
        }
        if (event.target === programmeModal) {
            closeModal(programmeModal);
        }
        if (event.target === schoolsModal) {
            closeModal(schoolsModal);
        }
    });
}); 

// Gestion du carousel d'images - Version générique
const carousels = {};

// Fonction pour changer de slide
window.changeSlide = function(carouselId, direction) {
    if (!carousels[carouselId]) {
        carousels[carouselId] = { currentIndex: 0 };
    }
    
    const carousel = document.querySelector(`[data-carousel="${carouselId}"]`);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Retirer la classe active de l'élément actuel
    slides[carousels[carouselId].currentIndex].classList.remove('active');
    indicators[carousels[carouselId].currentIndex].classList.remove('active');
    
    // Calculer le nouvel index
    carousels[carouselId].currentIndex += direction;
    
    // Gérer les limites (boucle infinie)
    if (carousels[carouselId].currentIndex >= slides.length) {
        carousels[carouselId].currentIndex = 0;
    } else if (carousels[carouselId].currentIndex < 0) {
        carousels[carouselId].currentIndex = slides.length - 1;
    }
    
    // Ajouter la classe active au nouvel élément
    slides[carousels[carouselId].currentIndex].classList.add('active');
    indicators[carousels[carouselId].currentIndex].classList.add('active');
};

// Fonction pour aller à un slide spécifique
window.goToSlide = function(carouselId, slideIndex) {
    if (!carousels[carouselId]) {
        carousels[carouselId] = { currentIndex: 0 };
    }
    
    const carousel = document.querySelector(`[data-carousel="${carouselId}"]`);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator');
    
    if (slides.length === 0 || slideIndex < 0 || slideIndex >= slides.length) return;
    
    // Retirer la classe active de l'élément actuel
    slides[carousels[carouselId].currentIndex].classList.remove('active');
    indicators[carousels[carouselId].currentIndex].classList.remove('active');
    
    // Définir le nouvel index
    carousels[carouselId].currentIndex = slideIndex;
    
    // Ajouter la classe active au nouvel élément
    slides[carousels[carouselId].currentIndex].classList.add('active');
    indicators[carousels[carouselId].currentIndex].classList.add('active');
};

// Auto-play optionnel (décommenté si souhaité)
// setInterval(() => {
//     changeSlide(1);
// }, 5000); // Change d'image toutes les 5 secondes 

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Construction du sujet et du corps de l'email
            const subject = `Demande de RDV - ${data.matiere}`;
            
            const body = `
Nouvelle demande de rendez-vous

INFORMATIONS CONTACT :
- Nom : ${data.nom}
- Email : ${data.email}
- Téléphone : ${data.telephone}

MATIÈRE SOUHAITÉE :
${data.matiere}

MESSAGE / SITUATION :
${data.message || 'Aucun message'}

---
Envoyé depuis le site web Greg M. Mittel
            `.trim();
            
            // Création du lien mailto
            const mailtoLink = `mailto:gregjazzy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Ouverture du client email
            window.location.href = mailtoLink;
            
            // Message de confirmation
            alert('Votre client email va s\'ouvrir avec le message pré-rempli. Envoyez-le pour finaliser votre demande de rendez-vous.');
            
            // Optionnel : réinitialiser le formulaire
            // this.reset();
        });
    }
}); 