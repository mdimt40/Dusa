AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic', offset: 50 });

window.addEventListener('scroll', () => {
  const mainNav = document.getElementById('mainNav');
  if (!mainNav) return;
  if (window.scrollY > 50) { mainNav.classList.add('scrolled'); } 
  else { mainNav.classList.remove('scrolled'); }
});

// ⚠️ IMPORTANT: REPLACE THIS URL WITH YOUR NEW APPS SCRIPT URL FOR THE MEMBER SHEET
const scriptURL = 'https://script.google.com/macros/s/AKfycbxm7vlUM3XmWQRPdkxaLdOaa912xhIU7-vM1hclwKOcKFY_Cb9ZK7RDOEXtYg64Mo2J/exec'; 

let allDonors = []; // Global array to hold the data so we can filter it without re-fetching

// The Exact Column Headers from your Google Sheet (lowercased by the Google Script)
const COL_NAME_ENG = 'সদস্য নাম (ইংরেজীতে)';
const COL_NAME_BN = 'সদস্য নাম(বাংলায়)';
const COL_PHONE = 'মোবাইল নম্বর';
const COL_BLOOD = 'blood group';
const COL_ADDRESS = 'বর্তমান ঠিকানা';

async function loadDonors() {
  const container = document.getElementById('donor-container');
  const resultCount = document.getElementById('results-count');

  try {
    // Fetch the data
    const response = await fetch(scriptURL, { redirect: 'follow' });
    const data = await response.json();
    
    // Filter out invalid rows (people who didn't fill out a blood group)
    allDonors = data.filter(donor => {
      const bg = donor[COL_BLOOD];
      return bg && bg.trim() !== '' && bg !== '?';
    });

    // Show all donors initially
    renderDonors(allDonors);

  } catch (error) {
    console.error('Error fetching donors:', error);
    container.innerHTML = `
      <div class="col-12 text-center py-5 text-danger">
        <i class="fas fa-exclamation-triangle fs-1 mb-3"></i>
        <h5>Could not load donor database.</h5>
        <p>Please check your connection and script URL.</p>
      </div>
    `;
    resultCount.innerText = "Error";
  }
}

// Function to actually draw the HTML cards
function renderDonors(donorsArray) {
  const container = document.getElementById('donor-container');
  const resultCount = document.getElementById('results-count');

  container.innerHTML = ''; // Clear container

  // Update the counter text
  resultCount.innerText = `Showing ${donorsArray.length} records`;

  if (donorsArray.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fas fa-search fs-1 text-muted mb-3 opacity-50"></i>
        <h5 class="text-muted">No donors found for this blood group.</h5>
      </div>
    `;
    return;
  }

  // Loop through the array and generate cards
  donorsArray.forEach(donor => {
    // Get the data, fallback to "Unknown" if blank
    const name = donor[COL_NAME_ENG] || donor[COL_NAME_BN] || 'Anonymous Donor';
    const phone = donor[COL_PHONE] || 'N/A';
    const bloodGroup = donor[COL_BLOOD];
    const address = donor[COL_ADDRESS] || 'Location not provided';

    // Clean the phone number so the "tel:" link works perfectly
    const cleanPhone = phone.replace(/[^0-9+]/g, '');

    const cardHTML = `
      <div class="col-lg-4 col-md-6" data-aos="fade-up">
        <div class="card h-100 d-flex flex-column">
          <div class="d-flex align-items-start gap-3 mb-3">
            <div class="blood-badge shadow-sm">${bloodGroup}</div>
            <div>
              <div class="donor-name">${name}</div>
              <div class="donor-info"><i class="fas fa-map-marker-alt mt-1"></i> <span>${address}</span></div>
            </div>
          </div>
          
          <div class="mt-auto">
            <hr class="opacity-10 my-3">
            <div class="donor-info mb-3">
              <i class="fas fa-phone-alt mt-1"></i> 
              <span class="fw-bold" style="color: var(--text-main); font-size: 1.1rem;">${phone}</span>
            </div>
            <a href="tel:${cleanPhone}" class="btn-call"><i class="fas fa-phone me-2"></i> Call Donor</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// --- LIVE SEARCH FILTER LOGIC ---
document.getElementById('bloodGroupSearch').addEventListener('change', function(e) {
  const selectedGroup = e.target.value; // e.g., "A+", "B-", or "All"
  
  if (selectedGroup === "All") {
    // Show everyone
    renderDonors(allDonors);
  } else {
    // Filter the array where the blood group exactly matches the dropdown choice
    const filteredDonors = allDonors.filter(donor => {
      return donor[COL_BLOOD] === selectedGroup;
    });
    renderDonors(filteredDonors);
  }
});

// Start the process when the page loads
document.addEventListener('DOMContentLoaded', loadDonors);
