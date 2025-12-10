import { Zap, ShieldCheck, Phone, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-warning" />,
      title: "Tra cứu nhanh",
      desc: "Tìm kiếm thông tin bác sĩ chỉ trong vài giây với bộ lọc thông minh."
    },
    {
      icon: <ShieldCheck size={24} className="text-success" />,
      title: "Thông tin xác thực",
      desc: "Dữ liệu được kiểm duyệt kỹ lưỡng, đảm bảo độ chính xác cao."
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: "Liên hệ dễ dàng",
      desc: "Kết nối trực tiếp qua Zalo hoặc số điện thoại mà không cần trung gian."
    },
    {
      icon: <Clock size={24} className="text-purple-500" />,
      title: "Cập nhật liên tục",
      desc: "Thông tin lịch khám và địa chỉ luôn được làm mới thường xuyên."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-6 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feat, idx) => (
          <div 
            key={idx} 
            className="bg-card p-5 rounded-3xl border border-border shadow-lg hover:-translate-y-1 transition-transform duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {feat.icon}
            </div>
            <h3 className="font-bold text-card-foreground mb-2 text-lg">{feat.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
