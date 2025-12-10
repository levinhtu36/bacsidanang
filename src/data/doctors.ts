export interface Doctor {
  id: string;
  name: string;
  initials: string;
  type: string;
  specialty: string;
  workplace: string;
  address: string;
  position: string;
  phone: string;
  zalo_active: boolean;
  website: string;
  slug: string;
  geo_keywords: string;
  gender: string;
  image: string;
  workplace_image: string;
  bio: string;
}

export const DOCTORS_DB: Doctor[] = [
  {
    id: "BS_NEW_01",
    name: "ThS.BS Trần Văn Hòa",
    initials: "TH",
    type: "Bác sĩ",
    specialty: "Nhi khoa",
    workplace: "Bệnh viện Phụ Sản - Nhi Đà Nẵng",
    address: "192 Nguyễn Hữu Thọ, Phường Khuê Trung, Quận Cẩm Lệ, Đà Nẵng",
    position: "Trưởng khoa Hồi sức tích cực - Chống độc",
    phone: "Đang cập nhật",
    zalo_active: false,
    website: "",
    slug: "ths-bs-tran-van-hoa-nhi-khoa",
    geo_keywords: "Nội nhi, hồi sức tích cực, chống độc nhi, hô hấp, tiêu hóa",
    gender: "male",
    image: "",
    workplace_image: "https://image.thanhnien.vn/w1024/Uploaded/2021/pmyv/2021_02_27/benh-vien-phu-san-nhi-da-nang-ok_zpgk.jpg",
    bio: "Chuyên gia về hồi sức tích cực và chống độc nhi."
  },
  {
    id: "BS_NEW_02",
    name: "ThS.BS Hoàng Thị Ái Nhi",
    initials: "AN",
    type: "Bác sĩ",
    specialty: "Nhi khoa",
    workplace: "Bệnh viện Phụ Sản - Nhi Đà Nẵng",
    address: "122/19 Trần Hoành, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng",
    position: "Bác sĩ điều trị - Khoa Dinh dưỡng",
    phone: "0974725182",
    zalo_active: true,
    website: "",
    slug: "ths-bs-hoang-thi-ai-nhi-nhi-khoa",
    geo_keywords: "Dinh dưỡng nhi, tư vấn dinh dưỡng, biếng ăn, tiêm chủng",
    gender: "female",
    image: "",
    workplace_image: "https://image.thanhnien.vn/w1024/Uploaded/2021/pmyv/2021_02_27/benh-vien-phu-san-nhi-da-nang-ok_zpgk.jpg",
    bio: "Tư vấn chuyên sâu về dinh dưỡng và tiêm chủng cho trẻ em."
  },
  {
    id: "BS_NEW_03",
    name: "ThS.BS Nguyễn Thị Trà Lộc",
    initials: "TL",
    type: "Bác sĩ",
    specialty: "Răng hàm mặt",
    workplace: "Bệnh viện Phụ Sản - Nhi Đà Nẵng",
    address: "14 Lương Thế Vinh, Ngũ Hành Sơn, Đà Nẵng",
    position: "Bác sĩ chuyên khoa Răng Hàm Mặt",
    phone: "0905715687",
    zalo_active: true,
    website: "",
    slug: "ths-bs-nguyen-thi-tra-loc-rang-ham-mat",
    geo_keywords: "Răng hàm mặt nhi, nha khoa trẻ em, nha chu, sâu răng trẻ em",
    gender: "female",
    image: "",
    workplace_image: "https://image.thanhnien.vn/w1024/Uploaded/2021/pmyv/2021_02_27/benh-vien-phu-san-nhi-da-nang-ok_zpgk.jpg",
    bio: "Bác sĩ chuyên khoa Răng Hàm Mặt, thân thiện với trẻ em."
  },
  {
    id: "BS_NEW_04",
    name: "BS.NT Nguyễn Thị Chung Toán",
    initials: "CT",
    type: "Bác sĩ",
    specialty: "Mắt",
    workplace: "Bệnh viện Phụ Sản - Nhi Đà Nẵng",
    address: "163 Lê Văn Hiến, Ngũ Hành Sơn, Đà Nẵng",
    position: "Bác sĩ chuyên khoa Mắt",
    phone: "0972823951",
    zalo_active: true,
    website: "",
    slug: "bs-no-tru-nguyen-thi-chung-toan-mat",
    geo_keywords: "Mắt nhi, nhãn khoa khúc xạ, cận thị, viễn thị, loạn thị",
    gender: "female",
    image: "",
    workplace_image: "https://image.thanhnien.vn/w1024/Uploaded/2021/pmyv/2021_02_27/benh-vien-phu-san-nhi-da-nang-ok_zpgk.jpg",
    bio: "Chuyên điều trị các tật khúc xạ mắt ở trẻ nhỏ."
  },
  {
    id: "BS_NEW_05",
    name: "BS.CKI Trần Thanh Hải",
    initials: "TH",
    type: "Bác sĩ",
    specialty: "Tim mạch",
    workplace: "Bệnh viện Phụ Sản - Nhi Đà Nẵng",
    address: "815 Ngô Quyền, Sơn Trà, Đà Nẵng",
    position: "Phó Trưởng khoa Tim mạch",
    phone: "0903223034",
    zalo_active: true,
    website: "",
    slug: "bs-cki-tran-thanh-hai-tim-mach",
    geo_keywords: "Tim mạch nhi, siêu âm tim, bệnh tim bẩm sinh, can thiệp tim mạch",
    gender: "male",
    image: "",
    workplace_image: "https://i.imgur.com/kK54h3O.jpeg",
    bio: "Phó Trưởng khoa Tim mạch - BV Phụ Sản Nhi Đà Nẵng. Tu nghiệp tại BV Royal Brompton, London, UK."
  },
  {
    id: "BS_NEW_06",
    name: "BS. Ngô Thị Cẩm Vân",
    initials: "CV",
    type: "Bác sĩ",
    specialty: "Nhi khoa",
    workplace: "Bệnh viện Phụ Sản - Nhi Đà Nẵng",
    address: "11 Nguyễn Xiển, Ngũ Hành Sơn, Đà Nẵng",
    position: "Bác sĩ Phục hồi chức năng",
    phone: "0907860490",
    zalo_active: true,
    website: "",
    slug: "bs-ngo-thi-cam-van-nhi-khoa",
    geo_keywords: "Phục hồi chức năng nhi, vật lý trị liệu, tự kỷ, chậm phát triển, bại não, tắc tia sữa",
    gender: "female",
    image: "",
    workplace_image: "https://image.thanhnien.vn/w1024/Uploaded/2021/pmyv/2021_02_27/benh-vien-phu-san-nhi-da-nang-ok_zpgk.jpg",
    bio: "Vật lý trị liệu và phục hồi chức năng cho trẻ em."
  },
  {
    id: "BS_NEW_07",
    name: "ThS.BS Trần Tấn Liêm",
    initials: "TL",
    type: "Bác sĩ",
    specialty: "Nhi khoa",
    workplace: "Bệnh viện Phụ Sản - Nhi Đà Nẵng",
    address: "70 Lý Nhân Tông, Khuê Trung, Cẩm Lệ, Đà Nẵng",
    position: "Phó Trưởng khoa Ngoại Nhi",
    phone: "0977147742",
    zalo_active: true,
    website: "",
    slug: "ths-bs-tran-tan-liem-nhi-khoa",
    geo_keywords: "Ngoại nhi, phẫu thuật nhi, hẹp bao quy đầu, thoát vị bẹn",
    gender: "male",
    image: "",
    workplace_image: "https://image.thanhnien.vn/w1024/Uploaded/2021/pmyv/2021_02_27/benh-vien-phu-san-nhi-da-nang-ok_zpgk.jpg",
    bio: "Chuyên khoa Ngoại nhi, phẫu thuật và can thiệp."
  }
];

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
