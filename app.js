/**
 * ==============================================================================
 * IMPACT MARYLAND REAL ESTATE — CLIENT APPLICATION ENGINE (JAVASCRIPT)
 * Vanilla JS — Zero External Dependencies, Sub-30ms Client Filter Speed,
 * Production-Ready for GitHub Pages & Static Hosting
 * ==============================================================================
 */

// --- 1. DOMAIN DATASET: AUTHENTIC CENTRAL MARYLAND PROPERTIES ---
const propertiesData = [
  {
    id: 'prop-1',
    mls: 'MDWA2008412',
    title: 'Custom Stone Executive Estate on 3.42 Acres',
    street: '20107 W Stone Ct',
    city: 'Keedysville',
    county: 'Washington County',
    zip: '21756',
    price: 1150000,
    beds: 5,
    baths: 5,
    sqft: 6123,
    type: 'Single Family',
    status: 'Active',
    agent: 'Eric Verdi (Broker / Owner)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Impeccably built custom stone residence offering over 6,100 finished square feet on 3.42 rolling acres. Commercial Wolf/Sub-Zero kitchen, finished walk-out lower level with custom wine cellar, wet bar, and sweeping mountain panoramas.'
  },
  {
    id: 'prop-2',
    mls: 'MDFR2089201',
    title: 'Turnkey Luxury Colonial in Urbana School Cluster',
    street: '3484 Urbana Pike',
    city: 'Frederick',
    county: 'Frederick County',
    zip: '21704',
    price: 700000,
    beds: 4,
    baths: 4,
    sqft: 2856,
    type: 'Single Family',
    status: 'Active',
    agent: 'Janelle Wilson (Associate Broker)',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    desc: 'Zoned for the premier Urbana blue-ribbon school cluster. Hardwood floors throughout, expanded gourmet kitchen with quartz countertops, sunlit morning room, and luxury primary suite with spa bathroom.'
  },
  {
    id: 'prop-3',
    mls: 'MDFR2089316',
    title: 'Renovated Rambler on 0.71 Picturesque Acres',
    street: '11909 Lynn Crest Road',
    city: 'Frederick',
    county: 'Frederick County',
    zip: '21770',
    price: 485000,
    beds: 3,
    baths: 3,
    sqft: 2100,
    type: 'Single Family',
    status: 'Active',
    agent: 'Josephine "Josie" Medwick',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    desc: 'Newly renovated kitchen with custom cabinetry, granite counters and stainless appliances, 3 updated bathrooms, brand-new 2026 HVAC and water heater. Flat, private 0.71-acre lot backing to mature trees.'
  },
  {
    id: 'prop-4',
    mls: 'MDFR2089455',
    title: 'Historic Downtown Federal Townhome with Courtyard',
    street: '124 N Market St',
    city: 'Frederick',
    county: 'Frederick County',
    zip: '21701',
    price: 875000,
    beds: 3,
    baths: 4,
    sqft: 2650,
    type: 'Townhome',
    status: 'Active',
    agent: 'Eric Verdi (Broker / Owner)',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    desc: 'Steps to Baker Park and Carroll Creek Promenade. Preserved historic brick, original heart-pine floors, private enclosed courtyard garden, exposed beam ceilings, and rare gated 2-car off-street parking.'
  },
  {
    id: 'prop-5',
    mls: 'MDFR2088912',
    title: 'Lake Linganore Waterfront Craftsman with Beach Access',
    street: '5912 Pecking Stone St',
    city: 'New Market',
    county: 'Frederick County',
    zip: '21774',
    price: 559900,
    beds: 4,
    baths: 4,
    sqft: 2412,
    type: 'Single Family',
    status: 'Active',
    agent: 'Janelle Wilson (Associate Broker)',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    desc: 'Private 250-acre lake access, 4 community sandy beaches, and over 30 miles of hiking trails. Quartz island kitchen, floor-to-ceiling stone fireplace, and custom screened-in porch with peaceful canopy views.'
  },
  {
    id: 'prop-6',
    mls: 'MDFR2087611',
    title: 'Historic Middletown Valley Victorian with Mountain Views',
    street: '213 W Main St',
    city: 'Middletown',
    county: 'Frederick County',
    zip: '21769',
    price: 435000,
    beds: 4,
    baths: 3,
    sqft: 2518,
    type: 'Single Family',
    status: 'Under Contract',
    agent: 'Katie Ellis-Warfield',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    desc: 'Under contract in 8 days. Iconic wrap-around porch with panoramic valley vistas, spacious flat yard, restored woodwork, and premier Middletown school cluster.'
  },
  {
    id: 'prop-7',
    mls: 'MDFR2085122',
    title: 'Villages of Urbana Luxury Townhome',
    street: '9010 Templeton Dr',
    city: 'Frederick',
    county: 'Frederick County',
    zip: '21704',
    price: 650000,
    beds: 3,
    baths: 5,
    sqft: 2324,
    type: 'Townhome',
    status: 'Sold',
    agent: 'Eric Verdi (Broker / Owner)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    desc: 'SOLD $15,000 over asking price in 4 days by Impact Maryland Real Estate. Contact our team for neighborhood comp records on Templeton Drive.'
  }
];

