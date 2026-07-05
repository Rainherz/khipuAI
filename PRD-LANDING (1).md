# Khipu AI — Landing Page Documentación

## 1. ¿Qué es Khipu AI?

Khipu AI es una aplicación Android para estudiantes universitarios. Permite **subir apuntes** (PDF, fotos) y la **inteligencia artificial extrae automáticamente los conceptos clave con sus definiciones**, luego los convierte en **flashcards con algoritmo SM-2** (repetición espaciada) para que el estudiante retenga la información a largo plazo.

### Valor único
- No hay que crear flashcards manualmente (como en Anki)
- La IA extrae los conceptos directamente de los apuntes del usuario
- SM-2 programa los repasos en el momento óptimo (justo antes de olvidar)
- Chat tutor IA para resolver dudas sobre los conceptos

---

## 2. Funcionalidades EXISTENTES (7 funcionalidades funcionando)

| # | Funcionalidad | Descripción | Cómo mostrarlo en el landing |
|---|---|---|---|
| 1 | **Subida de apuntes** | OCR extrae texto de PDFs e imágenes. IA identifica conceptos y genera definiciones automáticamente. | Screenshot del proceso de subida |
| 2 | **Flashcards SM-2** | El algoritmo de repetición espaciada muestra los conceptos justo cuando los estás por olvidar. Calificas del 0 (olvidado) al 5 (perfecto). | Screenshot de flashcard frontal y trasera |
| 3 | **Chat tutor IA** | Durante el repaso, puedes preguntarle al tutor sobre cualquier concepto. Aparece un BottomSheet sin interrumpir la sesión. | Screenshot del BottomSheet del tutor |
| 4 | **Modo examen** | Genera exámenes de opción múltiple con IA sobre los temas del curso. | Screenshot del examen en curso |
| 5 | **Grafo de conocimiento** | Mapa interactivo (D3.js) que muestra cómo se relacionan los conceptos entre sí (REQUIERE, DEPENDE_DE). | Screenshot del grafo en el CourseDetail |
| 6 | **Guía de estudio** | Resumen ejecutivo + glosario con definiciones + quiz de práctica. | Screenshot de la guía de estudio |
| 7 | **Estadísticas y progreso** | Racha de días, porcentaje de dominio, progreso por curso, historial de repasos. | Screenshot del Planner y estadísticas |

---

## 3. Capturas de pantalla (para el landing)

Se necesitan capturas del emulador Android. Las pantallas clave:

| Pantalla | Propósito |
|---|---|
| Home (Planner) | Mostrar el dashboard con agenda diaria, racha, progreso |
| Flashcards | Mostrar el frente y dorso de una flashcard con definición |
| Course Detail | Mostrar el grafo interactivo + sección de conceptos a dominar |
| Chat tutor | Mostrar el BottomSheet del tutor durante una flashcard |
| Modo examen | Mostrar una pregunta de opción múltiple |
| Guía de estudio | Mostrar el glosario con definiciones |

**Formato**: PNG, 1080x1920 (pantalla de emulador), sin notificaciones ni barras de sistema.

---

## 4. Planes y precios

| | FREE | PRO |
|---|---|---|
| Subidas de archivos/mes | 30 | Ilimitado |
| Mensajes al tutor/día | 20 | Ilimitado |
| Cursos | 3 | Ilimitado |
| Exámenes generados | 2 (total) | Ilimitado |
| Flashcards SM-2 | ✅ Ilimitado | ✅ Ilimitado |
| Grafo de conocimiento | ✅ Ilimitado | ✅ Ilimitado |
| Guía de estudio | ✅ Ilimitado | ✅ Ilimitado |
| **Precio** | **Gratis** | **Próximamente** |

> Nota: El pago PRO aún no está implementado (no hay Stripe). Los usuarios PRO se activan manualmente. En el landing se puede poner "Próximamente" o "Contacta con nosotros".

---

## 5. Stack técnico del landing

| Recurso | Recomendación | Costo |
|---|---|---|
| Framework | Next.js, Astro, o HTML+CSS plano | $0 |
| Hosting | Vercel (vercel.app) o Netlify | $0 |
| Dominio | *.vercel.app o *.netlify.app (gratis), o comprar .app ~$12/año | $0-$12 |
| Analytics | Plausible (plausible.io, gratis) o Google Analytics | $0 |
| Formulario contacto | Formspree (formspree.io, 50 subs/mes gratis) | $0 |
| Iconos | Lucide Icons (lucide.dev) o Heroicons | $0 |
| Fuentes | Outfit (títulos) + Inter (cuerpo) — Google Fonts | $0 |

---

## 6. Diseño y marca

### Colores
```css
/* Variables CSS */
--color-primary: #7C3AED;        /* Morado Khipu */
--color-primary-dark: #6D28D9;
--color-primary-light: #A78BFA;
--color-secondary: #3B82F6;      /* Azul */
--color-surface: #F8FAFC;        /* Fondo claro */
--color-text: #1E293B;           /* Texto oscuro */
--color-text-muted: #64748B;     /* Texto secundario */
--color-success: #10B981;        /* Verde (flashcards dominadas) */
--color-error: #EF4444;          /* Rojo (pendientes) */
```

