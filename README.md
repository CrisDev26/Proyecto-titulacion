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

- `src/app/` — Lógica principal de la aplicación Angular.
  - `modules/` — Módulos organizados por dominio funcional. Cada módulo agrupa componentes, servicios, rutas e interfaces relacionados con una funcionalidad específica.
    - Ejemplo: `admin/`, `auth/`, `usuarios/`, `home/`, etc.
    - Cada módulo puede tener:
      - `components/` — Componentes visuales reutilizables.
      - `pages/` — Páginas principales de cada módulo.
      - `services/` — Servicios para la lógica de negocio y comunicación con APIs.
      - `interfaces/` — Definiciones de tipos e interfaces TypeScript.
      - `routes/` — Definición de rutas internas del módulo.
      - `layout/` — Componentes de layout para la estructura visual del módulo.
  - `shared/` — Componentes, servicios y recursos compartidos entre varios módulos (por ejemplo, navbar, sidebar, helpers, pipes, etc.).
  - `assets/` — Imágenes, íconos y recursos estáticos utilizados en la aplicación.
- `src/index.html` — Archivo HTML principal donde se monta la aplicación Angular.
- `src/main.ts` — Punto de entrada de la aplicación, inicializa el módulo principal.
- `src/styles.css` — Estilos globales de la aplicación.
- `angular.json` — Configuración de Angular CLI (build, assets, estilos, etc.).
- `package.json` — Dependencias, scripts y metadatos del proyecto.

### Comunicación y flujo de la aplicación

- El archivo `main.ts` arranca la aplicación y monta el componente raíz (`AppComponent`).
- `AppComponent` define la estructura base y contiene el router outlet para cargar las páginas según la ruta.
- El enrutamiento principal (`app.routes.ts`) distribuye la navegación hacia los diferentes módulos (por ejemplo, `/auth`, `/admin`, `/usuarios`).
- Cada módulo tiene su propio archivo de rutas y puede cargar componentes o páginas específicas según la URL.
- Los componentes se comunican entre sí mediante:
  - Inputs/Outputs (para comunicación padre-hijo)
  - Servicios inyectados (para compartir datos y lógica entre componentes)
- Los servicios gestionan la lógica de negocio y la comunicación con APIs o almacenamiento local.
- Los módulos compartidos (`shared/`) permiten reutilizar componentes y servicios en toda la aplicación.

Esta estructura modular facilita el mantenimiento, escalabilidad y reutilización del código en el proyecto.

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
