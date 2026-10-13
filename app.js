/**
 * ==============================================================================
 * DISEÑA TU PLATO SALUDABLE - LÓGICA DE APLICACIÓN (app.js)
 * Panel interactivo para móvil basado en la regla 50-20-20-10 y sus adaptaciones.
 * ==============================================================================
 */

// Base de Datos de Alimentos Limpios y Reales (No ultraprocesados)
const FOOD_DATABASE = [
  // --- VERDURAS Y HORTALIZAS SIN ALMIDÓN (50%) ---
  {
    id: "v_brocoli",
    name: "Brócoli al vapor",
    emoji: "🥦",
    category: "veggies",
    macroType: "veggie",
    tag: "Fibra y Sulforafano",
    cleanTip: "Cocínalo al vapor 4-5 minutos para conservar sus nutrientes y textura crujiente.",
    portion: "Llenar la mitad del plato (~200g)",
    isWhole: true
  },
  {
    id: "v_espinacas",
    name: "Espinacas baby",
    emoji: "🍃",
    category: "veggies",
    macroType: "veggie",
    tag: "Hierro y Folatos",
    cleanTip: "Crudas en ensalada o salteadas con un toque de ajo picado.",
    portion: "2 puñados grandes crudas (~150g)",
    isWhole: true
  },
  {
    id: "v_tomates",
    name: "Tomates cherry frescos",
    emoji: "🍅",
    category: "veggies",
    macroType: "veggie",
    tag: "Licopeno antioxidante",
    cleanTip: "Frescos o asados en sartén con hierbas aromáticas.",
    portion: "1 taza de cherrys (~150g)",
    isWhole: true
  },
  {
    id: "v_calabacin",
    name: "Calabacín a la plancha",
    emoji: "🥒",
    category: "veggies",
    macroType: "veggie",
    tag: "Muy bajo en calorías",
    cleanTip: "En rodajas a la plancha con orégano o en espirales tipo espagueti.",
    portion: "1 calabacín mediano (~200g)",
    isWhole: true
  },
  {
    id: "v_esparragos",
    name: "Espárragos trigueros",
    emoji: "🥬",
    category: "veggies",
    macroType: "veggie",
    tag: "Diurético natural",
    cleanTip: "A la plancha con fuego vivo y una pizca de sal marina.",
    portion: "1 manojo (~150g)",
    isWhole: true
  },
  {
    id: "v_pimientos",
    name: "Pimientos asados",
    emoji: "🫑",
    category: "veggies",
    macroType: "veggie",
    tag: "Vitamina C x3 de la naranja",
    cleanTip: "Asados enteros al horno y pelados, o salteados en tiras.",
    portion: "1 pimiento grande (~180g)",
    isWhole: true
  },
  {
    id: "v_champinones",
    name: "Champiñones al ajillo",
    emoji: "🍄",
    category: "veggies",
    macroType: "veggie",
    tag: "Sabor umami saciante",
    cleanTip: "Salteados con ajo fresco laminado y perejil picado.",
    portion: "1 plato hondo (~180g)",
    isWhole: true
  },
  {
    id: "v_rucula",
    name: "Rúcula y Canónigos",
    emoji: "🥗",
    category: "veggies",
    macroType: "veggie",
    tag: "Hojas amargas digestivas",
    cleanTip: "Base cruda para ensaladas refrescantes con aliño virgen extra.",
    portion: "2 puñados abundantes (~100g)",
    isWhole: true
  },
  {
    id: "v_coliflor",
    name: "Coliflor al horno o vapor",
    emoji: "🥦",
    category: "veggies",
    macroType: "veggie",
    tag: "Versátil y ligera",
    cleanTip: "En arbolitos asados con pimentón o triturada tipo falso arroz.",
    portion: "Media coliflor mediana (~200g)",
    isWhole: true
  },
  {
    id: "v_judias",
    name: "Judías verdes al vapor",
    emoji: "🥢",
    category: "veggies",
    macroType: "veggie",
    tag: "Fibra soluble",
    cleanTip: "Hervidas o al vapor al dente con unas gotas de limón.",
    portion: "1 taza colmada (~180g)",
    isWhole: true
  },

  // --- PROTEÍNAS MAGRAS (20-25%) ---
  {
    id: "p_pollo",
    name: "Pechuga de pollo campero",
    emoji: "🍗",
    category: "lean-protein",
    macroType: "protein_lean",
    tag: "Proteína pura 0% grasa",
    cleanTip: "A la plancha con limón, romero o cúrcuma. Evita empanados.",
    portion: "Tamaño de la palma de la mano (~130-150g)",
    isWhole: true
  },
  {
    id: "p_pavo",
    name: "Solomillo de pavo limpio",
    emoji: "🦃",
    category: "lean-protein",
    macroType: "protein_lean",
    tag: "Muy digestible",
    cleanTip: "Al grill bien especiado con tomillo y pimienta negra.",
    portion: "Palma de la mano (~140g)",
    isWhole: true
  },
  {
    id: "p_merluza",
    name: "Merluza o Bacalao fresco",
    emoji: "🐟",
    category: "lean-protein",
    macroType: "protein_lean",
    tag: "Pescado blanco magro",
    cleanTip: "Al vapor, al horno con verduras o en papillote.",
    portion: "Filete mediano (~150-180g)",
    isWhole: true
  },
  {
    id: "p_claras",
    name: "Claras de huevo / Revuelto",
    emoji: "🥚",
    category: "lean-protein",
    macroType: "protein_lean",
    tag: "Máximo valor biológico",
    cleanTip: "En tortilla francesa fina o revuelto con verduras.",
    portion: "3-4 claras o 1 huevo + 2 claras (~120g)",
    isWhole: true
  },
  {
    id: "p_gambas",
    name: "Gambas o Langostinos",
    emoji: "🦐",
    category: "lean-protein",
    macroType: "protein_lean",
    tag: "Proteína marina magra",
    cleanTip: "A la plancha con ajo laminado o salteadas.",
    portion: "8-10 unidades (~130g peladas)",
    isWhole: true
  },
  {
    id: "p_tofu",
    name: "Tofu firme natural",
    emoji: "🧊",
    category: "lean-protein",
    macroType: "protein_lean",
    tag: "Proteína vegetal limpia",
    cleanTip: "Marínalo con soja baja en sal y dóralo en sartén crujiente.",
    portion: "Bloque (~150g)",
    isWhole: true
  },
  {
    id: "p_lomo",
    name: "Lomo de cerdo magro",
    emoji: "🥩",
    category: "lean-protein",
    macroType: "protein_lean",
    tag: "Corte magro limpio",
    cleanTip: "Retira el borde de grasa visible y cocina a la plancha.",
    portion: "2 filetes finos (~130g)",
    isWhole: true
  },

  // --- PROTEÍNA CON GRASA INTEGRADA (PROTEÍNA + GRASA ~30%) ---
  {
    id: "pg_salmon",
    name: "Salmón fresco salvaje",
    emoji: "🍣",
    category: "fatty-protein",
    macroType: "protein_fatty",
    tag: "Omega-3 + Proteína",
    cleanTip: "¡OJO! Al cocinarlo no agregues aceite: suéltalo en su propia grasa a fuego medio.",
    portion: "1 lomo (~150g). Cubre proteína y grasa del plato.",
    isWhole: true
  },
  {
    id: "pg_huevos",
    name: "Huevos camperos enteros",
    emoji: "🍳",
    category: "fatty-protein",
    macroType: "protein_fatty",
    tag: "Proteína + Colina + Grasa",
    cleanTip: "Pochados, a la plancha con gota mínima o pasados por agua.",
    portion: "2 huevos enteros. Ya aportan grasa saludable.",
    isWhole: true
  },
  {
    id: "pg_sardinas",
    name: "Sardinas o Caballa fresca",
    emoji: "🐟",
    category: "fatty-protein",
    macroType: "protein_fatty",
    tag: "Bomba de Omega-3 y Calcio",
    cleanTip: "A la plancha o al horno enteras con sal marina.",
    portion: "3-4 sardinas (~150g). No necesitas grasa añadida.",
    isWhole: true
  },
  {
    id: "pg_ternera",
    name: "Lomo o Solomillo de ternera",
    emoji: "🥩",
    category: "fatty-protein",
    macroType: "protein_fatty",
    tag: "Hierro hemo + Grasa natural",
    cleanTip: "Sellado a la plancha sin mantequillas ni aceites extra.",
    portion: "Corte limpio (~140g). Combina proteína y grasa.",
    isWhole: true
  },
  {
    id: "pg_atun",
    name: "Atún rojo fresco en taco",
    emoji: "🐟",
    category: "fatty-protein",
    macroType: "protein_fatty",
    tag: "Pescado azul denso",
    cleanTip: "Marcado 1 minuto por lado para que quede jugoso.",
    portion: "1 taco (~140g)",
    isWhole: true
  },

  // --- CARBOHIDRATOS COMPLEJOS / GRANOS ENTEROS (20-25%) ---
  {
    id: "c_boniato",
    name: "Boniato / Batata asada",
    emoji: "🍠",
    category: "carbs",
    macroType: "carb",
    tag: "Betacarotenos y saciedad",
    cleanTip: "Asado al horno con piel. Su dulzor natural evita cualquier salsa.",
    portion: "1 puño cerrado (~120-150g)",
    isWhole: true
  },
  {
    id: "c_arroz",
    name: "Arroz basmati o integral",
    emoji: "🍚",
    category: "carbs",
    macroType: "carb",
    tag: "Energía sostenida",
    cleanTip: "Hervido al punto con laurel y ajo entero. Mejor integral.",
    portion: "1 taza pequeña cocido (~120g)",
    isWhole: true
  },
  {
    id: "c_patata",
    name: "Patata cocida al vapor",
    emoji: "🥔",
    category: "carbs",
    macroType: "carb",
    tag: "Almidón resistente",
    cleanTip: "Hervirla y enfriarla 12h en nevera crea almidón resistente pro-microbiota.",
    portion: "1 patata mediana (~130g)",
    isWhole: true
  },
  {
    id: "c_quinoa",
    name: "Quinoa real cocida",
    emoji: "🌾",
    category: "carbs",
    macroType: "carb",
    tag: "Pseudocereal sin gluten",
    cleanTip: "Lávala bien antes de cocer en proporción 2:1 con agua o caldo.",
    portion: "1 puño cerrado cocida (~130g)",
    isWhole: true
  },
  {
    id: "c_avena",
    name: "Copos de avena integral",
    emoji: "🥣",
    category: "carbs",
    macroType: "carb",
    tag: "Betaglucanos reductores",
    cleanTip: "Cocida en gachas saladas o dulces con canela, sin procesar.",
    portion: "40-50g en seco",
    isWhole: true
  },
  {
    id: "c_pan",
    name: "Pan 100% integral masa madre",
    emoji: "🍞",
    category: "carbs",
    macroType: "carb",
    tag: "Grano entero real",
    cleanTip: "Solo harina integral, agua, masa madre y sal. Sin harinas refinadas.",
    portion: "1 rebanada gruesa (~50g)",
    isWhole: true
  },

  // --- GRASAS SALUDABLES (10%) ---
  {
    id: "f_aove",
    name: "Aceite de Oliva Virgen Extra",
    emoji: "🫒",
    category: "fats",
    macroType: "fat",
    tag: "Oro líquido / Ácido Oleico",
    cleanTip: "Añádelo siempre en crudo al final sobre verduras o ensalada.",
    portion: "1 cucharada sopera (~10-15ml)",
    isWhole: true
  },
  {
    id: "f_aguacate",
    name: "Aguacate fresco",
    emoji: "🥑",
    category: "fats",
    macroType: "fat",
    tag: "Grasa monoinsaturada",
    cleanTip: "En láminas o machacado con unas gotas de lima y sal.",
    portion: "1/4 a 1/3 de aguacate mediano (~40-50g)",
    isWhole: true
  },
  {
    id: "f_nueces",
    name: "Nueces crudas de California",
    emoji: "🥜",
    category: "fats",
    macroType: "fat",
    tag: "Ácido alfa-linolénico",
    cleanTip: "Crudas, sin freír ni salar. Añádelas picadas a la verdura.",
    portion: "4-5 medias nueces (~15-20g)",
    isWhole: true
  },
  {
    id: "f_semillas",
    name: "Semillas de chía y lino",
    emoji: "🌾",
    category: "fats",
    macroType: "fat",
    tag: "Fibra soluble y omega 3",
    cleanTip: "Muélelas o hidrátalas previamente para absorber sus nutrientes.",
    portion: "1 cucharadita de postre (~10g)",
    isWhole: true
  },
  {
    id: "f_aceitunas",
    name: "Aceitunas naturales aliñadas",
    emoji: "🫒",
    category: "fats",
    macroType: "fat",
    tag: "Fermentado natural",
    cleanTip: "Con hueso, fermentación tradicional sin conservantes artificiales.",
    portion: "6-8 aceitunas medianas (~30g)",
    isWhole: true
  },

  // --- LEGUMBRES (CARBOHIDRATO + PROTEÍNA VEGETAL) ---
  {
    id: "l_lentejas",
    name: "Lentejas pardinas",
    emoji: "🫘",
    category: "legumes",
    macroType: "legume",
    tag: "Carbohidrato + Proteína vegetal",
    cleanTip: "En ensalada fresca con hortalizas o estofadas con verduras sin embutidos.",
    portion: "1 taza cocidas (~160g)",
    isWhole: true
  },
  {
    id: "l_garbanzos",
    name: "Garbanzos tostados o hummus",
    emoji: "🧆",
    category: "legumes",
    macroType: "legume",
    tag: "Gran poder saciante",
    cleanTip: "Al horno con especias como snack crujiente o cocidos con espinacas.",
    portion: "1 taza cocidos (~160g)",
    isWhole: true
  },
  {
    id: "l_alubias",
    name: "Alubias blancas o negras",
    emoji: "🫘",
    category: "legumes",
    macroType: "legume",
    tag: "Fibra prebiótica",
    cleanTip: "Cocidas con laurel, cebolla y pimiento.",
    portion: "1 taza cocidas (~160g)",
    isWhole: true
  },
  {
    id: "l_edamame",
    name: "Edamame al vapor",
    emoji: "🫛",
    category: "legumes",
    macroType: "legume",
    tag: "Soja entera en vaina",
    cleanTip: "Hervido 4 minutos con sal en escamas. Snack o guarnición limpia.",
    portion: "1 cuenco en vaina (~150g)",
    isWhole: true
  }
];

