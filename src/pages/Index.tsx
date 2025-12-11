import { useState, useEffect, useMemo } from 'react';
import { Info, Stethoscope, X } from 'lucide-react';
import { useDoctors, getSuggestedKeywords, type Doctor } from '@/hooks/useDoctors';
import Header from '@/components/doctors/Header';
import HeroSection from '@/components/doctors/HeroSection';
import FeaturesSection from '@/components/doctors/FeaturesSection';
import SpecialtyBar from '@/components/doctors/SpecialtyBar';
import DoctorCard from '@/components/doctors/DoctorCard';
import DoctorDetailModal from '@/components/doctors/DoctorDetailModal';
import SkeletonCard from '@/components/doctors/SkeletonCard';
const Index = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {
    data: doctors = [],
    isLoading
  } = useDoctors();
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const suggestedKeywords = useMemo(() => getSuggestedKeywords(doctors), [doctors]);
  const filteredData = useMemo(() => {
    return doctors.filter(item => {
      const matchSpecialty = selectedSpecialty === "Tất cả" || item.specialty === selectedSpecialty;
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = item.name.toLowerCase().includes(searchLower) || item.address.toLowerCase().includes(searchLower) || (item.geo_keywords?.toLowerCase().includes(searchLower) ?? false);
      return matchSpecialty && matchSearch;
    });
  }, [doctors, selectedSpecialty, searchTerm]);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleTagSearch = (tag: string) => {
    setSearchTerm(tag);
    setSelectedDoctor(null);
    window.scrollTo({
      top: 500,
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 transition-colors duration-300">
      
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedSpecialty={setSelectedSpecialty} isDarkMode={isDarkMode} toggleTheme={toggleTheme} suggestedKeywords={suggestedKeywords} />

      <HeroSection />
      <FeaturesSection />
      <SpecialtyBar selectedSpecialty={selectedSpecialty} setSelectedSpecialty={setSelectedSpecialty} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-xl border border-border">
            <Info size={16} className="text-primary" />
            <span>
              {searchTerm ? <>Tìm kiếm: <strong className="text-primary">"{searchTerm}"</strong> • </> : null}
              Kết quả: <strong className="text-foreground">{isLoading ? "..." : filteredData.length}</strong> bác sĩ
            </span>
          </div>
          
          {searchTerm && <button onClick={() => setSearchTerm("")} className="text-sm font-bold text-destructive hover:text-destructive/80 hover:underline flex items-center gap-1">
              <X size={14} /> Xóa tìm kiếm
            </button>}
        </div>

        {isLoading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => <SkeletonCard key={index} />)}
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.length > 0 ? filteredData.map(item => <DoctorCard key={item.id} item={item} onClick={setSelectedDoctor} />) : <div className="col-span-full py-20 text-center text-muted-foreground">
                <Stethoscope size={64} className="mx-auto mb-6 opacity-20" />
                <p className="text-lg font-medium">Không tìm thấy bác sĩ nào phù hợp với từ khóa <br /><span className="text-primary">"{searchTerm}"</span></p>
                <button onClick={() => {
            setSelectedSpecialty("Tất cả");
            setSearchTerm("");
          }} className="mt-4 text-primary font-bold hover:underline">
                  Xóa bộ lọc tìm kiếm
                </button>
              </div>}
          </div>}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-10 bg-background text-center transition-colors duration-300">
        <p className="text-sm text-muted-foreground">© 2025 Tra cứu Bác sĩ Đà Nẵng. Dữ liệu được quản lý bởi Hieu Nguyen Tri.</p>
      </footer>

      {/* Modal */}
      {selectedDoctor && <DoctorDetailModal item={selectedDoctor} onClose={() => setSelectedDoctor(null)} onTagClick={handleTagSearch} />}
    </div>;
};
export default Index;