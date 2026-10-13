/**
 * ==============================================================================
 * DISEÑA TU PLATO SALUDABLE - LÓGICA DE APLICACIÓN (app.js)
 * Flujo Guiado Paso a Paso y Compatibilidad Inteligente ("Sin pensar")
 * ==============================================================================
 */

// 1. BASE DE DATOS DE ALIMENTOS LIMPIOS Y REALES
const FOOD_DATABASE = [
  // --- PROTEÍNAS CON GRASA NATURAL INTEGRADA (CUBREN PROTEÍNA + GRASA) ---
  {
    id: "pg_salmon",
    name: "Salmón fresco salvaje",
    emoji: "🍣",
    stepGroup: "main",
    macroType: "main_fatty",
    badgeLabel: "Proteína + Grasa",
    cleanTip: "Cocínalo en su propia grasa sin añadir aceite extra a fuego medio.",
    portion: "1 lomo (~150g). Cubre proteína y grasa del plato.",
    incompatibleWith: ["f_nueces", "f_almendras", "f_aguacate", "f_semillas", "f_aceitunas"],
    incompatibilityReason: "El salmón ya aporta sus grasas saludables (Omega-3). No mezclar con frutos secos ni aceites abundantes."
  },
  {
    id: "pg_huevos",
    name: "Huevos camperos enteros",
    emoji: "🍳",
    stepGroup: "main",
    macroType: "main_fatty",
    badgeLabel: "Proteína + Grasa",
    cleanTip: "Pochados o a la plancha con sartén antiadherente. La yema ya aporta la grasa.",
    portion: "2 huevos enteros medianos.",
    incompatibleWith: ["f_nueces", "f_almendras", "f_aguacate", "f_semillas", "f_aceitunas"],
    incompatibilityReason: "Las yemas de huevo ya cubren la grasa saludable. No necesitas añadir frutos secos ni grasa extra."
  },
  {
    id: "pg_sardinas",
    name: "Sardinas o Caballa fresca",
    emoji: "🐟",
    stepGroup: "main",
    macroType: "main_fatty",
    badgeLabel: "Proteína + Grasa",
    cleanTip: "Al horno con limón o a la plancha con sal marina.",
    portion: "3-4 sardinas (~150g). Pescado azul rico en omega-3.",
    incompatibleWith: ["f_nueces", "f_almendras", "f_aguacate", "f_semillas", "f_aceitunas"],
    incompatibilityReason: "Pescado azul denso en grasas antiinflamatorias: cuota de lípidos cubierta."
  },
  {
    id: "pg_ternera",
    name: "Lomo de ternera limpio",
    emoji: "🥩",
    stepGroup: "main",
    macroType: "main_fatty",
    badgeLabel: "Proteína + Grasa",
    cleanTip: "Sellado a la plancha vuelta y vuelta sin mantequillas añadidas.",
    portion: "Corte limpio (~140g). Grasa infiltrada natural.",
    incompatibleWith: ["f_nueces", "f_almendras", "f_aguacate", "f_semillas", "f_aceitunas"],
    incompatibilityReason: "La carne de ternera ya contiene suficiente grasa intramuscular natural."
  },
  {
    id: "pg_atun",
    name: "Atún rojo fresco en taco",
    emoji: "🐟",
    stepGroup: "main",
    macroType: "main_fatty",
    badgeLabel: "Proteína + Grasa",
    cleanTip: "Marcado 1 minuto por cada lado para mantener la jugosidad.",
    portion: "1 taco (~140g). Proteína marina densa.",
    incompatibleWith: ["f_nueces", "f_almendras", "f_aguacate", "f_semillas", "f_aceitunas"],
    incompatibilityReason: "Pescado azul graso: no requiere adición de frutos secos ni grasas densas."
  },

  // --- PROTEÍNAS MAGRAS (REQUIEREN GRASA SALUDABLE APARTE) ---
  {
    id: "p_pollo",
    name: "Pechuga de pollo campero",
    emoji: "🍗",
    stepGroup: "main",
    macroType: "main_lean",
    badgeLabel: "Proteína Magra",
    cleanTip: "A la plancha con limón, romero o curry suave. Cero ultraprocesados.",
    portion: "Palma de la mano (~130-150g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "p_pavo",
    name: "Solomillo de pavo limpio",
    emoji: "🦃",
    stepGroup: "main",
    macroType: "main_lean",
    badgeLabel: "Proteína Magra",
    cleanTip: "Al grill con pimienta y orégano. Muy digestivo y ligero.",
    portion: "Palma de la mano (~140g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "p_merluza",
    name: "Merluza o Bacalao fresco",
    emoji: "🐟",
    stepGroup: "main",
    macroType: "main_lean",
    badgeLabel: "Proteína Magra",
    cleanTip: "Al vapor con verduras o en papillote al horno con toque de ajo.",
    portion: "Filete mediano (~160-180g). Pescado blanco magro.",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "p_claras",
    name: "Claras de huevo / Revuelto",
    emoji: "🥚",
    stepGroup: "main",
    macroType: "main_lean",
    badgeLabel: "Proteína Magra",
    cleanTip: "En tortilla fina o revuelto ligero con espinacas y especias.",
    portion: "3-4 claras (~120g). Máximo valor biológico.",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "p_gambas",
    name: "Gambas o Langostinos",
    emoji: "🦐",
    stepGroup: "main",
    macroType: "main_lean",
    badgeLabel: "Proteína Magra",
    cleanTip: "A la plancha con ajo picado y perejil fresco.",
    portion: "8-10 piezas peladas (~130g). Proteína marina magra.",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "p_tofu",
    name: "Tofu firme natural",
    emoji: "🧊",
    stepGroup: "main",
    macroType: "main_lean",
    badgeLabel: "Proteína Magra Vegetal",
    cleanTip: "Prensado, marinado con soja baja en sal y dorado en sartén.",
    portion: "Bloque (~150g). Proteína vegetal limpia.",
    incompatibleWith: [],
    incompatibilityReason: ""
  },

  // --- BASE DE LEGUMBRES (CUBREN CARBOHIDRATO + PROTEÍNA VEGETAL) ---
  {
    id: "l_garbanzos",
    name: "Garbanzos tostados o hummus",
    emoji: "🧆",
    stepGroup: "main",
    macroType: "main_legume",
    badgeLabel: "Legumbre (HC + Proteína)",
    cleanTip: "Al horno con pimentón como snack crujiente o cocidos con verduras.",
    portion: "1 taza colmada (~160g cocidos).",
    incompatibleWith: ["c_arroz", "c_patata", "c_boniato", "c_pan"],
    incompatibilityReason: "Los garbanzos ya aportan tus carbohidratos complejos. Se descartan arroces y patatas para evitar exceso glucémico."
  },
  {
    id: "l_lentejas",
    name: "Lentejas pardinas",
    emoji: "🫘",
    stepGroup: "main",
    macroType: "main_legume",
    badgeLabel: "Legumbre (HC + Proteína)",
    cleanTip: "En ensalada fresca con hortalizas o estofadas con verduras sin embutidos.",
    portion: "1 taza cocidas (~160g). Rica en hierro y fibra saciante.",
    incompatibleWith: ["c_arroz", "c_patata", "c_boniato", "c_pan"],
    incompatibilityReason: "Las lentejas ya cubren tus hidratos y proteína vegetal. No necesitas arroz ni patata."
  },
  {
    id: "l_alubias",
    name: "Alubias blancas o negras",
    emoji: "🫘",
    stepGroup: "main",
    macroType: "main_legume",
    badgeLabel: "Legumbre (HC + Proteína)",
    cleanTip: "Cocidas con laurel, cebolla y pimientos en ensalada templada.",
    portion: "1 taza cocidas (~160g). Gran saciedad prebiótica.",
    incompatibleWith: ["c_arroz", "c_patata", "c_boniato", "c_pan"],
    incompatibilityReason: "Las alubias ya cubren la porción de carbohidratos. Se eliminan féculas adicionales."
  },

  // --- VERDURAS Y HORTALIZAS SIN ALMIDÓN (50% DEL PLATO) ---
  {
    id: "v_brocoli",
    name: "Brócoli al vapor",
    emoji: "🥦",
    stepGroup: "veggie",
    macroType: "veggie",
    badgeLabel: "Verdura (50%)",
    cleanTip: "Al vapor 4 minutos al dente para preservar su sulforafano.",
    portion: "Mitad del plato (~200g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "v_espinacas",
    name: "Espinacas baby",
    emoji: "🍃",
    stepGroup: "veggie",
    macroType: "veggie",
    badgeLabel: "Verdura (50%)",
    cleanTip: "Crudas en ensalada o salteadas con ajo laminado.",
    portion: "2 puñados grandes (~150g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "v_tomates",
    name: "Tomates cherry frescos",
    emoji: "🍅",
    stepGroup: "veggie",
    macroType: "veggie",
    badgeLabel: "Verdura (50%)",
    cleanTip: "Frescos o asados en sartén con romero y sal en escamas.",
    portion: "1 taza (~150g). Licopeno antioxidante.",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "v_calabacin",
    name: "Calabacín a la plancha",
    emoji: "🥒",
    stepGroup: "veggie",
    macroType: "veggie",
    badgeLabel: "Verdura (50%)",
    cleanTip: "En rodajas con orégano o en espirales tipo zoodles.",
    portion: "1 calabacín mediano (~200g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "v_esparragos",
    name: "Espárragos trigueros",
    emoji: "🥬",
    stepGroup: "veggie",
    macroType: "veggie",
    badgeLabel: "Verdura (50%)",
    cleanTip: "A la plancha a fuego vivo con sal marina.",
    portion: "1 manojo (~150g). Diurético y crujiente.",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "v_pimientos",
    name: "Pimientos asados",
    emoji: "🫑",
    stepGroup: "veggie",
    macroType: "veggie",
    badgeLabel: "Verdura (50%)",
    cleanTip: "Asados al horno y pelados, o salteados en tiras.",
    portion: "1 pimiento grande (~180g). Triple de vitamina C.",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "v_champinones",
    name: "Champiñones al ajillo",
    emoji: "🍄",
    stepGroup: "veggie",
    macroType: "veggie",
    badgeLabel: "Verdura (50%)",
    cleanTip: "Salteados con ajo fresco y perejil picado.",
    portion: "1 plato hondo (~180g). Sabor umami saciante.",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "v_rucula",
    name: "Rúcula y Canónigos",
    emoji: "🥗",
    stepGroup: "veggie",
    macroType: "veggie",
    badgeLabel: "Verdura (50%)",
    cleanTip: "Base verde crujiente para ensaladas con hojas amargas digestivas.",
    portion: "2 puñados colmados (~100g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },

  // --- CARBOHIDRATOS COMPLEJOS / GRANOS ENTEROS (20%) ---
  {
    id: "c_boniato",
    name: "Boniato / Batata asada",
    emoji: "🍠",
    stepGroup: "carb",
    macroType: "carb",
    badgeLabel: "Hidrato Complejo",
    cleanTip: "Asado al horno con piel. Su dulzor natural evita cualquier salsa.",
    portion: "1 puño cerrado (~130g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "c_arroz",
    name: "Arroz basmati o integral",
    emoji: "🍚",
    stepGroup: "carb",
    macroType: "carb",
    badgeLabel: "Hidrato Complejo",
    cleanTip: "Hervido al dente con hoja de laurel y diente de ajo.",
    portion: "1 taza pequeña cocido (~120g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "c_patata",
    name: "Patata al vapor (enfriada)",
    emoji: "🥔",
    stepGroup: "carb",
    macroType: "carb",
    badgeLabel: "Hidrato Complejo",
    cleanTip: "Cocida y enfriada en nevera 12h: genera almidón resistente que nutre tu microbiota.",
    portion: "1 patata mediana (~130g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "c_quinoa",
    name: "Quinoa real cocida",
    emoji: "🌾",
    stepGroup: "carb",
    macroType: "carb",
    badgeLabel: "Pseudocereal Complejo",
    cleanTip: "Cocida con caldo vegetal suave en proporción 2:1.",
    portion: "1 puño cerrado (~130g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "c_pan",
    name: "Pan 100% integral masa madre",
    emoji: "🍞",
    stepGroup: "carb",
    macroType: "carb",
    badgeLabel: "Grano Entero",
    cleanTip: "Harina de grano completo sin refinar, agua, masa madre y sal.",
    portion: "1 rebanada gruesa (~50g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },

  // --- GRASAS SALUDABLES (10%) ---
  {
    id: "f_aove",
    name: "Aceite de Oliva Virgen Extra",
    emoji: "🫒",
    stepGroup: "fat",
    macroType: "fat",
    badgeLabel: "Grasa Saludable",
    cleanTip: "En crudo sobre la verdura al momento de servir.",
    portion: "1 cucharada sopera (~10-15ml).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "f_aguacate",
    name: "Aguacate fresco",
    emoji: "🥑",
    stepGroup: "fat",
    macroType: "fat",
    badgeLabel: "Grasa Monoinsaturada",
    cleanTip: "En láminas frescas con una pizca de sal y zumo de lima.",
    portion: "1/4 a 1/3 de aguacate mediano (~40g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "f_nueces",
    name: "Nueces crudas de California",
    emoji: "🥜",
    stepGroup: "fat",
    macroType: "fat",
    badgeLabel: "Frutos Secos Crudos",
    cleanTip: "Crudas, sin freír ni salar. Ácidos grasos esenciales.",
    portion: "4-5 medias nueces (~15-20g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "f_almendras",
    name: "Almendras crudas",
    emoji: "🌰",
    stepGroup: "fat",
    macroType: "fat",
    badgeLabel: "Frutos Secos Crudos",
    cleanTip: "Crudas o ligeramente tostadas en sartén sin aceite añadido.",
    portion: "10-12 almendras (~15g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "f_semillas",
    name: "Semillas de chía y lino",
    emoji: "🌾",
    stepGroup: "fat",
    macroType: "fat",
    badgeLabel: "Grasa + Fibra",
    cleanTip: "Trituradas o hidratadas sobre la verdura para absorber omega 3.",
    portion: "1 cucharadita de postre (~10g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  },
  {
    id: "f_aceitunas",
    name: "Aceitunas naturales aliñadas",
    emoji: "🫒",
    stepGroup: "fat",
    macroType: "fat",
    badgeLabel: "Fermentado Natural",
    cleanTip: "Con hueso y aliño tradicional de hierbas, sin conservantes químicos.",
    portion: "6-8 aceitunas medianas (~30g).",
    incompatibleWith: [],
    incompatibilityReason: ""
  }
];

// 2. RECETAS DEL CHEF (IDEAS YA BALANCEADAS)
const CHEF_PRESETS = [
  {
    title: "Salmón Noruego con Boniato y Brócoli",
    subtitle: "Proteína grasa: frutos secos descartados automáticamente",
    icon: "🍣",
    foods: {
      main: "pg_salmon",
      veggie: "v_brocoli",
      carb: "c_boniato",
      fat: null
    }
  },
  {
    title: "Pollo al Limón con Arroz y Rúcula",
    subtitle: "Proteína magra: requiere AOVE o aguacate para cubrir el 10%",
    icon: "🍗",
    foods: {
      main: "p_pollo",
      veggie: "v_rucula",
      carb: "c_arroz",
      fat: "f_aove"
    }
  },
  {
    title: "Huevos Camperos con Tostada y Espinacas",
    subtitle: "Huevos con grasa natural: sin frutos secos extra",
    icon: "🍳",
    foods: {
      main: "pg_huevos",
      veggie: "v_espinacas",
      carb: "c_pan",
      fat: null
    }
  },
  {
    title: "Bowl de Garbanzos, Pimientos y Aguacate",
    subtitle: "Legumbre base: arroces descartados por duplicidad de hidrato",
    icon: "🧆",
    foods: {
      main: "l_garbanzos",
      veggie: "v_pimientos",
      carb: null,
      fat: "f_aguacate"
    }
  },
  {
    title: "Lomo de Ternera con Patata y Espárragos",
    subtitle: "Carne con grasa propia + patata resistente",
    icon: "🥩",
    foods: {
      main: "pg_ternera",
      veggie: "v_esparragos",
      carb: "c_patata",
      fat: null
    }
  }
];

// 3. ESTADO GLOBAL DE LA APLICACIÓN
const AppState = {
  currentStep: "main", // "main" | "veggie" | "carb" | "fat"
  selectedFoods: {
    main: null,
    veggie: null,
    carb: null,
    fat: null
  },
  hideIncompatible: true
};

// ==============================================================================
// INICIALIZACIÓN
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderChefRecipes();
  setupEventListeners();
  updateFullUI();
});

// ==============================================================================
// REGLAS Y COMPATIBILIDAD DINÁMICA ("SIN PENSAR")
// ==============================================================================
function getCompatibilityRules() {
  const mainFood = getFoodById(AppState.selectedFoods.main);

  const rules = {
    isFattyMain: false,
    isLegumeMain: false,
    isLeanMain: false,
    fatSatisfiedByMain: false,
    carbSatisfiedByMain: false,
    incompatibleFoodIds: []
  };

  if (!mainFood) {
    return rules;
  }

  if (mainFood.macroType === "main_fatty") {
    rules.isFattyMain = true;
    rules.fatSatisfiedByMain = true;
    rules.incompatibleFoodIds = mainFood.incompatibleWith || [];
  } else if (mainFood.macroType === "main_legume") {
    rules.isLegumeMain = true;
    rules.carbSatisfiedByMain = true;
    rules.incompatibleFoodIds = mainFood.incompatibleWith || [];
  } else if (mainFood.macroType === "main_lean") {
    rules.isLeanMain = true;
  }

  return rules;
}

// ==============================================================================
// ACTUALIZACIÓN COMPLETA DE LA INTERFAZ
// ==============================================================================
function updateFullUI() {
  const rules = getCompatibilityRules();

  // Si la grasa está satisfecha por el principal, limpiamos selección de grasa
  if (rules.fatSatisfiedByMain && AppState.selectedFoods.fat) {
    AppState.selectedFoods.fat = null;
  }
  // Si el carbohidrato está satisfecho por legumbres, limpiamos selección de carb
  if (rules.carbSatisfiedByMain && AppState.selectedFoods.carb) {
    AppState.selectedFoods.carb = null;
  }

  updatePlateSvg(rules);
  updateBalanceMeter(rules);
  updateSmartAlert(rules);
  updateWizardStepper(rules);
  renderStepOptions(rules);
  renderSelectedMacroSlots(rules);
}

// ==============================================================================
// DIBUJO DEL PLATO INTERACTIVO SVG
// ==============================================================================
function updatePlateSvg(rules) {
  const slicesGroup = document.getElementById("svgSlicesGroup");
  if (!slicesGroup) return;
  slicesGroup.innerHTML = "";

  const mainFood = getFoodById(AppState.selectedFoods.main);
  const veggieFood = getFoodById(AppState.selectedFoods.veggie);
  const carbFood = getFoodById(AppState.selectedFoods.carb);
  const fatFood = getFoodById(AppState.selectedFoods.fat);

  let slices = [];

  // SI NO HAY ALIMENTO PRINCIPAL: Diagrama Base Genérico
  if (!mainFood) {
    slices = [
      { id: "veggie", percent: 50, color: "#16a34a", label: "Verduras", icon: "🥦", food: null },
      { id: "main", percent: 20, color: "#f97316", label: "Proteína", icon: "🥩", food: null },
      { id: "carb", percent: 20, color: "#eab308", label: "Hidratos", icon: "🍠", food: null },
      { id: "fat", percent: 10, color: "#0ea5e9", label: "Grasa", icon: "🥑", food: null }
    ];
  } else if (rules.isFattyMain) {
    // VARIACIÓN PROTEÍNA GRASA: 50% Verduras, 30% Proteína+Grasa (Salmón), 20% Carbohidratos
    slices = [
      { id: "veggie", percent: 50, color: "#16a34a", label: "Verduras", icon: "🥦", food: veggieFood },
      { id: "main", percent: 30, color: "#f43f5e", label: "Proteína + Grasa", icon: "🐟", food: mainFood },
      { id: "carb", percent: 20, color: "#eab308", label: "Hidratos", icon: "🍠", food: carbFood }
    ];
  } else if (rules.isLegumeMain) {
    // VARIACIÓN LEGUMBRES: 50% Verduras, 35% Legumbres (HC+P), 15% Grasa/aliño
    slices = [
      { id: "veggie", percent: 50, color: "#16a34a", label: "Verduras", icon: "🥦", food: veggieFood },
      { id: "main", percent: 35, color: "#8b5cf6", label: "Legumbre (HC+P)", icon: "🫘", food: mainFood },
      { id: "fat", percent: 15, color: "#0ea5e9", label: "Grasa / Aliño", icon: "🥑", food: fatFood }
    ];
  } else {
    // PROTEÍNA MAGRA: 50% Verduras, 20% Proteína, 20% Hidratos, 10% Grasa
    slices = [
      { id: "veggie", percent: 50, color: "#16a34a", label: "Verduras", icon: "🥦", food: veggieFood },
      { id: "main", percent: 20, color: "#f97316", label: "Proteína", icon: "🍗", food: mainFood },
      { id: "carb", percent: 20, color: "#eab308", label: "Hidratos", icon: "🍠", food: carbFood },
      { id: "fat", percent: 10, color: "#0ea5e9", label: "Grasa", icon: "🥑", food: fatFood }
    ];
  }

  // Dimensiones del plato SVG: centro (200, 200), radio 168
  const cx = 200;
  const cy = 200;
  const radius = 168;

  // Empezar en -90° (12 horas). De -90° a +90° = 180° = 50% Verduras a la derecha
  let currentAngle = -90;

  slices.forEach((slice) => {
    const sweepAngle = (slice.percent / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sweepAngle;
    currentAngle += sweepAngle;

    const pathD = describeSvgArc(cx, cy, radius, startAngle, endAngle);

    // Centroide de texto e iconos
    const midAngle = startAngle + sweepAngle / 2;
    const textRadius = radius * 0.58;
    const rad = (midAngle * Math.PI) / 180;
    const tx = cx + textRadius * Math.cos(rad);
    const ty = cy + textRadius * Math.sin(rad);

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "plate-slice");
    g.setAttribute("data-zone-id", slice.id);
    g.setAttribute("role", "button");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("fill", slice.color);
    path.setAttribute("class", "slice-border");
    path.setAttribute("stroke", "#ffffff");
    path.setAttribute("stroke-width", "3");
    g.appendChild(path);

    // Pastilla translúcida central
    const badgeW = sweepAngle < 45 ? 65 : 84;
    const badgeH = 50;

    const badgeRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    badgeRect.setAttribute("x", tx - badgeW / 2);
    badgeRect.setAttribute("y", ty - badgeH / 2);
    badgeRect.setAttribute("width", badgeW);
    badgeRect.setAttribute("height", badgeH);
    badgeRect.setAttribute("class", "slice-badge-bg");
    badgeRect.setAttribute("rx", "12");
    g.appendChild(badgeRect);

    // Icono emoji
    const textEmoji = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textEmoji.setAttribute("x", tx);
    textEmoji.setAttribute("y", ty - 8);
    textEmoji.setAttribute("class", "slice-icon-emoji");
    textEmoji.textContent = slice.food ? slice.food.emoji : slice.icon;
    g.appendChild(textEmoji);

    // Texto de porcentaje
    const textPercent = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textPercent.setAttribute("x", tx);
    textPercent.setAttribute("y", ty + 12);
    textPercent.setAttribute("class", "slice-text-percent");
    textPercent.setAttribute("fill", slice.color);
    textPercent.textContent = `${slice.percent}%`;
    g.appendChild(textPercent);

    // Clic en la zona del plato: activa ese paso en el wizard
    g.addEventListener("click", () => {
      setWizardStep(slice.id);
    });

    slicesGroup.appendChild(g);
  });
}

function describeSvgArc(cx, cy, r, startAngle, endAngle) {
  if (endAngle - startAngle >= 359.9) {
    endAngle = startAngle + 359.9;
  }
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const x2 = cx + r * Math.cos(endRad);
  const y2 = cy + r * Math.sin(endRad);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    "M", cx, cy,
    "L", x1, y1,
    "A", r, r, 0, largeArcFlag, 1, x2, y2,
    "Z"
  ].join(" ");
}