// Recetas Predefinidas para Inspiración
const CHEF_PRESETS = [
  {
    title: "Salmón Noruego con Boniato y Brócoli",
    subtitle: "Proteína grasa: no requiere aceite añadido",
    icon: "🍣",
    mode: "fatty-protein",
    items: {
      veggie: "v_brocoli",
      protein: "pg_salmon",
      carb: "c_boniato",
      fat: null
    }
  },
  {
    title: "El Clásico Mediterráneo Fit",
    subtitle: "Pollo al limón con arroz basmati y ensalada verde",
    icon: "🍗",
    mode: "standard",
    items: {
      veggie: "v_rucula",
      protein: "p_pollo",
      carb: "c_arroz",
      fat: "f_aove"
    }
  },
  {
    title: "Brunch Saludable con Huevos Camperos",
    subtitle: "Huevos enteros pochados + espinacas baby + pan masa madre",
    icon: "🍳",
    mode: "fatty-protein",
    items: {
      veggie: "v_espinacas",
      protein: "pg_huevos",
      carb: "c_pan",
      fat: null
    }
  },
  {
    title: "Bowl Vegetal de Garbanzos y Aguacate",
    subtitle: "Legumbres como proteína e hidrato + pimientos asados",
    icon: "🧆",
    mode: "legumes",
    items: {
      veggie: "v_pimientos",
      legume: "l_garbanzos",
      fat: "f_aguacate"
    }
  },
  {
    title: "Solomillo de Ternera con Patata y Espárragos",
    subtitle: "Carne limpia con patata enfriada almidón resistente",
    icon: "🥩",
    mode: "standard",
    items: {
      veggie: "v_esparragos",
      protein: "pg_ternera",
      carb: "c_patata",
      fat: "f_aove"
    }
  },
  {
    title: "Cena Ligera: Merluza al Papillote y Champiñones",
    subtitle: "Low-carb: 60% verduras y pescado blanco magro",
    icon: "🐟",
    mode: "low-carb",
    items: {
      veggie: "v_champinones",
      protein: "p_merluza",
      carb: null,
      fat: "f_aove"
    }
  }
];

