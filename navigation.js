// Navigation & Multi-Language Logic
function toggleSidebar() { 
    document.getElementById('sidebar').classList.toggle('-translate-x-full'); 
}

function switchTool(id, name) {
    document.getElementById('pageTitle').innerText = name;
    document.getElementById('videoUrl').placeholder = `Paste link for ${name}...`;
    if(!document.getElementById('sidebar').classList.contains('-translate-x-full')) {
        toggleSidebar();
    }
}

const translations = {
    en: { title: "Unlimited Media Downloader", subtitle: "Paste any link to download 4K videos, MP3 audio, HD thumbnails, or extract video tags instantly." },
    bn: { title: "আনলিমিটেড মিডিয়া ডাউনলোডার", subtitle: "যেকোনো লিঙ্ক পেস্ট করে ভিডিও, এমপি৩ অডিও, এইচডি থাম্বনেল বা ট্যাগ ডাউনলোড করুন।" }
};

function changeLanguage(lang) {
    const data = translations[lang] || translations['en'];
    document.getElementById('pageTitle').innerText = data.title;
    document.getElementById('pageSubtitle').innerText = data.subtitle;
}
