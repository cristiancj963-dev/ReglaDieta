/**
 * ==============================================================================
 * DISEÑA TU PLATO SALUDABLE - app.js (SENIOR FRIENDLY & INTUITIVO)
 * Clic directo en el diagrama, adaptación automática y fácil deselección.
 * ==============================================================================
 */

// 1. BANCO DE ALIMENTOS LIMPIOS (Comida Real sin procesar)
const FOODS = [
  // --- VERDURAS Y HORTALIZAS (50% DEL PLATO) ---
  {
    id: "v_brocoli",
    name: "Brócoli",
    emoji: "🥦",
    category: "veggie",
    simpleNote: "Al vapor o cocido 4 minutos",
    portionHint: "Llenar la mitad del plato"
  },
  {
    id: "v_tomates",
    name: "Tomates frescos",
    emoji: "🍅",
    category: "veggie",
    simpleNote: "En ensalada con un poco de sal",
    portionHint: "1 o 2 tomates enteros"
  },
  {
    id: "v_espinacas",
    name: "Espinacas",
    emoji: "🍃",
    category: "veggie",
    simpleNote: "Crudas en ensalada o hervidas",
    portionHint: "Un plato hondo colmado"
  },
  {
    id: "v_calabacin",
    name: "Calabacín",
    emoji: "🥒",
    category: "veggie",
    simpleNote: "A la plancha en rodajitas",
    portionHint: "1 calabacín entero mediano"
  },
  {
    id: "v_judias",
    name: "Judías verdes",
    emoji: "🥢",
    category: "veggie",
    simpleNote: "Hervidas con un chorrito de limón",
    portionHint: "Un plato hondo colmado"
  },
  {
    id: "v_esparragos",
    name: "Espárragos trigueros",
    emoji: "🥬",
    category: "veggie",
    simpleNote: "A la plancha con sal marina",
    portionHint: "Un manojo entero"
  },
  {
    id: "v_champinones",
    name: "Champiñones o Setas",
    emoji: "🍄",
    category: "veggie",
    simpleNote: "Salteados con ajo y perejil",
    portionHint: "Un plato hondo de champiñones"
  },
  {
    id: "v_pimientos",
    name: "Pimientos asados",
    emoji: "🫑",
    category: "veggie",
    simpleNote: "Al horno o salteados",
    portionHint: "1 pimiento grande entero"
  },

  // --- PROTEÍNAS: PESCADOS, CARNES, HUEVOS Y LEGUMBRES (20% - 35%) ---
  {
    id: "p_salmon",
    name: "Salmón fresco",
    emoji: "🍣",
    category: "protein",
    subType: "fatty", // Trae grasa natural
    simpleNote: "A la plancha en su propia grasa (¡no necesita aceite!)",
    portionHint: "1 lomo del tamaño de tu palma",
    isFattyProtein: true
  },
  {
    id: "p_huevos",
    name: "Huevos enteros",
    emoji: "🍳",
    category: "protein",
    subType: "fatty",
    simpleNote: "Cocidos, pasados por agua o en tortilla francesa",
    portionHint: "2 huevos medianos enteros",
    isFattyProtein: true
  },
  {
    id: "p_sardinas",
    name: "Sardinas frescas",
    emoji: "🐟",
    category: "protein",
    subType: "fatty",
    simpleNote: "Al horno o plancha. Mucho calcio y omega 3",
    portionHint: "3 o 4 sardinas medianas",
    isFattyProtein: true
  },
  {
    id: "p_ternera",
    name: "Filete de Ternera",
    emoji: "🥩",
    category: "protein",
    subType: "fatty",
    simpleNote: "A la plancha vuelta y vuelta",
    portionHint: "1 filete fino sin grasa externa",
    isFattyProtein: true
  },
  {
    id: "p_pollo",
    name: "Pechuga de Pollo",
    emoji: "🍗",
    category: "protein",
    subType: "lean", // Magra
    simpleNote: "A la plancha con limón y orégano",
    portionHint: "1 filete del tamaño de la palma",
    isFattyProtein: false
  },
  {
    id: "p_merluza",
    name: "Merluza o Bacalao",
    emoji: "🐟",
    category: "protein",
    subType: "lean",
    simpleNote: "Hervida, al vapor o al horno",
    portionHint: "1 lomo o filete mediano",
    isFattyProtein: false
  },
  {
    id: "p_pavo",
    name: "Pechuga de Pavo",
    emoji: "🦃",
    category: "protein",
    subType: "lean",
    simpleNote: "A la plancha bien dorada",
    portionHint: "1 filete limpio de pavo",
    isFattyProtein: false
  },
  {
    id: "p_garbanzos",
    name: "Garbanzos",
    emoji: "🧆",
    category: "protein",
    subType: "legume", // Trae proteína e hidrato
    simpleNote: "Cocidos con verduras o en ensalada",
    portionHint: "1 taza colmada (ya aporta hidratos y proteína)",
    isLegume: true
  },
  {
    id: "p_lentejas",
    name: "Lentejas",
    emoji: "🫘",
    category: "protein",
    subType: "legume",
    simpleNote: "Guisadas con verduras sin embutidos",
    portionHint: "1 taza colmada de lentejas",
    isLegume: true
  },

  // --- CARBOHIDRATOS: PATATA, ARROZ, PAN (20%) ---
  {
    id: "c_patata",
    name: "Patata cocida",
    emoji: "🥔",
    category: "carb",
    simpleNote: "Hervida o al vapor con piel",
    portionHint: "1 patata del tamaño de tu puño"
  },
  {
    id: "c_arroz",
    name: "Arroz blanco o integral",
    emoji: "🍚",
    category: "carb",
    simpleNote: "Cocido con una hoja de laurel",
    portionHint: "1 vasito pequeño de arroz cocido"
  },
  {
    id: "c_boniato",
    name: "Boniato / Batata",
    emoji: "🍠",
    category: "carb",
    simpleNote: "Asado al horno con piel",
    portionHint: "1 boniato mediano dulce"
  },
  {
    id: "c_pan",
    name: "Pan 100% integral",
    emoji: "🍞",
    category: "carb",
    simpleNote: "Pan de panadería de masa madre",
    portionHint: "1 rebanada mediana (~40-50g)"
  },
  {
    id: "c_quinoa",
    name: "Quinoa cocida",
    emoji: "🌾",
    category: "carb",
    simpleNote: "Hervida con un poco de caldo",
    portionHint: "1 taza pequeña cocida"
  },

  // --- GRASAS SALUDABLES (10%) ---
  {
    id: "f_aove",
    name: "Aceite de Oliva (AOVE)",
    emoji: "🫒",
    category: "fat",
    simpleNote: "Un chorrito en crudo sobre la verdura",
    portionHint: "1 cucharada sopera rasa"
  },
  {
    id: "f_aguacate",
    name: "Aguacate",
    emoji: "🥑",
    category: "fat",
    simpleNote: "En rodajitas frescas con sal",
    portionHint: "Un cuarto de aguacate (1/4)"
  },
  {
    id: "f_nueces",
    name: "Nueces crudas",
    emoji: "🥜",
    category: "fat",
    simpleNote: "Crudas, sin freír ni salar",
    portionHint: "4 o 5 nueces peladas"
  },
  {
    id: "f_almendras",
    name: "Almendras crudas",
    emoji: "🌰",
    category: "fat",
    simpleNote: "Crudas o ligeramente tostadas",
    portionHint: "Un puñadito cerrado (~10 almendras)"
  },
  {
    id: "f_aceitunas",
    name: "Aceitunas",
    emoji: "🫒",
    category: "fat",
    simpleNote: "Naturales con hueso",
    portionHint: "6 u 8 aceitunas"
  }
];

