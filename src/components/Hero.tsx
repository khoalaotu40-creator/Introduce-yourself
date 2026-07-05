import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://raw.githubusercontent.com/khoalaotu40-creator/Introduce-yourself/refs/heads/main/z8009289828789_696710bc6d6050a7ecedad2c633e328d.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Header / Logo */}
      <div className="absolute top-0 left-0 w-full p-8 z-20">
        <div className="max-w-7xl mx-auto">
          <span className="text-white font-serif italic text-xl tracking-wide">KhoaTruong</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
        <div className="max-w-2xl">
          <p className="text-white/90 text-lg mb-6 font-medium tracking-wide">
            Xin chào, tôi là Trương Phạm Đăng Khoa
          </p>
          <h1 className="text-white font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-10">
            Đây là các dịch vụ<br />
            tôi sẽ cung cấp cho <br />
            các bạn sử dụng.
          </h1>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('introduce')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand hover:bg-brand-hover text-black font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-colors"
            >
              Giới thiệu 
            </button>
            <button className="bg-brand hover:bg-brand-hover text-black font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-colors">
              Dịch vụ 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
