// Generator landing pages in this language (/es/generators/…), merged into GENERATORS by ../generators.js.
// Translated from the English entries: a generator is published in this language once its entry has `copy`.
// Shape and rules (numbers, links, lengths): scripts/check-generator-locales.mjs — run it after any change here.
export const shared = {
  catalogLabel: "Generadores",
  catalogTitle: "Generadores para impresión 3D — Modelos paramétricos gratis | Forgent3D",
  catalogDescription:
    "Generadores gratis online para impresión 3D: contenedores y placas base Gridfinity, cajas paramétricas, adaptadores de manguera, embudos, engranajes, arandelas, bandejas para herramientas, escuadras para perfil 2020, chumaceras y rejillas de ventilador. Ajusta parámetros, previsualiza en 3D y exporta STL / STEP.",
  catalogH1: "Generadores para impresión 3D",
  catalogIntro:
    "Cada generador de esta página es un modelo CAD paramétrico de verdad: ajusta los parámetros y se reconstruye al instante, exporta STL / STEP y, para todo lo que vaya más allá de los deslizadores, el agente de IA edita el mismo modelo.",
  openApp: "Abrir el generador",
  paramsTitle: "Parámetros que puedes ajustar",
  paramsIntro:
    "Cada cambio en los parámetros de abajo reconstruye geometría real: esto es CAD paramétrico, no una malla escalada.",
  thParam: "Parámetro",
  thDefault: "Por defecto",
  thRange: "Rango",
  thDesc: "Qué hace",
  howTitle: "Cómo funciona",
  howSteps: [
    "Abre el generador: el modelo se construye directamente en tu navegador, sin instalar nada.",
    "Ajusta medidas y opciones en el panel de parámetros; la geometría se reconstruye en 3D al instante.",
    "Exporta STL / STEP para imprimir, o pide al agente de IA lo que los deslizadores no cubren.",
  ],
  faqTitle: "Preguntas frecuentes",
  sharedFaqs: [
    {
      q: "¿Puedo vender piezas impresas con estos generadores?",
      a: "Sí. Los modelos que generes y los archivos STL / STEP que exportes son tuyos: imprímelos, vende las piezas impresas o úsalos en un producto. No necesitas citar a Forgent3D.",
    },
  ],
  licenseNote: "Los modelos que generes son tuyos, también para uso comercial, sin necesidad de atribución.",
  aiEditCta: "Editar con IA",
  embedTitle: "Úsalo aquí mismo",
  embedIntro:
    "El generador real funciona en tu navegador: fija los parámetros y descarga STEP o STL. Sin instalar nada y sin registrarte.",
  embedLoad: "Abrir el generador aquí",
  embedNote: "La primera vez que lo abres se descarga el motor CAD (unos 20 MB).",
  paramsLinkNote:
    "Todos los parámetros pueden ir en el enlace de la página, así que un solo enlace abre exactamente la pieza que quieres.",
  stepTitle: "Qué hay en el archivo STEP",
  stepCommon:
    "STEP AP214 en milímetros, B-rep exacto: se abre directamente en SolidWorks, Fusion, FreeCAD, Onshape o Inventor, y se puede subir tal cual a un formulario de presupuesto de mecanizado CNC. El STL para el laminador (slicer) también está a un clic.",
  compareTitle: "Cómo se compara",
  compareHead: ["", "Este generador", "Generador STL online típico", "Biblioteca CAD del fabricante"],
  compareRows: [
    ["Cualquier medida dentro del rango", "Sí", "Sí", "Solo medidas de catálogo"],
    ["STEP con superficies exactas", "Sí", "Normalmente solo una malla STL", "Sí"],
    ["Cambios que los deslizadores no cubren", "“AI edit” en la página", "No", "No"],
    ["Cuenta necesaria para descargar", "No", "Normalmente no", "A menudo"],
  ],
  aiTitle: "Deja que la IA lo cambie",
  aiLinkTitle: "Pon los números en el enlace",
  aiLinkBody:
    "Cada parámetro es un parámetro del enlace; el enlace de abajo abre la pieza del ejemplo. ChatGPT, Claude o cualquier otro asistente puede escribir uno igual a partir de la lista de parámetros (nombres, unidades y rangos), disponible en:",
  aiEditTitle: "Edita con IA en la página",
  aiEditBody:
    "Pulsa “AI edit” en el generador y di qué quieres cambiar: un chavetero, unos agujeros, otra forma. La IA edita el model.py de la pieza y esta se reconstruye en tu navegador, con opción de deshacer. Unas cuantas ediciones al día son gratis sin iniciar sesión; para conservar el resultado o ir más allá, cópialo a tus modelos y sigue con el agente de IA.",
  aiWorkspaceTitle: "Sigue en tu espacio de trabajo",
  aiWorkspaceBody:
    "Para cambios más grandes, varias rondas o una pieza que quieras conservar: cópiala a tus modelos (cuenta gratuita). El agente de IA de Forgent3D lee el model.py, lo edita, lo reconstruye y comprueba el resultado por sí mismo.",
  aiWorkspaceCta: "Copiar y seguir con el agente de IA",
  schemaLabel: "lista de parámetros (JSON)",
  exampleLabel: "Ejemplo",
  featureList: [
    "Paramétrico: todas las medidas son ajustables",
    "Exportación a STEP (AP214) y STL",
    "Funciona en el navegador, sin instalación",
    "Edición con IA del código fuente de la pieza",
    "Los enlaces llevan los valores de los parámetros",
  ],
  relatedTitle: "Más generadores",
  scadPrompt: "¿Ya tienes tu propio archivo .scad?",
  scadLink: "Convertir OpenSCAD a STEP",
  viewerLink: "Previsualízalo en el navegador",
  breadcrumbHome: "Inicio",
};

