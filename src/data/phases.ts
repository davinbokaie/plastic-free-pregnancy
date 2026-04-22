import { Phase } from "./types";

export const PHASES: Phase[] = [
  {
    id: "phase1", number: "01", title: "The Foundation", subtitle: "For You, During Pregnancy",
    timeline: "During Pregnancy", accent: "#C4785C", accentLight: "#F5EDEA", accentMid: "#D4A090",
    categoryCount: 9,
    description: "Your body is your baby's first environment. What you eat, drink, and wear right now is already shaping their world. These are how you get ahead of it before their birthday.",
    sections: [
      { name: "What You Drink", categories: [
        { name: "Water Filtration",
          why: "You're drinking more water now than ever before. It's one of the best things you can do for your body and your baby — so it's worth making sure what you're drinking is clean.",
          topPick: { name: "Waterdrop 8 Stage Tankless Reverse Osmosis Filter", price: "$429", oneLiner: "8-stage reverse osmosis with no tank. Removes microplastics, PFAS, and 80+ contaminants from your tap water.", url: "https://amzn.to/48UuYmj" },
          alternatives: [
            { label: "also good", name: "Waterdrop Under-Sink Filtration", price: "$95", note: "If you want it out of sight. Comparable protection, half the footprint.", url: "https://amzn.to/41NoH8e" },
            { label: "budget", name: "LifeStraw Home Pitcher", price: "$32", note: "Our favorite budget pick.", url: "https://amzn.to/4sTXV9u" }
          ]
        },
        { name: "Water Bottle",
          why: "Filtering your water then putting it in a plastic bottle puts you right back where you started. This one's an easy upgrade.",
          topPick: { name: "S'well Roamer (Brushed Stainless)", price: "$35", oneLiner: "Food-grade stainless steel, no interior coating. Keeps water cold, nothing leaching in.", url: "https://amzn.to/4cqAMX2" },
          alternatives: [
            { label: "also good", name: "S'well Traveler (Glass)", price: "$27", note: "True zero-plastic option. Glass body with a protective sleeve — comes in colors.", url: "https://amzn.to/4vCse6S" },
            { label: "also good", name: "Hydro Flask Standard Mouth", price: "$30+", note: "More sizes and colors. Vacuum-insulated stainless.", url: "https://amzn.to/4tOLkF6" }
          ]
        },
        { name: "Tea & Coffee Prep",
          why: "Your morning ritual is one of the easiest places for plastic to sneak in. Hot water and plastic are a bad combination — and this is one of the simplest changes on the list.",
          topPick: { name: "Kalita Wave 185 Pour-Over Dripper", price: "$34", oneLiner: "Stainless steel pour-over. Japanese-made, zero plastic in the brew path.", url: "https://amzn.to/3Qit0WE" },
          alternatives: [
            { label: "for tea", name: "Finum Stainless Steel Brewing Basket", price: "$14", note: "Reusable metal infuser — replaces plastic tea bags entirely.", url: "https://amzn.to/3QaGeEZ" }
          ]
        }
      ]},
      { name: "What You Eat & How You Cook", categories: [
        { name: "Cookware",
          why: "Teflon and non-stick coatings are made from PFAS — chemicals that don't break down in your body or the environment.",
          topPick: { name: "All-Clad D3 Stainless Steel 10 Piece Cookware Set", price: "$799", oneLiner: "Stainless steel. Professional quality, built for a lifetime. Fully PFAS-free.", url: "https://amzn.to/4sQHyui" },
          alternatives: [
            { label: "start small", name: "Made In Stainless Steel Frying Pan", price: "$139", note: "Not ready to replace everything? Start with one great everyday pan.", url: "https://amzn.to/4u131la" }
          ]
        },
        { name: "Cutting Board",
          why: "Every time you run a knife across a plastic cutting board, it leaves a mark. Those marks are microplastics — going straight into your food.",
          topPick: { name: "John Boos Maple Wood Block", price: "$185", oneLiner: "Thick, professional-grade maple. The kind of board you buy once and never think about again. NSF certified.", url: "https://amzn.to/42j0WoE" },
          alternatives: [
            { label: "also good", name: "JK Adams Maple Board", price: "$49", note: "Same quality maple, lighter and more affordable.", url: "https://amzn.to/4mDV4jp" },
            { label: "also good", name: "John Boos Walnut Board", price: "$155", note: "Darker look, identical quality.", url: "https://amzn.to/41JJsBG" }
          ]
        },
        { name: "Cooking Utensils",
          why: "Plastic utensils soften and degrade with heat. Black plastic especially — it's often made from recycled electronics.",
          topPick: { name: "Viking Stainless Steel Utensil Set", price: "$120", oneLiner: "Full stainless steel set. Heat-proof, dishwasher safe, nothing plastic touching your food.", url: "https://amzn.to/3OSwPRX" },
          alternatives: [
            { label: "also good", name: "Wooden Cooking Utensil Set", price: "$54", note: "If you prefer wood. Natural, heat-safe, and beautiful in a kitchen.", url: "https://amzn.to/4cyFelf" }
          ]
        },
        { name: "Food Storage",
          why: "Heating and storing food in plastic is one of the highest exposure routes — even in containers labeled 'microwave safe.'",
          topPick: { name: "Vtopmart Glass Food Storage Set", price: "$24", oneLiner: "Airtight glass containers with snap-lock lids. Microwave and dishwasher safe — no plastic touching your food.", url: "https://amzn.to/4th8Hr3" },
          alternatives: [
            { label: "also good", name: "GEEJA Stainless Steel Containers", price: "$37", note: "Prefer stainless? More durable. Great for carrying food out of the house.", url: "https://amzn.to/4dY310p" }
          ]
        },
        { name: "Salt",
          why: "Plastic waste in our oceans sneaks into sea salt, and heavy processing adds more exposure — then it all sits in a plastic container. Naturally mined, minimally handled, and stored in glass keeps what lands on your food as clean as possible.",
          topPick: { name: "Himalayan Chef Pink Salt Coarse Large Glass Grinder", price: "$8.39", oneLiner: "Naturally mined, minimally processed, stored in glass. The cleanest version of something you reach for every day.", url: "https://himalayanchef.com/products/tall-pink-salt-refillable-coarse-grinder" },
          alternatives: [
            { label: "also good", name: "Himalayan Chef Fine Glass Shaker 6-pack", price: "$39.99", note: "If you prefer a shaker with the same clean salt.", url: "https://amzn.to/41JcPnH" }
          ]
        }
      ]},
      { name: "What Touches Your Skin", categories: [
        { name: "Maternity Clothing",
          why: "You're replacing your wardrobe anyway. Choosing natural fibers means less synthetic fabric against your skin all day.",
          topPick: { name: "Quince Organic Cotton Maternity Maxi Dress", price: "$70", oneLiner: "100% organic cotton. Comfortable through every trimester — soft, breathable, nothing synthetic against your skin.", url: "https://quince.com/women/100-organic-cotton-maternity-tiered-maxi-dress" },
          alternatives: [
            { label: "also good", name: "Quince European Linen Maternity Top", price: "$50", note: "100% European linen. Breathable, naturally plastic-free.", url: "https://quince.com/women/100-european-linen-maternity-long-sleeve-shirt-2564" },
            { label: "budget", name: "Joyaria Maternity Leggings", price: "$24.69", note: "Affordable cotton-blend leggings for everyday wear.", url: "https://amzn.to/4e2GvUk" }
          ]
        }
      ]}
    ]
  },
  {
    id: "phase2", number: "02", title: "Nesting", subtitle: "Setting Up the Nursery",
    timeline: "Weeks 28–40", accent: "#7B8F6B", accentLight: "#EDF1E7", accentMid: "#A8B499",
    categoryCount: 14,
    description: "Plastic-free from day one. By the time your baby arrives, everything they'll sleep on, eat from, and wear will already be free of the stuff that shouldn't be there.",
    sections: [
      { name: "Sleep & Nursery", categories: [
        { name: "Crib Mattress",
          why: "Your baby spends more time on their mattress than anywhere else — and most mattresses are petroleum-based foam covered in synthetic fabric.",
          topPick: { name: "Avocado Crib Mattress", price: "$359", oneLiner: "Organic cotton quilted top with natural latex core. No polyurethane foam, no synthetic materials in the sleep surface.", url: "https://amzn.to/4sJBJi6" },
          alternatives: [
            { label: "premium", name: "Savvy Baby Talalay Latex Mattress", price: "$749", note: "If budget allows, this is the gold standard. Talalay latex — softer, more consistent.", url: "https://savvyrest.com/product/the-savvy-baby-talalay/" }
          ]
        },
        { name: "Crib Bedding",
          why: "One of the easiest and most impactful changes on the list. Organic cotton sheets complete the plastic-free sleep surface.",
          topPick: { name: "Newton Baby Organic Fitted Crib Sheet", price: "$39", oneLiner: "100% organic muslin cotton. Soft, breathable, nothing synthetic against your baby's skin.", url: "https://amzn.to/4vFJ1Gm" },
          alternatives: [
            { label: "budget", name: "Burt's Bees Organic Cotton Crib Sheet", price: "$13.83", note: "GOTS certified organic cotton — the same standard, lower price.", url: "https://amzn.to/3QmBagC" }
          ]
        },
        { name: "Sleepwear & Swaddles",
          why: "Swaddles and sleepwear are against your baby's skin for the longest stretch of every day. Let's make sure it's a natural fiber, not polyester.",
          topPick: { name: "Aden + Anais Classic Muslin Swaddles (4-pack)", price: "$69", oneLiner: "100% cotton muslin. Breathable, versatile — use it as a swaddle, blanket, nursing cover, and more.", url: "https://amzn.to/4mMMhf6" },
          alternatives: [
            { label: "also good", name: "Disana Organic Wool Knitted Blanket", price: "$55", note: "The wool option. Naturally warm, naturally breathable.", url: "https://littlespruceorganics.com/disana-organic-wool-knitted-blanket/" },
            { label: "budget", name: "Burt's Bees Organic Newborn Pajamas", price: "$14", note: "Affordable organic cotton sleeper for everyday wear.", url: "https://burtsbeesbaby.com/products/good-night-sky-organic-cotton-sleep-and-play-ice-flow" }
          ]
        },
        { name: "Nursery Furniture",
          why: "Most cribs are compressed wood scraps bound with chemical adhesives that slowly release into the air — especially when new. Solid wood is just wood.",
          topPick: { name: "Oeuf Classic Modern Crib", price: "$1,030", oneLiner: "Solid birch wood. Adjustable mattress height. Built to last. No synthetic resins.", url: "https://amzn.to/4ego4vx" },
          alternatives: [
            { label: "budget", name: "Carter's DaVinci Colby 4-in-1 Crib", price: "$249", note: "Solid pine, GREENGUARD Gold certified. Our favorite budget pick.", url: "https://amzn.to/4vBIPYA" }
          ]
        }
      ]},
      { name: "Feeding", categories: [
        { name: "Baby Bottles",
          why: "Warming a plastic bottle releases microplastic particles straight into your baby's milk — and we warm bottles at every single feeding.",
          topPick: { name: "Philips Avent Natural Glass Baby Bottles", price: "$54", oneLiner: "Borosilicate glass, wide-neck, easy to clean. No plastic in contact with your baby's milk.", url: "https://amzn.to/4mI57Uz" },
          alternatives: [
            { label: "also good", name: "NUK Simply Natural Glass Bottle", price: "$23", note: "Glass body with an orthodontic nipple shape. Good for babies who need it.", url: "https://amzn.to/4sLlfWL" },
            { label: "also good", name: "Dr. Brown's Anti-Colic Wide-Neck Glass", price: "$28", note: "For babies with gas. Internal vent system, wide-neck glass.", url: "https://amzn.to/4tX6EZ5" }
          ]
        },
        { name: "Breast Pump & Milk Storage",
          why: "Everything that touches your breast milk touches your baby. Most standard pump parts are plastic that gets heated during sterilization.",
          topPick: { name: "Haakaa Silicone Manual Breast Pump", price: "$13", oneLiner: "Medical-grade silicone, one piece, nothing complicated. The simplest way to collect milk without any plastic.", url: "https://amzn.to/4cuyBAA" },
          alternatives: [
            { label: "also good", name: "Boon Trove Manual Breast Pump", price: "$17", note: "More discreet design. Silicone body with a softer, more comfortable cup.", url: "https://amzn.to/4tRWmJN" }
          ]
        },
        { name: "Baby Formula",
          why: "This one is about the packaging. Most formulas come in plastic tubs — plastic in direct contact with your baby's food from the moment it's made. Steel is the cleaner choice.",
          topPick: { name: "Similac Advance Infant Formula 30.8oz", price: "$38.97", oneLiner: "USDA organic, stored in a steel can. No plastic packaging in contact with the formula inside.", url: "https://amzn.to/4tQp8um" },
          alternatives: []
        },
        { name: "Baby Food (Early Solids)",
          why: "Baby food pouches put plastic in direct contact with your baby's food, and your baby squeezes them straight into their mouth. Glass jars are a great home base.",
          topPick: { name: "Gerber Stage 1 Organic Carrot Jar 10-pack", price: "$12.70–$17.78", oneLiner: "Single-ingredient baby food in a glass jar. No plastic laminate, no pouches — just real food in clean packaging.", url: "https://amzn.to/4vKXJMq" },
          alternatives: [
            { label: "also good", name: "Beech-Nut Naturals Stage 1 Variety Pack", price: "$19.99", note: "Glass jars across a range of flavors — great for the early stages of introducing solids.", url: "https://marianos.com/p/beech-nut-naturals-stage-1-baby-food-jar-variety-pack-fruit-vegetable/0005220020021" }
          ]
        }
      ]},
      { name: "Daily Care", categories: [
        { name: "Pacifiers",
          why: "A pacifier is in your baby's mouth for hours every day. Medical-grade silicone and natural rubber are the only two materials we'd put there.",
          topPick: { name: "NUK Timeless Comfy Silicone Pacifier", price: "$10", oneLiner: "Medical-grade silicone, orthodontic shape. Supports natural oral development with nothing harmful.", url: "https://amzn.to/4vFJiJo" },
          alternatives: [
            { label: "also good", name: "Bibs Latex Pacifiers", price: "$16", note: "Natural rubber latex. If you prefer latex over silicone — Danish-designed.", url: "https://amzn.to/48GR6AA" }
          ]
        },
        { name: "Wipes",
          why: "Most baby wipes are plastic in disguise — polyester and polypropylene nonwoven fabric touching your baby's skin thousands of times.",
          topPick: { name: "Raan 100% Cotton Baby Wipes", price: "$40", oneLiner: "Pure cotton, no synthetic fibers. No polyester backing, nothing plastic touching your baby's skin.", url: "https://amzn.to/4vz34pL" },
          alternatives: []
        },
        { name: "Diapers",
          why: "Diapers are against your baby's skin every hour of every day for years. Most contain synthetic superabsorbent polymers — essentially plastic.",
          topPick: { name: "HealthyBaby Certified Safe Diapers", price: "$30", oneLiner: "Certified low-synthetic, tested for PFAS, phthalates, and heavy metals. The most rigorously vetted diaper on the market.", url: "https://amzn.to/4chKQBG" },
          alternatives: [
            { label: "also good", name: "DYPER Plant-Based Diapers", price: "$20", note: "Bamboo-based and compostable. Lower environmental footprint.", url: "https://amzn.to/3OL1pgl" }
          ]
        },
        { name: "Changing Pad",
          why: "Standard changing pads are polyurethane foam wrapped in vinyl — your baby lies directly on this for every diaper change.",
          topPick: { name: "Naturepedic Organic Cotton Changing Pad", price: "$139", oneLiner: "Everything a changing pad needs to be, without the materials it doesn't.", url: "https://naturepedic.com/organic-changing-table-pads" },
          alternatives: [
            { label: "easy fix", name: "Mushie Organic Cotton Liners", price: "$20", note: "Layer over any existing pad to create an organic cotton barrier. Easiest change.", url: "https://amzn.to/4cSwZln" }
          ]
        }
      ]},
      { name: "Clothing & Carrying", categories: [
        { name: "Baby Carrier / Wrap",
          why: "A carrier puts synthetic fabric against both your skin and your baby's for hours. Cotton and bamboo keep that contact natural.",
          topPick: { name: "Boba Baby Wrap Carrier", price: "$40", oneLiner: "Soft cotton or bamboo wrap. Nothing synthetic between you and your baby during those first months of skin-to-skin.", url: "https://amzn.to/3Qj8c1b" },
          alternatives: [
            { label: "also good", name: "Baby Tula Free-to-Grow Cotton Carrier", price: "$88", note: "If you prefer structure over a wrap. Robust cotton carrier that grows with your baby.", url: "https://amzn.to/4sOjisC" }
          ]
        },
        { name: "Baby Clothing",
          why: "Baby clothing is against your newborn's skin every hour of every day. Most conventional baby clothes are polyester blends — synthetic fabrics that shed microfibers with every wash. Organic cotton is softer, safer, and better for skin that is more sensitive than it will ever be again.",
          topPick: { name: "Burt's Bees Baby Organic Cotton Bodysuits (5-pack)", price: "$30", oneLiner: "100% GOTS certified organic cotton. Five-pack of the only bodysuit your baby needs in the first weeks.", url: "https://amzn.to/4cjWcoN" },
          alternatives: [
            { label: "budget", name: "Monica + Andy 3-Piece Knit Set", price: "$55", note: "100% organic cotton knit set. A softer, more premium alternative for the early weeks.", url: "https://monicaandandy.com/products/baby-3-piece-knit-set" }
          ]
        }
      ]}
    ]
  },
  {
    id: "phase3", number: "03", title: "Postpartum Recovery", subtitle: "Your Healing",
    timeline: "After Birth", accent: "#B08BA0", accentLight: "#F3ECF0", accentMid: "#C9AFBE",
    categoryCount: 5,
    description: "You just did the hardest thing. These are for your body now — the recovery, the healing, the quiet work of taking care of yourself so you can take care of them.",
    sections: [
      { name: "", categories: [
        { name: "Nipple Cream / Balm",
          why: "This is one of the most direct transfer points on the entire list. Nipple cream sits on skin your baby feeds from — thankfully, clean natural ingredients are easy to find.",
          topPick: { name: "Earth Mama Organic Nipple Butter 2oz", price: "$13.97", oneLiner: "Single-ingredient lanolin balm. Safe for baby, healing for you — no need to wipe off before feeding.", url: "https://amzn.to/3QxNxq9" },
          alternatives: [
            { label: "plant-based", name: "Motherlove Nipple Cream 1oz Organic Lanolin-Free", price: "$12.99", note: "If you prefer botanicals over lanolin.", url: "https://amzn.to/3OL2dln" }
          ]
        },
        { name: "Breast Pads",
          why: "Most breast pads are synthetic fabric against skin that is tender, healing, and in near-constant use. Organic cotton keeps that contact as clean and gentle as possible.",
          topPick: { name: "PureTree Organic Cotton Disposable Nursing Pads 100-pack", price: "$21.99", oneLiner: "Organic cotton, reusable. Gentle against sensitive skin during the most active weeks of breastfeeding.", url: "https://amzn.to/4mKlYGq" },
          alternatives: []
        },
        { name: "Nursing Bra",
          why: "A nursing bra is against your skin and your baby's face more than almost anything else you'll wear. It's a tough category to get fully plastic-free, but these two get as close as currently possible.",
          topPick: { name: "CAKYE 3 Piece Nursing Bra", price: "$60", oneLiner: "95% cotton with a touch of spandex for stretch. Three-pack for everyday rotation — soft, supportive, and mostly plastic-free.", url: "https://amzn.to/41J2IPT" },
          alternatives: [
            { label: "premium", name: "The Very Good Nursing Bra", price: "$82.00", note: "Pure 100% cotton with no elastane — the closest thing to a fully plastic-free nursing bra.", url: "https://theverygoodbra.com/products/cotton-nursing-bra" }
          ]
        },
        { name: "Postpartum Pads & Underwear",
          why: "Most postpartum pads are synthetic materials against skin that is healing and more permeable than usual. Organic cotton is the gentler, cleaner choice.",
          topPick: { name: "LOLA 100% Organic Cotton Postpartum Pads 20-count", price: "$10.99", oneLiner: "100% organic cotton. The synthetic-free option for the most sensitive time your body will go through.", url: "https://amzn.to/42j2zmg" },
          alternatives: []
        },
        { name: "Postpartum Skincare",
          why: "Your skin is more permeable postpartum than at almost any other time in your life. What you put on it gets absorbed more readily — simple, plant-based ingredients are the only ones worth reaching for.",
          topPick: { name: "Earth Mama Organic Perineal Balm 2oz", price: "$11.69", oneLiner: "A plant-based herbal balm made specifically for postpartum healing. Nothing synthetic or harsh.", url: "https://amzn.to/4dY4Vhz" },
          alternatives: []
        }
      ]}
    ]
  },
  {
    id: "phase4", number: "04", title: "Newborn Essentials", subtitle: "Weeks 1–12",
    timeline: "Weeks 1–12", accent: "#7A8FA0", accentLight: "#ECF0F3", accentMid: "#A3B3BF",
    categoryCount: 8,
    description: "These are the everyday essentials for the early weeks. The products you'll reach for constantly — chosen so the last thing on your mind is what they're made of.",
    sections: [
      { name: "Soothing & Skin", categories: [
        { name: "Baby Wash / Cleanser",
          why: "Most baby washes contain synthetic surfactants and polymer thickeners — essentially liquid plastic — that go directly onto your baby's skin at every bath.",
          topPick: { name: "Dr. Bronner's Pure-Castile Liquid Soap (Baby Unscented)", price: "$17.17", oneLiner: "Pure plant oil castile soap. Unscented, undiluted, and free of every synthetic ingredient you'd want to avoid.", url: "https://amzn.to/4vE08ID" },
          alternatives: [
            { label: "also good", name: "Pipette Baby Shampoo + Wash Fragrance Free", price: "$14.50", note: "Plant-derived surfactants. A gentler lather for babies with sensitive skin.", url: "https://amzn.to/4tjAJlQ" }
          ]
        },
        { name: "Sponges & Washcloths",
          why: "Most baby washcloths are polyester microfiber — a plastic fabric that sheds particles with every wash and every use. Cotton is the straightforward alternative.",
          topPick: { name: "Burt's Bees Baby Infant Washcloths (3-pack)", price: "$7.46", oneLiner: "Pure cotton, nothing else. The simplest thing to wash a newborn with.", url: "https://amzn.to/3OgRY8h" },
          alternatives: [
            { label: "also good", name: "Kyte Baby Natural Sea Sponge", price: "$13.99", note: "Exceptionally soft, biodegradable, and completely plastic-free — just needs a little more care between uses.", url: "https://amzn.to/4sLREMV" }
          ]
        },
        { name: "Diaper Cream",
          why: "This goes on irritated, sensitive skin multiple times a day. Petroleum derivatives and synthetic additives have no place on a diaper rash. Plant-based ingredients do the same job without them.",
          topPick: { name: "Babo Botanicals Sensitive Baby Diaper Cream", price: "$15.00", oneLiner: "Plant-based diaper cream with 25% natural zinc oxide. Gentle enough for newborn skin, effective enough to create a barrier.", url: "https://amzn.to/4vG9zag" },
          alternatives: [
            { label: "also good", name: "Badger Baby Diaper Rash Cream", price: "$27", note: "Natural barrier cream with organic sunflower oil and beeswax.", url: "https://amzn.to/4tnIbN1" }
          ]
        },
        { name: "Baby Blankets & Burp Cloths",
          why: "Burp cloths and blankets are in constant contact with your baby's skin and face all day long. Most are polyester blends — natural cotton is the straightforward alternative.",
          topPick: { name: "Burt's Bees Baby Infant Burp Cloths (5-pack)", price: "$20.21", oneLiner: "100% cotton muslin. Soft, breathable, and versatile enough to use as a blanket, burp cloth, or light swaddle.", url: "https://amzn.to/4cjWr3b" },
          alternatives: [
            { label: "also good", name: "Comfy Cubs Muslin Burp Cloths (6-pack)", price: "$15.99", note: "6-layer, ultra absorbent 100% cotton.", url: "https://amzn.to/4mI6dzF" }
          ]
        },
        { name: "Teethers",
          why: "Pacifiers and teethers are in your baby's mouth for hours at a time. During teething, they're being gnawed on constantly. Food-grade silicone keeps that contact clean.",
          topPick: { name: "Moonjax Natural Rubber Baby Teething Toys", price: "$14.99", oneLiner: "100% natural rubber teether. Nothing harmful for the thing your baby will chew on constantly.", url: "https://amzn.to/48GeyxU" },
          alternatives: [
            { label: "also good", name: "Comotomo Silicone Baby Teether", price: "$6.29", note: "Soft silicone option. A different shape and feel — good for babies who prefer more give.", url: "https://www.walmart.com/ip/Comotomo-Silicone-Baby-Teether-Blue/28941288" }
          ]
        }
      ]},
      { name: "Feeding & Environment", categories: [
        { name: "Nursery Air Quality (HEPA)",
          why: "Your baby breathes nursery air for most of the day. The natural materials you've already chosen mean fewer synthetic fibers in that air — a HEPA filter takes care of the rest.",
          topPick: { name: "WINIX 5510 Air Purifier", price: "$179", oneLiner: "A true HEPA air purifier sized for a nursery. Quietly filters the air where your baby sleeps around the clock.", url: "https://amzn.to/3QiuY9u" },
          alternatives: [
            { label: "also good", name: "Coway Airmega AP-1512HH True HEPA Purifier", price: "$230", note: "Compact HEPA option with air quality monitoring.", url: "https://amzn.to/4dSUEmQ" }
          ]
        },
        { name: "Baby Food Prep & Storage",
          why: "You're putting care into what your baby eats. The containers and tools should match that — no plastic anywhere in the process.",
          topPick: { name: "OXO Tot Glass Baby Blocks Food Storage Containers", price: "$21.99", oneLiner: "A complete glass-based system for prepping and storing homemade baby food. Clean from prep to spoon.", url: "https://amzn.to/4mY8gQp" },
          alternatives: [
            { label: "also good", name: "WeeSprout Glass Baby Food Storage Jars (8-pack)", price: "$25.99", note: "If you prefer a different size or shape — still glass.", url: "https://www.walmart.com/ip/WeeSprout-Glass-Baby-Food-Storage-Jars-w-Lids-8-oz-8-Pack-Set-Snack-Puree/17189656739" }
          ]
        }
      ]},
      { name: "Bath Time", categories: [
        { name: "Baby Towels",
          why: "The towel is the first thing that touches your baby after a clean bath. Most are synthetic blends — organic cotton is the natural finish to a bath time routine you've already made cleaner.",
          topPick: { name: "Burt's Bees Baby Infant Hooded Towels", price: "$26.95", oneLiner: "100% organic cotton terry. Soft, absorbent, and nothing synthetic against freshly washed skin.", url: "https://amzn.to/42lTRUg" },
          alternatives: [
            { label: "also good", name: "Aden + Anais Hooded Towel Set", price: "$24.99", note: "A thicker cotton option if you prefer more weight and coverage.", url: "https://www.bebeprecious.com/hide-and-sea-hooded-towel-set-towel-washcloth-sets-by-aden-and-anais/" }
          ]
        }
      ]}
    ]
  },
  {
    id: "phase5", number: "05", title: "As They Grow", subtitle: "Months 3–12",
    timeline: "Months 3–12", accent: "#8B9978", accentLight: "#EFF2EA", accentMid: "#B0BB9E",
    categoryCount: 11,
    description: "They're moving, grabbing, and exploring everything in reach. These are the picks for a baby who's out in the world now, chosen so that everything they touch, chew, and eat from is as clean as possible.",
    sections: [
      { name: "Play & Floor Time", categories: [
        { name: "Play Mat",
          why: "A play mat is what your baby lies, rolls, and eventually crawls on for hours every day. Most play mats are foam and plastic. Natural materials make that foundation a cleaner one.",
          topPick: { name: "MakeMake Organics Organic Play Mat", price: "$98", oneLiner: "100% organic cotton play mat. A soft, natural surface for the place your baby will spend most of their floor time.", url: "https://amzn.to/4ezXg9m" },
          alternatives: [
            { label: "also good", name: "Piccalio Play Mat", price: "$189", note: "A different size and shape. Same organic cotton standard.", url: "https://piccalio.com/products/play-mat" }
          ]
        },
        { name: "Toys (0–12 months)",
          why: "Most soft toys are polyester inside and out — essentially two layers of plastic your baby is sleeping with, chewing on, and dragging everywhere. Natural fill and fabric keep the thing your baby loves most clean.",
          topPick: { name: "Organic Cotton Blue Teddy Bear Plush", price: "$22.49", oneLiner: "Organic cotton stuffed toy. Soft, safe, and the kind of thing that becomes a favorite without a piece of plastic in it.", url: "https://amzn.to/4mNcQRq" },
          alternatives: [
            { label: "premium", name: "SENGER Animal Baby - Teddy Bear", price: "$63.00", note: "Hand-crafted wool, naturally dyed. The kind of toy that gets kept forever.", url: "https://blossomandpear.com" }
          ]
        },
        { name: "Baby Activity Gym",
          why: "Activity gyms fly under the radar when it comes to plastic. They look natural on the surface, but most have plastic or synthetic materials hidden in the structure and attachments.",
          topPick: { name: "Snuggleme Play Gym", price: "$129.99", oneLiner: "100% cotton from the frame to the toys. Soft sounds, bright textures, and nothing synthetic for curious hands and mouths.", url: "https://snugglemeorganic.com/products/play-gym" },
          alternatives: [
            { label: "also good", name: "Simre Kids Foldable Baby Gym", price: "$127.67", note: "Natural wood frame and toys, foldable for easy storage.", url: "https://simrekids.com/products/personalizable-foldable-baby-gym-100-organic-cotton-padded-play-mat-hanging-toys-baby-activity-center-frame-activity-center-new-born-gift" }
          ]
        },
        { name: "Bath Toys",
          why: "That cute rubber ducky? Most aren't rubber at all — they're PVC, shedding microplastics directly into your baby's bath water. Solid silicone is the cleaner option.",
          topPick: { name: "Ubbi Squeeze and Switch Silicone Bath Toys (Set of 3)", price: "$9.99", oneLiner: "Food-grade silicone bath toys. Nothing to trap water, easy to clean.", url: "https://amzn.to/3QB4FLH" },
          alternatives: [
            { label: "also good", name: "Haakaa Dinky Splash Duck Silicone Bath Toy", price: "$21.99", note: "A silicone take on the classic rubber duck. Same iconic shape, completely plastic-free.", url: "https://amzn.to/3QmjYb7" }
          ]
        }
      ]},
      { name: "Meal Time", categories: [
        { name: "Baby Utensils",
          why: "Baby utensils go directly into your baby's mouth at every meal — stainless steel options are widely available, affordable, and one of the simplest changes on the list.",
          topPick: { name: "Avanchy Infant Baby Spoons Stainless Steel and Silicone Set", price: "$13.99", oneLiner: "Food-grade stainless steel with a soft silicone handle for easy gripping. Safe for early self-feeding.", url: "https://amzn.to/4cX5IOQ" },
          alternatives: [
            { label: "also good", name: "PandaEar Baby Toddler Fork and Spoon Set (6-pack)", price: "$7.78", note: "Smaller stainless steel heads with a silicone handle — easier for little hands.", url: "https://amzn.to/4ezk21a" }
          ]
        },
        { name: "Sippy Cups",
          why: "Most sippy cups have plastic — and they go everywhere with your baby, get dropped, chewed on, and filled multiple times a day. Stainless steel and silicone are the straightforward upgrades.",
          topPick: { name: "Pura Kiki Stainless Steel Insulated Sippy Bottle", price: "$39.98", oneLiner: "Stainless steel sippy cup with a padded sleeve. Keeps drinks cold, nothing leaching in, built to survive being thrown.", url: "https://amzn.to/4tXAmxb" },
          alternatives: [
            { label: "also good", name: "Mushie 100% Silicone Training Cup & Straw", price: "$16.99", note: "Softer and more flexible for babies who are still getting the hang of it.", url: "https://amzn.to/3QlMmdw" }
          ]
        },
        { name: "Baby Bib",
          why: "A bib is one of those things you buy without thinking about it. Most are synthetic fabric against your baby's skin at every meal. Organic cotton is the easy upgrade.",
          topPick: { name: "Burt's Bees Baby Organic Baby Bibs", price: "$22.46", oneLiner: "100% organic cotton bib. Soft against your baby's chin and chest for every meal.", url: "https://amzn.to/4vGQF39" },
          alternatives: [
            { label: "also good", name: "Green Sprouts Muslin Bibs (5-count)", price: "$21.99", note: "For heavy droolers. 4 absorbent layers, 100% organic cotton muslin.", url: "https://amzn.to/4tlpwBd" }
          ]
        },
        { name: "High Chair",
          why: "High chairs are one of the trickiest categories. The tray is the problem — every high chair on the market has a plastic one. Our pick skips it entirely, designed to sit at your dinner table instead.",
          topPick: { name: "Stokke Tripp Trapp High Chair", price: "$279.20", oneLiner: "Solid wood high chair with adjustable heights, designed to sit at your dinner table. The cleanest solution to the plastic tray problem.", url: "https://amzn.to/4cp7t7p" },
          alternatives: [
            { label: "tray fix", name: "Ahimsa Essential Compartments Tray", price: "$14.00", note: "If a tray is non-negotiable, stainless steel keeps your baby's food off the plastic.", url: "https://ahimsahome.com/products/essentials-stainless-steel-compartment-tray" }
          ]
        }
      ]},
      { name: "On the Go", categories: [
        { name: "Car Seat Liner",
          why: "Most car seats are synthetic fabric your baby sits against on every trip. A cotton liner is the easy, affordable way to change that without replacing the seat.",
          topPick: { name: "Niko Easy-Wash Children's Car Seat Cover & Liner", price: "$49.99", oneLiner: "Fully plastic-free car seats don't exist yet. An organic cotton liner is the best way to keep what touches your baby natural.", url: "https://amzn.to/4e1iBbD" },
          alternatives: [
            { label: "also good", name: "Little Unicorn Baby Car Seat Canopy", price: "$39.99", note: "Soft and breathable muslin fabric canopy cover.", url: "https://amzn.to/4sIvjQb" }
          ]
        },
        { name: "Stroller / Stroller Liner",
          why: "Most strollers are synthetic fabric from seat to hood. The AngelCab is the rare option built from natural materials — but an organic cotton liner gets you most of the way there.",
          topPick: { name: "AngelCab Stroller U3 Series Pacific Nature Wicker", price: "€1,847", oneLiner: "100% wool seat and hood, organic cotton inlay, natural wicker basket. Made in Germany with a 7-year guarantee.", url: "https://museumofmini.com/products/angelcab-stroller-u3-series-pacific-nature-wicker" },
          alternatives: [
            { label: "practical", name: "Bumbleride Organic Cotton Infant Insert", price: "$65", note: "Already have a stroller? An organic cotton liner is the practical way to add a natural layer.", url: "https://amzn.to/42lkFnK" },
            { label: "also good", name: "Desert Breeze Sheepskin Stroller Liner", price: "$79.49", note: "Silky soft sheepskin for natural temperature regulation.", url: "https://amzn.to/42iIIDN" }
          ]
        },
        { name: "Baby Sunscreen",
          why: "Conventional sunscreens absorb chemical filters into the skin. For a baby whose skin absorbs everything more readily, a mineral zinc oxide sunscreen that stays on the surface is the cleaner choice.",
          topPick: { name: "Thinkbaby SPF 50+ Baby Sunscreen", price: "$12.39", oneLiner: "Pure zinc oxide SPF 50. Mineral sunscreen in an aluminum tube with no plastic packaging.", url: "https://amzn.to/42kgCbf" },
          alternatives: [
            { label: "also good", name: "Badger Mineral Baby Sunscreen SPF 40", price: "$17.99", note: "A lighter mineral formula for everyday use. Same zinc oxide standard.", url: "https://amzn.to/4sXee5q" }
          ]
        }
      ]}
    ]
  },
  {
    id: "phase6", number: "06", title: "When You Get to It", subtitle: "The Rest of the Home",
    timeline: "Ongoing", accent: "#A09588", accentLight: "#F0EDEA", accentMid: "#C0B8AE",
    categoryCount: 5,
    description: "You've done the hard work. These are just a few more areas worth cleaning up when the time feels right.",
    sections: [
      { name: "", categories: [
        { name: "Laundry Microfiber Capture",
          why: "Most of what you're washing by now is natural fiber. But for the synthetic items still in the mix, every wash cycle releases microplastic fibers into the water supply. These intercept them at the source.",
          topPick: { name: "GUPPYFRIEND Washing Bag", price: "$34.95", oneLiner: "A washing bag that captures microfibers before they leave your machine. Every synthetic item you wash sheds — this catches what would otherwise go down the drain.", url: "https://guppyfriend.us/products/guppyfriend-washing-bag" },
          alternatives: [
            { label: "permanent", name: "Celsious Microfiber Filter", price: "$98", note: "Installs directly on your machine and captures microfibers automatically on every wash.", url: "https://celsious.com/products/planetcare-microfiber-filter" }
          ]
        },
        { name: "Vacuum with HEPA",
          why: "Microplastic particles and synthetic fibers settle on every surface in your home. A standard vacuum recirculates a portion back into the air. A true HEPA filter captures what gets picked up and keeps it there.",
          topPick: { name: "Shark Stratos Upright Vacuum with DuoClean", price: "$299", oneLiner: "A full-size vacuum with a true HEPA filter. Captures microplastic particles and synthetic fibers instead of recirculating them.", url: "https://amzn.to/4trgDWY" },
          alternatives: [
            { label: "compact", name: "AHNR Handheld HEPA Vacuum", price: "$36.98", note: "True HEPA filtration in a compact size for quick cleanups.", url: "https://amzn.to/3ODpIgb" }
          ]
        },
        { name: "Laundry Detergent",
          why: "Laundry detergent is one of those products where the packaging is half the problem. Most come in plastic jugs. Switching to powder in cardboard quietly removes a surprising amount of plastic.",
          topPick: { name: "Meliora Laundry Powder", price: "$20.99", oneLiner: "Plant-based laundry powder in cardboard packaging. Cleans effectively with none of the synthetic additives in conventional detergent.", url: "https://meliorameansbetter.com/products/laundry-powder-detergent" },
          alternatives: []
        },
        { name: "Cleaning Supplies",
          why: "Most household cleaners are synthetic chemicals in plastic bottles. What you clean your floors and surfaces with ends up in the air and on everything your baby touches.",
          topPick: { name: "Branch Basics Fragrance-Free All Purpose Cleaner", price: "$4.99", oneLiner: "Concentrated plant-based cleaner that replaces everything. No synthetic chemicals, no single-use plastic bottles.", url: "https://www.target.com/p/branch-basics-fragrance-free-all-purpose-cleaner-16-fl-oz/-/A-93319104" },
          alternatives: [
            { label: "also good", name: "Blue Land Pop-Up Sponge", price: "$12", note: "A natural fiber sponge. No synthetic material scrubbing surfaces your baby will touch.", url: "https://blueland.com/products/pop-up-sponge" },
            { label: "also good", name: "Wool Shop 22in Lamb's Wool Mega Mop", price: "$38.91", note: "A wool mop. Natural fiber, no synthetic mop head shedding microfibers across your floors.", url: "https://homedepot.com/p/Wool-Shop-22-in-Lamb-s-Wool-Mega-Mop-HLSM518/202204919" }
          ]
        },
        { name: "Shower Curtain",
          why: "The standard shower curtain setup is two layers of plastic — a synthetic curtain and a PVC liner. Hemp replaces both, and it actually performs better in a wet environment.",
          topPick: { name: "Bean Products Hemp Shower Curtain", price: "$119.95", oneLiner: "100% hemp shower curtain. No plastic liner needed — hemp naturally resists mildew and dries quickly on its own.", url: "https://beanproducts.com/products/hemp-shower-curtains" },
          alternatives: [
            { label: "also good", name: "Rawganique Organic Hemp Curtain", price: "$159", note: "Same natural hemp material in additional colors.", url: "https://rawganique.com/products/organic-hemp-shower-curtain-73-5-x-72-montebello" }
          ]
        }
      ]}
    ]
  }
];
