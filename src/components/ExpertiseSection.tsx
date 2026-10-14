import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { WashiTape } from "./WashiTape";
import {
  Compass,
  Layers,
  ShieldCheck,
  Sparkles,
  Server,
  Lock,
  Bot,
  Cpu,
  Terminal,
} from "lucide-react";

export const ExpertiseSection: React.FC = () => {
  const cards = [
    {
      title: "Technology Strategy",
      subtitle: "Kiến trúc hệ thống & Lựa chọn công nghệ",
      icon: <Compass className="w-6 h-6 text-amber-700" />,
      color: "bg-[#FEF08A]", // Soft pastel yellow
      rotate: "-rotate-1",
      badge: "STRATEGY",
      tapeColor: "bg-teal-200/80",
      points: [
        "Thiết kế kiến trúc Modular SaaS đáp ứng đa quy mô doanh nghiệp từ 50 đến 10,000+ nhân viên.",
        "Lựa chọn công nghệ hiện đại, cân bằng tốc độ release và khả năng bảo trì hệ thống.",
        "Tối ưu chi phí hạ tầng Cloud (AWS/GCP) với chiến lược containerization & auto-scaling.",
      ],
    },
    {
      title: "Product Development",
      subtitle: "Điều phối phát triển tính năng HRM",
      icon: <Layers className="w-6 h-6 text-sky-700" />,
      color: "bg-[#BAE6FD]", // Sky blue
      rotate: "rotate-1",
      badge: "DELIVERY",
      tapeColor: "bg-pink-300/80",
      points: [
        "Dẫn dắt lộ trình phát triển: Time Tracking, Automated Payroll, Performance Review & Employee Self-Service.",
        "Thiết lập quy trình Agile/Scrum chặt chẽ, tối ưu CI/CD pipeline cho release hàng tuần.",
        "Cộng tác mật thiết cùng Product & UI/UX designers để đảm bảo giao diện trực quan và trải nghiệm mượt mà.",
      ],
    },
    {
      title: "System Reliability & Security",
      subtitle: "Bảo mật dữ liệu nhân sự & Mở rộng quy mô",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-800" />,
      color: "bg-[#BBF7D0]", // Light green
      rotate: "-rotate-1",
      badge: "SECURITY",
      tapeColor: "bg-amber-300/80",
      points: [
        "Mã hóa dữ liệu AES-256 at-rest và TLS 1.3 in-transit cho toàn bộ hồ sơ lương & thông tin cá nhân.",
        "Triển khai kiến trúc Multi-Tenant phân lập dữ liệu cấp cơ sở dữ liệu với phân quyền RBAC đa cấp.",
        "Hệ thống giám sát APM, Logging tập trung và SLA duy trì 99.98% thời gian hoạt động liên tục.",
      ],
    },
    {
      title: "AI Integration & Automation",
      subtitle: "Ứng dụng AI vào HR Tech thực chiến",
      icon: <Sparkles className="w-6 h-6 text-purple-700" />,
      color: "bg-[#E9D5FF]", // Soft purple
      rotate: "rotate-1",
      badge: "AI LAB",
      tapeColor: "bg-yellow-200/80",
      points: [
        "AI Semantic CV Parser: Tự động trích xuất kỹ năng, học vấn, kinh nghiệm từ CV đa ngôn ngữ.",
        "Smart Fit Score: Thuật toán so khớp thông minh giữa hồ sơ ứng viên và yêu cầu tuyển dụng.",
        "HR Virtual Assistant: Trợ lý AI giải đáp thắc mắc nội bộ, tra cứu chính sách và phúc lợi tự động.",
      ],
    },
  ];

  return (
    <section id="expertise" className="py-10 sm:py-16 px-4 sm:px-10 border-b-2 border-black/15">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="inline-block px-4 py-1.5 bg-[#FED7AA] border-2 border-black shadow-[3px_3px_0px_#000] rotate-[-1deg]">
            <span className="font-pixel text-lg sm:text-xl text-black">
              // 03. TECHNICAL LEADERSHIP & EXPERTISE
            </span>
          </div>
          <span className="font-handwriting text-2xl text-neutral-600 font-bold select-none">
            engineering pillars ⚡
          </span>
        </div>
      </div>

      {/* Grid of 4 Expertise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`relative p-6 sm:p-7 border-3 border-black ${card.color} shadow-[6px_6px_0px_#000000] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000000] ${card.rotate}`}
          >
            {/* Washi Tape */}
            <WashiTape
              color={card.tapeColor}
              width="w-24"
              rotate={i % 2 === 0 ? "-rotate-6" : "rotate-6"}
              className="-top-3 left-8"
            />

            {/* Header info */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-sans-clean text-lg sm:text-xl font-extrabold text-black">
                    {card.title}
                  </h3>
                  <p className="font-handwriting text-base font-bold text-neutral-700">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              <span className="font-pixel text-[10px] px-2 py-0.5 bg-black text-white font-bold border border-black shrink-0">
                {card.badge}
              </span>
            </div>

            {/* Bullet points */}
            <ul className="mt-4 space-y-2.5 border-t-2 border-dashed border-black/20 pt-3">
              {card.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-neutral-900 leading-snug">
                  <span className="font-pixel text-xs text-black shrink-0 mt-0.5">
                    ▶
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