// 2. EJEMPLOS DE PLATOS YA HECHOS
const CHEF_PRESETS = [
  {
    title: "Salmón con Patata y Brócoli",
    desc: "El salmón ya lleva su grasa buena. ¡No necesitas aceite!",
    foods: { veggie: "v_brocoli", protein: "p_salmon", carb: "c_patata", fat: null }
  },
  {
    title: "Pollo con Arroz, Ensalada y Aceite",
    desc: "Como el pollo es carne limpia sin grasa, se aliña con aceite de oliva.",
    foods: { veggie: "v_tomates", protein: "p_pollo", carb: "c_arroz", fat: "f_aove" }
  },
  {
    title: "Huevos Cocidos con Boniato y Espinacas",
    desc: "Los huevos aportan la proteína y la grasa natural.",
    foods: { veggie: "v_espinacas", protein: "p_huevos", carb: "c_boniato", fat: null }
  },
  {
    title: "Lentejas con Judías Verdes y Aceite",
    desc: "Las lentejas ya son hidrato y proteína vegetal a la vez.",
    foods: { veggie: "v_judias", protein: "p_lentejas", carb: null, fat: "f_aove" }
  }
];

// 3. ESTADO DEL PLATO
const CurrentPlate = {
  veggie: null,   // id del alimento
  protein: null,  // id del alimento
  carb: null,     // id del alimento
  fat: null       // id del alimento
};

