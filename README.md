# Baires IA Lab — Sitio Web

## Estructura del repositorio

```
bairesialab/
│
├── index.html          # Página principal → bairesialab.com
├── styles.css          # Estilos globales (usado por toda la web)
├── CNAME               # Dominio personalizado para GitHub Pages
├── robots.txt          # SEO
├── sitemap.xml         # SEO
│
├── src/                # Componentes React del sitio principal
│   ├── app.jsx         # Componente raíz
│   ├── hero.jsx        # Sección hero
│   ├── middle.jsx      # Sección media
│   ├── bottom.jsx      # Sección inferior
│   ├── tweaks-panel.jsx
│   └── script.js
│
├── archivos/           # Assets compartidos (imágenes, videos, logos)
│   ├── isologo-cropped (1).png
│   ├── og-image.png
│   ├── Porfolio_Redes.mp4
│   └── ...
│
└── content_page/       # Landing page de Contenido Digital con IA
    └── index.html      # → bairesialab.com/content_page
```

## Páginas

| URL | Archivo | Descripción |
|-----|---------|-------------|
| `bairesialab.com` | `index.html` | Home principal |
| `bairesialab.com/content_page` | `content_page/index.html` | Landing contenido digital con IA |
| `bairesialab.com/coach` | `coach/index.html` | Landing para coaches |
| `bairesialab.com/fitness` | `fitness/index.html` | Landing para trainers y coaches de fitness |
| `bairesialab.com/infoproductor` | `infoproductor/index.html` | Landing para infoproductores |
| `bairesialab.com/sistema` | `sistema/index.html` | Landing general del sistema |

## Hosting

GitHub Pages — rama `main`
