import { SPECIALTIES } from '@/hooks/useDoctors';

interface SpecialtyBarProps {
  selectedSpecialty: string;
  setSelectedSpecialty: (specialty: string) => void;
}

const SpecialtyBar = ({ selectedSpecialty, setSelectedSpecialty }: SpecialtyBarProps) => {
  return (
    <div className="bg-background/50 border-b border-border transition-colors duration-300 sticky top-[80px] z-40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {SPECIALTIES.map((spec) => {
            const isActive = selectedSpecialty === spec.name;
            return (
              <button
                key={spec.name}
                onClick={() => setSelectedSpecialty(spec.name)}
                className={`
                  whitespace-nowrap px-5 py-2.5 rounded-2xl text-sm font-bold border transition-all duration-200 ease-out flex-shrink-0 flex items-center gap-2 select-none
                  ${isActive 
                    ? 'gradient-primary border-primary text-primary-foreground shadow-lg shadow-primary/25 transform -translate-y-0.5' 
                    : 'bg-card border-border text-muted-foreground hover:bg-muted hover:border-muted-foreground/20'
                  }
                `}
              >
                <span className="text-lg leading-none">{spec.icon}</span>
                <span>{spec.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyBar;
