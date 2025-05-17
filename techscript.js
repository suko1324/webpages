// Root app container
const app = document.getElementById("app");

// Device icons mapping with Font Awesome
const deviceIcons = {
  // Mobile & Computing
  "Android Phone": '<i class="fa-brands fa-android"></i>',
  "iPhone": '<i class="fa-brands fa-apple"></i>',
  "iPad": '<i class="fa-solid fa-tablet-screen-button"></i>',
  "Laptop": '<i class="fa-solid fa-laptop"></i>',
  "MacBook": '<i class="fa-solid fa-laptop-code"></i>',
  "Smartwatch": '<i class="fa-solid fa-clock"></i>',
  "Tablet": '<i class="fa-solid fa-tablet"></i>',
  "Headphones": '<i class="fa-solid fa-headphones"></i>',
  
  // New Categories
  "Smart TV": '<i class="fa-solid fa-tv"></i>',
  "Gaming Console": '<i class="fa-solid fa-gamepad"></i>',
  "Camera": '<i class="fa-solid fa-camera"></i>',
  "Wireless Earbuds": '<i class="fa-solid fa-headphones-simple"></i>',
  "Power Bank": '<i class="fa-solid fa-battery-full"></i>',
  "Smart Home": '<i class="fa-solid fa-house-signal"></i>',
  "Monitor": '<i class="fa-solid fa-desktop"></i>',
  "Printer": '<i class="fa-solid fa-print"></i>'
};

// Vehicle icons mapping with Font Awesome
window.vehicleIcons = {
  "Compact Car": '<i class="fa-solid fa-car-side"></i>',
  "SUV": '<i class="fa-solid fa-truck-monster"></i>',
  "Pickup Truck": '<i class="fa-solid fa-truck-pickup"></i>',
  "Electric Car": '<i class="fa-solid fa-charging-station"></i>',
  "Electric Vehicle": '<i class="fa-solid fa-bolt"></i>',
  "Motorcycle": '<i class="fa-solid fa-motorcycle"></i>',
  "Sports Car": '<i class="fa-solid fa-car-rear"></i>',
  "Van": '<i class="fa-solid fa-van-shuttle"></i>',
  "Van/MPV": '<i class="fa-solid fa-shuttle-van"></i>',
  "Hybrid Car": '<i class="fa-solid fa-leaf"></i>',
  "Sedan": '<i class="fa-solid fa-car"></i>',
  "Hatchback": '<i class="fa-solid fa-car-side"></i>',
  "Bicycle/eBike": '<i class="fa-solid fa-bicycle"></i>'
};

// Category icons mapping
const categoryIcons = {
  electronics: '<i class="fa-solid fa-microchip"></i>',
  vehicles: '<i class="fa-solid fa-car-side"></i>'
};

// Icon color classes mapping
const iconColorClasses = {
  // Mobile & Computing
  "Android Phone": "android-green",
  "iPhone": "apple-gray",
  "iPad": "apple-silver",
  "MacBook": "apple-gold",
  "Laptop": "tech-blue",
  "Smartwatch": "watch-rose",
  "Tablet": "tablet-purple",
  "Headphones": "audio-black",
  
  // Audio Devices
  "Wireless Earbuds": "wireless-earbuds",
  
  // New Electronics
  "Smart TV": "tv-black",
  "Gaming Console": "gaming-green",
  "Camera": "camera-silver",
  "Power Bank": "power-gray",
  "Smart Home": "smart-teal",
  "Monitor": "display-blue",
  "Printer": "printer-gray",
  
  // Vehicles
  "Compact Car": "blue-icon",
  "SUV": "purple-icon",
  "Pickup Truck": "orange-icon",
  "Electric Car": "electric-vehicle",
  "Electric Vehicle": "electric-vehicle",
  "Motorcycle": "red-icon",
  "Van": "van-mpv",
  "Van/MPV": "van-mpv",
  "Hatchback": "hatchback",
  "Sedan": "sedan-blue",
  "Hybrid Car": "green-icon",
  "Sports Car": "sports-red",
  "Bicycle/eBike": "ebike"
};