### Tipografía
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- CSS -->
font-family: 'Outfit', sans-serif;  /* Títulos */
font-family: 'Inter', sans-serif;   /* Cuerpo */
```

### Logo
- Usar el logo/icono de la app desde `D:\Khipu IA\KhipuAI\app\src\main\res\mipmap-hdpi\`
- Se puede exportar como SVG para el landing

---

## 7. Secciones del landing

### Hero (pliegue superior)
```
Título: "Sube tus apuntes. La IA los convierte en flashcards."
Subtítulo: "Khipu AI extrae automáticamente los conceptos clave de tus PDFs y fotos, y programa repasos inteligentes con SM-2 para que nunca olvides lo que estudiaste."
CTA: "Descargar APK" (enlace al APK)
Mockup: Mockup del celular mostrando el Planner
```

### Cómo funciona (3 pasos)
```
1. Sube tu apunte (PDF o foto)
2. La IA extrae conceptos y definiciones
3. Repasa con flashcards SM-2 y chat tutor

[Incluir iconos o ilustraciones simples para cada paso]
```

### Funcionalidades (grid de 3 columnas)
```
| Subida Inteligente | Flashcards SM-2 | Chat Tutor IA |
|--------------------|-----------------|---------------|
| OCR + IA extraen conceptos automáticamente | Repaso espaciado: califica 0-5, el algoritmo programa cuándo repasar | Pregunta sobre cualquier concepto durante el repaso |

| Modo Examen | Grafo de Conocimiento | Guía de Estudio |
|--------------|----------------------|-----------------|
| Genera exámenes de práctica con IA | Mapa interactivo de conceptos relacionados | Resumen + glosario + quiz |

[Cada tarjeta debe incluir icono + texto breve + enlace a screenshot]
```

### Métricas (opcional, si se quiere mostrar datos)
```
Podría mostrar texto estático como:
"300+ estudiantes usando Khipu AI"
"1000+ conceptos extraídos por la IA"
Esos números se actualizan manualmente.
```

### Planes y precios
```
Ver sección 4 de este documento.
```

### FAQ
```
P: ¿Qué es SM-2?
R: Es un algoritmo de repetición espaciada que programa los repasos justo cuando estás por olvidar un concepto. Si lo recuerdas bien, el intervalo se alarga. Si lo olvidas, el intervalo se acorta.

P: ¿Necesito tarjeta de crédito?
R: No. El plan FREE es completamente gratuito sin necesidad de tarjeta.

P: ¿Puedo subir cualquier tipo de archivo?
R: Sí, PDF, imágenes (JPG, PNG) — la IA extrae el texto mediante OCR.

P: ¿Cómo se consigue el plan PRO?
R: Por ahora el plan PRO se activa manualmente. Escríbenos a [email] para más información.

P: ¿Dónde se almacenan mis datos?
R: En servidores en la nube con cifrado. No compartimos tus apuntes con terceros.
```

### Footer
```
© 2026 Khipu AI. Todos los derechos reservados.
Email: contacto@khipuai.app (o el que tengan)
```

---

## 8. Sistema de medición (analytics)

### En el landing
- **Plausible Analytics** (gratis, opensource, sin cookies): conteo de visitas, páginas vistas, tiempo en página, clics en botones
- Alternativa gratuita: **Google Analytics** (configurar propiedad sin datos personales)

### Eventos a trackear
| Evento | Dónde se dispara | Métrica |
|---|---|---|
| `page_view` | Cada página del landing | Tráfico total |
| `click_download` | Clic en "Descargar APK" | Interés en la app |
| `click_plan_free` | Clic en "Comenzar gratis" | Intención de registro |
| `click_plan_pro` | Clic en "Saber más PRO" | Interés en plan pago |

### Nota importante
No hay un endpoint público de estadísticas. Los números como "usuarios activos" o "conceptos creados" se actualizan **manualmente** editando el HTML/JS del landing. No hay backend que los sirva automáticamente.

---

## 9. Roadmap (real, sin fechas)

```
✅ Lanzamiento inicial — Julio 2026
  • App funcional con subida de apuntes, flashcards SM-2, chat tutor,
    modo examen, grafo de conocimiento, guía de estudio, estadísticas
  • Landing page pública
  • Distribución via APK directo

🔄 Siguiente
  • Google Sign-In (login con cuenta Google)
  • Notificaciones push recordatorio de repaso
  • Más proveedores de IA (fallback automático Groq/Gemini)
  • Mejoras en la extracción de conceptos

🔮 Futuro
  • Sistema de pagos PRO (Stripe)
  • Posible publicación en Google Play
  • Versión iOS
  • Comunidad de mazos compartidos