// ==============================================================================
// BARRA DE BALANCE DE MACROS
// ==============================================================================
function updateBalanceMeter(rules) {
  const bar = document.getElementById("multiProgressBar");
  const percentLabel = document.getElementById("plateBalancePercent");
  const statusBadge = document.getElementById("plateStatusBadge");
  if (!bar || !percentLabel || !statusBadge) return;

  bar.innerHTML = "";

  const mainFood = getFoodById(AppState.selectedFoods.main);
  const veggieFood = getFoodById(AppState.selectedFoods.veggie);
  const carbFood = getFoodById(AppState.selectedFoods.carb);
  const fatFood = getFoodById(AppState.selectedFoods.fat);

  let currentPercent = 0;
  const segments = [];

  // Calcular porcentaje completado según modo
  if (veggieFood) {
    currentPercent += 50;
    segments.push({ percent: 50, color: "#16a34a" });
  }

  if (mainFood) {
    if (rules.isFattyMain) {
      currentPercent += 30; // Cubre 20% prote + 10% grasa
      segments.push({ percent: 30, color: "#f43f5e" });
    } else if (rules.isLegumeMain) {
      currentPercent += 35; // Cubre hidrato + proteina
      segments.push({ percent: 35, color: "#8b5cf6" });
    } else {
      currentPercent += 20;
      segments.push({ percent: 20, color: "#f97316" });
    }
  }

  if (carbFood && !rules.carbSatisfiedByMain) {
    currentPercent += 20;
    segments.push({ percent: 20, color: "#eab308" });
  }

  if (fatFood && !rules.fatSatisfiedByMain) {
    const p = rules.isLegumeMain ? 15 : 10;
    currentPercent += p;
    segments.push({ percent: p, color: "#0ea5e9" });
  }

  // Renderizar segmentos coloreados en la barra
  segments.forEach((seg) => {
    const el = document.createElement("div");
    el.className = "progress-seg";
    el.style.width = `${seg.percent}%`;
    el.style.backgroundColor = seg.color;
    bar.appendChild(el);
  });

  percentLabel.textContent = `${Math.min(currentPercent, 100)}% Completo`;

  if (!mainFood) {
    statusBadge.textContent = "⚪ Diagrama Base (Elige plato fuerte)";
  } else if (currentPercent >= 100) {
    statusBadge.textContent = "✨ 100% Plato Equilibrado y Limpio";
  } else {
    statusBadge.textContent = `⏳ En progreso (${currentPercent}%)`;
  }
}