// Configuración de los Modos del Plato
const PLATE_MODES = {
  "standard": {
    name: "Estándar Magro",
    desc: "50% Verduras · 20% Proteína · 20% Hidratos · 10% Grasas",
    slices: [
      { id: "veggie", label: "Verduras", percent: 50, color: "#16a34a", icon: "🥦" },
      { id: "protein", label: "Proteína Magra", percent: 20, color: "#f97316", icon: "🍗" },
      { id: "carb", label: "Carbohidratos", percent: 20, color: "#eab308", icon: "🍠" },
      { id: "fat", label: "Grasa Saludable", percent: 10, color: "#0ea5e9", icon: "🥑" }
    ],
    coachAdvice: "El equilibrio clásico. Como la proteína es magra (pollo, merluza), añade 1 cucharada de AOVE o aguacate para cubrir el 10% de grasa saludable."
  },
  "fatty-protein": {
    name: "Proteína Grasa",
    desc: "50% Verduras · 30% Proteína+Grasa · 20% Hidratos",
    slices: [
      { id: "veggie", label: "Verduras", percent: 50, color: "#16a34a", icon: "🥦" },
      { id: "protein_fatty", label: "Proteína + Grasa", percent: 30, color: "#f43f5e", icon: "🐟" },
      { id: "carb", label: "Carbohidratos", percent: 20, color: "#eab308", icon: "🍠" }
    ],
    coachAdvice: "¡Adaptación inteligente! Al elegir salmón, huevos o ternera, la grasa natural ya viene en el alimento. El plato fusiona la cuota de grasa con la proteína (30%). No necesitas aceite extra."
  },
  "legumes": {
    name: "Plato con Legumbres",
    desc: "50% Verduras · 35% Legumbres (HC+P) · 15% Grasa/Semillas",
    slices: [
      { id: "veggie", label: "Verduras", percent: 50, color: "#16a34a", icon: "🥦" },
      { id: "legume", label: "Legumbres (HC+Proteína)", percent: 35, color: "#8b5cf6", icon: "🫘" },
      { id: "fat", label: "Grasa / Semillas", percent: 15, color: "#0ea5e9", icon: "🥑" }
    ],
    coachAdvice: "Las legumbres (lentejas, garbanzos) son un alimento limpio híbrido: aportan carbohidrato complejo y proteína vegetal en el mismo bocado."
  },
  "low-carb": {
    name: "Cena Ligera / Low Carb",
    desc: "60% Verduras · 30% Proteína · 10% Grasa",
    slices: [
      { id: "veggie", label: "Verduras", percent: 60, color: "#16a34a", icon: "🥦" },
      { id: "protein", label: "Proteína", percent: 30, color: "#f97316", icon: "🍗" },
      { id: "fat", label: "Grasa Saludable", percent: 10, color: "#0ea5e9", icon: "🥑" }
    ],
    coachAdvice: "Ideal para cenas o días de menor actividad. Se sustituye el almidón por mayor volumen de verdura sin almidón y proteína magra saciante."
  },
  "custom": {
    name: "Modo Personalizado",
    desc: "El plato se ajusta según los alimentos elegidos",
    slices: [
      { id: "veggie", label: "Verduras", percent: 50, color: "#16a34a", icon: "🥦" },
      { id: "protein", label: "Proteína", percent: 20, color: "#f97316", icon: "🍗" },
      { id: "carb", label: "Carbohidratos", percent: 20, color: "#eab308", icon: "🍠" },
      { id: "fat", label: "Grasa", percent: 10, color: "#0ea5e9", icon: "🥑" }
    ],
    coachAdvice: "Crea tu propia combinación. Añade o cambia alimentos y observa cómo se equilibra el plato."
  }
};

