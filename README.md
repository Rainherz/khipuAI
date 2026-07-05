# Khipu AI — Landing Page

Landing page oficial de **Khipu AI**, una aplicación Android para estudiantes universitarios que extrae conceptos clave de apuntes utilizando inteligencia artificial y programa repeticiones espaciadas con el algoritmo SM-2.

## 🚀 Tecnologías

*   **Framework:** [Astro](https://astro.build/) (SSG / Estático)
*   **Fuentes:** Outfit (Títulos) + Inter (Cuerpo)
*   **Diseño:** CSS nativo (Variables CSS y diseño fluido responsive)
*   **Gestor de paquetes:** `pnpm`

## 🛠️ Funcionalidades del Landing

1.  **Simulador de App Interactivo (Hero):** Mockup de celular en CSS con el que el usuario puede interactuar para previsualizar el Planner, las Flashcards (con giro de tarjeta) y el Tutor IA.
2.  **Integración de Demostraciones:** Enlaces interactivos en la sección de características que desplazan la pantalla y cambian dinámicamente la vista del simulador del Hero.
3.  **Captura de Leads (Formspree AJAX):** Formulario de registro PRO asíncrono con spinner de carga y mensajes inline de éxito/error.
4.  **Guía de Instalación del APK:** Sección visual en la página de descargas detallando cómo instalar archivos APK externos en Android.
5.  **Navegación Móvil Responsive:** Menú tipo hamburguesa nativo y fluido para smartphones.
6.  **FAQs Interactivos:** Preguntas frecuentes con comportamiento nativo de acordeón exclusivo (abrir una pregunta cierra las demás).

## 💻 Desarrollo Local

Para correr el proyecto en tu máquina local:

1.  Instala las dependencias:
    ```bash
    pnpm install
    ```

2.  Inicia el servidor de desarrollo:
    ```bash
    pnpm run dev
    ```

3.  Construye el bundle para producción:
    ```bash
    pnpm run build
    ```

## 📄 Licencia

Este proyecto es de código cerrado para el desarrollo de Khipu AI.
