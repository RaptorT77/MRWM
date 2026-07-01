# MRWM SA de CV - Sitio Web Corporativo

Este es el repositorio del sitio web oficial de **Manufacturing Resistance Welding de México, S.A. de C.V. (MRWM)**. El sitio ha sido diseñado y desarrollado siguiendo principios modernos de UI/UX, enfocándose en la industria automotriz y la manufactura avanzada.

## Características del Proyecto

- **Diseño Moderno e Impactante:** Uso de paletas de colores sobrios (negros, dorados/amarillos y guindas/rojos) con microinteracciones y animaciones.
- **Responsive Design:** Completamente adaptable a dispositivos móviles, tablets y computadoras de escritorio.
- **Tema Claro/Oscuro:** Integración nativa de modo claro y oscuro con botón para alternar (Theme Toggle).
- **SEO Optimizado:** Etiquetas semánticas, metadatos descriptivos y estructura de encabezados para un mejor posicionamiento en buscadores.
- **Vanilla Web Stack:** Desarrollado utilizando HTML5, CSS3 y JavaScript puro (sin frameworks pesados), garantizando tiempos de carga extremadamente rápidos.

## Estructura de Archivos

```
/
├── index.html           # Página principal del sitio web
├── privacidad.html      # Página de Aviso de Privacidad
├── terminos.html        # Página de Términos y Condiciones
├── styles.css           # Hoja de estilos principal (variables, layout, componentes)
├── script.js            # Lógica de interacciones (tema oscuro, menú móvil, scroll)
├── README.md            # Documentación del proyecto (este archivo)
└── assets/
    └── pdf-images/      # Carpeta que contiene las imágenes y logotipos del sitio
```

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica.
- **CSS3:** Variables nativas CSS (Custom Properties), Flexbox, CSS Grid y media queries para diseño responsivo.
- **JavaScript (ES6):** Interacciones del DOM, Intersection Observers para animaciones al hacer scroll, y LocalStorage para guardar las preferencias del usuario (modo oscuro/claro).

## Cómo ejecutar el proyecto localmente

Dado que el proyecto utiliza archivos estáticos y módulos de JavaScript, se recomienda correrlo en un servidor local para probar todas sus funciones.

Puedes usar Python para levantar un servidor rápido en el puerto 3000:
```bash
# Navega a la carpeta del proyecto en la terminal
cd d:/RESEARCH/CRWM

# Ejecuta un servidor HTTP local
python -m http.server 3000
```
Luego, abre tu navegador web y visita: `http://localhost:3000`

## Secciones Principales

1. **Header & Navegación:** Menú fijo y responsivo con funcionalidad de cambio de tema.
2. **Hero:** Sección inicial impactante con un gran logotipo central y fondo fotográfico con filtros de profundidad.
3. **Nosotros (About):** Información de la visión, experiencia global y diferenciadores.
4. **Sectores:** Grid interactivo que describe los diferentes sectores atendidos (Automotriz, Aeroespacial, Electrónica, etc).
5. **Procesos y Servicios:** Tarjetas dinámicas mostrando experiencia en procesos de manufactura (Spot Welding, Nut Welding, Arc Welding).
6. **Galería:** Mosaico de imágenes de los productos y maquinaria.
7. **Contacto:** Formulario de contacto integrado, correo institucional (`rafael.palafox@mrwm.com.mx`), dirección física en Ramos Arizpe y mapa de Google Maps dinámico.
8. **Footer:** Enlaces a redes sociales, políticas legales y derechos de autor actualizados (2026).

---
*Desarrollado para MRWM S.A. de C.V.*
