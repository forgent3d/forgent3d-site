// Generator landing pages in this language (/es/generators/…), merged into GENERATORS by ../generators.js.
// Translated from the English entries: a generator is published in this language once its entry has `copy`.
// Shape and rules (numbers, links, lengths): scripts/check-generator-locales.mjs — run it after any change here.
export const shared = {
  catalogLabel: "Generadores",
  catalogTitle: "Generadores para impresión 3D — Modelos paramétricos gratis | Forgent3D",
  catalogDescription:
    "Generadores gratis online para impresión 3D: contenedores y placas base Gridfinity, cajas paramétricas, adaptadores de manguera, embudos, engranajes rectos, helicoidales y cónicos, cremalleras, poleas GT2, acopladores de eje, arandelas, bandejas para herramientas, escuadras para perfil 2020, chumaceras, rejillas de ventilador, pasacables de escritorio, soportes 18650, abrazaderas para tubo, soportes para puntas, portabobinas, carcasas para Raspberry Pi y Arduino, ganchos para tablero perforado, escuadras para estantería, ganchos de pared y soportes para móvil. Ajusta parámetros, previsualiza en 3D y exporta STL / STEP.",
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
      title: "Generador de cajas 3D — Tapa deslizante, con bisagra o imanes | Forgent3D",
      description:
        "Caja imprimible en 3D a medida: tapa deslizante, con bisagra, a presión o con imanes; compartimentos, texto grabado y prueba de ajuste de 20 minutos. STL / STEP gratis.",
      h1: "Generador de cajas paramétricas: el interior que necesitas, la tapa que quieres, a la medida de tu impresora",
      intro:
        "Indica qué tiene que caber dentro, o qué tamaño puede tener la caja cerrada, y elige una tapa: una deslizante que cierra con un clic, una con bisagra que sale de la impresora ya montada, una sobre reborde que se levanta sin más, una a presión o una magnética, o ninguna. Añade compartimentos y una etiqueta, fija una sola holgura de ajuste para todas las tapas, guías y bisagras, e imprime primero una pequeña prueba de ajuste. La caja se reconstruye al instante como CAD real y cada combinación está comprobada: la tapa cierra sin interferencias, la bisagra gira sin rozar y la tapa deslizante hace clic al llegar al tope.",
      whyPoints: [
        "Medidas interiores o exteriores: lo que tiene que caber dentro, o dónde tiene que caber la caja",
        "Una sola holgura de ajuste para todas las tapas, guías y bisagras, y una prueba de ajuste que se imprime en 20 minutos",
        "Tapa deslizante, con bisagra, sobre reborde, a presión o magnética; compartimentos, también desiguales",
        "Una etiqueta que se lee al derecho con la tapa cerrada, grabada o incrustada en un segundo color",
        "Distribuida según la cama de tu impresora: la tapa va donde quepa, o en una placa aparte",
        "STL y STEP gratis, sin registrarte, y “AI edit” para todo lo que no cubren las opciones",
      ],
      faqs: [
        {
          q: "¿Qué tapa elijo?",
          a: "Deslizante, para el tacto clásico de estuche escolar: hace clic al llegar al tope y tiene ranuras para los dedos con las que abrirla. Con bisagra, para una caja que abres a menudo: la bisagra print-in-place sale de la impresora ya montada, y la de pasador es la opción robusta para cajas grandes o si tu impresora tiende a soldar las bisagras. Sobre reborde, como simple cubierta antipolvo; a presión, para una tapa que debe seguir cerrada cuando llevas la caja de un sitio a otro; magnética, para una tapa que se levanta y que ocho imanes atraen hacia abajo (se suelta con un tirón: para llevarla en una bolsa, elige la tapa con bisagra con clip o con cierres de caja de herramientas); y ninguna, para bandejas y contenedores apilables. Las tapas sobre reborde y magnéticas tienen una muesca para el dedo en el extremo izquierdo.",
        },
        {
          q: "La tapa quedó demasiado justa (o demasiado floja). ¿Qué cambio?",
          a: "La holgura de ajuste: la separación por lado entre las piezas que se deslizan o giran. 0.25 mm va bien en una impresora bien calibrada con PLA; suma 0.05–0.1 para PETG o para una impresora que sobreextruye, y resta 0.05 si la tapa baila. Las bisagras siempre llevan 0.1 más y nunca menos de 0.3. Activa “Fit test print only” (solo imprimir la prueba de ajuste) para imprimir en unos veinte minutos una caja de 40 × 30 con la misma tapa antes de lanzar la impresión larga.",
        },
        {
          q: "¿Las medidas son interiores o exteriores?",
          a: "Tú eliges. “Inside” (interior, la opción por defecto) es lo que va dentro: largo × ancho × alto, del fondo a la tapa cerrada. “Outside” (exterior) es la caja cerrada entera, con la tapa, el cilindro de la bisagra y el cierre incluidos, para un cajón o una estantería: resta 1–2 mm a la medida interior del cajón para que la caja entre deslizando. En una caja con bisagra, el alto es el de la base y la profundidad de la tapa se suma por encima.",
        },
        {
          q: "La bisagra print-in-place salió soldada. ¿Por qué?",
          a: "Casi siempre por sobreextrusión, pata de elefante o piel difusa (fuzzy skin) que cierran la separación. Con la holgura por defecto, la bisagra tiene 0.35 mm; desactiva la piel difusa, no escales nunca el archivo en el laminador (eso cambia las separaciones: cambia el tamaño aquí) y, si aún se suelda, sube la holgura o elige la bisagra con pasador (un pasador impreso, un tornillo M3 o filamento de 1.75 mm).",
        },
        {
          q: "¿Por qué dice que mi caja no cabe en mi impresora?",
          a: "Elige la cama de tu impresora. La tapa se coloca junto a la caja en la dirección en la que quepa; cuando las dos no caben en una misma placa, la tapa se llama “lid (second plate)” (tapa, segunda placa): sepárala en tu laminador y pásala a otra placa. Una caja con bisagra print-in-place se imprime abierta y en una sola pieza, así que caja y tapa tienen que caber una al lado de la otra; si no, usa la bisagra con pasador.",
        },
        {
          q: "¿Cómo la imprimo?",
          a: "Sin soportes: las tapas se imprimen boca abajo, con la etiqueta en la cara que apoya en la cama; las guías deslizantes y los rebordes están a 45°, y cada borde que toca la cama lleva un pequeño chaflán contra la pata de elefante. Capas de 0.2 mm y tres perímetros o más; brim para las cajas de más de 150 mm en PETG. Mete los imanes a presión con una gota de pegamento y fíjate en los polos: los de la tapa tienen que atraer a los de la caja.",
        },
      ],
    },
    params: {
      SIZE: {
        label: "Medidas",
        desc: "Inside (interior): lo que tiene que caber en la caja. Outside (exterior): la caja cerrada, con tapa, bisagra y cierre incluidos, para un cajón o una estantería; resta 1–2 mm a la medida interior del cajón para que la caja entre deslizando.",
      },
      INNER_L: {
        label: "Largo",
        desc: "Largo interior (o exterior). La caja tiene que caber en la cama de tu impresora: elígela más abajo.",
      },
      INNER_W: { label: "Ancho", desc: "Ancho interior (o exterior)." },
      INNER_H: {
        label: "Alto",
        desc: "Inside: del fondo a la tapa cerrada (en una caja con bisagra, la base; la profundidad de la tapa añade la tapa por encima). Outside: la altura total de la caja cerrada.",
      },
      WALL: {
        label: "Grosor de pared",
        desc: "2 mm son cinco perímetros de 0.4 mm. Las tapas a presión, sobre reborde y magnéticas llevan su ranura o su reborde en la pared, así que necesitan algo más de 1.2.",
      },
      FLOOR: { label: "Grosor del fondo", desc: "Ocho capas de 0.2 mm por defecto; más grueso para contenido pesado." },
      CORNER_R: {
        label: "Radio de esquina",
        desc: "Esquinas exteriores; el interior se redondea con este radio menos el grosor de pared. La tapa deslizante se redondea con la caja.",
      },
      LID: {
        label: "Tipo de tapa",
        desc: "Una tapa deslizante con clic y ranuras para los dedos, una tapa con bisagra, una que se levanta de un reborde, una tapa a presión, una que se levanta y se sujeta con ocho imanes, o ninguna.",
      },
      CLEARANCE: {
        label: "Holgura de ajuste",
        desc: "Separación por lado entre las piezas que se deslizan o giran. 0.25 va bien en una impresora bien calibrada con PLA; suma 0.05–0.1 para PETG. Las bisagras llevan 0.1 más, nunca menos de 0.3.",
      },
      HINGE: {
        label: "Bisagra",
        desc: "Solo tapa con bisagra: impresa ya montada, o con un pasador que metes después (uno impreso o un tornillo M3, o un trozo de filamento de 1.75 mm).",
      },
      LATCH: {
        label: "Cierre",
        desc: "Solo tapa con bisagra. Clip: se cierra a presión y se abre apretándolo; no se abre dentro de una bolsa (necesita una base de 15 mm de profundidad). Toolbox clasps (cierres de caja de herramientas): se enganchan en un tornillo, los más firmes; cada uno lleva dos tornillos M3 × 30. Magnets (imanes): sujetan la tapa abajo y se abre con un tirón. Un cierre hasta 100 mm de largo, dos hasta 200 y tres por encima.",
      },
      LID_DEPTH: {
        label: "Profundidad de la tapa",
        desc: "Solo tapa con bisagra: la profundidad interior de la tapa; al menos 4 mm (se hace más profunda sola donde la bisagra lo necesita) y nunca más que la base.",
      },
      MAGNET: {
        label: "Imanes (diámetro × grosor)",
        desc: "Tapa magnética: ocho imanes, cuatro en columnas en las esquinas de la caja, enrasados con el reborde, y cuatro en la tapa. Cierre magnético de la tapa con bisagra: cuatro. 6 × 2 es el imán de Gridfinity; los huecos miden 0.2 mm más que el imán, para una gota de pegamento.",
      },
      DIV_X: {
        label: "Compartimentos a lo largo",
        desc: "Compartimentos uno al lado de otro a lo largo de la caja (1 = sin divisores).",
      },
      CELLS_X: {
        label: "Proporciones a lo largo",
        desc: "Compartimentos desiguales: un ancho relativo por compartimento; 1 2 1 hace el del medio el doble de ancho (también valen anchos en mm que sumen el interior).",
      },
      DIV_Y: { label: "Compartimentos a lo ancho", desc: "Compartimentos a lo ancho de la caja." },
      CELLS_Y: { label: "Proporciones a lo ancho", desc: "Compartimentos desiguales a lo ancho, igual que arriba." },
      DIV_H: {
        label: "Altura de los divisores",
        desc: "Con divisores más bajos es más fácil sacar las piezas pequeñas. Al 100 % se quedan a 0.2–0.5 mm de la tapa, así que las piezas pequeñas no pueden saltar por encima.",
      },
      LABEL: {
        label: "Texto de la etiqueta",
        desc: "Se graba en la tapa de modo que se lee al derecho con la tapa cerrada (una caja sin tapa lo lleva en el frente). Letras sin tildes ni ñ, números y símbolos comunes.",
      },
      LABEL_STYLE: {
        label: "Estilo de la etiqueta",
        desc: "Grabada a 0.6 mm de profundidad, o incrustada: las letras como pieza aparte, enrasadas en el grabado, en un segundo color, para una impresora que imprime dos filamentos en una misma capa (AMS, MMU).",
      },
      STACKABLE: {
        label: "Apilable",
        desc: "Solo cajas sin tapa: la base se estrecha con un escalón a 45°, para que encaje en el borde de la caja de abajo.",
      },
      BED: {
        label: "Cama de la impresora",
        desc: "La tapa se coloca junto a la caja en la dirección en la que quepa, a 6 mm de ella y a 2 mm del borde de la cama; si no cabe en la misma placa, se llama “lid (second plate)” (tapa, segunda placa). Una caja con bisagra print-in-place se imprime abierta y en una sola pieza, así que caja y tapa tienen que caber una al lado de la otra.",
      },
      FIT_TEST: {
        label: "Solo imprimir la prueba de ajuste",
        desc: "Una caja de 40 × 30 mm con la misma tapa, holgura, pared y esquinas: unos veinte minutos de impresión para comprobar el ajuste antes de imprimir la de verdad; pega también sus imanes.",
      },
    },
    example: "120 × 80 × 40 mm de interior, tapa deslizante, 3 compartimentos",
    step: [
      "La caja y la tapa se exportan como dos sólidos separados en un mismo archivo: 101 caras exactas para la caja con tapa deslizante por defecto, con 67 planos, 24 cilindros (las esquinas redondeadas, los salientes del clic y sus hoyuelos, las ranuras para los dedos) y 10 conos (el chaflán de 45° del borde inferior allí donde rodea las esquinas).",
      "Abre el archivo en CAD para poner un logotipo, una muesca para cables o agujeros de montaje justo donde van, para hacer un inserto que encaje en el interior, o entrégalo a un servicio de impresión que pida STEP.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una caja de 120 × 80 × 40 mm con tapa deslizante y tres compartimentos?",
        a: "Abre https://www.forgent3d.com/es/generators/parametric-box-generator?INNER_L=120&INNER_W=80&INNER_H=40&LID=sliding&DIV_X=3: las medidas son las del interior de la caja. Descarga el STL para imprimir la caja y la tapa, o el STEP para editarlas.",
      },
      {
        q: "¿Cómo hago una caja que quepa en un cajón de 200 × 100 × 60 mm?",
        a: "Abre https://www.forgent3d.com/es/generators/parametric-box-generator?SIZE=outside&INNER_L=200&INNER_W=100&INNER_H=60&LID=none&DIV_X=3: con las medidas en “Outside” (exteriores), los números son los de la caja entera, así que entra en el cajón; el interior es lo que dejan las paredes.",
      },
    ],
    keywords: [
      "generador de cajas 3d",
      "generador de cajas paramétricas",
      "caja con tapa para imprimir en 3d",
      "caja con tapa deslizante stl",
      "caja con bisagra impresa en 3d",
      "caja con bisagra print in place",
      "caja organizadora con divisiones stl",
      "caja con tapa magnética 3d",
      "caja apilable stl",
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
        "Cremallera a juego: el generador de cremalleras usa la misma forma de diente",
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
      sizes: {
        title: "Tamaños habituales",
        intro: "Diámetro primitivo = módulo × dientes, diámetro exterior = módulo × (dientes + 2), diámetro de fondo = módulo × (dientes − 2.5). Cada fila abre el generador con ese engranaje.",
        head: ["Módulo", "Dientes", "Ø primitivo", "Ø exterior", "Ø de fondo", ""],
        open: "Abrir",
        note: "Dos engranajes engranan a una distancia entre centros = módulo × (dientes₁ + dientes₂) / 2: módulo 2 con 15 y 30 dientes da 45 mm.",
      },
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
        desc: "El radio de esquina de tu propia pieza: el contorno trazado se redondea con él antes de sumar la holgura. Una pieza con esquinas realmente vivas solo entra hasta 2,4 × la holgura (1,2 mm con 0,5); por encima, las esquinas se atascan.",
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

  "gear-rack-generator": {
    copy: {
      name: "Generador de cremalleras",
      title: "Generador de cremalleras — Para engranajes rectos (STL / STEP) | Forgent3D",
      description:
        "Cremalleras por módulo y dientes: perfil ISO 53 que engrana con nuestros engranajes rectos, extremos para unir tramos y agujeros de montaje opcionales. STL / STEP gratis.",
      h1: "Generador de cremalleras: cremalleras que engranan con los engranajes rectos",
      intro:
        "Elige el módulo y el ángulo de presión de tu piñón y luego el número de dientes: la cremallera mide exactamente ese número de pasos, con los dos extremos en mitad de un hueco entre dientes, así que los tramos impresos se unen en un recorrido más largo. Usa el perfil ISO 53 con el que se tallan nuestros engranajes rectos, así que la pareja engrana con el juego de 0.2 mm previsto en el diseño.",
      whyPoints: [
        "El mismo perfil de diente ISO 53 que el generador de engranajes rectos: la pareja engrana tal como se diseñó",
        "Largo en pasos enteros y extremos en mitad de un hueco: los tramos se unen a tope",
        "20 mm de alto con módulo 2 por defecto, línea primitiva a 18 como en las cremalleras de sección cuadrada; la altura que necesites",
        "Agujeros de montaje laterales M3–M6 opcionales, con rebaje para la cabeza como en las cremalleras de KHK y MISUMI",
      ],
      faqs: [
        {
          q: "¿Dónde va el piñón?",
          a: "Su centro queda a la altura de la línea primitiva de la cremallera más el radio primitivo del piñón (módulo × dientes / 2): con los valores por defecto, 18 + 20 = 38 mm para un piñón de módulo 2 y 20 dientes. Es la distancia de montaje que da KHK para cualquier pareja de cremallera y piñón.",
        },
        {
          q: "¿Qué largo de cremallera puedo imprimir de una sola pieza?",
          a: "Con módulo 2, 40 dientes (251.33 mm) caben rectos en una cama de 256 mm, o 53 dientes en su diagonal; en una cama de 220 mm, 35 dientes (219.91 mm, sin margen para un brim). Para un recorrido más largo, imprime varios tramos y únelos: los extremos están hechos para eso.",
        },
        {
          q: "¿En qué orientación la imprimo?",
          a: "Las guías de impresión de engranajes apoyan el perfil del diente en plano sobre la cama (flancos lisos, pies resistentes), así que imprime la cremallera tumbada de lado; así los agujeros de montaje laterales salen como agujeros verticales limpios. PETG para una cremallera que vaya a trabajar, con 4 paredes o más.",
        },
      ],
    },
    params: {
      MODULE: { label: "Módulo", desc: "Debe coincidir con el del piñón." },
      PRESSURE_ANGLE: {
        label: "Ángulo de presión",
        desc: "20° en todas las cremalleras de catálogo; 25° solo para engranar con un piñón de 25°.",
      },
      TEETH: {
        label: "Número de dientes",
        desc: "Largo = dientes × π × módulo; 15 con módulo 2 es la cremallera estándar de 100 mm de MISUMI (94.25 mm).",
      },
      FACE_WIDTH: { label: "Ancho de cara", desc: "Como mínimo, el ancho de cara del piñón." },
      PITCH_HEIGHT: {
        label: "Altura a la línea primitiva",
        desc: "18 con módulo 2 es la línea primitiva de una cremallera de sección cuadrada (HPC, MISUMI inoxidable: 9 × módulo); las cremalleras de acero de KHK y MISUMI usan 23.",
      },
      HOLES: {
        label: "Agujeros de montaje",
        desc: "Atraviesan de lado el ancho de cara, espaciados de forma uniforme, como en las cremalleras SRFD de KHK.",
      },
      SCREW: { label: "Tornillo", desc: "Medidas del agujero y del rebaje según las tablas de cremalleras de MISUMI." },
      COUNTERBORE: { label: "Rebaje para la cabeza", desc: "Embute las cabezas de los tornillos en la cara -Y." },
    },
    example: "módulo 1.5, 40 dientes (188.5 mm), 2 agujeros de montaje",
    step: [
      "La cremallera de 15 dientes por defecto se exporta como 96 caras exactas: cada flanco de diente es un plano real (el perfil de cremallera ISO 53, de flancos rectos) y cada redondeo del pie, un cilindro real (66 planos, 30 cilindros), así que el CAD mide directamente el ángulo del flanco y la altura de la línea primitiva.",
      "El largo es un número entero de pasos (15 × π × 2 = 94.25 mm) y los dos extremos caen en mitad de un hueco entre dientes, como en las cremalleras empalmables SRF de KHK y RGEA de MISUMI, así que dos cremalleras se unen a tope y el paso continúa sin saltos.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una cremallera de módulo 2 de unos 200 mm de largo para un piñón de 20 dientes?",
        a: "200 / (π × 2) redondeado hacia abajo da 31 dientes, 194.78 mm: https://www.forgent3d.com/es/generators/gear-rack-generator?MODULE=2&TEETH=31 (el centro del piñón queda entonces a 18 + 20 = 38 mm sobre la base de la cremallera: altura de la línea primitiva + radio primitivo). Haz el piñón con el generador de engranajes rectos, con el mismo módulo.",
      },
      {
        q: "¿Puedo unir cremalleras impresas para un recorrido más largo?",
        a: "Sí: aquí cada cremallera es un número entero de pasos con los dos extremos en mitad de un hueco. Júntalas a tope, engrana un trozo corto de cremallera sobre la junta para fijar el paso (el método que indican KHK y MISUMI para sus cremalleras) y luego atornilla o fija con pasadores las dos a la base.",
      },
    ],
    keywords: [
      "generador de cremalleras",
      "cremallera módulo 2 stl",
      "cremallera y piñón impresos en 3d",
      "cremallera de engranaje stl",
      "cremallera dentada imprimible",
    ],
  },

  "helical-gear-generator": {
    copy: {
      name: "Generador de engranajes helicoidales",
      title: "Generador de engranajes helicoidales — Módulo, hélice y sentido | Forgent3D",
      description:
        "Engranajes helicoidales de evolvente: módulo normal, dientes, ángulo y sentido de la hélice, ancho de cara y agujero. Dientes tallados con fresa madre. STL / STEP gratis.",
      h1: "Generador de engranajes helicoidales con dientes de evolvente reales",
      intro:
        "Fija el módulo normal, el número de dientes, el ángulo de hélice y su sentido: el generador talla el diente en el plano transversal al eje con la misma cremallera ISO 53 que nuestros engranajes rectos y luego lo retuerce a lo largo del eje, así que un engranaje con hélice izquierda y otro con hélice derecha, del mismo módulo y el mismo ángulo de hélice, engranan en ejes paralelos. Los dientes helicoidales toman la carga de forma progresiva, así que una pareja hace menos ruido que unos engranajes rectos.",
      whyPoints: [
        "Módulo normal y ángulo de presión normal: como los dan KHK SH, MISUMI y los catálogos chinos",
        "Hélice izquierda o derecha: los ejes paralelos llevan sentidos opuestos; los ejes cruzados a 90°, el mismo sentido a 45°",
        "El ancho de cara por defecto abarca un paso axial (relación de recubrimiento ≈ 1), como en los engranajes de catálogo",
        "Agujero redondo o hexagonal, cortado como un cilindro o un prisma reales después de la torsión",
      ],
      faqs: [
        {
          q: "¿Qué distancia entre centros necesitan dos engranajes helicoidales?",
          a: "Módulo normal × (dientes₁ + dientes₂) / (2 × cos ángulo de hélice). La propia tabla de distancias entre centros de KHK coincide hasta la centésima: su SH2-15 con su SH2-20 a 15° quedan a 36.23 mm.",
        },
        {
          q: "¿Los engranajes helicoidales se imprimen sin soportes?",
          a: "Sí: todos los engranajes helicoidales y en espina de pescado impresos que hemos encontrado con sus ajustes indicados se imprimen en plano sobre la cama y sin soportes, con ángulos de hélice de 15–30°. Usa 4–6 paredes, capas de 0.16–0.2 mm y PETG o nylon si van a soportar carga.",
        },
        {
          q: "¿Por qué se queda en 40 dientes?",
          a: "Cada cambio reconstruye el engranaje en tu navegador, y las superficies retorcidas de los dientes añaden unos 0.12 s por diente al resto de la construcción: con 40 dientes, el engranaje permitido más lento tarda unos 6 s. De 8 a 40 dientes cubre piñones y ruedas hasta el engranaje de 39 dientes del extrusor Wade; para una rueda más grande, copia el engranaje a tus modelos y pídeselo al agente de IA: simplemente se reconstruye más despacio.",
        },
      ],
    },
    params: {
      MODULE: {
        label: "Módulo (normal)",
        desc: "Módulo normal, como lo dan KHK SH, MISUMI y los catálogos chinos; los engranajes que engranan entre sí lo comparten.",
      },
      TEETH: { label: "Número de dientes", desc: "Diámetro primitivo = módulo × dientes / cos(ángulo de hélice)." },
      PRESSURE_ANGLE: { label: "Ángulo de presión (normal)", desc: "20° es el estándar." },
      HELIX_ANGLE: {
        label: "Ángulo de hélice",
        desc: "15–21.5° en los engranajes de catálogo para ejes paralelos; 45° para ejes cruzados a 90°.",
      },
      HAND: { label: "Sentido de la hélice", desc: "Ejes paralelos: sentidos opuestos. Ejes cruzados a 90°: el mismo sentido." },
      FACE_WIDTH: {
        label: "Ancho de cara",
        desc: "20 con módulo 2 y 20° abarca un paso axial (relación de recubrimiento ≈ 1), como en los engranajes de catálogo.",
      },
      BORE_STYLE: { label: "Tipo de agujero", desc: "Eje redondo o alojamiento hexagonal." },
      BORE_D: {
        label: "Medida del agujero",
        desc: "Diámetro del eje, o medida entre caras del hexágono; 5 encaja en un motor NEMA 17.",
      },
    },
    example: "módulo 1.5, 30 dientes, hélice izquierda de 20°",
    step: [
      "Cada superficie de diente es una sola cara B-spline lisa que sigue la hélice: el engranaje de 20 dientes por defecto se exporta como 83 caras (80 superficies de dientes, las dos caras de los extremos y el agujero como un cilindro real, cortado después de la torsión para que su diámetro se lea exacto en CAD).",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una pareja de engranajes helicoidales de 15 y 30 dientes, módulo 2?",
        a: "Abre https://www.forgent3d.com/es/generators/helical-gear-generator?MODULE=2&TEETH=15&HAND=right y https://www.forgent3d.com/es/generators/helical-gear-generator?MODULE=2&TEETH=30&HAND=left (los ejes paralelos necesitan el mismo ángulo de hélice y sentidos opuestos). Con los 20° por defecto, engranan a 2 × (15 + 30) / (2 × cos 20°) = 47.89 mm.",
      },
      {
        q: "¿Qué ángulo de hélice uso?",
        a: "Los engranajes de catálogo para ejes paralelos usan de 15° (KHK SH) a 21.5° (KHK KHG); los engranajes helicoidales impresos van de 15 a 30° y se imprimen en plano sin soportes. Para ejes cruzados a 90°, usa 45° en los dos engranajes con el mismo sentido, como hacen MISUMI y HPC: https://www.forgent3d.com/es/generators/helical-gear-generator?HELIX_ANGLE=45&FACE_WIDTH=10",
      },
    ],
    keywords: [
      "generador de engranajes helicoidales",
      "engranaje helicoidal stl",
      "engranajes helicoidales impresos en 3d",
      "engrane helicoidal",
      "engranaje helicoidal por módulo y ángulo de hélice",
    ],
  },

  "bevel-gear-generator": {
    copy: {
      name: "Generador de engranajes cónicos",
      title: "Generador de engranajes cónicos — Pares por módulo (STL / STEP) | Forgent3D",
      description:
        "Engranajes cónicos rectos: módulo, dientes de ambos engranajes, ángulo entre ejes de 45–120°, agujero y cubo. Pares de inglete y relaciones 1:2 o 1:3. STL / STEP gratis.",
      h1: "Generador de engranajes cónicos para pares de inglete y pares cónicos",
      intro:
        "Indica el módulo, el número de dientes de este engranaje y el de su pareja, y el ángulo entre ejes: el generador calcula con ellos los dos conos primitivos, así que los dos engranajes que hagas se encuentran en un vértice común y engranan. Los dientes son la evolvente tallada con fresa madre de nuestros engranajes rectos, colocada sobre el cono complementario de cada engranaje (método de Tredgold) y prolongada en línea recta hasta el vértice.",
      whyPoints: [
        "Cualquier pareja: de inglete (1:1) o 1:1.5, 1:2, 1:3; la pareja se hace intercambiando los dos números de dientes",
        "Ángulos entre ejes de 45° a 120°, como los engranajes de inglete angulares de KHK",
        "Ancho de cara de un tercio de la generatriz del cono primitivo como máximo, como lo dimensiona KHK",
        "Cubo trasero y agujero como en el PM1.5-20 de KHK; 0.1 mm de juego por engranaje",
      ],
      faqs: [
        {
          q: "¿Cómo monto una pareja de engranajes cónicos?",
          a: "Sus conos primitivos deben compartir un mismo vértice, en el punto donde se cruzan los dos ejes. Con los valores por defecto (módulo 1.5, 20/20 a 90°), el vértice queda 15 mm por encima del extremo mayor del engranaje: 28 mm por encima de la base de su cubo de 13 mm.",
        },
        {
          q: "¿En qué orientación imprimo un engranaje cónico?",
          a: "Apoyado sobre la parte trasera, con el cubo abajo y los dientes arriba, como lo hace la gente que los imprime; a alguien que imprimió engranajes cónicos pequeños con los dientes hacia abajo sobre un anillo se le partieron dientes. No necesita soportes; 3–6 paredes y PETG para engranajes que vayan a trabajar.",
        },
        {
          q: "¿Por qué hace un solo engranaje cada vez?",
          a: "Cada cambio reconstruye el engranaje en tu navegador, y construir solo el que estás viendo hace que vaya rápido. Los dos engranajes salen de la misma página: intercambia TEETH y MATE_TEETH para hacer la pareja.",
        },
      ],
    },
    params: {
      MODULE: {
        label: "Módulo (extremo mayor)",
        desc: "Medido en el extremo mayor, como lo dan KHK y MISUMI; los dos engranajes lo comparten.",
      },
      TEETH: { label: "Número de dientes", desc: "Los de este engranaje." },
      MATE_TEETH: {
        label: "Dientes de la pareja",
        desc: "Los del otro engranaje; junto con el ángulo entre ejes, fija los dos conos primitivos.",
      },
      SHAFT_ANGLE: { label: "Ángulo entre ejes", desc: "Ángulo que forman los dos ejes." },
      PRESSURE_ANGLE: { label: "Ángulo de presión", desc: "20° en todos los engranajes cónicos de catálogo." },
      BORE_STYLE: { label: "Tipo de agujero", desc: "Eje redondo o alojamiento hexagonal." },
      BORE_D: {
        label: "Medida del agujero",
        desc: "Diámetro del eje, o medida entre caras del hexágono; el PM1.5-20 de KHK lleva un agujero de 8.",
      },
      HUB_LENGTH: {
        label: "Largo del cubo",
        desc: "Cubo en la parte trasera, dimensionado como el del PM1.5-20 de KHK (Ø26 × 13) pero justo dentro del pie de los dientes: Ø24.1 con los valores por defecto.",
      },
    },
    example: "piñón de 15 dientes de una pareja 1:2 (su pareja: 30 dientes)",
    step: [
      "El engranaje por defecto se exporta como 85 caras exactas: 40 flancos de diente, y las cabezas y los fondos de los dientes como 40 conos reales que apuntan todos al vértice del cono primitivo (geometría de engranaje cónico recto, no una pila de cortes), más 3 caras planas y el cubo y el agujero como cilindros reales.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago una pareja de engranajes cónicos a 90° con relación 1:2?",
        a: "Haz los dos en la misma página: https://www.forgent3d.com/es/generators/bevel-gear-generator?TEETH=15&MATE_TEETH=30 es el piñón y https://www.forgent3d.com/es/generators/bevel-gear-generator?TEETH=30&MATE_TEETH=15 su pareja (la pareja 1:2 de stock de KHK). Móntalos de modo que los vértices de sus conos coincidan donde se cruzan los ejes.",
      },
      {
        q: "¿Puedo hacer engranajes de inglete para ejes a 60° o 120°?",
        a: "Sí, fija el ángulo entre ejes: https://www.forgent3d.com/es/generators/bevel-gear-generator?SHAFT_ANGLE=60 (KHK vende engranajes de inglete angulares a 45°, 60° y 120°, y el generador admite cualquier ángulo de 45° a 120°).",
      },
    ],
    keywords: [
      "generador de engranajes cónicos",
      "engranaje cónico stl",
      "engranajes cónicos impresos en 3d",
      "piñón cónico stl",
      "engrane cónico",
      "pareja de engranajes cónicos por módulo y relación",
    ],
  },

  "gt2-pulley-generator": {
    copy: {
      name: "Generador de poleas GT2",
      title: "Generador de poleas GT2 — Pestañas, cubo y prisioneros (STL) | Forgent3D",
      description:
        "Poleas GT2 de paso 2 o 3 mm: dientes, ancho de correa, pestañas, agujero de 2–8 mm, cubo con prisioneros en tuercas cautivas y ajuste de ranura. STL / STEP gratis.",
      h1: "Generador de poleas GT2 para impresoras 3D y pequeñas CNC",
      intro:
        "Elige el número de dientes, el ancho de correa y el agujero: el diámetro exterior sale exactamente igual que en las poleas GT2 de aluminio (20 dientes: 12.22 mm), con pestañas, un cubo y dos prisioneros en alojamientos para tuerca cautiva. Gates no publica la ranura de GT2, así que cada ranura se construye a partir de la forma publicada del diente de la correa, con un ajuste para tu impresora.",
      whyPoints: [
        "Diámetro exterior = diámetro primitivo − 2 × 0.254, contrastado con poleas de MISUMI, SDP/SI y Adafruit",
        "Ranuras a partir del diente publicado de la correa GT2, más un ajuste que vas moviendo de 0.1 en 0.1 mm",
        "Pestañas de diámetro exterior + 5 y un cubo con dos prisioneros a 90° en tuercas cautivas",
        "Modo polea loca: sin cubo, solo el cuerpo dentado y las pestañas",
      ],
      faqs: [
        {
          q: "¿Cuál es la polea GT2 más pequeña que vale la pena imprimir?",
          a: "Este generador baja hasta 16 dientes. Por debajo de unos 20, la correa tiene pocos dientes engranados, y las puntas de los dientes de la polea miden solo unas décimas de milímetro de ancho con cualquier número de dientes (más o menos una línea de 0.4 mm), así que mucha gente imprime 20 o más.",
        },
        {
          q: "¿Cómo imprimo bien una polea GT2?",
          a: "En plano sobre la cama, con una pestaña hacia abajo y sin soportes; capas de 0.1–0.16 mm para los dientes, perímetros externos primero y al menos 4 paredes. PETG, ABS, ASA o nylon; PLA solo para cargas ligeras.",
        },
        {
          q: "¿Cuántos pasos/mm necesita una polea de 20 dientes?",
          a: "Una vuelta mueve dientes × 2 mm de correa: 40 mm con 20 dientes. Un motor de 200 pasos a 16 micropasos da 3200 pasos por vuelta, así que 3200 / 40 = 80 pasos/mm.",
        },
      ],
    },
    params: {
      PROFILE: { label: "Perfil de correa", desc: "El paso de 2 mm es el de la correa de las impresoras 3D." },
      TEETH: {
        label: "Número de dientes",
        desc: "Diámetro exterior = dientes × 2 / π − 0.508 (20 dientes: 12.22 mm); una vuelta mueve dientes × 2 mm de correa. Hasta 60, la polea 2GT de stock más grande de MISUMI.",
      },
      BELT_WIDTH: { label: "Ancho de correa", desc: "La parte dentada es 1 mm más ancha, como en las poleas de MISUMI." },
      FIT: { label: "Ajuste de ranura", desc: "Ensancha cada ranura para la impresión; muévelo de 0.1 en 0.1." },
      FLANGES: { label: "Pestañas", desc: "Diámetro exterior + 5 mm, 1.5 mm de grosor: evitan que la correa se salga." },
      BORE_D: {
        label: "Agujero",
        desc: "Medida del eje; se añaden 0.15 mm de holgura de impresión. 5 para motores NEMA 17.",
      },
      HUB: { label: "Cubo", desc: "None (sin cubo) da una polea loca: solo el cuerpo dentado y las pestañas." },
      SET_SCREWS: {
        label: "Prisioneros",
        desc: "En el cubo, a 90° entre sí, con alojamientos para tuerca cautiva; M3 hasta un agujero de 5 mm, M4 por encima.",
      },
    },
    example: "40 dientes, agujero de 8 mm",
    step: [
      "Cada una de las 20 ranuras se exporta como una sola cara extruida lisa (una spline, no un polígono), y los tramos entre ellas, como cilindros reales en el diámetro exterior de 12.22 mm: 63 caras en total, así que el CAD mide directamente el diámetro exterior, el agujero y la pestaña.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo consigo una polea GT2 de 20 dientes para un eje de motor de 5 mm y una correa de 6 mm?",
        a: "https://www.forgent3d.com/es/generators/gt2-pulley-generator?TEETH=20&BORE_D=5&BELT_WIDTH=6 da 12.22 mm de diámetro exterior, como las de aluminio, con pestañas y dos prisioneros M3 en alojamientos para tuerca cautiva. Descarga el STL e imprímela con la pestaña hacia abajo, sin soportes.",
      },
      {
        q: "La polea impresa queda demasiado justa con la correa, o la correa salta. ¿Qué cambio?",
        a: "FIT ensancha cada ranura: empieza en 0.2 (el valor por defecto de droftarts) y muévelo de 0.1 en 0.1. Luego imprime los dientes con capas de 0.1–0.16 mm, perímetros externos primero y 4 paredes o más. Con 0.3, por ejemplo: https://www.forgent3d.com/es/generators/gt2-pulley-generator?FIT=0.3",
      },
    ],
    keywords: [
      "generador de poleas gt2",
      "polea gt2 stl",
      "polea gt2 20 dientes 5mm",
      "polea dentada gt2 impresa en 3d",
      "polea gt2 imprimible",
    ],
  },

  "shaft-coupling-generator": {
    copy: {
      name: "Generador de acopladores de eje",
      title: "Generador de acopladores de eje — Motor 5 mm a husillo 8 mm | Forgent3D",
      description:
        "Acopladores de eje rígidos: dos agujeros de 3 a 14 mm, abrazadera partida o prisioneros, M2.5–M4 con tuercas cautivas y holgura de impresión. STL / STEP gratis.",
      h1: "Generador de acopladores de eje: acopladores rígidos para motores y husillos",
      intro:
        "Introduce las dos medidas de eje (por defecto, motor de 5 mm a husillo de 8 mm) y obtén un acoplador rígido con abrazadera partida o con prisioneros, con las tuercas sujetas en alojamientos impresos. Rígido a propósito: en el eje Z de una impresora 3D, un acoplador flexible puede notarse como bandas en la pieza, y las vigas helicoidales impresas son demasiado débiles para que merezcan la pena.",
      whyPoints: [
        "Dos agujeros cualesquiera de 3 a 14 mm, más un ajuste de holgura para agujeros impresos",
        "Abrazadera partida como en los acopladores de una pieza de BuildModHack y Ruland, o dos prisioneros a 90° entre sí",
        "Alojamientos para tuerca hexagonal y rebajes para la cabeza a medida de M2.5, M3 o M4",
        "20 × 25 mm por defecto; solo crece cuando el agujero y el tornillo necesitan más pared",
      ],
      faqs: [
        {
          q: "¿Acoplador rígido o flexible?",
          a: "Rígido para el eje Z de una impresora 3D: Ooznest señala que ahí un acoplador flexible puede empeorar la calidad de impresión, y los acopladores en espiral no están pensados para soportar la carga axial. Los acopladores flexibles compensan la desalineación en las máquinas que lo necesitan; uno rígido impreso no lo hace.",
        },
        {
          q: "¿Cuánta holgura necesita el agujero?",
          a: "Empieza con los +0.3 mm por defecto (5.3 para un eje de 5 mm): en agujeros impresos pequeños se suele dejar +0.25–0.4, un poco más con PETG que con PLA. Demasiado holgado, patina; demasiado justo, se raja.",
        },
        {
          q: "¿Cómo lo imprimo?",
          a: "De pie, para que los agujeros salgan como agujeros verticales redondos; 4 perímetros, al menos un 35 % de relleno y PETG. No necesita soportes.",
        },
      ],
    },
    params: {
      BORE_1: { label: "Agujero 1 (motor)", desc: "5 para un motor NEMA 17." },
      BORE_2: { label: "Agujero 2 (husillo)", desc: "8 para un husillo T8." },
      CLEARANCE: {
        label: "Holgura del agujero",
        desc: "Se suma a los dos agujeros: los agujeros impresos salen pequeños.",
      },
      FASTENING: {
        label: "Sujeción",
        desc: "Abrazadera: un corte y un tornillo por eje. Prisioneros: dos por eje, a 90° entre sí.",
      },
      LENGTH: { label: "Largo", desc: "Cada eje entra la mitad del largo." },
      SCREW: {
        label: "Tornillo",
        desc: "Con una tuerca en un alojamiento hexagonal; el cuerpo pasa de 20 mm cuando el agujero y el tornillo lo necesitan.",
      },
    },
    example: "6.35 mm (1/4\") a 8 mm, abrazadera",
    step: [
      "Se exporta como 36 caras exactas: 27 planos y 9 cilindros reales (los dos agujeros, el exterior, los agujeros de los tornillos y los rebajes para la cabeza), así que el CAD lee directamente el diámetro de cada agujero y la posición de los tornillos.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo imprimo un acoplador para un motor NEMA 17 (5 mm) y un husillo T8 (8 mm)?",
        a: "https://www.forgent3d.com/es/generators/shaft-coupling-generator?BORE_1=5&BORE_2=8 es justo eso: un acoplador rígido de abrazadera de 20 × 25 mm con un tornillo M3 y su tuerca por eje. Imprímelo de pie en PETG, con 4 perímetros y al menos un 35 % de relleno.",
      },
      {
        q: "Mi acoplador impreso patina en el eje del motor. ¿Qué ayuda?",
        a: "Imprímelo en PETG en vez de PLA (un eje de motor paso a paso caliente ablanda el PLA a 50–60 °C y el PETG a 70–80 °C), usa la abrazadera en lugar de prisioneros, o prisioneros a 90°: https://www.forgent3d.com/es/generators/shaft-coupling-generator?FASTENING=set-screws y baja CLEARANCE si el agujero queda holgado. Para un eje de motor en D, pulsa “AI edit” y dale la medida del plano de tu eje.",
      },
    ],
    keywords: [
      "generador de acopladores de eje",
      "acoplador 5mm a 8mm stl",
      "acople 5x8 impreso en 3d",
      "acoplamiento rígido 5 a 8 mm",
      "acoplador husillo t8 stl",
    ],
  },

  "desk-grommet-generator": {
    copy: {
      name: "Generador de pasacables de escritorio",
      title: "Generador de pasacables de escritorio — Agujeros de 30–100 mm | Forgent3D",
      description:
        "Pasacables de escritorio a la medida de tu agujero: casquillo a presión y tapa enrasada con ranura para cables, ciega o sin tapa. Agujero de 30–100 mm. STL / STEP gratis.",
      h1: "Generador de pasacables de escritorio: casquillo y tapa para cualquier agujero de cables",
      intro:
        "Mide el agujero taladrado (60 mm por defecto) y obtén las dos piezas que los fabricantes venden como juego de pasacables: un casquillo con reborde que entra a presión en el agujero y una tapa que queda enrasada con el reborde, con una ranura en U para los cables, cerrada o sin tapa. Ajusta la profundidad del casquillo al tablero de tu mesa y exporta STL para imprimir o STEP para el CAD de muebles.",
      whyPoints: [
        "Cualquier agujero medido de 30 a 100 mm, con un ajuste de holgura para el encaje a presión",
        "Tapa con ranura para cables, tapa ciega o solo el casquillo: la tapa queda enrasada, como en los juegos de Mockett, Häfele y Sugatsune",
        "Profundidad del casquillo de 8–45 mm: 16 mm sirven para cualquier tablero de 16 mm o más, o iguálala al grosor de tu tablero",
        "Las dos piezas se apoyan en plano tal como se imprimen: sin soportes",
      ],
      faqs: [
        {
          q: "¿Qué medida pongo: la de la sierra de corona o la del agujero?",
          a: "La del agujero, medida. Las sierras de corona cortan un poco de más (un pasacables impreso “de 70 mm” acabó encajando en un agujero de 65 mm), así que mide el agujero con un calibre y escribe esa medida. Por defecto, el casquillo sale 0.3 mm más pequeño que el agujero.",
        },
        {
          q: "¿Con cuánto ajuste debe entrar el casquillo?",
          a: "Quienes los diseñan dejan el casquillo 0.2–0.5 mm por debajo del agujero para que entre sin forzarlo; el valor por defecto es 0.3. Si no entra, sube la holgura 0.1; si se sale, bájala 0.1. Un agujero que quedó demasiado grande aún tiene arreglo con un cordón fino de sellador alrededor del casquillo.",
        },
        {
          q: "¿Cómo lo imprimo?",
          a: "Tal como vienen colocadas las piezas: el casquillo con el reborde hacia abajo y la tapa boca abajo, ambas sin soportes. La mayoría de los pasacables impresos son de PLA; el ABS o el PETG dan un encaje a presión con algo más de agarre. Usa algo de relleno (en torno al 15 % en lugar de 0 %), porque la tapa aguanta tirones repetidos de los cables.",
        },
      ],
      sizes: {
        title: "Medidas de agujero habituales",
        intro:
          "Reborde = agujero + 12 mm (6 mm de vuelo por cada lado); el paso de cables es el interior del casquillo, agujero − 5.1 mm con la holgura por defecto y una pared de 2.4 mm; las ranuras miden más o menos un tercio del agujero, como en las tapas comerciales. Cada fila abre el generador con esa medida.",
        head: ["Ø agujero", "Ø reborde", "Ø paso de cables", "Ranura", ""],
        open: "Abrir",
        note: "35, 50, 60 y 80 mm son las medidas de sierra de corona más comunes; los anuncios chinos citan sobre todo 50 mm, luego 53 mm, y 63.5 mm (2½\") es habitual en las mesas de oficina de EE. UU.",
      },
    },
    params: {
      HOLE_D: { label: "Diámetro del agujero", desc: "El agujero taladrado tal como lo mides, no la medida de la sierra." },
      DEPTH: {
        label: "Profundidad del casquillo",
        desc: "Cuánto baja el casquillo por debajo del tablero; como máximo, el grosor del tablero.",
      },
      RIM: { label: "Vuelo del reborde", desc: "Cuánto sobresale el reborde del agujero por cada lado." },
      CLEARANCE: { label: "Holgura de ajuste", desc: "Cuánto más pequeño que el agujero sale el casquillo." },
      CAP: { label: "Tapa", desc: "Con ranura para cables, ciega o sin tapa." },
      SLOT_WIDTH: { label: "Ancho de la ranura", desc: "Como máximo dos tercios del agujero; lo típico es un tercio." },
    },
    example: "agujero de 50 mm, ranura para cables de 17 mm",
    step: [
      "Se exporta como dos sólidos exactos, casquillo y tapa, con 21 caras: 10 planos, 8 cilindros reales (el casquillo, el reborde, el interior y el rebaje en el que asienta la tapa; el borde de la tapa, su faldón y el extremo redondo de la ranura) y 3 conos (los chaflanes), así que el CAD de muebles lee directamente la medida del agujero y el asiento de la tapa.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo consigo un pasacables para un agujero de 50 mm en la mesa?",
        a: "Abre https://www.forgent3d.com/es/generators/desk-grommet-generator?HOLE_D=50&SLOT_WIDTH=17: un casquillo de 49.7 mm para el agujero de 50 mm, un reborde de 62 mm y una tapa con una ranura para cables de 17 mm. Exporta STL para imprimirlo, o STEP para CAD.",
      },
      {
        q: "¿Puedo hacer una tapa ciega, o un casquillo que atraviese un tablero de 25 mm?",
        a: "Sí: CAP=solid da una tapa sin ranura y DEPTH=25 hace que el casquillo termine enrasado con la cara inferior: https://www.forgent3d.com/es/generators/desk-grommet-generator?CAP=solid&DEPTH=25. Para cualquier mesa de 16 mm o más basta el casquillo de 16 mm por defecto; los pasacables comerciales se hacen igual.",
      },
    ],
    keywords: [
      "generador de pasacables",
      "pasacables de escritorio stl",
      "tapa pasacables 60mm",
      "pasacables para mesa impreso en 3d",
      "pasacables de escritorio a medida",
    ],
  },

  "18650-battery-holder-generator": {
    copy: {
      name: "Generador de soportes 18650",
      title: "Generador de soportes 18650 — Separadores para packs de batería | Forgent3D",
      description:
        "Soportes para celdas 18650, 21700 o 26650 para packs soldados por puntos: en cuadrícula o escalonados, canales para tira de níquel, cables de balance. STL / STEP gratis.",
      h1: "Generador de soportes 18650: separadores de celdas para montar packs",
      intro:
        "Elige la celda y la cuadrícula (3 × 5 celdas 18650 por defecto) y obtén la pareja de placas en la que se monta un pack: cada celda asienta en un alojamiento con un reborde por fuera; el reborde deja una ventana para la tira de níquel, y un canal de 8 mm guía la tira a lo largo de la placa. La placa inferior está dispuesta para que coincida al darle la vuelta sobre las celdas.",
      whyPoints: [
        "Celdas 18650, 21700 y 26650, en cuadrícula o en filas escalonadas (en panal)",
        "Paso de 20.2 mm por defecto, el de los soportes comerciales y la tira de níquel troquelada; nunca menos de 1 mm entre celdas",
        "Canales para tira de níquel de 7–8 mm, agujeros opcionales para cables de balance, abierto para soldar o cerrado para almacenar",
        "Las placas se juntan manteniendo el paso para packs más grandes que una placa",
      ],
      faqs: [
        {
          q: "¿En qué filamento lo imprimo?",
          a: "PETG, ASA o ABS. Las celdas pueden descargarse a hasta 60 °C de temperatura ambiente, con la carcasa llegando a 75 °C, y el PLA impreso empieza a ceder hacia los 60 °C: sirve para almacenar, no dentro de un pack en funcionamiento.",
        },
        {
          q: "¿Por qué no puedo poner el paso de 19 mm que usan algunos soportes escalonados?",
          a: "Las hojas de datos de las celdas de Samsung piden más de 1 mm entre celdas, y un paso de 19 mm deja más o menos la mitad. La pared mínima de este generador (1 mm más la holgura del alojamiento) mantiene esa separación; los 20.2 mm por defecto coinciden además con la tira de níquel troquelada que se vende para ese paso.",
        },
        {
          q: "¿Cómo se montan las dos placas?",
          a: "Mete las celdas a presión en una placa, con el reborde hacia fuera, y luego da la vuelta a la segunda placa sobre los otros extremos: se genera como imagen especular, así que los alojamientos coinciden incluso en disposiciones escalonadas con un número par de filas.",
        },
      ],
      sizes: {
        title: "Formatos de celda",
        intro:
          "Alojamiento = diámetro de la celda + 0.3 mm de holgura; paso = alojamiento + 1.5 mm de pared, ambos con los valores por defecto. Cada fila abre el generador con esa celda.",
        head: ["Celda", "Ø celda", "Ø alojamiento", "Paso", ""],
        open: "Abrir",
        note: "Las celdas varían según el fabricante: las 18650 miden como mucho 18.4–18.6 mm, y las protegidas son más gruesas. Sube la holgura si las tuyas no entran.",
      },
    },
    params: {
      CELL: { label: "Celda", desc: "Diámetro nominal de 18.4 / 21.5 / 26.4 mm." },
      CLEARANCE: {
        label: "Holgura del alojamiento",
        desc: "Se suma al diámetro de la celda: alojamientos de 18.7 mm para 18650.",
      },
      LAYOUT: { label: "Disposición", desc: "Cuadrícula, o filas escalonadas (en panal) desplazadas medio paso." },
      ROWS: { label: "Filas", desc: "Hasta 3 por placa; imprime varias placas para packs más grandes." },
      COLS: { label: "Columnas", desc: "Hasta 5 por placa." },
      WALL: { label: "Pared entre celdas", desc: "1.5 da el paso habitual de 20.2 mm para 18650." },
      WIRE_HOLES: { label: "Agujeros para cables de balance", desc: "Agujeros de Ø3 entre celdas para los cables del BMS." },
      HEIGHT: { label: "Altura del soporte", desc: "Cuánto entra cada celda en la placa." },
      FRAME: { label: "Marco exterior", desc: "Con 0, las placas se juntan a tope manteniendo el paso." },
      END: {
        label: "Extremo",
        desc: "Abierto con reborde para soldar por puntos, o con fondo cerrado para almacenar.",
      },
      LIP: {
        label: "Ancho del reborde",
        desc: "Cuánto cubre el reborde el extremo de la celda; el resto es la ventana para la tira.",
      },
      STRIP_WIDTH: {
        label: "Ancho del canal para la tira",
        desc: "Canales de 0.8 mm de profundidad para tira de níquel de 7–8 mm; 0 para una cara plana.",
      },
    },
    example: "celdas 21700, escalonadas (en panal)",
    step: [
      "Cada placa de 3 × 5 se exporta como un sólido exacto de 188 caras: 158 planos y 30 cilindros reales (los 15 alojamientos de las celdas y las 15 ventanas para la tira), así que el paso, el alojamiento y la ventana se leen directamente en CAD cuando diseñas el pack a su alrededor.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo imprimo soportes para un pack 3S5P de celdas 18650?",
        a: "Abre https://www.forgent3d.com/es/generators/18650-battery-holder-generator?ROWS=3&COLS=5: una placa superior y otra inferior para 15 celdas con el paso habitual de 20.2 mm, alojamientos de Ø18.7 y canales de 8 mm para la tira de níquel. Imprime las dos, mete las celdas a presión en una y da la vuelta a la otra sobre ellas.",
      },
      {
        q: "Mi pack es más grande que 3 × 5. ¿Puedo hacer una sola placa para un 13S4P?",
        a: "Una placa admite como máximo 3 × 5 celdas; imprime varias. Con FRAME=0, las placas terminan justo medio paso más allá de las celdas exteriores, así que se juntan a tope manteniendo el paso: https://www.forgent3d.com/es/generators/18650-battery-holder-generator?ROWS=3&COLS=5&FRAME=0",
      },
    ],
    keywords: [
      "generador de soportes 18650",
      "soporte 18650 stl",
      "separador de celdas 18650 impreso en 3d",
      "soporte celdas 21700 stl",
      "soporte para pack de baterías 18650 paramétrico",
    ],
  },

  "pipe-clamp-generator": {
    copy: {
      name: "Generador de abrazaderas para tubo",
      title: "Generador de abrazaderas para tubo — DIN 3015 y omega, Ø6–101.6 | Forgent3D",
      description:
        "Abrazaderas para tubo de 6 a 101.6 mm de diámetro: semiabrazaderas de plástico DIN 3015-1 según la norma, u omega de dos agujeros avellanados. STL / STEP gratis.",
      h1: "Generador de abrazaderas para tubo: semiabrazaderas DIN 3015 y omegas de dos agujeros",
      intro:
        "Introduce el diámetro exterior del tubo (20 mm por defecto) y obtén las semiabrazaderas de plástico de una abrazadera DIN 3015-1 de serie ligera, dimensionadas según la tabla de la norma y con agujeros para tornillos M6, o una abrazadera omega de una pieza con dos agujeros para atornillar a la pared una tubería o un tubo eléctrico. Las semiabrazaderas DIN quedan separadas por la holgura de apriete de la norma, así que al apretar los tornillos sujetan el tubo.",
      whyPoints: [
        "Tamaños 1–8 de la DIN 3015-1 elegidos a partir del diámetro del tubo: largo del cuerpo, distancia entre tornillos y altura según la tabla de STAUFF",
        "Abrazadera omega de dos agujeros, con agujeros según ISO 273 y avellanados según ISO 10642 para M3–M5",
        "Holgura del agujero para tubos que miden más que su medida nominal",
        "STEP exacto para el CAD de instalaciones y máquinas, STL para imprimir",
      ],
      faqs: [
        {
          q: "¿Qué necesito además de las semiabrazaderas impresas?",
          a: "Una abrazadera DIN 3015-1 son las dos semiabrazaderas entre una placa de cubierta de acero arriba y una placa para soldar (o un carril) abajo, unidas por dos tornillos M6; el tamaño 3 lleva M6 × 40. Las placas y los tornillos son piezas estándar que se compran: el generador hace las semiabrazaderas de plástico.",
        },
        {
          q: "¿Cada cuánto pongo una abrazadera?",
          a: "La separación que recomienda HYDAC para las abrazaderas de serie ligera crece con el tubo: 1.0 m hasta 12.7 mm, 1.2 m hasta 22 mm, 1.5 m hasta 32 mm, 2.0 m hasta 38 mm, 2.7 m hasta 57 mm y 3.0 m hasta 75 mm.",
        },
        {
          q: "¿Por qué queda un hueco entre las dos semiabrazaderas?",
          a: "Es la holgura de apriete de la DIN 3015 (0.4–0.8 mm según el tamaño en los cuerpos de STAUFF): las semiabrazaderas tocan el tubo antes de tocarse entre sí, así que al apretar los tornillos se sujeta el tubo. Déjalo así: no lijes las caras de unión hasta dejarlas a ras.",
        },
      ],
      sizes: {
        title: "Tamaños DIN 3015 para tubos habituales",
        intro:
          "El tamaño que elige el generador con la holgura por defecto de 0.4 mm, con el largo de la pareja de semiabrazaderas, la distancia entre tornillos M6 y la altura según la tabla de STAUFF (todas de 30 mm de ancho). Cada fila abre el generador con ese tubo.",
        head: ["Ø tubo", "Tamaño", "Largo", "Entre tornillos", "Altura", ""],
        open: "Abrir",
        note: "Tubo de agua PPR: 20 (½\"), 25 (¾\"), 32 (1\"); un agujero que dejaría menos de 0.5 mm de plástico junto a un agujero de tornillo pasa al tamaño siguiente.",
      },
    },
    params: {
      PIPE_OD: {
        label: "Diámetro exterior del tubo",
        desc: "Mide el tubo; en la DIN 3015 decide el tamaño de la abrazadera.",
      },
      TYPE: { label: "Tipo de abrazadera", desc: "Semiabrazaderas de plástico DIN 3015-1, u omega de dos agujeros." },
      CLEARANCE: {
        label: "Holgura del agujero",
        desc: "Se suma al diámetro del tubo; el tubo de plástico suele medir un poco más que su medida nominal.",
      },
      WIDTH: { label: "Ancho (omega)", desc: "A lo largo del tubo." },
      TAB: { label: "Largo de la pestaña (omega)", desc: "Cada pestaña para tornillo, más allá del arco." },
      SCREW: { label: "Tornillo (omega)", desc: "Agujeros de paso según ISO 273, serie media." },
      COUNTERSINK: { label: "Agujeros avellanados (omega)", desc: "Asientos para cabezas avellanadas según ISO 10642." },
    },
    example: "omega de dos agujeros para un tubo de 25 mm",
    step: [
      "Una semiabrazadera DIN 3015 se exporta como un sólido exacto de 10 caras (7 planos y 3 cilindros reales: el medio agujero y los dos agujeros M6), y el archivo lleva la misma semiabrazadera dos veces. La omega tiene 18 caras: 12 planos, 4 cilindros y 2 conos para los avellanados.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo consigo una abrazadera DIN 3015 para un tubo de 20 mm?",
        a: "Abre https://www.forgent3d.com/es/generators/pipe-clamp-generator?PIPE_OD=20: las dos semiabrazaderas de plástico de una abrazadera de serie ligera de tamaño 3, de 50 × 30 mm, con tornillos M6 a 33 mm entre sí y un agujero de 20.4 mm. Las placas de acero (de cubierta y para soldar) y los tornillos se compran; exporta STEP para colocarla en CAD.",
      },
      {
        q: "Necesito una omega de dos agujeros para un tubo eléctrico de 25 mm, con tornillos M4.",
        a: "https://www.forgent3d.com/es/generators/pipe-clamp-generator?TYPE=saddle&PIPE_OD=25&SCREW=M4: una abrazadera en U de 25 mm de ancho con agujeros avellanados para M4 en las dos pestañas. Se imprime de lado para que las capas sigan el arco.",
      },
    ],
    keywords: [
      "generador de abrazaderas para tubo",
      "abrazadera din 3015 stl",
      "abrazadera para tubo hidráulico impresa en 3d",
      "abrazadera omega stl",
      "abrazadera para tubería impresa en 3d",
    ],
  },

  "hex-bit-holder-generator": {
    copy: {
      name: "Generador de soportes para puntas",
      title: "Generador de soportes para puntas — 1/4\", Gridfinity o pared | Forgent3D",
      description:
        "Soporte para puntas hexagonales de 1/4\", 4 mm o 5/16\": agujeros en cuadrícula o escalonados, hasta 80 puntas, de sobremesa, Gridfinity o de pared. STL / STEP gratis.",
      h1: "Generador de soportes para puntas: un bloque de agujeros hexagonales para puntas de destornillador",
      intro:
        "Elige la medida de las puntas y la cuadrícula (20 puntas de 1/4\" por defecto) y obtén un bloque de agujeros hexagonales verticales dimensionados a partir del vástago ISO 1173, de 10 mm de profundidad y con chaflán de entrada. Déjalo sobre el banco, mételo en una placa base Gridfinity o atorníllalo a la pared o a un panel perforado. La holgura de los agujeros es un parámetro porque cada impresora es distinta.",
      whyPoints: [
        "Vástagos hexagonales de 1/4\" (6.35), 4 mm y 5/16\", con agujeros según ISO 1173",
        "Hasta 10 × 8 puntas, en cuadrícula o escalonadas, con pared ajustable entre agujeros",
        "Pies Gridfinity idénticos a los de nuestros contenedores Gridfinity, o una placa de pared con el paso de 25 mm de los paneles perforados",
        "Se imprime de pie, tal como se usa, sin soportes",
      ],
      faqs: [
        {
          q: "¿Con cuánto ajuste quedarán las puntas?",
          a: "Depende de tu impresora: los agujeros que les han funcionado a otros van de 6.25 a unos 6.9 mm entre caras, y alguien encontró demasiado holgado uno de 6.5 mm. El valor por defecto es 6.35 + 0.15 = 6.5. Imprime primero un bloque pequeño y mueve la holgura de 0.05 en 0.05 mm.",
        },
        {
          q: "¿Caben las puntas largas para atornillador?",
          a: "Sí. Las puntas de inserción miden 25 mm y las puntas largas para atornillador 50, 70 o 90 mm (Bosch, Wiha, Vessel, DeWalt), pero comparten el mismo vástago hexagonal de 1/4\", así que entran en los mismos agujeros: las largas simplemente sobresalen más.",
        },
        {
          q: "¿Qué tornillos sujetan la versión de pared?",
          a: "Tornillos para madera de cabeza avellanada de unos 3.5 mm (#6): la placa tiene agujeros de 3.9 mm con avellanados de 8.3 mm, separados 25 mm para coincidir con el panel perforado.",
        },
      ],
    },
    params: {
      BIT_SIZE: {
        label: "Vástago de la punta",
        desc: "Vástago hexagonal, medida entre caras según ISO 1173: 3.96 / 6.35 / 7.93 mm.",
      },
      CLEARANCE: {
        label: "Holgura del agujero",
        desc: "Se suma a la medida entre caras; 0.15 es la mediana de los soportes publicados.",
      },
      DEPTH: { label: "Profundidad del agujero", desc: "Cuánto entra cada punta, sobre un fondo de 2 mm." },
      COLUMNS: { label: "Columnas", desc: "Puntas por fila." },
      ROWS: { label: "Filas", desc: "Hasta 80 puntas en un bloque." },
      GAP: { label: "Pared entre agujeros", desc: "Más separación = más fácil agarrar una punta." },
      PATTERN: { label: "Disposición", desc: "Cuadrícula o filas escalonadas (en panal)." },
      MOUNT: {
        label: "Montaje",
        desc: "De sobremesa, con pies Gridfinity o una placa para atornillar con el paso de 25 mm de los paneles perforados.",
      },
    },
    example: "24 puntas en una placa de pared / panel perforado",
    step: [
      "El bloque de 20 puntas por defecto se exporta como un sólido exacto de 270 caras, 266 de ellas planas: cada pared hexagonal y cada chaflán de entrada es una cara plana real, así que el CAD mide directamente la medida entre caras y el paso entre agujeros. La versión Gridfinity añade los cilindros y los conos de los pies estándar (320 caras).",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago un soporte Gridfinity para puntas de destornillador de 1/4\"?",
        a: "Abre https://www.forgent3d.com/es/generators/hex-bit-holder-generator?MOUNT=gridfinity: 20 agujeros hexagonales verticales repartidos sobre un bloque Gridfinity de 2 × 1 con los mismos pies que nuestros contenedores Gridfinity, así que encaja en una placa base estándar. Cambia COLUMNS y ROWS para más o menos puntas.",
      },
      {
        q: "Mi soporte de puntas impreso queda demasiado justo (o demasiado holgado). ¿Qué cambio?",
        a: "La holgura del agujero: cada impresora es distinta, y los agujeros que les han funcionado a otros van de 6.25 a unos 6.9 mm entre caras para puntas de 6.35 mm. Imprime primero una probeta de tres agujeros (https://www.forgent3d.com/es/generators/hex-bit-holder-generator?COLUMNS=3&ROWS=1&CLEARANCE=0.05) y mueve CLEARANCE de 0.05 en 0.05 mm hasta que la punta quede sujeta.",
      },
    ],
    keywords: [
      "generador de soportes para puntas",
      "soporte para puntas de destornillador stl",
      "organizador de puntas impreso en 3d",
      "soporte puntas gridfinity",
      "organizador de puntas hexagonales 1/4",
    ],
  },

  "spool-holder-generator": {
    copy: {
      name: "Generador de portabobinas",
      title: "Generador de portabobinas — Soporte de bobina de filamento | Forgent3D",
      description:
        "Portabobinas a tu medida: rodillos sobre rodamientos 608 con barra de seguridad, para bobinas de 1–5 kg y hasta cuatro a la vez, o soportes de pared. STL / STEP gratis.",
      h1: "Generador de portabobinas: soportes de rodillos y de pared a la medida de tus bobinas",
      intro:
        "Introduce la bobina más grande y la más ancha que uses (Ø200 × 70 mm por defecto) y obtén un soporte de rodillos: la bobina apoya por sus bordes sobre dos rodillos que giran sobre rodamientos 608, sin tocar nunca el agujero central, que es lo que más varía de una marca a otra, y una barra de seguridad impide que una bobina casi vacía se salga trepando. O bien obtén un par de soportes de pared para una barra. Los rodillos están colocados según la geometría medida en el popular soporte de Lattenberg.",
      whyPoints: [
        "Separación y altura de los rodillos calculadas a partir de la bobina: una bobina de Ø200 apoya a 42.5°, como en el soporte de Lattenberg",
        "Rodamientos 608, 626 o 6001 en los extremos de los rodillos, sobre varilla roscada comprada: sin ejes impresos que se partan",
        "Barra de seguridad para que una bobina casi vacía no se levante",
        "De una a cuatro bobinas una al lado de otra, o soportes de pared para una barra",
      ],
      faqs: [
        {
          q: "¿Qué necesito además de las piezas impresas?",
          a: "Para un soporte de rodillos: cuatro rodamientos (dos por rodillo), dos varillas roscadas con tuercas como ejes (M8 para el 608) y una varilla o un listón redondo para la barra de seguridad. Los ejes impresos se dejaron fuera a propósito: quienes usan soportes con pasadores impresos cuentan que se rompen.",
        },
        {
          q: "¿En qué filamento lo imprimo?",
          a: "Los soportes de pared para barra más populares se imprimen en PETG; los soportes de rodillos suelen imprimirse con 4–5 paredes y 15–25 % de relleno, y el soporte de un maker con 3 paredes y 20 % se rompió enseguida. Imprime los soportes de pared de lado, tal como vienen colocados: impresos de pie, las capas pueden partirse con el peso de una bobina llena.",
        },
        {
          q: "¿Caben tanto bobinas pequeñas como grandes?",
          a: "El soporte admite desde la bobina más grande que indiques hasta una mínima calculada a partir de ella (unos Ø150 con los Ø200 por defecto), así que una bobina de 1 kg también cabe en un soporte para 3–5 kg. Para minibobinas de 250–500 g, pon como diámetro de bobina el de la minibobina.",
        },
      ],
    },
    params: {
      TYPE: { label: "Tipo de soporte", desc: "Un soporte de rodillos, o soportes de pared para una barra." },
      SPOOL_D: {
        label: "Diámetro de la bobina más grande",
        desc: "Las bobinas de 1 kg miden unos 195–203 mm; las de 3 kg, unos 250; las de 5 kg, 300.",
      },
      SPOOL_W: { label: "Bobina más ancha", desc: "Las bobinas de 1 kg miden 57–69 mm de ancho." },
      BEARING: { label: "Rodamiento", desc: "Dos por rodillo, metidos a presión en sus extremos." },
      BEARING_FIT: { label: "Ajuste del alojamiento del rodamiento", desc: "Se suma al diámetro exterior del rodamiento." },
      COUNT: { label: "Bobinas una al lado de otra", desc: "Puestos en un mismo soporte." },
      ROD_D: { label: "Diámetro de la barra", desc: "La barra de seguridad (rodillos) o la barra para las bobinas (pared)." },
      ROD_FIT: { label: "Ajuste del agujero de la barra", desc: "Se suma al diámetro de la barra." },
    },
    example: "soporte de rodillos para bobinas de 3 kg (Ø250 × 110)",
    step: [
      "Se exporta como tres sólidos exactos (lateral, rodillo y separador, colocados tantas veces como los necesita el soporte) con 33 caras: 19 planos, 12 cilindros reales (los alojamientos de los rodamientos, los agujeros del eje y de la barra de seguridad, los rodillos) y 2 conos (las entradas de los alojamientos).",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago un portabobinas de rodillos para bobinas de 1 kg?",
        a: "Abre https://www.forgent3d.com/es/generators/spool-holder-generator?SPOOL_D=200&SPOOL_W=70: dos laterales y dos rodillos con rodamientos 608 en sus extremos; una bobina de Ø200 × 70 apoya por sus bordes con la geometría medida en el soporte de rodillos de Lattenberg, uno de los más impresos. Tú pones cuatro rodamientos 608, varilla roscada M8 con tuercas para los ejes y una varilla de Ø22 como barra de seguridad.",
      },
      {
        q: "¿Puede hacer soportes de pared para una barra que sostenga varias bobinas?",
        a: "Sí: https://www.forgent3d.com/es/generators/spool-holder-generator?TYPE=wall&ROD_D=16 da dos soportes para una barra de 16 mm, con su centro lo bastante lejos de la pared para una bobina de Ø200. Elige una barra que pase por el agujero central de tus bobinas: las de 1 kg tienen agujeros de 50–72 mm, pero las de 5–8 kg solo de 32–36 mm.",
      },
    ],
    keywords: [
      "generador de portabobinas",
      "portabobinas filamento stl",
      "soporte de bobina de filamento impreso en 3d",
      "soporte bobina filamento rodamientos 608",
      "portabobinas de pared",
    ],
  },

  "shelf-bracket-generator": {
    copy: {
      name: "Generador de escuadras para estantería",
      title: "Generador de escuadras para estantería — Soporte de balda | Forgent3D",
      description:
        "Escuadra de pared imprimible en 3D para baldas de 100–250 mm: tirante diagonal, tornillos avellanados de 4 o 5 mm accesibles o un tope delantero. STL / STEP gratis.",
      h1: "Generador de escuadras para estantería: soportes de pared a la medida de tu balda",
      intro:
        "Introduce el fondo de tu balda (200 mm por defecto) y obtén una escuadra de pared con tirante diagonal. El brazo termina 10 mm antes del borde delantero de la balda, como en las escuadras comerciales, la pata de pared mide tres cuartos del brazo, y dos tornillos avellanados van a la pared y dos hacia arriba en la balda, cada uno con un recorrido recto para el destornillador. O elige un tope delantero: una balda de exactamente ese fondo cae detrás de él, sin tornillos en la balda.",
      whyPoints: [
        "Brazo y pata de pared según el fondo de la balda, en las proporciones de las escuadras comerciales (Knape & Vogt, Everbilt)",
        "Se llega a todos los tornillos: un recorrido recto de 12 mm para el destornillador, y el tornillo superior de la pared se aprieta a través de un agujero en el tirante",
        "Tornillos hacia arriba en la balda, o un tope delantero tras el que cae la balda",
        "Se exporta tumbada de lado, tal como hay que imprimirla",
      ],
      faqs: [
        {
          q: "¿En qué posición la imprimo?",
          a: "De lado, tal como se exporta, para que cada capa abarque la escuadra entera. Impresa de pie, las capas cruzan una pata: las tres escuadras impresas de pie de un maker se rompieron en menos de cinco minutos con 2.5 kg, y en las pruebas de CNC Kitchen los ganchos impresos de pie aguantaron solo cerca de la mitad de carga que los mismos ganchos impresos tumbados.",
        },
        {
          q: "¿Qué filamento y qué tornillos uso?",
          a: "Tornillos para madera de cabeza avellanada, de 4 mm (#8) o 5 mm (#10). Que la escuadra se agriete al apretar los tornillos es la queja más común en las escuadras impresas populares; un usuario señala que el PETG resiste mejor sin partirse. Mejor PETG, y deja de apretar cuando la cabeza quede a ras.",
        },
        {
          q: "¿Cuánto peso aguanta?",
          a: "No damos una cifra: ninguna de las escuadras impresas para estantería que encontramos tiene una prueba de carga definida, y el resultado depende del filamento, las paredes, el relleno y los tornillos. Sube el grosor de las barras para baldas pesadas, y prueba tu impresión con carga antes de fiarte de ella.",
        },
      ],
    },
    params: {
      SHELF_D: {
        label: "Fondo de la balda",
        desc: "La balda, de delante atrás. Las escuadras de 8 y 10 pulgadas son las más vendidas; 250 aún cabe en una cama de 256 mm.",
      },
      FIXING: {
        label: "Fijación de la balda",
        desc: "Dos tornillos hacia arriba en la balda, o un tope delantero tras el que cae la balda (hecho para este fondo exacto; 7 mm más largo que él).",
      },
      SCREW: { label: "Tornillo para madera", desc: "Tornillos para madera de cabeza avellanada, #8 o #10 en medidas de EE. UU." },
      WIDTH: { label: "Ancho de la escuadra", desc: "A lo largo de la pared; 25, como la mayoría de escuadras impresas." },
      BAR_T: {
        label: "Grosor de las barras",
        desc: "La pata, el brazo y el tirante. Más gruesas para cargas mayores; las escuadras pequeñas con barras gruesas se convierten en una cartela maciza.",
      },
    },
    example: "escuadra reforzada para una balda de 250 mm, tornillos de 5 mm",
    step: [
      "Se exporta como un sólido exacto de 32 caras: 20 planos, 8 cilindros reales (los cuatro agujeros de tornillo, el agujero de acceso para el destornillador a través del tirante y las esquinas redondeadas de la ventana) y 4 conos (los avellanados).",
    ],
    aiFaqs: [
      {
        q: "¿Cómo imprimo en 3D una escuadra para una balda de 20 cm de fondo?",
        a: "Abre https://www.forgent3d.com/es/generators/shelf-bracket-generator?SHELF_D=200: una escuadra de pared con tirante diagonal, brazo de 190 mm y pata de pared de 142.5 mm, dos tornillos avellanados de 4 mm a la pared y dos hacia arriba en la balda, cada uno con un recorrido recto de 12 mm para el destornillador. Imprímela tumbada de lado, tal como se exporta.",
      },
      {
        q: "Mi balda es un tablero de 18 mm, de 195 mm de fondo, y no quiero tornillos en ella.",
        a: "https://www.forgent3d.com/es/generators/shelf-bracket-generator?FIXING=Front%20lip&SHELF_D=195: el brazo termina en un tope de 10 mm y la balda de 195 mm cae entre la pared y el tope con 1 mm de margen; solo quedan los tornillos de la pared.",
      },
    ],
    keywords: [
      "generador de escuadras para estantería",
      "escuadra para estantería impresa en 3d",
      "escuadra soporte para balda",
      "soporte de balda stl",
      "escuadra reforzada de pared",
    ],
  },

  "pegboard-hook-generator": {
    copy: {
      name: "Generador de ganchos para tablero perforado",
      title: "Generador de ganchos para tablero perforado — Skådis y 1/4\" | Forgent3D",
      description:
        "Ganchos imprimibles en 3D para tu tablero perforado: ranuras tipo Skådis, de 1/4\" y 3/16\" de EE. UU., metálicos o con agujeros de 6 mm a 25 o 16 mm. STL / STEP gratis.",
      h1: "Generador de ganchos para tablero perforado: ganchos que encajan en tu tablero",
      intro:
        "Elige tu tablero (por defecto, ranuras compatibles con Skådis, o un tablero perforado de agujeros redondos estadounidense o métrico) y fija cuánto sobresale el gancho y cuánto se levanta su punta. El gancho cuelga de dos aberturas, una encima de otra, así que no se cae cuando descuelgas una herramienta; nada se encaja a presión ni se gira: se pone y se saca del mismo modo. El tamaño de los agujeros, el paso y el grosor del tablero salen de las especificaciones de los fabricantes y de los ganchos más impresos para cada tablero.",
      whyPoints: [
        "Ocho tipos de tablero, desde ranuras tipo Skådis hasta el tablero de fibra estadounidense de 1/4\" y los tableros metálicos de 1.2 mm",
        "Clavijas dimensionadas para el agujero real, p. ej. 9/32\" en el tablero perforado de 1/4\", con una holgura de ajuste regulable",
        "Dos anclajes, uno encima de otro, para que el gancho no se mueva al descolgar una herramienta",
        "Gancho simple o doble, alcance de 10–100 mm",
      ],
      faqs: [
        {
          q: "El gancho entra demasiado justo, o baila. ¿Qué cambio?",
          a: "Los tableros varían: los de tipo Skådis miden 4.5–5.5 mm de grosor, y los metálicos 1.2–1.7 mm. Sube la holgura de ajuste si el gancho no asienta; un diseñador popular ensanchó la ranura del tablero a 5.2 mm para que entrara en tableros de 5 mm. Si baila en un tablero metálico fino, elige el tablero metálico en la lista: los ganchos hechos para tableros de 5 mm quedan flojos en metal de 1.2 mm.",
        },
        {
          q: "¿Por qué los ganchos para tableros métricos quedan flojos en mi tablero perforado estadounidense?",
          a: "El tablero perforado estadounidense «de 1/4\"» tiene en realidad agujeros de 9/32\" (7.1 mm), mientras que los tableros métricos suelen tener agujeros de 6 mm. Usuarios de un juego popular de ganchos métricos cuentan que lo escalan un 6.5 % para los tableros estadounidenses. Elige aquí el tablero estadounidense y las clavijas quedan dimensionadas para sus agujeros.",
        },
        {
          q: "¿Cómo lo imprimo, y en qué?",
          a: "Túmbalo de lado para que las capas sigan el brazo: los makers cuentan que los ganchos impresos en plano son mucho más resistentes que los impresos de pie. Varios prefieren PETG a PLA; el PETG también sale un poco más holgado, así que puede que necesites menos holgura. Skådis es una marca registrada de IKEA; estos ganchos son compatibles, no productos de IKEA.",
        },
      ],
    },
    params: {
      BOARD: {
        label: "Tablero",
        desc: "Fija a la vez la forma y el tamaño del agujero, el paso y el grosor del tablero: ranuras tipo Skådis (tablero de 5 mm o metal de 1.2 mm), tableros perforados estadounidenses de 1/4\" y 3/16\", tablero perforado metálico estadounidense, agujeros de 6 mm en cuadrículas de 25 o 16 mm, agujeros de 5 mm a 25 mm.",
      },
      CLEARANCE: {
        label: "Holgura de ajuste",
        desc: "Se resta de las clavijas y las pestañas; la mitad ensancha la ranura en la que entra el tablero. Súbela si el gancho no asienta.",
      },
      STYLE: { label: "Estilo", desc: "El gancho doble repite el gancho a un paso de agujero a lo largo del tablero." },
      REACH: { label: "Alcance", desc: "Profundidad interior desde la placa trasera hasta la punta." },
      TIP: { label: "Altura de la punta", desc: "Cuánto se levanta la punta; 0 para una clavija recta." },
    },
    example: "gancho de 50 mm para tablero perforado estadounidense de 1/4\"",
    step: [
      "El gancho compatible con Skådis por defecto se exporta como un sólido exacto de 25 caras: 21 planos y 4 cilindros reales (las pestañas redondas que asientan en los extremos de las ranuras). En los tableros de agujeros redondos, la clavija curvada añade conos.",
    ],
    aiFaqs: [
      {
        q: "¿Cómo hago un gancho impreso en 3D para un tablero perforado estándar de 1/4\"?",
        a: "Abre https://www.forgent3d.com/es/generators/pegboard-hook-generator?BOARD=US%20pegboard%201%2F4&REACH=50: un gancho de 50 mm cuya clavija superior atraviesa el tablero y se curva hacia abajo por detrás, con una clavija inferior corta en el agujero de debajo. Las clavijas están dimensionadas para los agujeros reales de 9/32\" (7.1 mm) del tablero de fibra de 1/4\", y por eso los ganchos hechos para tableros métricos de 25 mm quedan flojos en él.",
      },
      {
        q: "Necesito un gancho doble y ancho para un tablero tipo Skådis.",
        a: "https://www.forgent3d.com/es/generators/pegboard-hook-generator?STYLE=Double%20hook&REACH=40&TIP=8: dos brazos de gancho separados un paso de ranura (40 mm) sobre una placa trasera común, cada uno colgado de dos ranuras mediante pestañas redondas que caen hasta el fondo de las ranuras. Empújalo recto, déjalo caer y sácalo del mismo modo.",
      },
    ],
    keywords: [
      "generador de ganchos para tablero perforado",
      "ganchos tablero perforado 3d",
      "gancho skadis stl",
      "ganchos para panel perforado impresos en 3d",
      "gancho para tablero perforado de 1/4",
    ],
  },

  "raspberry-pi-case-generator": {
    copy: {
      name: "Generador de carcasas para Raspberry Pi y Arduino",
      title: "Generador de carcasas Raspberry Pi — Pi 5, Pi 4, Zero y Arduino | Forgent3D",
      description:
        "Carcasa imprimible en 3D para Raspberry Pi 5, 4 B, 3 B+, Zero 2 W o Arduino Uno R3 / R4: aberturas según los planos oficiales y tapa atornillada. STL / STEP gratis.",
      h1: "Generador de carcasas para Raspberry Pi y Arduino: aberturas colocadas según los planos oficiales",
      intro:
        "Elige tu placa (Raspberry Pi 5 por defecto) y obtén una carcasa de dos piezas trazada a partir del plano mecánico oficial de la placa o de su archivo STEP. Cada conector tiene una abertura que llega hasta la línea de separación, así que la tapa baja por encima de los puertos; las aberturas USB-C y micro-USB están dimensionadas para la clavija, no solo para el conector de la placa. Los propios tornillos de la placa la sujetan sobre los separadores y cierran la tapa, así que no hay una tapa a presión que se afloje.",
      whyPoints: [
        "Seis placas, cada agujero y cada puerto según los planos oficiales: Pi 5, Pi 4 B, Pi 3 B+, Pi Zero 2 W, Arduino Uno R3 y R4",
        "Aberturas dimensionadas para clavijas USB, con una holgura que puedes subir para clavijas HDMI o DC voluminosas",
        "Tapa atornillada: los tornillos de montaje de la placa cierran la carcasa",
        "Ranuras sobre los pines, rejillas sobre el procesador y la tarjeta SD accesible desde fuera",
      ],
      faqs: [
        {
          q: "¿Qué tornillos necesito?",
          a: "Placas Raspberry Pi: cuatro tornillos avellanados M2.5 × 12. Arduino Uno R3: cuatro M3 × 16; el Uno R4 lleva tres más un pasador de centrado impreso. Suben a través del fondo, los separadores y la placa hasta columnas en la tapa. Las tapas a presión son la queja más común en las carcasas impresas populares («la tapa queda un poco floja»), por eso esta va atornillada.",
        },
        {
          q: "¿Caben mis cables?",
          a: "Las aberturas USB-C y micro-USB están dimensionadas para el sobremoldeado de la clavija que indican las especificaciones USB: una queja frecuente con las carcasas de aberturas del tamaño del conector es que los cables micro-HDMI no entran. Las clavijas HDMI, de audio y DC no tienen un tamaño estándar: si la tuya es voluminosa, sube la holgura de los puertos.",
        },
        {
          q: "¿Qué filamento uso para una Raspberry Pi 5?",
          a: "PETG o mejor: un maker cuenta que una Pi 5 ablandó una base de PLA. Deja activadas las rejillas de la tapa. La carcasa también deja 0.5 mm alrededor de toda la placa, porque las carcasas que se ciñen al PCB han agrietado placas durante el montaje.",
        },
        {
          q: "¿Por qué no está el ESP32 DevKit en la lista?",
          a: "Las placas DevKitC de Espressif no tienen agujeros de montaje, y las muchas placas clónicas no tienen un plano oficial del que partir. Elige la placa más parecida y usa “AI edit” para cambiarla. Raspberry Pi y Arduino son marcas registradas de sus respectivos propietarios; este generador hace carcasas compatibles y no tiene relación con ellos.",
        },
      ],
    },
    params: {
      BOARD: {
        label: "Placa",
        desc: "El contorno de la placa, los agujeros de montaje y todos los conectores salen de los planos y archivos STEP oficiales.",
      },
      WALL: { label: "Grosor de pared", desc: "2 mm, como las carcasas más impresas." },
      PORT_CLEARANCE: {
        label: "Holgura de los puertos",
        desc: "Se deja alrededor de cada conector. Súbela para clavijas HDMI, de audio o DC voluminosas.",
      },
      HEADER_SLOTS: {
        label: "Ranuras para los pines en la tapa",
        desc: "Una ranura sobre los pines GPIO / Arduino para cables de puente (jumpers).",
      },
      VENTS: { label: "Rejillas en la tapa", desc: "Ranuras de ventilación sobre el procesador." },
    },
    example: "carcasa para Pi 4 con paredes más gruesas y aberturas de puertos más holgadas",
    step: [
      "La carcasa de la Raspberry Pi 5 se exporta como dos sólidos exactos, base y tapa, con 196 caras: 160 planos, 32 cilindros reales (separadores, columnas de la tapa, agujeros de tornillo y guías, esquinas redondeadas) y 4 conos (los avellanados bajo el fondo).",
    ],
    aiFaqs: [
      {
        q: "¿Cómo consigo una carcasa imprimible en 3D para una Raspberry Pi 4?",
        a: "Abre https://www.forgent3d.com/es/generators/raspberry-pi-case-generator?BOARD=Raspberry%20Pi%204%20Model%20B: una carcasa de dos piezas trazada a partir del plano mecánico oficial. Cada puerto tiene su abertura, los pines GPIO una ranura en la tapa, y cuatro tornillos avellanados M2.5 × 12 suben a través del fondo y de la placa hasta columnas en la tapa, de modo que los mismos tornillos sujetan la placa y cierran la carcasa.",
      },
      {
        q: "¿Puede hacer una carcasa para Arduino Uno sin las rejillas?",
        a: "Sí: https://www.forgent3d.com/es/generators/raspberry-pi-case-generator?BOARD=Arduino%20Uno%20R3&VENTS=false da aberturas para el USB-B y el conector DC dimensionadas para las clavijas, ranuras para los pines en la tapa, y se cierra con cuatro tornillos M3 × 16. Para el Uno R4 Minima o WiFi elige esa placa: uno de sus agujeros queda demasiado cerca del conector DC para una columna, así que lleva un pasador de centrado y tres tornillos.",
      },
    ],
    keywords: [
      "generador de carcasas raspberry pi",
      "carcasa raspberry pi 5 stl",
      "caja raspberry pi 4 impresa en 3d",
      "carcasa arduino uno stl",
      "carcasa raspberry pi impresión 3d",
    ],
  },

  "wall-hook-generator": {
    copy: {
      name: "Generador de ganchos de pared",
      title: "Generador de ganchos de pared — Tornillo, adhesivo o puerta | Forgent3D",
      description:
        "Ganchos de pared imprimibles en 3D: con tornillos avellanados, para tiras adhesivas Command o para puerta. Simples, dobles o hasta cinco en fila. STL / STEP gratis.",
      h1: "Generador de ganchos de pared: con tornillos, adhesivos o para colgar de la puerta",
      intro:
        "Elige cómo se monta el gancho (tornillos avellanados, una tira 3M Command o sobre una puerta de tu grosor) y luego fija su profundidad, su punta y su ancho. Los agujeros de tornillo quedan por encima del gancho para que llegue el destornillador; la placa adhesiva tiene las medidas de las propias tiras de 3M, con la lengüeta de retirada libre; la pletina de puerta se ajusta a la puerta con 0.8 mm de margen. Un gancho, dos superpuestos o una fila de hasta cinco.",
      whyPoints: [
        "Tres formas de montaje: tornillos avellanados, tiras Command medianas o grandes, o sobre una puerta de 19–45 mm",
        "Agujeros de tornillo por encima del gancho, al alcance del destornillador, con plástico de sobra bajo el avellanado para que no se parta",
        "Simple, doble superpuesto o hasta cinco en fila para llaves y abrigos",
        "Se exporta para imprimirlo de lado, con las capas siguiendo el gancho",
      ],
      faqs: [
        {
          q: "¿En qué posición lo imprimo?",
          a: "De lado, para que las capas rodeen la J. En las pruebas de CNC Kitchen, los mismos ganchos impresos de pie se rompieron con la mitad de carga o menos, abriéndose entre capas. Para cargas pesadas usa PETG o ASA y más paredes; hay quien cuenta que los ganchos de puerta impresos en PLA se parten por la esquina superior.",
        },
        {
          q: "¿Cuánto aguanta la versión adhesiva?",
          a: "Lo que aguante la tira: 3M indica 5 lb (unos 2.3 kg) para las tiras Command grandes y 3 lb (unos 1.4 kg) para las medianas, y no son para estancias húmedas. Presiona la placa con firmeza, espera una hora antes de colgar nada y retira la tira estirándola recta hacia abajo a lo largo de la pared, nunca tirando hacia ti. Los makers cuentan que la cinta se suelta antes que el plástico.",
        },
        {
          q: "El tornillo ha partido el gancho. ¿Y ahora?",
          a: "Que los tornillos demasiado apretados o demasiado gruesos partan la placa es la queja más común sobre los ganchos de pared impresos. Aquí los agujeros son de paso según ISO 273, con avellanados para cabezas estándar de tornillo para madera y 3 mm de plástico por debajo; deja de apretar cuando la cabeza quede a ras. Command es una marca registrada de 3M; la versión adhesiva está hecha para encajar con sus tiras.",
        },
      ],
    },
    params: {
      MOUNT: {
        label: "Montaje",
        desc: "Tornillos avellanados de 3.5, 4 o 5 mm; una tira Command mediana (16 × 46) o grande (19 × 69); o sobre una puerta de armario de 19 mm o una puerta de 35, 40 o 45 mm.",
      },
      STYLE: { label: "Estilo", desc: "Una J, o dos superpuestas en una misma placa." },
      HOOKS: { label: "Ganchos en fila", desc: "Uno al lado de otro en una placa: un colgador de llaves o un perchero." },
      DEPTH: { label: "Profundidad", desc: "Profundidad interior desde la placa hasta la punta." },
      TIP: { label: "Altura de la punta", desc: "Cuánto se levanta la punta; 0 para una espiga recta." },
      WIDTH: { label: "Ancho", desc: "Se ensancha solo cuando la cabeza de un tornillo o una tira necesita más." },
      THICKNESS: { label: "Grosor", desc: "De la placa y de la J; más grueso para bolsos pesados y herramientas." },
    },
    example: "colgador de llaves: cuatro ganchos pequeños en fila",
    step: [
      "El gancho atornillado por defecto se exporta como un sólido exacto de 16 caras: 8 planos, 6 cilindros reales (los agujeros de tornillo, y el interior redondeado y la punta del gancho) y 2 conos (los avellanados).",
    ],
    aiFaqs: [
      {
        q: "¿Puedo imprimir en 3D un gancho para toallas que se pegue sin taladrar?",
        a: "Sí: https://www.forgent3d.com/es/generators/wall-hook-generator?MOUNT=Adhesive%20strip%2019&STYLE=Double&DEPTH=25 da dos ganchos superpuestos sobre una placa trasera dimensionada para una tira 3M Command grande (19 × 69 mm), con la lengüeta de retirada libre por debajo. 3M indica 5 lb (unos 2.3 kg) para la tira grande y dice que no es para estancias húmedas, así que cuelga la toalla fuera de la ducha.",
      },
      {
        q: "Necesito un gancho que cuelgue sobre una puerta de 40 mm.",
        a: "https://www.forgent3d.com/es/generators/wall-hook-generator?MOUNT=Over%20a%2040%20mm%20door&STYLE=Double da una pletina de 3 mm que pasa por encima de la puerta con 0.8 mm de holgura, y dos ganchos que cuelgan por el lado de dentro. Comprueba primero el hueco sobre tu puerta: una pletina demasiado gruesa impide cerrar la puerta, la queja más común sobre los ganchos de puerta impresos.",
      },
    ],
    keywords: [
      "generador de ganchos de pared",
      "gancho de pared impreso en 3d",
      "gancho adhesivo command stl",
      "gancho para puerta 3d",
      "colgador de pared stl",
    ],
  },

  "phone-stand-generator": {
    copy: {
      name: "Generador de soportes para móvil",
      title: "Generador de soportes para móvil — De escritorio, con carga | Forgent3D",
      description:
        "Soporte de móvil imprimible en 3D a la medida de tu móvil con funda: ángulo de 45–75°, altura para cargarlo y paso para el cable; también tableta. STL / STEP gratis.",
      h1: "Generador de soportes para móvil: un soporte de escritorio para tu móvil con su funda",
      intro:
        "Introduce el grosor de tu móvil medido con la funda (11 mm por defecto), elige el ángulo de visión y la altura del apoyo, y obtén un soporte en A de una sola pieza como los impresos más descargados. El respaldo es lo bastante largo para sostener el móvil más allá de su mitad, un hueco en el labio delantero deja libres el puerto de carga y la parte inferior de la pantalla, y el cable sale por una abertura trasera por la que pasa el conector.",
      whyPoints: [
        "El apoyo se ajusta a tu móvil con su funda, no al móvil desnudo",
        "Altura del apoyo para cargarlo en vertical, con una abertura para el cable por la que pasa el conector",
        "Respaldo dimensionado para el dispositivo (móvil en vertical u horizontal, o tableta), para que no vuelque hacia atrás",
        "Huecos para cuatro patas de goma de 8 mm, para que no se mueva de la mesa",
      ],
      faqs: [
        {
          q: "Mi móvil con funda no cabe en el soporte que imprimí.",
          a: "Es la queja más común sobre los soportes para móvil impresos, y las versiones «para móviles más gruesos» de los soportes populares se descargan más que los originales. Mide tu móvil con la funda e introduce esa medida; el apoyo añade 1 mm de holgura.",
        },
        {
          q: "¿Cómo lo cargo mientras está en el soporte?",
          a: "Deja activado el hueco para el cable y sube la altura del apoyo hasta que el conector quepa bajo el móvil; los conectores acodados necesitan menos. La abertura trasera es mayor que la zona de exclusión del conector USB-C que especifica Apple (12.45 × 6.60 mm), así que el conector pasa por ella, y el hueco del labio deja libres el puerto y la parte inferior de la pantalla para deslizar el dedo.",
        },
        {
          q: "¿Cómo lo imprimo?",
          a: "Túmbalo de lado en el laminador, con el perfil sobre la cama: sin soportes, y con las capas siguiendo los pliegues. Pega cuatro patas de silicona de 8 mm en los huecos de abajo si resbala en tu mesa.",
        },
      ],
    },
    params: {
      DEVICE: {
        label: "Para",
        desc: "Dimensiona el respaldo: 163.3 mm para un móvil grande en vertical, 77.9 en horizontal, 179.5 para una tableta.",
      },
      THICKNESS: {
        label: "Grosor del móvil con funda",
        desc: "Mide con la funda puesta: un móvil con funda MagSafe ronda los 11, con una funda antigolpes llega a 17.",
      },
      ANGLE: { label: "Ángulo de visión", desc: "Cuánto se inclina el móvil hacia atrás respecto a la mesa." },
      REST_HEIGHT: {
        label: "Altura del apoyo",
        desc: "Súbela para que quepa el conector de carga bajo un móvil en vertical.",
      },
      WIDTH: { label: "Ancho del soporte", desc: "Más ancho para tabletas." },
      CABLE: {
        label: "Hueco para el cable de carga",
        desc: "Una abertura detrás para el cable, lo bastante grande para que pase el conector.",
      },
    },
    example: "para un móvil con funda gruesa, un poco más vertical",
    step: [
      "Se exporta como un sólido exacto de 33 caras: 27 planos y 6 cilindros reales (los dos pliegues redondeados de arriba y los cuatro huecos para patas de goma).",
    ],
    aiFaqs: [
      {
        q: "¿Cómo imprimo en 3D un soporte para móvil en el que pueda cargarlo mientras está en vertical?",
        a: "Abre https://www.forgent3d.com/es/generators/phone-stand-generator?THICKNESS=12&REST_HEIGHT=35&WIDTH=80: el apoyo queda 35 mm por encima de la mesa para que quepa un conector USB-C bajo un móvil en vertical, un hueco en el labio delantero deja libre el puerto, y el cable sale por una abertura trasera por la que pasa el conector entero. Pon en THICKNESS el grosor de tu móvil medido con la funda.",
      },
      {
        q: "¿El mismo soporte puede sostener una tableta con funda gruesa?",
        a: "Sí: https://www.forgent3d.com/es/generators/phone-stand-generator?DEVICE=Tablet%2C%20landscape&THICKNESS=16&WIDTH=100 da un respaldo dimensionado para una tableta en horizontal (179.5 mm, el ancho de un iPad de 11 pulgadas) y un apoyo que admite 16 mm con la funda. Los soportes con esta forma se venden igual para tabletas, con un apoyo más ancho.",
      },
    ],
    keywords: [
      "generador de soportes para móvil",
      "soporte para móvil impreso en 3d",
      "soporte móvil escritorio stl",
      "soporte para celular 3d",
      "soporte para móvil y tablet con carga",
    ],
  },
};