```

---

## 10. Distribución del APK (cómo lo descarga el usuario)

El APK se genera localmente y debe estar alojado en algún lado para que los usuarios lo descarguen.

### Opciones de hosting del APK

| Opción | Ventaja | Desventaja |
|---|---|---|
| **GitHub Releases** ✅ | Gratis, versionado, los usuarios ven changelog | Requiere cuenta GitHub |
| **Google Drive** | Simple, cualquiera puede descargar | No hay versionado, enlace puede caducar |
| **Directo desde el landing** | Experiencia fluida | El APK ocupa espacio en el servidor de Vercel (~30MB) |

**Recomendación**: GitHub Releases + enlace directo desde el landing.

### Flujo de actualización
```
1. Desarrollo: ./gradlew assembleDebug
2. Subir APK a GitHub Releases con número de versión
3. Actualizar enlace en el landing
4. Opcional: agregar detector de versión en la app para notificar actualizaciones
```

### Versionado
```
Formato: Año.Mes.Número (ej: 2026.7.1)
El número de versión está en app/build.gradle.kts → versionName
```

---

## 11. Demo visual (video / GIF)

Las capturas estáticas no son suficientes. El landing necesita un **video corto** o **GIF animado** mostrando el flujo principal.

### Qué grabar (máximo 30 segundos)
```
1. (5s) Abrir la app → Planner con agenda diaria
2. (5s) Tap en "Comenzar Repaso Diario" → aparece flashcard
3. (5s) Tap para voltear → se ve la definición
4. (5s) Calificar 4 → siguiente flashcard
5. (5s) Tap en "Preguntar al tutor" → escribir pregunta → respuesta de IA
6. (5s) Resultados del repaso: "3/5 recordados"
```

### Herramientas
- **Screen recorder**: Android Studio Logcat o cualquier grabador de pantalla
- **Convertir a GIF**: FFmpeg o ezgif.com
- **Tamaño**: Máximo 5MB, 720p

---

## 12. Privacidad y legales (IMPORTANTE)

El landing necesita una página de **Política de Privacidad** y **Términos de Uso**. No es opcional si la app recolecta datos de usuario (correo, apuntes, etc.).

### Contenido mínimo de la Política de Privacidad
```
- Qué datos recolectamos (correo, nombre, apuntes subidos)
- Cómo se usan (mejorar la IA, programar repasos)
- Almacenamiento (servidores en la nube con cifrado)
- No compartimos datos con terceros
- Derecho a eliminar la cuenta y los datos
- Correo de contacto para ejercer derechos
```

### Plantilla
Usar https://www.privacypolicygenerator.info/ o similar para generar el texto. Publicar como `/privacy` y `/terms` en el landing.

---

## 13. Captura de leads (para futuros PRO)

Agregar un formulario de email en el landing para cuando el plan PRO esté listo.

### Sección sugerida
```
🏆 ¿Quieres acceso PRO?
Déjanos tu correo y te avisaremos cuando el plan PRO esté disponible.
[email input] [Suscribirme]
```

### Herramienta
- **Formspree** (gratis, 50 submissions/mes): https://formspree.io
- O **ConvertKit** (gratis hasta 300 suscriptores) si quieren email marketing

---

## 14. SEO y meta tags

### Meta tags para redes sociales
```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Khipu AI — Flashcards inteligentes para tus apuntes" />
<meta property="og:description" content="Sube tus apuntes. La IA los convierte en flashcards con SM-2." />
<meta property="og:image" content="https://khipu-ai.vercel.app/og-image.png" />
<meta property="og:url" content="https://khipu-ai.vercel.app" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Khipu AI" />
<meta name="twitter:description" content="Sube tus apuntes. La IA los convierte en flashcards." />

<!-- General -->
<meta name="description" content="Khipu AI extrae conceptos de tus apuntes y programa repasos inteligentes con SM-2. Estudia más, olvida menos." />
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
```

### Estructura de URLs
```
/              → Landing principal
/privacy       → Política de privacidad
/terms         → Términos de uso
/download      → Página de descarga del APK (o redirect al APK)
/blog          → (opcional) Changelog y novedades
```

---

## 15. Assets que tu compañero necesita

| Recurso | Cómo obtenerlo |
|---|---|
| **Logo de la app** | Exportar desde `app/src/main/res/mipmap-hdpi/` como PNG y convertir a SVG |
| **Capturas de pantalla** | Tomar en emulador Android a 1080x1920 |
| **Icono de la app (favicon)** | Usar el mismo logo redimensionado a 32x32 |
| **APK para descarga** | Compilar con `./gradlew assembleDebug` → `app/build/outputs/apk/debug/app-debug.apk` |
| **Colores y fuentes** | Definidos en sección 6 de este documento |

---

## 16. Checklist de implementación

```
☐ Hero section con mockup y CTA de descarga
☐ Sección "Cómo funciona" (3 pasos)
☐ Sección de funcionalidades (grid 3×2)
☐ Sección de planes y precios (FREE vs PRO)
☐ Sección FAQ
☐ Footer con contacto
☐ Analytics configurado (Plausible o GA)
☐ Favicon y meta tags para redes sociales
☐ Responsive design (mobile-first)
☐ Hosting en Vercel/Netlify
☐ Dominio configurado (opcional)
☐ APK subido y enlace funcionando
```

---

*Documento generado el 05/07/2026 — Para el desarrollo del landing page de Khipu AI*
