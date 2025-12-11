import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Doctor {
  id: string;
  csv_id: number | null;
  type: string;
  clinic_type: string | null;
  name: string;
  specialty: string;
  workplace: string;
  position: string | null;
  address: string;
  phone: string | null;
  zalo_active: boolean;
  slug: string | null;
  geo_keywords: string | null;
  google_map_link: string | null;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

// Helper to generate initials from name
export const getInitials = (name: string): string => {
  const words = name.split(' ');
  if (words.length >= 2) {
    return words[words.length - 2].charAt(0) + words[words.length - 1].charAt(0);
  }
  return name.substring(0, 2).toUpperCase();
};

export const useDoctors = () => {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .order('csv_id', { ascending: true });

      if (error) {
        throw error;
      }

      return data as Doctor[];
    },
  });
};

export const getSuggestedKeywords = (data: Doctor[]): string[] => {
  const allKeywords: string[] = [];
  data.forEach(item => {
    if (item.geo_keywords) {
      const keywords = item.geo_keywords.split(',').map(k => k.trim());
      allKeywords.push(...keywords);
    }
  });

  const frequency: Record<string, { text: string; count: number }> = {};
  allKeywords.forEach(k => {
    const normalized = k.toLowerCase();
    if (!frequency[normalized]) {
      frequency[normalized] = { text: k, count: 0 };
    }
    frequency[normalized].count += 1;
  });

  return Object.values(frequency)
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
    .map(item => item.text);
};

export const SPECIALTIES = [
  { name: "Tất cả", icon: "🩺" },
  { name: "Nhi khoa", icon: "👶" },
  { name: "Sản phụ khoa", icon: "🤰" },
  { name: "Tai mũi họng", icon: "👂" },
  { name: "Răng hàm mặt", icon: "🦷" },
  { name: "Da liễu", icon: "✨" },
  { name: "Cơ xương khớp", icon: "🦴" },
  { name: "Tiêu hóa", icon: "🥦" },
  { name: "Tim mạch", icon: "❤️" },
  { name: "Thần kinh", icon: "🧠" },
  { name: "Mắt", icon: "👁️" },
  { name: "Nam khoa", icon: "👨" },
  { name: "Y học cổ truyền", icon: "🌿" }
];
