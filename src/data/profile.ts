export interface KeyResponsibility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tagColor: string;
}

export interface ProjectData {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  tagline: string;
  theme: "dark" | "yellow";
  accentColor: string;
  image: string;
  tapeColor: string;
  metrics: { label: string; value: string }[];
  responsibilities: string[];
  techStack: string[];
  status: string;
}

export const PROFILE_DATA = {
  name: "BAO",
  fullName: "Bao Nguyen",
  role: "Chief Technology Officer (CTO)",
  company: "Cyclosa HRM",
  location: "Ho Chi Minh City, Vietnam",
  tagline: "Architecting Secure, High-Scale SaaS & Human-Centric AI ⚡",
  status: "Open to Tech Advisory & Collab",
  
  aboutShort:
    "Bao phụ trách định hướng công nghệ và phát triển giải pháp kỹ thuật cho Cyclosa HRM, tập trung xây dựng nền tảng quản trị nhân sự SaaS có tính bảo mật, khả năng mở rộng và dễ sử dụng.",
  
  aboutExtended:
    "Với tầm nhìn kết hợp giữa hạ tầng SaaS bền vững và công nghệ AI thế hệ mới, Bao dẫn dắt đội ngũ kỹ thuật kiến tạo giải pháp nhân sự toàn diện: từ số hóa hồ sơ, tự động hóa tính lương đến bóc tách ngữ nghĩa CV bằng trí tuệ nhân tạo.",

  coreCompetencies: [
    { name: "Software Architecture", iconName: "Blocks", emoji: "🏗️", color: "bg-[#FEF08A] text-black" }, // yellow
    { name: "SaaS Development", iconName: "Cloud", emoji: "☁️", color: "bg-[#99F6E4] text-black" }, // teal
    { name: "AI Integration", iconName: "Bot", emoji: "🤖", color: "bg-[#FED7AA] text-black" }, // orange
    { name: "Data Security", iconName: "ShieldCheck", emoji: "🛡️", color: "bg-[#BAE6FD] text-black" }, // sky
    { name: "Technical Leadership", iconName: "Crown", emoji: "👑", color: "bg-[#E9D5FF] text-black" }, // purple
    { name: "Cloud & Scalability", iconName: "Zap", emoji: "⚡", color: "bg-[#BBF7D0] text-black" }, // green
    { name: "Semantic CV Parser", iconName: "FileSearch", emoji: "📄", color: "bg-[#FBCFE8] text-black" }, // pink
    { name: "DevOps & CI/CD", iconName: "Rocket", emoji: "🚀", color: "bg-[#FDE047] text-black" }, // yellow-light
  ],

  keyResponsibilities: [
    {
      id: "tech-strat",
      title: "Technology Strategy",
      subtitle: "Định hướng kiến trúc & công nghệ",
      description:
        "Hoạch định kiến trúc hệ thống tổng thể, lựa chọn các công nghệ hiện đại, đảm bảo tính mô-đun hóa, khả năng bảo trì lâu dài và lộ trình công nghệ vững chắc.",
      iconName: "Compass",
      tagColor: "#F3B524",
    },
    {
      id: "prod-dev",
      title: "Product Development",
      subtitle: "Điều phối & phát triển tính năng",
      description:
        "Điều phối quy trình kỹ thuật cho các mô-đun HRM: Quản lý nhân sự, Chấm công sinh trắc học, Tính lương tự động, Đánh giá hiệu suất và Portal nhân viên.",
      iconName: "Layers",
      tagColor: "#38BDF8",
    },
    {
      id: "sys-rel",
      title: "System Reliability",
      subtitle: "Bảo mật & khả năng mở rộng",
      description:
        "Đặt an toàn dữ liệu nhân sự lên hàng đầu với tiêu chuẩn mã hóa AES-256, phân quyền Multi-Tenant nghiêm ngặt, SLA 99.9% và tối ưu khả năng chịu tải hàng trăm nghìn người dùng.",
      iconName: "ShieldCheck",
      tagColor: "#4ADE80",
    },
    {
      id: "ai-int",
      title: "AI Integration",
      subtitle: "Ứng dụng AI vào HR Tech",
      description:
        "Định hướng và tích hợp AI vào giải pháp thực tiễn: bóc tách CV ngữ nghĩa thông minh, chấm điểm độ phù hợp ứng viên, trợ lý ảo HR Bot và số hóa tài liệu hồ sơ tự động.",
      iconName: "Sparkles",
      tagColor: "#EC4899",
    },
  ],

  projects: [
    {
      id: "cyclosa-hrm-core",
      tabLabel: "TAB 01 // SAAS CORE PLATFORM",
      title: "Cyclosa HRM Platform",
      subtitle: "Enterprise Multi-Tenant SaaS HRM Engine",
      tagline:
        "Nền tảng quản trị nhân sự SaaS toàn diện: tính lương tự động, chấm công thời gian thực và quản lý vòng đời nhân sự an toàn tuyệt đối.",
      theme: "dark",
      accentColor: "#38BDF8",
      image: "/images/cyclosa_dashboard.jpg",
      tapeColor: "bg-teal-200/80",
      status: "PRODUCTION · ENTERPRISE TIER",
      metrics: [
        { label: "Uptime SLA", value: "99.98%" },
        { label: "Data Encryption", value: "AES-256" },
        { label: "Payroll Speed", value: "10k/30s" },
        { label: "Tenant Isolation", value: "Level 4" },
      ],
      responsibilities: [
        "Thiết kế kiến trúc Multi-Tenant phân lập dữ liệu nghiêm ngặt giữa các doanh nghiệp khách hàng.",
        "Xây dựng engine tính toán lương tự động đa quy chế, xử lý thuế & bảo hiểm chính xác theo luật lao động.",
        "Tích hợp hệ thống phân quyền RBAC và kiểm soát audit logs chi tiết cho dữ liệu nhân sự nhạy cảm.",
        "Thiết lập hạ tầng đám mây auto-scaling đảm bảo độ trễ API dưới 200ms trong các giờ cao điểm check-in.",
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Tailwind CSS"],
    },
    {
      id: "cyclosa-ai-engine",
      tabLabel: "TAB 02 // AI COPILOT & PARSER",
      title: "Cyclosa AI Engine",
      subtitle: "Smart CV Match & Automated HR Copilot",
      tagline:
        "Giải pháp AI thông minh tích hợp trực tiếp vào quy trình tuyển dụng: bóc tách CV đa định dạng, tính điểm độ tương thích và trợ lý ảo nhân sự 24/7.",
      theme: "yellow",
      accentColor: "#F3B524",
      image: "/images/cyclosa_ai_flow.jpg",
      tapeColor: "bg-pink-300/80",
      status: "AI INNOVATION · PATENT PENDING",
      metrics: [
        { label: "CV Parsing Accuracy", value: ">96.5%" },
        { label: "Screening Time", value: "-80%" },
        { label: "Formats Supported", value: "PDF/DOC/IMG" },
        { label: "Vector Search", value: "Hybrid RAG" },
      ],
      responsibilities: [
        "Xây dựng pipeline OCR và trích xuất thông tin thực thể (NER) từ hồ sơ ứng viên nhiều trang và định dạng.",
        "Ứng dụng Vector Database và mô hình Embedding để so khớp ngữ nghĩa sâu giữa yêu cầu công việc (JD) và CV.",
        "Phát triển Trợ lý nhân sự AI trả lời tức thì các câu hỏi về chính sách nghỉ phép, bảo hiểm và văn hóa công ty.",
        "Tuân thủ nghiêm ngặt chuẩn bảo vệ dữ liệu cá nhân (GDPR & Nghị định 13/2023/NĐ-CP) khi xử lý hồ sơ nhân tài.",
      ],
      techStack: ["Python", "FastAPI", "Vector DB", "LangChain", "OpenAI / Claude APIs", "OCR Engine", "Next.js"],
    },
  ] as ProjectData[],

  contact: {
    email: "bao.cto@cyclosa.vn",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    telegram: "https://t.me",
  },
};