// ESTADO GLOBAL DE LA APLICACIÓN
const AppState = {
  currentMode: "standard",
  selectedFoods: {
    veggie: null,         // id del alimento
    protein: null,
    carb: null,
    fat: null,
    legume: null
  },
  searchQuery: "",
  activeCategoryFilter: "all",
  activeZonePicker: null
};

// ==============================================================================
// INICIALIZACIÓN DE LA APP
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Cargar plato inicial por defecto
  loadInitialDefaultPlate();

  // 2. Renderizar catálogo de alimentos
  renderFoodCatalog();

  // 3. Renderizar recetas del chef en el modal
  renderChefRecipes();

  // 4. Configurar escuchadores de eventos
  setupEventListeners();

  // 5. Dibujar plato SVG inicial
  updatePlateView();
});

function loadInitialDefaultPlate() {
  AppState.selectedFoods = {
    veggie: "v_brocoli",
    protein: "p_pollo",
    carb: "c_boniato",
    fat: "f_aove",
    legume: null
  };
}

// ==============================================================================
// RENDERIZADO DEL PLATO INTERACTIVO (SVG)
// ==============================================================================
function updatePlateView() {
  const modeConfig = PLATE_MODES[AppState.currentMode];
  const slicesGroup = document.getElementById("svgSlicesGroup");
  if (!slicesGroup) return;

  slicesGroup.innerHTML = "";

  // Determinar los sectores y porcentajes a dibujar
  let slicesToRender = getSlicesForCurrentState(modeConfig);

  // Dimensiones del plato SVG: centro (200, 200), radio 165
  const cx = 200;
  const cy = 200;
  const radius = 168;

  // En la infografía original de referencia (reglaDieta.jpg):
  // La mitad derecha (50%) es para Verduras.
  // La parte izquierda está dividida entre Carbohidratos (arriba-izq) y Proteínas (abajo-izq).
  // Por tanto, comenzaremos el arco en -90° (arriba / 12 horas):
  // De -90° a +90° en sentido horario es la mitad derecha completa (180° = 50% Verduras).
  let currentAngle = -90;

  slicesToRender.forEach((slice) => {
    const sweepAngle = (slice.percent / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sweepAngle;
    currentAngle += sweepAngle;

    // Calcular coordenadas del arco SVG
    const pathD = describeSvgArc(cx, cy, radius, startAngle, endAngle);

    // Calcular punto medio para texto / icono
    const midAngle = startAngle + sweepAngle / 2;
    const textRadius = radius * 0.58;
    const rad = (midAngle * Math.PI) / 180;
    const tx = cx + textRadius * Math.cos(rad);
    const ty = cy + textRadius * Math.sin(rad);

    // Alimento asignado en esta zona
    const assignedFood = getAssignedFoodForSlice(slice.id);

    // Crear grupo del sector
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "plate-slice");
    g.setAttribute("data-zone-id", slice.id);
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", `Zona ${slice.label} (${slice.percent}%)`);

    // Path del sector
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("fill", slice.color);
    path.setAttribute("class", "slice-border");
    path.setAttribute("stroke", "#ffffff");
    path.setAttribute("stroke-width", "3");
    g.appendChild(path);

    // Contenedor decorativo de etiqueta (Pastilla flotante translúcida)
    const badgeW = sweepAngle < 45 ? 65 : 84;
    const badgeH = 50;
    
    // Rectángulo de fondo para que el texto sea siempre legible
    const badgeRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    badgeRect.setAttribute("x", tx - badgeW / 2);
    badgeRect.setAttribute("y", ty - badgeH / 2);
    badgeRect.setAttribute("width", badgeW);
    badgeRect.setAttribute("height", badgeH);
    badgeRect.setAttribute("class", "slice-badge-bg");
    badgeRect.setAttribute("rx", "12");
    g.appendChild(badgeRect);

    // Emoji del alimento elegido o icono del macro
    const textEmoji = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textEmoji.setAttribute("x", tx);
    textEmoji.setAttribute("y", ty - 8);
    textEmoji.setAttribute("class", "slice-icon-emoji");
    textEmoji.textContent = assignedFood ? assignedFood.emoji : slice.icon;
    g.appendChild(textEmoji);

    // Texto de porcentaje
    const textPercent = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textPercent.setAttribute("x", tx);
    textPercent.setAttribute("y", ty + 12);
    textPercent.setAttribute("class", "slice-text-percent");
    textPercent.setAttribute("fill", slice.color);
    textPercent.textContent = `${slice.percent}%`;
    g.appendChild(textPercent);

    // Evento de clic en el plato: abrir selector para esa zona
    g.addEventListener("click", () => {
      openZoneFoodPicker(slice.id, slice.label, slice.percent);
    });

    slicesGroup.appendChild(g);
  });

  // Actualizar medidor de progreso múltiple
  updateMultiProgressBar(slicesToRender);

  // Actualizar tarjetas de ingredientes seleccionados
  renderSelectedMacroSlots();

  // Actualizar texto del coach
  updateCoachInsight(modeConfig);
}

