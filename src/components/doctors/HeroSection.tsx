import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden gradient-hero border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5 animate-fade-in border border-primary/20">
            <Sparkles size={14} />
            <span>Nền tảng Y tế 4.0</span>
          </div>
          <h1 className="text-3xl md:text-[42px] font-extrabold text-foreground leading-[1.2] mb-4 tracking-tight">
            Tìm bác sĩ phù hợp
          </h1>
          <p className="text-3xl md:text-[42px] font-extrabold text-gradient leading-[1.2] mb-4 tracking-tight">
            Nhanh • Tin cậy •<br />
            Miễn phí
          </p>
          <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Kết nối với các chuyên gia y tế hàng đầu tại Đà Nẵng.<br className="hidden md:block" />
            Thông tin minh bạch, cập nhật liên tục để bạn an tâm<br className="hidden md:block" />
            chăm sóc sức khỏe.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-md md:max-w-full">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-border/50">
            <img 
              src="https://bqn.1cdn.vn/2024/12/18/hinh-anh-2-bac-si-tran-van-phu-tho-kham-cho-benh-nhan-truoc-khi-xuat-vien.jpg" 
              alt="Bác sĩ khám cho bệnh nhân trước khi xuất viện" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/70 to-transparent pt-16 pb-5 px-5">
              <p className="font-bold text-lg text-primary-foreground italic">Tận tâm chăm sóc</p>
              <p className="text-sm text-primary-foreground/90">Sức khỏe của bạn là ưu tiên hàng đầu</p>
            </div>
          </div>
          <div className="absolute top-10 -right-10 w-32 h-32 bg-warning/30 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-1 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
