# ProyectoGestionTi

> **Generado con [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.13**

---

## 📝 Descripción

Aplicación web desarrollada con **Angular** para la gestión de usuarios, docentes, horarios, materias, paralelos y roles en una institución educativa.

---

## ⚙️ Requisitos previos

- **Node.js** (recomendado v18 o superior)
- **npm** (gestor de paquetes de Node.js)
- **Angular CLI** (debe instalarse globalmente)

---

## 🚀 Instalación rápida

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

---

## 🖥️ Servidor de desarrollo

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

---

## 🗂️ Estructura principal del proyecto

```
src/
│
├── app/                # Lógica principal de la aplicación Angular
│   ├── modules/        # Módulos por dominio (admin, auth, usuarios, home, ...)
│   │   ├── components/ # Componentes visuales reutilizables
│   │   ├── pages/      # Páginas principales de cada módulo
│   │   ├── services/   # Servicios para lógica de negocio y APIs
│   │   ├── interfaces/ # Tipos e interfaces TypeScript
│   │   ├── routes/     # Definición de rutas internas
│   │   └── layout/     # Componentes de layout visual
│   └── shared/         # Recursos y componentes compartidos (navbar, sidebar, etc.)
│
├── assets/             # Imágenes, íconos y recursos estáticos
├── index.html          # HTML principal
├── main.ts             # Punto de entrada de la app
├── styles.css          # Estilos globales
```

- `angular.json` — Configuración de Angular CLI (build, assets, estilos, etc.)
- `package.json` — Dependencias, scripts y metadatos del proyecto

### 🔄 Comunicación y flujo de la aplicación

1. **main.ts** arranca la app y monta el componente raíz (**AppComponent**).
2. **AppComponent** define la estructura base y contiene el router outlet para cargar páginas según la ruta.
3. El enrutamiento principal (**app.routes.ts**) distribuye la navegación hacia los diferentes módulos (`/auth`, `/admin`, `/usuarios`, ...).
4. Cada módulo tiene su propio archivo de rutas y carga componentes/páginas según la URL.
5. Los componentes se comunican mediante:
   - **@Input/@Output** (padre-hijo)
   - **Servicios inyectados** (compartir datos/lógica)
6. Los **servicios** gestionan la lógica de negocio y la comunicación con APIs o almacenamiento local.
7. El módulo **shared/** permite reutilizar componentes y servicios en toda la app.

---

## ⚡ Generación de código (Scaffolding)

Angular CLI incluye potentes herramientas de scaffolding. Por ejemplo, para generar un nuevo componente:

```bash
ng generate component nombre-componente
```

Para ver la lista completa de esquemas disponibles (como `components`, `directives` o `pipes`):

```bash
ng generate --help
```

---

## 🏗️ Compilación (Build)

Para compilar el proyecto:

```bash
ng build
```

Esto generará los archivos en la carpeta `dist/`. La compilación de producción optimiza la app para rendimiento y velocidad.

---

## 🧪 Pruebas unitarias

Para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io):

```bash
ng test
```

---

## 🤖 Pruebas end-to-end (e2e)

Para pruebas end-to-end:

```bash
ng e2e
```

Angular CLI no incluye un framework e2e por defecto, puedes elegir el que mejor se adapte a tus necesidades.

---

## 🛠️ Scripts útiles

- `ng serve` — Inicia la aplicación en modo desarrollo
- `ng build` — Compila la aplicación para producción
- `ng test` — Ejecuta las pruebas unitarias
- `npm start` — Alternativamente, también puedes usar este comando para iniciar el servidor

---

## ℹ️ Notas adicionales

- El proyecto utiliza **Angular Material** y **Bootstrap** para la interfaz de usuario.
- Puedes personalizar los módulos y componentes según las necesidades de tu institución.

---