// ==============================================================================
// MENSAJE DE ASESOR INTELIGENTE EN TIEMPO REAL
// ==============================================================================
function updateSmartAlert(rules) {
  const alertBox = document.getElementById("smartRuleAlert");
  const alertIcon = document.getElementById("ruleAlertIcon");
  const alertTitle = document.getElementById("ruleAlertTitle");
  const alertText = document.getElementById("ruleAlertText");
  if (!alertBox || !alertTitle || !alertText) return;

  const mainFood = getFoodById(AppState.selectedFoods.main);

  if (!mainFood) {
    alertBox.className = "smart-rule-alert alert-info";
    alertIcon.textContent = "💡";
    alertTitle.textContent = "Paso 1: Elige tu Alimento Principal";
    alertText.textContent = "Comienza con la base de tu plato. Si eliges salmón, huevos o ternera, descartaremos automáticamente frutos secos y grasas añadidas.";
    return;
  }

  if (rules.isFattyMain) {
    alertBox.className = "smart-rule-alert alert-warning";
    alertIcon.textContent = "🐟";
    alertTitle.textContent = `Grasas cubiertas por ${mainFood.name}`;
    alertText.textContent = `Al elegir ${mainFood.name} (proteína + grasa), tu plato no necesita frutos secos ni aceites abundantes. ¡Se han descartado automáticamente para no pensar!`;
  } else if (rules.isLegumeMain) {
    alertBox.className = "smart-rule-alert alert-warning";
    alertIcon.textContent = "🫘";
    alertTitle.textContent = `Carbohidratos cubiertos por ${mainFood.name}`;
    alertText.textContent = `Las legumbres ya aportan carbohidratos complejos y proteína vegetal. Hemos eliminado arroces y patatas para evitar duplicar hidratos.`;
  } else {
    alertBox.className = "smart-rule-alert";
    alertIcon.textContent = "🍗";
    alertTitle.textContent = `Proteína magra: ${mainFood.name}`;
    alertText.textContent = `Tu proteína no tiene grasa natural. Se habilitan los frutos secos, aguacate y AOVE para completar tu cuota del 10% de lípidos saludables.`;
  }
}

