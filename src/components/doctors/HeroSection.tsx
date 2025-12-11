import { Sparkles } from 'lucide-react';
const HeroSection = () => {
  return <div className="relative overflow-hidden gradient-hero border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 animate-fade-in">
            <Sparkles size={14} />
            <span>Nền tảng Y tế 4.0</span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground leading-tight mb-4 tracking-tight md:text-4xl">
            Tìm bác sĩ phù hợp <br className="hidden md:block" />
            <span className="text-gradient bg-primary-foreground text-secondary-foreground">
              Nhanh • Tin cậy • Miễn phí
            </span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Kết nối với các chuyên gia y tế hàng đầu tại Đà Nẵng. Thông tin minh bạch, cập nhật liên tục để bạn an tâm chăm sóc sức khỏe.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-md md:max-w-full">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-card transform rotate-2 md:rotate-3 transition-transform hover:rotate-0 duration-500">
            <img src="https://bqn.1cdn.vn/2024/12/18/hinh-anh-2-bac-si-tran-van-phu-tho-kham-cho-benh-nhan-truoc-khi-xuat-vien.jpg" alt="Bác sĩ khám cho bệnh nhân trước khi xuất viện" className="w-full h-auto object-cover aspect-[4/3]" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent flex items-end p-6">
              <div className="text-primary-foreground">
                <p className="font-bold text-lg">Tận tâm chăm sóc</p>
                <p className="text-sm opacity-90">Sức khỏe của bạn là ưu tiên hàng đầu</p>
              </div>
            </div>
          </div>
          <div className="absolute top-10 -right-10 w-32 h-32 bg-warning/30 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-1 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>;
};
export default HeroSection;