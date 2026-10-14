import React, { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { WashiTape } from "./WashiTape";
import { Mail, Send, CheckCircle2, Copy, Sparkles, MessageSquare } from "lucide-react";

export const ContactPostcard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-10">
      {/* Postcard Container */}
      <div className="relative max-w-3xl mx-auto bg-white border-3 border-black p-6 sm:p-10 shadow-[8px_8px_0px_#000000]">
        {/* Washi Tape */}
        <WashiTape
          color="bg-[#FEF08A]/85"
          width="w-32"
          rotate="-rotate-2"
          className="-top-3.5 left-1/2 -translate-x-1/2 z-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Note & message */}
          <div className="md:col-span-7 flex flex-col gap-3">
            <div className="inline-block px-3 py-1 bg-orange-100 border border-black font-pixel text-xs text-orange-700 w-fit">
              // LET&apos;S CONNECT
            </div>

            <h3 className="font-sans-clean text-2xl sm:text-3xl font-black text-black">
              Sẵn sàng trao đổi về Công nghệ & SaaS HRM ☕
            </h3>

            <p className="font-sans-clean text-sm text-neutral-700 leading-relaxed font-medium">
              Bạn quan tâm đến kiến trúc SaaS, giải pháp bảo mật dữ liệu nhân sự, hoặc ứng dụng AI vào tự động hóa tuyển dụng? Hãy kết nối cùng Bao ngay hôm nay.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="neo-btn bg-black text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-neutral-800"
              >
                <Mail className="w-4 h-4 text-[#F3B524]" />
                <span>Gửi Email Trực Tiếp</span>
              </a>

              <button
                onClick={copyEmail}
                className="neo-btn bg-[#FEF08A] text-black px-3.5 py-2 font-bold text-xs sm:text-sm flex items-center gap-1.5 hover:bg-yellow-300 cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Sao chép Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Postage Stamp & Rubber Stamp Seal */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 border-t-2 md:border-t-0 md:border-l-2 border-dashed border-neutral-300">
            {/* Postage Stamp */}
            <div className="relative bg-amber-50 p-3 border-2 border-black shadow-[4px_4px_0px_#000] rotate-2 flex flex-col items-center">
              <div className="w-24 h-24 border-2 border-dashed border-neutral-400 bg-white flex flex-col items-center justify-center p-2 text-center">
                <span className="font-pixel text-[10px] text-neutral-400">AIR MAIL</span>
                <span className="text-2xl my-1">🇻🇳</span>
                <span className="font-pixel text-[9px] font-bold text-black">
                  CYCLOSA · CTO
                </span>
              </div>
              <span className="font-handwriting text-sm font-bold text-neutral-600 mt-1">
                Postage Paid 📬
              </span>
            </div>

            {/* Vintage Rubber Stamp */}
            <div className="mt-4 border-2 border-red-600 text-red-600 px-3 py-1 font-pixel text-xs font-bold tracking-widest -rotate-6 select-none bg-red-50/50">
              OFFICIALLY VERIFIED
            </div>

            <p className="font-handwriting text-base font-bold text-neutral-500 mt-2">
              Bao @ Cyclosa HRM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
