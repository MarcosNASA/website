import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EventList from './index';

export default {
  title: 'Components/EventList',
  component: EventList,
} as ComponentMeta<typeof EventList>;

const Template: ComponentStory<typeof EventList> = (args) => (
  <EventList {...args} />
);

export const NoEvents = Template.bind({});
NoEvents.args = {
  events: [],
};

export const WithEvents = Template.bind({});
WithEvents.args = {
  events: [
    {
      category: { name: 'Grupo de estudio' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/37186d12e783ee60766485c6704bc707ce192616-338x149.jpg',
      },
      date: '2021-10-01T22:00:00.000Z',
      description: [
        {
          _key: 'e39927d3def0',
          _type: 'block',
          children: [
            {
              _key: '1fd7ff84768e',
              _type: 'span',
              marks: [],
              text: 'Grupo de estudio de lenguaje Python. Sumate a 30daysOfPython',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'py-study-group',
      title: 'Py study group',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'Proyectos CMYK++: Presentación de proyectos',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/97fc6c474d24d5d19fc788e0f2bc600f1c33f1e7-424x210.png',
      },
      date: '2021-09-29T22:00:00.000Z',
      description: [
        {
          _key: '4022ababa1c5',
          _type: 'block',
          children: [
            {
              _key: '253212f4643a',
              _type: 'span',
              marks: [],
              text: 'Cuarta edición de ',
            },
            {
              _key: '3353206a6740',
              _type: 'span',
              marks: ['065c88c1c879'],
              text: 'frontend.cafe/cmyk',
            },
          ],
          markDefs: [
            {
              _key: '065c88c1c879',
              _type: 'link',
              href: 'https://frontend.cafe/cmyk',
            },
          ],
          style: 'normal',
        },
        {
          _key: 'ae9dd2ba3ef6',
          _type: 'block',
          children: [
            {
              _key: '7f20810d12c4',
              _type: 'span',
              marks: [],
              text: 'En esta oportunidad convocamos más de 30 personas para llevar a cabo cinco proyectos en tan solo tres semanas con el fin de aprender sobre brainstorming, planificación, diseño, control de versiones, pair programming y trabajo en equipo.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '6f520b959446',
          _type: 'block',
          children: [
            {
              _key: 'bcdd57187d7f',
              _type: 'span',
              marks: [],
              text: 'Sumate a conocer los resultados de la experiencia ',
            },
            { _key: 'd91e4c6896e2', _type: 'span', marks: [], text: '🚀' },
            { _key: 'd53c3ee3319a', _type: 'span', marks: [], text: '' },
          ],
          markDefs: [
            {
              _key: '4e5b51f45f2a',
              _type: 'link',
              href: 'https://www.twitch.tv/frontendcafe',
            },
          ],
          style: 'normal',
        },
        {
          _key: '6623fb9f020f',
          _type: 'block',
          children: [
            {
              _key: 'c232b7ab275f',
              _type: 'span',
              marks: ['339fd6471b5e'],
              text: '',
            },
            {
              _key: '755a154b3fae',
              _type: 'span',
              marks: ['339fd6471b5e'],
              text: 'twitch.tv/frontendcafe',
            },
            { _key: 'dbc33da90d3b', _type: 'span', marks: [], text: '' },
            { _key: '254d6d629a47', _type: 'span', marks: [], text: '\n' },
          ],
          markDefs: [
            {
              _key: '4e5b51f45f2a',
              _type: 'link',
              href: 'https://www.twitch.tv/frontendcafe',
            },
            {
              _key: '339fd6471b5e',
              _type: 'link',
              href: 'https://www.twitch.tv/frontendcafe',
            },
          ],
          style: 'normal',
        },
      ],
      slug: 'presentacion-proyectos-cmyk++',
      tags: [],
      title: 'Presentación CMYK++',
    },
    {
      category: { name: 'Grupo de estudio' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/a0d21b9b639a88af024cb03505bb3bbee06b8875-428x211.png',
      },
      date: '2021-09-29T21:00:00.000Z',
      description: [
        {
          _key: '2d648e56af28',
          _type: 'block',
          children: [
            {
              _key: '169ca9ccc219',
              _type: 'span',
              marks: [],
              text: 'Sesiones de consulta y debate relacionadas con el desarrollo de software en general, pero enfocadas principalmente hacia los estándares web y frameworks de JS.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'coffice-hours',
      title: 'Coffice Hours',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'Git e introducción al trabajo en equipo con Github',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/b51bde0eeb91438ab4791ec59e2fc274f03424dc-1381x673.png',
      },
      date: '2021-09-29T19:00:00.000Z',
      description: [
        {
          _key: '1b535bb5c05f',
          _type: 'block',
          children: [
            {
              _key: 'd6296693a0b0',
              _type: 'span',
              marks: [],
              text: 'Colaboración entre FrontendCafé y Grava',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '8bd2635624e0',
          _type: 'block',
          children: [
            {
              _key: '4d817c87859e',
              _type: 'span',
              marks: [],
              text: 'Charla por Christian Martinez',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'product-management-creacion-de-un-producto-desde-el-principio',
      tags: [
        {
          _key: '619d1886392d',
          _ref: '90cb2fe4-3ebb-43dd-a033-9e3f3914c5a7',
          _type: 'reference',
        },
      ],
      title: 'Product management, creación de un producto desde el principio',
    },
    {
      category: { name: 'Grupo de estudio' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/e5b13b90996fdc34781c026b92f9a13589fcad48-428x210.png',
      },
      date: '2021-09-28T22:00:00.000Z',
      description: [
        {
          _key: '8d8158dc9047',
          _type: 'block',
          children: [
            {
              _key: 'f427447c2caa',
              _type: 'span',
              marks: [],
              text: 'Nos enfocamos en las principales herramientas para la organización y puesta en marcha de proyectos tecnológicos. \nEntre ellas git, git-flow, docker, deploys, testing, entre otras.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'dev-tools-study-group',
      title: 'Dev Tools study group',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'Trabajo en equipo: principios, herramientas y mejores practicas para la colaboración online',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/7e8eb79dc090397bca347dd44f6cfc6cdbafbfa8-1381x673.png',
      },
      date: '2021-09-23T22:00:00.000Z',
      description: [
        {
          _key: '1b535bb5c05f',
          _type: 'block',
          children: [
            {
              _key: 'd6296693a0b0',
              _type: 'span',
              marks: [],
              text: 'Colaboración entre FrontendCafé y Grava',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '8bd2635624e0',
          _type: 'block',
          children: [
            {
              _key: '4d817c87859e',
              _type: 'span',
              marks: [],
              text: 'Charla por Martín Bavio',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'trabajo-en-equipo-principios-herramientas-y-mejores-practicas-para-la-colaboracion-online',
      tags: [
        {
          _key: '619d1886392d',
          _ref: '90cb2fe4-3ebb-43dd-a033-9e3f3914c5a7',
          _type: 'reference',
        },
      ],
      title:
        'Trabajo en equipo: principios, herramientas y mejores practicas para la colaboración online',
    },
    {
      category: { name: 'Grupo de estudio' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/92af2c7ed3f5b5c35aedefcedd6e0d38189942be-429x210.png',
      },
      date: '2021-09-23T21:00:00.000Z',
      slug: 'php-study-group1',
      tags: [],
      title: 'PHP Study Group',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/5482394b036b46ac29345937c273e669c8e46bcf-1000x487.png',
      },
      date: '2021-09-21T21:00:00.000Z',
      slug: 'fundamentos-agiles-para-llevar-adelante-proyectos-digitales0',
      tags: [
        {
          _key: 'bffd9e1a40fa',
          _ref: '90cb2fe4-3ebb-43dd-a033-9e3f3914c5a7',
          _type: 'reference',
        },
      ],
      title: 'Fundamentos ágiles para llevar adelante proyectos digitales',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'Orientación y preparación para la búsqueda laboral',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/aee61e057ab3f4ac268edb85d0420ccbc3278886-1381x673.png',
      },
      date: '2021-09-20T23:00:00.000Z',
      description: [
        {
          _key: '1b535bb5c05f',
          _type: 'block',
          children: [
            {
              _key: 'd6296693a0b0',
              _type: 'span',
              marks: [],
              text: 'Colaboración entre FrontendCafé y Grava',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '8bd2635624e0',
          _type: 'block',
          children: [
            {
              _key: '4d817c87859e',
              _type: 'span',
              marks: [],
              text: 'Charla por Ayelen Laurencena',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      recording: 'https://youtu.be/TselaukBMpw',
      slug: 'orientacion-y-preparacion-para-la-busqueda-laboral-confeccion-de-cvs-y-tips-de-entrevistas',
      tags: [
        {
          _key: '619d1886392d',
          _ref: '90cb2fe4-3ebb-43dd-a033-9e3f3914c5a7',
          _type: 'reference',
        },
      ],
      title: 'Orientación y preparación para la búsqueda laboral',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'Git e introducción al trabajo en equipo con Github',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/13940c14ef9b5411a662a57a65463d1410d96cea-1381x673.png',
      },
      date: '2021-09-16T22:00:00.000Z',
      description: [
        {
          _key: '1b535bb5c05f',
          _type: 'block',
          children: [
            {
              _key: 'd6296693a0b0',
              _type: 'span',
              marks: [],
              text: 'Colaboración entre FrontendCafé y Grava',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '8bd2635624e0',
          _type: 'block',
          children: [
            {
              _key: '4d817c87859e',
              _type: 'span',
              marks: [],
              text: 'Charla por Verónica García',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      recording: 'https://youtu.be/Seo1cWiHkW4',
      slug: 'git-e-introduccion-al-trabajo-en-equipo-con-github',
      tags: [
        {
          _key: '619d1886392d',
          _ref: '90cb2fe4-3ebb-43dd-a033-9e3f3914c5a7',
          _type: 'reference',
        },
      ],
      title: 'Git e introducción al trabajo en equipo con Github',
    },
    {
      category: { name: 'Grupo de estudio' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/e0dc94c5cf50c2d6716914ef6e2ece76bf198175-429x210.png',
      },
      date: '2021-09-16T21:00:00.000Z',
      description: [
        {
          _key: '5c6921c5fc89',
          _type: 'block',
          children: [
            {
              _key: '92888417ae68',
              _type: 'span',
              marks: [],
              text: 'Grupo de estudio de PHP, donde exploramos la buenas prácticas, patrones de diseño, frameworks, proponemos retos y proyectos para ser desarrollados entre los participantes.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'php-study-group',
      title: 'PHP study group',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'FUNDAMENTOS ÁGILES PARA LLEVAR ADELANTE PROYECTOS DIGITALES',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/2b0564b151dbbe871fc444f004b3d904fa00b96e-1381x673.png',
      },
      date: '2021-09-14T21:00:00.000Z',
      description: [
        {
          _key: '1b535bb5c05f',
          _type: 'block',
          children: [
            {
              _key: 'd6296693a0b0',
              _type: 'span',
              marks: [],
              text: 'Colaboración entre FrontendCafé y Grava',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '8bd2635624e0',
          _type: 'block',
          children: [
            {
              _key: '4d817c87859e',
              _type: 'span',
              marks: [],
              text: 'Charla por Ramiro Olivencia',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      recording: 'https://youtu.be/Sxj-7Pkt7bg',
      slug: 'fundamentos-agiles-para-llevar-adelante-proyectos-digitales',
      tags: [
        {
          _key: '619d1886392d',
          _ref: '90cb2fe4-3ebb-43dd-a033-9e3f3914c5a7',
          _type: 'reference',
        },
      ],
      title: 'Fundamentos ágiles para llevar adelante proyectos digitales',
    },
    {
      category: { name: 'Grupo de estudio' },
      cover: {
        alt: 'Grupo de estudio de Javascript',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/20950be0a09e1feca01fe0692931d00b7c84d064-2350x733.png',
      },
      date: '2021-07-26T22:00:00.000Z',
      description: [
        {
          _key: '57a7079fcb74',
          _type: 'block',
          children: [
            {
              _key: '3e3ec911ce6e',
              _type: 'span',
              marks: [],
              text: 'Cada 15 días elegimos un desafío para resolver. Durante la semana intercambiamos dudas por escrito y los lunes nos reunimos en una llamada para compartir los resultados.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'js-study-group',
      title: 'JS study group',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/7aa49819531f91b896a625d899cf3da5b651439d-798x250.png',
      },
      date: '2021-07-16T23:30:00.000Z',
      description: [
        {
          _key: '50669c76110b',
          _type: 'block',
          children: [
            {
              _key: '47bf85385acd',
              _type: 'span',
              marks: [],
              text: 'El viernes realizaremos una mesa redonda en la cual charlaremos sobre buenas prácticas a la hora de armar un portfolio y cómo podemos practicar nuestros skills en diseño de UX/UI.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'mesa-redonda-ux-ui',
      tags: [],
      title: 'Mesa redonda UX-UI',
    },
    {
      category: { name: 'Grupo de estudio' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/e0dc94c5cf50c2d6716914ef6e2ece76bf198175-429x210.png',
      },
      date: '2021-06-23T21:30:00.000Z',
      description: [
        {
          _key: '863c1324ed2b',
          _type: 'block',
          children: [
            {
              _key: '8d46c8eadbbd',
              _type: 'span',
              marks: [],
              text: 'Hacemos un challenge de código cada 15 días  y ponemos en común nuestras dudas y soluciones. Utilizamos sitios como Hackerrank, Codewars y Testdome. ',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'interview-prep-study-group',
      title: 'Interview Prep study group',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'presentacion de proyectos CMYK',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/b6fcc5e3124ed6551f21b1096a839a1295fc7cc7-1383x674.png',
      },
      date: '2021-05-07T03:00:00.000Z',
      description: [
        {
          _key: '893bf13e8dfc',
          _type: 'block',
          children: [
            {
              _key: '3ab1a46d9365',
              _type: 'span',
              marks: [],
              text: 'Presentación de proyectos colaborativos realizados por miembros de la comunidad con el objetivo de ganar experiencia en un entorno profesional. ',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      recording: 'https://www.youtube.com/watch?v=5Ykdu-njQwM&t=1s',
      slug: 'cmyk',
      title: 'Presentación CMYK 3.0',
    },
    {
      category: { name: 'Conferencia' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/ca1af23e8bf622d7436b081887240a978c94a101-1280x853.png',
      },
      date: '2021-04-10T13:00:00.000Z',
      description: [
        {
          _key: '3db202ee0855',
          _type: 'block',
          children: [
            {
              _key: 'ff59ba7d86f10',
              _type: 'span',
              marks: [],
              text: 'The CSS Conf is a worldwide organization dedicated to holding conferences for designers, programmers and web interface creators, with the purpose of connecting the community in different countries.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: 'fd7e434460c7',
          _type: 'block',
          children: [
            {
              _key: '9573ee3d985f',
              _type: 'span',
              marks: [],
              text: "It's free and online. \n\nMore info: ",
            },
            {
              _key: '5cec990f3d9f',
              _type: 'span',
              marks: ['66e8f0526b0c'],
              text: 'cssconf.co',
            },
          ],
          markDefs: [
            {
              _key: '66e8f0526b0c',
              _type: 'link',
              href: 'https://cssconf.co/',
            },
          ],
          style: 'normal',
        },
      ],
      slug: 'css-lovers-conf',
      title: 'CSS Lovers CONF Colombia',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'Coffee & Talk ',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/ede663eefe488c067c80cd231ef64ea49e0b3767-1884x1060.png',
      },
      date: '2021-01-19T22:00:00.000Z',
      description: [
        {
          _key: '4f52ea10665a',
          _type: 'block',
          children: [
            {
              _key: 'bf58c8a7cea8',
              _type: 'span',
              marks: [],
              text: '👋Martes 9 de enero las 19:00 p. m. ARG te esperamos en "Coffee & talk" una ',
            },
            {
              _key: 'deee5c8456df',
              _type: 'span',
              marks: ['strong'],
              text: 'práctica de conversación en inglés descontracturada para practicar en grupo',
            },
            { _key: 'babb48a46670', _type: 'span', marks: [], text: ' 🤩' },
          ],
          markDefs: [],
        },
        {
          _key: '2f55db63d09a',
          _type: 'block',
          children: [
            {
              _key: '44a8f11c67b1',
              _type: 'span',
              marks: [],
              text: '\n👉Es requerimiento ',
            },
            {
              _key: '4140139e255d',
              _type: 'span',
              marks: ['strong'],
              text: 'excluyente desmutear el mic y animarse a hablar',
            },
            {
              _key: '0f8c9c4cd719',
              _type: 'span',
              marks: [],
              text: ' para lograr un intercambio entre los participantes.',
            },
          ],
          markDefs: [],
          style: 'h3',
        },
        {
          _key: '6b6af92d16c2',
          _type: 'block',
          children: [
            { _key: 'c66052b0ffbb', _type: 'span', marks: [], text: '' },
          ],
          markDefs: [],
        },
        {
          _key: '1d8fcf5c04f9',
          _type: 'block',
          children: [
            {
              _key: 'b7a201ca8d1a',
              _type: 'span',
              marks: [],
              text: '🌟 ¡El evento es',
            },
            {
              _key: '95decccfc4fe',
              _type: 'span',
              marks: ['strong'],
              text: ' gratis!',
            },
          ],
          markDefs: [],
        },
      ],
      slug: 'coffee-talk',
      tags: [
        {
          _key: 'd543bafaadf1',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'Coffee & Talk: PRÁCTICA DE CONVERSACIÓN',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'Coffee & Talk ',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/c8ca879ecb22abe0571cefdd414f1dabf48eabb2-1174x544.png',
      },
      date: '2020-12-08T22:00:26.415Z',
      description: [
        {
          _key: '12c246a54dad',
          _type: 'block',
          children: [
            {
              _key: '4768ffd3adac',
              _type: 'span',
              marks: [],
              text: '👋Martes 8 de diciembre las 7pm Arg  te esperamos en "Coffee & talk" una ',
            },
            {
              _key: 'f9e091bf31d6',
              _type: 'span',
              marks: ['strong'],
              text: 'práctica de conversación en inglés descontracturada para practicar en grupo',
            },
            { _key: '9767d21252bf', _type: 'span', marks: [], text: ' 🤩' },
          ],
          markDefs: [],
        },
        {
          _key: '8697d0ddc25c',
          _type: 'block',
          children: [
            {
              _key: 'd464ece944b3',
              _type: 'span',
              marks: [],
              text: '\n👉Es requerimiento ',
            },
            {
              _key: 'c6f2a3555091',
              _type: 'span',
              marks: ['strong'],
              text: 'excluyente desmutear el mic y animarse a hablar',
            },
            {
              _key: '1b2b7abd0760',
              _type: 'span',
              marks: [],
              text: ' para lograr un intercambio entre los participantes.',
            },
          ],
          markDefs: [],
          style: 'h3',
        },
        {
          _key: '2ff6f394bdb2',
          _type: 'block',
          children: [
            { _key: '019d2adea330', _type: 'span', marks: [], text: '' },
          ],
          markDefs: [],
        },
        {
          _key: 'de5c61006f21',
          _type: 'block',
          children: [
            {
              _key: '8fa8b0e51339',
              _type: 'span',
              marks: [],
              text: '🌟 ¡El evento es',
            },
            {
              _key: 'ce980f9e05cf',
              _type: 'span',
              marks: ['strong'],
              text: ' gratis!',
            },
          ],
          markDefs: [],
        },
      ],
      slug: 'Coffee & Talk',
      tags: [
        {
          _key: 'd543bafaadf1',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'Coffee & Talk: PRÁCTICA DE CONVERSACIÓN',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'Coffee & Talk ',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/f44ef78551c0bf7959664aa5686336267fb3e2b2-724x353.png',
      },
      date: '2020-12-03T22:30:00.000Z',
      description: [
        {
          _key: 'bfde841148da',
          _type: 'block',
          children: [
            {
              _key: '723a1d6a624a',
              _type: 'span',
              marks: [],
              text: '👋Te esperamos en "Coffee & talk" una ',
            },
            {
              _key: '5eb8ee576aa1',
              _type: 'span',
              marks: ['strong'],
              text: 'práctica de conversación en inglés descontracturada para practicar en grupo',
            },
            { _key: '8fff51a4a826', _type: 'span', marks: [], text: ' 🤩' },
          ],
          markDefs: [],
        },
        {
          _key: 'c92a3d0d8bf0',
          _type: 'block',
          children: [
            {
              _key: '7df5ed592855',
              _type: 'span',
              marks: [],
              text: '\n👉Es requerimiento ',
            },
            {
              _key: 'd8b0aa6372bd',
              _type: 'span',
              marks: ['strong'],
              text: 'excluyente desmutear el mic y animarse a hablar',
            },
            {
              _key: '4bb4b0a44289',
              _type: 'span',
              marks: [],
              text: ' para lograr un intercambio entre los participantes.',
            },
          ],
          markDefs: [],
          style: 'h3',
        },
        {
          _key: 'bc0b5dc34c33',
          _type: 'block',
          children: [
            { _key: 'daa3932357a4', _type: 'span', marks: [], text: '' },
          ],
          markDefs: [],
        },
        {
          _key: '89f45f54835d',
          _type: 'block',
          children: [
            {
              _key: '38566ced9aa3',
              _type: 'span',
              marks: [],
              text: '🌟 El evento es',
            },
            {
              _key: '37cd6a73b63b',
              _type: 'span',
              marks: ['strong'],
              text: ' gratis!',
            },
            { _key: '3805c06795b0', _type: 'span', marks: [], text: '\n' },
          ],
          markDefs: [],
        },
      ],
      slug: 'coffee-and-talk-practica-de-conversacion',
      tags: [
        {
          _key: '5eec5713bcba',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'Coffee & Talk: PRACTICA DE CONVERSACION',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'Coffee & Talk ',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/e4c3eeaa8e388172e63544803a41022652861c08-873x426.png',
      },
      date: '2020-12-01T21:00:00.000Z',
      description: [
        {
          _key: 'bfde841148da',
          _type: 'block',
          children: [
            {
              _key: '723a1d6a624a',
              _type: 'span',
              marks: [],
              text: '👋Martes  1 de diciembre las 6pm Arg te esperamos en "Coffee & talk" una ',
            },
            {
              _key: '5eb8ee576aa1',
              _type: 'span',
              marks: ['strong'],
              text: 'práctica de conversación en inglés descontracturada para practicar en grupo',
            },
            { _key: '8fff51a4a826', _type: 'span', marks: [], text: ' 🤩' },
          ],
          markDefs: [],
        },
        {
          _key: 'c92a3d0d8bf0',
          _type: 'block',
          children: [
            {
              _key: '7df5ed592855',
              _type: 'span',
              marks: [],
              text: '\n👉Es requerimiento ',
            },
            {
              _key: 'd8b0aa6372bd',
              _type: 'span',
              marks: ['strong'],
              text: 'excluyente desmutear el mic y animarse a hablar',
            },
            {
              _key: '4bb4b0a44289',
              _type: 'span',
              marks: [],
              text: ' para lograr un intercambio entre los participantes.',
            },
          ],
          markDefs: [],
          style: 'h3',
        },
        {
          _key: 'bc0b5dc34c33',
          _type: 'block',
          children: [
            { _key: 'daa3932357a4', _type: 'span', marks: [], text: '' },
          ],
          markDefs: [],
        },
        {
          _key: '89f45f54835d',
          _type: 'block',
          children: [
            {
              _key: '38566ced9aa3',
              _type: 'span',
              marks: [],
              text: '🌟 El evento es',
            },
            {
              _key: '37cd6a73b63b',
              _type: 'span',
              marks: ['strong'],
              text: ' gratis!',
            },
            { _key: '3805c06795b0', _type: 'span', marks: [], text: '\n' },
          ],
          markDefs: [],
        },
      ],
      slug: 'coffee-and-talks',
      tags: [
        {
          _key: '5eec5713bcba',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'Coffee & Talk: PRACTICA DE CONVERSACION',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'Coffee & Talk ',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/9b7d529be908442fa6772975aa46de60e4ff05ca-724x353.png',
      },
      date: '2020-11-26T22:00:00.000Z',
      description: [
        {
          _key: 'bfde841148da',
          _type: 'block',
          children: [
            {
              _key: '723a1d6a624a',
              _type: 'span',
              marks: [],
              text: '👋Hoy a las 7pm Arg te esperamos en "Coffee & talk" una ',
            },
            {
              _key: '5eb8ee576aa1',
              _type: 'span',
              marks: ['strong'],
              text: 'práctica de conversación en inglés descontracturada para practicar en grupo',
            },
            { _key: '8fff51a4a826', _type: 'span', marks: [], text: ' 🤩' },
          ],
          markDefs: [],
        },
        {
          _key: 'c92a3d0d8bf0',
          _type: 'block',
          children: [
            {
              _key: '7df5ed592855',
              _type: 'span',
              marks: [],
              text: '\n👉Es requerimiento ',
            },
            {
              _key: 'd8b0aa6372bd',
              _type: 'span',
              marks: ['strong'],
              text: 'excluyente desmutear el mic y animarse a hablar',
            },
            {
              _key: '4bb4b0a44289',
              _type: 'span',
              marks: [],
              text: ' para lograr un intercambio entre los participantes.',
            },
          ],
          markDefs: [],
          style: 'h3',
        },
        {
          _key: 'bc0b5dc34c33',
          _type: 'block',
          children: [
            { _key: 'daa3932357a4', _type: 'span', marks: [], text: '' },
          ],
          markDefs: [],
        },
        {
          _key: '89f45f54835d',
          _type: 'block',
          children: [
            {
              _key: '38566ced9aa3',
              _type: 'span',
              marks: [],
              text: '🌟 El evento es',
            },
            {
              _key: '37cd6a73b63b',
              _type: 'span',
              marks: ['strong'],
              text: ' gratis!',
            },
            { _key: '3805c06795b0', _type: 'span', marks: [], text: '\n' },
          ],
          markDefs: [],
        },
      ],
      slug: 'coffee-and-talk',
      tags: [
        {
          _key: 'b9867b9f3e44',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'Coffee & Talk: PRACTICA DE CONVERSACION',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/79a22f6c8e7f5e6ad432964a0f663fd480c8d967-1200x585.png',
      },
      date: '2020-11-20T21:00:00.000Z',
      description: [
        {
          _key: '245ae2aa0776',
          _type: 'block',
          children: [
            {
              _key: '12e2b75cb87a',
              _type: 'span',
              marks: [],
              text: 'Charlamos con Nacho Anaya y Guille Rodas, sobre el proceso creativo para generar contenido en plataformas de stream.\n\nAdemás, queremos saber como evitan sentir el síndrome del impostor codeando en vivo.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '0941e2139da2',
          _type: 'block',
          children: [
            { _key: '27b677551deb', _type: 'span', marks: [], text: '' },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'crossover-anaya-rodaz',
      tags: [],
      title: 'Streamers Assemble - Charla con Nacho y Guille',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'Proyectos CMYK: Presentación final',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/34eeff73af4632e1743fdb4d9995872ec4599274-1200x585.png',
      },
      date: '2020-11-18T21:00:00.000Z',
      description: [
        {
          _key: '266b11061d3c',
          _type: 'block',
          children: [
            {
              _key: '405223c64840',
              _type: 'span',
              marks: [],
              text: 'Presentacion en vivo de 4 desarrollos hechos en HTML, CSS y JavaScript por grupos de usuarixs de la comunidad que se organizaron para practicar y aprender juntxs.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'presentacion-proyectos-cmyk',
      title: 'Presentación Proyectos CMYK',
    },
    {
      category: { name: 'English & Tech' },
      cover: {
        alt: 'english-speaking-practice',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/c327ea3da44ad5325a91a673f645969ce72ea8b2-1308x637.png',
      },
      date: '2020-11-17T21:00:00.000Z',
      description: [
        {
          _key: '1c1c078d6e0a',
          _type: 'block',
          children: [
            {
              _key: '30f3e186574b',
              _type: 'span',
              marks: ['strong'],
              text: 'Free English listening practice online on Discord.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: 'bf1ce4e585e0',
          _type: 'block',
          children: [
            {
              _key: '02712ac5bfa9',
              _type: 'span',
              marks: ['em'],
              text: 'No minimum English level required to join, just expect to be immersed in English and pick up what you can. No inscription required.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'english-speaking-startups',
      tags: [
        {
          _key: '490b7e1adcaf',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'English Speaking Practice: Startups',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'After con Tofi, un nerd viajero',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/95c9dd226a89720321d3c2ea4e18610786db2097-1383x674.png',
      },
      date: '2020-11-13T22:00:00.000Z',
      description: [
        {
          _key: '0a905c98fdc9',
          _type: 'block',
          children: [
            {
              _key: 'fd1b53d4191e',
              _type: 'span',
              marks: [],
              text: 'El viernes a las 19 hs ARG, charlaremos con ',
            },
            {
              _key: '6d36a19b9ffd',
              _type: 'span',
              marks: ['8c6f96fdf728'],
              text: '@trendingtofi',
            },
            {
              _key: '7c179b5fb63d',
              _type: 'span',
              marks: [],
              text: ', web dev, viajero, bloguero, ¿youtuber? y usuario de ',
            },
            {
              _key: 'f46b6b65108b',
              _type: 'span',
              marks: ['2658c4964ac6'],
              text: '@FrontEndCafe',
            },
            {
              _key: 'a5ef820ce574',
              _type: 'span',
              marks: [],
              text: '. Junto a Leti, cuentan su día a día en ',
            },
            {
              _key: '9c2d000b15b3',
              _type: 'span',
              marks: ['62fccdd9ae29'],
              text: 'http://pintandokm.com',
            },
            { _key: 'fb2124e08f5c', _type: 'span', marks: [], text: ' ' },
          ],
          markDefs: [
            {
              _key: '8c6f96fdf728',
              _type: 'link',
              href: 'https://twitter.com/trendingtofi',
            },
            {
              _key: '2658c4964ac6',
              _type: 'link',
              href: 'https://twitter.com/FrontEndCafe',
            },
          ],
          style: 'normal',
        },
        {
          _key: '661cc198435d',
          _type: 'block',
          children: [
            {
              _key: '505cb6f61ab5',
              _type: 'span',
              marks: [],
              text: 'Un encuentro relajado para cerrar la semana ',
            },
            {
              _key: 'b2beb0a70c47',
              _type: 'span',
              marks: ['0addd5ccbff0'],
              text: 'http://twitch.tv/frontendcafe',
            },
            { _key: '0135da51dd57', _type: 'span', marks: [], text: '​ ' },
          ],
          markDefs: [
            {
              _key: '0addd5ccbff0',
              _type: 'link',
              href: 'https://t.co/mfG0HyRkW5?amp=1',
            },
          ],
          style: 'normal',
        },
      ],
      slug: 'after-con-tofi-un-nerd-viajero',
      title: 'After con Tofi, un nerd viajero',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'English & Chill',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/e43c56371677ff15932c607ba066ab6ae44b388f-1299x637.png',
      },
      date: '2020-11-12T22:30:00.000Z',
      description: [
        {
          _key: '2b15cc07b63b',
          _type: 'block',
          children: [
            {
              _key: 'fb49a54778eb',
              _type: 'span',
              marks: ['strong'],
              text: 'Free English listening practice online on Discord.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '3f11ea23b343',
          _type: 'block',
          children: [
            {
              _key: 'a7a2f814fd41',
              _type: 'span',
              marks: ['em'],
              text: 'No minimum English level required to join, just expect to be immersed in English and pick up what you can. No inscription required.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'english-and-chill',
      tags: [
        {
          _key: '51024e9c54c2',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'English Speaking Practice: videogames edition',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'english-speaking-practice',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/45c0560f2a2783bc43f358b0175cde45133760de-1383x674.png',
      },
      date: '2020-10-29T22:30:00.000Z',
      description: [
        {
          _key: 'df973c3b8aa6',
          _type: 'block',
          children: [
            {
              _key: '66c51a4dc1f5',
              _type: 'span',
              marks: ['strong'],
              text: 'Free English speaking practice online on Discord.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: 'e7a01b3ab123',
          _type: 'block',
          children: [
            {
              _key: '211370dee0210',
              _type: 'span',
              marks: [],
              text: 'We will be talking about horror movies, legends, monsters and other topics related to Halloween.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '5fc93a27202e',
          _type: 'block',
          children: [
            {
              _key: 'c2cc42acefab0',
              _type: 'span',
              marks: ['em'],
              text: 'No minimum English level required to join, just expect to be immersed in English and pick up what you can. No inscription required.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'english-speaking-practice',
      tags: [
        {
          _key: '8b261b25f25a',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'English & Chill: Horror Monsters',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: 'shit happens',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/4d03d53e01bee6a92fcab3311ca9b6a17e61fff1-1383x674.png',
      },
      date: '2020-10-28T21:30:00.000Z',
      description: [
        {
          _key: '98b7f0ba6b08',
          _type: 'block',
          children: [
            {
              _key: 'e11c98ea3084',
              _type: 'span',
              marks: [],
              text: 'Charla con Martín Bavio (@marbiano) sobre procesos de búsqueda para grandes compañías, y cómo enfrentar un NO como respuesta.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      recording: 'https://youtu.be/c-xgJID8MtU',
      slug: 'shit happens',
      tags: [
        {
          _key: '1e5ace85e9eb',
          _ref: 'a62be0ed-4b75-4c7f-bd08-b4934b5fce29',
          _type: 'reference',
        },
      ],
      title: 'Shit happens',
    },
    {
      category: { name: 'English & Tech' },
      cover: {
        alt: 'English Speaking Practice: The history of the web',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/07f8ad768b18782b32dcf246768ce7e3c2d995a6-1383x674.png',
      },
      date: '2020-10-27T21:00:00.000Z',
      description: [
        {
          _key: '9c0d777d8c4e',
          _type: 'block',
          children: [
            {
              _key: '69e7af23b472',
              _type: 'span',
              marks: ['strong'],
              text: 'Free English speaking practice online on Discord.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '19ed853e3c48',
          _type: 'block',
          children: [
            {
              _key: 'c14218161788',
              _type: 'span',
              marks: [],
              text: 'This time we will be talking about history and internet.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: 'dcdd82c6a1c5',
          _type: 'block',
          children: [
            {
              _key: '56aff53e2c26',
              _type: 'span',
              marks: ['em'],
              text: 'No minimum English level required to join, just expect to be immersed in English and pick up what you can. No inscription required.',
            },
            { _key: 'd0989be76f0c', _type: 'span', marks: ['em'], text: '\n' },
            { _key: '18a4b8def0ce', _type: 'span', marks: [], text: ' ' },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'English Speaking Practice',
      tags: [
        {
          _key: '430c3e4247ff',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
        {
          _key: '3c6a2d291392',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'English Speaking Practice: The history of the web',
    },
    {
      category: { name: 'Conferencia' },
      cover: {
        alt: 'nerdearla',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/30523cb7840b74c86cc4380261938cb4514a68c2-1756x826.png',
      },
      date: '2020-10-20T13:00:58.000Z',
      description: [
        {
          _key: '79513cbad70d',
          _type: 'block',
          children: [
            {
              _key: '6a84282c800d',
              _type: 'span',
              marks: ['strong'],
              text: 'Evento online del 20 al 24 de octubre.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '9d8d663fb993',
          _type: 'block',
          children: [
            {
              _key: 'c38776683159',
              _type: 'span',
              marks: [],
              text: 'Desde FrontEndCafé queremos invitarte a ',
            },
            {
              _key: '1879f498037c',
              _type: 'span',
              marks: ['7d09a720acdc'],
              text: 'Nerdear.la',
            },
            {
              _key: 'fa51d39ffa15',
              _type: 'span',
              marks: [],
              text: ' un evento de cinco días en donde vas a poder participar de charlas y talleres, compartir en qué estás trabajando, conocer gente fantástica, disfrutar juegos ¡y todo 100% gratis!',
            },
          ],
          markDefs: [
            {
              _key: '7d09a720acdc',
              _type: 'link',
              href: 'https://nerdear.la/',
            },
          ],
          style: 'normal',
        },
        {
          _key: '240433318634',
          _type: 'block',
          children: [
            {
              _key: '0fbb1cdc92e6',
              _type: 'span',
              marks: ['45682446ee3a', 'em'],
              text: 'Sacá tu entrada haciendo click en este link',
            },
            { _key: '3c82c6b92aaf', _type: 'span', marks: ['em'], text: ' ' },
          ],
          markDefs: [
            {
              _key: '45682446ee3a',
              _type: 'link',
              href: 'https://www.eventbrite.com/e/nerdearla-2020-20-al-24-de-octubre-registration-117880719405?aff=web&utm_campaign=registro2020&utm_source=web&utm_medium=web',
            },
          ],
          style: 'normal',
        },
      ],
      slug: 'nerdear-la',
      tags: [
        {
          _key: 'fe93c1d7bc02',
          _ref: 'a62be0ed-4b75-4c7f-bd08-b4934b5fce29',
          _type: 'reference',
        },
      ],
      title: 'Nerdear.la',
    },
    {
      category: { name: 'Recruiters & Beers' },
      cover: {
        alt: 'IT Recruiters & Beers',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/d5ef92942df24864f4e549e03a8f73f5a265a148-1921x937.png',
      },
      date: '2020-10-19T21:30:00.000Z',
      description: [
        {
          _key: '44b6b30ec2dd',
          _type: 'block',
          children: [
            {
              _key: '32b11ae30bcd',
              _type: 'span',
              marks: [],
              text: 'Sesión de preguntas y respuestas con Paula Levy ',
            },
            {
              _key: 'f155b8ad8120',
              _type: 'span',
              marks: ['em'],
              text: '(@paurrhh)',
            },
            {
              _key: '0ca579412176',
              _type: 'span',
              marks: [],
              text: ' y Alan Gosiker ',
            },
            {
              _key: '78b31831a1a6',
              _type: 'span',
              marks: ['em'],
              text: '(@alangosiker)',
            },
            {
              _key: '3b7ceb665d61',
              _type: 'span',
              marks: [],
              text: ', dos selectores de personal especializados en tecnología.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      recording: 'https://www.youtube.com/watch?v=QY7HsFq5wVY',
      slug: 'it-recruiters-and-beers',
      tags: [
        {
          _key: '8e04da379789',
          _ref: '75d7865f-51bd-43ae-98dc-f40196612eaf',
          _type: 'reference',
        },
      ],
      title: 'IT Recruiters & Beers',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'English Speaking Practice',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/792d0d58bba689d29ec23e6af12a5238b04545c4-1137x573.png',
      },
      date: '2020-10-15T21:30:00.000Z',
      description: [
        {
          _key: 'b5654f4fe1e3',
          _type: 'block',
          children: [
            {
              _key: '35681d423715',
              _type: 'span',
              marks: [],
              text: 'Tenemos nuestra charla distendida en inglés.\nTema: Libre\nTe esperamos!\n',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'english-speaking-practice-free',
      tags: [
        {
          _key: 'd7aa569e4257',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'English Speaking Practice',
    },
    {
      category: { name: 'English & Tech' },
      cover: {
        alt: 'English Speaking Practice: My first job',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/3055bbdcf2859090604dd00dfd2449e85be6b664-1383x674.png',
      },
      date: '2020-10-13T21:00:00.000Z',
      description: [
        {
          _key: '9b14df8e9fcf',
          _type: 'block',
          children: [
            {
              _key: 'ee0960daa919',
              _type: 'span',
              marks: ['strong'],
              text: 'Free English speaking practice online on Discord.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: 'c42a34290d5b',
          _type: 'block',
          children: [
            {
              _key: '443d52d06265',
              _type: 'span',
              marks: [],
              text: "This time we are going to be talking about our first job experiences, fears, fails and having fun as newbie. Don't forget to bring your ideas and questions!",
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: 'f15388513e62',
          _type: 'block',
          children: [
            {
              _key: '4820412b436d',
              _type: 'span',
              marks: ['em'],
              text: 'No minimum English level required to join, just expect to be immersed in English and pick up what you can. No inscription required.',
            },
            { _key: '73d5a0551180', _type: 'span', marks: ['em'], text: '\n' },
            { _key: '8c4584175f96', _type: 'span', marks: [], text: ' ' },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'english-speaking-practice-my-first-job',
      tags: [
        {
          _key: '20309c1db114',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'English Speaking Practice: My First Job',
    },
    {
      category: { name: 'Coffee & Talk' },
      cover: {
        alt: 'English Speaking practice: Failed to compile',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/0160e36cf39732ba0524eff69eec86cbfd9f2de4-1123x564.png',
      },
      date: '2020-10-01T22:30:00.000Z',
      description: [
        {
          _key: '2c025eebaf21',
          _type: 'block',
          children: [
            {
              _key: '9ddc650204020',
              _type: 'span',
              marks: ['strong'],
              text: 'Free English speaking practice online on Discord.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '44a4e8c06e45',
          _type: 'block',
          children: [
            {
              _key: '59aa54173445',
              _type: 'span',
              marks: [],
              text: 'We will be talking about failures in life, failed job interviews, being fired, so... just life in general. ',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '3f3e9653c5f0',
          _type: 'block',
          children: [
            {
              _key: '516b4efc3858',
              _type: 'span',
              marks: ['em'],
              text: 'No minimum English level required to join, just expect to be immersed in English and pick up what you can. No inscription required.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'English & Chill',
      tags: [
        {
          _key: '2676e3e571d9',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'English Speaking practice: Failed to compile',
    },
    {
      category: { name: 'English & VIP' },
      cover: {
        alt: 'Chilling with Florin Pop',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/bff111d604e9bb2147d93b0a8d375082b01eb7d1-1123x563.png',
      },
      date: '2020-09-27T17:00:00.000Z',
      description: [
        {
          _key: '1e14bd2bc8d9',
          _type: 'block',
          children: [
            {
              _key: '7bf7137209b6',
              _type: 'span',
              marks: ['strong'],
              text: 'English listening practice. ',
            },
            {
              _key: '33e34149460c',
              _type: 'span',
              marks: [],
              text: 'We shared coffee with Florin Pop and chatted about his career, and different topics related to the tech industry around the world. \n',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      recording: 'https://youtu.be/ru0dyksGl1U',
      slug: 'chilling-with-florin-pop',
      tags: [
        {
          _key: '35561465e62c',
          _ref: '7adbc31d-32a8-469b-8c04-3eff1b95f2fb',
          _type: 'reference',
        },
      ],
      title: 'Chilling with Florin Pop',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        alt: '¿A dónde vamos? After de emigrantes ',
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/eeb8dfea5894da37cc999c860ef9ca3fa6a8803c-1123x561.png',
      },
      date: '2020-09-25T21:30:00.000Z',
      description: [
        {
          _key: '1f91955edb39',
          _type: 'block',
          children: [
            {
              _key: '8d90515be6a6',
              _type: 'span',
              marks: [],
              text: 'Pat Ferraggi, Full Stack Developer argentino radicado en Bélgica nos contó sobre su',
            },
            {
              _key: 'e7f7eea0a3ae',
              _type: 'span',
              marks: [],
              text: ' experiencia emigrando y  su visión respecto a la industria del desarrollo en Europa. ',
            },
            { _key: '89c4b700c36c', _type: 'span', marks: [], text: '✈️ ' },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      recording: 'https://youtu.be/ZmQwgCmN_BU',
      slug: 'after-con-entrevistas',
      tags: [
        {
          _key: 'daad753f2d2d',
          _ref: '182002c7-d860-4f0f-bfbe-ee0ff0bf5ce8',
          _type: 'reference',
        },
      ],
      title: 'After de emigrantes',
    },
    {
      category: { name: 'English & Tech' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/628239d5ae6e2ff8c01731db76a1804b62516510-1381x673.jpg',
      },
      date: '2020-09-22T21:00:00.000Z',
      description: [
        {
          _key: '995cc1115acf',
          _type: 'block',
          children: [
            {
              _key: '5822dd3201e1',
              _type: 'span',
              marks: [],
              text: "It's not a class, it´s a speaking practice When? Tuesday 09/22 - 6 pm Arg (gmt -3) Where? Inside our Discord channel",
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'healthy-habits-while-working-from-home',
      title: 'Healthy habits while working from home',
    },
    {
      category: { name: 'Encuentros' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/0ad698684b854afd29a1253be05f2f60f989368e-1123x564.jpg',
      },
      date: '2020-09-18T21:30:00.000Z',
      description: [
        {
          _key: '0486ee9e3bea',
          _type: 'block',
          children: [
            {
              _key: '718f9b2ae76f',
              _type: 'span',
              marks: [],
              text: 'Mañana después del ',
            },
            {
              _key: 'b1408e27e184',
              _type: 'span',
              marks: ['479c2e5e9c35'],
              text: '#viernesdecumbia',
            },
            {
              _key: 'f61f27e17c50',
              _type: 'span',
              marks: [],
              text: ' en el coworking, nos vamos de ',
            },
            {
              _key: '52ffbd061039',
              _type: 'span',
              marks: ['43d4544a7fbc'],
              text: '#AfterDeEstresados',
            },
            {
              _key: 'e659e4dbf893',
              _type: 'span',
              marks: [],
              text: '! Trae algo para tomar y date una vuelta por el server!',
            },
          ],
          markDefs: [
            {
              _key: '479c2e5e9c35',
              _type: 'link',
              href: 'https://twitter.com/hashtag/viernesdecumbia?src=hashtag_click',
            },
            {
              _key: '43d4544a7fbc',
              _type: 'link',
              href: 'https://twitter.com/hashtag/AfterDeEstresados?src=hashtag_click',
            },
          ],
          style: 'normal',
        },
      ],
      slug: 'after-de-estresados',
      title: 'After de estresados',
    },
    {
      category: { name: 'Workshop' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/271cd1e09db4e0435fe5bed99d800c0c40cccc33-1123x564.jpg',
      },
      date: '2020-09-17T22:30:00.000Z',
      description: [
        {
          _key: '9e1746d078ed',
          _type: 'block',
          children: [
            {
              _key: 'b72fdeafabf3',
              _type: 'span',
              marks: [],
              text: 'Hey there! Don´t forget another "English & Chill" event is coming! Thurdays\' topic = Sci-fi What? It\'s not a class, it´s a speaking practice When? Thursday 9/17 - 7.30 pm Arg (gmt -3) Where? Inside our Discord channel',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'sci-fi-edition',
      title: 'Sci-fi Edition',
    },
    {
      category: { name: 'Workshop' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/3dfbd7fc85f5ef16947358142f43a7b569f1e792-1123x563.jpg',
      },
      date: '2020-09-10T22:30:00.000Z',
      description: [
        {
          _key: '14cb2719dc45',
          _type: 'block',
          children: [
            {
              _key: 'cee359ac89cd',
              _type: 'span',
              marks: [],
              text: "What It's not a class, a speaking practice. When? Today 9/10 19:30pm Arg (gmt -3). Where?  inside our Discord channel.",
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      slug: 'speaking-chill-practice',
      title: 'Speaking chill practice',
    },
    {
      category: { name: 'Workshop' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/88a3d2f6074c23d0ead4e33aa4d1abc19d35f226-1024x512.jpg',
      },
      date: '2020-09-06T23:00:00.000Z',
      description: [
        {
          _key: '1ff3e7b84be9',
          _type: 'block',
          children: [
            {
              _key: '99b70be1897e',
              _type: 'span',
              marks: [],
              text: 'El próximo domingo 6 de septiembre ',
            },
            {
              _key: 'e70f67b3808a',
              _type: 'span',
              marks: ['4b59a195ce09'],
              text: '@Josh_Dev1205',
            },
            {
              _key: '94d147da485a',
              _type: 'span',
              marks: [],
              text: ' va a dar un workshop sobre Nuxt.js, Vercel y Prisma. Realizaremos la actividad dentro de Discord con un cupo máximo de 25 personas, y stream de Twitch si somos más. Dense una vuelta!',
            },
          ],
          markDefs: [
            {
              _key: '4b59a195ce09',
              _type: 'link',
              href: 'https://twitter.com/Josh_Dev1205',
            },
          ],
          style: 'normal',
        },
      ],
      slug: 'nuxt-js-vercel-prisma',
      title: 'Nuxt.js + Vercel + Prisma',
    },
    {
      category: { name: 'Workshop' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/ef11d210a2dd2a6af2df856253e6c89b40744c8c-1024x512.jpg',
      },
      date: '2020-08-27T23:30:00.000Z',
      description: [
        {
          _key: '7069c451fc6d',
          _type: 'block',
          children: [
            {
              _key: '5105c59e5ea2',
              _type: 'span',
              marks: [],
              text: '#FECSession donde ',
            },
            {
              _key: '80278f994f44',
              _type: 'span',
              marks: ['6d2c14dda4f5'],
              text: 'Ezequiel Boehler',
            },
            {
              _key: '5258ae1722eb',
              _type: 'span',
              marks: [],
              text: ' nos cuenta por qué está bueno diseñar la recolección de datos desde el comienzo del desarrollo de un producto web y cómo podemos arrancar.\n',
            },
          ],
          markDefs: [
            {
              _key: '6d2c14dda4f5',
              _type: 'link',
              href: 'https://twitter.com/LazioB',
            },
          ],
          style: 'normal',
        },
      ],
      recording: 'https://www.youtube.com/watch?v=iemntvomOXI',
      slug: 'por-que-y-como-disenar-la-recoleccion-de-datos',
      title: '¿Por qué y cómo diseñar la recolección de datos?',
    },
    {
      category: { name: 'English & Tech' },
      cover: {
        src: 'https://cdn.sanity.io/images/0mjeop5f/production/3f277b9ab34669d980a22ea5f67a229ce472c963-1928x1088.jpg',
      },
      date: '2020-07-31T21:30:00.000Z',
      description: [
        {
          _key: '6d8f1b8cbeeb',
          _type: 'block',
          children: [
            {
              _key: 'c5b678091c10',
              _type: 'span',
              marks: [],
              text: 'Hello everyone! We invite you to our first class of "English for Developers" hosted by ',
            },
            {
              _key: 'c329eb6d7ab5',
              _type: 'span',
              marks: ['b50d660e770a'],
              text: '@daianabl',
            },
            { _key: '78fd8c855363', _type: 'span', marks: [], text: '​ ' },
          ],
          markDefs: [
            {
              _key: 'b50d660e770a',
              _type: 'link',
              href: 'https://twitter.com/daianabl',
            },
          ],
          style: 'normal',
        },
        {
          _key: 'c404a01e9494',
          _type: 'block',
          children: [
            {
              _key: 'a4376875a305',
              _type: 'span',
              marks: [],
              text: 'When? September 1st at 6.30 PM (GMT-3 ARG) Where? Our Discord channel',
            },
          ],
          markDefs: [
            {
              _key: 'b50d660e770a',
              _type: 'link',
              href: 'https://twitter.com/daianabl',
            },
          ],
          style: 'normal',
        },
      ],
      slug: 'english-for-developers',
      title: 'English for Developers',
    },
  ],
};
