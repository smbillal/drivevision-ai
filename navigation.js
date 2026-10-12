// Navigation & Multi-Language Logic

// Sidebar Toggle
function toggleSidebar() { 
    const sidebar = document.getElementById('sidebar');
    if(sidebar) sidebar.classList.toggle('-translate-x-full'); 
}

// Switch Tool / Platform Function
function switchTool(id, name) {
    const pageTitle = document.getElementById('pageTitle');
    const videoUrl = document.getElementById('videoUrl');
    
    if(pageTitle) pageTitle.innerText = name;
    if(videoUrl) videoUrl.placeholder = `Paste link for ${name}...`;
    
    const sidebar = document.getElementById('sidebar');
    if(sidebar && !sidebar.classList.contains('-translate-x-full')) {
        toggleSidebar();
    }
}

// Complete Multi-Language Dictionary
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
    de: {
        title: "Unbegrenzter Media Downloader",
        subtitle: "Fügen Sie einen beliebigen Link ein, um 4K-Videos, MP3-Audio oder Thumbnails herunterzuladen."
    },
    fr: {
        title: "Téléchargeur de Médias Illimité",
        subtitle: "Collez n'importe quel lien pour télécharger des vidéos 4K, audio MP3 ou vignettes."
    },
    hi: { 
        title: "असीमित मीडिया डाउनलोडर", 
        subtitle: "4K वीडियो, MP3 ऑडियो, एचडी थंबनेल डाउनलोड करने या टैग निकालने के लिए कोई भी लिंक पेस्ट करें।" 
    },
    id: {
        title: "Pengunduh Media Tanpa Batas",
        subtitle: "Tempel tautan apa pun untuk mengunduh video 4K, audio MP3, atau thumbnail HD."
    },
    it: {
        title: "Scaricatore di Media Illimitato",
        subtitle: "Incolla qualsiasi link per scaricare video 4K, audio MP3 o miniature HD."
    },
    ja: {
        title: "無制限メディアダウンローダー",
        subtitle: "リンクを貼り付けて、4K動画、MP3音声、HDサムネイルを即座にダウンロードします。"
    },
    ko: {
        title: "무제한 미디어 다운로더",
        subtitle: "링크를 붙여넣어 4K 동영상, MP3 오디오, HD 썸네일을 즉시 다운로드하세요."
    },
    pt: {
        title: "Baixador de Mídia Ilimitado",
        subtitle: "Cole qualquer link para baixar vídeos 4K, áudio MP3 ou miniaturas HD instantaneamente."
    },
    ru: {
        title: "Безлимитный загрузчик медиа",
        subtitle: "Вставьте любую ссылку для скачивания 4K видео, MP3 аудио или миниатюр."
    },
    zh: {
        title: "无限媒体下载器",
        subtitle: "粘贴任意链接即可立即下载 4K 视频、MP3 音频、高清缩略图或提取视频标签。"
    }
};

function changeLanguage(lang) {
    const data = translations[lang] || translations['en'];
    const pageTitle = document.getElementById('pageTitle');
    const pageSubtitle = document.getElementById('pageSubtitle');
    
    if(pageTitle) pageTitle.innerText = data.title;
    if(pageSubtitle) pageSubtitle.innerText = data.subtitle;
}
