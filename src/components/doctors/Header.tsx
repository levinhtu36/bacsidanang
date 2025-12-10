import { Search, X, Moon, Sun, Stethoscope, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setSelectedSpecialty: (specialty: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  suggestedKeywords: string[];
}

const Header = ({ 
  searchTerm, 
  setSearchTerm, 
  setSelectedSpecialty, 
  isDarkMode, 
  toggleTheme,
  suggestedKeywords 
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer flex-shrink-0 self-start md:self-center" 
            onClick={() => { setSelectedSpecialty("Tất cả"); setSearchTerm(""); }}
          >
            <div className="gradient-primary text-primary-foreground p-2.5 rounded-xl shadow-lg shadow-primary/20">
              <Stethoscope size={24} />
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-xl tracking-tight text-foreground">Bác sĩ Đà Nẵng</h1>
              <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Tra cứu nhanh</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 w-full max-w-2xl relative">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Tìm tên bác sĩ, chuyên khoa..."
                className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-transparent rounded-xl text-base text-foreground placeholder-muted-foreground focus:outline-none focus:bg-card focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            {/* Suggestions */}
            <div className="mt-2 flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              <span className="text-xs font-bold text-muted-foreground whitespace-nowrap flex items-center">
                <Sparkles size={10} className="mr-1" />
                Gợi ý:
              </span>
              {suggestedKeywords.slice(0, 5).map((keyword, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(keyword)}
                  className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-transparent hover:border-primary"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2 flex-shrink-0 self-end md:self-center absolute top-3 right-4 md:static">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-muted/50 border border-transparent hover:border-border text-muted-foreground hover:bg-muted transition-all active:scale-95"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