// ==============================================================================
// INICIALIZACIÓN AL ABRIR LA PÁGINA
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  setupAppEvents();
  renderChefList();
  refreshPlateDisplay();
});

// ==============================================================================
// REGLAS Y ADAPTACIÓN DEL PLATO
// ==============================================================================
function getPlateRules() {
  const chosenProtein = getFood(CurrentPlate.protein);

  return {
    isFatty: chosenProtein ? !!chosenProtein.isFattyProtein : false,
    isLegume: chosenProtein ? !!chosenProtein.isLegume : false,
    proteinFood: chosenProtein
  };
}

// ==============================================================================
// ACTUALIZAR TODA LA PANTALLA
// ==============================================================================
function refreshPlateDisplay() {
  const rules = getPlateRules();

  // Si eligió salmón o huevos, limpiamos la grasa separada
  if (rules.isFatty) {
    CurrentPlate.fat = null;
  }
  // Si eligió legumbres, limpiamos los hidratos separados
  if (rules.isLegume) {
    CurrentPlate.carb = null;
  }

  drawSvgPlate(rules);
  renderMacroCards(rules);
  updateStatusBox(rules);
}

// ==============================================================================
// DIBUJAR EL PLATO SVG INTERACTIVO
// ==============================================================================
function drawSvgPlate(rules) {
  const slicesGroup = document.getElementById("svgSlicesGroup");
  if (!slicesGroup) return;
  slicesGroup.innerHTML = "";

  const veggieFood = getFood(CurrentPlate.veggie);
  const carbFood = getFood(CurrentPlate.carb);
  const fatFood = getFood(CurrentPlate.fat);
  const proteinFood = rules.proteinFood;

  // Calculamos qué porciones dibujar según si es Salmón, Legumbres o Normal
  let slices = [];

  if (rules.isFatty) {
    // VARIACIÓN SALMÓN/HUEVOS: 50% Verduras, 30% Proteína+Grasa (Salmón), 20% Hidratos
    slices = [
      {
        id: "veggie",
        percent: 50,
        color: "#15803d",
        label: "VERDURAS",
        sub: veggieFood ? veggieFood.name : "Tocar para elegir",
        emoji: veggieFood ? veggieFood.emoji : "🥦",
        hasFood: !!veggieFood
      },
      {
        id: "protein",
        percent: 30,
        color: "#e11d48", // Rosa/Rojo salmón
        label: "PROTEÍNA + GRASA",
        sub: proteinFood ? proteinFood.name : "Tocar para elegir",
        emoji: proteinFood ? proteinFood.emoji : "🍣",
        hasFood: !!proteinFood
      },
      {
        id: "carb",
        percent: 20,
        color: "#b45309",
        label: "HIDRATOS",
        sub: carbFood ? carbFood.name : "Tocar para elegir",
        emoji: carbFood ? carbFood.emoji : "🥔",
        hasFood: !!carbFood
      }
    ];
  } else if (rules.isLegume) {
    // VARIACIÓN LEGUMBRES: 50% Verduras, 35% Legumbres (HC+P), 15% Grasa/aliño
    slices = [
      {
        id: "veggie",
        percent: 50,
        color: "#15803d",
        label: "VERDURAS",
        sub: veggieFood ? veggieFood.name : "Tocar para elegir",
        emoji: veggieFood ? veggieFood.emoji : "🥦",
        hasFood: !!veggieFood
      },
      {
        id: "protein",
        percent: 35,
        color: "#6d28d9", // Morado legumbres
        label: "LEGUMBRES",
        sub: proteinFood ? proteinFood.name : "Tocar para elegir",
        emoji: proteinFood ? proteinFood.emoji : "🫘",
        hasFood: !!proteinFood
      },
      {
        id: "fat",
        percent: 15,
        color: "#0369a1",
        label: "ACEITE / ALIÑO",
        sub: fatFood ? fatFood.name : "Tocar para elegir",
        emoji: fatFood ? fatFood.emoji : "🥑",
        hasFood: !!fatFood
      }
    ];
  } else {
    // PLATO BASE / NORMAL: 50% Verduras, 20% Proteína, 20% Hidratos, 10% Grasas
    slices = [
      {
        id: "veggie",
        percent: 50,
        color: "#15803d",
        label: "50% VERDURAS",
        sub: veggieFood ? veggieFood.name : "Tocar para elegir",
        emoji: veggieFood ? veggieFood.emoji : "🥦",
        hasFood: !!veggieFood
      },
      {
        id: "protein",
        percent: 20,
        color: "#ea580c",
        label: "20% PROTEÍNA",
        sub: proteinFood ? proteinFood.name : "Tocar para elegir",
        emoji: proteinFood ? proteinFood.emoji : "🍗",
        hasFood: !!proteinFood
      },
      {
        id: "carb",
        percent: 20,
        color: "#b45309",
        label: "20% HIDRATOS",
        sub: carbFood ? carbFood.name : "Tocar para elegir",
        emoji: carbFood ? carbFood.emoji : "🥔",
        hasFood: !!carbFood
      },
      {
        id: "fat",
        percent: 10,
        color: "#0369a1",
        label: "10% GRASA",
        sub: fatFood ? fatFood.name : "Tocar para elegir",
        emoji: fatFood ? fatFood.emoji : "🫒",
        hasFood: !!fatFood
      }
    ];
  }

  // Dimensiones del plato SVG: centro (210, 210), radio 175
  const cx = 210;
  const cy = 210;
  const r = 175;

  // Comenzamos a las 12h (-90 grados). Sentido horario.
  let currentAngle = -90;

  slices.forEach((slice) => {
    const sweep = (slice.percent / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sweep;
    currentAngle += sweep;

    const pathData = getSvgArcString(cx, cy, r, startAngle, endAngle);

    // Calcular centroide para los textos
    const midAngle = startAngle + sweep / 2;
    const midRad = (midAngle * Math.PI) / 180;
    const labelRadius = r * 0.58;
    const tx = cx + labelRadius * Math.cos(midRad);
    const ty = cy + labelRadius * Math.sin(midRad);

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "svg-slice-group");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", `Zona ${slice.label}`);

    // Sector coloreado
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill", slice.color);
    path.setAttribute("class", "slice-path");
    g.appendChild(path);

    // Pastilla blanca grande de texto
    const pillW = sweep < 50 ? 76 : 106;
    const pillH = 62;

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", tx - pillW / 2);
    rect.setAttribute("y", ty - pillH / 2);
    rect.setAttribute("width", pillW);
    rect.setAttribute("height", pillH);
    rect.setAttribute("rx", "14");
    rect.setAttribute("class", "slice-pill-bg");
    g.appendChild(rect);

    // Emoji del alimento
    const emojiText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    emojiText.setAttribute("x", tx);
    emojiText.setAttribute("y", ty - 12);
    emojiText.setAttribute("class", "slice-emoji-big");
    emojiText.textContent = slice.emoji;
    g.appendChild(emojiText);

    // Nombre principal (ej: 50% VERDURAS o SALMÓN)
    const titleText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    titleText.setAttribute("x", tx);
    titleText.setAttribute("y", ty + 12);
    titleText.setAttribute("class", "slice-text-title");
    titleText.setAttribute("fill", slice.color);
    titleText.textContent = slice.hasFood ? slice.sub : slice.label;
    g.appendChild(titleText);

    // Subtítulo pequeño: Si no hay alimento dice "Tocar", si hay dice "✕ Quitar"
    const subText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    subText.setAttribute("x", tx);
    subText.setAttribute("y", ty + 24);
    subText.setAttribute("class", "slice-text-sub");
    if (slice.hasFood) {
      subText.textContent = "✕ Toca para quitar";
      subText.setAttribute("fill", "#dc2626");
      subText.style.fontWeight = "bold";
    } else {
      subText.textContent = "👆 Toca aquí";
      subText.setAttribute("fill", "#475569");
    }
    g.appendChild(subText);

    // EVENTO DE CLIC DIRECTO EN LA ZONA DEL DIAGRAMA
    g.addEventListener("click", () => {
      handleSliceClick(slice.id);
    });

    slicesGroup.appendChild(g);
  });
}

