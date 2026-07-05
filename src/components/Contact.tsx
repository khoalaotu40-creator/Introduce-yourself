import React from 'react';
import { Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
          {/* Right: Contact Info */}
          <div className="order-1 lg:order-2 lg:pt-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-16">Thông tin liên lạc</h2>
            
            <div className="space-y-12 font-serif">
              <div>
                <h3 className="text-2xl mb-2 text-brand-light">Phone</h3>
                <p className="text-white/80 text-lg tracking-wide font-sans font-light">0775404040</p>
              </div>
              
              <div>
                <h3 className="text-2xl mb-2 text-brand-light">Email</h3>
                <p className="text-white/80 text-lg tracking-wide font-sans font-light">khoalaotu40@gmail.com</p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 text-brand-light">Social</h3>
                <div className="flex gap-4 text-white/80">
                  <a href="https://www.facebook.com/khoa.truong.562934/" target="_blank" rel="noopener noreferrer" className="border border-white/30 rounded-full p-2 hover:bg-white hover:text-black transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

          
          </div>
      </div>
    </section>
  );
}