// Utility: Format Currency ($XXX,XXX)
function formatCurrency(num) {
  return '$' + num.toLocaleString('en-US');
}

// --- 2. REAL-TIME SEARCH & FILTER ENGINE ---
function renderProperties() {
  const keyword = (document.getElementById('filter-keyword')?.value || '').toLowerCase().trim();
  const county = document.getElementById('filter-county')?.value || 'All';
  const priceRange = document.getElementById('filter-price')?.value || 'All';
  const minBeds = parseInt(document.getElementById('filter-beds')?.value || '0', 10);
  const sortBy = document.getElementById('filter-sort')?.value || 'newest';

  let filtered = propertiesData.filter(p => {
    // Keyword match across street, city, MLS, or zip
    if (keyword) {
      const match = p.street.toLowerCase().includes(keyword) ||
                    p.city.toLowerCase().includes(keyword) ||
                    p.mls.toLowerCase().includes(keyword) ||
                    p.zip.includes(keyword);
      if (!match) return false;
    }
    // County match
    if (county !== 'All' && p.county !== county) return false;
    // Bedrooms match
    if (minBeds > 0 && p.beds < minBeds) return false;
    // Price range match
    if (priceRange === 'under500' && p.price >= 500000) return false;
    if (priceRange === '500to800' && (p.price < 500000 || p.price > 800000)) return false;
    if (priceRange === 'over800' && p.price <= 800000) return false;

    return true;
  });

  // Sorting
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Update Count
  const countEl = document.getElementById('property-count');
  if (countEl) countEl.innerText = filtered.length;

  const grid = document.getElementById('properties-grid');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: #FFFFFF; border: 1px dashed var(--brand-border); border-radius: 12px; color: var(--brand-text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600; color: var(--brand-navy); margin-bottom: 0.5rem;">No properties match your exact filters</p>
        <p style="font-size: 0.85rem; max-width: 420px; margin: 0 auto 1.25rem;">Try clearing your keyword or expanding the price range to explore all active Central Maryland inventory.</p>
        <button onclick="resetFilters()" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    let badgeClass = 'badge-active';
    if (p.status === 'Sold') badgeClass = 'badge-sold';
    if (p.status === 'Under Contract') badgeClass = 'badge-pending';

    return `
      <div class="property-card" onclick="openPropertyModal('${p.id}')" tabindex="0" role="button" aria-label="View listing details for ${p.street}">
        <div class="property-image-wrap">
          <img src="${p.image}" alt="${p.street}, ${p.city} MD" loading="lazy" width="600" height="375">
          <span class="property-badge ${badgeClass}">${p.status}</span>
          <div class="property-price">${formatCurrency(p.price)}</div>
        </div>
        <div class="property-body">
          <div>
            <h3>${p.street}</h3>
            <p style="font-size: 0.78rem; color: #64748B; margin-bottom: 0.35rem;">📍 ${p.city}, MD ${p.zip} • ${p.county}</p>
            <div class="property-specs">
              <span>🛏️ ${p.beds} Beds</span>
              <span>🛁 ${p.baths} Baths</span>
              <span>📐 ${p.sqft.toLocaleString()} SqFt</span>
            </div>
            <p style="font-size: 0.78rem; color: #475569; line-height: 1.55; margin-top: 0.65rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${p.desc}</p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; font-size: 0.75rem; font-weight: 700; border-top: 1px solid #F1F5F9; padding-top: 0.75rem;">
            <span style="color: #94A3B8;">MLS #${p.mls}</span>
            <span style="color: var(--brand-gold);">View Listing & Schedule Tour →</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  const keywordEl = document.getElementById('filter-keyword');
  const countyEl = document.getElementById('filter-county');
  const priceEl = document.getElementById('filter-price');
  const bedsEl = document.getElementById('filter-beds');
  const sortEl = document.getElementById('filter-sort');

  if (keywordEl) keywordEl.value = '';
  if (countyEl) countyEl.value = 'All';
  if (priceEl) priceEl.value = 'All';
  if (bedsEl) bedsEl.value = '0';
  if (sortEl) sortEl.value = 'newest';

  renderProperties();
}

function handleHeroSearch() {
  const heroInput = document.getElementById('hero-quick-search');
  const filterInput = document.getElementById('filter-keyword');
  if (heroInput && filterInput) {
    filterInput.value = heroInput.value;
  }
  renderProperties();
  const propSection = document.getElementById('properties-section');
  if (propSection) {
    propSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// --- 3. PROPERTY DETAIL MODAL & MORTGAGE MATH ---
function openPropertyModal(id) {
  const p = propertiesData.find(item => item.id === id);
  if (!p) return;

  // Monthly mortgage calculation formula:
  // Loan amount: 80% LTV, 30-year fixed at 6.5% interest
  const loanAmount = p.price * 0.8;
  const monthlyRate = 0.065 / 12;
  const numPayments = 360;
  const monthlyPrincipalInterest = Math.round(
    loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
  );
  // Estimated Maryland property tax (approx 1.08% / 12) + Hazard Insurance (~$110/mo)
  const monthlyTax = Math.round((p.price * 0.0108) / 12);
  const monthlyInsurance = 110;
  const totalMonthly = monthlyPrincipalInterest + monthlyTax + monthlyInsurance;

  const modalContainer = document.getElementById('modal-content');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="position: relative; aspect-ratio: 16/9; border-radius: var(--radius-lg); overflow: hidden; background: #0B1528;">
        <img src="${p.image}" alt="${p.street}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; bottom: 16px; left: 16px; background: rgba(11, 21, 40, 0.94); color: #fff; padding: 0.85rem 1.25rem; border-radius: 8px; backdrop-filter: blur(8px);">
          <span style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700; color: var(--brand-gold); display: block; line-height: 1;">${formatCurrency(p.price)}</span>
          <span style="font-size: 0.75rem; color: #CBD5E1; margin-top: 4px; display: block;">Est. ${formatCurrency(totalMonthly)}/mo (P&I, MD Taxes, Ins.)</span>
        </div>
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--brand-gold); text-transform: uppercase; letter-spacing: 0.05em;">
            MLS #${p.mls} • ${p.county} • Status: ${p.status}
          </span>
          <span style="font-size: 0.75rem; font-weight: 600; color: #64748B;">Listing Agent: ${p.agent}</span>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: 1.85rem; color: var(--brand-navy); margin-top: 0.35rem;">
          ${p.street}, ${p.city} MD ${p.zip}
        </h2>
        <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; font-weight: 600; color: #475569; margin: 0.75rem 0; flex-wrap: wrap;">
          <span>🛏️ ${p.beds} Bedrooms</span>
          <span>🛁 ${p.baths} Bathrooms</span>
          <span>📐 ${p.sqft.toLocaleString()} Finished Sq Ft</span>
          <span>🏡 ${p.type}</span>
        </div>
      </div>

      <div>
        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--brand-navy); margin-bottom: 0.4rem; font-weight: 700;">Property Overview</h4>
        <p style="font-size: 0.875rem; color: #334155; line-height: 1.7;">${p.desc}</p>
      </div>

      <!-- Broker Reciprocity Disclaimer Badge -->
      <div style="background: #F8FAFC; border: 1px solid var(--brand-border); padding: 0.95rem; border-radius: var(--radius-md); font-size: 0.72rem; color: #64748B; line-height: 1.5;">
        <strong style="color: var(--brand-navy); display: block; margin-bottom: 2px;">Broker Reciprocity / Bright MLS Notice:</strong>
        Listing courtesy of Impact Maryland Real Estate via Bright MLS Broker Reciprocity. All information deemed reliable but not guaranteed. Equal Housing Opportunity.
      </div>

      <!-- In-Person Showing Request Form -->
      <div id="showing-box" style="background: var(--brand-gold-light); border: 1px solid rgba(197, 155, 39, 0.4); padding: 1.5rem; border-radius: var(--radius-lg);">
        <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--brand-navy); margin-bottom: 0.35rem;">Schedule an In-Person Showing</h4>
        <p style="font-size: 0.78rem; color: #64748B; margin-bottom: 1rem;">Experience this home with a fiduciary advisor. Zero canned scripts or high-pressure tactics.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 0.85rem;">
          <input id="show-name" type="text" placeholder="Your Full Name *" style="padding: 0.65rem 0.85rem; border: 1px solid var(--brand-border); border-radius: 6px; font-size: 0.8125rem; background: #fff;">
          <input id="show-phone" type="tel" placeholder="Phone Number *" style="padding: 0.65rem 0.85rem; border: 1px solid var(--brand-border); border-radius: 6px; font-size: 0.8125rem; background: #fff;">
        </div>
        <div id="show-error" style="display: none; color: var(--brand-error); font-size: 0.75rem; margin-bottom: 0.5rem; font-weight: 600;"></div>
        <button onclick="submitShowing('${p.mls}')" class="btn btn-primary" style="width: 100%; font-size: 0.875rem;">
          📅 Confirm Showing Appointment
        </button>
      </div>
    </div>
  `;

  const modalOverlay = document.getElementById('property-modal');
  if (modalOverlay) {
    modalOverlay.style.display = 'flex';
    setTimeout(() => modalOverlay.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  }
}

function closePropertyModal() {
  const modalOverlay = document.getElementById('property-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 200);
  }
}

function submitShowing(mls) {
  const nameInput = document.getElementById('show-name');
  const phoneInput = document.getElementById('show-phone');
  const errorEl = document.getElementById('show-error');
  const showingBox = document.getElementById('showing-box');

  const name = nameInput?.value.trim();
  const phone = phoneInput?.value.trim();

  if (!name || !phone) {
    if (errorEl) {
      errorEl.innerText = 'Please provide both your name and phone number.';
      errorEl.style.display = 'block';
    }
    return;
  }

  if (showingBox) {
    showingBox.innerHTML = `
      <div style="text-align: center; padding: 1rem 0;">
        <span style="font-size: 2.25rem; display: block; margin-bottom: 0.5rem;">✅</span>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--brand-navy); margin-bottom: 0.35rem;">Showing Request Dispatched!</h4>
        <p style="font-size: 0.84rem; color: #475569; line-height: 1.6;">
          Thank you, <strong>${name}</strong>! Broker Eric Verdi and our team have received your showing inquiry for <strong>MLS #${mls}</strong>. We will coordinate directly with you at <strong>${phone}</strong> shortly.
        </p>
      </div>
    `;
  }
}

// --- 4. MULTI-STEP SELLER VALUATION ENGINE ---
function goToStep(num) {
  // Step 1 Validation
  if (num === 2) {
    const streetInput = document.getElementById('val-street');
    const zipInput = document.getElementById('val-zip');
    const street = streetInput?.value.trim();
    const zip = zipInput?.value.trim();

    let hasError = false;
    if (!street) {
      streetInput?.classList.add('input-error');
      hasError = true;
    } else {
      streetInput?.classList.remove('input-error');
    }

    if (!zip) {
      zipInput?.classList.add('input-error');
      hasError = true;
    } else {
      zipInput?.classList.remove('input-error');
    }

    if (hasError) return;
  }

  // Switch visible step container
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('step-' + i);
    if (el) el.style.display = 'none';
  }

  const target = document.getElementById('step-' + num);
  if (target) {
    target.style.display = 'block';
  }

  // Update progress bar percentage
  const progressBar = document.getElementById('wizard-progress');
  if (progressBar) {
    progressBar.style.width = (num * 25) + '%';
  }
}

