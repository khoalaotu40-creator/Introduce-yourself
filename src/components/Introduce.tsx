import React from 'react';

export default function Introduce() {
  const achievements = [
    {
      title: "Top 40 - Cuộc thi Phân tích Dữ liệu DAZONE (2026)",
      description: "Thực hiện phân tích dữ liệu chuyên sâu để đánh giá và đo lường hiệu quả của các chiến dịch (Campaigns), từ đó đề xuất các giải pháp tối ưu hóa dựa trên số liệu thực tế.",
      role: "",
      tags: ["Python", "SQL", "Data Analysis"]
    },
    {
      title: "Vòng Chung khảo - Data Science UIT (2025)",
      description: "Sản phẩm: MULT — Hệ thống thông minh hỗ trợ soạn thảo, đánh giá và tự động đề xuất danh sách nhiệm vụ cho người dùng, được cá nhân hóa và sắp xếp theo thứ tự ưu tiên tối ưu.",
      role: "Lập trình viên chính (Main Coder).",
      tags: ["Python", "ReactJS"]
    },
    {
      title: "UIT AlgoBootcamp Mùa hè (2025)",
      description: "Sản phẩm: Hệ thống AGQR — Giải pháp tự động hóa việc khởi tạo mã QR, giúp tối ưu hóa quy trình và hỗ trợ người dùng truy cập, làm đề thi một cách nhanh chóng, tiện lợi.",
      role: "",
      tags: ["Python", "ReactJS"]
    },
    {
      title: "UIT AlgoBootcamp & Algo Challenge (2024)",
      description: "Hoạt động: Tham gia thi đấu và huấn luyện chuyên sâu để rèn luyện tư duy thuật toán, tối ưu hóa mã nguồn và làm chủ các cấu trúc dữ liệu nền tảng.",
      role: "",
      tags: ["Data Structures", "Algorithms", "Problem Solving"]
    }
  ];

  return (
    <section id="introduce" className="bg-zinc-900 py-24 md:py-32 text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Bio Section */}
        <div className="mb-24">
          <h2 className="font-serif text-4xl md:text-5xl mb-10 text-white">Giới thiệu bản thân</h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light max-w-4xl">
            Xin chào! Mình là sinh viên ngành Khoa học Máy tính tại Đại học Công nghệ Thông tin (UIT - ĐHQG-HCM), niên khóa 2024. Với niềm đam mê lớn dành cho Thuật toán và Khoa học Dữ liệu, mình luôn chủ động tìm kiếm cơ hội ứng dụng kiến thức vào thực tế. Hành trình của mình trải dài từ việc rèn luyện tư duy logic qua các cuộc thi thuật toán, xây dựng hệ thống phần mềm hiệu quả, cho đến việc khai phá dữ liệu để tìm ra các insights giá trị. Mình luôn sẵn sàng học hỏi, cải tiến công nghệ và đón nhận những thử thách mới.
          </p>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-white">Thành tích & Dự án nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {achievements.map((item, index) => (
              <div key={index} className="flex flex-col h-full border border-white/10 p-8 rounded-2xl hover:bg-white/5 hover:border-brand/50 hover:shadow-[0_0_15px_rgba(176,137,111,0.2)] transition-all duration-300">
                <h3 className="font-serif text-2xl mb-4 text-white">{item.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed font-light flex-grow">
                  {item.description}
                </p>
                {item.role && (
                  <p className="text-white/90 font-medium mb-6 text-sm">
                    Vai trò: <span className="font-light">{item.role}</span>
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-brand/20 text-brand-hover text-xs px-3 py-1.5 uppercase tracking-wider font-semibold rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
