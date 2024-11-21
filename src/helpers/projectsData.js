import img1P1 from '@assets/projects/1/1.png';
import img2P1 from '@assets/projects/1/2.png';
import img3P1 from '@assets/projects/1/3.png';
import img4P1 from '@assets/projects/1/4.png';
import img5P1 from '@assets/projects/1/5.png';

import img1P2 from '@assets/projects/2/1.png';
import img2P2 from '@assets/projects/2/2.png';
import img3P2 from '@assets/projects/2/3.png';
import img4P2 from '@assets/projects/2/4.png';
import img5P2 from '@assets/projects/2/5.png';
import img6P2 from '@assets/projects/2/6.png';
import img7P2 from '@assets/projects/2/7.png';

import img1P3 from '@assets/projects/3/1.png';
import img2P3 from '@assets/projects/3/2.png';
import img3P3 from '@assets/projects/3/3.png';
import img4P3 from '@assets/projects/3/4.png';
import img5P3 from '@assets/projects/3/5.png';

import img1P4 from '@assets/projects/4/1.png';
import img2P4 from '@assets/projects/4/2.png';
import img3P4 from '@assets/projects/4/3.png';

import img1P5 from '@assets/projects/5/1.png';
import img2P5 from '@assets/projects/5/2.png';
import img3P5 from '@assets/projects/5/3.png';

import img1P6 from '@assets/projects/6/1.jpeg';
import img2P6 from '@assets/projects/6/2.jpeg';
import img3P6 from '@assets/projects/6/3.jpeg';
import img4P6 from '@assets/projects/6/4.jpeg';
import img5P6 from '@assets/projects/6/5.jpeg';
import img6P6 from '@assets/projects/6/6.jpeg';

export default [
  {
    id: 1,
    title: 'MyTurn Charity e-commerce',
    description: 'Este proyecto consiste en un e-commerce creado para actuar como intermediario entre personas con capacidad y voluntad de realizar donaciones de caridad y personas necesitas de ayuda. La aplicación web permite explorar los diferentes productos distribuidos en todo el país, solicitar y realizar donaciones, llevar a cabo la logística para aceptar o rechazar una solicitud, etc.',
    images: [img1P1, img2P1, img3P1, img4P1, img5P1],
    tec: 'Vanilla Js, Node Js, Express y CSS',
    vertical: false,
  },
  {
    id: 2,
    title: 'Portal de gestión de becados',
    description: 'Proyecto realizado para la Fundación Juan Bautista Gutiérrez. Consiste en un portal web que permite llevar el registro de los becados de la fundación, manejar la asignación de actividades y horas beca, mantener un registro de pagos de cuotas, etc.',
    images: [img1P2, img2P2, img3P2, img4P2, img5P2, img6P2, img7P2],
    tec: 'React Js, Node Js, Express y CSS',
    vertical: false,
  },
  {
    id: 3,
    title: 'Servicios Financieros',
    description:
      'Consiste en un portal para el manejo de finanzas personales. Permite tener un registro detallado de las transacciones que se llevan a cabo en las diferentes cuentas de una persona, así como, el manejo de sus deudas con otros, brindando estadísticas del manejo de los fondos a lo largo del tiempo. Además, cuenta con la integración con una aplicación móvil para efectuar operaciones offline.',
    images: [img1P3, img2P3, img3P3, img4P3, img5P3],
    tec: 'React Js, Node Js, Express, CSS y React Native',
    vertical: false,
  },
  {
    id: 4,
    title: 'Juego de laberinto',
    description: 'Este proyecto consiste en un juego interactivo de laberinto. Es posible establecer el tamaño del laberinto, el cual, es generado de forma aleatoria en cada partida; así como, cuenta con la opción de agregar un límite de tiempo para completarlo. Además, se cuenta con 3 escenarios y 3 personajes distintos para elegir. ',
    images: [img1P4, img2P4, img3P4],
    link: 'https://frabjous-tiramisu-667f44.netlify.app/',
    tec: 'React Js y CSS',
    vertical: false,
  },
  {
    id: 5,
    title: 'Sistema de calificación de películas',
    description: 'Esta aplicación permite que los usuario obtengan recomendaciones de películas, a partir de sus gustos previos. El sitio cuenta con un formulario para creación de nuevas películas dentro del ecosistema de la página, una sección para indicar la opinión sobre cada película y una sección en donde se reciben las posibles coincidencias encontradas para el usuario. ',
    images: [img1P5, img2P5, img3P5],
    tec: 'React Js, Java y CSS',
    vertical: false,
  },
  {
    id: 6,
    title: 'App móvil de finanzas',
    description: 'Consiste en una aplicación móvil en Android para el manejo de finanzas personales. Permite crear cuentas, ver el balance general, crear registros de operaciones de gastos e ingresos, cargar deudas entre distintos usuarios, etc.',
    images: [img1P6, img2P6, img3P6, img4P6, img5P6, img6P6],
    tec: 'Kotlin, Node JS y Android Studio',
    vertical: true,
  },
];
