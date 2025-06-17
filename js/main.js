// JavaScript pour les fonctionnalités interactives

// Fonctions globales pour ouvrir les modales depuis le carrousel
window.testFunctionA = function() {
    console.log('🔴 FONCTION A APPELÉE - POUR MAELIE');
    alert('FONCTION A - MAELIE');
};

window.testFunctionB = function() {
    console.log('🔵 FONCTION B APPELÉE - POUR 85%');
    alert('FONCTION B - 85%');
};

window.testFunctionC = function() {
    console.log('🟢 FONCTION C APPELÉE - POUR SUPERPROF');
    alert('FONCTION C - SUPERPROF');
};

// Fonctions globales pour ouvrir les modales depuis le carrousel
window.openResultsModal = function() {
    console.log('🎯 FONCTION APPELÉE: openResultsModal - pour le graphique universités');
    console.log('🔍 Source de l\'appel:', (new Error()).stack);
    const modal = document.getElementById('resultatsModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Créer le pie chart si la fonction existe
        setTimeout(() => {
            const createPieChartFunc = window.createPieChart;
            if (typeof createPieChartFunc === 'function') {
                createPieChartFunc();
            }
        }, 100);
        console.log('✅ Modal resultatsModal ouverte');
    } else {
        console.error('❌ Modal resultatsModal non trouvée');
    }
};

window.openSuperprofModal = function() {
    console.log('🎯 FONCTION APPELÉE: openSuperprofModal - redirection Superprof');
    console.log('🔍 Source de l\'appel:', (new Error()).stack);
    // Rediriger vers le profil Superprof
    window.open('https://www.superprof.fr/referent-cours-particulier-paris-prof-grand-lycee-engage-contractuellement-resultats.html', '_blank');
    console.log('✅ Redirection vers Superprof effectuée');
};

window.openVideoModal = function() {
    console.log('🎯 FONCTION APPELÉE: openVideoModal - pour le slide Maelie');
    console.log('🔍 Source de l\'appel:', (new Error()).stack);
    const modal = document.getElementById('satModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('✅ Modal satModal (Maelie) ouverte');
    } else {
        console.error('❌ Modal satModal non trouvée');
    }
};

window.openMaelieVideo = function() {
    console.log('🎯 FONCTION APPELÉE: openMaelieVideo - pour la vidéo de Maelie');
    const modal = document.getElementById('satModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('✅ Modal satModal (vidéo Maelie) ouverte');
    } else {
        console.error('❌ Modal satModal non trouvée');
    }
};

// Nouvelles fonctions spécifiques au carrousel pour éviter les conflits
window.carouselOpenVideoModal = function() {
    console.log('🎯 CARROUSEL - FONCTION APPELÉE: carouselOpenVideoModal - pour Maelie');
    const modal = document.getElementById('satModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('✅ CARROUSEL - Modal satModal (Maelie) ouverte');
    } else {
        console.error('❌ CARROUSEL - Modal satModal non trouvée');
    }
};

window.carouselOpenSuperprofModal = function() {
    console.log('🎯 CARROUSEL - FONCTION APPELÉE: carouselOpenSuperprofModal - redirection Superprof');
    window.open('https://www.superprof.fr/referent-cours-particulier-paris-prof-grand-lycee-engage-contractuellement-resultats.html', '_blank');
    console.log('✅ CARROUSEL - Redirection vers Superprof effectuée');
};

