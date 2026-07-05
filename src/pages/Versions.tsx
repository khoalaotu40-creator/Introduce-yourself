import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Versions() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 transition-all hover:border-brand/50 hover:bg-zinc-800/80"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 inline-block rounded-full bg-brand/20 px-3 py-1 text-xs font-medium text-brand-light">
                Phiên bản 1.0 (Hiện tại)
              </div>
              <h3 className="mb-2 text-2xl font-semibold">Giao diện Cơ bản</h3>
              <p className="mb-6 text-gray-400">
                Phát hành: Tháng 7, 2026
              </p>
              <ul className="mb-8 space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-brand text-lg leading-none">•</span>
                  <span>Cung cấp giao diện giới thiệu cơ bản.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-brand text-lg leading-none">•</span>
                  <span>Hệ thống liên hệ tích hợp email.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-brand text-lg leading-none">•</span>
                  <span>Tối ưu hóa hiển thị đa thiết bị.</span>
                </li>
              </ul>
            </div>
            
            <div className="relative z-10 mt-auto flex items-center text-brand-light font-medium group-hover:text-brand transition-colors">
              <span>Trải nghiệm ngay</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
          
          {/* Card 2 */}
          <a 
            href="#" 
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-8 transition-all hover:border-white/20 hover:bg-zinc-800/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-400">
                Phiên bản 2.0 (Sắp tới)
              </div>
              <h3 className="mb-2 text-2xl font-semibold opacity-80">Hệ thống Nâng cao</h3>
              <p className="mb-6 text-gray-500">
                Dự kiến: Tháng 12, 2026
              </p>
              <ul className="mb-8 space-y-3 text-gray-400">
                <li className="flex items-start opacity-70">
                  <span className="mr-3 text-gray-600 text-lg leading-none">•</span>
                  <span>Tích hợp hệ thống quản lý nội dung (CMS).</span>
                </li>
                <li className="flex items-start opacity-70">
                  <span className="mr-3 text-gray-600 text-lg leading-none">•</span>
                  <span>Thêm phần blog cá nhân.</span>
                </li>
                <li className="flex items-start opacity-70">
                  <span className="mr-3 text-gray-600 text-lg leading-none">•</span>
                  <span>Tối ưu hóa SEO.</span>
                </li>
              </ul>
            </div>
            
            <div className="relative z-10 mt-auto flex items-center text-gray-500 font-medium group-hover:text-gray-300 transition-colors">
              <span>Đang phát triển</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 opacity-50 group-hover:opacity-100" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
