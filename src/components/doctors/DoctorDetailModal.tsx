import { X, Search, Phone, MessageCircle, MapPin, Building2, Award, ChevronRight, Sparkles } from 'lucide-react';
import type { Doctor } from '@/hooks/useDoctors';

interface DoctorDetailModalProps {
  item: Doctor | null;
  onClose: () => void;
  onTagClick?: (tag: string) => void;
}

const DoctorDetailModal = ({ item, onClose, onTagClick }: DoctorDetailModalProps) => {
  if (!item) return null;

  // Use google_map_link if available, otherwise generate from address
  const mapsUrl = item.google_map_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`;

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-foreground/40 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-card rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale-in border border-border">
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-2 bg-background/50 hover:bg-background backdrop-blur rounded-full text-foreground transition-colors"
        >
          <X size={20}/>
        </button>

        {/* LEFT COLUMN: INFORMATION */}
        <div className="flex-1 flex flex-col h-full overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
          {/* Header */}
          <div className="p-8 pb-4">
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/30">
                {item.type}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground border border-border">
                {item.specialty}
              </span>
            </div>
            <h2 className="font-extrabold text-3xl md:text-4xl text-card-foreground leading-tight mb-3">
              {item.name}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Bác sĩ chuyên khoa {item.specialty} uy tín tại Đà Nẵng.
            </p>
          </div>

          {/* Details List */}
          <div className="p-8 pt-2 space-y-4 flex-1">
            
            {/* Block 1: Workplace & Position */}
            <div className="bg-muted/50 p-5 rounded-2xl border border-border">
              <div className="flex items-start gap-4 mb-4 last:mb-0">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-sm text-primary">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Nơi công tác</p>
                  <p className="text-base text-card-foreground font-bold">{item.workplace || "Phòng khám tư"}</p>
                </div>
              </div>
              {item.position && (
                <div className="flex items-start gap-4 border-t border-border pt-4">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-sm text-primary">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Chức danh</p>
                    <p className="text-base text-card-foreground font-bold">{item.position}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Block 2: Address & Map */}
            <div className="bg-muted/50 p-5 rounded-2xl border border-border">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-sm text-primary">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Địa chỉ</p>
                  <p className="text-base text-card-foreground font-medium leading-snug">{item.address}</p>
                </div>
              </div>
              
              {/* Mini Map Block */}
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="block mt-3 group relative rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="h-28 bg-muted relative">
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-background/50 transform -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-background/50 transform -translate-x-1/2"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-destructive text-destructive-foreground p-2 rounded-full shadow-lg transform group-hover:-translate-y-1 transition-transform border-2 border-card">
                      <MapPin size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-card flex items-center justify-between">
                  <span className="text-sm font-bold text-primary group-hover:underline pl-1">Mở bản đồ chỉ đường</span>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </div>
              </a>
            </div>

            {/* Block 3: Expertise */}
            {item.geo_keywords && (
              <div className="bg-primary/5 p-5 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={18} className="text-primary" />
                  <span className="text-sm font-bold text-card-foreground uppercase tracking-wide">Chuyên môn sâu (Nhấn để tìm)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.geo_keywords.split(',').map((keyword, idx) => (
                    <button
                      key={idx}
                      onClick={() => onTagClick && onTagClick(keyword.trim())}
                      className="text-xs font-bold bg-card text-primary px-3 py-1.5 rounded-lg border border-primary/20 shadow-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      title={`Tìm các bác sĩ chuyên về ${keyword.trim()}`}
                    >
                      {keyword.trim()}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="p-8 pt-0 mt-auto flex flex-col sm:flex-row gap-4 sticky bottom-0 bg-card pb-8 pt-4 border-t border-transparent z-10">
            <button 
              onClick={handleGoogleSearch}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-muted-foreground bg-muted border border-border rounded-2xl hover:bg-accent transition-all active:scale-95"
            >
              <Search size={20} />
              <span>Tìm kiếm Google</span>
            </button>

            <button 
              onClick={handleContact}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-primary-foreground rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 ${
                item.zalo_active 
                  ? 'gradient-primary shadow-primary/30' 
                  : 'bg-foreground hover:bg-foreground/90 shadow-foreground/30'
              }`}
            >
              {item.zalo_active ? <MessageCircle size={20} /> : <Phone size={20} />}
              <span>{item.zalo_active ? 'Chat Zalo ngay' : 'Gọi đặt lịch'}</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: DOCTOR IMAGE */}
        <div className="w-full md:w-[40%] h-48 md:h-auto relative bg-muted order-first md:order-last border-l border-border">
          {item.image_url ? (
            <img 
              src={item.image_url} 
              alt={`Ảnh ${item.name}`}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <Building2 size={64} className="text-muted-foreground/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailModal;