window.carouselOpenResultsModal = function() {
    console.log('🎯 CARROUSEL - FONCTION APPELÉE: carouselOpenResultsModal - pour le graphique universités');
    const modal = document.getElementById('resultatsModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Créer le pie chart si la fonction existe
        setTimeout(() => {
            const createPieChartFunc = window.createPieChart;
            if (typeof createPieChartFunc === 'function') {
                createPieChartFunc();
            }
        }, 100);
        console.log('✅ CARROUSEL - Modal resultatsModal ouverte');
    } else {
        console.error('❌ CARROUSEL - Modal resultatsModal non trouvée');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Supprimer tous les event listeners qui pourraient interférer avec le carrousel
    console.log('🚀 Initialisation sans interference...');
    
    // Gestion du menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            console.log('🍔 Menu mobile cliqué');
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
    
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

    // COMMENTÉ: Ce gestionnaire pourrait interférer avec les onclick du carrousel
    // document.addEventListener('click', function(e) {
    //     // Si c'est un clic sur un élément avec onclick dans le carrousel, laisser faire
    //     if (e.target.closest('.carousel-slide') && e.target.onclick) {
    //         return; // Laisser l'événement onclick se déclencher normalement
    //     }
    //     
    //     // Si c'est un bouton dans un slide de carrousel, laisser faire aussi
    //     if (e.target.closest('.carousel-slide') && (e.target.tagName === 'BUTTON' || e.target.closest('button'))) {
    //         return; // Laisser l'événement se déclencher
    //     }
    // });

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
    window.createPieChart = function() {
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
    if (openProfileBtn) {
        openProfileBtn.addEventListener('click', () => openModal(profileModal));
    }
    if (openProgrammeBtn) {
        openProgrammeBtn.addEventListener('click', () => openModal(programmeModal));
    }
    if (openSchoolsBtn) {
        openSchoolsBtn.addEventListener('click', () => openModal(schoolsModal));
    }
    
    // Gestionnaires pour les boutons Superprof (redirection)
    if (openSuperprofBtn) {
        openSuperprofBtn.addEventListener('click', () => {
            console.log('🎯 Clic sur openSuperprofBtn - redirection Superprof');
            window.open('https://www.superprof.fr/referent-cours-particulier-paris-prof-grand-lycee-engage-contractuellement-resultats.html', '_blank');
        });
    }
    if (openSuperprofBtn2) {
        openSuperprofBtn2.addEventListener('click', () => {
            console.log('🎯 Clic sur openSuperprofBtn2 - redirection Superprof');
            window.open('https://www.superprof.fr/referent-cours-particulier-paris-prof-grand-lycee-engage-contractuellement-resultats.html', '_blank');
        });
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
            // closeModal(superprofModal); // COMMENTÉ: cette modale n'existe pas
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
        // if (event.target === superprofModal) {
        //     closeModal(superprofModal);
        // } // COMMENTÉ: cette modale n'existe pas
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

// Gestion des carrousels multiples
let currentCarouselIndex = 0;
const carousels = ['carousel-maelie', 'carousel-stats', 'carousel-superprof'];

window.switchCarousel = function(direction) {
    console.log('🔄 switchCarousel appelée, direction:', direction);
    
    // Cacher le carrousel actuel
    const currentCarousel = document.getElementById(carousels[currentCarouselIndex]);
    if (currentCarousel) {
        currentCarousel.style.display = 'none';
        currentCarousel.classList.remove('active');
    }
    
    // Calculer le nouvel index
    currentCarouselIndex = (currentCarouselIndex + direction + carousels.length) % carousels.length;
    console.log('📍 Nouveau carrousel index:', currentCarouselIndex);
    
    // Afficher le nouveau carrousel
    const newCarousel = document.getElementById(carousels[currentCarouselIndex]);
    if (newCarousel) {
        newCarousel.style.display = 'block';
        newCarousel.classList.add('active');
    }
    
    // Mettre à jour les indicateurs
    updateCarouselIndicators();
    
    console.log('✅ Carrousel changé vers:', carousels[currentCarouselIndex]);
};

window.goToCarousel = function(index) {
    console.log('🎯 goToCarousel appelée, index:', index);
    
    if (index < 0 || index >= carousels.length) {
        console.error('❌ Index invalide:', index);
        return;
    }
    
    // Cacher le carrousel actuel
    const currentCarousel = document.getElementById(carousels[currentCarouselIndex]);
    if (currentCarousel) {
        currentCarousel.style.display = 'none';
        currentCarousel.classList.remove('active');
    }
    
    // Définir le nouvel index
    currentCarouselIndex = index;
    
    // Afficher le nouveau carrousel
    const newCarousel = document.getElementById(carousels[currentCarouselIndex]);
    if (newCarousel) {
        newCarousel.style.display = 'block';
        newCarousel.classList.add('active');
    }
    
    // Mettre à jour les indicateurs
    updateCarouselIndicators();
    
    console.log('✅ Carrousel activé:', carousels[currentCarouselIndex]);
};

function updateCarouselIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentCarouselIndex);
    });
}

// Auto-play pour les carrousels multiples
document.addEventListener('DOMContentLoaded', function() {
    let carouselAutoplay;
    
    function startCarouselAutoplay() {
        carouselAutoplay = setInterval(() => {
            switchCarousel(1);
        }, 4800); // Change toutes les 4.8 secondes (juste milieu)
    }
    
    function stopCarouselAutoplay() {
        if (carouselAutoplay) {
            clearInterval(carouselAutoplay);
        }
    }
    
    // Démarrer l'auto-play
    startCarouselAutoplay();
    
    // Arrêter l'auto-play quand l'utilisateur interagit avec les carrousels
    const heroPlaceholder = document.querySelector('.hero-visual-placeholder');
    if (heroPlaceholder) {
        heroPlaceholder.addEventListener('mouseenter', stopCarouselAutoplay);
        heroPlaceholder.addEventListener('mouseleave', startCarouselAutoplay);
        
        // Arrêter l'auto-play lors des clics sur la navigation
        const carouselButtons = heroPlaceholder.querySelectorAll('.carousel-btn, .indicator');
        carouselButtons.forEach(button => {
            button.addEventListener('click', () => {
                stopCarouselAutoplay();
                setTimeout(startCarouselAutoplay, 8000); // Redémarre après 8 secondes
            });
        });
    }
});

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

// Gestion des FAQ accordéons
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fermer tous les autres éléments FAQ
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle l'élément actuel
            item.classList.toggle('active');
        });
    });
});