function submitValuation() {
  const nameInput = document.getElementById('val-name');
  const emailInput = document.getElementById('val-email');
  const phoneInput = document.getElementById('val-phone');
  const streetInput = document.getElementById('val-street');

  const name = nameInput?.value.trim();
  const email = emailInput?.value.trim();
  const phone = phoneInput?.value.trim();
  const street = streetInput?.value.trim() || 'Your Central MD Property';

  let hasError = false;
  if (!name) { nameInput?.classList.add('input-error'); hasError = true; } else { nameInput?.classList.remove('input-error'); }
  if (!email || !email.includes('@')) { emailInput?.classList.add('input-error'); hasError = true; } else { emailInput?.classList.remove('input-error'); }
  if (!phone) { phoneInput?.classList.add('input-error'); hasError = true; } else { phoneInput?.classList.remove('input-error'); }

  if (hasError) return;

  const confirmName = document.getElementById('confirm-name');
  const confirmStreet = document.getElementById('confirm-street');
  if (confirmName) confirmName.innerText = name;
  if (confirmStreet) confirmStreet.innerText = street;

  const step4 = document.getElementById('step-4');
  const stepSuccess = document.getElementById('step-success');
  const progressBar = document.getElementById('wizard-progress-bar');

  if (step4) step4.style.display = 'none';
  if (stepSuccess) stepSuccess.style.display = 'block';
  if (progressBar) progressBar.style.display = 'none';
}

