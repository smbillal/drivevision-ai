// Navigation & Multi-Language Logic

// Sidebar Toggle
function toggleSidebar() { 
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full'); 
}

// Switch Tool / Platform Function
function switchTool(id, name) {
    const pageTitle = document.getElementById('pageTitle');
    const videoUrl = document.getElementById('videoUrl');
    
    if(pageTitle) pageTitle.innerText = name;
    if(videoUrl) videoUrl.placeholder = `Paste link for ${name}...`;
    
    // Close sidebar automatically on mobile after clicking an option
    const sidebar = document.getElementById('sidebar');
    if(sidebar && !sidebar.classList.contains('-translate-x-full')) {
        toggleSidebar();
    }
}

// Multi-Language Dictionary & Function
const translations = {
    en: { 
        title: "Unlimited Media Downloader", 
        subtitle: "Paste any link to download 4K videos, MP3 audio, HD thumbnails, or extract video tags instantly." 
    },
    bn: { 
        title: "আনলিমিটেড মিডিয়া ডাউনলোডার", 
        subtitle: "যেকোনো লিঙ্ক পেস্ট করে ভিডিও, এমপি৩ অডিও, এইচডি থাম্বনেল বা ট্যাগ ডাউনলোড করুন।" 
    },
    es: { 
        title: "Descargador de Medios Ilimitado", 
        subtitle: "Pega cualquier enlace para descargar videos en 4K, audio MP3 o extraer etiquetas al instante." 
    },
    ar: { 
        title: "محمل الوسائط غير اللانهائي", 
        subtitle: "الصق أي رابط لتنزيل فيديوهات 4K، صوت MP3، أو استخراج الوسوم فوراً." 
    },
    hi: { 
        title: "असीमित मीडिया डाउनलोडर", 
        subtitle: "4K वीडियो, MP3 ऑडियो, एचडी थंबनेल डाउनलोड करने या टैग निकालने के लिए कोई भी लिंक पेस्ट کریں।" 
    }
};

function changeLanguage(lang) {
    const data = translations[lang] || translations['en'];
    const pageTitle = document.getElementById('pageTitle');
    const pageSubtitle = document.getElementById('pageSubtitle');
    
    if(pageTitle) pageTitle.innerText = data.title;
    if(pageSubtitle) pageSubtitle.innerText = data.subtitle;
}