// ===== OPTIMISATIONS MOBILE =====

// Détection du type d'appareil
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Optimisations pour les appareils tactiles
if (isTouchDevice) {
    // Amélioration des interactions tactiles
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Optimisation du scroll sur mobile
    let ticking = false;
    
    function updateScrollPosition() {
        // Logique de scroll optimisée
        ticking = false;
    }
    
    document.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }, { passive: true });
    
    // Gestion améliorée des modales sur mobile
    function openModalMobile(modal) {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            
            // Prévenir le scroll en arrière-plan sur iOS
            modal.addEventListener('touchmove', function(e) {
                if (e.target === modal) {
                    e.preventDefault();
                }
            }, { passive: false });
        }
    }
    
    function closeModalMobile(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
    }
    
    // Remplacer les fonctions de modal existantes sur mobile
    window.openResultsModal = function() {
        const modal = document.getElementById('resultatsModal');
        openModalMobile(modal);
        setTimeout(() => {
            const createPieChartFunc = window.createPieChart;
            if (typeof createPieChartFunc === 'function') {
                createPieChartFunc();
            }
        }, 100);
    };
    
    window.openVideoModal = function() {
        const modal = document.getElementById('satModal');
        openModalMobile(modal);
    };
    
    window.openMaelieVideo = function() {
        const modal = document.getElementById('satModal');
        openModalMobile(modal);
    };
    
    // Gestion des boutons de fermeture sur mobile
    document.addEventListener('DOMContentLoaded', function() {
        const closeButtons = document.querySelectorAll('.close-modal');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modal = this.closest('.modal');
                closeModalMobile(modal);
            });
        });
        
        // Fermeture par tap en dehors de la modal
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModalMobile(modal);
                }
            });
        });
    });
}

// Optimisation du carrousel pour mobile
if (isMobile) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleCarouselSwipe() {
        const carousel = document.querySelector('.hero-carousel');
        if (!carousel) return;
        
        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipeGesture();
        }, { passive: true });
        
        function handleSwipeGesture() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe gauche - slide suivant
                    if (typeof nextSlide === 'function') {
                        nextSlide();
                    }
                } else {
                    // Swipe droite - slide précédent
                    if (typeof prevSlide === 'function') {
                        prevSlide();
                    }
                }
            }
        }
    }
    
    document.addEventListener('DOMContentLoaded', handleCarouselSwipe);
}

// Optimisation des performances sur mobile
if (isMobile) {
    // Réduction de la fréquence des animations
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (reducedMotion) {
        // Désactiver les animations coûteuses
        document.documentElement.style.setProperty('--animation-duration', '0s');
    }
    
    // Optimisation des images lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        });
    }
    
    // Optimisation du resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalculer les dimensions si nécessaire
            const event = new Event('optimizedResize');
            window.dispatchEvent(event);
        }, 250);
    });
}

// Amélioration de l'accessibilité mobile
document.addEventListener('DOMContentLoaded', function() {
    // Améliorer la navigation au clavier sur mobile
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        // Améliorer la visibilité du focus
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #d4af37';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Gestion des formulaires sur mobile
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Prévenir le zoom sur iOS
            if (isMobile && input.type !== 'file') {
                input.style.fontSize = '16px';
            }
            
            // Améliorer l'UX des champs requis
            input.addEventListener('invalid', function() {
                this.style.borderColor = '#dc3545';
                this.style.boxShadow = '0 0 0 0.2rem rgba(220, 53, 69, 0.25)';
            });
            
            input.addEventListener('input', function() {
                if (this.validity.valid) {
                    this.style.borderColor = '';
                    this.style.boxShadow = '';
                }
            });
        });
    });
});

// Optimisation des vidéos sur mobile
if (isMobile) {
    document.addEventListener('DOMContentLoaded', function() {
        const videos = document.querySelectorAll('video');
        
        videos.forEach(video => {
            // Optimiser le chargement des vidéos sur mobile
            video.preload = 'metadata';
            
            // Gérer la lecture automatique sur mobile
            if (video.hasAttribute('autoplay')) {
                video.muted = true; // Nécessaire pour l'autoplay sur mobile
            }
            
            // Optimiser les contrôles sur mobile
            video.addEventListener('loadedmetadata', function() {
                if (this.videoWidth > window.innerWidth) {
                    this.style.width = '100%';
                    this.style.height = 'auto';
                }
            });
        });
    });
}

// Debug mobile (à supprimer en production)
if (isMobile && window.location.search.includes('debug=true')) {
    console.log('🔧 Mode debug mobile activé');
    console.log('📱 User Agent:', navigator.userAgent);
    console.log('👆 Touch Device:', isTouchDevice);
    console.log('📏 Screen:', window.screen.width + 'x' + window.screen.height);
    console.log('🖼️ Viewport:', window.innerWidth + 'x' + window.innerHeight);
} 