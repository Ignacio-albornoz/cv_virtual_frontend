import { Component, Input } from "@angular/core";

import { Course } from "./models/course.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cv_virtual";

  courses: Course[] = [
    {
      title: "Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples",
      description: "",
      duration: 16,
      finishedMonth: 3,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: [],
      categories: ["Idiomas"]
    },
    {
      title: "Audiocurso de Comunicación Efectiva",
      description: "Crear una buena primera impresión y genera confianza con cualquier persona, para entablar una plática o cerrar un negocio.",
      duration: 12,
      finishedMonth: 2,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Comunicación"],
      categories: ["Comunicación"]
    },
    {
      title: "Curso Profesional de CSS Grid Layout",
      description: "CSS Grid Layout para maquetar sitios web complejos sin complicaciones",
      duration: 20,
      finishedMonth: 2,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["CSS"],
      categories: ["Diseño Web"]
    },
    {
      title: "Curso de Comunicación Asertiva",
      description: "Dominar técnicas para expresar tus ideas, sentimientos y necesidades de forma empática, firme, honesta.",
      duration: 30,
      finishedMonth: 2,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: [],
      categories: ["Desarrollo Personal", "Comunicación", "Habilidades Blandas"]
    },
    {
      title: "Curso de Desarrollo de Habilidades Blandas para Equipos de Trabajo",
      description: "",
      finishedMonth: 2,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Habilidades Blandas"],
      categories: ["Desarrollo Personal", "Habilidades Blandas", "Comunicación"]
    },
    {
      title: "Curso de Fundamentos de Angular",
      description: "Define estructuras de control y aplica estilos en la creación de una tienda en línea.",
      finishedMonth: 2,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Angular"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de Redes Informáticas de Internet",
      description: "",
      finishedMonth: 2,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Redes"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de Java SE Orientado a Objetos",
      description: "",
      finishedMonth: 1,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Java"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de Programación Funcional con Java SE",
      description: "",
      finishedMonth: 1,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Java"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso para Empezar a Vender por Internet",
      description: "",
      finishedMonth: 11,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["Ventas"],
      categories: ["Negocios"]
    },
    {
      title: "Curso Básico de PHP: Instalación, Fundamentos y Operadores",
      description: "",
      finishedMonth: 10,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["PHP"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso Práctico de PHP",
      description: "",
      finishedMonth: 10,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["PHP"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de Backend con Node.js: API REST con Express.js",
      description: "",
      finishedMonth: 6,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["Node.js", "Express.js"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de Gestión de Dependencias y Paquetes con NPM",
      description: "",
      finishedMonth: 6,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["NPM"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de React.js: Manejo Profesional del Estado",
      description: "",
      finishedMonth: 6,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["React.js"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de State Machines en React.js",
      description: "",
      finishedMonth: 6,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["React.js"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de Introducción a Solana",
      description: "",
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["Solana"],
      categories: ["Criptomonedas"]
    },
    {
      title: "Curso Práctico de Frontend Developer",
      description: "",
      finishedMonth: 12,
      finishedYear: 2021,
      establishment: "Platzi",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "Curso de Frontend Developer",
      description: "",
      finishedMonth: 12,
      finishedYear: 2021,
      establishment: "Platzi",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["Desarrollo Web"]
    },
    {
      title: "CURSO INSTRUCTOR ANALISTA DEL CONOCIMIENTO",
      description: "Curso enfocado en programación orientada a objetos, en lenguaje JAVA y base de datos SQL.",
      duration: 215,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 0,
      finishedYear: 2019,
      establishment: "Plan Nacional 111mil",
      technologies: ["JAVA", "SQL"],
      categories: ["Programación"]
    },
    {
      title: "EXPERTO UNIVERSITARIO EN JAVASCRIPT",
      description: "Curso enfocado en desarrollo web en JavaScript. (Angular, React, NodeJS y MongoDB).",
      duration: 90,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 0,
      finishedYear: 2019,
      establishment: "Universidad Tecnológica Nacional",
      technologies: ["JavaScript", "Angular", "React", "NodeJS", "MongoDB"],
      categories: ["Desarrollo web"]
    },
    {
      title: "DESARROLLO EN REACT JS",
      description: "Curso para Desarrollar una tienda online con React usando API de Mercado Libre.",
      duration: 105,
      startMonth: 1,
      startYear: 2021,
      finishedMonth: 0,
      finishedYear: 2021,
      establishment: "Universidad Tecnológica Nacional",
      technologies: ["React J]S", "JavaScript"],
      categories: ["Desarrollo web"]
    },
    {
      title: "REACT JS AVANZADO",
      description: "Crear aplicaciones móviles en React. ( React Apollo, GraphQL, Reach Router y JSON Web Tokens y Cypress)",
      duration: 0,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 0,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["React J]S", "JavaScript"],
      categories: ["Desarrollo web"]
    },
    {
      title: "REACT JS",
      description: "Curso para crear sitios web con React.js y llevar un diseño de HTML y CSS a React",
      duration: 0,
      startMonth: 1,
      startYear: 2020,
      finishedMonth: 0,
      finishedYear: 2020,
      establishment: "Platzi",
      technologies: ["React JS"],
      categories: ["Desarrollo web"]
    },
    {
      title: "REACT JS: MANEJO PROFESIONAL DEL ESTADO",
      description: "Crea estados independientes o compuestos, imperativos o declarativos, con funciones o clases, con useState o useReducer",
      duration: 0,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 0,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["React JS"],
      categories: ["Desarrollo web"]
    },
    {
      title: "REACT JS: STATE MACHINES",
      description: "Comprende qué es XState y cuáles son sus funcionalidades para mejorar tus flujos de trabajo.",
      duration: 0,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 0,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["React JS"],
      categories: ["Desarrollo web"]
    },
    {
      title: "NODE JS: API REST CON EXPRESS JS",
      description: "Curso enfocado en la creación de una API REST con Express JS en Node.js",
      duration: 105,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: ["Node.js, Express JS"],
      categories: ["Programación"]
    },
    {
      title: "INTRODUCCION A JAVA SE",
      description: "Curso enfocado en la introducción al lenguaje de programación Java SE",
      duration: 50,
      startMonth: 1,
      startYear: 2023,
      finishedMonth: 1,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Java SE"],
      categories: ["Programación"]
    },
    {
      title: "JAVA SE ORIENTADO A OBJETOS",
      description: "Curso enfocado en la programación orientada a objetos en Java SE",
      duration: 50,
      startMonth: 1,
      startYear: 2023,
      finishedMonth: 1,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Java SE, Programación Orientada a Objetos"],
      categories: ["Programación"]
    },
    {
      title: "PROGRAMACIÓN FUNCIONAL CON JAVA SE",
      description: "Curso enfocado en la programación funcional en Java SE",
      duration: 50,
      startMonth: 1,
      startYear: 2023,
      finishedMonth: 1,
      finishedYear: 2023,
      establishment: "Platzi",
      technologies: ["Java SE, Programación Funcional"],
      categories: ["Programación"]
    },
    {
      title: "INTRODUCCIÓN A MYSQL",
      description: "Curso enfocado en la introducción a MySQL",
      duration: 50,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 1,
      finishedYear: 2019,
      establishment: "Platzi",
      technologies: ["MySQL"],
      categories: ["Bases de Datos"]
    },
    {
      title: "NODE.JS: BASICO",
      description: "Curso enfocado en los conceptos básicos de Node.js",
      duration: 50,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 1,
      finishedYear: 2019,
      establishment: "Platzi",
      technologies: ["Node.js"],
      categories: ["Programación"]
    },
    {
      title: "ADMINISTRACIÓN DE SERVIDORES LINUX",
      description: "Curso enfocado en la administración de servidores Linux",
      duration: 50,
      startMonth: 1,
      startYear: 2019,
      finishedMonth: 1,
      finishedYear: 2019,
      establishment: "Platzi",
      technologies: ["Linux, Servidores"],
      categories: ["Sistemas Operativos"]
    },
    {
      title: "GESTIÓN DE DEPENDENCIAS Y PAQUETES  CON NPM",
      description: "Versionar, Publicar, Crear, Actualizar y Eliminar paquetes en NPM",
      duration: 50,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: [],
      categories: []
    },
    {
      title: "FRONTEND DEVELOPER",
      description: "Dominar las bases de HTML y CSS. Conocer la anatomía de un documento HTML, sus elementos y las propiedades de CSS",
      duration: 50,
      startMonth: 1,
      startYear: 2021,
      finishedMonth: 1,
      finishedYear: 2021,
      establishment: "Platzi",
      technologies: [],
      categories: []
    },
    {
      title: "CURSO PRACTICO DE FRONTEND DEVELOPER",
      description: "Prácticar sobre maquetación con HTML y CSS para construir las páginas y componentes de un e-commerce profesional",
      duration: 50,
      startMonth: 1,
      startYear: 2021,
      finishedMonth: 1,
      finishedYear: 2021,
      establishment: "Platzi",
      technologies: [],
      categories: []
    },
    {
      title: "INGLES A1: PRESENTE SIMPLE Y VOCABULARIO",
      description: "Curso de Ingles sobre: Presente Simple",
      duration: 50,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: [],
      categories: []
    },
    {
      title: "INGLES A1: ELEMENTOS Y EXPRESIONES DE  TRABAJO",
      description: "Curso de Ingles sobre: Expresiones y Elementos",
      duration: 50,
      startMonth: 1,
      startYear: 2022,
      finishedMonth: 1,
      finishedYear: 2022,
      establishment: "Platzi",
      technologies: [],
      categories: []
    }
  ]

}
