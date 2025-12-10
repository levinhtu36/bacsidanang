-- Create doctors table
CREATE TABLE public.doctors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  csv_id INTEGER,
  type TEXT NOT NULL DEFAULT 'Bác sĩ',
  clinic_type TEXT,
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  workplace TEXT NOT NULL,
  position TEXT,
  address TEXT NOT NULL,
  phone TEXT,
  zalo_active BOOLEAN DEFAULT false,
  slug TEXT UNIQUE,
  geo_keywords TEXT,
  google_map_link TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (doctors info is public)
CREATE POLICY "Doctors are publicly readable" 
ON public.doctors 
FOR SELECT 
USING (true);

-- Create index for faster search
CREATE INDEX idx_doctors_specialty ON public.doctors(specialty);
CREATE INDEX idx_doctors_name ON public.doctors USING gin(to_tsvector('simple', name));
CREATE INDEX idx_doctors_slug ON public.doctors(slug);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_doctors_updated_at
BEFORE UPDATE ON public.doctors
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();