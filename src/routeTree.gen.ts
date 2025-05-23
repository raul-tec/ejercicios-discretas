/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as CuestionariosPruebaImport } from './routes/cuestionarios/prueba'
import { Route as CuestionariosLogicaImport } from './routes/cuestionarios/logica'
import { Route as CuestionariosInduccionMatematicaImport } from './routes/cuestionarios/induccion-matematica'
import { Route as EjerciciosLogicaProposicionalIdImport } from './routes/ejercicios/logica-proposicional/$id'
import { Route as EjerciciosInduccionMatematicaIdImport } from './routes/ejercicios/induccion-matematica/$id'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CuestionariosPruebaRoute = CuestionariosPruebaImport.update({
  id: '/cuestionarios/prueba',
  path: '/cuestionarios/prueba',
  getParentRoute: () => rootRoute,
} as any)

const CuestionariosLogicaRoute = CuestionariosLogicaImport.update({
  id: '/cuestionarios/logica',
  path: '/cuestionarios/logica',
  getParentRoute: () => rootRoute,
} as any)

const CuestionariosInduccionMatematicaRoute =
  CuestionariosInduccionMatematicaImport.update({
    id: '/cuestionarios/induccion-matematica',
    path: '/cuestionarios/induccion-matematica',
    getParentRoute: () => rootRoute,
  } as any)

const EjerciciosLogicaProposicionalIdRoute =
  EjerciciosLogicaProposicionalIdImport.update({
    id: '/ejercicios/logica-proposicional/$id',
    path: '/ejercicios/logica-proposicional/$id',
    getParentRoute: () => rootRoute,
  } as any)

const EjerciciosInduccionMatematicaIdRoute =
  EjerciciosInduccionMatematicaIdImport.update({
    id: '/ejercicios/induccion-matematica/$id',
    path: '/ejercicios/induccion-matematica/$id',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cuestionarios/induccion-matematica': {
      id: '/cuestionarios/induccion-matematica'
      path: '/cuestionarios/induccion-matematica'
      fullPath: '/cuestionarios/induccion-matematica'
      preLoaderRoute: typeof CuestionariosInduccionMatematicaImport
      parentRoute: typeof rootRoute
    }
    '/cuestionarios/logica': {
      id: '/cuestionarios/logica'
      path: '/cuestionarios/logica'
      fullPath: '/cuestionarios/logica'
      preLoaderRoute: typeof CuestionariosLogicaImport
      parentRoute: typeof rootRoute
    }
    '/cuestionarios/prueba': {
      id: '/cuestionarios/prueba'
      path: '/cuestionarios/prueba'
      fullPath: '/cuestionarios/prueba'
      preLoaderRoute: typeof CuestionariosPruebaImport
      parentRoute: typeof rootRoute
    }
    '/ejercicios/induccion-matematica/$id': {
      id: '/ejercicios/induccion-matematica/$id'
      path: '/ejercicios/induccion-matematica/$id'
      fullPath: '/ejercicios/induccion-matematica/$id'
      preLoaderRoute: typeof EjerciciosInduccionMatematicaIdImport
      parentRoute: typeof rootRoute
    }
    '/ejercicios/logica-proposicional/$id': {
      id: '/ejercicios/logica-proposicional/$id'
      path: '/ejercicios/logica-proposicional/$id'
      fullPath: '/ejercicios/logica-proposicional/$id'
      preLoaderRoute: typeof EjerciciosLogicaProposicionalIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cuestionarios/induccion-matematica': typeof CuestionariosInduccionMatematicaRoute
  '/cuestionarios/logica': typeof CuestionariosLogicaRoute
  '/cuestionarios/prueba': typeof CuestionariosPruebaRoute
  '/ejercicios/induccion-matematica/$id': typeof EjerciciosInduccionMatematicaIdRoute
  '/ejercicios/logica-proposicional/$id': typeof EjerciciosLogicaProposicionalIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cuestionarios/induccion-matematica': typeof CuestionariosInduccionMatematicaRoute
  '/cuestionarios/logica': typeof CuestionariosLogicaRoute
  '/cuestionarios/prueba': typeof CuestionariosPruebaRoute
  '/ejercicios/induccion-matematica/$id': typeof EjerciciosInduccionMatematicaIdRoute
  '/ejercicios/logica-proposicional/$id': typeof EjerciciosLogicaProposicionalIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cuestionarios/induccion-matematica': typeof CuestionariosInduccionMatematicaRoute
  '/cuestionarios/logica': typeof CuestionariosLogicaRoute
  '/cuestionarios/prueba': typeof CuestionariosPruebaRoute
  '/ejercicios/induccion-matematica/$id': typeof EjerciciosInduccionMatematicaIdRoute
  '/ejercicios/logica-proposicional/$id': typeof EjerciciosLogicaProposicionalIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/cuestionarios/induccion-matematica'
    | '/cuestionarios/logica'
    | '/cuestionarios/prueba'
    | '/ejercicios/induccion-matematica/$id'
    | '/ejercicios/logica-proposicional/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/cuestionarios/induccion-matematica'
    | '/cuestionarios/logica'
    | '/cuestionarios/prueba'
    | '/ejercicios/induccion-matematica/$id'
    | '/ejercicios/logica-proposicional/$id'
  id:
    | '__root__'
    | '/'
    | '/cuestionarios/induccion-matematica'
    | '/cuestionarios/logica'
    | '/cuestionarios/prueba'
    | '/ejercicios/induccion-matematica/$id'
    | '/ejercicios/logica-proposicional/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CuestionariosInduccionMatematicaRoute: typeof CuestionariosInduccionMatematicaRoute
  CuestionariosLogicaRoute: typeof CuestionariosLogicaRoute
  CuestionariosPruebaRoute: typeof CuestionariosPruebaRoute
  EjerciciosInduccionMatematicaIdRoute: typeof EjerciciosInduccionMatematicaIdRoute
  EjerciciosLogicaProposicionalIdRoute: typeof EjerciciosLogicaProposicionalIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CuestionariosInduccionMatematicaRoute: CuestionariosInduccionMatematicaRoute,
  CuestionariosLogicaRoute: CuestionariosLogicaRoute,
  CuestionariosPruebaRoute: CuestionariosPruebaRoute,
  EjerciciosInduccionMatematicaIdRoute: EjerciciosInduccionMatematicaIdRoute,
  EjerciciosLogicaProposicionalIdRoute: EjerciciosLogicaProposicionalIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/cuestionarios/induccion-matematica",
        "/cuestionarios/logica",
        "/cuestionarios/prueba",
        "/ejercicios/induccion-matematica/$id",
        "/ejercicios/logica-proposicional/$id"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/cuestionarios/induccion-matematica": {
      "filePath": "cuestionarios/induccion-matematica.jsx"
    },
    "/cuestionarios/logica": {
      "filePath": "cuestionarios/logica.jsx"
    },
    "/cuestionarios/prueba": {
      "filePath": "cuestionarios/prueba.jsx"
    },
    "/ejercicios/induccion-matematica/$id": {
      "filePath": "ejercicios/induccion-matematica/$id.jsx"
    },
    "/ejercicios/logica-proposicional/$id": {
      "filePath": "ejercicios/logica-proposicional/$id.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
