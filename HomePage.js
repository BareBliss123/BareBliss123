import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800 flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-yellow-400">Bare Bliss</h1>
        <nav className="space-x-4 text-white">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
          <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
          <a href="#contact" className="hover:text-yellow-400 font-semibold">Book Now</a>
        </nav>
      </header>

      <section className="bg-[url('/hero-image.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 p-10 rounded-2xl text-center max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Luxury Cleaning with a Sensual Twist</h2>
          <p className="mb-6 text-lg">Topless cleaners that leave your home spotless and your day unforgettable.</p>
          <button className="bg-yellow-400 text-black text-lg px-6 py-3 rounded-2xl hover:scale-105 transition-transform">Book Your Experience</button>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-gray-900 text-center">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-8">Our Signature Packages</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Basic Bliss", desc: "1 topless cleaner. Quick clean-up for small spaces." },
            { title: "Gentleman’s Deluxe", desc: "2 cleaners, deeper clean, optional light dance/music." },
            { title: "Executive Indulgence", desc: "2 cleaners, champagne option, custom themes." }
          ].map((service) => (
            <div key={service.title} className="bg-black border border-yellow-400 text-white p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-2 text-yellow-400">{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-yellow-400 text-black text-center">
        <h3 className="text-3xl font-semibold mb-4">Discretion. Elegance. Bliss.</h3>
        <p className="mb-6">Book now and experience cleaning with a luxurious touch.</p>
        <button className="bg-black text-yellow-400 text-lg px-6 py-3 rounded-2xl hover:scale-105 transition-transform">Book Now</button>
      </section>

      <footer className="bg-black text-center text-gray-500 p-6 text-sm">
        © 2025 Bare Bliss Cleaning Co. | Topless Cleaning Services | All Rights Reserved
      </footer>
    </div>
  );
}
