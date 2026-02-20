// Initialize AOS (Animations)
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out-cubic',
  offset: 50
});

// Dynamic Navbar Background
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNav');
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Use your proxy URL instead of the Google Script URL
const scriptURL = 'https://proxy.mdimt40.workers.dev/';

async function loadEvents() {
  const container = document.getElementById('events-container');
 
  try {
    const response = await fetch(scriptURL);
   
    // If the proxy is working, this will return the clean JSON
    const events = await response.json();
   
    container.innerHTML = '';
   
    events.forEach(event => {
      if(!event.title) return;

      // Fix for missing https:// in the link
      let rawLink = event.link || '#';
      if (rawLink !== '#' && !rawLink.startsWith('http')) {
        rawLink = 'https://' + rawLink;
      }

      // 1. Handle the Image URL
      // Use the image from your API (e.g., event.image or event.imageUrl)
      // If none exists, use a placeholder image.
      const imageUrl = event.image || 'https://via.placeholder.com/800x400?text=Event+Image';

      // 2. Updated Card HTML to include the image
      const cardHTML = `
        <div class="col-lg-8 mb-4" data-aos="flip-up">
          <div class="card event-card rounded-4 overflow-hidden"> 
            
            <img src="${imageUrl}" class="card-img-top" alt="${event.title}" style="height: 250px; object-fit: cover;">
            
            <div class="card-body p-4"> <h4 class="card-title">${event.title}</h4>
                <hr class="my-3 opacity-10">
                
                <div class="row mb-4">
                  <div class="col-sm-6 mb-2">
                    <p class="mb-0 text-dark"><i class="fas fa-calendar-alt me-2" style="color: var(--brand-orange)"></i><strong>Date:</strong> ${event.date || 'TBA'}</p>
                  </div>
                  <div class="col-sm-6 mb-2">
                    <p class="mb-0 text-dark"><i class="fas fa-clock me-2" style="color: var(--brand-orange)"></i><strong>Time:</strong> ${event.time || 'TBA'}</p>
                  </div>
                  <div class="col-12 mt-2">
                    <p class="mb-0 text-dark"><i class="fas fa-map-marker-alt me-2" style="color: var(--brand-orange)"></i><strong>Location:</strong> ${event.location || 'TBA'}</p>
                  </div>
                </div>
                
                <a href="${rawLink}" target="_blank" class="btn btn-dusa w-100 py-3 fs-5">Read More & Register</a>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += cardHTML;
    });

  } catch (error) {
    console.error('Error fetching events:', error);
    container.innerHTML = '<p class="text-danger">Error loading events. Please check the console.</p>';
  }
}

// Load events when DOM is ready
document.addEventListener('DOMContentLoaded', loadEvents);

// Executive Members Data
const executiveMembers = [

  // সভাপতি
  { name: "মোঃ রায়হানুল ইসলাম", position: "সভাপতি", university: "আলহাজ্ব মকবুল হোসেন কলেজ", image: "images/president.jpg" },

  // সহ-সভাপতি
  { name: "মোঃ সাইফুল ইসলাম শামীম", position: "সহ-সভাপতি", university: "Jagannath University" },
  { name: "নাজমুস সাকিব সালেহ আব্দুল্লাহ", position: "সহ-সভাপতি", university: "University of Dhaka" },
  { name: "আহসান হাবিব জীবন", position: "সহ-সভাপতি", university: "Manarat International University" },
  { name: "তাওসিফ আহমেদ সালেহ", position: "সহ-সভাপতি", university: "Government Titumir College" },
  { name: "বনি আমিন খান", position: "সহ-সভাপতি", university: "" },
  { name: "মোঃ সাইফুল ইসলাম", position: "সহ-সভাপতি", university: "সরকারি তোলারাম কলেজ" },
  { name: "কাওসার আহমেদ", position: "সহ-সভাপতি", university: "" },
  { name: "ফেরদৌস আহমেদ", position: "সহ-সভাপতি", university: "" },

  // সাধারণ সম্পাদক
  { name: "মোঃ মারুফ হোসাইন", position: "সাধারণ সম্পাদক", university: "Sher-E-Bangla Agricultural University", image: "images/gs.jpg" },

  // সহ-সাধারণ সম্পাদক
  { name: "মোঃ বুলবুল আহমেদ", position: "সহ-সাধারণ সম্পাদক", university: "Government Titumir College" },
  { name: "মোঃ আমিনুল ইসলাম", position: "সহ-সাধারণ সম্পাদক", university: "Trauma College of Health Science" },
  { name: "মোঃ সাইদুল ইসলাম", position: "সহ-সাধারণ সম্পাদক", university: "Presidency University" },
  { name: "রাকিব হাসান", position: "সহ-সাধারণ সম্পাদক", university: "সরকারি বাঙলা কলেজ" },
  { name: "মোঃ ইমাম হোসেন", position: "সহ-সাধারণ সম্পাদক", university: "Government Titumir College" },
  { name: "আমিনুল হক অঙ্কি", position: "সহ-সাধারণ সম্পাদক", university: "University of Dhaka" },
  { name: "সাব্বির ইমতিয়াজ আলিফ", position: "সহ-সাধারণ সম্পাদক", university: "Primeasia University" },
  { name: "সাইফুল ইসলাম কামিম", position: "সহ-সাধারণ সম্পাদক", university: "Jagannath University" },
  { name: "মনাময় রহমান সিয়াম", position: "সহ-সাধারণ সম্পাদক", university: "Daffodil International University" },
  { name: "আরাফাত তানভীর রনি", position: "সহ-সাধারণ সম্পাদক", university: "BGMEA University of Fashion and Technology" },
  { name: "মেহেদী হাসান মারুফ", position: "সহ-সাধারণ সম্পাদক", university: "সরকারি হোমিওপ্যাথিক মেডিকেল কলেজ" },
  { name: "মোঃ নিরব হাওলাদার", position: "সহ-সাধারণ সম্পাদক", university: "Tejgaon College" },
  { name: "মাউনুদ্দিন আহমেদ", position: "সহ-সাধারণ সম্পাদক", university: "University of Dhaka" },

  // সাংগঠনিক সম্পাদক
  { name: "মোঃ আরিফ হোসাইন", position: "সাংগঠনিক সম্পাদক", university: "ঢাকা বিশ্ববিদ্যালয়" },
  { name: "মোঃ হাসিব বিশ্বাস", position: "সাংগঠনিক সম্পাদক", university: "সরকারি তিতুমীর কলেজ" },
  { name: "আকিকুর রহমান", position: "সাংগঠনিক সম্পাদক", university: "" },
  { name: "মোঃ হাসিবুল ইসলাম", position: "সাংগঠনিক সম্পাদক", university: "Dhaka International University" },
  { name: "মোঃ তামজিদ", position: "সাংগঠনিক সম্পাদক", university: "" },
  { name: "আব্দুল্লাহ আল নোমান", position: "সাংগঠনিক সম্পাদক", university: "Uttara University" },
  { name: "মোঃ জাম্বর", position: "সাংগঠনিক সম্পাদক", university: "" },
  { name: "মোঃ রায়হান আহমেদ রিমন", position: "সাংগঠনিক সম্পাদক", university: "" },
  { name: "মোঃ মারুফ রহমান", position: "সাংগঠনিক সম্পাদক", university: "Daffodil International University" },

  // অর্থ সম্পাদক
  { name: "মাহবুবুর রহমান শান্ত", position: "অর্থ সম্পাদক", university: "" },
  { name: "মোঃ সিয়াম খান", position: "অর্থ সম্পাদক", university: "City University" },

  // প্রচার সম্পাদক
  { name: "মোঃ ইয়াসির আরাফাত জিসান", position: "প্রচার সম্পাদক", university: "Daffodil International University" },
  { name: "তারেকুল ইসলাম", position: "প্রচার সম্পাদক", university: "BUET" },
  { name: "মোঃ সজিব", position: "প্রচার সম্পাদক", university: "" },

  // আইন বিষয়ক সম্পাদক
  { name: "তাওন আহমেদ সৈকত", position: "আইন বিষয়ক সম্পাদক", university: "সরকারি বাঙলা কলেজ" },
  { name: "মোঃ নাঈম", position: "আইন বিষয়ক সম্পাদক", university: "Govt Janata College" },

  // সংস্কৃতি সম্পাদক
  { name: "আব্দুল্লাহ আল নোমান", position: "সংস্কৃতি সম্পাদক", university: "Uttara University" },
  { name: "সৈয়দ কাজী", position: "সংস্কৃতি সম্পাদক", university: "" },
  { name: "আক্তার হোসেন বায়েজিদ", position: "সংস্কৃতি সম্পাদক", university: "" },

  // ধর্ম বিষয়ক সম্পাদক
  { name: "মুঈনুল ইসলাম", position: "ধর্ম বিষয়ক সম্পাদক", university: "ঢাকা বিশ্ববিদ্যালয়" },
  { name: "মোঃ ইকরামুল কবির", position: "ধর্ম বিষয়ক সম্পাদক", university: "University of Dhaka" },
  { name: "মোঃ সাইম সিকদার", position: "ধর্ম বিষয়ক সম্পাদক", university: "Dhaka University" },

  // ক্রীড়া সম্পাদক
  { name: "অপূর্ব লস্কর", position: "ক্রীড়া সম্পাদক", university: "National Institute of Textile Engineering and Research" },
  { name: "সাগর খান", position: "ক্রীড়া সম্পাদক", university: "" },
  { name: "আরাফাত রাফি", position: "ক্রীড়া সম্পাদক", university: "" },
  { name: "মোঃ নাঈম হোসেন", position: "ক্রীড়া সম্পাদক", university: "ভাওয়াল বদরে আলম সরকারি কলেজ" },

  // দপ্তর সম্পাদক
  { name: "মোঃ ইমতিয়াজ", position: "দপ্তর সম্পাদক", university: "Daffodil International University" },
  { name: "জে এম আদনান রাফি", position: "দপ্তর সম্পাদক", university: "" },
  { name: "ইমরান খান", position: "দপ্তর সম্পাদক", university: "" },

  // ছাত্রী বিষয়ক সম্পাদক
  { name: "সুলতানা রাজিয়া", position: "ছাত্রী বিষয়ক সম্পাদক", university: "Trauma College of Health Science" },
  { name: "হাফসা আক্তার নিসি", position: "ছাত্রী বিষয়ক সম্পাদক", university: "" },
  { name: "ফাহমিদা", position: "ছাত্রী বিষয়ক সম্পাদক", university: "" },
  { name: "সানজিদা মো", position: "ছাত্রী বিষয়ক সম্পাদক", university: "" },

  // কার্যনির্বাহী সদস্য
  { name: "মোঃ জোবায়ের আহমেদ", position: "কার্যনির্বাহী সদস্য", university: "BUET" },
  { name: "মোঃ রাফি খান", position: "কার্যনির্বাহী সদস্য", university: "Srijanee Bidyaniketan" },
  { name: "করদওয়ান রহমান রিফাত", position: "কার্যনির্বাহী সদস্য", university: "" },
  { name: "মোঃ সাইদুল ইসলাম", position: "কার্যনির্বাহী সদস্য", university: "National Institute of Textile Engineering and Research" },
  { name: "নূরুন্নবী ইফাত", position: "কার্যনির্বাহী সদস্য", university: "Daffodil International University" },
  { name: "মোঃ তাজুল ইসলাম", position: "কার্যনির্বাহী সদস্য", university: "Eastern University" },
  { name: "আব্দুল্লাহ আল সালমান", position: "কার্যনির্বাহী সদস্য", university: "BUET" },
  { name: "রাহাতুল ইসলাম রোহান", position: "কার্যনির্বাহী সদস্য", university: "Daffodil International Univarsity" },
  { name: "মোঃ রাকিব শরীফ", position: "কার্যনির্বাহী সদস্য", university: "" },
  { name: "ইয়াছির হোসেন লারিন", position: "কার্যনির্বাহী সদস্য", university: "Eastern University" },
  { name: "মোঃ কামিম আহমেদ", position: "কার্যনির্বাহী সদস্য", university: "" },
  { name: "শাদমিন সাকিব অপূর্ব", position: "কার্যনির্বাহী সদস্য", university: "BMARPC" }


];

const executiveContainer = document.getElementById("executiveContainer");

if(executiveContainer) {
  executiveMembers.forEach(member => {
    const imageUrl = member.image 
      ? member.image 
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=173A5E&color=fff&size=150`;

    executiveContainer.innerHTML += `
      <div class="card profile-card">
        <div class="profile-img-wrap">
          <img src="${imageUrl}" alt="${member.name}">
        </div>
        <h5>${member.name}</h5>
        <p>${member.position} • ${member.university}</p>
        <div class="d-flex justify-content-center gap-2">
          <a href="tel:${member.phone}" class="btn btn-dusa btn-sm px-3">Call Now</a>
          <button class="btn btn-outline-primary btn-sm px-3" onclick="showDetails('${member.name}','${member.position}','${member.university}')">
            Details
          </button>
        </div>
      </div>
    `;
  });
}

// Optional simple details popup
function showDetails(name, position, university){
  alert(
    "Name: " + name + "\n" +
    "Position: " + position + "\n" +
    "University: " + university
  );
}

