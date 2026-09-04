/* global PRODUCTS_DATA */
var ROOFING_BENDED_COLORS = [
  { name: 'Red', hex: '#c8102e' },
  { name: 'Blue', hex: '#1e40af' },
  { name: 'Green', hex: '#166534' },
  { name: 'White', hex: '#f8fafc' },
  { name: 'Beige', hex: '#d4b896' },
  { name: 'Brown', hex: '#5c4033' },
  { name: 'Gray', hex: '#6b7280' },
  { name: 'Wood Grain', hex: '#8b6914' },
  { name: 'Terracotta', hex: '#b3543a' },
  { name: 'Foamgreen', hex: '#a8f0cb' }
];

var SUPER_CRIMP_COLORS = [
  { name: 'Beige', hex: '#d4b896' }
];

window.PRODUCTS_DATA = {
  categories: {
    roofing: 'Roofing',
    decking: 'Steel Decking',
    bended: 'Bended Accessories',
    cladding: 'Cladding',
    cpurlins: 'C-Purlins',
    hardware: 'Hardware Accessories'
  },
  products: [
    {
      id: 'super-rib',
      name: 'Super Rib',
      category: 'roofing',
      description: 'Super Rib is a classic trapezoidal steel roofing profile with prominent ribs that provide excellent drainage and structural stiffness. It is widely used for industrial, commercial and agricultural buildings. The profile offers a traditional appearance and is available in a range of thicknesses and colors to suit various design and load requirements.',
      image: 'img/products/roofing/super_rib/super-rib-red.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Available Thickness': '0.4 mm, 0.5 mm, 0.6 mm',
        'Effective Coverage': '1060 mm',
        'Substrate': 'Galvalume 55',
        'Base Metal Type': 'Cold Rolled Steel - 320 MPa (46400 psi)',
        'Paint Coating': 'Standard Double Oven-Baked Epoxy Primer and High Grade Polyester Finish',
        'Coating': 'Top: 15 microns, Bottom: 7 microns (including primer)'
      }
    },
    {
      id: 'super-corr',
      name: 'Super Corr',
      category: 'roofing',
      description: 'Super Corr is a corrugated steel roofing profile with a regular wave pattern. It provides strong weather resistance and is commonly used for sheds, garages, and agricultural structures. The corrugations add rigidity and allow efficient water runoff while keeping weight low.',
      image: 'img/products/roofing/super_corr/super-corr-red.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Available Thickness': '0.4 mm, 0.5 mm, 0.6 mm',
        'Effective Coverage': '1060 mm',
        'Substrate': 'Galvalume 55',
        'Base Metal Type': 'Cold Rolled Steel - 320 MPa (46400 psi)',
        'Paint Coating': 'Standard Double Oven-Baked Epoxy Primer and High Grade Polyester Finish',
        'Coating': 'Top: 15 microns, Bottom: 7 microns (including primer)'
      }
    },
    {
      id: 'super-tile',
      name: 'Super Tile',
      category: 'roofing',
      description: 'Super Tile is a steel roofing profile designed to mimic the appearance of traditional roof tiles. It offers the durability and longevity of steel with an aesthetic suited to residential and commercial applications. The profile provides good drainage and is available in colors that complement tile-style architecture.',
      image: 'img/products/roofing/super_tile/super-tile-red.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Available Thickness': '0.4 mm, 0.5 mm, 0.6 mm',
        'Effective Coverage': '1060 mm',
        'Substrate': 'Galvalume 55',
        'Base Metal Type': 'Cold Rolled Steel - 320 MPa (46400 psi)',
        'Paint Coating': 'Standard Double Oven-Baked Epoxy Primer and High Grade Polyester Finish',
        'Coating': 'Top: 15 microns, Bottom: 7 microns (including primer)'
      }
    },
    {
      id: 'super-crimp',
      name: 'Super Crimp',
      category: 'roofing',
      description: 'Super Crimp is a narrow-profile steel roofing sheet with a crimped or folded pattern. It is often used for verandahs, carports, and lean-tos where a compact profile and clean lines are desired. The crimped design adds stiffness and helps with runoff.',
      image: 'img/products/roofing/super_crimp/super-crimp-beige.webp',
      colors: SUPER_CRIMP_COLORS,
      specs: {
        'Available Thickness': '0.6 mm',
        'Effective Coverage': '1060 mm',
        'Substrate': 'Galvalume 55',
        'Base Metal Type': 'Cold Rolled Steel - 320 MPa (46400 psi)',
        'Paint Coating': 'Standard Double Oven-Baked Epoxy Primer and High Grade Polyester Finish',
        'Coating': 'Top: 15 microns, Bottom: 7 microns (including primer)'
      }
    },
    {
      id: 'super-deck-1',
      name: 'Super Deck - 1',
      category: 'decking',
      description: 'Super Deck - 1 is a structural steel floor or roof deck profile with a re-entrant rib design. It is used in composite and non-composite construction for commercial and industrial buildings. The profile provides high load capacity and can be used with concrete fill or as formwork.',
      image: 'img/products/decking/super-deck-1.webp',
      colors: [],
      specs: {
        'Thickness': '0.75 mm – 1.20 mm',
        'Effective Width': '600 mm',
        'Span': 'Up to 3.0 m (varies with gauge and loading)',
        'Base Metal Type': 'Galvanized or Galvalume steel',
        'Coating': 'G60 galvanized or AZ150'
      }
    },
    {
      id: 'super-deck-2',
      name: 'Super Deck - 2',
      category: 'decking',
      description: 'Super Deck - 2 is a deeper structural deck profile for longer spans and heavier loads. It is suitable for floor and roof applications where greater stiffness and load capacity are required. The profile is commonly used in multi-storey and industrial structures.',
      image: 'img/products/decking/super-deck-2.webp',
      colors: [],
      specs: {
        'Thickness': '0.90 mm – 1.50 mm',
        'Effective Width': '600 mm',
        'Span': 'Up to 4.5 m (varies with gauge and loading)',
        'Base Metal Type': 'Galvanized or Galvalume steel',
        'Coating': 'G60 galvanized or AZ150'
      }
    },
    {
      id: 'plainsheet',
      name: 'Plainsheet',
      category: 'bended',
      description: 'Plainsheet is flat or minimally profiled steel sheet used for roofing, bended accessories, linings, and custom fabrications. It can be formed into gutters, flashings, and trim. Available only in 0.4 mm, 0.5 mm, and 0.6 mm thicknesses.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Galvanized or pre-painted steel',
        'Standard Length': '2.4 m – 6.0 m (or as required)',
        'Finish/Coating': 'Z275 galvanized or polyester paint'
      }
    },
    {
      id: 'gutter',
      name: 'Gutter',
      category: 'bended',
      description: 'Steel gutter sections for roof drainage. Formed from pre-painted or galvanized steel for durability and corrosion resistance. Available in standard profiles to suit residential and commercial roofing.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted or galvanized steel',
        'Standard Length': '3.0 m – 6.0 m',
        'Finish/Coating': 'Polyester or Z275 galvanized'
      }
    },
    {
      id: 'flashing-gutter',
      name: 'Flashing Gutter',
      category: 'bended',
      description: 'Flashing gutter combines gutter and flashing in one component for use at roof edges and parapets. It provides a clean transition and directs water into the gutter system while sealing the junction.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted or galvanized steel',
        'Standard Length': '2.4 m – 6.0 m',
        'Finish/Coating': 'Polyester or galvanized'
      }
    },
    {
      id: 'end-flashing',
      name: 'End Flashing',
      category: 'bended',
      description: 'End flashing is used to seal and weatherproof the ends of roofing sheets and at wall abutments. It prevents water ingress and provides a finished edge. Formed to match common roof profiles.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted or galvanized steel',
        'Standard Length': 'As required per sheet width',
        'Finish/Coating': 'Polyester or galvanized'
      }
    },
    {
      id: 'fascia',
      name: 'Fascia',
      category: 'bended',
      description: 'Steel fascia board trim for roof edges. Provides a clean finish and protects the rafter ends. Available in colors to match roofing and gutter systems.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted steel',
        'Standard Length': '3.0 m – 6.0 m',
        'Finish/Coating': 'Polyester'
      }
    },
    {
      id: 'fascia-flashing',
      name: 'Fascia Flashing',
      category: 'bended',
      description: 'Fascia flashing is used at the junction between the roof sheet and the fascia. It directs water into the gutter and prevents backflow or capillary action at the edge.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted or galvanized steel',
        'Standard Length': '2.4 m – 6.0 m',
        'Finish/Coating': 'Polyester or galvanized'
      }
    },
    {
      id: 'wall-flashing',
      name: 'Wall Flashing',
      category: 'bended',
      description: 'Wall flashing is used at the junction between roof and wall (abutment). It prevents water from entering the building and is typically stepped or counter-flashed for durability.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted or galvanized steel',
        'Standard Length': '2.4 m – 6.0 m',
        'Finish/Coating': 'Polyester or galvanized'
      }
    },
    {
      id: 'moulding',
      name: 'Moulding',
      category: 'bended',
      description: 'Steel moulding trim for internal and external corners, reveals, and decorative edges. Used with cladding and lining systems to achieve a finished appearance.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted or galvanized steel',
        'Standard Length': '2.4 m – 6.0 m',
        'Finish/Coating': 'Polyester or galvanized'
      }
    },
    {
      id: 'wall-angle',
      name: 'Wall Angle',
      category: 'bended',
      description: 'Wall angle (angle trim) is used at internal and external corners of wall cladding and for supporting ceiling linings. Provides a straight edge and fixing point for panels.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Galvanized or pre-painted steel',
        'Standard Length': '2.4 m – 6.0 m',
        'Finish/Coating': 'Z275 galvanized or polyester'
      }
    },
    {
      id: 'furring',
      name: 'Furring',
      category: 'bended',
      description: 'Furring channels are used to create a cavity or level surface for cladding and linings. They support insulation and provide a fixing base for internal or external panels.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Galvanized steel',
        'Standard Length': '2.4 m – 6.0 m',
        'Finish/Coating': 'Z275 galvanized'
      }
    },
    {
      id: 'louvers',
      name: 'Louvers',
      category: 'bended',
      description: 'Steel louver blades or panels for ventilation and screening. Used in plant rooms, facades, and enclosures where airflow and weather protection are required.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted or galvanized steel',
        'Dimensions': 'Blade spacing and angle to order',
        'Finish/Coating': 'Polyester or galvanized'
      }
    },
    {
      id: 'bended-cladding',
      name: 'Cladding',
      category: 'bended',
      description: 'Bended cladding refers to custom-formed steel cladding panels from our bended range. Used for feature walls, bulkheads, and tailored applications where standard profiles are not specified.',
      image: 'img/generated/steel-products.webp',
      colors: ROOFING_BENDED_COLORS,
      specs: {
        'Thickness': '0.4 mm – 0.6 mm',
        'Material': 'Pre-painted or galvanized steel',
        'Standard Length': 'As per order',
        'Finish/Coating': 'Polyester or galvanized'
      }
    },
    {
      id: 'cladding-1',
      name: 'Cladding - 1',
      category: 'cladding',
      description: 'Cladding - 1 is a plainsheet cladding panel for wall and roof applications. It provides a flat, clean appearance and is suitable for both internal and external use with appropriate finish.',
      image: 'img/generated/steel-products.webp',
      colors: [
        { name: 'Slate Grey', hex: '#5a6573' },
        { name: 'Monument', hex: '#4a4a4a' },
        { name: 'Surfmist', hex: '#e8e5e0' }
      ],
      specs: {
        'Available Thickness': '0.4 mm – 0.6 mm',
        'Effective Coverage': 'As per sheet width',
        'Base Metal Type': 'AZ150 Galvalume',
        'Substrate': 'Aluminium-zinc alloy coated steel',
        'Paint Coating': 'Polyester',
        'Rainfall Capacity': 'Refer to fixing and span details'
      }
    },
    {
      id: 'cladding-2',
      name: 'Cladding - 2',
      category: 'cladding',
      description: 'Cladding - 2 is a plainsheet cladding option with a different gauge or finish range. Suited to feature walls, linings, and areas where a flat profile is specified.',
      image: 'img/generated/steel-products.webp',
      colors: [
        { name: 'Slate Grey', hex: '#5a6573' },
        { name: 'Monument', hex: '#4a4a4a' },
        { name: 'Terracotta', hex: '#b3543a' }
      ],
      specs: {
        'Available Thickness': '0.4 mm – 0.6 mm',
        'Effective Coverage': 'As per sheet width',
        'Base Metal Type': 'AZ150 Galvalume',
        'Substrate': 'Aluminium-zinc alloy coated steel',
        'Paint Coating': 'Polyester or PVDF',
        'Rainfall Capacity': 'Refer to fixing and span details'
      }
    },
    {
      id: 'cladding-3',
      name: 'Cladding - 3',
      category: 'cladding',
      description: 'Cladding - 3 is a plainsheet cladding panel for walls and roofing. Offers a smooth face for contemporary builds and can be used in combination with other profiles.',
      image: 'img/generated/steel-products.webp',
      colors: [
        { name: 'Surfmist', hex: '#e8e5e0' },
        { name: 'Shale Grey', hex: '#6b6f73' }
      ],
      specs: {
        'Available Thickness': '0.4 mm – 0.6 mm',
        'Effective Coverage': 'As per sheet width',
        'Base Metal Type': 'AZ150 Galvalume',
        'Substrate': 'Aluminium-zinc alloy coated steel',
        'Paint Coating': 'Polyester',
        'Rainfall Capacity': 'Refer to fixing and span details'
      }
    },
    {
      id: 'cladding-4',
      name: 'Cladding - 4',
      category: 'cladding',
      description: 'Cladding - 4 is a plainsheet cladding option for internal or external use. Suitable for feature areas and where a uniform, flat appearance is required.',
      image: 'img/generated/steel-products.webp',
      colors: [
        { name: 'Monument', hex: '#4a4a4a' },
        { name: 'Slate Grey', hex: '#5a6573' }
      ],
      specs: {
        'Available Thickness': '0.4 mm – 0.6 mm',
        'Effective Coverage': 'As per sheet width',
        'Base Metal Type': 'AZ150 Galvalume',
        'Substrate': 'Aluminium-zinc alloy coated steel',
        'Paint Coating': 'Polyester',
        'Rainfall Capacity': 'Refer to fixing and span details'
      }
    },
    {
      id: 'cladding-longspan',
      name: 'Cladding (Longspan)',
      category: 'cladding',
      description: 'Longspan cladding is a profiled steel cladding system for walls and roofs where long sheet lengths reduce joints and speed installation. The profile provides stiffness and weather resistance over extended spans.',
      image: 'img/generated/steel-products.webp',
      colors: [
        { name: 'Slate Grey', hex: '#5a6573' },
        { name: 'Monument', hex: '#4a4a4a' },
        { name: 'Surfmist', hex: '#e8e5e0' },
        { name: 'Terracotta', hex: '#b3543a' }
      ],
      specs: {
        'Available Thickness': '0.4 mm – 0.6 mm',
        'Effective Coverage': '600 mm – 1000 mm (profile dependent)',
        'Base Metal Type': 'AZ150 Galvalume',
        'Substrate': 'Aluminium-zinc alloy coated steel',
        'Paint Coating': 'Polyester or PVDF',
        'Rainfall Capacity': 'Suitable for standard rainfall; refer to span tables'
      }
    },
    {
      id: '2x3-cpurlin',
      name: '2" x 3"',
      category: 'cpurlins',
      description: 'C-Purlin 2" x 3" is a cold-formed galvanized steel C-section for roof and wall support. Used as secondary structural members in metal building systems. Suitable for lighter loads and shorter spans.',
      image: 'img/products/purlins/c-purlins-2.webp',
      thumbnailImage: 'img/products/purlins/c-purlins.webp',
      colors: [],
      specs: {
        'Section Size': '2" x 3" (51 mm x 76 mm)',
        'Gauge/Thickness': '16 ga (1.52 mm) – 14 ga (1.90 mm)',
        'Material': 'Galvanized steel G90',
        'Yield Strength': '345 MPa minimum',
        'Standard Lengths': '4.0 m – 12.0 m (or as ordered)'
      }
    },
    {
      id: '2x4-cpurlin',
      name: '2" x 4"',
      category: 'cpurlins',
      description: 'C-Purlin 2" x 4" is a cold-formed galvanized C-section for roof and wall purlins and girts. Offers higher load capacity than 2" x 3" and is commonly used in commercial and industrial framing.',
      image: 'img/products/purlins/c-purlins-2.webp',
      thumbnailImage: 'img/products/purlins/c-purlins.webp',
      colors: [],
      specs: {
        'Section Size': '2" x 4" (51 mm x 102 mm)',
        'Gauge/Thickness': '16 ga (1.52 mm) – 14 ga (1.90 mm)',
        'Material': 'Galvanized steel G90',
        'Yield Strength': '345 MPa minimum',
        'Standard Lengths': '4.0 m – 12.0 m (or as ordered)'
      }
    },
    {
      id: '2x6-cpurlin',
      name: '2" x 6"',
      category: 'cpurlins',
      description: 'C-Purlin 2" x 6" is the largest of the standard C-sections for heavier loads and longer spans. Used in industrial buildings, warehouses, and where higher wind or snow loads apply.',
      image: 'img/products/purlins/c-purlins-2.webp',
      thumbnailImage: 'img/products/purlins/c-purlins.webp',
      colors: [],
      specs: {
        'Section Size': '2" x 6" (51 mm x 152 mm)',
        'Gauge/Thickness': '14 ga (1.90 mm) – 12 ga (2.66 mm)',
        'Material': 'Galvanized steel G90',
        'Yield Strength': '345 MPa minimum',
        'Standard Lengths': '4.0 m – 12.0 m (or as ordered)'
      }
    },
    {
      id: 'tekscrew-steel',
      name: 'Tekscrew Steel',
      category: 'hardware',
      description: 'Self-drilling tekscrews for fixing steel roofing and cladding to steel purlins and structure. No pre-drilling required. Hex washer head for secure seating and weather resistance.',
      image: 'img/generated/steel-products.webp',
      colors: [],
      specs: {
        'Size': '#14 (6.3 mm shank)',
        'Length': '19 mm – 75 mm (as required)',
        'Head Type': 'Hex washer head',
        'Drive Type': 'Phillips or hex',
        'Material': 'Carbon steel, zinc plated or stainless'
      }
    },
    {
      id: 'tekscrew-wood',
      name: 'Tekscrew Wood',
      category: 'hardware',
      description: 'Self-drilling tekscrews for fixing steel roofing and cladding to timber battens and purlins. Sharp point and coarse thread for quick drive and strong hold in wood.',
      image: 'img/generated/steel-products.webp',
      colors: [],
      specs: {
        'Size': '#14 (6.3 mm shank)',
        'Length': '50 mm – 100 mm (as required)',
        'Head Type': 'Hex washer head',
        'Drive Type': 'Phillips or hex',
        'Material': 'Carbon steel, zinc plated'
      }
    },
    {
      id: 'blind-rivets',
      name: 'Blind Rivets',
      category: 'hardware',
      description: 'Blind rivets (pop rivets) for joining sheet metal and trim where access is from one side only. Used for flashings, trim, and non-structural connections.',
      image: 'img/generated/steel-products.webp',
      colors: [],
      specs: {
        'Diameter': '3.2 mm, 4.0 mm, 4.8 mm',
        'Grip Range': '4 mm – 12 mm (varies by size)',
        'Material': 'Aluminium or steel, plain or colored'
      }
    },
    {
      id: 'silicone-sealant',
      name: 'Silicone Sealant',
      category: 'hardware',
      description: 'Neutral cure silicone sealant for sealing joints in roofing and cladding, around flashings, and at penetrations. Weather and UV resistant.',
      image: 'img/generated/steel-products.webp',
      colors: [],
      specs: {
        'Color': 'Clear, black, grey, white',
        'Volume': '280 ml cartridge (or bulk)',
        'Cure Time': '24–48 hours full cure',
        'Use': 'Roof and wall joints, flashings, penetrations'
      }
    },
    {
      id: 'drillbit',
      name: 'Drill Bit',
      category: 'hardware',
      description: 'High-speed steel or cobalt drill bits for drilling steel purlins and structure when pre-drilling is required. Suitable for use with tekscrews or bolts.',
      image: 'img/generated/steel-products.webp',
      colors: [],
      specs: {
        'Diameter': '3 mm – 6 mm (common sizes for #14 tekscrews: 4.5 mm – 5 mm)',
        'Length': '75 mm – 150 mm',
        'Material/Type': 'HSS or cobalt, jobber length'
      }
    },
    {
      id: 'pe-foam-insulation',
      name: 'PE Foam Insulation',
      category: 'hardware',
      description: 'Polyethylene foam tape or strip used between steel roofing/cladding and purlins to reduce thermal bridging and condensation. Also used as a cushion and seal at overlaps.',
      image: 'img/generated/steel-products.webp',
      colors: [],
      specs: {
        'Thickness': '3 mm – 10 mm',
        'Width': '25 mm – 100 mm (strips or rolls)',
        'Thermal Resistance': 'R-value approx. 0.3–0.5 per 10 mm (varies by density); primarily for anti-condensation and cushioning'
      }
    }
  ]
};
