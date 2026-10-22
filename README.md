# Portfolio multipágina con React Router — TP2

**Alumno:** Luciano Perondi
**Comisión:** 7
**Materia:** Programación IV — Tecnicatura Universitaria en Programación, UTN FRT

## Descripción

Portfolio personal convertido en una aplicación multipágina. Amplía el TP1: cada sección pasó a ser una página propia, con un menú lateral que permanece visible mientras el contenido de la derecha cambia según la ruta, sin recargar el sitio.

| Página | Ruta |
|---|---|
| Inicio | `/` |
| Información personal | `/about` |
| Habilidades | `/skills` |
| Proyectos | `/projects` |
| Contacto | `/contact` |

## Tecnologías

- React + Vite
- JavaScript y JSX
- React Router DOM
- Bootstrap (solo CSS) y CSS propio

## Estructura

```
src/
├── assets/       → foto de perfil
├── components/   → Header, Footer, Sidebar, ProjectCard, SkillCard
├── pages/        → Home, About, Skills, Projects, Contact
├── styles/       → todos los archivos CSS
├── App.jsx       → rutas y layout (menú lateral + contenido)
└── main.jsx
```

## Instalación y ejecución

1. Clonar el repositorio:
```
   git clone https://github.com/lucho-bot/tp2-com7-perondi-luciano.git
```
2. Entrar a la carpeta e instalar las dependencias:
```
   cd tp2-com7-perondi-luciano
   npm install
```
3. Ejecutar la aplicación:
```
   npm run dev
```
4. Abrir en el navegador la dirección que muestra la terminal (por defecto, `http://localhost:5173`).

## Repositorio

https://github.com/lucho-bot/tp2-com7-perondi-luciano