// ==============================================================================
// NAVEGADOR DE PASOS (STEPPER)
// ==============================================================================
function updateWizardStepper(rules) {
  const stepMain = document.getElementById("stepChipMain");
  const stepVeggie = document.getElementById("stepChipVeggie");
  const stepCarb = document.getElementById("stepChipCarb");
  const stepFat = document.getElementById("stepChipFat");

  const chips = [stepMain, stepVeggie, stepCarb, stepFat];
  chips.forEach(c => c && c.classList.remove("active", "completed", "locked"));

  // Paso 1: Principal
  if (AppState.selectedFoods.main) {
    stepMain.classList.add("completed");
  }

  // Paso 2: Verduras
  if (AppState.selectedFoods.veggie) {
    stepVeggie.classList.add("completed");
  }

  // Paso 3: Carbohidratos
  if (rules.carbSatisfiedByMain) {
    stepCarb.classList.add("locked");
    stepCarb.querySelector(".step-name").textContent = "🍠 Hidrato 🔒";
  } else {
    stepCarb.querySelector(".step-name").textContent = "🍠 Hidratos";
    if (AppState.selectedFoods.carb) stepCarb.classList.add("completed");
  }

  // Paso 4: Grasas
  if (rules.fatSatisfiedByMain) {
    stepFat.classList.add("locked");
    stepFat.querySelector(".step-name").textContent = "🥑 Grasa 🔒";
  } else {
    stepFat.querySelector(".step-name").textContent = "🥑 Grasa";
    if (AppState.selectedFoods.fat) stepFat.classList.add("completed");
  }

  // Marcar activo
  const activeChip = document.getElementById(`stepChip${capitalize(AppState.currentStep)}`);
  if (activeChip) activeChip.classList.add("active");

  // Actualizar textos de cabecera del paso
  const titleEl = document.getElementById("currentStepTitle");
  const descEl = document.getElementById("currentStepDesc");

  if (AppState.currentStep === "main") {
    titleEl.textContent = "Paso 1: Elige tu Alimento Principal";
    descEl.textContent = "Selecciona el plato fuerte. Esto determinará automáticamente qué otras opciones son compatibles.";
  } else if (AppState.currentStep === "veggie") {
    titleEl.textContent = "Paso 2: Añade tus Verduras (50% del plato)";
    descEl.textContent = "Base vegetal rica en fibra, agua y micronutrientes sin almidón. Te sacian y modulan la absorción.";
  } else if (AppState.currentStep === "carb") {
    if (rules.carbSatisfiedByMain) {
      titleEl.textContent = "Paso 3: Carbohidratos (Cubiertos por la legumbre)";
      descEl.textContent = "Tus legumbres ya aportan los carbohidratos necesarios. No se requieren arroces ni féculas.";
    } else {
      titleEl.textContent = "Paso 3: Elige tu Carbohidrato Complejo (20%)";
      descEl.textContent = "Granos enteros o tubérculos de absorción lenta para energía sostenida.";
    }
  } else if (AppState.currentStep === "fat") {
    if (rules.fatSatisfiedByMain) {
      titleEl.textContent = "Paso 4: Grasas Saludables (Cubiertas por la proteína)";
      descEl.textContent = "Tu proteína ya aporta los lípidos saludables. Frutos secos y aceites densos descartados.";
    } else {
      titleEl.textContent = "Paso 4: Elige tu Grasa Saludable (10%)";
      descEl.textContent = "Añade frutos secos, aguacate o AOVE en crudo para completar tu nutrición.";
    }
  }
}

