# Data Fácil con IA · importar a Lovable

## Importación

1. En el panel de Lovable, abre **+ → Import project to Lovable**.
2. Selecciona **Code & web → Upload code** y sube `Data Facil con IA - Lovable.zip`.
3. Pulsa **Start import**. Indica al agente:

   > Mantén el proyecto Vite + React + TypeScript. Conserva intacto public/data-facil-con-ia.html y muéstralo mediante el iframe de src/App.tsx. No reconstruyas ni rediseñes la aplicación. Consérvalo tal cual.

4. Comprueba la vista previa antes de publicar.

Si el menú de importación no aparece, la función todavía no está habilitada en tu cuenta. [Guía oficial de Lovable](https://docs.lovable.dev/features/projects/import-project).

## Qué se conserva

`public/data-facil-con-ia.html` es una copia binaria intacta del HTML original. Incluye diseño Biniac, datos, lógica, seis misiones, laboratorio y exportaciones. React solo aporta un iframe a la página original.

El progreso se guarda en el navegador y dominio donde se utiliza la aplicación; el progreso de localhost no se transfiere automáticamente a Lovable.

## Desarrollo local

Node.js 22.12 o posterior. Instala dependencias con `npm install` y ejecuta `npm run dev`. Para generar la versión de publicación: `npm run build`. También puedes usar pnpm con el lockfile incluido.

El ZIP contiene el código en su raíz; no incluye node_modules, dist, credenciales ni datos de progreso del usuario.
