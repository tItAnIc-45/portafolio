# Portafolio personal – Lia Malpartida

Portafolio web hecho con **React + Vite**, organizado en componentes (Navbar, Banner, Perfil, Habilidades, Proyectos y Contacto).
El formulario de contacto envía correos reales con **EmailJS** y muestra alertas con **SweetAlert2**.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Variables de entorno

Crea un archivo `.env` en la raíz (puedes copiar `env-ejemplo.txt`) con:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Reinicia `npm run dev` después de crear o modificar el archivo.

## Preparación para Vercel

- Framework: **Vite**. Instalar dependencias con `npm ci`.
- Comando de compilación: `npm run build`.
- Directorio de salida: `dist` (configurado en `vite.config.js`).
- En Settings → Environment Variables, configurar `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY` con los valores del servicio y la plantilla de EmailJS. Habilitarlas para Production y Preview según corresponda, antes de compilar.
- La plantilla de EmailJS debe usar `{{nombre}}`, `{{email}}` y `{{mensaje}}`. Si tienes restricciones de dominio en EmailJS, autoriza el dominio de Vercel que uses.
- Vite incorpora las variables `VITE_*` al JavaScript público durante la compilación. Usar únicamente los identificadores y la clave pública de EmailJS; nunca contraseñas, tokens privados ni claves privadas. Mantener `.env` fuera de Git y usar `env-ejemplo.txt` como referencia sin valores reales.
- Al cambiar las variables en Vercel, volver a compilar para aplicarlas.

Para revisar localmente la compilación:

```bash
npm run build
npm run preview
```

Abrir la dirección que imprima Vite y revisar Proyectos y Contacto en escritorio y móvil. La compilación puede funcionar sin las variables, pero el envío del formulario requiere los tres valores válidos. No se ha realizado ningún despliegue.

### Error de permisos de Gmail en EmailJS

Si al enviar aparece `Gmail_API: Request had insufficient authentication scopes`, vuelve a conectar la cuenta de Gmail en el servicio correspondiente de EmailJS y acepta los permisos de envío solicitados. Este permiso se configura en EmailJS; no se corrige cambiando las variables de `.env`. Después, vuelve a probar el formulario.