function setWizardStep(stepKey) {
  // Mapear nombres si vienen del plato SVG
  let target = stepKey;
  if (stepKey === "protein") target = "main";
  AppState.currentStep = target;
  updateFullUI();
}

// ==============================================================================
// RENDERIZADO DE OPCIONES DEL PASO ACTIVO (CON FILTRADO INTELIGENTE)
// ==============================================================================
function renderStepOptions(rules) {
  const grid = document.getElementById("stepOptionsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const step = AppState.currentStep;

  // Si el paso actual está satisfecho por reglas (ej. Grasa bloqueada por Salmón)
  if (step === "fat" && rules.fatSatisfiedByMain) {
    const mainFood = getFoodById(AppState.selectedFoods.main);
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 24px 16px; background: #fffbeb; border: 1.5px dashed #fcd34d; border-radius: 14px;">
        <span style="font-size: 2.2rem; display:block; margin-bottom: 6px;">🔒</span>
        <strong style="color: #92400e; font-size: 0.95rem; display:block; margin-bottom: 4px;">
          Grasas cubiertas por ${mainFood ? mainFood.name : 'tu proteína'}
        </strong>
        <p style="color: #78350f; font-size: 0.8rem; line-height: 1.4; max-width: 440px; margin: 0 auto;">
          Los frutos secos (nueces, almendras) y aguacate completo han sido eliminados de la selección para que tu plato no se pase de calorías.
        </p>
        <button class="btn-primary" style="margin: 14px auto 0; display: inline-flex; width: auto;" onclick="setWizardStep('veggie')">
          ← Volver a Verduras
        </button>
      </div>
    `;
    return;
  }

  if (step === "carb" && rules.carbSatisfiedByMain) {
    const mainFood = getFoodById(AppState.selectedFoods.main);
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 24px 16px; background: #fffbeb; border: 1.5px dashed #fcd34d; border-radius: 14px;">
        <span style="font-size: 2.2rem; display:block; margin-bottom: 6px;">🔒</span>
        <strong style="color: #92400e; font-size: 0.95rem; display:block; margin-bottom: 4px;">
          Carbohidratos cubiertos por ${mainFood ? mainFood.name : 'tus legumbres'}
        </strong>
        <p style="color: #78350f; font-size: 0.8rem; line-height: 1.4; max-width: 440px; margin: 0 auto;">
          Arroces y patatas han sido descartados para evitar una carga glucémica doble.
        </p>
        <button class="btn-primary" style="margin: 14px auto 0; display: inline-flex; width: auto;" onclick="setWizardStep('fat')">
          Ir a Grasa / Aliño →
        </button>
      </div>
    `;
    return;
  }

  // Filtrar alimentos del catálogo para este paso
  const foodsInGroup = FOOD_DATABASE.filter(f => f.stepGroup === step);

  foodsInGroup.forEach((food) => {
    const isIncompatible = rules.incompatibleFoodIds.includes(food.id);

    // Si el usuario tiene activo "Filtrar incompatibles" y este alimento es incompatible, lo omitimos
    if (AppState.hideIncompatible && isIncompatible) {
      return;
    }

    const isSelected = Object.values(AppState.selectedFoods).includes(food.id);

    const card = document.createElement("div");
    card.className = `step-food-card ${isSelected ? 'selected' : ''} ${isIncompatible ? 'incompatible' : ''}`;

    let badgeClass = "badge-macro-lean";
    if (food.macroType === "main_fatty") badgeClass = "badge-macro-fatty";
    else if (food.macroType === "main_legume") badgeClass = "badge-macro-legume";
    else if (food.macroType === "veggie") badgeClass = "badge-macro-veggie";
    else if (food.macroType === "carb") badgeClass = "badge-macro-carb";
    else if (food.macroType === "fat") badgeClass = "badge-macro-fat";

    card.innerHTML = `
      <div class="food-card-top-row">
        <div class="food-card-left">
          <span class="food-card-emoji">${food.emoji}</span>
          <div class="food-card-name-group">
            <h4>${food.name}</h4>
            <span class="food-card-badge ${badgeClass}">${food.badgeLabel}</span>
          </div>
        </div>
        ${isIncompatible ? `<span class="food-incompatible-tag">⛔ Incompatible</span>` : ''}
      </div>

      <div class="food-card-clean-tip">
        ${isIncompatible 
          ? `<strong>⛔ Por qué se descarta:</strong> ${food.incompatibilityReason || 'No cuadra con la proteína elegida.'}`
          : `<strong>💡 Preparación limpia:</strong> ${food.cleanTip}`
        }
      </div>

      <div class="food-card-footer">
        <span class="food-portion-text">📏 ${food.portion}</span>
        <button class="btn-choose-item ${isSelected ? 'btn-is-chosen' : ''}">
          ${isSelected ? '✓ En el plato' : (isIncompatible ? 'Descartado' : '+ Elegir')}
        </button>
      </div>
    `;

    if (!isIncompatible) {
      card.addEventListener("click", () => {
        handleSelectFood(food);
      });
    }

    grid.appendChild(card);
  });
}

// ==============================================================================
// ACCIÓN: SELECCIONAR ALIMENTO Y AVANZAR ("SIN PENSAR")
// ==============================================================================
function handleSelectFood(food) {
  const currentStep = AppState.currentStep;

  if (currentStep === "main") {
    AppState.selectedFoods.main = food.id;

    // Regla de descarte inteligente:
    if (food.macroType === "main_fatty") {
      AppState.selectedFoods.fat = null; // Grasa cubierta
      showToast(`🐟 ${food.name} elegido. Frutos secos y grasas descartados automáticamente.`);
      AppState.currentStep = "veggie"; // Siguiente paso automático
    } else if (food.macroType === "main_legume") {
      AppState.selectedFoods.carb = null; // Carbohidrato cubierto
      showToast(`🫘 ${food.name} elegido. Arroces y patatas descartados.`);
      AppState.currentStep = "veggie";
    } else {
      showToast(`🍗 ${food.name} elegido. Habilitada grasa saludable.`);
      AppState.currentStep = "veggie";
    }
  } else if (currentStep === "veggie") {
    AppState.selectedFoods.veggie = food.id;
    showToast(`🥦 ${food.name} añadido (50% del plato).`);

    const rules = getCompatibilityRules();
    if (rules.carbSatisfiedByMain) {
      AppState.currentStep = "fat";
    } else {
      AppState.currentStep = "carb";
    }
  } else if (currentStep === "carb") {
    AppState.selectedFoods.carb = food.id;
    showToast(`🍠 ${food.name} añadido a los carbohidratos.`);

    const rules = getCompatibilityRules();
    if (rules.fatSatisfiedByMain) {
      // Plato ya completo
      showToast("🎉 ¡Plato equilibrado completo!");
    } else {
      AppState.currentStep = "fat";
    }
  } else if (currentStep === "fat") {
    AppState.selectedFoods.fat = food.id;
    showToast(`🥑 ${food.name} añadido a las grasas.`);
  }

  updateFullUI();
}

// ==============================================================================
// RANURAS DE RESUMEN DEL PLATO
// ==============================================================================
function renderSelectedMacroSlots(rules) {
  const container = document.getElementById("macroSlotsGrid");
  if (!container) return;
  container.innerHTML = "";

  const mainFood = getFoodById(AppState.selectedFoods.main);
  const veggieFood = getFoodById(AppState.selectedFoods.veggie);
  const carbFood = getFoodById(AppState.selectedFoods.carb);
  const fatFood = getFoodById(AppState.selectedFoods.fat);

  const slots = [
    // 1. Principal
    {
      key: "main",
      label: rules.isFattyMain ? "30% Proteína + Grasa" : (rules.isLegumeMain ? "35% Legumbre (HC+P)" : "20% Proteína Magra"),
      color: rules.isFattyMain ? "#f43f5e" : (rules.isLegumeMain ? "#8b5cf6" : "#f97316"),
      food: mainFood,
      isLocked: false
    },
    // 2. Verduras
    {
      key: "veggie",
      label: "50% Verduras",
      color: "#16a34a",
      food: veggieFood,
      isLocked: false
    },
    // 3. Carbohidratos
    {
      key: "carb",
      label: rules.carbSatisfiedByMain ? "Hidratos (Cubiertos 🔒)" : "20% Carbohidratos",
      color: "#eab308",
      food: rules.carbSatisfiedByMain ? { emoji: "🫘", name: `Cubierto por ${mainFood.name}`, portion: "Aporte natural" } : carbFood,
      isLocked: rules.carbSatisfiedByMain
    },
    // 4. Grasas
    {
      key: "fat",
      label: rules.fatSatisfiedByMain ? "Grasa (Cubierta 🔒)" : (rules.isLegumeMain ? "15% Grasa / Aliño" : "10% Grasa Saludable"),
      color: "#0ea5e9",
      food: rules.fatSatisfiedByMain ? { emoji: "🐟", name: `Cubierta por ${mainFood.name}`, portion: "Frutos secos no necesarios" } : fatFood,
      isLocked: rules.fatSatisfiedByMain
    }
  ];

  slots.forEach((slot) => {
    const card = document.createElement("div");
    card.className = `slot-card ${slot.isLocked ? 'locked-by-rule' : ''}`;
    card.style.setProperty("--slot-color", slot.color);

    if (slot.food) {
      card.innerHTML = `
        <div class="slot-info">
          <span class="slot-emoji">${slot.food.emoji}</span>
          <div class="slot-details">
            <span class="slot-macro-name">${slot.label}</span>
            <span class="slot-food-name">${slot.food.name}</span>
            <span class="slot-portion">${slot.food.portion}</span>
          </div>
        </div>
        <div class="slot-actions">
          ${!slot.isLocked ? `
            <button class="slot-btn" onclick="setWizardStep('${slot.key}')" title="Cambiar alimento">
              Cambiar
            </button>
            <button class="slot-btn" onclick="clearSlotFood('${slot.key}')" title="Quitar">
              ✕
            </button>
          ` : `
            <span style="font-size: 0.72rem; color: #94a3b8; font-weight: 600;">Automático</span>
          `}
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="slot-info">
          <span class="slot-emoji">➕</span>
          <div class="slot-details">
            <span class="slot-macro-name">${slot.label}</span>
            <span class="slot-food-name" style="color: #94a3b8; font-weight: normal;">(Sin seleccionar)</span>
          </div>
        </div>
        <div class="slot-actions">
          <button class="slot-btn" style="background:#ecfdf5; color:#065f46;" onclick="setWizardStep('${slot.key}')">
            Elegir
          </button>
        </div>
      `;
    }

    container.appendChild(card);
  });
}

function clearSlotFood(key) {
  AppState.selectedFoods[key] = null;
  updateFullUI();
  showToast("Elemento retirado");
}

// ==============================================================================
// RECETAS DEL CHEF (MODAL)
// ==============================================================================
function renderChefRecipes() {
  const list = document.getElementById("chefRecipesList");
  if (!list) return;
  list.innerHTML = "";

  CHEF_PRESETS.forEach((preset, idx) => {
    const card = document.createElement("div");
    card.className = "chef-recipe-card";
    card.innerHTML = `
      <div class="chef-recipe-info">
        <span class="chef-recipe-icon">${preset.icon}</span>
        <div class="chef-recipe-text">
          <strong>${preset.title}</strong>
          <small>${preset.subtitle}</small>
        </div>
      </div>
      <button class="btn-load-recipe">Cargar Plato</button>
    `;

    card.addEventListener("click", () => {
      loadChefPreset(idx);
      closeChefModal();
    });

    list.appendChild(card);
  });
}

function loadChefPreset(idx) {
  const preset = CHEF_PRESETS[idx];
  if (!preset) return;

  AppState.selectedFoods = {
    main: preset.foods.main || null,
    veggie: preset.foods.veggie || null,
    carb: preset.foods.carb || null,
    fat: preset.foods.fat || null
  };
  AppState.currentStep = "main";

  updateFullUI();
  showToast(`🍽️ Cargado: ${preset.title}`);
}

function closeChefModal() {
  const modal = document.getElementById("modalChef");
  if (modal) modal.classList.remove("is-open");
}

// ==============================================================================
// GENERADOR ALEATORIO
// ==============================================================================
function generateRandomPlate() {
  const mains = FOOD_DATABASE.filter(f => f.stepGroup === "main");
  const randomMain = getRandomItem(mains);

  const veggies = FOOD_DATABASE.filter(f => f.stepGroup === "veggie");
  const randomVeggie = getRandomItem(veggies);

  AppState.selectedFoods = {
    main: randomMain.id,
    veggie: randomVeggie.id,
    carb: null,
    fat: null
  };

  const rules = getCompatibilityRules();

  if (!rules.carbSatisfiedByMain) {
    const carbs = FOOD_DATABASE.filter(f => f.stepGroup === "carb");
    AppState.selectedFoods.carb = getRandomItem(carbs).id;
  }

  if (!rules.fatSatisfiedByMain) {
    const compatibleFats = FOOD_DATABASE.filter(f => f.stepGroup === "fat" && !rules.incompatibleFoodIds.includes(f.id));
    if (compatibleFats.length > 0) {
      AppState.selectedFoods.fat = getRandomItem(compatibleFats).id;
    }
  }

  AppState.currentStep = "main";
  updateFullUI();
  showToast("🎲 ¡Plato equilibrado generado!");
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ==============================================================================
// COMPARTIR / COPIAR RECETA
// ==============================================================================
function sharePlate() {
  const m = getFoodById(AppState.selectedFoods.main);
  const v = getFoodById(AppState.selectedFoods.veggie);
  const c = getFoodById(AppState.selectedFoods.carb);
  const f = getFoodById(AppState.selectedFoods.fat);

  const lines = [
    `🥗 MI PLATO EQUILIBRADO (Comida Real y Limpia)`,
    `----------------------------------------`
  ];

  if (v) lines.push(`🥦 50% Verduras: ${v.name}`);
  if (m) lines.push(`🥩 Plato Principal: ${m.name}`);
  if (c) lines.push(`🍠 Hidratos: ${c.name}`);
  if (f) lines.push(`🥑 Grasa Saludable: ${f.name}`);

  lines.push(`----------------------------------------`);
  lines.push(`✨ Diseñado con la regla del plato saludable`);

  const text = lines.join("\n");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 ¡Plato e ingredientes copiados!");
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast("📋 ¡Copiado al portapapeles!");
  } catch (e) {
    alert(text);
  }
  document.body.removeChild(ta);
}

// ==============================================================================
// REINICIAR PLATO
// ==============================================================================
function resetPlate() {
  AppState.selectedFoods = {
    main: null,
    veggie: null,
    carb: null,
    fat: null
  };
  AppState.currentStep = "main";
  updateFullUI();
  showToast("🔄 Plato reiniciado al diagrama base.");
}

// ==============================================================================
// UTILIDADES
// ==============================================================================
function getFoodById(id) {
  if (!id) return null;
  return FOOD_DATABASE.find(f => f.id === id) || null;
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.add("is-visible");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

// ==============================================================================
// LISTENERS
// ==============================================================================
function setupEventListeners() {
  // Stepper clicks
  const stepper = document.getElementById("wizardStepper");
  if (stepper) {
    stepper.addEventListener("click", (e) => {
      const btn = e.target.closest(".step-chip");
      if (btn) {
        const step = btn.getAttribute("data-step");
        setWizardStep(step);
      }
    });
  }

  // Toggle filtrar incompatibles
  const toggle = document.getElementById("toggleHideIncompatible");
  if (toggle) {
    toggle.addEventListener("change", (e) => {
      AppState.hideIncompatible = e.target.checked;
      renderStepOptions(getCompatibilityRules());
    });
  }

  // Botón Reiniciar
  const btnReset = document.getElementById("btnResetPlate");
  if (btnReset) btnReset.addEventListener("click", resetPlate);

  // Compartir y sorpresa
  const btnShare = document.getElementById("btnSharePlate");
  if (btnShare) btnShare.addEventListener("click", sharePlate);

  const btnRandom = document.getElementById("btnRandomPlate");
  if (btnRandom) btnRandom.addEventListener("click", generateRandomPlate);

  // Modales
  const btnViewOriginal = document.getElementById("btnViewOriginal");
  const modalOriginal = document.getElementById("modalOriginal");
  const btnCloseOriginal = document.getElementById("btnCloseOriginal");
  if (btnViewOriginal && modalOriginal) {
    btnViewOriginal.addEventListener("click", () => modalOriginal.classList.add("is-open"));
  }
  if (btnCloseOriginal && modalOriginal) {
    btnCloseOriginal.addEventListener("click", () => modalOriginal.classList.remove("is-open"));
  }
  if (modalOriginal) {
    modalOriginal.addEventListener("click", (e) => {
      if (e.target === modalOriginal) modalOriginal.classList.remove("is-open");
    });
  }

  const btnQuickChef = document.getElementById("btnQuickChef");
  const modalChef = document.getElementById("modalChef");
  const btnCloseChef = document.getElementById("btnCloseChef");
  if (btnQuickChef && modalChef) {
    btnQuickChef.addEventListener("click", () => modalChef.classList.add("is-open"));
  }
  if (btnCloseChef && modalChef) {
    btnCloseChef.addEventListener("click", () => modalChef.classList.remove("is-open"));
  }
  if (modalChef) {
    modalChef.addEventListener("click", (e) => {
      if (e.target === modalChef) modalChef.classList.remove("is-open");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeChefModal();
      if (modalOriginal) modalOriginal.classList.remove("is-open");
    }
  });
}