function getSvgArcString(cx, cy, r, startAngle, endAngle) {
  if (endAngle - startAngle >= 359.9) {
    endAngle = startAngle + 359.9;
  }
  const rad1 = (startAngle * Math.PI) / 180;
  const rad2 = (endAngle * Math.PI) / 180;

  const x1 = cx + r * Math.cos(rad1);
  const y1 = cy + r * Math.sin(rad1);
  const x2 = cx + r * Math.cos(rad2);
  const y2 = cy + r * Math.sin(rad2);

  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

// ==============================================================================
// GESTIONAR EL CLIC EN UNA ZONA DEL PLATO
// ==============================================================================
function handleSliceClick(zoneId) {
  vibratePhone();

  // Si ya tiene un alimento en esa zona, al tocarlo le damos la opción clara de quitarlo o cambiarlo
  const currentFoodId = CurrentPlate[zoneId];
  if (currentFoodId) {
    // Si ya tiene comida, abrir directamente la lista para cambiarlo o quitarlo
    openPickerModal(zoneId);
    return;
  }

  // Si está vacío, abrir el selector para esa zona
  openPickerModal(zoneId);
}

// ==============================================================================
// TARJETAS INFERIORES GRANDES Y CLARAS
// ==============================================================================
function renderMacroCards(rules) {
  const container = document.getElementById("macroCardsList");
  if (!container) return;
  container.innerHTML = "";

  const veggieFood = getFood(CurrentPlate.veggie);
  const carbFood = getFood(CurrentPlate.carb);
  const fatFood = getFood(CurrentPlate.fat);
  const proteinFood = rules.proteinFood;

  // 1. TARJETA VERDURAS (50%)
  container.appendChild(createMacroCard({
    title: "🥦 Verduras y Hortalizas",
    percentBadge: "50% del plato",
    badgeClass: "badge-veggie",
    food: veggieFood,
    zoneKey: "veggie",
    btnChooseText: "+ Elegir verduras (50%)"
  }));

  // 2. TARJETA PROTEÍNA / PLATO FUERTE
  let proteinBadge = "20% del plato";
  let proteinBadgeClass = "badge-protein";
  let proteinTitle = "🍗 Proteína (Carne o Pescado)";

  if (rules.isFatty) {
    proteinBadge = "30% Proteína con Grasa";
    proteinBadgeClass = "badge-fatty";
    proteinTitle = "🍣 Proteína Grasa (Salmón / Huevos)";
  } else if (rules.isLegume) {
    proteinBadge = "35% Legumbre (HC+P)";
    proteinBadgeClass = "badge-legume";
    proteinTitle = "🫘 Legumbres (Garbanzos / Lentejas)";
  }

  container.appendChild(createMacroCard({
    title: proteinTitle,
    percentBadge: proteinBadge,
    badgeClass: proteinBadgeClass,
    food: proteinFood,
    zoneKey: "protein",
    btnChooseText: "+ Elegir carne, pescado o legumbre"
  }));

  // 3. TARJETA HIDRATOS (20%)
  if (rules.isLegume) {
    // Bloqueado porque las legumbres ya llevan hidratos
    const lockedCard = document.createElement("div");
    lockedCard.className = "macro-item-card";
    lockedCard.innerHTML = `
      <div class="macro-card-top">
        <strong>🥔 Carbohidratos (Patata, Arroz)</strong>
        <span class="macro-badge-pill badge-legume">Cubierto</span>
      </div>
      <div class="macro-locked-notice">
        ✅ <strong>Ya incluidos en las legumbres:</strong> Como has elegido ${proteinFood.name}, ya aportan sus carbohidratos naturales. No necesitas patata ni arroz.
      </div>
    `;
    container.appendChild(lockedCard);
  } else {
    container.appendChild(createMacroCard({
      title: "🥔 Carbohidratos (Patata, Arroz o Pan)",
      percentBadge: "20% del plato",
      badgeClass: "badge-carb",
      food: carbFood,
      zoneKey: "carb",
      btnChooseText: "+ Elegir patata, arroz o pan (20%)"
    }));
  }

  // 4. TARJETA GRASAS SALUDABLES (10%)
  if (rules.isFatty) {
    // Bloqueado porque el salmón ya lleva grasa
    const lockedCard = document.createElement("div");
    lockedCard.className = "macro-item-card";
    lockedCard.innerHTML = `
      <div class="macro-card-top">
        <strong>🥑 Grasas Saludables (Aceite, Aguacate)</strong>
        <span class="macro-badge-pill badge-fatty">Cubierto</span>
      </div>
      <div class="macro-locked-notice">
        ✅ <strong>Grasa natural incluida:</strong> Tu ${proteinFood.name} ya tiene grasa saludable (Omega-3). ¡Ahorras aceite y frutos secos para no pasarte de calorías!
      </div>
    `;
    container.appendChild(lockedCard);
  } else {
    container.appendChild(createMacroCard({
      title: "🥑 Grasa Saludable (Aceite o Frutos secos)",
      percentBadge: rules.isLegume ? "15% del plato" : "10% del plato",
      badgeClass: "badge-fat",
      food: fatFood,
      zoneKey: "fat",
      btnChooseText: "+ Elegir aceite o frutos secos (10%)"
    }));
  }
}

function createMacroCard({ title, percentBadge, badgeClass, food, zoneKey, btnChooseText }) {
  const card = document.createElement("div");
  card.className = "macro-item-card";

  if (food) {
    card.innerHTML = `
      <div class="macro-card-top">
        <strong>${title}</strong>
        <span class="macro-badge-pill ${badgeClass}">${percentBadge}</span>
      </div>
      <div class="macro-card-body">
        <div class="macro-food-info">
          <span class="food-icon-large">${food.emoji}</span>
          <div class="food-texts">
            <strong>${food.name}</strong>
            <span>💡 ${food.simpleNote}</span>
          </div>
        </div>
        <button class="btn-remove-food" onclick="removeFoodFromZone('${zoneKey}')">
          ✕ Quitar
        </button>
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="macro-card-top">
        <strong>${title}</strong>
        <span class="macro-badge-pill ${badgeClass}">${percentBadge}</span>
      </div>
      <button class="btn-select-macro" onclick="openPickerModal('${zoneKey}')">
        ${btnChooseText}
      </button>
    `;
  }

  return card;
}

// ==============================================================================
// QUITAR ALIMENTO (DESELECCIÓN FÁCIL EN 1 TOQUE)
// ==============================================================================
function removeFoodFromZone(zoneKey) {
  vibratePhone();
  const oldFood = getFood(CurrentPlate[zoneKey]);
  CurrentPlate[zoneKey] = null;
  refreshPlateDisplay();

  showToast(`Has quitado ${oldFood ? oldFood.name : 'el alimento'} del plato`);
}

// ==============================================================================
// MENSAJE DE ESTADO INFERIOR
// ==============================================================================
function updateStatusBox(rules) {
  const box = document.getElementById("plateStatusBox");
  const icon = document.getElementById("statusIcon");
  const title = document.getElementById("statusTitle");
  const desc = document.getElementById("statusDesc");
  if (!box || !title || !desc) return;

  const count = [CurrentPlate.veggie, CurrentPlate.protein, CurrentPlate.carb, CurrentPlate.fat].filter(Boolean).length;

  if (!CurrentPlate.protein) {
    icon.textContent = "💡";
    title.textContent = "Comienza eligiendo tu comida fuerte";
    desc.textContent = "Toca en la carne o pescado (20%) en el plato. Si eliges salmón o huevos, el plato se adaptará solo.";
    return;
  }

  if (rules.isFatty) {
    icon.textContent = "🐟";
    title.textContent = `Plato adaptado con ${rules.proteinFood.name}`;
    desc.textContent = `Al llevar grasa natural, no necesitas aceite ni frutos secos. Completa el plato con tus verduras (50%) y patata o arroz (20%).`;
    return;
  }

  if (rules.isLegume) {
    icon.textContent = "🫘";
    title.textContent = `Plato adaptado con ${rules.proteinFood.name}`;
    desc.textContent = `Las legumbres ya aportan hidratos y proteína vegetal. Añade verdura y un chorrito de aceite de oliva.`;
    return;
  }

  if (count >= 4) {
    icon.textContent = "🎉";
    title.textContent = "¡Plato 100% Equilibrado y Completo!";
    desc.textContent = "Cumple perfectamente con la regla de la dieta: comida limpia, no procesada y sana.";
  } else {
    icon.textContent = "⏳";
    title.textContent = "Sigue completando tu plato";
    desc.textContent = "Toca en las zonas vacías del plato para añadir lo que te falta.";
  }
}

// ==============================================================================
// MODAL DE SELECCIÓN DE ALIMENTO (MUY GRANDE Y VISUAL)
// ==============================================================================
let activeModalZone = null;

function openPickerModal(zoneKey) {
  vibratePhone();
  activeModalZone = zoneKey;

  const modal = document.getElementById("modalPicker");
  const iconEl = document.getElementById("pickerIcon");
  const titleEl = document.getElementById("pickerTitle");
  const subtitleEl = document.getElementById("pickerSubtitle");
  const noticeEl = document.getElementById("pickerNotice");
  const listEl = document.getElementById("pickerFoodsList");

  if (!modal || !listEl) return;

  const rules = getPlateRules();

  // Si el usuario intenta tocar Grasa pero tiene Salmón:
  if (zoneKey === "fat" && rules.isFatty) {
    noticeEl.style.display = "block";
    noticeEl.innerHTML = `
      🐟 <strong>Grasas ya cubiertas:</strong> Tu ${rules.proteinFood.name} ya tiene grasa sana. No necesitas frutos secos ni aceite.
    `;
  } else if (zoneKey === "carb" && rules.isLegume) {
    noticeEl.style.display = "block";
    noticeEl.innerHTML = `
      🫘 <strong>Hidratos ya cubiertos:</strong> Tus ${rules.proteinFood.name} ya tienen hidratos. No hace falta arroz ni patata.
    `;
  } else {
    noticeEl.style.display = "none";
  }

  // Título según la zona
  if (zoneKey === "veggie") {
    iconEl.textContent = "🥦";
    titleEl.textContent = "Elige tus Verduras (50%)";
    subtitleEl.textContent = "Llena la mitad de tu plato con verduras limpias";
  } else if (zoneKey === "protein") {
    iconEl.textContent = "🍗";
    titleEl.textContent = "Elige tu Carne, Pescado o Legumbres";
    subtitleEl.textContent = "Si eliges salmón o huevos, ya llevan grasa natural";
  } else if (zoneKey === "carb") {
    iconEl.textContent = "🥔";
    titleEl.textContent = "Elige tu Hidrato (20%)";
    subtitleEl.textContent = "Patata cocida, arroz, boniato o pan integral";
  } else if (zoneKey === "fat") {
    iconEl.textContent = "🥑";
    titleEl.textContent = "Elige tu Grasa Saludable (10%)";
    subtitleEl.textContent = "Aceite de oliva virgen extra, aguacate o frutos secos";
  }

  // Rellenar lista de alimentos
  listEl.innerHTML = "";

  const availableFoods = FOODS.filter(f => f.category === zoneKey);

  availableFoods.forEach((food) => {
    const isSelected = CurrentPlate[zoneKey] === food.id;

    const item = document.createElement("div");
    item.className = `picker-food-item ${isSelected ? 'is-active' : ''}`;

    item.innerHTML = `
      <div class="picker-food-left">
        <span class="picker-food-emoji">${food.emoji}</span>
        <div class="picker-food-text">
          <strong>${food.name}</strong>
          <small>💡 ${food.simpleNote}</small>
          <small style="color: #64748b; font-weight: 600;">📏 ${food.portionHint}</small>
        </div>
      </div>
      <button class="btn-pick-this">
        ${isSelected ? '✓ En tu plato' : 'Elegir'}
      </button>
    `;

    item.addEventListener("click", () => {
      chooseFoodForZone(zoneKey, food.id);
      closePickerModal();
    });

    listEl.appendChild(item);
  });

  modal.classList.add("is-open");
}

function closePickerModal() {
  const modal = document.getElementById("modalPicker");
  if (modal) modal.classList.remove("is-open");
  activeModalZone = null;
}

function chooseFoodForZone(zoneKey, foodId) {
  vibratePhone();
  const food = getFood(foodId);
  CurrentPlate[zoneKey] = foodId;

  refreshPlateDisplay();
  showToast(`¡Has añadido ${food.name} a tu plato! ${food.emoji}`);
}

// ==============================================================================
// PLATOS YA HECHOS (CHEF)
// ==============================================================================
function renderChefList() {
  const list = document.getElementById("chefPresetsList");
  if (!list) return;
  list.innerHTML = "";

  CHEF_PRESETS.forEach((preset, idx) => {
    const card = document.createElement("div");
    card.className = "chef-card";
    card.innerHTML = `
      <div>
        <strong>${preset.title}</strong>
        <small>${preset.desc}</small>
      </div>
      <button class="btn-pick-this" style="padding: 10px 14px;">Cargar</button>
    `;

    card.addEventListener("click", () => {
      CurrentPlate.veggie = preset.foods.veggie;
      CurrentPlate.protein = preset.foods.protein;
      CurrentPlate.carb = preset.foods.carb;
      CurrentPlate.fat = preset.foods.fat;

      refreshPlateDisplay();
      closeChefModal();
      showToast(`Plato cargado: ${preset.title}`);
    });

    list.appendChild(card);
  });
}

function closeChefModal() {
  const modal = document.getElementById("modalChef");
  if (modal) modal.classList.remove("is-open");
}

// ==============================================================================
// REINICIAR PLATO DE CERO
// ==============================================================================
function resetPlateEntirely() {
  vibratePhone();
  CurrentPlate.veggie = null;
  CurrentPlate.protein = null;
  CurrentPlate.carb = null;
  CurrentPlate.fat = null;

  refreshPlateDisplay();
  showToast("Plato vaciado. ¡Pulsa una zona para empezar de nuevo!");
}

// ==============================================================================
// COPIAR LISTA DE INGREDIENTES
// ==============================================================================
function copyPlateList() {
  const v = getFood(CurrentPlate.veggie);
  const p = getFood(CurrentPlate.protein);
  const c = getFood(CurrentPlate.carb);
  const f = getFood(CurrentPlate.fat);

  const lines = [
    `🥗 MI PLATO SALUDABLE`,
    `---------------------------------`
  ];

  if (v) lines.push(`🥦 50% Verduras: ${v.name}`);
  if (p) lines.push(`🥩 Proteína: ${p.name}`);
  if (c) lines.push(`🥔 Hidratos: ${c.name}`);
  if (f) lines.push(`🥑 Grasa saludable: ${f.name}`);

  lines.push(`---------------------------------`);
  lines.push(`100% Comida Real y Sana`);

  const text = lines.join("\n");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 ¡Lista de ingredientes copiada!");
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
  } catch (err) {
    alert(text);
  }
  document.body.removeChild(ta);
}

