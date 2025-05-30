// Initialisation des animations AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false,
        mirror: true,
        offset: 50
    });

    // Animation de chargement de la page
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    pageTransition.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(pageTransition);

    // Supprimer l'animation de chargement après 1 seconde
    setTimeout(function() {
        pageTransition.classList.add('loaded');
        // Supprimer l'élément après la fin de l'animation
        setTimeout(function() {
            pageTransition.remove();
        }, 500);
    }, 1000);

    // Gestion du menu mobile
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Gestion du menu des langues
    const languageSelector = document.getElementById('languageSelector');
    const languageMenu = document.getElementById('languageMenu');

    if (languageSelector && languageMenu) {
        languageSelector.addEventListener('click', function(e) {
            e.preventDefault();
            languageMenu.classList.toggle('hidden');
        });

        // Changer la langue
        const languageItems = document.querySelectorAll('#languageMenu a');
        languageItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                
                // Mise à jour du sélecteur de langue
                languageSelector.querySelector('span').textContent = lang.toUpperCase();
                
                // Fermer le menu
                languageMenu.classList.add('hidden');
                
                // Ajouter la direction RTL pour l'arabe
                if (lang === 'ar') {
                    document.documentElement.setAttribute('dir', 'rtl');
                    // Chargement de la police arabe (si nécessaire)
                    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">';
                } else {
                    document.documentElement.removeAttribute('dir');
                }

                // Stocker la langue dans localStorage (pour persister le choix)
                localStorage.setItem('excellion_lang', lang);
            });
        });
    }

    // Navigation sticky avec effet de transition
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Animer les barres de statistiques lorsqu'elles entrent dans la vue
    const statBars = document.querySelectorAll('.stat-bar');
    
    // Observer pour détecter quand les éléments entrent dans la vue
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si l'élément est visible
                const bar = entry.target;
                
                // Récupérer la largeur cible de la barre
                const width = bar.className.match(/w-\[(.*?)\%\]/)[1] + '%';
                bar.style.width = width;
                
                // Arrêter d'observer cet élément
                observer.unobserve(bar);
            }
        });
    }, {
        root: null,
        threshold: 0.2, // Déclencher lorsque 20% de l'élément est visible
        rootMargin: '-50px'
    });
    
    // Observer chaque barre de statistiques
    statBars.forEach(bar => {
        observer.observe(bar);
    });

    // Animations fluides pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Fermer le menu mobile si ouvert
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Animation fluide avec cubic-bezier
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset pour la navigation fixe
                    behavior: 'smooth'
                });
            }
        });
    });

    // Validation du formulaire
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Validation simple
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                nameInput.classList.add('border-red-500');
                nameInput.classList.add('shake');
                isValid = false;
                
                // Retirer l'animation après qu'elle soit terminée
                setTimeout(() => {
                    nameInput.classList.remove('shake');
                }, 500);
            } else {
                nameInput.classList.remove('border-red-500');
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                emailInput.classList.add('border-red-500');
                emailInput.classList.add('shake');
                isValid = false;
                
                setTimeout(() => {
                    emailInput.classList.remove('shake');
                }, 500);
            } else {
                emailInput.classList.remove('border-red-500');
            }
            
            if (!messageInput.value.trim()) {
                messageInput.classList.add('border-red-500');
                messageInput.classList.add('shake');
                isValid = false;
                
                setTimeout(() => {
                    messageInput.classList.remove('shake');
                }, 500);
            } else {
                messageInput.classList.remove('border-red-500');
            }
            
            if (isValid) {
                // Simuler l'envoi du formulaire
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.disabled = true;
                submitButton.textContent = 'Envoi en cours...';
                
                // Simuler un délai d'envoi
                setTimeout(function() {
                    // Réinitialiser le formulaire
                    contactForm.reset();
                    
                    // Indiquer le succès
                    submitButton.textContent = 'Envoyé !';
                    submitButton.classList.add('bg-green-600');
                    submitButton.classList.remove('bg-gold');
                    
                    // Ajouter un toast de succès
                    showToast('Message envoyé avec succès !', 'success');
                    
                    // Revenir à l'état initial après 3 secondes
                    setTimeout(function() {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                        submitButton.classList.add('bg-gold');
                        submitButton.classList.remove('bg-green-600');
                    }, 3000);
                }, 1500);
            }
        });
    }

    // Fonction de validation d'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Toast notification
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white font-montserrat shadow-lg transform transition-all duration-500 translate-y-20 opacity-0 z-50 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Afficher le toast
        setTimeout(() => {
            toast.classList.remove('translate-y-20', 'opacity-0');
        }, 10);
        
        // Supprimer le toast après 3 secondes
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
    }

    // Effet parallaxe personnalisé pour les sections avec fond
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    window.addEventListener('scroll', function() {
        parallaxSections.forEach(section => {
            const background = section.querySelector('div:first-child');
            if (background) {
                const rect = section.getBoundingClientRect();
                const offsetY = window.scrollY;
                const speed = 0.5; // Ajustez cette valeur pour changer la vitesse de parallaxe
                
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    // Appliquer l'effet uniquement lorsque la section est visible
                    const yPos = -(rect.top * speed);
                    background.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
        });
    });

    // Animation d'écriture pour les titres principaux
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        // Ajouter une classe pour l'animation
        mainTitle.classList.add('text-focus-in');
    }

    // Initialisation du carrousel de témoignages SwiperJS
    if (document.querySelector('.testimonial-swiper')) {
        const testimonialSwiper = new Swiper('.testimonial-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            }
        });
    }
}); 