// Convertir ángulos en coordenadas SVG Arc
function describeSvgArc(cx, cy, r, startAngle, endAngle) {
  // Evitar error en 360 grados exactos
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

function getSlicesForCurrentState(modeConfig) {
  // En modo fatty-protein, verificamos si hay proteína grasa seleccionada
  return modeConfig.slices;
}

function getAssignedFoodForSlice(sliceId) {
  if (sliceId === "veggie") return getFoodById(AppState.selectedFoods.veggie);
  if (sliceId === "protein" || sliceId === "protein_fatty") {
    return getFoodById(AppState.selectedFoods.protein);
  }
  if (sliceId === "carb") return getFoodById(AppState.selectedFoods.carb);
  if (sliceId === "fat") return getFoodById(AppState.selectedFoods.fat);
  if (sliceId === "legume") return getFoodById(AppState.selectedFoods.legume);
  return null;
}

// Barra multicolor inferior
function updateMultiProgressBar(slices) {
  const bar = document.getElementById("multiProgressBar");
  if (!bar) return;
  bar.innerHTML = "";

  slices.forEach((s) => {
    const seg = document.createElement("div");
    seg.className = "progress-seg";
    seg.style.width = `${s.percent}%`;
    seg.style.backgroundColor = s.color;
    seg.title = `${s.label}: ${s.percent}%`;
    bar.appendChild(seg);
  });

  const statusSummary = document.getElementById("plateStatusSummary");
  if (statusSummary) {
    const total = slices.reduce((acc, curr) => acc + curr.percent, 0);
    statusSummary.textContent = `${total}% Equilibrado`;
  }
}

// ==============================================================================
// ASESOR NUTRICIONAL (COACH INSIGHTS)
// ==============================================================================
function updateCoachInsight(modeConfig) {
  const titleEl = document.getElementById("coachInsightTitle");
  const textEl = document.getElementById("coachInsightText");
  if (!titleEl || !textEl) return;

  const chosenProtein = getFoodById(AppState.selectedFoods.protein);
  const chosenFat = getFoodById(AppState.selectedFoods.fat);

  // Regla especial del usuario: Si elige proteína grasa y también aceite extra
  if (chosenProtein && chosenProtein.macroType === "protein_fatty" && chosenFat) {
    titleEl.textContent = `💡 Ajuste de grasa con ${chosenProtein.name}`;
    textEl.textContent = `Como has elegido ${chosenProtein.name}, ya incorpora su propia grasa saludable. No necesitas añadir ${chosenFat.name} abundante. ¡Puedes guardarlo para otra comida o usar solo unas gotas!`;
    return;
  }

  // Si eligió proteína grasa en modo estándar, sugerir la adaptación
  if (chosenProtein && chosenProtein.macroType === "protein_fatty" && AppState.currentMode === "standard") {
    titleEl.textContent = `🐟 Adaptación de Proteína Grasa`;
    textEl.textContent = `Has añadido ${chosenProtein.name}. En este plato, la proteína y la grasa se combinan naturalmente ocupando el 30% del plato sin requerir grasa extra.`;
    return;
  }

  // Texto por defecto del modo
  titleEl.textContent = `Variación: ${modeConfig.name}`;
  textEl.textContent = modeConfig.coachAdvice;
}

// ==============================================================================
// SLOTS DEL PLATO ACTUAL (TARJETAS DE INGREDIENTES)
// ==============================================================================
function renderSelectedMacroSlots() {
  const container = document.getElementById("macroSlotsGrid");
  if (!container) return;
  container.innerHTML = "";

  const mode = AppState.currentMode;
  const isFattyMode = mode === "fatty-protein";
  const isLegumeMode = mode === "legumes";

  const slots = [
    {
      key: "veggie",
      label: "50% Verduras",
      color: "#16a34a",
      foodId: AppState.selectedFoods.veggie,
      categoryFilter: "veggies"
    }
  ];

  if (isLegumeMode) {
    slots.push({
      key: "legume",
      label: "35% Legumbres (HC+P)",
      color: "#8b5cf6",
      foodId: AppState.selectedFoods.legume,
      categoryFilter: "legumes"
    });
  } else {
    slots.push({
      key: "protein",
      label: isFattyMode ? "30% Proteína + Grasa" : "20% Proteína Magra",
      color: isFattyMode ? "#f43f5e" : "#f97316",
      foodId: AppState.selectedFoods.protein,
      categoryFilter: isFattyMode ? "fatty-protein" : "lean-protein"
    });

    if (mode !== "low-carb") {
      slots.push({
        key: "carb",
        label: "20% Carbohidratos",
        color: "#eab308",
        foodId: AppState.selectedFoods.carb,
        categoryFilter: "carbs"
      });
    }
  }

  // Grasa (si no es fatty-protein)
  if (!isFattyMode) {
    slots.push({
      key: "fat",
      label: isLegumeMode ? "15% Grasa / Semillas" : "10% Grasa Saludable",
      color: "#0ea5e9",
      foodId: AppState.selectedFoods.fat,
      categoryFilter: "fats"
    });
  }

  slots.forEach((slot) => {
    const food = getFoodById(slot.foodId);
    const card = document.createElement("div");
    card.className = "slot-card";
    card.style.setProperty("--slot-color", slot.color);

    if (food) {
      card.innerHTML = `
        <div class="slot-info">
          <span class="slot-emoji">${food.emoji}</span>
          <div class="slot-details">
            <span class="slot-macro-name">${slot.label}</span>
            <span class="slot-food-name">${food.name}</span>
            <span class="slot-portion">${food.portion}</span>
          </div>
        </div>
        <div class="slot-actions">
          <button class="slot-btn" onclick="openZoneFoodPicker('${slot.key}', '${slot.label}')" title="Cambiar alimento">
            Cambiar
          </button>
          <button class="slot-btn" onclick="removeSlotFood('${slot.key}')" title="Quitar">
            ✕
          </button>
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
          <button class="slot-btn slot-btn-choose" onclick="openZoneFoodPicker('${slot.key}', '${slot.label}')">
            Elegir
          </button>
        </div>
      `;
    }

    container.appendChild(card);
  });
}

function removeSlotFood(slotKey) {
  AppState.selectedFoods[slotKey] = null;
  updatePlateView();
  renderFoodCatalog();
  showToast("Alimento quitado del plato");
}

// ==============================================================================
// CATÁLOGO DE ALIMENTOS
// ==============================================================================
function renderFoodCatalog() {
  const grid = document.getElementById("foodCatalogGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const query = AppState.searchQuery.toLowerCase().trim();
  const catFilter = AppState.activeCategoryFilter;

  const filtered = FOOD_DATABASE.filter((item) => {
    const matchCategory = catFilter === "all" || item.category === catFilter;
    const matchSearch =
      query === "" ||
      item.name.toLowerCase().includes(query) ||
      item.cleanTip.toLowerCase().includes(query) ||
      item.tag.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 24px; color: #94a3b8;">
        <p style="font-size: 2rem; margin-bottom: 6px;">🔍</p>
        <p>No se encontraron alimentos con ese filtro.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "food-card";

    const isSelected = Object.values(AppState.selectedFoods).includes(item.id);
    const tagClass = getTagClass(item.category);

    card.innerHTML = `
      <div class="food-card-header">
        <div class="food-card-left">
          <span class="food-emoji-large">${item.emoji}</span>
          <div class="food-title-group">
            <h4>${item.name}</h4>
            <span class="food-type-tag ${tagClass}">${getCategoryDisplayName(item.category)}</span>
          </div>
        </div>
      </div>
      <div class="food-card-tip">
        <strong>💡 Preparación limpia:</strong> ${item.cleanTip}
      </div>
      <div class="food-card-footer">
        <span class="food-portion-hint">📏 ${item.portion}</span>
        <button class="btn-add-food ${isSelected ? 'is-selected' : ''}" onclick="selectFoodFromCatalog('${item.id}')">
          ${isSelected ? '✓ En el plato' : '+ Añadir'}
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function getTagClass(cat) {
  switch (cat) {
    case "veggies": return "tag-veggie";
    case "lean-protein": return "tag-lean";
    case "fatty-protein": return "tag-fatty";
    case "carbs": return "tag-carb";
    case "fats": return "tag-fat";
    case "legumes": return "tag-legume";
    default: return "";
  }
}

function getCategoryDisplayName(cat) {
  switch (cat) {
    case "veggies": return "Verdura (50%)";
    case "lean-protein": return "Proteína Magra";
    case "fatty-protein": return "Proteína + Grasa";
    case "carbs": return "Hidrato Complejo";
    case "fats": return "Grasa Saludable";
    case "legumes": return "Legumbre";
    default: return cat;
  }
}

// Añadir un alimento desde el catálogo general
function selectFoodFromCatalog(foodId) {
  const food = getFoodById(foodId);
  if (!food) return;

  // Lógica inteligente de adaptación:
  // Si selecciona una proteína con grasa (ej: Salmón, huevo entero):
  if (food.macroType === "protein_fatty") {
    AppState.selectedFoods.protein = food.id;
    // Adaptar automáticamente el modo a fatty-protein si está en estándar
    if (AppState.currentMode === "standard") {
      setMode("fatty-protein", false);
      showToast(`🐟 ${food.name} contiene su propia grasa. Modo adaptado a Proteína Grasa.`);
    } else {
      showToast(`Añadido ${food.name} al plato`);
    }
  } else if (food.macroType === "protein_lean") {
    AppState.selectedFoods.protein = food.id;
    if (AppState.currentMode === "fatty-protein") {
      setMode("standard", false);
    }
    showToast(`Añadido ${food.name} como proteína magra`);
  } else if (food.macroType === "veggie") {
    AppState.selectedFoods.veggie = food.id;
    showToast(`Añadido ${food.name} (50% verduras)`);
  } else if (food.macroType === "carb") {
    AppState.selectedFoods.carb = food.id;
    showToast(`Añadido ${food.name} a los carbohidratos`);
  } else if (food.macroType === "fat") {
    AppState.selectedFoods.fat = food.id;
    showToast(`Añadido ${food.name} a las grasas saludables`);
  } else if (food.macroType === "legume") {
    AppState.selectedFoods.legume = food.id;
    if (AppState.currentMode !== "legumes") {
      setMode("legumes", false);
    }
    showToast(`Añadido ${food.name} (modo Legumbres adaptado)`);
  }

  updatePlateView();
  renderFoodCatalog();
}

// ==============================================================================
// MODAL / DRAWER DE SELECCIÓN POR ZONA (AL TOCAR EL PLATO)
// ==============================================================================
function openZoneFoodPicker(zoneKey, zoneLabel, percent) {
  const modal = document.getElementById("modalZonePicker");
  const title = document.getElementById("zonePickerTitle");
  const subtitle = document.getElementById("zonePickerSubtitle");
  const grid = document.getElementById("zoneFoodsGrid");
  if (!modal || !grid) return;

  AppState.activeZonePicker = zoneKey;

  title.textContent = `Elegir para ${zoneLabel}`;
  subtitle.textContent = `Prioriza comida limpia y no procesada`;

  // Mapear qué categoría de alimentos mostrar para esta zona
  let targetCategories = [];
  if (zoneKey === "veggie") targetCategories = ["veggies"];
  else if (zoneKey === "protein") targetCategories = ["lean-protein", "fatty-protein"];
  else if (zoneKey === "protein_fatty") targetCategories = ["fatty-protein"];
  else if (zoneKey === "carb") targetCategories = ["carbs"];
  else if (zoneKey === "fat") targetCategories = ["fats"];
  else if (zoneKey === "legume") targetCategories = ["legumes"];

  const foodsForZone = FOOD_DATABASE.filter((f) => targetCategories.includes(f.category));

  grid.innerHTML = "";
  foodsForZone.forEach((food) => {
    const card = document.createElement("div");
    card.className = "zone-pick-card";
    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.6rem;">${food.emoji}</span>
        <div>
          <strong style="display:block; font-size: 0.88rem; color: #0f172a;">${food.name}</strong>
          <small style="color: #64748b; font-size: 0.72rem;">${food.tag}</small>
        </div>
      </div>
      <button class="btn-add-food" style="margin-left: 8px;">Elegir</button>
    `;

    card.addEventListener("click", () => {
      selectFoodFromCatalog(food.id);
      closeZonePicker();
    });

    grid.appendChild(card);
  });

  modal.classList.add("is-open");
}

function closeZonePicker() {
  const modal = document.getElementById("modalZonePicker");
  if (modal) modal.classList.remove("is-open");
}

// ==============================================================================
// RECETAS DEL CHEF (IDEAS RÁPIDAS LISTAS)
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

function loadChefPreset(index) {
  const preset = CHEF_PRESETS[index];
  if (!preset) return;

  setMode(preset.mode, false);
  AppState.selectedFoods = {
    veggie: preset.items.veggie || null,
    protein: preset.items.protein || null,
    carb: preset.items.carb || null,
    fat: preset.items.fat || null,
    legume: preset.items.legume || null
  };

  updatePlateView();
  renderFoodCatalog();
  showToast(`🍽️ Plato cargado: ${preset.title}`);
}

function closeChefModal() {
  const modal = document.getElementById("modalChef");
  if (modal) modal.classList.remove("is-open");
}

// ==============================================================================
// GENERADOR ALEATORIO DE PLATO EQUILIBRADO
// ==============================================================================
function generateRandomPlate() {
  const veggies = FOOD_DATABASE.filter(f => f.category === "veggies");
  const carbs = FOOD_DATABASE.filter(f => f.category === "carbs");
  const fats = FOOD_DATABASE.filter(f => f.category === "fats");

  // Decidir si usamos proteína grasa o magra
  const useFatty = Math.random() > 0.5;

  if (useFatty) {
    const fattyProteins = FOOD_DATABASE.filter(f => f.category === "fatty-protein");
    setMode("fatty-protein", false);
    AppState.selectedFoods = {
      veggie: getRandomItem(veggies).id,
      protein: getRandomItem(fattyProteins).id,
      carb: getRandomItem(carbs).id,
      fat: null,
      legume: null
    };
  } else {
    const leanProteins = FOOD_DATABASE.filter(f => f.category === "lean-protein");
    setMode("standard", false);
    AppState.selectedFoods = {
      veggie: getRandomItem(veggies).id,
      protein: getRandomItem(leanProteins).id,
      carb: getRandomItem(carbs).id,
      fat: getRandomItem(fats).id,
      legume: null
    };
  }

  updatePlateView();
  renderFoodCatalog();
  showToast("🎲 ¡Plato saludable sorpresa generado!");
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ==============================================================================
// COMPARTIR / COPIAR LISTA DE LA COMPRA O RECETA
// ==============================================================================
function sharePlate() {
  const v = getFoodById(AppState.selectedFoods.veggie);
  const p = getFoodById(AppState.selectedFoods.protein);
  const c = getFoodById(AppState.selectedFoods.carb);
  const f = getFoodById(AppState.selectedFoods.fat);
  const l = getFoodById(AppState.selectedFoods.legume);

  const lines = [
    `🥗 MI PLATO SALUDABLE (Regla del Plato Equilibrado)`,
    `Modo: ${PLATE_MODES[AppState.currentMode].name}`,
    `----------------------------------------`
  ];

  if (v) lines.push(`🥦 50% Verduras: ${v.name} (${v.portion})`);
  if (p) lines.push(`🥩 Proteína: ${p.name} (${p.portion})`);
  if (l) lines.push(`🫘 Legumbres: ${l.name} (${l.portion})`);
  if (c) lines.push(`🍠 Hidratos: ${c.name} (${c.portion})`);
  if (f) lines.push(`🥑 Grasa saludable: ${f.name} (${f.portion})`);

  lines.push(`----------------------------------------`);
  lines.push(`✨ 100% Comida Real, Sin Procesados`);

  const shareText = lines.join("\n");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast("📋 ¡Plato y lista de ingredientes copiada al portapapeles!");
    }).catch(() => {
      fallbackCopy(shareText);
    });
  } else {
    fallbackCopy(shareText);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast("📋 ¡Plato copiado al portapapeles!");
  } catch (err) {
    alert(text);
  }
  document.body.removeChild(textArea);
}

