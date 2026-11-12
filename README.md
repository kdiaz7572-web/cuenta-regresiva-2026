# Cuenta regresiva 2026

Página web de cuenta regresiva en tiempo real hacia el **viernes 11 de diciembre de 2026, 5:30 p. m. (hora de Costa Rica, UTC-6)**. Construida con React + Vite.

🔗 **Sitio publicado:** https://cuenta-regresiva-2026.vercel.app

## Características

- Cuenta regresiva en días, horas, minutos y segundos, actualizada cada segundo.
- Fecha objetivo calculada con offset fijo `-06:00`, sin depender de la zona horaria del navegador.
- Mensaje especial "¡Llegó el momento!" cuando se alcanza la fecha.
- Diseño oscuro, minimalista y responsive (computadora y celular).

## Ejecutar el proyecto localmente

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
npm run dev
```

Esto abre el proyecto en `http://localhost:5173`. Los cambios se reflejan automáticamente (HMR).

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Subir el proyecto a GitHub

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primer commit: cuenta regresiva 2026"
```

Crea un repositorio vacío en GitHub (sin README, para evitar conflictos) y luego:

```bash
git remote add origin https://github.com/TU_USUARIO/cuenta-regresiva-2026.git
git branch -M main
git push -u origin main
```

(También puedes usar `gh repo create cuenta-regresiva-2026 --public --source=. --push` si tienes instalado GitHub CLI.)

## Publicar en Vercel (gratis)

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **Add New → Project**.
3. Selecciona el repositorio `cuenta-regresiva-2026` que acabas de subir.
4. Vercel detecta automáticamente que es un proyecto Vite. Deja la configuración por defecto:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Haz clic en **Deploy** y espera a que termine (toma 1-2 minutos).

## Obtener el enlace público para compartir

Cuando el despliegue termina, Vercel te da automáticamente una URL pública del tipo:

```
https://cuenta-regresiva-2026.vercel.app
```

Ese enlace es público: cualquier persona puede abrirlo y ver la cuenta regresiva en tiempo real, sin necesidad de iniciar sesión. Puedes copiarlo desde el panel de Vercel (botón "Visit" en la parte superior del proyecto) y compartirlo directamente.

Cada vez que hagas `git push` a la rama `main`, Vercel vuelve a desplegar automáticamente y actualiza esa misma URL.
