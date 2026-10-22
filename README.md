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

### Error de permisos de Gmail en EmailJS

Si al enviar aparece `Gmail_API: Request had insufficient authentication scopes`, vuelve a conectar la cuenta de Gmail en el servicio correspondiente de EmailJS y acepta los permisos de envío solicitados. Este permiso se configura en EmailJS; no se corrige cambiando las variables de `.env`. Después, vuelve a probar el formulario.
