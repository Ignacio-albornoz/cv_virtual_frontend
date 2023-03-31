import { Component, Input } from '@angular/core';

import { Course } from './models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv_virtual';

  courses: Course[] = [
    {
      title: 'CURSO INSTRUCTOR ANALISTA DEL CONOCIMIENTO',
      description: 'Curso enfocado en programación orientada a objetos, en lenguaje JAVA y base de datos SQL.',
      duration: 215,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 0,
      finishedYear: 2019,
      establishment: 'Plan Nacional 111mil',
      technologies: 'JAVA, SQL',
      categories: 'Programación'
    },
    {
      title: 'EXPERTO UNIVERSITARIO EN JAVASCRIPT',
      description: 'Curso enfocado en desarrollo web en JavaScript. (Angular, React, NodeJS y MongoDB).',
      duration: 90,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 0,
      finishedYear: 2019,
      establishment: 'Universidad Tecnológica Nacional',
      technologies: 'JavaScript, Angular, React, NodeJS, mongoDB',
      categories: 'Desarrollo web'
    },
    {
      title: 'DESARROLLO EN REACT JS',
      description: 'Curso para Desarrollar una tienda online con React usando API de Mercado Libre.',
      duration: 105,
      startMonth: 1,
      startYear: 2021,
      finishedMonth: 0,
      finishedYear: 2021,
      establishment: 'Universidad Tecnológica Nacional',
      technologies: 'React JS',
      categories: 'Desarrollo web'
    },
    {
      title: 'REACT JS AVANZADO',
      description: 'Crear aplicaciones móviles en React. ( React Apollo, GraphQL, Reach Router y JSON Web Tokens y Cypress)',
      duration: 0,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 0,
      finishedYear: 2022,
      establishment: 'Platzi',
      technologies: 'React JS',
      categories: 'Desarrollo web'
    },
    {
      title: 'REACT JS',
      description: 'Curso para crear sitios web con React.js y llevar un diseño de HTML y CSS a React',
      duration: 0,
      startMonth: 1,
      startYear: 2020,
      finishedMonth: 0,
      finishedYear: 2020,
      establishment: 'Platzi',
      technologies: 'React JS',
      categories: 'Desarrollo web'
    },
    {
      title: 'REACT JS: MANEJO PROFESIONAL DEL ESTADO',
      description: 'Crea estados independientes o compuestos, imperativos o declarativos, con funciones o clases, con useState o useReducer',
      duration: 0,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 0,
      finishedYear: 2022,
      establishment: 'Platzi',
      technologies: 'React JS',
      categories: 'Desarrollo web'
    },
    {
      title: 'REACT JS: STATE MACHINES',
      description: 'Comprende qué es XState y cuáles son sus funcionalidades para mejorar tus flujos de trabajo.',
      duration: 0,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 0,
      finishedYear: 2022,
      establishment: 'Platzi',
      technologies: 'React JS',
      categories: 'Desarrollo web'
    },
    {
      title: 'NODE JS: API REST CON EXPRESS JS',
      description: 'Curso enfocado en la creación de una API REST con Express JS en Node.js',
      duration: 105,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: 'Platzi',
      technologies: 'Node.js, Express JS',
      categories: 'Programación'
    },
    {
      title: 'INTRODUCCION A JAVA SE',
      description: 'Curso enfocado en la introducción al lenguaje de programación Java SE',
      duration: 50,
      startMonth: 1,
      startYear: 2023,
      finishedMonth: 1,
      finishedYear: 2023,
      establishment: 'Platzi',
      technologies: 'Java SE',
      categories: 'Programación'
    },
    {
      title: 'JAVA SE ORIENTADO A OBJETOS',
      description: 'Curso enfocado en la programación orientada a objetos en Java SE',
      duration: 50,
      startMonth: 1,
      startYear: 2023,
      finishedMonth: 1,
      finishedYear: 2023,
      establishment: 'Platzi',
      technologies: 'Java SE, Programación Orientada a Objetos',
      categories: 'Programación'
    },
    {
      title: 'PROGRAMACIÓN FUNCIONAL CON JAVA SE',
      description: 'Curso enfocado en la programación funcional en Java SE',
      duration: 50,
      startMonth: 1,
      startYear: 2023,
      finishedMonth: 1,
      finishedYear: 2023,
      establishment: 'Platzi',
      technologies: 'Java SE, Programación Funcional',
      categories: 'Programación'
    },
    {
      title: 'INTRODUCCIÓN A MYSQL',
      description: 'Curso enfocado en la introducción a MySQL',
      duration: 50,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 1,
      finishedYear: 2019,
      establishment: 'Platzi',
      technologies: 'MySQL',
      categories: 'Bases de Datos'
    },
    {
      title: 'NODE.JS: BASICO',
      description: 'Curso enfocado en los conceptos básicos de Node.js',
      duration: 50,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 1,
      finishedYear: 2019,
      establishment: 'Platzi',
      technologies: 'Node.js',
      categories: 'Programación'
    },
    {
      title: 'ADMINISTRACIÓN DE SERVIDORES LINUX',
      description: 'Curso enfocado en la administración de servidores Linux',
      duration: 50,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 1,
      finishedYear: 2019,
      establishment: 'Platzi',
      technologies: 'Linux, Servidores',
      categories: 'Sistemas Operativos'
    },
    {
      title: 'GESTIÓN DE DEPENDENCIAS Y PAQUETES  CON NPM',
      description: 'Versionar, Publicar, Crear, Actualizar y Eliminar paquetes en NPM',
      duration: 50,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: 'Platzi',
      technologies: '',
      categories: ''
    },
    {
      title: 'FRONTEND DEVELOPER',
      description: 'Dominar las bases de HTML y CSS. Conocer la anatomía de un documento HTML, sus elementos y las propiedades de CSS',
      duration: 50,
      startMonth: 1,
      startYear: 2021,
      finishedMonth: 1,
      finishedYear: 2021,
      establishment: 'Platzi',
      technologies: '',
      categories: ''
    },
    {
      title: 'CURSO PRACTICO DE FRONTEND DEVELOPER',
      description: 'Prácticar sobre maquetación con HTML y CSS para construir las páginas y componentes de un e-commerce profesional',
      duration: 50,
      startMonth: 1,
      startYear: 2021,
      finishedMonth: 1,
      finishedYear: 2021,
      establishment: 'Platzi',
      technologies: '',
      categories: ''
    },
    {
      title: 'INGLES A1: PRESENTE SIMPLE Y VOCABULARIO',
      description: 'Curso de Ingles sobre: Presente Simple',
      duration: 50,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: 'Platzi',
      technologies: '',
      categories: ''
    },
    {
      title: 'INGLES A1: ELEMENTOS Y EXPRESIONES DE  TRABAJO',
      description: 'Curso de Ingles sobre: Expresiones y Elementos',
      duration: 50,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: 'Platzi',
      technologies: '',
      categories: ''
    }
  ]

}