export const generators = {
  "gridfinity-bin-generator": {
    copy: {
      name: "Generador de contenedores Gridfinity",
      title: "Generador de contenedores Gridfinity — Con divisores e imanes | Forgent3D",
      description:
        "Generador de contenedores Gridfinity online: cuadrícula, altura, divisores, huecos para imanes y rampa. Vista 3D y STL o STEP gratis, sin instalar CAD.",
      h1: "Generador de contenedores Gridfinity: a tu medida, con CAD real por debajo",
      intro:
        "Dimensiona un contenedor Gridfinity (un bin, en la jerga de la comunidad) en unidades de cuadrícula de 42 mm, añade divisores, huecos para imanes y una rampa, y mira cómo el modelo se reconstruye en tu navegador. A diferencia de los personalizadores que solo generan un STL, cada contenedor es código CAD paramétrico: cuando necesites algo que los deslizadores no cubren, el agente de IA edita el mismo modelo por ti.",
      whyPoints: [
        "Especificación Gridfinity real: paso de 42 mm, unidades de altura de 7 mm y borde apilable",
        "Indicas cuántos compartimentos quieres; los huecos para imanes (Ø6 × 2 mm) y la rampa se activan con un interruptor",
        "Exporta STL / STEP limpios, imprimibles sin soportes",
        "¿Necesitas una repisa para etiquetas o un recorte a medida? Modifícalo con el agente de IA",
      ],
      faqs: [
        {
          q: "¿Qué imanes caben en los huecos para imanes?",
          a: "Los huecos de la base están dimensionados para el estándar de facto de Gridfinity: imanes de disco de neodimio de Ø6 mm × 2 mm, cuatro por cada unidad de cuadrícula de 42 mm (uno cerca de cada esquina). Pegarlos es opcional: los contenedores también asientan bien en una placa base sin imanes.",
        },
        {
          q: "¿Los contenedores Gridfinity se imprimen sin soportes?",
          a: "Sí. El perfil de la base, el borde de apilado y la rampa están diseñados dentro de los límites de voladizo del FDM. Imprime los contenedores en plano sobre la cama, en PLA o PETG, con capas de 0.2 mm; con la cama limpia no hacen falta ni soportes ni brim.",
        },
        {
          q: "¿Puedo cambiar algo que los parámetros no cubren?",
          a: "Sí: para eso existe Forgent3D. El contenedor se genera a partir de código CAD editable, así que puedes copiarlo a tu espacio de trabajo y pedirle al agente de IA pestañas para etiquetas, ranuras para los dedos, recortes a medida o una huella no estándar.",
        },
      ],
    },
    params: {
      GRID_X: { label: "Unidades de cuadrícula X", desc: "Ancho del contenedor en unidades Gridfinity de 42 mm." },
      GRID_Y: { label: "Unidades de cuadrícula Y", desc: "Profundidad del contenedor en unidades Gridfinity de 42 mm." },
      HEIGHT_U: { label: "Unidades de altura", desc: "Altura del contenedor en incrementos estándar de 7 mm." },
      DIV_X: { label: "Compartimentos X", desc: "Número de compartimentos a lo ancho." },
      DIV_Y: { label: "Compartimentos Y", desc: "Número de compartimentos en profundidad." },
      STACKING_LIP: { label: "Borde de apilado", desc: "Borde superior para que otro contenedor se apile encima de este." },
      MAGNET_HOLES: { label: "Huecos para imanes", desc: "Huecos de Ø6 × 2 mm para imanes, cuatro por cada unidad de cuadrícula de 42 mm." },
      SCOOP: { label: "Rampa", desc: "Fondo curvo en la parte delantera para que las piezas pequeñas salgan deslizándose." },
    },
    example: "contenedor de 2 × 1, 3 unidades de alto, tres compartimentos, huecos para imanes",
    step: [
      "Los pies de la base, el borde de apilado y las esquinas redondeadas se exportan como planos, cilindros y conos exactos: 220 caras para el contenedor de 3 × 2 por defecto, y cada pendiente de 45° es un cono real allí donde dobla una esquina.",
      "Así puedes comparar el contenedor con la especificación Gridfinity en CAD, o rehacerlo en Fusion u Onshape sin pelearte con una malla.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago un contenedor Gridfinity de 2 × 1 con tres compartimentos y huecos para imanes?",
        a: "https://www.forgent3d.com/es/generators/gridfinity-bin-generator?GRID_X=2&GRID_Y=1&HEIGHT_U=3&DIV_X=3&MAGNET_HOLES=true abre exactamente ese contenedor (la altura va en unidades de 7 mm). Descarga el STL para imprimirlo, o el STEP para seguir editándolo en CAD.",
      },
      {
        q: "¿Puedo añadir una repisa para etiquetas o un recorte para una herramienta concreta?",
        a: "Pulsa “AI edit” en el generador y descríbelo (“una repisa para etiquetas de 12 mm a lo largo del frente”); la IA edita el model.py del contenedor y este se reconstruye en tu navegador. Para un rediseño mayor, copia el contenedor a tus modelos y sigue con el agente de IA.",
      },
    ],
    keywords: [
      "generador gridfinity",
      "generador de contenedores gridfinity",
      "contenedores gridfinity a medida",
      "gridfinity con divisores stl",
      "gridfinity bin stl",
    ],
  },

  "gridfinity-baseplate-generator": {
    copy: {
      name: "Generador de placas base Gridfinity",
      title: "Generador de placas base Gridfinity — A medida y online | Forgent3D",
      description:
        "Generador de placas base Gridfinity para tu cajón: cualquier tamaño, estilo fino o aligerado, huecos para imanes y tornillos. Vista 3D y STL o STEP gratis.",
      h1: "Generador de placas base Gridfinity para cajones y escritorios",
      intro:
        "Elige cuántas celdas de 42 mm necesitas, escoge un perfil fino o aligerado y añade huecos para imanes o agujeros para tornillos. La placa base (la baseplate de Gridfinity) se reconstruye al instante como CAD paramétrico, y si tu cajón necesita un relleno raro o una esquina recortada, el agente de IA puede editar el mismo modelo.",
      whyPoints: [
        "Perfil de alojamiento Gridfinity exacto: los contenedores encajan sin ningún juego",
        "Estilo fino para la mínima altura, aligerado para ahorrar filamento",
        "Opciones de imanes (Ø6 × 2 mm) y tornillos M3 avellanados",
        "¿Cajón de forma irregular? Pide al agente que recorte la placa para que encaje",
      ],
      faqs: [
        {
          q: "¿Qué estilo imprimo?",
          a: "Thin (fino) es el valor por defecto: la impresión más rápida y la altura más baja, suficiente para un escritorio. Elige skeletonized (aligerado) para gastar menos filamento en placas grandes; añade agujeros para tornillos cuando la placa vaya en un cajón que se abre y se cierra.",
        },
        {
          q: "¿Cómo cubro un cajón entero?",
          a: "Mide el cajón, divide entre 42 mm para obtener el número de celdas e imprime varias placas si el cajón es más grande que la cama de tu impresora. Para el hueco que sobra, copia el modelo y pide a la IA una tira de relleno del ancho que necesites.",
        },
        {
          q: "¿Los alojamientos son compatibles con todos los contenedores Gridfinity?",
          a: "Sí: el perfil de los alojamientos sigue la especificación abierta de Gridfinity que usan gridfinity-rebuilt y los generadores de MakerWorld, así que los contenedores estándar de cualquier generador encajan.",
        },
      ],
    },
    params: {
      GRID_X: { label: "Unidades de cuadrícula X", desc: "Ancho de la placa base en unidades de 42 mm." },
      GRID_Y: { label: "Unidades de cuadrícula Y", desc: "Profundidad de la placa base en unidades de 42 mm." },
      STYLE: { label: "Estilo de placa", desc: "Thin (fina) ahorra altura; skeletonized (aligerada) ahorra filamento." },
      MAGNET_HOLES: { label: "Huecos para imanes", desc: "Huecos de Ø6 × 2 mm que coinciden con los imanes de los contenedores." },
      SCREW_HOLES: { label: "Agujeros para tornillos", desc: "Agujeros avellanados para M3 con los que fijar la placa." },
    },
    example: "5 × 4 alojamientos (210 × 168 mm), huecos para imanes",
    step: [
      "El perfil inclinado de cada alojamiento de 42 mm se exporta como planos y conos exactos (310 caras para la placa de 4 × 3 por defecto), así que en CAD puedes recortar la placa al contorno de un cajón irregular en lugar de volver a modelarla.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una placa base Gridfinity para un cajón de 220 × 180 mm?",
        a: "Cinco por cuatro alojamientos son 210 × 168 mm: https://www.forgent3d.com/es/generators/gridfinity-baseplate-generator?GRID_X=5&GRID_Y=4. Para rellenar los últimos milímetros, pulsa “AI edit” en el generador y pide un borde exterior de 220 × 180 mm.",
      },
      {
        q: "La cama de mi impresora es más pequeña que la placa, ¿qué hago?",
        a: "Genérala en piezas que quepan en tu cama (por ejemplo, 3 × 4 y 2 × 4) y colócalas una al lado de la otra en el cajón. Cada pieza mantiene la cuadrícula de 42 mm, así que los contenedores asientan en todo el cajón.",
      },
    ],
    keywords: [
      "generador de placas base gridfinity",
      "placa base gridfinity a medida",
      "base gridfinity para cajón",
      "gridfinity baseplate stl",
    ],
  },

  "parametric-box-generator": {
    copy: {
      name: "Generador de cajas paramétricas",
      title: "Generador de cajas — Tapa abatible, a presión o corrediza (STL) | Forgent3D",
      description:
        "Generador de cajas paramétricas imprimibles en 3D por su medida interior: tapa con bisagra, a presión, sobre reborde, deslizante o sin tapa. STL o STEP gratis.",
      h1: "Generador de cajas paramétricas: medida interior exacta y tapa con bisagra, a presión, sobre reborde o deslizante",
      intro:
        "Introduce las medidas interiores de lo que necesitas guardar y elige una tapa: una tapa con bisagra que sale de la impresora ya montada, una tapa a presión o una que se apoya encima, una tapa que se desliza por guías de cola de milano, o ninguna. La caja se reconstruye al instante como CAD real, y lo que las opciones no cubren, como divisores o una ranura para etiqueta, está a una edición con IA de distancia.",
      whyPoints: [
        "Las medidas son interiores: dimensiona según el objeto, no según la pieza impresa",
        "Tapa con bisagra impresa ya montada (print-in-place) o con un pasador aparte",
        "Cierre de clip, de tipo caja de herramientas o magnético en la tapa con bisagra",
        "¿Divisores, una ranura para etiqueta, una muesca para cables? Pulsa “AI edit” y dilo",
      ],
      faqs: [
        {
          q: "¿Qué tapa elijo?",
          a: "La tapa con bisagra print-in-place para una caja que abres a menudo: sale de la impresora ya montada. A presión para una tapa que debe quedarse cerrada cuando llevas la caja de un lado a otro; la tapa sobre reborde, como cubierta antipolvo que simplemente levantas; la deslizante, para un tacto de estuche escolar (mantiene las esquinas en ángulo recto para poder deslizarse); y ninguna, para una bandeja abierta.",
        },
        {
          q: "¿Qué grosor deben tener las paredes?",
          a: "Los 2.4 mm por defecto son unos seis perímetros con una boquilla de 0.4 mm: rigidez suficiente para el almacenamiento diario. Sube a 3–4 mm para cajas que se transportan llenas o se atornillan a una pared.",
        },
      ],
    },
    params: {
      INNER_L: { label: "Largo interior", desc: "Longitud interior: dimensiónala según lo que va dentro." },
      INNER_W: { label: "Ancho interior", desc: "Ancho del interior." },
      INNER_H: { label: "Alto interior", desc: "Altura interior de la caja, del fondo al borde." },
      WALL: { label: "Grosor de pared", desc: "2.4 mm son unos seis perímetros con una boquilla de 0.4 mm." },
      LID: {
        label: "Tipo de tapa",
        desc: "Tapa con bisagra, tapa a presión, tapa que se apoya sobre un reborde, tapa que se desliza por guías de cola de milano, o ninguna.",
      },
      HINGE: { label: "Bisagra", desc: "Solo tapa con bisagra: impresa ya montada o con un pasador aparte." },
      LATCH: { label: "Cierre", desc: "Solo tapa con bisagra: clip a presión, cierres tipo caja de herramientas, imanes o ninguno." },
      LID_DEPTH: { label: "Profundidad de la tapa con bisagra", desc: "Solo tapa con bisagra: qué profundidad tiene la tapa." },
      CORNER_R: {
        label: "Radio de esquina",
        desc: "Redondeo de las esquinas exteriores (la tapa deslizante mantiene las esquinas en ángulo recto para poder salir deslizándose).",
      },
    },
    example: "120 × 80 × 40 mm de interior, tapa deslizante",
    step: [
      "La caja y la tapa se exportan como sólidos separados en un mismo archivo: 101 caras exactas para la caja con bisagra por defecto, con las esquinas redondeadas y los nudillos de la bisagra como cilindros reales.",
      "Abre el archivo en CAD para poner un logotipo, una muesca para cables o agujeros de montaje justo donde van, o entrégalo a un servicio de impresión que pida STEP.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una caja de 120 × 80 × 40 mm con tapa deslizante?",
        a: "Abre https://www.forgent3d.com/es/generators/parametric-box-generator?INNER_L=120&INNER_W=80&INNER_H=40&LID=sliding (las medidas son las del interior de la caja). Descarga el STL para imprimir la caja y la tapa, o el STEP para editarlas.",
      },
      {
        q: "¿Puedo añadir divisores o una ranura para etiqueta?",
        a: "Sí: pulsa “AI edit” en el generador y dilo (“dos divisores a lo ancho”, “una ranura para etiqueta en el frente”). La IA edita el model.py de la caja en la página; cópiala a tus modelos para conservarla y seguir con el agente de IA.",
      },
    ],
    keywords: [
      "generador de cajas paramétricas",
      "caja con tapa para imprimir en 3d stl",
      "caja con bisagra impresa en 3d",
      "caja con tapa deslizante stl",
      "generador de cajas a medida",
    ],
  },

  "hose-adapter-generator": {
    copy: {
      name: "Generador de adaptadores de manguera",
      title: "Generador de adaptadores de manguera — Aspiradora y polvo (STL) | Forgent3D",
      description:
        "Generador de adaptadores de manguera: ajuste interior o exterior por extremo, encaje, cono y pared. Aspiradora, extracción de polvo, tubos. STL / STEP gratis.",
      h1: "Generador de adaptadores de manguera: une dos mangueras cualesquiera",
      intro:
        "Mide los dos extremos (por dentro o por fuera, a tu elección en cada uno), fija las longitudes de encaje y una transición, y obtén un adaptador listo para imprimir. De la aspiradora de taller a la boca de aspiración de una herramienta, de la extracción de polvo a la sierra de cinta, de la bomba del estanque a la manguera del jardín: la geometría se reconstruye al instante como CAD real.",
      whyPoints: [
        "Medida interior o exterior en cada extremo: como mides de verdad una manguera",
        "Una transición cónica interior suave mantiene el caudal de aire en las instalaciones de extracción de polvo",
        "Paredes estancas de 6 perímetros por defecto, aptas para PETG",
        "¿Necesitas un codo, una espiga o una brida de tope? Pídeselo al agente de IA",
      ],
      faqs: [
        {
          q: "¿Cómo mido bien los extremos de mis mangueras?",
          a: "Si nuestro extremo entra DENTRO de una manguera o de una toma, pon ese extremo en “outer” y escribe el diámetro interior de aquello en lo que entra. Si una manguera entra DENTRO de nuestro extremo, pon “inner” y escribe el diámetro exterior de la manguera. No sumes nada: ya va incluida una holgura de ajuste de 0.2 mm.",
        },
        {
          q: "¿En qué material imprimo los adaptadores?",
          a: "El PETG es el equilibrio ideal: es un poco flexible, así que los extremos cónicos asientan de forma estanca, y aguanta el calor dentro de las mangueras de aspiradora de taller. El PLA sirve para un uso ligero; el TPU, solo cuando necesitas un encaje a presión elástico.",
        },
      ],
    },
    params: {
      END1_D: { label: "Diámetro del extremo 1", desc: "Diámetro del primer extremo." },
      END1_MODE: { label: "Ajuste del extremo 1", desc: "outer: el extremo entra en una manguera o una toma, y END1_D es el diámetro interior de esa manguera o toma. inner: una manguera o un tubo entra en el extremo, y END1_D es el diámetro exterior de esa manguera o tubo." },
      END1_LEN: { label: "Longitud del extremo 1", desc: "Longitud de encaje del primer extremo." },
      END2_D: { label: "Diámetro del extremo 2", desc: "Diámetro del segundo extremo." },
      END2_MODE: { label: "Ajuste del extremo 2", desc: "Igual que en el extremo 1, con END2_D." },
      END2_LEN: { label: "Longitud del extremo 2", desc: "Longitud de encaje del segundo extremo." },
      TRANSITION: { label: "Longitud de transición", desc: "Longitud del tramo cónico entre los dos extremos." },
      WALL: { label: "Grosor de pared", desc: "2.4 mm = seis perímetros, estanca y rígida." },
    },
    example: "una manguera de 35 mm entra en un extremo; el otro extremo entra en una toma de 58 mm",
    step: [
      "Se exporta como 10 caras exactas: los dos manguitos son cilindros reales, y la transición y los bordes de entrada son conos reales; el interior se estrecha a la par que el exterior, así que la pared conserva su grosor.",
      "Útil cuando el adaptador se va a tornear, o tiene que alinearse con una toma que alguien dibujó en CAD.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago un adaptador de una manguera de aspiradora de 35 mm a una boca de aspiración de 58 mm?",
        a: "Decide cómo encaja cada extremo. La manguera entra en nuestro extremo (“inner”: escribe el diámetro exterior de la manguera) y nuestro otro extremo entra en la boca de aspiración (“outer”: escribe el diámetro interior de la boca): https://www.forgent3d.com/es/generators/hose-adapter-generator?END1_D=35&END1_MODE=inner&END2_D=58&END2_MODE=outer. La holgura de ajuste se añade sola.",
      },
      {
        q: "¿Puedo hacerlo en ángulo, o añadir una espiga para manguera o una brida de tope?",
        a: "Pulsa “AI edit” en el generador y descríbelo (“dóblalo 45° por la mitad”, “una brida de 3 mm en el extremo 2”); la IA edita el model.py del adaptador en la página. Para cambios mayores, cópialo a tus modelos y sigue con el agente de IA.",
      },
    ],
    keywords: [
      "generador de adaptadores de manguera",
      "adaptador manguera aspiradora stl",
      "adaptador de aspiración impreso en 3d",
      "adaptador extracción de polvo stl",
      "reductor de tubo para imprimir en 3d",
    ],
  },

  "funnel-generator": {
    copy: {
      name: "Generador de embudos",
      title: "Generador de embudos — A medida e imprimibles en 3D (STL) | Forgent3D",
      description:
        "Generador de embudos a medida: boca, boquilla, altura del cono, grosor de pared y anilla para colgar. Para frascos, depósitos y aceite. STL / STEP gratis.",
      h1: "Generador de embudos: justo el embudo que nunca encuentras en la tienda",
      intro:
        "Fija la boca, la boquilla y la altura del cono, y obtén un embudo que de verdad encaje en tu frasco, tu bidón o tu caja secadora de filamento. Se genera como CAD estanco con el interior liso, y con una anilla opcional para colgarlo a escurrir.",
      whyPoints: [
        "Boquilla a la medida del cuello de tu recipiente: se acabaron los embudos universales que no encajan en nada",
        "El ángulo del cono sale de la altura que elijas, con el interior liso de principio a fin",
        "Anilla opcional para colgarlo a escurrir y guardarlo",
        "¿Necesitas un colador o una boquilla descentrada? Modifícalo con el agente de IA",
      ],
      faqs: [
        {
          q: "¿Un embudo impreso en 3D es apto para alimentos?",
          a: "Las piezas FDM tienen surcos entre capas que pueden retener restos, así que, de entrada, trata los embudos impresos como herramientas de taller. Para usarlo en la cocina, imprímelo en PETG, lávalo enseguida y considéralo un utensilio de vida corta; donde importe la seguridad alimentaria, compra un embudo de grado alimentario.",
        },
        {
          q: "¿Cómo evito que el embudo gorgotee?",
          a: "El gorgoteo significa que el aire no puede salir del recipiente. Haz la boquilla un poco más estrecha que el cuello del recipiente para que el aire pase por el lado, o pide al agente de IA que añada nervios exteriores en la boquilla: el clásico remedio antigorgoteo.",
        },
        {
          q: "¿Qué ajustes dan un embudo sin fugas?",
          a: "De tres a cuatro perímetros (la pared de 1.6 mm por defecto), capas de 0.2 mm y una ligera sobreextrusión, o aplica planchado (ironing) al cono si tu laminador lo permite. El PETG a temperaturas más altas se autosella mejor que el PLA.",
        },
      ],
    },
    params: {
      MOUTH_D: { label: "Diámetro de la boca", desc: "Diámetro de la abertura superior." },
      SPOUT_D: { label: "Diámetro de la boquilla", desc: "Diámetro interior del tubo de salida." },
      SPOUT_LEN: { label: "Longitud de la boquilla", desc: "Longitud del tubo de salida recto." },
      CONE_H: { label: "Altura del cono", desc: "Altura de la parte cónica." },
      WALL: { label: "Grosor de pared", desc: "1.6 mm = cuatro perímetros." },
      HANG_LOOP: { label: "Anilla para colgar", desc: "Pestaña en el borde con un agujero para colgar el embudo." },
    },
    example: "boca de 120 mm, boquilla de 8 mm de diámetro interior y 30 mm de largo",
    step: [
      "Se exporta como 15 caras exactas: el cuenco y su estrechamiento hacia la boquilla son conos reales; la boquilla y el borde, cilindros reales.",
      "Así puedes cotejar la boquilla con el cuello de una botella o con una boca de llenado dibujados en CAD antes de imprimir nada.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago un embudo para una botella cuyo cuello tiene una abertura de 16 mm?",
        a: "El exterior de la boquilla es SPOUT_D más dos paredes (1.6 mm cada una por defecto), así que para una abertura de 16 mm usa SPOUT_D=12, que da 15.2 mm por fuera y deja sitio para que salga el aire: https://www.forgent3d.com/es/generators/funnel-generator?SPOUT_D=12&MOUTH_D=100. Descarga el STL para imprimirlo.",
      },
      {
        q: "¿Puede tener una boquilla en ángulo, un respiradero o un asa?",
        a: "Pulsa “AI edit” en el generador y descríbelo; la IA edita el model.py del embudo en la página y este se reconstruye en tu navegador. Unas cuantas ediciones al día son gratis sin iniciar sesión.",
      },
    ],
    keywords: ["generador de embudos", "embudo a medida stl", "embudo impreso en 3d", "embudo personalizado para imprimir"],
  },

  "spur-gear-generator": {
    copy: {
      name: "Generador de engranajes rectos",
      title: "Generador de engranajes rectos — Módulo y dientes (STL / STEP) | Forgent3D",
      description:
        "Generador de engranajes rectos de evolvente: módulo, número de dientes, ángulo de presión, ancho de cara y agujero redondo o hexagonal. STL / STEP gratis.",
      h1: "Generador de engranajes rectos con perfil de evolvente real",
      intro:
        "Fija el módulo, el número de dientes, el ángulo de presión, el ancho de cara y el agujero de tu engranaje (o engrane, como se dice en México): el generador calcula un perfil de diente de evolvente correcto, no una aproximación decorativa, así que las parejas impresas engranan de verdad. Como el resultado es CAD paramétrico, los cubos, los chaveteros y los agujeros de aligeramiento están a una edición del agente.",
      whyPoints: [
        "Flancos de evolvente (involuta) reales: dos engranajes del mismo módulo engranan correctamente",
        "Ángulo de presión de 20° o 25°, de 8 a 120 dientes",
        "Agujero redondo o hexagonal para ejes y tornillería estándar",
        "¿Necesitas un chavetero, un cubo o la cremallera a juego? Pídeselo al agente de IA",
      ],
      faqs: [
        {
          q: "¿Qué módulo funciona para imprimir en FDM?",
          a: "Con una boquilla de 0.4 mm, quédate en módulo 1 o superior; el módulo 1.5–2 es el punto justo para engranajes impresos resistentes y silenciosos. Por debajo del módulo 1, los flancos de los dientes pierden su forma de evolvente por el radio de la boquilla.",
        },
        {
          q: "¿Cómo hago dos engranajes que engranen entre sí?",
          a: "Genera los dos con el mismo módulo y el mismo ángulo de presión, con el número de dientes que quieras. Distancia entre centros = módulo × (dientes₁ + dientes₂) / 2. Suma 0.1–0.2 mm a esa distancia como juego para las piezas impresas.",
        },
        {
          q: "¿Qué material y qué ajustes uso para engranajes impresos?",
          a: "PETG para uso general, nylon para mucho desgaste. Imprime en plano, con un 100 % de relleno o al menos 5 perímetros para que los dientes sean macizos; las capas de 0.15 mm dejan los flancos lisos.",
        },
      ],
    },
    params: {
      MODULE: { label: "Módulo", desc: "Tamaño del diente; los engranajes que engranan deben compartirlo." },
      TEETH: { label: "Número de dientes", desc: "Diámetro primitivo = módulo × dientes." },
      PRESSURE_ANGLE: { label: "Ángulo de presión", desc: "20° es el estándar; 25° da dientes más cortos y robustos." },
      FACE_WIDTH: { label: "Ancho de cara", desc: "Grosor del engranaje a lo largo del eje." },
      BORE_STYLE: { label: "Tipo de agujero", desc: "Agujero central: eje redondo o alojamiento hexagonal." },
      BORE_D: { label: "Medida del agujero", desc: "Diámetro del eje, o medida entre caras del hexágono." },
    },
    example: "módulo 1.5, 40 dientes, agujero de 6 mm",
    step: [
      "Cada flanco de diente es una sola superficie lisa: la evolvente exacta, barrida a lo largo del ancho de cara. El engranaje de 20 dientes por defecto se exporta como 83 caras (40 flancos, 41 caras cilíndricas para las cabezas de los dientes, los redondeos del pie y el agujero, y 2 caras planas), sin facetas en ningún sitio.",
      "Los dientes son los que tallaría una fresa madre: una cremallera ISO 53 de perfil A rodada alrededor de la rueda en bruto, así que el pie conserva el redondeo de la punta de la cremallera, y los piñones de menos de unos 17 dientes (a 20°) salen socavados, igual que los piñones tallados de verdad.",
      "Contrastado con un tallado simulado con fresa madre: la forma del flanco, el espesor del diente y la medida sobre dientes coinciden con una precisión de una micra.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo consigo un archivo STEP de un engranaje recto de módulo 2 y 30 dientes?",
        a: "Pon los números en el enlace: https://www.forgent3d.com/es/generators/spur-gear-generator?MODULE=2&TEETH=30 abre el generador justo en ese engranaje. Revísalo en 3D y luego descarga el STEP (o el STL). Es gratis, no requiere cuenta y el archivo se abre directamente en SolidWorks, Fusion, FreeCAD o Inventor.",
      },
      {
        q: "¿Puede añadir un chavetero, un cubo o un agujero para prisionero?",
        a: "No con un deslizador, sino con una frase. Pulsa “AI edit” en el generador y di “añade un chavetero de 3 mm, de 1.4 mm de profundidad”: la IA edita el propio model.py del engranaje (el ancho y la profundidad del chavetero pueden convertirse en parámetros nuevos), la pieza se reconstruye en tu navegador y se exporta como siempre. Unas cuantas ediciones al día son gratis sin iniciar sesión.",
      },
    ],
    keywords: [
      "generador de engranajes",
      "generador de engranajes rectos",
      "engranaje recto stl",
      "engranajes impresos en 3d por módulo y dientes",
      "generador de engranes online",
    ],
  },

  "washer-spacer-generator": {
    copy: {
      name: "Generador de arandelas y separadores",
      title: "Generador de arandelas y separadores — A tu medida (STL / STEP) | Forgent3D",
      description:
        "Generador de arandelas y separadores a medida: diámetro interior y exterior, grosor y chaflán. De calzas de 0.4 mm a separadores altos. STL / STEP gratis.",
      h1: "Generador de arandelas y separadores: la medida exacta, impresa en minutos",
      intro:
        "La ferretería nunca tiene la medida que necesitas. Fija el diámetro interior, el diámetro exterior y el grosor (de una calza de 0.4 mm a un separador o espaciador de 30 mm) e imprime exactamente la arandela o el separador que pide el montaje.",
      whyPoints: [
        "Agujeros para tornillos M3–M10 según la norma ISO de arandelas, detallados más abajo (M8 → 8.4 mm)",
        "Un solo modelo cubre arandelas, calzas, separadores y tubos separadores",
        "Bordes achaflanados: se insertan con facilidad y no hay que limpiar la pata de elefante",
        "¿Necesitas una ranura, un agujero cuadrado o un resalte? Está a una edición del agente",
      ],
      faqs: [
        {
          q: "¿Qué diámetro interior uso para cada tornillo?",
          a: "Las arandelas planas estándar (ISO 7089) usan la serie fina de agujeros de paso de la ISO 273: M3 → 3.2, M4 → 4.3, M5 → 5.3, M6 → 6.4, M8 → 8.4, M10 → 10.5 mm. Si quieres que entre con más facilidad, usa la serie media: M3 → 3.4, M4 → 4.5, M5 → 5.5, M6 → 6.6, M8 → 9, M10 → 11 mm.",
        },
        {
          q: "¿Las arandelas impresas son lo bastante resistentes?",
          a: "Bajo la cabeza de un tornillo en montajes estáticos, sin duda: el PETG con un 100 % de relleno aguanta las cargas de apriete habituales. Evita las arandelas impresas cuando importen la temperatura, la fluencia bajo un par alto y sostenido o la conducción eléctrica.",
        },
        {
          q: "¿Qué precisión tiene el grosor impreso?",
          a: "El grosor cae en múltiplos de la altura de capa: con capas de 0.2 mm, un separador de 3 mm sale exacto. Para una precisión por debajo de la capa (por ejemplo, una calza o laina de 1.1 mm), imprime con capas de 0.1 mm o pide al agente una serie de grosores de prueba.",
        },
      ],
    },
    params: {
      INNER_D: { label: "Diámetro interior", desc: "Holgura de paso del tornillo: M8 → 8.4 mm." },
      OUTER_D: { label: "Diámetro exterior", desc: "Diámetro total de la arandela." },
      THICKNESS: { label: "Grosor", desc: "De una calza fina a un tubo separador alto." },
      CHAMFER: { label: "Chaflán del borde", desc: "Facilita la inserción y elimina la pata de elefante." },
    },
    example: "separador M5: agujero de 5.3 mm, 12 mm de diámetro exterior, 2 mm de grosor",
    step: [
      "Un sólido de revolución que se exporta como 8 caras exactas: dos caras planas, el agujero y el borde exterior como cilindros reales, y los cuatro chaflanes de 45° como conos reales.",
      "Como el agujero es un cilindro real, el software de CAD, CAM y de inspección lee su diámetro directamente: útil cuando el separador se tornea en lugar de imprimirse.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago un separador M5 de 12 mm de diámetro y 2 mm de grosor?",
        a: "Abre https://www.forgent3d.com/es/generators/washer-spacer-generator?INNER_D=5.3&OUTER_D=12&THICKNESS=2 (5.3 mm es el agujero de una arandela M5 estándar, ISO 7089) y descarga el STL para imprimirlo, o el STEP para un taller de mecanizado.",
      },
      {
        q: "¿Puedo hacer una arandela con agujeros alrededor, una pestaña o una ranura?",
        a: "Sí. Pulsa “AI edit” en el generador y descríbelo (“seis agujeros de 3 mm en un círculo de 22 mm”). La IA cambia el model.py de la arandela en la página, y las nuevas medidas pasan a ser parámetros que puedes seguir ajustando. Unas cuantas ediciones al día son gratis sin iniciar sesión.",
      },
    ],
    keywords: [
      "generador de arandelas",
      "arandelas impresas en 3d a medida",
      "separador impreso en 3d stl",
      "espaciador a medida stl",
      "calzas impresas en 3d",
    ],
  },

  "tool-tray-generator": {
    copy: {
      name: "Generador de bandejas para herramientas",
      title: "Generador de bandejas para herramientas — Caja y cajón (STL) | Forgent3D",
      description:
        "Generador de bandejas para herramientas: hueco con el contorno de tu pieza, no un rectángulo. Arrastra ocho puntos a tus medidas; vista 3D y STL o STEP gratis.",
      h1: "Generador de bandejas para herramientas: el hueco tiene el contorno de la herramienta, no un rectángulo",
      intro:
        "La mayoría de los personalizadores de bandejas e insertos te dan rectángulos y círculos. Aquí la cavidad es la huella del propio objeto. El hueco de abajo es un cuerpo con una pestaña: ocho puntos que recogen los cuatro números que leerías con un calibre (largo del cuerpo, ancho del cuerpo, ancho de la pestaña y alto de la pestaña), así que, al arrastrarlos en el lienzo de croquis, el hueco se convierte en TU pieza. Ajusta la bandeja a tu cajón, elige la holgura e imprímela en plano.",
      whyPoints: [
        "Ocho puntos arrastrables, cuatro medidas reales: mide tu pieza, arrastra y listo",
        "El contorno medido y la holgura de ajuste son dos números separados, así que un ajuste más holgado nunca cambia la forma de la herramienta",
        "La profundidad del hueco está limitada para que siempre queden 1.5 mm de fondo: no puedes partir la bandeja en dos arrastrando un deslizador",
        "Se imprime en plano y sin soportes, y lo que los deslizadores no cubren lo edita el agente de IA en el mismo modelo",
      ],
      faqs: [
        {
          q: "El hueco no tiene la forma de mi pieza. ¿Puedo cambiarlo?",
          a: "Esa es la idea, y son ocho puntos para arrastrar. El contorno está escrito como coordenadas literales, así que lo rehaces en el lienzo de croquis igual que dibujarías en papel (añade o mueve puntos para una muesca, un escalón o una segunda pestaña), o dale al agente las medidas (o una foto) y pídele directamente otra silueta. En ambos casos, la bandeja, la profundidad y la holgura siguen en los deslizadores.",
        },
        {
          q: "¿Cuánta holgura dejo?",
          a: "0.25 mm por lado para un ajuste de posicionamiento justo, 0.5 mm para que la herramienta entre con una sola mano, 1.0 mm si la bandeja se va a usar con guantes. El modelo añade la holgura alrededor del contorno, así que los ocho puntos siguen siendo las medidas del propio objeto: aflojar el ajuste nunca vuelve a dibujar la forma.",
        },
        {
          q: "¿Se imprime sin soportes?",
          a: "Sí. Un hueco vaciado desde la cara superior deja un fondo plano y paredes verticales: no hay ningún voladizo. Imprímela en plano sobre la cama, en PLA o PETG, con capas de 0.2 mm, sin soportes ni brim. Eso sí, mantén la profundidad por debajo de unos dos tercios de la altura de la pieza, o tus dedos no podrán agarrarla para sacarla.",
        },
      ],
    },
    params: {
      CORNER_R: {
        label: "Radio de esquina",
        desc: "Redondea cada esquina del contorno trazado: incluso una pieza con esquinas vivas obtiene una esquina interior imprimible.",
      },
      CLEARANCE: {
        label: "Holgura de ajuste",
        desc: "Se añade alrededor del contorno por todos los lados; 0.25 justo, 0.5 entra solo, 1.0 holgado.",
      },
      PART_DEPTH: {
        label: "Profundidad del hueco",
        desc: "Cuánto se hunde la pieza. Está limitada para que siempre queden 1.5 mm de fondo.",
      },
      TRAY_L: { label: "Largo de la bandeja X", desc: "Largo exterior: mide el cajón, no la pieza." },
      TRAY_W: { label: "Ancho de la bandeja Y", desc: "Ancho exterior de la bandeja." },
      TRAY_T: { label: "Grosor de la bandeja", desc: "Debe cubrir la profundidad del hueco más 1.5 mm de fondo." },
    },
    example: "bandeja de 200 × 120 mm, 15 mm de grosor, hueco de 12 mm de profundidad",
    step: [
      "Se exporta como 23 caras exactas: un fondo plano y paredes verticales, con cada esquina redondeada del hueco como un cilindro real del radio que elijas; una fresadora CNC puede mecanizar la bandeja directamente desde el STEP.",
    ],
    aiFaqs: [
      {
        q: "¿Puede el hueco seguir el contorno de mi propia herramienta?",
        a: "Sí. Arrastra los ocho puntos del contorno en el lienzo de croquis, o pulsa “AI edit” y dale las medidas (“un cuerpo de 150 × 22 mm con un mango de 40 × 30 mm”) para que reescriba el contorno. ¿Trabajas a partir de una foto? Copia la bandeja a tus modelos y dale la foto al agente de IA.",
      },
      {
        q: "¿Cómo hago una bandeja de 200 × 120 mm con un hueco de 12 mm de profundidad?",
        a: "Abre https://www.forgent3d.com/es/generators/tool-tray-generator?TRAY_L=200&TRAY_W=120&TRAY_T=15&PART_DEPTH=12 y ten en cuenta que la bandeja debe ser al menos 1.5 mm más gruesa que la profundidad del hueco: 12 mm de profundidad piden 13.5 mm o más.",
      },
    ],
    keywords: [
      "generador de bandejas para herramientas",
      "inserto para caja de herramientas stl",
      "organizador de cajón de herramientas 3d",
      "bandeja con silueta de herramienta",
      "alternativa a la espuma para herramientas",
    ],
  },

  "2020-corner-bracket-generator": {
    copy: {
      name: "Generador de escuadras 2020",
      title: "Generador de escuadras 2020 — Perfil de aluminio (STL / STEP) | Forgent3D",
      description:
        "Generador de escuadras 2020 para perfil de aluminio, imprimibles en 3D: ranura de 6 / 5 / 4 mm, M3–M5, brazos, agujeros alargados y pestañas. STL y STEP gratis.",
      h1: "Generador de escuadras 2020: la escuadra de fundición, imprimible y a tu medida",
      intro:
        "Parte de la escuadra de fundición de 20 × 20 × 17 que venden Adafruit, OpenBuilds y Misumi (en México también se vende como esquina o ángulo de unión) y adáptala a tu estructura: elige el estándar de ranura de tu perfil y el tornillo, alarga los brazos, engruesa la placa. El modelo se reconstruye en tu navegador como CAD real, así que el STEP entra directo en Fusion o FreeCAD.",
      whyPoints: [
        "Para ranuras EU / B-type / V-slot (6 mm), I-type (5 mm) y GB chino (4 mm)",
        "Pestañas de guía de 4 mm, el ancho que usan las escuadras de fundición: no hay que forzar ninguna pestaña en una ranura estrecha",
        "Agujeros alargados con 3 mm de recorrido para escuadrar la estructura",
        "Exporta STEP además de STL; lo que no cubren los deslizadores lo edita el agente de IA",
      ],
      faqs: [
        {
          q: "¿Qué tornillos y tuercas en T necesito?",
          a: "M5 es el estándar para el perfil 2020 de ranura de 6 mm (las escuadras de Misumi, OpenBuilds y Alux llevan M5×8 con tuerca en T deslizante o de martillo; Misumi también fabrica versiones para M4). Con la placa impresa de 4 mm por defecto, usa M5×10: la placa de 3 mm de una escuadra de fundición lleva M5×8, y las escuadras impresas de MakerWorld indican M5×10, o ×12 con arandela.",
        },
        {
          q: "¿Las pestañas entrarán en mi perfil?",
          a: "Las pestañas miden 4 mm de ancho, igual que en las escuadras de fundición de OpenBuilds y Adafruit, así que entran en ranuras de 6 mm y de 5 mm con margen de sobra; con una ranura GB de 4 mm, la pestaña pasa a 3.2 mm. Las pestañas demasiado justas son la queja más habitual sobre las escuadras impresas: si tu perfil es poco común, desactiva las pestañas.",
        },
        {
          q: "¿Con qué material y qué ajustes la imprimo?",
          a: "PETG, ASA o ABS: hay usuarios que cuentan que las escuadras de PLA se deforman poco a poco bajo carga. Mejor más perímetros que más relleno: lo habitual es recomendar 4–5 paredes. Imprímela apoyada sobre una de las paredes laterales; nada necesita soportes.",
        },
      ],
    },
    params: {
      SLOT: { label: "Ranura del perfil", desc: "6 mm: EU / B-type / V-slot. 5 mm: I-type. 4 mm: GB chino." },
      SCREW: { label: "Tornillo", desc: "Agujeros de paso según ISO 273, serie media: 3.4 / 4.5 / 5.5 mm." },
      LEG: {
        label: "Largo del brazo",
        desc: "20 coincide con la escuadra de fundición de 20×20×17; los brazos más largos añaden un agujero cada 20 mm.",
      },
      WIDTH: { label: "Ancho", desc: "17 es el ancho de la escuadra de fundición; 20 ocupa toda la cara del perfil." },
      THICKNESS: {
        label: "Grosor de la placa",
        desc: "Las escuadras de fundición son de 3 mm; las impresas suelen ser de 4 mm o más.",
      },
      SLOTTED: { label: "Agujeros alargados", desc: "3 mm de recorrido a lo largo del brazo para escuadrar la estructura." },
      TABS: {
        label: "Pestañas de guía",
        desc: "Dos pestañas de 4 mm por brazo entran en la ranura e impiden que la escuadra gire.",
      },
      SIDE_WALLS: { label: "Paredes laterales", desc: "Paredes triangulares a ambos lados, como en la escuadra de fundición." },
    },
    example: "ranura de 6 mm (EU / B-type / V-slot), tornillos M5, brazos de 30 mm",
    step: [
      "Se exporta como 40 caras exactas: 36 caras planas más los extremos redondeados de los dos agujeros alargados como cilindros reales; ejes de agujero reales con los que posicionar la escuadra cuando entra en el ensamblaje de una estructura en CAD.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una escuadra 2020 para ranura de 6 mm con tornillos M5 y brazos de 30 mm?",
        a: "https://www.forgent3d.com/es/generators/2020-corner-bracket-generator?SLOT=6&SCREW=M5&LEG=30 abre exactamente esa escuadra. Descarga el STL para imprimirla (lo habitual es PETG), o el STEP para el ensamblaje de tu estructura.",
      },
      {
        q: "¿Puedo hacer una esquina de tres vías o un ángulo distinto de 90°?",
        a: "No con los deslizadores: la escuadra sigue la pieza de fundición de 20 × 20 × 17. Pulsa “AI edit” en el generador y describe el cambio, o copia la escuadra a tus modelos y trabájala con el agente de IA.",
      },
    ],
    keywords: [
      "escuadra 2020 stl",
      "escuadra para perfil de aluminio 2020",
      "escuadra v-slot impresa en 3d",
      "esquina perfil 2020 imprimible",
      "generador de escuadras para perfil de aluminio",
    ],
  },

  "pillow-block-bearing-holder-generator": {
    copy: {
      name: "Generador de chumaceras",
      title: "Generador de chumaceras — 608, 625, 6000, 6800 (STL / STEP) | Forgent3D",
      description:
        "Generador de chumaceras imprimibles en 3D para 14 rodamientos. Con un 608 iguala a la KP08: 42 mm entre tornillos, 15 mm de altura al centro. STL y STEP gratis.",
      h1: "Generador de chumaceras: la huella de una KP08 para cualquier rodamiento común",
      intro:
        "Elige tu rodamiento (608, 625, 688, serie 6000 o serie 6800) y obtén una chumacera impresa que lo sujete; en España se suele llamar soporte de rodamiento. Con el 608 por defecto coincide con los agujeros de montaje y la altura al centro de la KP08, así que entra donde antes había una KP08. El ajuste del alojamiento es un deslizador, porque cada impresora imprime los agujeros un poco distinto.",
      whyPoints: [
        "Con el 608 por defecto iguala a la KP08: 55 mm de largo, 42 mm entre tornillos, 15 mm de altura al centro, M4",
        "14 rodamientos de la tabla DIN 625, uno solo o dos lado a lado",
        "Ajuste del alojamiento de −0.20 a +0.30 mm, reborde de retención de 2 mm y chaflán de entrada de 0.5 mm",
        "Se imprime con el reborde hacia abajo y sin soportes; exporta STEP para tu CAD",
      ],
      faqs: [
        {
          q: "¿Qué ajuste de alojamiento uso?",
          a: "Empieza con el valor por defecto, +0.10 mm: un autor de Printables comprobó que con un alojamiento de 22.1 mm un 608 metálico entra y sale sin herramientas. Si te queda holgado, prueba un ajuste más apretado: un estudio de 2024 metió rodamientos a presión en alojamientos de PETG 0.1 y 0.2 mm más pequeños. Cada impresora es distinta, así que avanza de 0.05 en 0.05.",
        },
        {
          q: "¿Puede sustituir a una chumacera KP08?",
          a: "Coincide con la huella de la KP08 (42 mm entre tornillos, 15 mm de altura al centro, agujeros de Ø4.5), así que se atornilla en los mismos agujeros. Lleva un 608 normal, no el inserto autoalineable con prisioneros de la KP08, así que alinea bien los ejes.",
        },
        {
          q: "¿Cómo la imprimo y cómo meto el rodamiento?",
          a: "Imprímela con el reborde hacia abajo en PETG o ABS; hay usuarios que cuentan que las de PLA se agrietan con un ajuste apretado. Mete el rodamiento a presión con un tornillo de banco o una prensa, no a martillazos: el chaflán de entrada de 0.5 mm ayuda a que entre recto.",
        },
      ],
    },
    params: {
      BEARING: { label: "Rodamiento", desc: "14 rodamientos rígidos de bolas habituales, con medidas de la tabla DIN 625." },
      FIT: {
        label: "Ajuste del alojamiento",
        desc: "Se suma al diámetro exterior del rodamiento. Con +0.10, un 608 metálico se mete a mano; los valores negativos dan un ajuste a presión más apretado.",
      },
      COUNT: { label: "Rodamientos lado a lado", desc: "Dos rodamientos en una misma chumacera para un eje más rígido." },
      LIP: { label: "Reborde de retención", desc: "Un resalte de 2 mm contra el que asienta el aro exterior." },
      WALL: { label: "Pared sobre el rodamiento", desc: "3 mm es lo que deja una KP08 alrededor de un 608." },
      BASE: { label: "Grosor de la base", desc: "KP08: 5; KP000: 6; KP001: 7." },
      SCREW: { label: "Tornillo de montaje", desc: "M4 encaja con los agujeros de Ø4.5 de la KP08." },
    },
    example: "rodamiento 6201 (12 × 32 × 10), tornillos M5",
    step: [
      "Se exporta como 19 caras exactas: el alojamiento del rodamiento y los agujeros de los tornillos son cilindros reales, y el chaflán de entrada del lado abierto es un cono real. El diámetro del alojamiento es exactamente el diámetro exterior del rodamiento más el ajuste que elijas.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una chumacera para un rodamiento 6201 con tornillos M5?",
        a: "Abre https://www.forgent3d.com/es/generators/pillow-block-bearing-holder-generator?BEARING=6201&SCREW=M5 y ten en cuenta que el ajuste del alojamiento es, por defecto, +0.10 mm sobre el diámetro; afínalo tras una impresión de prueba.",
      },
      {
        q: "¿Puede llevar dos rodamientos, un agujero de engrase o un prisionero?",
        a: "Dos rodamientos lado a lado es un parámetro (COUNT=2). Para un agujero de engrase o un prisionero, pulsa “AI edit” en el generador y di dónde; la IA edita el model.py de la chumacera en la página.",
      },
    ],
    keywords: [
      "chumacera 608 stl",
      "chumacera impresa en 3d",
      "chumacera kp08 imprimible",
      "soporte de rodamiento 608 impreso en 3d",
      "generador de soportes de rodamiento",
    ],
  },

  "fan-grill-generator": {
    copy: {
      name: "Generador de rejillas de ventilador",
      title: "Generador de rejillas de ventilador — 40/80/92/120/140 mm (STL) | Forgent3D",
      description:
        "Generador de rejillas de ventilador de 25–140 mm para impresión 3D: anillos y radios como las de alambre, agujeros según ARCTIC y tablas medidas. STL y STEP gratis.",
      h1: "Generador de rejillas de ventilador: el patrón de una rejilla de alambre, listo para imprimir",
      intro:
        "Elige el tamaño de tu ventilador y obtén una rejilla protectora (o protector de ventilador) imprimible que se atornilla a él: la distancia entre agujeros sale de los planos de ARCTIC y de la tabla de ventiladores medidos de NopSCADlib, y quedan 2 mm de separación con las aspas. El patrón copia a propósito la rejilla de alambre de acero: en pruebas en túnel de viento, las rejillas de alambre apenas restaron caudal de aire, mientras que una chapa en panal con la mitad abierta restó cerca de una quinta parte.",
      whyPoints: [
        "10 tamaños, de 25 a 140 mm, con la distancia entre agujeros de los planos de ARCTIC y de tablas de ventiladores medidos",
        "Anillos y radios como una rejilla de alambre: el patrón que menos caudal restó en las pruebas",
        "Ninguna abertura supera tu límite: con 12.7 mm como máximo no entran los dedos",
        "Se imprime en plano y sin puentes; exporta STEP además de STL",
      ],
      faqs: [
        {
          q: "¿Por qué anillos y radios en vez de panal?",
          a: "Porque mueve más aire y hace menos ruido. hwcooling midió que una rejilla de alambre resta un 0–2 % del caudal de un ventilador de 120 mm, mientras que una chapa hexagonal con la mitad de su superficie cubierta de metal restaba cerca del 20 % y añadía 3 dBA. La prueba de rejillas de Puget Systems también dejó en cabeza a las de alambre. Nadie ha medido todavía rejillas impresas, así que considera que barras más finas y aberturas más anchas son la opción más segura.",
        },
        {
          q: "¿Qué tornillos uso?",
          a: "De 50 mm en adelante, el tornillo autorroscante estándar de ventilador atraviesa la rejilla y entra en el ventilador; los agujeros son de 5 mm, el tamaño de los ojales de la rejilla de acero de ARCTIC. Los ventiladores de 40 mm o menos usan M3 (M2.5 para 25 mm). La rejilla añade su propio grosor, así que el tornillo debe ser más largo que el de un ventilador sin rejilla, justo en esa medida.",
        },
        {
          q: "¿Cómo la imprimo?",
          a: "En plano, con los anillos hacia abajo, tal como se genera: no hay puentes, así que no necesita soportes. Mantén las barras en 1.2 mm o más con una boquilla de 0.4 mm. Usa PETG si la rejilla va cerca de una fuente de calor.",
        },
      ],
    },
    params: {
      FAN: {
        label: "Tamaño del ventilador",
        desc: "Distancia entre agujeros según los planos de ARCTIC (40, 80, 92, 120, 140 mm) y la tabla de ventiladores medidos de NopSCADlib (25, 30, 50, 60, 70 mm).",
      },
      BAR: { label: "Ancho de barra", desc: "Con una boquilla de 0.4 mm, una barra de 1.2 mm o más se imprime limpia." },
      GAP: {
        label: "Abertura máxima",
        desc: "Los anillos se reparten de forma uniforme para que ningún hueco sea más ancho que este valor. 12.7 mm (½ pulgada) es el límite de OSHA para protectores de ventilador.",
      },
      GRILL_T: { label: "Grosor de la rejilla", desc: "La capa de anillos, impresa en plano sobre la cama." },
      STANDOFF: {
        label: "Separación del ventilador",
        desc: "Espacio entre los anillos y las aspas; las rejillas de acero de Noctua quedan a 5 mm.",
      },
      SCREW: {
        label: "Agujero para tornillo",
        desc: "Auto: M2.5 por debajo de 30 mm, M3 para 30–40 mm y el tornillo de ventilador de 5 mm desde 50 mm.",
      },
    },
    example: "ventilador de 92 mm (82.5 mm entre agujeros), agujeros M3",
    step: [
      "La rejilla de 120 mm por defecto se exporta como 156 caras exactas: cada anillo y cada agujero de tornillo es un cilindro real, y los radios y el marco son planos; posiciones de agujero reales cuando la rejilla entra en el ensamblaje de una carcasa en CAD.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una rejilla protectora para un ventilador de 92 mm con tornillos M3?",
        a: "Abre https://www.forgent3d.com/es/generators/fan-grill-generator?FAN=92&SCREW=M3 (la distancia entre agujeros, 82.5 mm, va con el tamaño del ventilador). Descarga el STL; se imprime en plano y sin soportes.",
      },
      {
        q: "¿Puedo añadir una ranura para filtro, un logotipo o un patrón distinto?",
        a: "Pulsa “AI edit” en el generador y descríbelo; la IA edita el model.py de la rejilla en la página. Mantén las aberturas grandes: el patrón de anillos y radios está ahí porque las rejillas tipo alambre son las que menos caudal restan.",
      },
    ],
    keywords: [
      "generador de rejillas de ventilador",
      "rejilla ventilador 120mm stl",
      "protector de ventilador impreso en 3d",
      "rejilla de ventilador paramétrica",
      "rejilla ventilador pc 3d",
    ],
  },
};