// === STEP 1: Show Category Selection ===
function showMainCategories() {
  // Add a small delay to ensure data is loaded
  setTimeout(() => {
    if (!window.techData) {
      console.error('techData is not defined. Make sure techdata.js is loaded properly.');      app.innerHTML = '<div class="error">Error loading data. Please refresh the page and make sure techdata.js is loaded before techscript.js</div>';
      return;
    }

    console.log("Showing main categories");
    console.log("Available categories:", Object.keys(window.techData));
    
    app.innerHTML = "<h2>Select Category</h2>";
    const container = document.createElement("div");
    container.className = "device-container";

    Object.keys(window.techData).forEach((key) => {
      const category = window.techData[key];
      console.log("Creating category:", key, category);
      
      const card = document.createElement("div");
      card.className = "device-card";
      
      const icon = document.createElement("div");
      icon.className = "device-icon category-icon";
      icon.innerHTML = categoryIcons[key] || '<i class="fa-solid fa-cube"></i>';
      
      const name = document.createElement("div");
      name.className = "device-name";
      name.textContent = category.name;
      
      card.appendChild(icon);
      card.appendChild(name);
      card.onclick = () => showSubcategories(key);
      container.appendChild(card);
    });

    app.appendChild(container);

    // Show project description and contact sections
    document.querySelector('.project-description').style.display = 'block';
    document.querySelector('.contact-section').style.display = 'block';
  }, 100);
}

// === STEP 2: Show Items in Subcategory ===
function showSubcategories(categoryKey) {
  // Hide project description and contact sections
  document.querySelector('.project-description').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';

  const category = window.techData[categoryKey];
  app.innerHTML = `
    <button class="back-button" onclick="showMainCategories()">
      <span>⬅</span>
      <span>Back to Categories</span>
    </button>
    <h2>${category.name} > Select Device</h2>
  `;
  const container = document.createElement("div");
  container.className = "device-container";

  // Sort items alphabetically
  const sortedItems = Object.keys(category.items).sort();

  sortedItems.forEach((itemName) => {
    const card = document.createElement("div");
    card.className = "device-card";
    
    const icon = document.createElement("div");
    icon.className = `device-icon category-icon ${iconColorClasses[itemName] || ''}`;
    
    // Use vehicle icons for vehicles category, device icons for electronics
    if (categoryKey === 'vehicles') {
      icon.innerHTML = window.vehicleIcons[itemName] || '<i class="fa-solid fa-car"></i>';
    } else {
      icon.innerHTML = deviceIcons[itemName] || '<i class="fa-solid fa-mobile"></i>';
    }
    
    const name = document.createElement("div");
    name.className = "device-name";
    name.textContent = itemName;
    
    card.appendChild(icon);
    card.appendChild(name);
    card.onclick = () => showSpecs(categoryKey, itemName);
    container.appendChild(card);
  });

  app.appendChild(container);
}

