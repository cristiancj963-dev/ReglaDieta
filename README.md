# 🥗 Diseña tu Plato Saludable (Regla 50-20-20-10)

Aplicación web interactiva móvil first basada en la regla visual de diseño de platos equilibrados:
- **50% Verduras y hortalizas sin almidón**
- **20% Proteína magra**
- **20% Carbohidratos complejos**
- **10% Grasas saludables**

Incluye adaptaciones automáticas según los alimentos elegidos (como proteínas con grasa integrada, legumbres o cenas ligeras), priorizando siempre **alimentos limpios, no ultraprocesados y 100% reales**.

---

## 📱 Características Principales

1. **Plato Visual Interactivo (SVG):**
   - Pulsa sobre cualquier zona del plato para explorar y seleccionar alimentos limpios.
   - Gráfica adaptativa con iconos, nombres de alimentos y porcentajes en tiempo real.
2. **Adaptaciones Inteligentes del Plato:**
   - **🐟 Proteína Grasa (Salmón, Huevos enteros, Ternera):** Al seleccionar un alimento rico en grasa natural, la cuota de grasa se fusiona con la proteína ocupando el **30% del plato** y eliminando la necesidad de grasa extra añadida (evitando excesos calóricos).
   - **🫘 Legumbres (Lentejas, Garbanzos):** Como aportan hidratos y proteína vegetal a la vez, se expanden al 35% del plato.
   - **🥑 Cena Ligera / Low Carb:** 60% Verduras, 30% Proteína, 10% Grasa.
   - **✨ Personalizado / Libre:** Diseña a tu gusto y el plato te asesora.
3. **Catálogo de Comida Limpia (100% Real Food):**
   - Más de 30 alimentos con sugerencias de preparación limpia (al vapor, horno, plancha).
   - Porciones visuales estimadas (palma de la mano, puño, tazas).
   - Buscador rápido y filtros por categoría.
4. **Asesor Nutricional en Vivo:**
   - Mensajes contextuales que explican la combinación elegida.
5. **Inspiración y Herramientas:**
   - ⚡ **Platos Listos:** Recetas equilibradas precargadas en 1 toque.
   - 🎲 **Plato Sorpresa:** Genera combinaciones limpias y aleatorias.
   - 📋 **Copiar Receta / Lista:** Exporta la combinación al portapapeles para WhatsApp o lista de la compra.
   - 🖼️ **Infografía Original:** Visualiza la imagen de referencia del plato original (`reglaDieta.jpg`).

---

## 🚀 Cómo Publicar en GitHub Pages (Paso a Paso)

Este proyecto está construido con HTML5, CSS3 y JavaScript puro (vanilla), sin dependencias ni compiladores, por lo que **se publica directamente en GitHub Pages en 1 minuto**.

### Paso 1: Inicializar Git y hacer commit (ya preparado)

Si aún no has vinculado tu repositorio remoto, abre tu terminal en esta carpeta y ejecuta:

```bash
# Ya hemos inicializado el repositorio y hecho el commit inicial.
# Si quieres verificarlo:
git status
```

### Paso 2: Crear el repositorio en GitHub

1. Entra a [github.com](https://github.com) e inicia sesión.
2. Haz clic en el botón verde **"New"** (Nuevo repositorio).
3. Nómbralo por ejemplo: `regla-dieta` (o el nombre que prefieras).
4. Déjalo como **Público** (Public) y **no marques** la casilla de añadir README ni .gitignore (ya los tenemos listos).
5. Haz clic en **"Create repository"**.

### Paso 3: Subir tu código a GitHub

Copia la URL de tu nuevo repositorio y ejecuta en la terminal:

```bash
# Añade tu repositorio remoto (sustituye TU_USUARIO y TU_REPO por los tuyos)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Renombra la rama a main y sube los cambios
git branch -M main
git push -u origin main
```

### Paso 4: Activar GitHub Pages

1. En la página de tu repositorio en GitHub, ve a la pestaña **Settings** (Configuración) arriba a la derecha.
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment**:
   - **Source:** Selecciona `Deploy from a branch`.
   - **Branch:** Selecciona `main` y en la carpeta deja `/ (root)`.
4. Haz clic en **Save** (Guardar).
5. En 1-2 minutos, GitHub te mostrará la URL pública de tu web:
   ```
   https://TU_USUARIO.github.io/TU_REPO/
   ```

¡Y listo! Ya podrás abrir el enlace desde tu teléfono móvil o añadirlo a tu pantalla de inicio como una aplicación.

---

## 💻 Probar en Local

Para probarlo en tu ordenador o red local:

```bash
# Con Python:
python3 -m http.server 8080

# Luego abre en tu navegador:
# http://localhost:8080
```
