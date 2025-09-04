<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="pt-15 bg-gradient-to-br from-taxi-gray to-white">
      <div class="container-custom section-padding">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-5xl lg:text-6xl font-bold text-taxi-black leading-tight">
              Premium Taxi
              <span class="text-taxi-yellow">Service</span>
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              Experience luxury and comfort with our professional drivers and premium vehicles. 
              Available 24/7 for your convenience.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn-primary text-lg px-8 py-4">
                Book Your Ride
              </button>
              <router-link to="/tours" class="btn-secondary text-lg px-8 py-4 text-center">
                Explore Tour Packages
              </router-link>
            </div>
            <div class="flex items-center space-x-8 pt-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-taxi-yellow">500+</div>
                <div class="text-gray-600">Happy Customers</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-taxi-yellow">24/7</div>
                <div class="text-gray-600">Available</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-taxi-yellow">50+</div>
                <div class="text-gray-600">Premium Cars</div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="bg-taxi-yellow rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div class="bg-white rounded-2xl p-6 shadow-xl">
                <div class="text-center space-y-4">
                  <img 
                    src="/assets/images/car.png" 
                    alt="Our Premium Taxi Car" 
                    class="w-40 h-40 mx-auto object-contain"
                  />
                  <h3 class="text-xl font-semibold">Our Premium Car</h3>
                  <p class="text-gray-600">Experience luxury and comfort</p>
                  <button class="w-full bg-taxi-yellow text-taxi-black font-semibold py-3 rounded-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="bg-white">
      <div class="container-custom section-padding">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-taxi-black mb-4">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of transportation services to meet all your needs
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-taxi-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mb-6">
              <img 
                src="/assets/images/car.png" 
                alt="City Taxi Car" 
                class="w-12 h-12 object-contain"
              />
            </div>
            <h3 class="text-xl font-semibold mb-4">City Taxi</h3>
            <p class="text-gray-600 mb-6">
              Quick and reliable city transportation with professional drivers and clean vehicles.
            </p>
            <button class="btn-secondary w-full">Book Now</button>
          </div>
          
          <div class="bg-taxi-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mb-6">
              <span class="text-2xl">✈️</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Airport Transfer</h3>
            <p class="text-gray-600 mb-6">
              Punctual airport pickups and drop-offs with flight tracking and meet & greet service.
            </p>
            <button class="btn-secondary w-full">Book Now</button>
          </div>
          
          <div class="bg-taxi-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mb-6">
              <span class="text-2xl">🏢</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Corporate Travel</h3>
            <p class="text-gray-600 mb-6">
              Business transportation solutions with professional drivers and luxury vehicles.
            </p>
            <button class="btn-secondary w-full">Book Now</button>
          </div>
          
          <div class="bg-taxi-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mb-6">
              <span class="text-2xl">🎉</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Special Events</h3>
            <p class="text-gray-600 mb-6">
              Transportation for weddings, parties, and special occasions with premium service.
            </p>
            <button class="btn-secondary w-full">Book Now</button>
          </div>
          
          <div class="bg-taxi-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mb-6">
              <span class="text-2xl">🌙</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Night Service</h3>
            <p class="text-gray-600 mb-6">
              Safe and reliable transportation during late hours with experienced drivers.
            </p>
            <button class="btn-secondary w-full">Book Now</button>
          </div>
          
          <div class="bg-taxi-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mb-6">
              <span class="text-2xl">🚐</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Group Travel</h3>
            <p class="text-gray-600 mb-6">
              Comfortable transportation for groups with spacious vehicles and flexible scheduling.
            </p>
            <button class="btn-secondary w-full">Book Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-taxi-gray">
      <div class="container-custom section-padding">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-taxi-black">Why Choose Best Taxi?</h2>
            <p class="text-xl text-gray-600 leading-relaxed">
              We are committed to providing the highest quality taxi service with safety, 
              comfort, and reliability as our top priorities.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-taxi-yellow rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 class="font-semibold text-lg">Professional Drivers</h3>
                  <p class="text-gray-600">Licensed, experienced, and courteous drivers</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-taxi-yellow rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 class="font-semibold text-lg">Premium Vehicles</h3>
                  <p class="text-gray-600">Well-maintained, clean, and comfortable cars</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-taxi-yellow rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 class="font-semibold text-lg">24/7 Availability</h3>
                  <p class="text-gray-600">Round-the-clock service for your convenience</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-taxi-yellow rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 class="font-semibold text-lg">Competitive Pricing</h3>
                  <p class="text-gray-600">Fair and transparent pricing with no hidden fees</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-taxi-yellow rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div class="bg-white rounded-2xl p-6 shadow-xl">
                <div class="text-center space-y-4">
                  <img 
                    src="/assets/images/car.png" 
                    alt="Our Premium Taxi Vehicle" 
                    class="w-32 h-32 mx-auto object-contain"
                  />
                  <h3 class="text-xl font-semibold">Our Premium Vehicle</h3>
                  <p class="text-gray-600">Well-maintained and comfortable</p>
                  <div class="flex justify-center space-x-1">
                    <span class="text-yellow-400">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-taxi-black text-white">
      <div class="container-custom section-padding">
        <div class="text-center mb-16">
          <div class="flex justify-center mb-6">
            <img 
              src="/assets/images/car.png" 
              alt="Contact Us - Our Taxi Car" 
              class="w-24 h-24 object-contain"
            />
          </div>
          <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to book your ride? Contact us today for the best taxi service experience.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-taxi-yellow rounded-full flex items-center justify-center">
                    <span class="text-taxi-black">📞</span>
                  </div>
                  <div>
                    <div class="font-semibold">Phone</div>
                    <div class="text-gray-300">+91 8921 603 717</div>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-taxi-yellow rounded-full flex items-center justify-center">
                    <span class="text-taxi-black">📧</span>
                  </div>
                  <div>
                    <div class="font-semibold">Email</div>
                    <div class="text-gray-300">besttaxiservice2024@gmail.com</div>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-taxi-yellow rounded-full flex items-center justify-center">
                    <span class="text-taxi-black">📍</span>
                  </div>
                  <div>
                    <div class="font-semibold">Address</div>
                    <div class="text-gray-300">Cheruvadi, Mukkam, Kozhikode, Kerala, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-6">Business Hours</h3>
              <div class="space-y-2 text-gray-300">
                <!-- <div class="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>6:00 AM - 12:00 AM</span>
                </div> -->
                <div class="flex justify-between">
                  <span>Monday - Sunday:</span>
                  <span>24/7 Service</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8">
            <h3 class="text-2xl font-semibold text-taxi-black mb-6">Send us a Message</h3>
            <form class="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent">
              </div>
              <div>
                <input type="email" placeholder="Your Email" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent">
              </div>
              <div>
                <input type="tel" placeholder="Your Phone" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent">
              </div>
              <div>
                <textarea rows="4" placeholder="Your Message" 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"></textarea>
              </div>
              <button type="submit" class="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
}
</script>