// ==============================================================================
// UTILIDADES Y AYUDANTES
// ==============================================================================
function getFood(id) {
  if (!id) return null;
  return FOODS.find(f => f.id === id) || null;
}

function vibratePhone() {
  if (navigator.vibrate) {
    navigator.vibrate(35);
  }
}

let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.classList.add("is-visible");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

// ==============================================================================
// CONFIGURAR EVENTOS
// ==============================================================================
function setupAppEvents() {
  // Botón empezar de cero
  const btnReset = document.getElementById("btnResetPlate");
  if (btnReset) btnReset.addEventListener("click", resetPlateEntirely);

  // Cerrar picker
  const btnClosePicker = document.getElementById("btnClosePicker");
  const btnCancelPicker = document.getElementById("btnCancelPicker");
  if (btnClosePicker) btnClosePicker.addEventListener("click", closePickerModal);
  if (btnCancelPicker) btnCancelPicker.addEventListener("click", closePickerModal);

  // Botón foto original
  const btnViewOriginal = document.getElementById("btnViewOriginal");
  const modalOriginal = document.getElementById("modalOriginal");
  const btnCloseOriginal = document.getElementById("btnCloseOriginal");
  const btnConfirmClose = document.getElementById("btnConfirmCloseOriginal");

  if (btnViewOriginal && modalOriginal) {
    btnViewOriginal.addEventListener("click", () => modalOriginal.classList.add("is-open"));
  }
  if (btnCloseOriginal && modalOriginal) {
    btnCloseOriginal.addEventListener("click", () => modalOriginal.classList.remove("is-open"));
  }
  if (btnConfirmClose && modalOriginal) {
    btnConfirmClose.addEventListener("click", () => modalOriginal.classList.remove("is-open"));
  }

  // Botón recetas chef
  const btnChef = document.getElementById("btnQuickRecipes");
  const modalChef = document.getElementById("modalChef");
  const btnCloseChef = document.getElementById("btnCloseChef");

  if (btnChef && modalChef) {
    btnChef.addEventListener("click", () => modalChef.classList.add("is-open"));
  }
  if (btnCloseChef && modalChef) {
    btnCloseChef.addEventListener("click", closeChefModal);
  }

  // Botón compartir lista
  const btnShare = document.getElementById("btnShare");
  if (btnShare) btnShare.addEventListener("click", copyPlateList);

  // Cerrar al pulsar en fondo oscuro
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("is-open");
      }
    });
  });
}
