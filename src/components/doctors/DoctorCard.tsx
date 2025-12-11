import { Search, Phone, MessageCircle, MapPin, Building2 } from 'lucide-react';
import type { Doctor } from '@/hooks/useDoctors';
import { getInitials } from '@/hooks/useDoctors';

interface DoctorCardProps {
  item: Doctor;
  onClick: (doctor: Doctor) => void;
}

const DoctorCard = ({ item, onClick }: DoctorCardProps) => {
  const handleActionClick = (e: React.MouseEvent, callback: () => void) => {
    e.stopPropagation();
    callback();
  };

  const handleGoogleSearch = () => {
    const query = encodeURIComponent(`${item.name} ${item.specialty} Đà Nẵng`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const handleContact = () => {
    if (!item.phone || item.phone === "Đang cập nhật") {
      alert("Số điện thoại chưa được cập nhật.");
      return;
    }
    const cleanPhone = item.phone.replace(/\D/g, '');
    
    if (item.zalo_active) {
      window.open(`https://zalo.me/${cleanPhone}`, '_blank');
    } else {
      window.location.href = `tel:${cleanPhone}`;
    }
  };

  return (
    <article 
      onClick={() => onClick(item)}
      className="group bg-card rounded-3xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-glow transition-all duration-300 flex flex-col h-full relative overflow-hidden cursor-pointer"
    >
      {/* Card Header */}
      <div className="p-6 flex items-start gap-4">
        <div className="relative">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl border border-primary/20 group-hover:scale-105 transition-transform overflow-hidden p-1 shadow-inner">
            {item.image_url ? (
              <img src={item.image_url} alt="Avatar" className="w-full h-full object-cover rounded-xl" />
            ) : (
              getInitials(item.name)
            )}
          </div>
          {item.zalo_active && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success border-2 border-card rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-card-foreground text-lg leading-tight truncate mb-1 group-hover:text-primary transition-colors" title={item.name}>
            {item.name}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-muted text-muted-foreground mb-2 border border-border">
            {item.specialty}
          </span>
          <div className="mt-1 text-xs text-muted-foreground line-clamp-1 leading-relaxed opacity-80">
            {item.position || "Bác sĩ chuyên khoa"}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-6 pb-4 flex-1">
        <dl className="space-y-3 text-sm text-card-foreground">
          <div className="flex gap-3 items-start">
            <dt className="flex-shrink-0 w-5 text-muted-foreground mt-0.5" aria-label="Nơi công tác">
              <Building2 size={16} />
            </dt>
            <dd className="leading-snug line-clamp-1 font-medium">{item.workplace || "Phòng khám tư"}</dd>
          </div>
          <div className="flex gap-3 items-start">
            <dt className="flex-shrink-0 w-5 text-muted-foreground mt-0.5" aria-label="Địa chỉ">
              <MapPin size={16} />
            </dt>
            <dd className="leading-snug text-muted-foreground line-clamp-2">
              {item.address}
            </dd>
          </div>
          {item.geo_keywords && (
            <div className="mt-4 pt-3 border-t border-dashed border-border">
              <p className="text-xs text-muted-foreground mb-1">Chuyên sâu:</p>
              <p className="text-xs font-medium text-card-foreground line-clamp-1">{item.geo_keywords}</p>
            </div>
          )}
        </dl>
      </div>

      {/* Card Footer */}
      <div className="p-4 bg-muted/50 flex gap-3 mt-auto border-t border-border">
        <button 
          onClick={(e) => handleActionClick(e, handleGoogleSearch)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-bold text-muted-foreground bg-card border border-border rounded-xl hover:bg-muted transition-colors z-10 shadow-sm"
        >
          <Search size={16} />
          <span>Tìm hiểu</span>
        </button>

        <button 
          onClick={(e) => handleActionClick(e, handleContact)}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-bold rounded-xl transition-all z-10 shadow-sm ${
            item.zalo_active 
              ? 'bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
              : 'bg-foreground text-primary-foreground hover:bg-foreground/90 shadow-md hover:shadow-lg hover:-translate-y-0.5'
          }`}
        >
          {item.zalo_active ? <MessageCircle size={16} /> : <Phone size={16} />}
          <span>{item.zalo_active ? 'Zalo' : 'Gọi'}</span>
        </button>
      </div>
    </article>
  );
};

export default DoctorCard;
