# Portafolio profesional de Raín Garibaldi

Sitio personal preparado para publicarse en **GitHub Pages** como
`https://rain03gari0300-creator.github.io`.

## Cómo editarlo sin tocar el diseño

La información principal está en un solo archivo:

`content/portfolio.json`

Desde GitHub puedes abrir ese archivo, presionar el lápiz, cambiar el texto y
seleccionar **Commit changes**. El sitio se actualizará automáticamente.

### Agregar tus contactos

Busca la sección `contacts` y completa únicamente lo que quieras publicar:

```json
"contacts": {
  "email": "tu-correo@ejemplo.com",
  "whatsapp": "50760000000",
  "linkedin": "https://www.linkedin.com/in/tu-usuario",
  "github": "https://github.com/rain03gari0300-creator"
}
```

En WhatsApp usa el código de país y el número, sin espacios, guiones ni el signo
`+`.

### Agregar tu foto

1. Sube una foto a la carpeta `public` con el nombre `perfil.jpg`.
2. En `content/portfolio.json`, cambia:

```json
"photo": "perfil.jpg"
```

Mientras ese campo esté vacío, el sitio mostrará el monograma `RG`.

### Reemplazar el currículum

Sube tu CV actualizado a `public/cv-rain-garibaldi.pdf`, conservando exactamente
ese nombre. Los dos botones de descarga quedarán actualizados sin cambiar código.

### Agregar o modificar proyectos

Cada elemento dentro de `projects` contiene título, categoría, estado, resumen y
etiquetas. Puedes copiar un bloque existente, cambiar sus datos y guardar.

## Publicación

El proyecto incluye una automatización en `.github/workflows/pages.yml`. Cada vez
que guardes cambios en la rama `main`, GitHub volverá a publicar el portafolio.

En la primera publicación, abre **Settings → Pages** y selecciona
**GitHub Actions** como fuente. Después de eso no tendrás que repetir el ajuste.