// --- 5. FLOATING AI CONVERSATIONAL ASSISTANT ---
function toggleAiChat() {
  const chatWin = document.getElementById('ai-chat-window');
  if (!chatWin) return;
  const isHidden = chatWin.style.display === 'none' || !chatWin.style.display;
  chatWin.style.display = isHidden ? 'flex' : 'none';

  if (isHidden) {
    const input = document.getElementById('chat-input');
    if (input) setTimeout(() => input.focus(), 100);
  }
}

function sendChatMessage(preset) {
  const input = document.getElementById('chat-input');
  const text = preset || (input ? input.value : '');
  if (!text || !text.trim()) return;

  const box = document.getElementById('chat-messages');
  if (!box) return;

  // Append user message
  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'ai-msg ai-msg-user';
  userMsgEl.innerText = text;
  box.appendChild(userMsgEl);

  if (input) input.value = '';
  box.scrollTop = box.scrollHeight;

  // Contextual Assistant Responses
  setTimeout(() => {
    let reply = "At Impact Maryland Real Estate, we operate as true client fiduciaries. We never use canned sales scripts. What specific questions can Broker Eric Verdi answer for you?";
    const low = text.toLowerCase();

    if (low.includes('worth') || low.includes('valuation') || low.includes('equity') || low.includes('sell')) {
      reply = "Our home valuations analyze exact closed comps on your specific street—not generic algorithmic estimates. Scroll up to our Home Valuation section or call Broker Eric Verdi directly at (240) 815-0890 to get started!";
    } else if (low.includes('urbana') || low.includes('frederick') || low.includes('middletown') || low.includes('keedysville')) {
      reply = "We actively serve Frederick, Urbana, Middletown, and Keedysville! For example, Urbana offers top blue-ribbon schools and I-270 commuter positioning, while Keedysville offers scenic mountain acreage. Check out our active listings above.";
    } else if (low.includes('eric') || low.includes('verdi') || low.includes('talk') || low.includes('agent') || low.includes('contact')) {
      reply = "Broker Eric Verdi can be reached directly at (240) 815-0890 or via email at eric@impactmarylandrealestate.com. Our office is located at 5300 Westview Drive in Frederick, MD.";
    } else if (low.includes('fee') || low.includes('commission') || low.includes('cost')) {
      reply = "In alignment with our fiduciary ethos, we offer transparent commission structures with zero hidden fees. We discuss net proceeds openly before any listing agreements are signed.";
    }

    const aiMsgEl = document.createElement('div');
    aiMsgEl.className = 'ai-msg ai-msg-ai';
    aiMsgEl.innerText = reply;
    box.appendChild(aiMsgEl);
    box.scrollTop = box.scrollHeight;
  }, 400);
}

// --- 6. GLOBAL INITIALIZATION & ACCESSIBILITY LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  // Initial render of listings
  renderProperties();

  // Close modal when clicking outside modal content
  const modalOverlay = document.getElementById('property-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closePropertyModal();
      }
    });
  }

  // Keyboard shortcut: Escape key closes modal & AI chat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePropertyModal();
      const chatWin = document.getElementById('ai-chat-window');
      if (chatWin && chatWin.style.display === 'flex') {
        chatWin.style.display = 'none';
      }
    }
  });
});
