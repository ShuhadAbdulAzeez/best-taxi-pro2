<template>
  <div id="app" class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white text-taxi-black shadow-lg fixed w-full top-0 z-50 border-b border-gray-200">
      <nav class="container-custom px-4 py-4">
        <div class="flex items-center justify-between">
                     <!-- Logo -->
           <div class="flex items-center space-x-3">
             <img 
               src="/assets/images/logo.png" 
               alt="Best Taxi Pro Logo" 
               class="w-20 h-20 object-contain"
             />
             <!-- <span class="text-xl font-bold">Best Taxi Pro</span> -->
           </div>
          
                     <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="text-taxi-black hover:text-taxi-yellow transition-colors">Home</router-link>
            <router-link :to="{ path: '/', hash: '#services' }" class="text-taxi-black hover:text-taxi-yellow transition-colors">Services</router-link>
            <router-link to="/tours" class="text-taxi-black hover:text-taxi-yellow transition-colors">Tour Packages</router-link>
            <router-link :to="{ path: '/', hash: '#about' }" class="text-taxi-black hover:text-taxi-yellow transition-colors">About</router-link>
            <router-link :to="{ path: '/', hash: '#contact' }" class="text-taxi-black hover:text-taxi-yellow transition-colors">Contact</router-link>
          </div>
          
                     <!-- Desktop Buttons -->
           <div class="hidden md:flex items-center space-x-4">
             <button class="btn-primary text-sm py-2 px-4">Book Now</button>
           </div>
          
          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center space-x-4">
            <button class="btn-primary text-sm py-2 px-4">Book Now</button>
                         <button 
               @click="toggleMobileMenu" 
               class="text-taxi-black hover:text-taxi-yellow transition-colors p-2"
               aria-label="Toggle mobile menu"
             >
              <!-- Hamburger Icon -->
              <div class="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  class="w-6 h-0.5 bg-current transition-all duration-300"
                  :class="mobileMenuOpen ? 'rotate-45 translate-y-1' : ''"
                ></span>
                <span 
                  class="w-6 h-0.5 bg-current transition-all duration-300 mt-1"
                  :class="mobileMenuOpen ? 'opacity-0' : ''"
                ></span>
                <span 
                  class="w-6 h-0.5 bg-current transition-all duration-300 mt-1"
                  :class="mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''"
                ></span>
              </div>
            </button>
          </div>
        </div>
        
                 <!-- Mobile Navigation Menu -->
         <div 
           class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
           :class="mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
         >
           <div class="py-4 space-y-4 border-t border-gray-300 mt-4">
                        <router-link 
              to="/" 
              @click.native="closeMobileMenu"
              class="block py-2 px-4 text-taxi-black hover:text-taxi-yellow hover:bg-gray-100 rounded-lg transition-colors"
            >
              Home
            </router-link>
            <router-link 
              :to="{ path: '/', hash: '#services' }" 
              @click.native="closeMobileMenu"
              class="block py-2 px-4 text-taxi-black hover:text-taxi-yellow hover:bg-gray-100 rounded-lg transition-colors"
            >
              Services
            </router-link>
            <router-link 
              to="/tours" 
              @click.native="closeMobileMenu"
              class="block py-2 px-4 text-taxi-black hover:text-taxi-yellow hover:bg-gray-100 rounded-lg transition-colors"
            >
              Tour Packages
            </router-link>
            <router-link 
              :to="{ path: '/', hash: '#about' }" 
              @click.native="closeMobileMenu"
              class="block py-2 px-4 text-taxi-black hover:text-taxi-yellow hover:bg-gray-100 rounded-lg transition-colors"
            >
              About
            </router-link>
                         <router-link 
              :to="{ path: '/', hash: '#contact' }" 
              @click.native="closeMobileMenu"
              class="block py-2 px-4 text-taxi-black hover:text-taxi-yellow hover:bg-gray-100 rounded-lg transition-colors"
            >
              Contact
            </router-link>
         </div>
        </div>
      </nav>
    </header>

    <main class="pt-24">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 text-taxi-black py-12 border-t border-gray-200">
      <div class="container-custom px-4">
        <div class="grid md:grid-cols-4 gap-8">
                     <div class="space-y-4">
             <div class="flex items-center space-x-2">
               <img 
                 src="/assets/images/logo.png" 
                 alt="Best Taxi Pro Logo" 
                 class="w-16 h-16 object-contain"
               />
               <span class="text-xl font-bold">Best Taxi</span>
             </div>
                         <p class="text-gray-600">
               Your trusted partner for premium transportation services.
             </p>
          </div>
          
                     <div>
             <h4 class="font-semibold mb-4">Quick Links</h4>
             <ul class="space-y-2 text-gray-600">
               <li><router-link to="/" class="hover:text-taxi-yellow transition-colors">Home</router-link></li>
               <li><router-link :to="{ path: '/', hash: '#services' }" class="hover:text-taxi-yellow transition-colors">Services</router-link></li>
               <li><router-link to="/tours" class="hover:text-taxi-yellow transition-colors">Tour Packages</router-link></li>
               <li><router-link :to="{ path: '/', hash: '#about' }" class="hover:text-taxi-yellow transition-colors">About</router-link></li>
               <li><router-link :to="{ path: '/', hash: '#contact' }" class="hover:text-taxi-yellow transition-colors">Contact</router-link></li>
             </ul>
           </div>
           
           <div>
             <h4 class="font-semibold mb-4">Services</h4>
             <ul class="space-y-2 text-gray-600">
               <li>City Taxi</li>
               <li>Airport Transfer</li>
               <li>Corporate Travel</li>
               <li>Special Events</li>
             </ul>
           </div>
          
          <div>
            <h4 class="font-semibold mb-4">Connect With Us</h4>
            <div class="flex space-x-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 class="w-10 h-10 bg-taxi-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-taxi-black">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7z"/>
                  <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
                  <circle cx="17.5" cy="6.5" r="1.1"/>
                </svg>
              </a>
              <a href="https://wa.me/918921603717" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                 class="w-10 h-10 bg-taxi-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-taxi-black">
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.57.03.3 5.31.33 11.8c.01 2.08.56 4.09 1.6 5.87L0 24l6.5-1.86a11.74 11.74 0 0 0 5.56 1.45h.05c6.49-.03 11.76-5.31 11.73-11.8a11.9 11.9 0 0 0-3.32-8.31zM12.1 21.1h-.04a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.86 1.1 1.1-3.76-.24-.39a9.77 9.77 0 0 1-1.53-5.26C2.15 6.4 6.42 2.14 12.03 2.1h.04c5.6 0 9.87 4.27 9.9 9.87.03 5.61-4.27 9.88-9.87 9.91z"/>
                  <path d="M17.2 14.03c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13s-.69.85-.84 1.03c-.16.18-.31.2-.57.07-.26-.13-1.1-.4-2.1-1.27-.78-.69-1.31-1.55-1.46-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.44.09-.18.04-.33-.02-.46-.06-.13-.6-1.44-.82-1.98-.22-.53-.45-.46-.6-.47l-.51-.01c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.18 1.85 2.83 4.48 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.54-.63 1.76-1.25.22-.62.22-1.15.16-1.26-.06-.11-.24-.18-.5-.31z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
                 <div class="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
           <p>&copy; 2025 Best Taxi. All rights reserved.</p>
         </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  mounted() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  }
}
</script>