// === STEP 3: Show Specs for a Selected Device ===
function showSpecs(categoryKey, itemName) {
  // Hide project description and contact sections
  document.querySelector('.project-description').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';

  const item = techData[categoryKey].items[itemName];
  const specs = item.specs;
  const useCases = item.use_cases;
  const recommendations = item.recommendations; // For Apple products

  app.innerHTML = `
    <button class="back-button" onclick="showSubcategories('${categoryKey}')">
      <span>⬅</span>
      <span>Back to Categories</span>
    </button>
    <h2>${itemName} > Specifications</h2>
  `;

  // Create specs container
  const specsContainer = document.createElement("div");
  specsContainer.className = "specs-container";

  // Sort specs alphabetically
  const sortedSpecs = Object.entries(specs).sort((a, b) => a[0].localeCompare(b[0]));

  // Show individual specs cards
  sortedSpecs.forEach(([specName, specObj]) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("div");
    title.className = "card-title";
    title.innerHTML = `<strong>${specObj.icon} ${specName}</strong>`;

    const details = document.createElement("div");
    details.className = "spec-details";
    details.innerHTML = `
      <p><strong>Description:</strong> ${specObj.description}</p>
      <p><strong>Recommendation:</strong> ${specObj.recommendation}</p>
    `;

    card.addEventListener("click", () => {
      const isExpanded = card.classList.contains("expanded");
      specsContainer.querySelectorAll(".card").forEach((otherCard) => {
        otherCard.classList.remove("expanded");
      });
      if (!isExpanded) {
        card.classList.add("expanded");
      }
    });

    card.appendChild(title);
    card.appendChild(details);
    specsContainer.appendChild(card);
  });

  app.appendChild(specsContainer);

  // Add Technical Terms Glossary
  const glossarySection = document.createElement("section");
  glossarySection.className = "glossary-section";
  
  // Get device-specific glossary terms
  const glossaryTerms = getGlossaryTerms(itemName);
  
  if (Object.keys(glossaryTerms).length > 0) {
    glossarySection.innerHTML = `
      <h3>Technical Terms Explained</h3>
      <p class="glossary-description">Understanding the technical specifications and their benefits:</p>
      <div class="glossary-grid">
        ${Object.entries(glossaryTerms)
          .sort(([termA], [termB]) => termA.localeCompare(termB))
          .map(([_, info]) => `
            <div class="glossary-item card">
              <div class="card-title">
                <strong>${info.term.split('(')[0].trim()}</strong>
                ${info.term.includes('(') ? `<span class="term-full">(${info.term.split('(')[1]}` : ''}
              </div>
              <div class="spec-details">
                <p><strong>Description:</strong> ${info.description}</p>
                <p><strong>Benefit:</strong> ${info.benefit}</p>
              </div>
            </div>
          `).join('')}
      </div>
    `;

    glossarySection.querySelectorAll('.glossary-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = item.classList.contains('expanded');
        if (isExpanded) {
          item.classList.remove('expanded');
        } else {
          item.classList.add('expanded');
        }
      });
    });

    document.addEventListener('click', (e) => {
      const expandedItems = glossarySection.querySelectorAll('.glossary-item.expanded');
      expandedItems.forEach(item => {
        if (!item.contains(e.target)) {
          item.classList.remove('expanded');
        }
      });
    });

    app.appendChild(glossarySection);
  }

  // Handle Apple product recommendations
  if (recommendations) {
    const recommendationSection = document.createElement("section");
    recommendationSection.className = "recommendation-section";
    recommendationSection.innerHTML = `
      <h3>Usage-Based Recommendations</h3>
      <p class="recommendation-description">Find the perfect model based on your needs:</p>
      <div class="recommendation-grid">
        ${recommendations.map(rec => `
          <div class="recommendation-card card">
            <div class="card-title">
              <strong>${rec.scenario}</strong>
            </div>
            <div class="key-features">
              ${rec.features.map(feature => `
                <span class="feature-tag">${feature}</span>
              `).join('')}
            </div>
            <div class="spec-details">
              <p class="explanation"><strong>Why This Choice:</strong> ${rec.explanation}</p>
              <div class="selection-guide">
                <p class="guide-title"><strong>Selection Guide:</strong></p>
                <ul class="guide-options">
                  <li><span class="option-label">Best Choice:</span> ${rec.selection_guide.primary}</li>
                  <li><span class="option-label">Alternative:</span> ${rec.selection_guide.alternative}</li>
                  <li><span class="option-label">Budget Option:</span> ${rec.selection_guide.budget}</li>
                </ul>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Add click event listeners to recommendation cards
    recommendationSection.querySelectorAll('.recommendation-card').forEach(card => {
      card.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');
        // Close all other expanded cards
        recommendationSection.querySelectorAll('.recommendation-card').forEach(otherCard => {
          otherCard.classList.remove('expanded');
        });
        // Toggle current card
        if (!isExpanded) {
          card.classList.add('expanded');
        }
      });
    });

    app.appendChild(recommendationSection);
  }

  // Handle traditional use cases table
  if (useCases && useCases.table_rows && useCases.table_headers.length > 1) {
    const useCaseSection = document.createElement("section");
    useCaseSection.className = "use-case-section";
    useCaseSection.innerHTML = `
      <h3>${useCases.title}</h3>
      <p class="use-case-description">${useCases.description}</p>
    `;

    const tableWrapper = document.createElement("div");
    tableWrapper.className = "use-case-table-wrapper";

    const table = document.createElement("table");
    table.className = "use-case-table";

    // Add headers with icons
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    useCases.table_headers.forEach(header => {
      const th = document.createElement("th");
      const headerContent = document.createElement("div");
      headerContent.className = "use-case-header";
      
      const matches = header.match(/^(.*?)\s*([^\w\s]+)\s*$/);
      if (matches) {
        const [_, text, emoji] = matches;
        headerContent.innerHTML = `
          <span class="icon">${emoji}</span>
          <span>${text.trim()}</span>
        `;
      } else {
        headerContent.textContent = header;
      }
      
      th.appendChild(headerContent);
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Add rows
    const tbody = document.createElement("tbody");
    const sortedRows = [...useCases.table_rows].sort((a, b) => 
      a.component.localeCompare(b.component)
    );

    sortedRows.forEach(row => {
      const tr = document.createElement("tr");
      
      // Component name (first column)
      const componentCell = document.createElement("td");
      componentCell.className = "component-name";
      componentCell.innerHTML = `<strong>${row.component || row.scenario}</strong>`;
      tr.appendChild(componentCell);

      // Add cells for each use case
      Object.keys(row).forEach(key => {
        if (key !== "component" && key !== "scenario") {
          const td = document.createElement("td");
          td.className = getSpecClass(row.component, key);
          td.innerHTML = formatSpec(row[key]);
          tr.appendChild(td);
        }
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableWrapper.appendChild(table);
    useCaseSection.appendChild(tableWrapper);
    app.appendChild(useCaseSection);
  }
}

// Helper function to add specification cells with enhanced styling
function addSpecCells(tr, row, cases) {
  cases.forEach(useCase => {
    const td = document.createElement("td");
    td.className = getSpecClass(row.component, useCase);
    
    // Create spec value container
    const specValue = document.createElement("div");
    specValue.className = "spec-value";
    
    // Format the specification text
    let specText = row[useCase] || '';
    
    // Add feature tags if present
    if (specText.includes('recommended')) {
      specText = specText.replace('recommended', '<span class="feature-tag recommended">Recommended</span>');
    }
    if (specText.includes('optional')) {
      specText = specText.replace('optional', '<span class="feature-tag optional">Optional</span>');
    }
    
    specValue.innerHTML = formatSpec(specText);
    td.appendChild(specValue);
    tr.appendChild(td);
  });
}

// Helper function to format spec text with appropriate styling
function formatSpec(spec) {
  if (!spec) return '';
  
  // Bold important numbers and terms
  spec = spec.replace(/(\d+(?:GB|TB|MHz|Hz|W|mAh|nits)|\+)/g, '<strong>$1</strong>');
  
  // Italicize technical terms
  spec = spec.replace(/(PCIe|NVMe|LPDDR|DDR|UFS|AMOLED|IPS|LCD|OIS|HDR|ProMotion|LiDAR|ProRes)/g, '<em>$1</em>');
  
  // Bold Apple-specific terms
  spec = spec.replace(/(M1|M2|M3|A14|A15|A16|A17|Pro|Max|Ultra|Bionic|Neural Engine|Face ID|Touch ID|True Tone|ProMotion|Liquid Retina|XDR)/g, '<strong>$1</strong>');
  
  // Add feature tags
  spec = spec.replace(/\(recommended\)/gi, '<span class="feature-tag recommended">Recommended</span>');
  spec = spec.replace(/\(optional\)/gi, '<span class="feature-tag optional">Optional</span>');
  
  return spec;
}

// Helper function to determine cell class based on component and use case
function getSpecClass(component, useCase) {
  const classes = ['spec-cell'];
  
  // Add specific classes based on importance
  if (component === 'Processor' || component === 'GPU' || component === 'RAM') {
    classes.push('highlight-spec');
  }
  
  // Add use-case specific classes
  switch(useCase) {
    case 'gaming':
      if (['Display', 'GPU', 'Cooling'].includes(component)) {
        classes.push('gaming-priority');
      }
      break;
    case 'content':
      if (['Display', 'Storage', 'RAM'].includes(component)) {
        classes.push('content-priority');
      }
      break;
    case 'programming':
      if (['RAM', 'Storage', 'Display'].includes(component)) {
        classes.push('dev-priority');
      }
      break;
    case 'business':
      if (['Battery', 'Weight', 'Special Features'].includes(component)) {
        classes.push('business-priority');
      }
      break;
  }
  
  return classes.join(' ');
}

// Helper function to get device-specific glossary terms
function getGlossaryTerms(deviceType) {
  const deviceTerms = {
    "Android Phone": {
      "UFS": {
        term: "UFS (Universal Flash Storage)",
        description: "Storage technology used in mobile devices, with different versions (2.1, 3.1, etc.).",
        benefit: "Higher versions provide faster app loading and file transfer speeds."
      },
      "AMOLED": {
        term: "AMOLED (Active Matrix Organic Light Emitting Diode)",
        description: "A premium display technology that offers vibrant colors and true blacks by turning off pixels completely.",
        benefit: "Better contrast, more vivid colors, and potential battery savings on dark content."
      },
      "OIS": {
        term: "OIS (Optical Image Stabilization)",
        description: "Camera technology that physically moves the lens to compensate for hand shake.",
        benefit: "Sharper photos and smoother videos, especially in low light."
      }
    },
    "Laptop": {
      "DDR5": {
        term: "DDR5 (5th Generation Double Data Rate)",
        description: "Latest generation of RAM technology with higher speeds and better power efficiency.",
        benefit: "Faster data transfer, better multitasking, and improved power efficiency compared to DDR4."
      },
      "PCIe Gen4": {
        term: "PCIe Gen4 (PCI Express Generation 4)",
        description: "Latest generation of the PCIe interface used by SSDs and graphics cards.",
        benefit: "Twice the bandwidth of Gen3, enabling faster storage and graphics performance."
      },
      "Thunderbolt 4": {
        term: "Thunderbolt 4",
        description: "High-speed universal port that combines USB, DisplayPort, and PCIe.",
        benefit: "Single port for charging, displays, data, and external GPUs with guaranteed performance."
      }
    },
    "Headphones": {
      "ANC": {
        term: "ANC (Active Noise Cancellation)",
        description: "Technology that reduces external noise by creating anti-noise waves.",
        benefit: "Better listening experience in noisy environments, reduced need to increase volume."
      },
      "aptX/LDAC": {
        term: "aptX/LDAC (Audio Codecs)",
        description: "Advanced Bluetooth audio codecs that allow for higher quality wireless audio transmission.",
        benefit: "Better audio quality over Bluetooth, reduced latency for videos and gaming."
      }
    },
    "Smartwatch": {
      "ECG": {
        term: "ECG (Electrocardiogram)",
        description: "Sensor that measures electrical signals from your heart.",
        benefit: "Can detect irregular heart rhythms and provide early warning of potential heart issues."
      },
      "SpO2": {
        term: "SpO2 (Blood Oxygen Saturation)",
        description: "Sensor that measures oxygen levels in your blood.",
        benefit: "Helps monitor overall health and can detect breathing issues during sleep."
      }
    },
    "Tablet": {
      "mini-LED": {
        term: "mini-LED",
        description: "Display technology using thousands of tiny LED backlights for precise brightness control.",
        benefit: "Better contrast and HDR performance than traditional LCD, approaching OLED quality."
      },
      "2K/4K": {
        term: "2K/4K Resolution",
        description: "Screen resolutions offering 2000+ or 4000+ pixels horizontally.",
        benefit: "Sharper text and images, better detail in photos and videos."
      }
    },
    "iPhone": {
      "ProMotion": {
        term: "ProMotion Technology",
        description: "Adaptive refresh rate display technology that can vary from 10Hz to 120Hz.",
        benefit: "Smoother scrolling, better battery life, and improved responsiveness."
      },
      "ProRAW": {
        term: "ProRAW",
        description: "Apple's RAW photo format that combines RAW flexibility with computational photography.",
        benefit: "Maximum editing flexibility while retaining Apple's image processing advantages."
      },
      "Photonic Engine": {
        term: "Photonic Engine",
        description: "Deep image processing technology that enhances photos earlier in the imaging process.",
        benefit: "Better low-light performance and improved detail across all cameras."
      }
    },
    "iPad": {
      "Liquid Retina XDR": {
        term: "Liquid Retina XDR Display",
        description: "Mini-LED display technology with thousands of local dimming zones.",
        benefit: "Higher contrast ratio, better HDR performance, and improved brightness."
      },
      "Center Stage": {
        term: "Center Stage",
        description: "Camera feature that automatically keeps subjects centered in frame.",
        benefit: "Better video call experience with automatic framing and subject tracking."
      }
    },
    "MacBook": {
      "Unified Memory": {
        term: "Unified Memory Architecture",
        description: "Single pool of high-bandwidth memory shared between CPU, GPU, and Neural Engine.",
        benefit: "Faster performance and more efficient memory usage than traditional architectures."
      },
      "Neural Engine": {
        term: "Neural Engine",
        description: "Dedicated processor for machine learning and AI tasks.",
        benefit: "Accelerates ML tasks and enables features like real-time text detection and photo processing."
      },
      "ProRes": {
        term: "ProRes",
        description: "Professional video codec for high-quality video recording and editing.",
        benefit: "Better quality for video editing while maintaining reasonable file sizes."
      }
    }
  };

  return deviceTerms[deviceType] || {};
}

// Make sure both the DOM and data are loaded before initializing
function init() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showMainCategories);
  } else {
    showMainCategories();
  }
}

// Add error handling styles
const style = document.createElement('style');
style.textContent = `
  .error {
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.25rem;
    text-align: center;
  }
`;
document.head.appendChild(style);

// Initialize the app
init();