// ==============================================================================
// CAMBIO DE MODOS
// ==============================================================================
function setMode(modeKey, resetFoods = false) {
  if (!PLATE_MODES[modeKey]) return;
  AppState.currentMode = modeKey;

  // Actualizar chips activos
  const chips = document.querySelectorAll("#variationChips .chip-btn");
  chips.forEach(chip => {
    if (chip.getAttribute("data-mode") === modeKey) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  const badge = document.getElementById("currentModeBadge");
  if (badge) badge.textContent = PLATE_MODES[modeKey].name;

  if (resetFoods) {
    // Si cambia expresamente a fatty-protein y no tiene proteína grasa, asignarle una
    if (modeKey === "fatty-protein" && (!AppState.selectedFoods.protein || getFoodById(AppState.selectedFoods.protein)?.macroType !== "protein_fatty")) {
      AppState.selectedFoods.protein = "pg_salmon";
      AppState.selectedFoods.fat = null; // No requiere grasa separada
    } else if (modeKey === "legumes") {
      AppState.selectedFoods.legume = "l_garbanzos";
      AppState.selectedFoods.protein = null;
      AppState.selectedFoods.carb = null;
    }
  }

  updatePlateView();
}

// ==============================================================================
// TOAST NOTIFICATIONS
// ==============================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("is-visible");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

// ==============================================================================
// UTILIDADES
// ==============================================================================
function getFoodById(id) {
  if (!id) return null;
  return FOOD_DATABASE.find(f => f.id === id) || null;
}

// ==============================================================================
// CONFIGURACIÓN DE EVENT LISTENERS
// ==============================================================================
function setupEventListeners() {
  // Selector de variaciones
  const variationChips = document.getElementById("variationChips");
  if (variationChips) {
    variationChips.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip-btn");
      if (btn) {
        const mode = btn.getAttribute("data-mode");
        setMode(mode, true);
      }
    });
  }

  // Buscador de alimentos
  const searchInput = document.getElementById("foodSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = e.target.value ? "block" : "none";
      }
      renderFoodCatalog();
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      AppState.searchQuery = "";
      clearSearchBtn.style.display = "none";
      renderFoodCatalog();
    });
  }

  // Filtros de categoría de alimentos
  const catButtons = document.getElementById("categoryFilterButtons");
  if (catButtons) {
    catButtons.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-pill");
      if (btn) {
        document.querySelectorAll("#categoryFilterButtons .cat-pill").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        AppState.activeCategoryFilter = btn.getAttribute("data-category");
        renderFoodCatalog();
      }
    });
  }

  // Botón Vaciar Plato
  const btnClearPlate = document.getElementById("btnClearPlate");
  if (btnClearPlate) {
    btnClearPlate.addEventListener("click", () => {
      AppState.selectedFoods = {
        veggie: null,
        protein: null,
        carb: null,
        fat: null,
        legume: null
      };
      updatePlateView();
      renderFoodCatalog();
      showToast("Plato vaciado. ¡Comienza a llenarlo!");
    });
  }

  // Botón Compartir / Copiar
  const btnSharePlate = document.getElementById("btnSharePlate");
  if (btnSharePlate) {
    btnSharePlate.addEventListener("click", sharePlate);
  }

  // Botón Plato Sorpresa
  const btnRandomPlate = document.getElementById("btnRandomPlate");
  if (btnRandomPlate) {
    btnRandomPlate.addEventListener("click", generateRandomPlate);
  }

  // Modal Imagen Original
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

  // Modal Chef
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

  // Modal Zone Picker
  const modalZone = document.getElementById("modalZonePicker");
  const btnCloseZone = document.getElementById("btnCloseZonePicker");
  if (btnCloseZone && modalZone) {
    btnCloseZone.addEventListener("click", closeZonePicker);
  }
  if (modalZone) {
    modalZone.addEventListener("click", (e) => {
      if (e.target === modalZone) closeZonePicker();
    });
  }

  // Cerrar modales con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeZonePicker();
      closeChefModal();
      if (modalOriginal) modalOriginal.classList.remove("is-open");
    }
  });
}
