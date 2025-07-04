# ProyectoGestionTi

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.13.

## Descripción

Aplicación web desarrollada con Angular para la gestión de usuarios, docentes, horarios, materias, paralelos y roles en una institución educativa.

## Requisitos previos

- Node.js (recomendado v18 o superior)
- npm (gestor de paquetes de Node.js)
- Angular CLI (debe instalarse globalmente)

## Instalación

1. Clona el repositorio o descarga el código fuente.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala Angular CLI globalmente si aún no lo tienes:

```bash
npm install -g @angular/cli
```

4. Instala las dependencias del proyecto:

```bash
npm install
```

## Servidor de desarrollo

Para iniciar el servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Luego abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos fuente.

> **Nota para usuarios de Windows:**
> Si tienes problemas de permisos en PowerShell, ejecuta antes:
> 
> ```bash
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

## Estructura principal del proyecto

- `src/app/` — Lógica principal de la aplicación.
  - `modules/` — Módulos organizados por dominio (admin, auth, usuarios, etc.).
  - `shared/` — Componentes y recursos compartidos.
  - `assets/` — Imágenes y recursos estáticos.
- `angular.json` — Configuración de Angular.
- `package.json` — Dependencias y scripts del proyecto.

## Generación de código (Scaffolding)

Angular CLI incluye potentes herramientas de scaffolding. Para generar un nuevo componente, ejecuta:

```bash
ng generate component nombre-componente
```

Para ver la lista completa de esquemas disponibles (como `components`, `directives` o `pipes`), ejecuta:

```bash
ng generate --help
```

## Compilación (Build)

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Esto generará los archivos en la carpeta `dist/`. Por defecto, la compilación de producción optimiza la aplicación para rendimiento y velocidad.

## Pruebas unitarias

Para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io), usa:

```bash
ng test
```

## Pruebas end-to-end (e2e)

Para pruebas end-to-end, ejecuta:

```bash
ng e2e
```

Angular CLI no incluye un framework e2e por defecto, puedes elegir el que mejor se adapte a tus necesidades.

## Scripts útiles

- `ng serve` — Inicia la aplicación en modo desarrollo.
- `ng build` — Compila la aplicación para producción.
- `ng test` — Ejecuta las pruebas unitarias.
- `npm start` — Alternativamente, también puedes usar este comando para iniciar el servidor.

## Notas adicionales

- El proyecto utiliza Angular Material y Bootstrap para la interfaz de usuario.
- Puedes personalizar los módulos y componentes según las necesidades de tu institución.

---

Si tienes dudas o problemas, revisa la documentación oficial de Angular o contacta al equipo de desarrollo.
