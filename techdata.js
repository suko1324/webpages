// Categories > Subcategories > Specs with description & recommendation
const techData = {
  electronics: {
    name: "Electronics",
    items: {
      "Android Phone": {
        specs: {
          Battery: {
            icon: "🔋",
            description:
              "Battery capacity (mAh) affects how long the phone lasts. But screen size, refresh rate, and optimization also matter. Example: A 6000mAh phone with poor optimization might last shorter than a 4000mAh phone with good power management.",
            recommendation:
              "Choose at least 4500mAh with good software optimization for real-life endurance. Look for phones with adaptive refresh rate and efficient processors."
          },
          Camera: {
            icon: "📷",
            description:
              "Camera quality depends on multiple factors: sensor size, aperture, image processing, and software optimization. Example: Some 64MP phones take worse photos than 12MP iPhones because of superior image processing and larger individual pixels.",
            recommendation:
              "Focus on phones with proven camera performance rather than just high megapixel counts. Look for features like OIS (Optical Image Stabilization) and night mode capabilities."
          },
          Display: {
            icon: "🖥️",
            description:
              "Display quality involves resolution, refresh rate, brightness, and panel type (LCD, OLED, AMOLED). Example: A 90Hz AMOLED display might look better than a 120Hz LCD due to better contrast and color reproduction, despite lower refresh rate.",
            recommendation:
              "Prioritize AMOLED/OLED for better colors and true blacks. Aim for at least 90Hz refresh rate and 1000+ nits peak brightness for outdoor visibility."
          },
          Processor: {
            icon: "⚙️",
            description:
              "Processor performance isn't just about clock speed or core count. It involves CPU architecture, GPU capabilities, and power efficiency. Example: A Snapdragon 7 Gen 1 might perform better than an older Snapdragon 888 while using less power.",
            recommendation:
              "For flagship performance, look for Snapdragon 8 series or equivalent. For balanced use, Snapdragon 7 series or Dimensity 8000 series offer great value."
          },
          Storage: {
            icon: "💾",
            description:
              "Storage affects both capacity and speed. Modern phones use UFS storage, with higher versions being faster. Example: UFS 3.1 storage can be twice as fast as UFS 2.1, making app installations and file transfers much quicker.",
            recommendation:
              "Get minimum 128GB with UFS 2.2 or higher. If you take lots of photos/videos or play large games, consider 256GB as apps and OS updates are getting larger."
          },
          RAM: {
            icon: "🧠",
            description:
              "RAM affects multitasking and app retention. But more RAM isn't always better - it depends on how well the OS manages it. Example: A phone with 6GB RAM and good memory management might keep more apps in memory than an 8GB phone with poor optimization.",
            recommendation:
              "Aim for at least 6GB for normal use, 8GB for heavy multitasking. Consider 12GB only if you're a power user running demanding apps simultaneously."
          },
          "Fast Charging": {
            icon: "⚡",
            description:
              "Fast charging isn't just about wattage (W). It involves charging protocols, battery technology, and heat management. Example: A 65W charger with poor heat management might be slower in real use than a well-optimized 33W system to protect battery health.",
            recommendation:
              "Look for balanced charging speeds (30-65W) with good heat management. Ensure the phone supports common charging protocols like USB-PD or QuickCharge."
          }
        },
        use_cases: {
          title: "Recommended Specifications by Use Case",
          description: "Choose the right specifications based on your needs",
          table_headers: [
            "Component",
            "General Use 📱",
            "Gaming 🎮",
            "Content Creation 📸",
            "Business 💼"
          ],
          table_rows: [
            {
              component: "Processor",
              general: "Snapdragon 6 series / Dimensity 7000",
              gaming: "Snapdragon 8 series / Dimensity 9000",
              content: "Snapdragon 8 series",
              business: "Snapdragon 7 series or better"
            },
            {
              component: "RAM",
              general: "6GB",
              gaming: "12GB LPDDR5",
              content: "8GB+",
              business: "8GB"
            },
            {
              component: "Storage",
              general: "128GB UFS 2.2",
              gaming: "256GB UFS 3.1+",
              content: "256GB UFS 3.1",
              business: "128GB UFS 3.0+"
            },
            {
              component: "Display",
              general: "FHD+ 90Hz LCD/AMOLED",
              gaming: "FHD+/QHD+ 120Hz+ AMOLED",
              content: "QHD+ AMOLED, HDR10+",
              business: "FHD+ AMOLED"
            },
            {
              component: "Battery",
              general: "4500mAh",
              gaming: "5000mAh+",
              content: "4500mAh+",
              business: "4500mAh+"
            },
            {
              component: "Camera",
              general: "48MP+ with night mode",
              gaming: "Not priority",
              content: "50MP+ OIS, Pro mode",
              business: "Good quality for scanning"
            },
            {
              component: "Special Features",
              general: "Fast charging 25W+",
              gaming: "Cooling system, Gaming triggers",
              content: "Pro camera features",
              business: "Security features, NFC"
            }
          ]
        }
      },
      "iPhone": {
        specs: {
          Processor: {
            icon: "⚙️",
            description: "Apple's custom-designed chips (A-series/Bionic) offer integrated CPU, GPU, and Neural Engine. Example: A16 Bionic has dedicated cores for performance and efficiency.",
            recommendation: "Latest A-series chip recommended for longevity. Previous generation still offers excellent performance."
          },
          Display: {
            icon: "🖥️",
            description: "Super Retina XDR OLED displays with ProMotion technology. Example: ProMotion can adapt from 10Hz to 120Hz based on content.",
            recommendation: "Pro models offer ProMotion and higher brightness. Standard models still provide excellent color accuracy and brightness."
          },
          Camera: {
            icon: "📷",
            description: "Advanced camera systems with computational photography. Example: Photonic Engine enhances low-light photos by processing uncompressed data.",
            recommendation: "Pro models offer additional camera features. Standard models still provide excellent photo and video quality."
          },
          Storage: {
            icon: "💾",
            description: "NVMe storage with no expandability. Example: 128GB might be sufficient for cloud users, but inadequate for heavy photo/video users.",
            recommendation: "Choose 256GB+ for photo/video. 128GB sufficient for light users with cloud storage."
          },
          Battery: {
            icon: "🔋",
            description: "All-day battery life varies by usage. Example: 5G and high brightness can significantly impact battery life.",
            recommendation: "Pro Max models offer longest battery life. All models support fast charging and MagSafe."
          }
        },
        recommendations: [
          {
            scenario: "Professional Photography & Videography 📸",
            features: ["Latest Pro Max model", "Most advanced camera system", "Largest screen size"],
            explanation: "Choose the current generation Pro Max model for the most advanced camera system with the largest sensor, maximum optical zoom range, and ProRAW/ProRes capabilities. Perfect for professional content creators and photographers who need the best possible mobile camera system.",
            selection_guide: {
              primary: "Latest Pro Max model",
              alternative: "Latest Pro model (if size/weight is a concern)",
              budget: "Previous generation Pro model"
            }
          },
          {
            scenario: "Gaming & Performance 🎮",
            features: ["Latest Pro model", "Pro-grade GPU", "ProMotion display"],
            explanation: "Select the current Pro model for the latest GPU technology with hardware-accelerated graphics and gaming features. The ProMotion display provides adaptive refresh rates up to 120Hz for smooth gaming, while the size offers better portability than the Pro Max.",
            selection_guide: {
              primary: "Latest Pro model",
              alternative: "Latest Pro Max (if screen size is priority)",
              budget: "Latest standard model"
            }
          },
          {
            scenario: "Everyday Use & Value 📱",
            features: ["Current standard model", "Great camera system", "Latest essential features"],
            explanation: "The standard model offers an excellent balance of features and value. You get a great camera system, strong performance, and all essential features without the premium cost of Pro models. Perfect for most users who want a reliable, feature-rich iPhone.",
            selection_guide: {
              primary: "Latest standard model",
              alternative: "Previous generation Pro model",
              budget: "Previous generation standard model"
            }
          },
          {
            scenario: "Budget-Conscious Choice 💰",
            features: ["Previous generation model", "Proven reliability", "Core features"],
            explanation: "Previous generation iPhones offer tremendous value, providing reliable performance, good camera systems, and core features at a lower price point. Ideal for users who want the iPhone experience without the latest cutting-edge features.",
            selection_guide: {
              primary: "Previous generation standard model",
              alternative: "Two generations old Pro model",
              budget: "iPhone SE (when available)"
            }
          }
        ]
      },
      "iPad": {
        specs: {
          Processor: {
            icon: "⚙️",
            description: "Apple's M-series and A-series chips power different iPad models. Example: M2 iPad Pro offers desktop-class performance, while A-series still handles most tasks efficiently.",
            recommendation: "M2 for pro workflows, A-series sufficient for general use and education."
          },
          Display: {
            icon: "🖥️",
            description: "Options include Liquid Retina XDR with mini-LED or standard Liquid Retina. Example: XDR display offers 1600 nits peak brightness and better HDR.",
            recommendation: "Pro models with XDR for content creation. Standard Liquid Retina excellent for general use."
          },
          Storage: {
            icon: "💾",
            description: "Non-expandable storage ranges from 64GB to 2TB. Example: 256GB balances cost and capacity for most users.",
            recommendation: "128GB+ for general use, 256GB+ for media/files, 512GB+ for pro apps."
          },
          Battery: {
            icon: "🔋",
            description: "Up to 10 hours of battery life varies by usage. Example: Video editing and gaming reduce battery life significantly.",
            recommendation: "All models offer good battery life. USB-C charging standard across lineup."
          },
          Connectivity: {
            icon: "📶",
            description: "Options include WiFi 6E and 5G cellular. Example: 5G enables fast mobile connectivity but adds to cost.",
            recommendation: "WiFi-only sufficient for most. 5G valuable for mobile work."
          }
        },
        recommendations: [
          {
            scenario: "Professional Creative Work 🎨",
            features: ["Latest Pro model (12.9-inch)", "Mini-LED/XDR display", "Latest M-series chip"],
            explanation: "Choose the current generation 12.9-inch iPad Pro for the most advanced display technology and desktop-class performance. Perfect for digital artists, designers, and professional creatives who need maximum power and screen real estate.",
            selection_guide: {
              primary: "Latest 12.9-inch Pro model",
              alternative: "Latest 11-inch Pro model",
              budget: "Latest Air model"
            }
          },
          {
            scenario: "Productivity & Portability 💼",
            features: ["Latest Air model", "Pro features", "Lightweight design"],
            explanation: "The iPad Air line offers Pro-level features in a lighter package with the latest chip architecture. Great for professionals who need power and Apple Pencil 2 support but prefer enhanced portability.",
            selection_guide: {
              primary: "Latest Air model",
              alternative: "Latest 11-inch Pro model",
              budget: "Latest standard iPad"
            }
          },
          {
            scenario: "Entertainment & General Use 🎬",
            features: ["Current standard iPad", "Modern design", "Essential features"],
            explanation: "The standard iPad offers an excellent balance of features for media consumption, casual gaming, and everyday tasks. Modern design with good performance at a more accessible price point.",
            selection_guide: {
              primary: "Latest standard iPad",
              alternative: "Previous generation Air",
              budget: "Previous generation standard iPad"
            }
          },
          {
            scenario: "Education & Budget 📚",
            features: ["Base iPad model", "Apple Pencil support", "Essential features"],
            explanation: "The most affordable iPad option still provides excellent features for students and basic tasks. Compatible with Apple Pencil for note-taking and basic creative work.",
            selection_guide: {
              primary: "Base model iPad",
              alternative: "Previous generation standard iPad",
              budget: "Refurbished older model"
            }
          }
        ]
      },
      "Laptop": {
        specs: {
          Processor: {
            icon: "⚡",
            description: 
              "CPU performance depends on cores, threads, cache size, and thermal design power (TDP). Example: A 28W Core i5 13th gen might outperform a 15W Core i7 12th gen in sustained workloads due to better power limits and cooling.",
            recommendation:
              "For general use: Intel Core i5/Ryzen 5 (13th/7000 series). For heavy workloads: Core i7/Ryzen 7 or better. Consider 'P' series Intel or 'HS' series AMD for better performance."
          },
          RAM: {
            icon: "🧠",
            description:
              "RAM speed and configuration affect performance significantly. Dual-channel (2 sticks) performs better than single-channel. Example: 16GB dual-channel DDR4-3200 often outperforms 32GB single-channel DDR4-2400 in real-world tasks.",
            recommendation:
              "Get 16GB minimum, preferably in dual-channel. For content creation or VMs, consider 32GB. DDR5 offers future-proofing but DDR4 is still cost-effective."
          },
          Storage: {
            icon: "💾",
            description:
              "SSD type and interface greatly impact system responsiveness. NVMe SSDs use PCIe lanes, with Gen4 being faster than Gen3. Example: A Gen4 NVMe SSD can transfer large files 2-3x faster than a SATA SSD, crucial for video editing.",
            recommendation:
              "Choose NVMe SSD (minimum 512GB). Gen4 for content creation, Gen3 for general use. Avoid laptops with only SATA SSDs unless budget is strict."
          },
          Display: {
            icon: "🖥️",
            description:
              "Display quality involves resolution, color accuracy, refresh rate, and panel type. Example: A 300-nit IPS panel might be better for color work than a brighter 400-nit TN panel due to better color accuracy and viewing angles.",
            recommendation:
              "Minimum 1080p IPS with 300 nits brightness. Consider 1440p/4K for content creation. 90Hz+ refresh rate for smoother experience. Look for 100% sRGB coverage for color accuracy."
          },
          Battery: {
            icon: "🔋",
            description:
              "Battery life depends on capacity (Wh), power optimization, and screen efficiency. Example: A 65Wh battery with efficient CPU/GPU might last longer than an 85Wh battery with power-hungry components.",
            recommendation:
              "Look for 65Wh+ batteries. Check real-world battery tests rather than just capacity. Consider USB-C charging for better compatibility."
          },
          GPU: {
            icon: "🎮",
            description:
              "GPU importance varies by use case. Integrated GPUs have improved significantly. Example: Modern integrated GPUs like Iris Xe or RDNA2 can handle light gaming better than older dedicated GPUs while using less power.",
            recommendation:
              "For general use: Modern integrated GPU is sufficient. For gaming/3D work: RTX 3060 or better. Consider power limits (TGP) as same GPU can perform differently."
          },
          Cooling: {
            icon: "❄️",
            description:
              "Thermal design affects sustained performance and longevity. Better cooling allows CPU/GPU to maintain higher speeds. Example: A well-cooled RTX 3060 laptop might outperform a poorly cooled RTX 3070 in long gaming sessions.",
            recommendation:
              "Look for dual fans, multiple heat pipes. Check reviews for thermal performance. Consider slightly thicker laptops for better cooling."
          },
          Build_Quality: {
            icon: "🛠️",
            description:
              "Materials and construction affect durability and premium feel. Example: A plastic laptop with internal metal frame might be more durable than an all-aluminum laptop with poor structural design.",
            recommendation:
              "Look for metal chassis or quality plastic with reinforcement. Check hinge design and port durability. Consider MIL-STD testing for durability."
          },
          Ports: {
            icon: "🔌",
            description:
              "Port selection affects connectivity and future compatibility. Thunderbolt/USB4 offers expandability. Example: A single Thunderbolt 4 port can drive multiple 4K displays, connect eGPUs, and charge the laptop simultaneously.",
            recommendation:
              "Prioritize Thunderbolt/USB4 for future-proofing. Look for HDMI 2.0/2.1 for external displays. Consider USB-A ports for legacy devices."
          }
        },
        use_cases: {
          title: "Recommended Specifications by Use Case",
          description: "Choose the right specifications based on your needs",
          table_headers: [
            "Component",
            "General Use 💻",
            "Programming 👨‍💻",
            "Gaming 🎮",
            "Content Creation 🎨",
            "Business 💼"
          ],
          table_rows: [
            {
              component: "Processor",
              general: "Core i5/Ryzen 5 (Latest gen)",
              programming: "Core i7/Ryzen 7 (Latest gen)",
              gaming: "Core i7-H/Ryzen 7-H series",
              content: "Core i7/i9 or Ryzen 9",
              business: "Core i5/i7 or Ryzen 5/7"
            },
            {
              component: "RAM",
              general: "16GB DDR4/DDR5",
              programming: "32GB Dual-channel",
              gaming: "16GB+ DDR5",
              content: "32GB+ DDR5",
              business: "16GB DDR4/DDR5"
            },
            {
              component: "Storage",
              general: "512GB NVMe",
              programming: "1TB NVMe",
              gaming: "1TB PCIe Gen4",
              content: "2TB PCIe Gen4",
              business: "512GB NVMe"
            },
            {
              component: "Display",
              general: "14-15\" 1080p IPS",
              programming: "15\" 1440p+ IPS",
              gaming: "15-17\" 1440p 165Hz+",
              content: "15-17\" 4K Adobe RGB",
              business: "14\" 1080p+ Privacy"
            },
            {
              component: "GPU",
              general: "Integrated Graphics",
              programming: "Integrated/RTX 3050",
              gaming: "RTX 3060 (95W+)",
              content: "RTX 3070 or better",
              business: "Integrated Graphics"
            },
            {
              component: "Battery",
              general: "50Wh+",
              programming: "70Wh+",
              gaming: "80Wh+",
              content: "90Wh+",
              business: "60Wh+"
            },
            {
              component: "Weight",
              general: "Under 1.8kg",
              programming: "Under 2kg",
              gaming: "Any",
              content: "Any",
              business: "Under 1.5kg"
            },
            {
              component: "Special Features",
              general: "USB-C charging",
              programming: "Good keyboard, TB4",
              gaming: "MUX Switch, Good cooling",
              content: "Color calibration, SD card",
              business: "Fingerprint, IR camera"
            }
          ]
        }
      },
      "MacBook": {
        specs: {
          Processor: {
            icon: "⚙️",
            description: "Apple Silicon (M-series) offers integrated CPU, GPU, and Neural Engine. Example: M2 Pro/Max offer significantly more CPU/GPU cores than base M2.",
            recommendation: "M2 for general use, M2 Pro for demanding tasks, M2 Max/Ultra for pro workflows."
          },
          Memory: {
            icon: "🧠",
            description: "Unified memory architecture shared between CPU and GPU. Example: 8GB sufficient for basic tasks, but 16GB+ recommended for future-proofing.",
            recommendation: "16GB minimum recommended. 32GB+ for pro apps and heavy multitasking."
          },
          Storage: {
            icon: "💾",
            description: "High-speed SSD storage with no user upgradeability. Example: 512GB balances cost and capacity for most users.",
            recommendation: "512GB minimum recommended. 1TB+ for media work or large projects."
          },
          Display: {
            icon: "🖥️",
            description: "Liquid Retina XDR available on Pro models, standard Retina on Air. Example: XDR offers better HDR and higher brightness.",
            recommendation: "Any display excellent for general use. Pro XDR for HDR content creation."
          },
          Battery: {
            icon: "🔋",
            description: "Up to 22 hours battery life varies by model and usage. Example: Heavy workloads can reduce battery life by 50% or more.",
            recommendation: "All models offer excellent battery life. Air slightly better for portability."
          }
        },
        recommendations: [
          {
            scenario: "Professional Video/Photo Editing 🎥",
            features: ["Latest Pro 16-inch", "Max/Ultra chip option", "Largest screen"],
            explanation: "Choose the current generation 16-inch MacBook Pro with the highest-end chip option for maximum performance in demanding professional workloads. Best cooling system and largest screen make it ideal for intensive tasks.",
            selection_guide: {
              primary: "Latest 16-inch Pro (Max/Ultra chip)",
              alternative: "Latest 14-inch Pro (Max chip)",
              budget: "Previous generation 16-inch Pro"
            }
          },
          {
            scenario: "Development & Creative Work 💻",
            features: ["Latest Pro 14-inch", "Pro/Max chip", "Portable power"],
            explanation: "The 14-inch Pro model offers an excellent balance of power and portability. Perfect for developers and creators who need professional performance but value mobility.",
            selection_guide: {
              primary: "Latest 14-inch Pro",
              alternative: "Latest 16-inch Pro (if screen size priority)",
              budget: "Latest Air 15-inch"
            }
          },
          {
            scenario: "Portable Productivity ✈️",
            features: ["Latest Air (15/13-inch)", "Base/Mid chip", "Ultra-portable"],
            explanation: "The MacBook Air line provides excellent performance for everyday tasks in an ultra-portable design. Choose between screen sizes based on your preference for portability vs. workspace.",
            selection_guide: {
              primary: "Latest Air model",
              alternative: "Previous generation Pro",
              budget: "Previous generation Air"
            }
          },
          {
            scenario: "Student & Everyday Use 📚",
            features: ["Air 13-inch", "Base chip", "Most portable"],
            explanation: "The 13-inch Air offers the perfect balance of performance, portability, and value. Ideal for students, writers, and general use with excellent battery life and sufficient power for most tasks.",
            selection_guide: {
              primary: "Latest 13-inch Air",
              alternative: "Previous generation Air",
              budget: "Base model Air"
            }
          }
        ]
      },
      "Smartwatch": {
        specs: {
          Display: {
            icon: "🖥️",
            description: "Screen type and size affect visibility and battery life. Example: AMOLED displays offer better outdoor visibility and true blacks compared to LCD.",
            recommendation: "AMOLED display with 450+ nits brightness. Always-on display support recommended."
          },
          Battery: {
            icon: "🔋",
            description: "Battery life varies significantly with features used. Example: GPS tracking can reduce 2-week battery life to 12 hours.",
            recommendation: "Minimum 2-day battery life with normal use. Consider longer if using sleep tracking."
          },
          Health_Sensors: {
            icon: "❤️",
            description: "Sensors determine health tracking capabilities. Example: Advanced watches can measure ECG and blood oxygen, while basic ones only track heart rate.",
            recommendation: "Essential: Heart rate, SpO2. Premium features: ECG, temperature, irregular rhythm notifications."
          },
          Water_Resistance: {
            icon: "💧",
            description: "Water resistance rating determines usability in wet conditions. Example: 5ATM allows swimming, while IP67 only handles splashes.",
            recommendation: "Minimum IP68/5ATM for swimming. 10ATM for diving."
          },
          GPS: {
            icon: "📍",
            description: "GPS accuracy and battery impact vary by technology. Example: Dual-frequency GPS offers better accuracy but uses more battery.",
            recommendation: "Multi-band GPS for sports tracking. Basic GPS sufficient for casual use."
          }
        },
        use_cases: {
          title: "Recommended Specifications by Use Case",
          description: "Choose the right smartwatch based on your needs",
          table_headers: [
            "Component",
            "Fitness 🏃",
            "Health Monitoring ❤️",
            "Daily Use 📱",
            "Sports 🎽"
          ],
          table_rows: [
            {
              component: "Sensors",
              fitness: "HR, GPS, Accelerometer",
              health: "ECG, SpO2, Temperature",
              daily: "HR, Steps, Sleep",
              sports: "Multi-sport, Advanced GPS"
            },
            {
              component: "Battery",
              fitness: "5+ days",
              health: "2+ days",
              daily: "7+ days",
              sports: "GPS: 12+ hours"
            },
            {
              component: "Display",
              fitness: "Always-on, High brightness",
              health: "AMOLED",
              daily: "AMOLED, Always-on",
              sports: "High brightness, Durable"
            },
            {
              component: "Durability",
              fitness: "5ATM",
              health: "IP68",
              daily: "IP68",
              sports: "10ATM, MIL-STD"
            }
          ]
        }
      },
      "Headphones": {
        specs: {
          Sound_Quality: {
            icon: "🎵",
            description: "Driver size and tuning affect sound quality. Example: 40mm drivers might offer better bass response than 30mm drivers, but tuning matters more than size.",
            recommendation: "Look for balanced sound signature. Consider models with EQ customization."
          },
          ANC: {
            icon: "🔇",
            description: "Active Noise Cancellation effectiveness varies by technology. Example: Adaptive ANC can adjust to environment, while basic ANC is fixed.",
            recommendation: "For commuting/travel: Premium ANC. For office: Standard ANC sufficient."
          },
          Battery: {
            icon: "🔋",
            description: "Battery life varies with features used. Example: ANC and high volume can reduce 30-hour battery life to 20 hours.",
            recommendation: "TWS: 6+ hours per charge, 24+ with case. Over-ear: 20+ hours with ANC."
          },
          Connectivity: {
            icon: "📶",
            description: "Bluetooth codecs affect audio quality and latency. Example: aptX HD/LDAC offer better quality than standard SBC.",
            recommendation: "Minimum: AAC for Apple, aptX for Android. Premium: LDAC/aptX Adaptive for hi-res."
          },
          Comfort: {
            icon: "👂",
            description: "Design and materials affect long-term comfort. Example: Memory foam ear pads provide better comfort than basic foam.",
            recommendation: "Over-ear: Replaceable ear pads, adjustable headband. TWS: Multiple ear tip sizes."
          }
        },
        use_cases: {
          title: "Recommended Specifications by Use Case",
          description: "Choose the right headphones based on your needs",
          table_headers: [
            "Component",
            "Music 🎵",
            "Gaming 🎮",
            "Travel ✈️",
            "Sports 🏃"
          ],
          table_rows: [
            {
              component: "Audio",
              music: "Hi-Res, Premium drivers",
              gaming: "Low latency, Virtual surround",
              travel: "Good ANC, Balanced sound",
              sports: "Bass-focused, Water resistant"
            },
            {
              component: "Battery",
              music: "30h+",
              gaming: "15h+ wireless",
              travel: "20h+ with ANC",
              sports: "6h+ per charge"
            },
            {
              component: "Features",
              music: "LDAC/aptX HD",
              gaming: "Low latency codec",
              travel: "Premium ANC, Ambient",
              sports: "IP57+, Secure fit"
            },
            {
              component: "Design",
              music: "Over-ear, Premium build",
              gaming: "Over-ear, Mic quality",
              travel: "Foldable, Carrying case",
              sports: "TWS, Lightweight"
            }
          ]
        }
      },
      "Smart TV": {
        specs: {
          Display: {
            icon: "📺",
            description: "Display technology (OLED, QLED, LED) affects picture quality, contrast, and color accuracy. Example: OLED provides perfect blacks and infinite contrast but may be susceptible to burn-in, while QLED offers high brightness and no burn-in risk.",
            recommendation: "Choose OLED for dark room viewing and perfect blacks, QLED for bright rooms. Look for HDR10+ or Dolby Vision support. Minimum 4K resolution recommended."
          },
          "Smart Platform": {
            icon: "🔧",
            description: "The operating system (WebOS, Android TV, Tizen) determines app availability, user interface, and smart features. Example: Android TV offers more apps but might be slower than WebOS or Tizen.",
            recommendation: "Choose based on ecosystem compatibility. Android TV for flexibility, WebOS/Tizen for smooth performance. Ensure popular streaming apps are supported."
          },
          "Gaming Features": {
            icon: "🎮",
            description: "Gaming features like HDMI 2.1, VRR, ALLM affect gaming performance. Example: HDMI 2.1 enables 4K 120Hz gaming on next-gen consoles, while VRR prevents screen tearing.",
            recommendation: "For gaming, prioritize HDMI 2.1, VRR, ALLM support. Look for low input lag (under 20ms) and Game Mode features."
          },
          Sound: {
            icon: "🔊",
            description: "Built-in audio quality varies significantly. Features like Dolby Atmos and speaker configuration matter. Example: A 2.1 channel system with dedicated woofer outperforms basic stereo speakers.",
            recommendation: "Consider a soundbar for better audio. Look for TVs with good built-in speakers (30W+) if soundbar isn't planned. Dolby Atmos support is a plus."
          },
          Connectivity: {
            icon: "📡",
            description: "Ports and wireless features affect device compatibility and future-proofing. Example: Multiple HDMI 2.1 ports allow connecting gaming console, streaming device, and soundbar simultaneously.",
            recommendation: "Minimum 4 HDMI ports (2+ HDMI 2.1). Look for eARC support for audio. Wi-Fi 6 preferred for stable streaming."
          }
        },
        use_cases: {
          title: "Recommended Specifications by Use Case",
          description: "Choose the right specifications based on your needs",
          table_headers: [
            "Component",
            "General Viewing 📺",
            "Gaming 🎮",
            "Home Theater 🎬",
            "Sports Watching 🏃"
          ],
          table_rows: [
            {
              component: "Display Type",
              general: "LED/QLED",
              gaming: "QLED/Mini-LED",
              content: "OLED",
              sports: "QLED (High Brightness)"
            },
            {
              component: "Resolution",
              general: "4K",
              gaming: "4K 120Hz",
              content: "4K",
              sports: "4K 120Hz"
            },
            {
              component: "HDR",
              general: "HDR10",
              gaming: "HDR10+/Dolby Vision",
              content: "Dolby Vision",
              sports: "HDR10+"
            },
            {
              component: "Sound",
              general: "Built-in",
              gaming: "Gaming Soundbar",
              content: "Dolby Atmos System",
              sports: "2.1 Channel minimum"
            },
            {
              component: "Smart Features",
              general: "Basic Smart TV",
              gaming: "Gaming Features",
              content: "Advanced Processing",
              sports: "Motion Handling"
            }
          ]
        }
      },
      "Gaming Console": {
        specs: {
          Performance: {
            icon: "⚡",
            description: "Console performance affects graphics quality, frame rates, and loading times. Example: PS5/Xbox Series X can run games at 4K 60fps or 1440p 120fps, while Switch focuses on 1080p portable gaming.",
            recommendation: "Choose based on desired resolution and frame rate. PS5/Xbox Series X for 4K gaming, Series S for 1440p, Switch for portability."
          },
          Storage: {
            icon: "💾",
            description: "Storage capacity and type affect game installation and loading times. Example: PS5's custom SSD loads games significantly faster than traditional HDDs, but space is limited.",
            recommendation: "Get largest capacity within budget. Consider expandable storage options. SSD-based consoles (PS5, Xbox) offer better loading times."
          },
          "Game Library": {
            icon: "🎲",
            description: "Available games and exclusives vary by platform. Example: PlayStation has more story-driven exclusives, while Nintendo focuses on family-friendly titles.",
            recommendation: "Choose based on preferred game genres and exclusives. Consider backward compatibility needs."
          },
          Features: {
            icon: "🎯",
            description: "Special features like VR support, cloud gaming, or portable play affect versatility. Example: PS5 supports VR, while Switch offers portable gaming.",
            recommendation: "Consider unique features: PS5 for VR, Xbox for Game Pass, Switch for portability."
          }
        },
        use_cases: {
          title: "Recommended Console by Use Case",
          description: "Choose the right console based on your gaming needs",
          table_headers: [
            "Feature",
            "Casual Gaming 🎮",
            "Competitive Gaming 🏆",
            "Family Gaming 👨‍👩‍👧‍👦",
            "4K Gaming 📺"
          ],
          table_rows: [
            {
              component: "Best Console",
              general: "Xbox Series S",
              gaming: "PS5/Xbox Series X",
              content: "Nintendo Switch",
              sports: "PS5/Xbox Series X"
            },
            {
              component: "Storage",
              general: "512GB",
              gaming: "1TB+",
              content: "256GB",
              sports: "1TB+"
            },
            {
              component: "Online Service",
              general: "Basic",
              gaming: "Premium",
              content: "Family Plan",
              sports: "Premium"
            },
            {
              component: "Accessories",
              general: "Extra Controller",
              gaming: "Pro Controller",
              content: "Multiple Controllers",
              sports: "4K TV"
            }
          ]
        }
      },
      "Camera": {
        specs: {
          Sensor: {
            icon: "📷",
            description: "Sensor size affects image quality, low-light performance, and depth of field. Example: Full-frame sensors offer better low-light performance than APS-C, but cameras are larger and more expensive.",
            recommendation: "Full-frame for professional use, APS-C for enthusiasts, M4/3 for portability. Consider crop factor impact on lens focal lengths."
          },
          Resolution: {
            icon: "🔍",
            description: "Megapixels affect detail capture and cropping flexibility. Example: 24MP is sufficient for most uses, while 45MP+ allows significant cropping and large prints.",
            recommendation: "20-30MP sufficient for most uses. Higher resolution needed for large prints or heavy cropping."
          },
          "Autofocus": {
            icon: "🎯",
            description: "AF system affects focus speed and tracking capability. Example: Advanced eye-AF systems can track subjects across the frame, crucial for portraits and action.",
            recommendation: "Look for eye/face AF for portraits. Dual Pixel AF or phase-detect AF preferred over contrast-detect."
          },
          "Video Features": {
            icon: "🎥",
            description: "Video capabilities include resolution, frame rates, and codecs. Example: 4K 60fps with 10-bit color offers more flexibility in post-processing than 8-bit.",
            recommendation: "4K 30fps minimum for general use. Consider 10-bit recording and higher frame rates for professional work."
          },
          Stabilization: {
            icon: "🔄",
            description: "Image stabilization helps reduce blur from camera shake. Example: In-body stabilization (IBIS) works with any lens, while lens stabilization can be more effective for telephoto.",
            recommendation: "Prioritize IBIS for versatility. 5-axis preferred. Lens stabilization beneficial for telephoto work."
          }
        },
        use_cases: {
          title: "Recommended Specifications by Use Case",
          description: "Choose the right camera based on your photography needs",
          table_headers: [
            "Component",
            "General Photography 📸",
            "Professional Work 🎯",
            "Video Creation 🎥",
            "Sports/Action 🏃"
          ],
          table_rows: [
            {
              component: "Sensor",
              general: "APS-C",
              gaming: "Full Frame",
              content: "Full Frame",
              sports: "Stacked CMOS"
            },
            {
              component: "Resolution",
              general: "24MP",
              gaming: "45MP+",
              content: "24MP",
              sports: "24MP"
            },
            {
              component: "AF System",
              general: "Basic Eye-AF",
              gaming: "Advanced AF",
              content: "Eye-AF",
              sports: "Fast Tracking"
            },
            {
              component: "Video",
              general: "4K 30p",
              gaming: "4K 60p",
              content: "4K 60p 10-bit",
              sports: "4K 120p"
            }
          ]
        }
      },
      "Wireless Earbuds": {
        specs: {
          "Sound Quality": {
            icon: "🎵",
            description: "Audio quality depends on driver size, tuning, and codec support. Example: Larger drivers generally produce better bass, while balanced armature drivers excel at detail.",
            recommendation: "Look for high-quality codecs (aptX, LDAC). Consider hybrid drivers for better overall sound. Check reviews for sound signature preferences."
          },
          "ANC": {
            icon: "🔇",
            description: "Active Noise Cancellation effectiveness varies by implementation. Example: Some buds offer adjustable ANC levels and transparency mode for situational awareness.",
            recommendation: "Prioritize ANC for commuting/travel. Look for adjustable levels and good transparency mode. Consider ear tip seal quality."
          },
          Battery: {
            icon: "🔋",
            description: "Battery life includes both earbud and case capacity. Example: 5-7 hours per charge typical, with case providing 2-4 additional charges.",
            recommendation: "Minimum 5 hours per charge, 20+ hours with case. Fast charging support beneficial."
          },
          Features: {
            icon: "⚙️",
            description: "Additional features like water resistance, touch controls, and multi-device support enhance usability. Example: IPX4 sufficient for workouts, while IPX7 allows submersion.",
            recommendation: "IPX4+ for workout use. Look for customizable controls and multi-point connectivity."
          }
        },
        use_cases: {
          title: "Recommended Features by Use Case",
          description: "Choose the right earbuds based on your needs",
          table_headers: [
            "Feature",
            "Daily Use 🎧",
            "Sports/Workout 🏃",
            "Travel ✈️",
            "Professional 💼"
          ],
          table_rows: [
            {
              component: "Priority",
              general: "Comfort",
              gaming: "Stability",
              content: "ANC",
              sports: "Call Quality"
            },
            {
              component: "Battery",
              general: "5h+",
              gaming: "7h+",
              content: "8h+",
              sports: "6h+"
            },
            {
              component: "Water Resistance",
              general: "IPX4",
              gaming: "IPX7",
              content: "IPX4",
              sports: "IPX4"
            },
            {
              component: "Features",
              general: "Basic",
              gaming: "Sport Features",
              content: "Premium ANC",
              sports: "Multi-device"
            }
          ]
        }
      },
      "Power Bank": {
        specs: {
          Capacity: {
            icon: "🔋",
            description: "Battery capacity in mAh determines how many times devices can be charged. Example: A 20000mAh power bank can charge most phones 4-5 times, while 10000mAh offers 2-3 charges.",
            recommendation: "10000mAh for portability, 20000mAh+ for longer trips. Consider device battery sizes when choosing capacity."
          },
          "Charging Speed": {
            icon: "⚡",
            description: "Input/output charging speeds affect how quickly devices charge and recharge. Example: 65W charging can fast-charge laptops, while 18W is sufficient for basic phone charging.",
            recommendation: "Minimum 18W USB-PD for phones. 45W+ for laptop charging. Look for multiple ports with different power ratings."
          },
          "Port Selection": {
            icon: "🔌",
            description: "Port types and quantity affect device compatibility. Example: USB-C PD ports offer fastest charging for modern devices, while USB-A supports older devices.",
            recommendation: "Mix of USB-C and USB-A ports. Look for USB-PD and QC support. Consider wireless charging if needed."
          },
          Features: {
            icon: "⚙️",
            description: "Additional features like displays, wireless charging, or rugged design enhance usability. Example: LED displays show exact charge levels, while pass-through charging allows charging while using.",
            recommendation: "Digital display helpful. Consider pass-through charging and wireless charging. Look for safety features."
          }
        },
        use_cases: {
          title: "Recommended Features by Use Case",
          description: "Choose the right power bank based on your needs",
          table_headers: [
            "Feature",
            "Daily Commute 🚶",
            "Travel ✈️",
            "Emergency 🚨",
            "Professional 💼"
          ],
          table_rows: [
            {
              component: "Capacity",
              general: "10000mAh",
              gaming: "20000mAh+",
              content: "30000mAh",
              sports: "20000mAh"
            },
            {
              component: "Charging Speed",
              general: "18W",
              gaming: "45W+",
              content: "65W+",
              sports: "45W+"
            },
            {
              component: "Ports",
              general: "2 ports",
              gaming: "3+ ports",
              content: "4+ ports",
              sports: "3+ ports"
            },
            {
              component: "Features",
              general: "Basic",
              gaming: "Display",
              content: "Rugged Design",
              sports: "Pass-through"
            }
          ]
        }
      },
      "Smart Home": {
        specs: {
          "Connectivity": {
            icon: "📡",
            description: "Connection protocols affect compatibility and reliability. Example: Wi-Fi offers direct connection but uses more power, while Zigbee/Z-Wave need a hub but are more efficient.",
            recommendation: "Wi-Fi for standalone devices. Zigbee/Z-Wave for complex systems. Consider Matter support for future compatibility."
          },
          "Integration": {
            icon: "🔗",
            description: "Ecosystem compatibility determines how devices work together. Example: Alexa-compatible devices work with Amazon's ecosystem, while HomeKit offers better privacy but fewer options.",
            recommendation: "Choose based on existing ecosystem. Consider multi-platform support. Look for local control options."
          },
          "Power": {
            icon: "⚡",
            description: "Power source affects installation and maintenance. Example: Battery-powered sensors are easy to install but need replacement, while wired devices are maintenance-free.",
            recommendation: "Wired for critical devices. Battery for sensors. Consider backup power for security devices."
          },
          "Features": {
            icon: "⚙️",
            description: "Smart features and automation capabilities vary by device. Example: Advanced motion sensors can distinguish people from pets, while basic ones just detect movement.",
            recommendation: "Look for automation support. Consider AI features for better accuracy. Check for regular firmware updates."
          }
        },
        use_cases: {
          title: "Recommended Features by Use Case",
          description: "Choose the right smart home devices based on your needs",
          table_headers: [
            "Feature",
            "Basic Home 🏠",
            "Security 🔒",
            "Automation 🤖",
            "Energy Saving 💡"
          ],
          table_rows: [
            {
              component: "Connectivity",
              general: "Wi-Fi",
              gaming: "Zigbee/Z-Wave",
              content: "Matter",
              sports: "Wi-Fi"
            },
            {
              component: "Integration",
              general: "Single Platform",
              gaming: "Multi-Platform",
              content: "Hub-based",
              sports: "Energy Platform"
            },
            {
              component: "Power",
              general: "Mixed",
              gaming: "Wired",
              content: "Battery",
              sports: "Wired"
            },
            {
              component: "Features",
              general: "Basic",
              gaming: "Advanced",
              content: "AI-powered",
              sports: "Energy Monitoring"
            }
          ]
        }
      },
      "Monitor": {
        specs: {
          "Panel": {
            icon: "🖥️",
            description: "Panel type affects image quality and response time. Example: IPS offers better colors but slower response, while TN provides fastest response but worse viewing angles.",
            recommendation: "IPS for color work, VA for contrast, TN for competitive gaming. Consider OLED for best overall quality."
          },
          "Resolution": {
            icon: "🔍",
            description: "Resolution determines image sharpness and workspace size. Example: 4K offers more detail and screen space but requires more GPU power for gaming.",
            recommendation: "1440p minimum for 27\"+. 4K for content creation. Consider pixel density for your viewing distance."
          },
          "Refresh Rate": {
            icon: "🔄",
            description: "Refresh rate affects motion smoothness. Example: 144Hz provides smoother motion than 60Hz, while 240Hz offers diminishing but noticeable improvements.",
            recommendation: "144Hz minimum for gaming. 60Hz sufficient for office work. Consider adaptive sync technology."
          },
          "Features": {
            icon: "⚙️",
            description: "Additional features like HDR, USB hub, or speakers enhance functionality. Example: True HDR 600+ provides better HDR experience than basic HDR 400.",
            recommendation: "USB-C with power delivery for laptops. Consider HDR capabilities. Look for ergonomic stand."
          }
        },
        use_cases: {
          title: "Recommended Features by Use Case",
          description: "Choose the right monitor based on your needs",
          table_headers: [
            "Feature",
            "Office Work 💼",
            "Gaming 🎮",
            "Content Creation 🎨",
            "Programming 👨‍💻"
          ],
          table_rows: [
            {
              component: "Panel",
              general: "IPS",
              gaming: "TN/IPS",
              content: "IPS/OLED",
              sports: "IPS"
            },
            {
              component: "Resolution",
              general: "1440p",
              gaming: "1440p 144Hz+",
              content: "4K",
              sports: "1440p+"
            },
            {
              component: "Size",
              general: "27\"",
              gaming: "27-32\"",
              content: "32\"+",
              sports: "27-34\""
            },
            {
              component: "Features",
              general: "USB-C",
              gaming: "Adaptive Sync",
              content: "Color Accuracy",
              sports: "Multiple Inputs"
            }
          ]
        }
      },
      "Printer": {
        specs: {
          "Technology": {
            icon: "🖨️",
            description: "Printer type affects cost, quality, and use case. Example: Laser printers cost more upfront but have lower per-page costs for text, while inkjet excels at photos.",
            recommendation: "Laser for office/text. Inkjet for photos. Consider tank printers for high volume."
          },
          "Print Speed": {
            icon: "⚡",
            description: "Pages per minute (PPM) affects productivity. Example: 20ppm is sufficient for home use, while offices might need 40ppm+ for shared printers.",
            recommendation: "15+ ppm for home. 30+ ppm for office. Consider duty cycle for heavy use."
          },
          "Resolution": {
            icon: "🔍",
            description: "Print resolution affects detail level. Example: 4800x1200 dpi inkjet produces better photos than 600x600 dpi laser, but laser text is crisper.",
            recommendation: "600 dpi+ for text. 4800+ dpi for photos. Consider actual vs interpolated resolution."
          },
          "Features": {
            icon: "⚙️",
            description: "Additional features like scanning, wireless printing, or auto-duplex enhance functionality. Example: Auto-duplex saves paper, while ADF speeds up multi-page scanning.",
            recommendation: "Wireless essential. Auto-duplex recommended. Consider mobile printing support."
          }
        },
        use_cases: {
          title: "Recommended Features by Use Case",
          description: "Choose the right printer based on your needs",
          table_headers: [
            "Feature",
            "Home Use 🏠",
            "Photo Printing 📸",
            "Home Office 💼",
            "Small Business 🏢"
          ],
          table_rows: [
            {
              component: "Type",
              general: "Inkjet",
              gaming: "Photo Inkjet",
              content: "Laser",
              sports: "Laser"
            },
            {
              component: "Speed",
              general: "15 ppm",
              gaming: "10 ppm",
              content: "25 ppm",
              sports: "35 ppm"
            },
            {
              component: "Features",
              general: "Basic All-in-One",
              gaming: "Photo Tray",
              content: "Duplex ADF",
              sports: "Network Features"
            },
            {
              component: "Cost Focus",
              general: "Balance",
              gaming: "Quality",
              content: "Running Cost",
              sports: "Total Cost"
            }
          ]
        }
      }
    }
  },
  vehicles: {
    name: "Vehicles",
    items: {
      "Compact Car": {
        specs: {
          "Fuel Efficiency": {
            icon: "⛽",
            description: "Measured in miles per gallon (MPG) or liters per 100km. Example: A car rated at 35 MPG city/45 MPG highway might actually achieve different numbers based on driving style and conditions.",
            recommendation: "Look for at least 30 MPG city/40 MPG highway. Consider hybrid options for maximum efficiency."
          },
          "Maintenance Cost": {
            icon: "🔧",
            description: "Regular maintenance costs include oil changes, brakes, tires, and scheduled services. Example: Some brands require premium fuel or have more expensive parts.",
            recommendation: "Research common repair costs and service intervals. Japanese and Korean brands often have lower maintenance costs."
          },
          "Safety Features": {
            icon: "🛡️",
            description: "Modern safety features include automatic emergency braking, lane departure warning, and blind spot monitoring. Example: Some base models might not include advanced safety features.",
            recommendation: "Prioritize models with standard safety features rather than optional packages. Look for good crash test ratings."
          },
          "Interior Space": {
            icon: "📏",
            description: "Despite compact exterior, clever design can maximize interior space. Example: Some compact cars offer more legroom than larger vehicles through efficient packaging.",
            recommendation: "Test drive with all intended passengers. Check cargo space with seats up and folded."
          },
          "Parking & Maneuverability": {
            icon: "🅿️",
            description: "Turning radius, visibility, and parking sensors affect urban usability. Example: A backup camera and parking sensors can make a significant difference in tight spaces.",
            recommendation: "Look for models with good visibility and parking aids. Test parking in tight spaces during test drive."
          }
        },
        recommendations: [
          {
            scenario: "Urban Commuter 🏢",
            features: ["High fuel efficiency", "Compact size", "Easy parking"],
            explanation: "Focus on models that excel in city environments with stop-and-go traffic, tight parking, and frequent short trips. Prioritize fuel efficiency and maneuverability.",
            selection_guide: {
              primary: "Latest compact hybrid models",
              alternative: "Small turbocharged engine models",
              budget: "Reliable used Japanese compacts"
            }
          },
          {
            scenario: "First-Time Buyer 🔑",
            features: ["Affordable price", "Low maintenance", "Good safety"],
            explanation: "Choose models known for reliability and low operating costs. Look for good safety ratings and easy-to-use features.",
            selection_guide: {
              primary: "Entry-level Japanese/Korean models",
              alternative: "Certified pre-owned compact",
              budget: "Used models under 5 years old"
            }
          },
          {
            scenario: "Small Family 👨‍👩‍👦",
            features: ["Spacious interior", "Safety features", "Reliability"],
            explanation: "Look for compact cars with clever interior packaging, good safety ratings, and proven reliability records for family peace of mind.",
            selection_guide: {
              primary: "Compact hatchback models",
              alternative: "Small crossover SUVs",
              budget: "Used reliable hatchbacks"
            }
          },
          {
            scenario: "Long-Distance Commuter 🛣️",
            features: ["Excellent MPG", "Comfort", "Highway safety"],
            explanation: "Prioritize models with great highway fuel economy, comfortable seating, and advanced safety features for long trips.",
            selection_guide: {
              primary: "Hybrid compact sedans",
              alternative: "Efficient gas compact sedans",
              budget: "Used hybrid models"
            }
          }
        ]
      },
      "SUV": {
        specs: {
          "Space & Versatility": {
            icon: "📦",
            description: "Cargo capacity, passenger space, and seating configurations vary significantly. Example: Third-row seating might reduce cargo space when in use.",
            recommendation: "Consider how you'll use the space most often. Test all seating configurations and cargo scenarios."
          },
          "Off-Road Capability": {
            icon: "🏔️",
            description: "Ground clearance, all-wheel drive systems, and terrain management features affect off-road ability. Example: All-wheel drive alone doesn't guarantee good off-road performance.",
            recommendation: "For serious off-roading, look for proper 4WD with low range. For light trails, AWD is sufficient."
          },
          "Safety Systems": {
            icon: "🛡️",
            description: "Modern SUVs offer advanced safety features and better crash protection. Example: Higher center of gravity requires good stability control systems.",
            recommendation: "Look for comprehensive safety packages including blind spot monitoring and automatic emergency braking."
          },
          "Fuel Economy": {
            icon: "⛽",
            description: "Size and powertrain affect efficiency significantly. Example: A hybrid SUV might offer sedan-like efficiency despite size.",
            recommendation: "Consider hybrid options for better city MPG. Look for models with cylinder deactivation for highway efficiency."
          },
          "Towing Capacity": {
            icon: "🔄",
            description: "Varies by engine, transmission, and chassis design. Example: Same model might have different towing ratings based on configuration.",
            recommendation: "Add 20% margin to your towing needs. Verify specific configuration's towing capacity."
          }
        },
        recommendations: [
          {
            scenario: "Family Transport 👨‍👩‍👧‍👦",
            features: ["Three-row seating", "Advanced safety", "Easy access"],
            explanation: "Focus on models that prioritize passenger comfort, safety features, and easy access to all rows. Look for family-friendly features like multiple USB ports and entertainment options.",
            selection_guide: {
              primary: "Mid-size 3-row SUV",
              alternative: "Large crossover",
              budget: "Used 3-row crossover"
            }
          },
          {
            scenario: "Adventure & Outdoors 🏕️",
            features: ["True 4WD", "Ground clearance", "Durability"],
            explanation: "Choose models with proven off-road capability, durable construction, and good aftermarket support for modifications.",
            selection_guide: {
              primary: "Off-road focused SUV",
              alternative: "Trail-rated crossover",
              budget: "Used off-road SUV"
            }
          },
          {
            scenario: "Urban Professional 🏢",
            features: ["Compact size", "Luxury features", "Efficiency"],
            explanation: "Look for compact SUVs that combine elevated driving position with city-friendly dimensions and upscale features.",
            selection_guide: {
              primary: "Compact luxury SUV",
              alternative: "Premium crossover",
              budget: "Used luxury crossover"
            }
          },
          {
            scenario: "Active Lifestyle 🏃‍♂️",
            features: ["Versatile cargo", "AWD", "Roof rails"],
            explanation: "Prioritize models with flexible cargo space, all-weather capability, and easy attachment points for bikes, kayaks, or cargo boxes.",
            selection_guide: {
              primary: "Sport-oriented crossover",
              alternative: "Adventure-focused SUV",
              budget: "Used crossover with roof rack"
            }
          }
        ]
      },
      "Pickup Truck": {
        specs: {
          "Payload Capacity": {
            icon: "📦",
            description: "Maximum weight of cargo and passengers the truck can carry. Example: Engine and cab configuration affect payload capacity.",
            recommendation: "Choose payload rating 20% above your typical needs. Verify specific configuration's capacity."
          },
          "Towing Capability": {
            icon: "🔄",
            description: "Maximum trailer weight rating varies by configuration. Example: Same truck model can have vastly different towing capacities based on engine and axle ratio.",
            recommendation: "Select towing capacity 20% above your maximum planned trailer weight. Consider integrated trailer brake controller."
          },
          "Bed Size & Features": {
            icon: "📏",
            description: "Length, width, and features like tie-downs and bed liners matter. Example: Crew cab usually means shorter bed length.",
            recommendation: "Match bed length to typical cargo. Look for useful features like multi-position tailgate and bed lighting."
          },
          "Fuel Efficiency": {
            icon: "⛽",
            description: "Varies significantly by engine choice and drive configuration. Example: Diesel engines often offer better efficiency under load.",
            recommendation: "For frequent towing, consider diesel. For light duty, modern turbo gas engines offer good efficiency."
          },
          "Durability": {
            icon: "🔨",
            description: "Frame construction, suspension design, and powertrain reliability. Example: Some trucks prioritize comfort over durability.",
            recommendation: "Research long-term reliability. Look for proven powertrains and robust construction."
          }
        },
        recommendations: [
          {
            scenario: "Work & Construction 🏗️",
            features: ["High payload", "Durable bed", "Tool storage"],
            explanation: "Focus on models with high payload capacity, durable bed construction, and good work-site functionality like power outlets and storage solutions.",
            selection_guide: {
              primary: "Heavy-duty work truck",
              alternative: "Full-size with work package",
              budget: "Used work truck"
            }
          },
          {
            scenario: "Recreational Towing 🚐",
            features: ["Towing capacity", "Stability", "Comfort"],
            explanation: "Choose models optimized for towing with appropriate power, integrated brake controller, and towing-specific features like trailer backup assist.",
            selection_guide: {
              primary: "Half-ton with max tow package",
              alternative: "Heavy-duty base model",
              budget: "Used tow-ready truck"
            }
          },
          {
            scenario: "Daily Driver 🛣️",
            features: ["Comfort", "Efficiency", "Maneuverability"],
            explanation: "Look for trucks that balance utility with daily comfort, offering good fuel economy and easier parking for regular commuting.",
            selection_guide: {
              primary: "Mid-size truck",
              alternative: "Efficient full-size",
              budget: "Used mid-size truck"
            }
          },
          {
            scenario: "Adventure & Outdoors 🏕️",
            features: ["Off-road ability", "Versatility", "Durability"],
            explanation: "Prioritize models with good off-road capability, versatile cargo solutions, and durability for outdoor adventures.",
            selection_guide: {
              primary: "Off-road focused full-size",
              alternative: "Adventure-ready mid-size",
              budget: "Used off-road truck"
            }
          }
        ]
      },
      "Electric Car": {
        specs: {
          "Driving Range": {
            icon: "🔋",
            description: "Real-world range varies with temperature, driving style, and terrain. Example: Highway speeds and cold weather can reduce range by 30% or more.",
            recommendation: "Choose range at least 30% above your typical daily needs. Consider charging availability on regular routes."
          },
          "Charging Speed": {
            icon: "⚡",
            description: "DC fast charging capability and home charging rates vary. Example: Some EVs can add 200 miles in 15 minutes, others take much longer.",
            recommendation: "Look for minimum 150kW DC fast charging. Verify home charging speed compatibility."
          },
          "Battery Longevity": {
            icon: "📊",
            description: "Battery degradation affects range over time. Example: Some EVs maintain 90% capacity after 100,000 miles, others degrade faster.",
            recommendation: "Check battery warranty terms. Research real-world degradation data from current owners."
          },
          "Performance": {
            icon: "🏃",
            description: "Instant torque provides quick acceleration, but performance varies. Example: Dual motor setups offer better traction and acceleration.",
            recommendation: "Test drive in various conditions. Consider dual motor for snow regions."
          },
          "Total Cost": {
            icon: "💰",
            description: "Include purchase price, incentives, charging costs, and maintenance. Example: Higher purchase price often offset by lower operating costs.",
            recommendation: "Calculate total cost of ownership including electricity vs. gas, maintenance, and incentives."
          }
        },
        recommendations: [
          {
            scenario: "Urban Commuter 🏢",
            features: ["Efficient range", "Easy charging", "Compact size"],
            explanation: "Focus on models that excel in city environments with regenerative braking, easy charging options, and good maneuverability.",
            selection_guide: {
              primary: "Compact EV with 250+ mile range",
              alternative: "Entry luxury EV",
              budget: "Used proven EV model"
            }
          },
          {
            scenario: "Long Distance Travel 🛣️",
            features: ["Extended range", "Fast charging", "Highway comfort"],
            explanation: "Choose models with longer range and very fast charging capabilities for convenient long-distance travel.",
            selection_guide: {
              primary: "Premium EV with 300+ mile range",
              alternative: "Long-range mainstream EV",
              budget: "Used long-range EV"
            }
          },
          {
            scenario: "Family Vehicle 👨‍👩‍👦",
            features: ["Space", "Safety", "Practicality"],
            explanation: "Look for EVs with good interior space, comprehensive safety features, and practical range for family activities.",
            selection_guide: {
              primary: "Electric SUV/Crossover",
              alternative: "Large electric sedan",
              budget: "Used electric crossover"
            }
          },
          {
            scenario: "Performance Enthusiast 🏎️",
            features: ["Quick acceleration", "Handling", "Technology"],
            explanation: "Prioritize models with high performance capabilities while maintaining practical usability and range.",
            selection_guide: {
              primary: "Performance-focused EV",
              alternative: "Sport trim mainstream EV",
              budget: "Used performance EV"
            }
          }
        ]
      },
      "Motorcycle": {
        specs: {
          "Engine & Power": {
            icon: "⚡",
            description: "Power delivery characteristics vary by engine type and size. Example: A 600cc sport bike delivers power differently than a 1200cc cruiser.",
            recommendation: "Match engine type to riding style. Consider power-to-weight ratio for performance."
          },
          "Fuel Economy": {
            icon: "⛽",
            description: "Varies significantly by riding style and engine size. Example: Sport touring bikes often balance power with efficiency.",
            recommendation: "Look for fuel injection and modern engine management for best efficiency. Consider tank size for range."
          },
          "Ergonomics": {
            icon: "🧍",
            description: "Riding position affects comfort and control. Example: Sport bikes have aggressive positions, cruisers more relaxed.",
            recommendation: "Test ride different styles. Consider adjustable components for better fit."
          },
          "Safety Features": {
            icon: "🛡️",
            description: "Modern bikes offer ABS, traction control, and riding modes. Example: ABS can significantly improve safety in emergency braking.",
            recommendation: "Prioritize ABS at minimum. Consider advanced rider aids for less experienced riders."
          },
          "Maintenance": {
            icon: "🔧",
            description: "Service intervals and complexity vary by design. Example: Chain drive requires more frequent maintenance than shaft drive.",
            recommendation: "Research service intervals and costs. Consider reliability history and parts availability."
          }
        },
        recommendations: [
          {
            scenario: "New Rider 🔰",
            features: ["Manageable power", "Light weight", "Safety features"],
            explanation: "Focus on bikes that are forgiving to ride, easy to handle at low speeds, and equipped with modern safety features.",
            selection_guide: {
              primary: "Entry-level standard bike",
              alternative: "Small displacement cruiser",
              budget: "Used beginner-friendly bike"
            }
          },
          {
            scenario: "Daily Commuter 🏢",
            features: ["Efficiency", "Reliability", "Weather protection"],
            explanation: "Choose bikes that offer good fuel economy, reliable operation, and some weather protection for regular commuting.",
            selection_guide: {
              primary: "Modern standard/naked bike",
              alternative: "Small adventure bike",
              budget: "Used commuter bike"
            }
          },
          {
            scenario: "Weekend Explorer 🏔️",
            features: ["Comfort", "Range", "Versatility"],
            explanation: "Look for bikes that excel at longer rides with good comfort, fuel range, and ability to handle various road conditions.",
            selection_guide: {
              primary: "Sport touring bike",
              alternative: "Adventure touring bike",
              budget: "Used touring bike"
            }
          },
          {
            scenario: "Performance Enthusiast 🏎️",
            features: ["Power", "Handling", "Brakes"],
            explanation: "Prioritize bikes with strong performance capabilities, good suspension, and powerful brakes for spirited riding.",
            selection_guide: {
              primary: "Modern sport bike",
              alternative: "Performance naked bike",
              budget: "Used sport bike"
            }
          }
        ]
      },
      "Sports Car": {
        // ... existing Sports Car specs ...
      },
      "Van": {
        // ... existing Van specs ...
      },
      "Van/MPV": {
        // ... existing Van/MPV specs ...
      },
      "Hybrid Car": {
        // ... existing Hybrid Car specs ...
      },
      "Sedan": {
        specs: {
          "Comfort & Space": {
            icon: "🛋️",
            description: "Interior comfort and passenger space are key sedan features. Example: Mid-size sedans often offer better rear legroom and quieter cabins than similarly priced SUVs.",
            recommendation: "Look for adjustable seats with good lumbar support. Test rear seat space with tall passengers."
          },
          "Fuel Efficiency": {
            icon: "⛽",
            description: "Aerodynamic design helps sedans achieve better fuel economy. Example: Many modern sedans achieve 30+ MPG in mixed driving conditions.",
            recommendation: "Consider hybrid options for maximum efficiency. Look for models with cylinder deactivation or turbo engines for balance of power and economy."
          },
          "Trunk Space": {
            icon: "📦",
            description: "Enclosed trunk provides secure, weather-protected storage. Example: Mid-size sedans typically offer 15-16 cubic feet of trunk space.",
            recommendation: "Look for split-folding rear seats for flexibility. Consider trunk opening size and shape for large items."
          },
          "Handling": {
            icon: "🎯",
            description: "Lower center of gravity improves handling and stability. Example: Sedans typically offer better cornering and more confident handling than taller vehicles.",
            recommendation: "Test drive on various road types. Consider sport-tuned suspension for better handling if ride comfort isn't primary concern."
          },
          "Safety Features": {
            icon: "🛡️",
            description: "Modern sedans offer comprehensive safety features. Example: Many include automatic emergency braking, lane keeping, and blind spot monitoring.",
            recommendation: "Prioritize models with standard advanced safety features. Look for good crash test ratings."
          }
        },
        use_cases: {
          title: "Sedan Comparison Guide",
          description: "Compare different sedan classes to find your ideal match",
          table_headers: [
            "Features",
            "Compact Sedan",
            "Mid-Size Sedan",
            "Full-Size Sedan",
            "Sport Sedan"
          ],
          table_rows: [
            {
              component: "Typical Price Range",
              general: "$20-25k",
              gaming: "$25-35k",
              content: "$35-45k",
              sports: "$40k+"
            },
            {
              component: "Engine Options",
              general: "1.4-1.8L 4-cyl",
              gaming: "1.8-2.0L Turbo",
              content: "2.5-3.5L V6",
              sports: "3.0L+ Turbo"
            },
            {
              component: "Fuel Economy",
              general: "35+ MPG",
              gaming: "30-35 MPG",
              content: "25-30 MPG",
              sports: "20-25 MPG"
            },
            {
              component: "Trunk Space",
              general: "12-13 cu.ft",
              gaming: "14-16 cu.ft",
              content: "16-18 cu.ft",
              sports: "13-15 cu.ft"
            },
            {
              component: "Best For",
              general: "City driving, efficiency",
              gaming: "Family, balance",
              content: "Comfort, space",
              sports: "Performance"
            }
          ]
        }
      },
      "Hatchback": {
        specs: {
          "Versatility": {
            icon: "🔄",
            description: "Flexible cargo space with fold-down rear seats. Example: Hatchbacks can often carry larger items than sedans with similar footprints.",
            recommendation: "Look for 60/40 split rear seats minimum. Consider models with adjustable cargo floors."
          },
          "Maneuverability": {
            icon: "🎯",
            description: "Compact dimensions and good visibility aid urban driving. Example: Shorter length makes parking and city navigation easier than with sedans.",
            recommendation: "Test turning radius and visibility. Look for parking sensors and cameras in urban-focused models."
          },
          "Fuel Economy": {
            icon: "⛽",
            description: "Efficient packaging and aerodynamic design. Example: Many modern hatchbacks achieve 35+ MPG in mixed driving.",
            recommendation: "Consider hybrid options if available. Look for models with efficient turbo engines."
          },
          "Practicality": {
            icon: "📦",
            description: "Easy cargo access and space efficiency. Example: Wide-opening rear hatch and flat load floor maximize usability.",
            recommendation: "Check load height and opening width. Look for clever storage solutions."
          },
          "Value": {
            icon: "💰",
            description: "Often offer better feature content for price. Example: Hatchbacks frequently include more standard features than similarly priced sedans.",
            recommendation: "Compare feature content across body styles. Consider total ownership costs."
          }
        },
        use_cases: {
          title: "Hatchback Comparison Guide",
          description: "Compare hatchback styles to match your needs",
          table_headers: [
            "Features",
            "Subcompact Hatch",
            "Compact Hatch",
            "Hot Hatch",
            "Premium Hatch"
          ],
          table_rows: [
            {
              component: "Size & Space",
              general: "Small, 15 cu.ft",
              gaming: "Medium, 20 cu.ft",
              content: "Medium, 19 cu.ft",
              sports: "Medium, 22 cu.ft"
            },
            {
              component: "Performance",
              general: "80-100 hp",
              gaming: "120-150 hp",
              content: "200-300 hp",
              sports: "150-250 hp"
            },
            {
              component: "Features",
              general: "Basic tech",
              gaming: "Good mix",
              content: "Sport focus",
              sports: "Luxury"
            },
            {
              component: "Price Range",
              general: "$16-20k",
              gaming: "$20-25k",
              content: "$30k+",
              sports: "$35k+"
            },
            {
              component: "Characteristics",
              general: "Easy parking",
              gaming: "Versatility",
              content: "Sporty handling",
              sports: "Refinement"
            }
          ]
        }
      },
      "Van/MPV": {
        specs: {
          "Passenger Space": {
            icon: "👥",
            description: "Flexible seating configurations and easy access. Example: Many MPVs offer seating for 7-8 with removable/folding seats.",
            recommendation: "Consider seating needs and ease of configuration changes. Look for models with easy-access features like power sliding doors."
          },
          "Cargo Capacity": {
            icon: "📦",
            description: "Maximum space utilization with configurable interior. Example: Full-size vans can offer 150+ cubic feet of cargo space.",
            recommendation: "Match cargo space to typical needs. Consider models with flat-folding seats and low load floor."
          },
          "Access & Visibility": {
            icon: "👁️",
            description: "Multiple entry points and good sight lines. Example: Sliding doors and large windows improve accessibility and visibility.",
            recommendation: "Look for power sliding doors for families. Consider models with parking sensors and cameras."
          },
          "Comfort Features": {
            icon: "🛋️",
            description: "Family-focused amenities and comfort. Example: Rear climate control, entertainment systems, and multiple USB ports.",
            recommendation: "Prioritize features that match your passenger needs. Consider models with advanced comfort features for long trips."
          },
          "Safety Systems": {
            icon: "🛡️",
            description: "Modern safety features for family protection. Example: Advanced driver aids and multiple airbags throughout cabin.",
            recommendation: "Look for comprehensive safety packages. Consider models with good crash test ratings."
          }
        },
        use_cases: {
          title: "Van/MPV Comparison Guide",
          description: "Compare different van and MPV configurations",
          table_headers: [
            "Features",
            "Minivan",
            "Full-Size Van",
            "Compact MPV",
            "Passenger Van"
          ],
          table_rows: [
            {
              component: "Seating",
              general: "7-8 seats",
              gaming: "12-15 seats",
              content: "5-7 seats",
              sports: "8-12 seats"
            },
            {
              component: "Cargo Space",
              general: "140 cu.ft max",
              gaming: "250+ cu.ft",
              content: "100 cu.ft max",
              sports: "180 cu.ft max"
            },
            {
              component: "Doors",
              general: "Power sliding",
              gaming: "Barn doors",
              content: "Regular/sliding",
              sports: "Mixed"
            },
            {
              component: "Use Type",
              general: "Family",
              gaming: "Commercial",
              content: "Urban family",
              sports: "Transport"
            },
            {
              component: "Features",
              general: "Family comfort",
              gaming: "Utility",
              content: "Compact utility",
              sports: "Mixed use"
            }
          ]
        }
      },
      "Hybrid Car": {
        // ... existing Hybrid Car specs ...
      },
      "Bicycle/eBike": {
        specs: {
          "Motor & Battery": {
            icon: "⚡",
            description: "Electric assist system power and range. Example: 250W motors with 400Wh batteries typically offer 40-60 miles of range.",
            recommendation: "Match motor power to terrain and use. Consider battery capacity for typical ride distance."
          },
          "Frame & Design": {
            icon: "🔧",
            description: "Frame material and geometry affect ride quality. Example: Aluminum frames balance weight and cost, while carbon fiber offers lighter weight.",
            recommendation: "Choose frame style based on intended use. Consider step-through designs for easy mounting."
          },
          "Components": {
            icon: "⚙️",
            description: "Drivetrain, brakes, and other critical parts. Example: Hydraulic disc brakes offer better stopping power than mechanical discs.",
            recommendation: "Prioritize quality brakes and drivetrain. Look for name-brand components for better reliability."
          },
          "Range & Charging": {
            icon: "🔋",
            description: "Battery range and charging time. Example: Many eBikes charge fully in 4-6 hours and offer multiple assist levels.",
            recommendation: "Consider charging locations and time. Look for removable batteries if storage is limited."
          },
          "Safety Features": {
            icon: "🛡️",
            description: "Lighting, reflectors, and safety systems. Example: Integrated lights and reflective elements improve visibility.",
            recommendation: "Look for built-in lights and good visibility features. Consider models with safety sensors."
          }
        },
        use_cases: {
          title: "eBike Comparison Guide",
          description: "Compare different eBike types and capabilities",
          table_headers: [
            "Features",
            "City eBike",
            "eMTB",
            "Cargo eBike",
            "Folding eBike"
          ],
          table_rows: [
            {
              component: "Motor Power",
              general: "250W",
              gaming: "500W+",
              content: "750W",
              sports: "250W"
            },
            {
              component: "Range",
              general: "40-50 miles",
              gaming: "30-40 miles",
              content: "25-35 miles",
              sports: "20-30 miles"
            },
            {
              component: "Weight",
              general: "45-55 lbs",
              gaming: "50-60 lbs",
              content: "60-80 lbs",
              sports: "35-45 lbs"
            },
            {
              component: "Best Use",
              general: "Commuting",
              gaming: "Trail riding",
              content: "Hauling",
              sports: "Multi-modal"
            },
            {
              component: "Key Feature",
              general: "Comfort",
              gaming: "Suspension",
              content: "Capacity",
              sports: "Portability"
            }
          ]
        }
      }
    }
  }
};

// Make techData available globally
window.techData = techData;

// Vehicle icons mapping using Font Awesome
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
