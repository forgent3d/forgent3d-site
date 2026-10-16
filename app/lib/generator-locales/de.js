// Generator landing pages in this language (/de/generators/…), merged into GENERATORS by ../generators.js.
// Translated from the English entries: a generator is published in this language once its entry has `copy`.
// Shape and rules (numbers, links, lengths): scripts/check-generator-locales.mjs — run it after any change here.
export const shared = {
  catalogLabel: "Generatoren",
  catalogTitle: "3D-Druck-Generatoren — kostenlose parametrische Modelle | Forgent3D",
  catalogDescription:
    "Kostenlose 3D-Druck-Generatoren online: Gridfinity-Bins und -Baseplates, parametrische Boxen, Schlauchadapter, Trichter, Zahnräder, Unterlegscheiben, Werkzeugeinlagen, Winkelverbinder für 2020-Aluprofile, Stehlager und Lüftergitter. Parameter einstellen, in 3D prüfen, STL / STEP exportieren.",
  catalogH1: "3D-Druck-Generatoren",
  catalogIntro:
    "Jeder Generator hier ist ein echtes parametrisches CAD-Modell: Ändern Sie die Parameter, baut es sich live neu auf, und Sie exportieren STL / STEP – was über die Schieberegler hinausgeht, ändert der KI-Agent am selben Modell.",
  openApp: "Generator öffnen",
  paramsTitle: "Einstellbare Parameter",
  paramsIntro:
    "Jede Änderung an den folgenden Parametern baut echte Geometrie neu auf – das ist parametrisches CAD, kein skaliertes Mesh.",
  thParam: "Parameter",
  thDefault: "Standard",
  thRange: "Bereich",
  thDesc: "Wirkung",
  howTitle: "So funktioniert es",
  howSteps: [
    "Generator öffnen – das Modell entsteht direkt in Ihrem Browser, ohne Installation.",
    "Maße und Optionen in der Parameterleiste einstellen; die Geometrie baut sich live in 3D neu auf.",
    "STL / STEP zum Drucken exportieren – oder den KI-Agenten um alles bitten, was die Schieberegler nicht abdecken.",
  ],
  faqTitle: "Häufige Fragen",
  sharedFaqs: [
    {
      q: "Darf ich Drucke aus diesen Generatoren verkaufen?",
      a: "Ja. Die Modelle, die Sie erzeugen, und die exportierten STL- / STEP-Dateien gehören Ihnen: Drucken Sie sie, verkaufen Sie die Drucke oder verbauen Sie sie in einem Produkt. Eine Namensnennung von Forgent3D ist nicht erforderlich.",
    },
  ],
  licenseNote: "Erzeugte Modelle dürfen Sie kommerziell nutzen, ohne Namensnennung.",
  aiEditCta: "Mit KI bearbeiten",
  embedTitle: "Direkt hier verwenden",
  embedIntro:
    "Der echte Generator läuft in Ihrem Browser: Parameter einstellen, dann STEP oder STL herunterladen. Keine Installation, keine Anmeldung.",
  embedLoad: "Generator hier öffnen",
  embedNote: "Beim ersten Öffnen wird die CAD-Engine geladen (etwa 20 MB).",
  paramsLinkNote: "Jeder Parameter lässt sich in den Link der Seite schreiben – so öffnet ein einziger Link genau das Teil, das Sie brauchen.",
  stepTitle: "Was in der STEP-Datei steckt",
  stepCommon:
    "STEP AP214 in Millimetern, exakte B-rep-Geometrie – öffnet sich direkt in SolidWorks, Fusion, FreeCAD, Onshape oder Inventor und lässt sich direkt in ein CNC-Angebotsformular hochladen. Die STL für den Slicer ist ebenfalls nur einen Klick entfernt.",
  compareTitle: "Im Vergleich",
  compareHead: ["", "Dieser Generator", "Typischer Online-STL-Generator", "CAD-Bibliothek eines Herstellers"],
  compareRows: [
    ["Jede Größe innerhalb des Bereichs", "Ja", "Ja", "Nur Katalogmaße"],
    ["STEP mit exakten Flächen", "Ja", "Meist nur ein STL-Mesh", "Ja"],
    ["Änderungen jenseits der Schieberegler", "„AI edit“ direkt auf der Seite", "Nein", "Nein"],
    ["Konto für den Download nötig", "Nein", "Meist nicht", "Oft"],
  ],
  aiTitle: "Von der KI ändern lassen",
  aiLinkTitle: "Die Werte in den Link schreiben",
  aiLinkBody:
    "Jeder Parameter ist ein Link-Parameter; der Link unten öffnet das Beispielteil. ChatGPT, Claude oder jeder andere Assistent kann so einen Link aus der Parameterliste (Namen, Einheiten, Bereiche) erstellen. Die Liste finden Sie hier:",
  aiEditTitle: "Mit KI direkt auf der Seite ändern",
  aiEditBody:
    "Klicken Sie im Generator auf „AI edit“ und sagen Sie, was sich ändern soll – eine Passfedernut, Bohrungen, eine andere Form. Die KI ändert die model.py des Teils, das Modell baut sich in Ihrem Browser neu auf, und die Änderung lässt sich rückgängig machen. Ein paar Änderungen pro Tag sind ohne Anmeldung kostenlos; um das Ergebnis zu behalten oder weiterzugehen, kopieren Sie es in Ihre Modelle und arbeiten mit dem KI-Agenten weiter.",
  aiWorkspaceTitle: "Im eigenen Arbeitsbereich weitermachen",
  aiWorkspaceBody:
    "Für größere Änderungen, mehrere Runden oder ein Teil, das Sie behalten möchten: Kopieren Sie es in Ihre Modelle (kostenloses Konto). Der KI-Agent von Forgent3D liest die model.py, ändert sie, baut das Modell neu auf und prüft das Ergebnis selbst.",
  aiWorkspaceCta: "Kopieren und mit dem KI-Agenten weiterarbeiten",
  schemaLabel: "Parameterliste (JSON)",
  exampleLabel: "Beispiel",
  featureList: [
    "Parametrisch: jedes Maß einstellbar",
    "Export als STEP (AP214) und STL",
    "Läuft im Browser, ohne Installation",
    "Quellcode des Teils per KI bearbeiten",
    "Links übertragen Parameterwerte",
  ],
  relatedTitle: "Weitere Generatoren",
  scadPrompt: "Sie haben schon eine eigene .scad-Datei?",
  scadLink: "OpenSCAD in STEP umwandeln",
  viewerLink: "Im Browser ansehen",
  breadcrumbHome: "Startseite",
};

export const generators = {
  "gridfinity-bin-generator": {
    copy: {
      name: "Gridfinity-Bin-Generator",
      title: "Gridfinity-Bin-Generator — Boxen mit Trennwänden & Magneten | Forgent3D",
      description:
        "Gridfinity-Bins nach Maß online: Raster, Höheneinheiten, Trennwände, Magnetlöcher, Entnahmerundung. 3D-Vorschau, STL oder STEP. Gratis, ohne CAD-Installation.",
      h1: "Gridfinity-Bin-Generator: Bins nach Maß, echtes CAD dahinter",
      intro:
        "Legen Sie die Größe eines Gridfinity-Bins (der Aufbewahrungsbox des Systems) in 42-mm-Rastereinheiten fest, fügen Sie Trennwände, Magnetlöcher und eine Entnahmerundung hinzu und sehen Sie zu, wie sich das Modell in Ihrem Browser neu aufbaut. Anders als STL-Customizer, die nur einmal eine Datei ausgeben, ist hier jeder Bin parametrischer CAD-Code – brauchen Sie etwas, das die Schieberegler nicht abdecken, ändert der KI-Agent dasselbe Modell für Sie.",
      whyPoints: [
        "Echte Gridfinity-Spezifikation: 42 mm Raster, 7-mm-Höheneinheiten, stapelbarer Rand",
        "Fächer per Anzahl; Magnetlöcher (Ø6 × 2 mm) und Entnahmerundung per Schalter",
        "Exportiert saubere STL / STEP – druckbar ohne Stützen",
        "Beschriftungsleiste oder eigene Aussparung gewünscht? Einfach mit dem KI-Agenten remixen",
      ],
      faqs: [
        {
          q: "Welche Magnete passen in die Magnetlöcher?",
          a: "Die Aufnahmen im Boden sind auf den De-facto-Standard von Gridfinity ausgelegt: Neodym-Scheibenmagnete Ø6 mm × 2 mm, vier pro 42-mm-Rastereinheit (je einer nahe jeder Ecke). Einkleben ist optional – Bins sitzen auch ohne Magnete gut auf einer Baseplate.",
        },
        {
          q: "Lassen sich Gridfinity-Bins ohne Stützen drucken?",
          a: "Ja. Bodenprofil, Stapelrand und Entnahmerundung bleiben innerhalb der Überhanggrenzen von FDM. Drucken Sie die Bins flach auf dem Druckbett in PLA oder PETG mit 0,2 mm Schichthöhe; auf einem sauberen Druckbett brauchen Sie weder Stützen noch Brim.",
        },
        {
          q: "Kann ich etwas ändern, das die Parameter nicht abdecken?",
          a: "Ja – genau darum geht es bei Forgent3D. Ihr Bin entsteht aus editierbarem CAD-Code; Sie können ihn also in Ihren Arbeitsbereich kopieren und den KI-Agenten um Beschriftungslaschen, Griffmulden, eigene Aussparungen oder eine nicht genormte Grundfläche bitten.",
        },
      ],
    },
    params: {
      GRID_X: { label: "Rastereinheiten X", desc: "Breite des Bins in 42-mm-Gridfinity-Einheiten." },
      GRID_Y: { label: "Rastereinheiten Y", desc: "Tiefe des Bins in 42-mm-Gridfinity-Einheiten." },
      HEIGHT_U: { label: "Höheneinheiten", desc: "Höhe des Bins in Standardschritten von 7 mm." },
      DIV_X: { label: "Fächer X", desc: "Anzahl der Fächer über die Breite." },
      DIV_Y: { label: "Fächer Y", desc: "Anzahl der Fächer über die Tiefe." },
      STACKING_LIP: { label: "Stapelrand", desc: "Rand oben, auf den sich ein weiterer Bin stapeln lässt." },
      MAGNET_HOLES: { label: "Magnetlöcher", desc: "Magnetaufnahmen Ø6 × 2 mm, vier pro 42-mm-Rastereinheit." },
      SCOOP: { label: "Entnahmerundung", desc: "Gerundeter Boden an der Vorderwand, damit Kleinteile herausgleiten." },
    },
    example: "Bin 2 × 1, 3 Einheiten hoch, drei Fächer, Magnetlöcher",
    step: [
      "Die Füße am Boden, der Stapelrand und die abgerundeten Ecken werden als exakte Ebenen, Zylinder und Kegel exportiert – 220 Flächen beim Standard-Bin 3 × 2; jede 45°-Schräge ist dort, wo sie um eine Ecke läuft, ein echter Kegel.",
      "So lässt sich der Bin im CAD an der Gridfinity-Spezifikation nachmessen oder in Fusion oder Onshape überarbeiten, ohne mit einem Mesh zu kämpfen.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich einen Gridfinity-Bin 2 × 1 mit drei Fächern und Magnetlöchern?",
        a: "https://www.forgent3d.com/de/generators/gridfinity-bin-generator?GRID_X=2&GRID_Y=1&HEIGHT_U=3&DIV_X=3&MAGNET_HOLES=true öffnet genau diesen Bin (Höhe in 7-mm-Einheiten). Laden Sie STL zum Drucken herunter oder STEP, um im CAD weiterzuarbeiten.",
      },
      {
        q: "Kann ich eine Beschriftungsleiste oder eine Aussparung für ein bestimmtes Werkzeug ergänzen?",
        a: "Klicken Sie im Generator auf „AI edit“ und beschreiben Sie es („eine 12 mm breite Beschriftungsleiste entlang der Vorderseite“); die KI ändert die model.py des Bins, und er baut sich in Ihrem Browser neu auf. Für einen größeren Umbau kopieren Sie den Bin in Ihre Modelle und arbeiten mit dem KI-Agenten weiter.",
      },
    ],
    keywords: [
      "gridfinity bin generator",
      "gridfinity box generator",
      "gridfinity generator kostenlos",
      "gridfinity box mit trennwänden",
      "gridfinity bins stl",
    ],
  },

  "gridfinity-baseplate-generator": {
    copy: {
      name: "Gridfinity-Baseplate-Generator",
      title: "Gridfinity-Baseplate-Generator — Grundplatten nach Maß online | Forgent3D",
      description:
        "Gridfinity-Baseplates passend zur Schublade: beliebige Rasteranzahl, dünn oder skelettiert, Magnet- und Schraubenlöcher. 3D-Vorschau, STL oder STEP gratis.",
      h1: "Gridfinity-Baseplate-Generator für Schubladen und Schreibtische",
      intro:
        "Wählen Sie, wie viele 42-mm-Rasterfelder Sie brauchen, entscheiden Sie sich für ein dünnes oder skelettiertes Profil und fügen Sie Magnet- oder Schraubenlöcher hinzu. Die Baseplate – die Grundplatte, in der die Bins sitzen – baut sich live als parametrisches CAD neu auf. Und braucht Ihre Schublade ein ungewöhnliches Füllstück oder eine abgeschnittene Ecke, ändert der KI-Agent dasselbe Modell.",
      whyPoints: [
        "Exaktes Gridfinity-Aufnahmeprofil – Bins rasten ohne Spiel ein",
        "Dünne Ausführung für minimale Höhe, skelettierte zum Filamentsparen",
        "Optional Magnetlöcher (Ø6 × 2 mm) und Senkbohrungen für M3-Schrauben",
        "Schublade mit ungewöhnlicher Form? Lassen Sie den Agenten die Platte passend zuschneiden",
      ],
      faqs: [
        {
          q: "Welche Ausführung soll ich drucken?",
          a: "Standard ist „thin“ (dünn): am schnellsten gedruckt, geringste Höhe, gut für den Schreibtisch. Wählen Sie „skeletonized“ (skelettiert), um bei großen Platten Filament zu sparen; Schraubenlöcher lohnen sich, wenn die Platte in einer Schublade liegt, die bewegt wird.",
        },
        {
          q: "Wie lege ich eine ganze Schublade aus?",
          a: "Messen Sie die Schublade aus, teilen Sie durch 42 mm, um die Rasteranzahl zu erhalten, und drucken Sie mehrere Platten, wenn die Schublade größer als Ihr Druckbett ist. Für den verbleibenden Spalt kopieren Sie das Modell und bitten die KI um einen Füllstreifen in passender Breite.",
        },
        {
          q: "Passen die Aufnahmen zu allen Gridfinity-Bins?",
          a: "Ja – das Aufnahmeprofil folgt der offenen Gridfinity-Spezifikation, die auch gridfinity-rebuilt und die Generatoren auf MakerWorld verwenden; Standard-Bins aus jedem Generator rasten also ein.",
        },
      ],
    },
    params: {
      GRID_X: { label: "Rastereinheiten X", desc: "Breite der Baseplate in 42-mm-Einheiten." },
      GRID_Y: { label: "Rastereinheiten Y", desc: "Tiefe der Baseplate in 42-mm-Einheiten." },
      STYLE: { label: "Ausführung", desc: "Dünn (thin) spart Höhe; skelettiert (skeletonized) spart Filament." },
      MAGNET_HOLES: { label: "Magnetlöcher", desc: "Aufnahmen Ø6 × 2 mm, passend zu den Magneten der Bins." },
      SCREW_HOLES: { label: "Schraubenlöcher", desc: "Senkbohrungen für M3, um die Platte festzuschrauben." },
    },
    example: "5 × 4 Felder (210 × 168 mm), Magnetlöcher",
    step: [
      "Das geneigte Profil jeder 42-mm-Aufnahme wird als exakte Ebenen und Kegel exportiert – 310 Flächen bei der Standardplatte 4 × 3 –, sodass sich die Platte im CAD auf eine ungewöhnliche Schubladenkontur zuschneiden lässt, statt sie neu zu modellieren.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich eine Gridfinity-Baseplate für eine Schublade mit 220 × 180 mm?",
        a: "Fünf mal vier Felder ergeben 210 × 168 mm: https://www.forgent3d.com/de/generators/gridfinity-baseplate-generator?GRID_X=5&GRID_Y=4. Um die letzten Millimeter zu füllen, klicken Sie im Generator auf „AI edit“ und lassen einen Außenrand auf 220 × 180 mm ergänzen.",
      },
      {
        q: "Mein Druckbett ist kleiner als die Platte – was nun?",
        a: "Erzeugen Sie die Platte in Stücken, die auf Ihr Druckbett passen (zum Beispiel 3 × 4 und 2 × 4), und legen Sie sie in der Schublade nebeneinander. Jedes Stück hält das 42-mm-Raster ein, sodass die Bins über die ganze Schublade hinweg sitzen.",
      },
    ],
    keywords: [
      "gridfinity baseplate generator",
      "gridfinity grundplatte",
      "gridfinity baseplate schublade",
      "gridfinity baseplate stl",
    ],
  },

  "parametric-box-generator": {
    copy: {
      name: "Parametrischer Box-Generator",
      title: "Box-Generator — Scharnier-, Schnapp- oder Schiebedeckel (STL) | Forgent3D",
      description:
        "Box nach Innenmaß: Scharnierdeckel (Print-in-Place/Stift; Clip-, Koffer-, Magnetverschluss), Schnapp-, Stülp-, Schiebedeckel oder keiner. 3D-Vorschau, STL/STEP gratis.",
      h1: "Parametrischer Box-Generator: exaktes Innenmaß, Scharnier-, Schnapp-, Stülp- oder Schiebedeckel",
      intro:
        "Geben Sie die Innenmaße passend zu dem ein, was Sie aufbewahren möchten, und wählen Sie einen Deckel: einen Scharnierdeckel, der fertig montiert vom Drucker kommt, einen Schnapp- oder Stülpdeckel, einen Schiebedeckel in Schwalbenschwanzführung – oder keinen. Die Box baut sich live als echtes CAD neu auf; was die Optionen nicht abdecken, etwa Trennwände oder ein Beschriftungsschlitz, ist nur eine KI-Änderung entfernt.",
      whyPoints: [
        "Alle Maße sind Innenmaße – Sie messen den Inhalt, nicht den Druck",
        "Scharnierdeckel mit Print-in-Place-Scharnier oder separatem Stift",
        "Clip-, Koffer- oder Magnetverschluss am Scharnierdeckel",
        "Trennwände, ein Beschriftungsschlitz, eine Kabelkerbe? Klicken Sie auf „AI edit“ und sagen Sie es",
      ],
      faqs: [
        {
          q: "Welchen Deckel soll ich wählen?",
          a: "Den Scharnierdeckel mit Print-in-Place-Scharnier für eine Box, die Sie oft öffnen – sie kommt fertig montiert vom Drucker. Den Schnappdeckel, wenn der Deckel beim Tragen zubleiben muss, den Stülpdeckel als Staubschutz zum Abheben, den Schiebedeckel für das Gefühl eines Federkastens (die Ecken bleiben dabei ungerundet, damit er herausgleiten kann) und keinen Deckel für eine offene Schale.",
        },
        {
          q: "Wie dick sollten die Wände sein?",
          a: "Die voreingestellten 2,4 mm entsprechen etwa sechs Perimetern bei einer 0,4-mm-Düse – steif genug für die alltägliche Aufbewahrung. Gehen Sie auf 3–4 mm für Boxen, die voll getragen oder an eine Wand geschraubt werden.",
        },
      ],
    },
    params: {
      INNER_L: { label: "Innenlänge", desc: "Länge innen – richten Sie sie nach dem Inhalt." },
      INNER_W: { label: "Innenbreite", desc: "Breite innen." },
      INNER_H: { label: "Innenhöhe", desc: "Innenhöhe der Box, vom Boden bis zum Rand." },
      WALL: { label: "Wandstärke", desc: "2,4 mm sind etwa sechs Perimeter bei einer 0,4-mm-Düse." },
      LID: {
        label: "Deckelart",
        desc: "Scharnierdeckel (hinged), Schnappdeckel (snap), Stülpdeckel über einem Falz (lip), Schiebedeckel in Schwalbenschwanzführung (sliding) oder keiner (none).",
      },
      HINGE: {
        label: "Scharnier",
        desc: "Nur Scharnierdeckel: fertig montiert gedruckt (print-in-place) oder mit separatem Stift (pin).",
      },
      LATCH: {
        label: "Verschluss",
        desc: "Nur Scharnierdeckel: Schnappclip (clip), Kofferverschlüsse (toolbox), Magnete (magnet) oder keiner (none).",
      },
      LID_DEPTH: { label: "Tiefe des Scharnierdeckels", desc: "Nur Scharnierdeckel: wie tief der Deckel ist." },
      CORNER_R: {
        label: "Eckenradius",
        desc: "Rundung der Außenecken (mit Schiebedeckel bleiben die Ecken ungerundet, damit er herausgleiten kann).",
      },
    },
    example: "Innenmaß 120 × 80 × 40 mm, Schiebedeckel",
    step: [
      "Box und Deckel werden als getrennte Volumenkörper in einer Datei exportiert – 101 exakte Flächen bei der Standardbox mit Scharnierdeckel, die abgerundeten Ecken und die Scharnieraugen als echte Zylinder.",
      "Öffnen Sie die Datei im CAD, um ein Logo, eine Kabelkerbe oder Befestigungslöcher genau dort zu platzieren, wo sie hingehören – oder geben Sie sie an einen Druckdienstleister, der STEP verlangt.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich eine Box mit 120 × 80 × 40 mm und Schiebedeckel?",
        a: "https://www.forgent3d.com/de/generators/parametric-box-generator?INNER_L=120&INNER_W=80&INNER_H=40&LID=sliding – die Maße sind die Innenmaße der Box. Laden Sie STL herunter, um Box und Deckel zu drucken, oder STEP zum Weiterbearbeiten.",
      },
      {
        q: "Kann ich Trennwände oder einen Beschriftungsschlitz hinzufügen?",
        a: "Ja: Klicken Sie im Generator auf „AI edit“ und sagen Sie es („zwei Trennwände quer über die Breite“, „ein Beschriftungsschlitz vorne“). Die KI ändert die model.py der Box direkt auf der Seite; kopieren Sie die Box in Ihre Modelle, um sie zu behalten und mit dem KI-Agenten weiterzuarbeiten.",
      },
    ],
    keywords: [
      "box generator 3d druck",
      "box mit deckel 3d druck",
      "box mit scharnierdeckel stl",
      "box mit schiebedeckel stl",
      "parametrische box",
    ],
  },

  "hose-adapter-generator": {
    copy: {
      name: "Schlauchadapter-Generator",
      title: "Schlauchadapter-Generator — Staubsauger- & Absaugadapter (STL) | Forgent3D",
      description:
        "Schlauchadapter online nach Maß: zwei Anschlüsse, je innen oder außen passend, Stecklänge, Konus, Wandstärke. Für Werkstattsauger, Absaugung, Rohre. STL/STEP gratis.",
      h1: "Schlauchadapter-Generator: zwei beliebige Schläuche verbinden",
      intro:
        "Messen Sie beide Enden – innen oder außen, für jeden Anschluss einzeln wählbar –, legen Sie Stecklängen und einen Übergang fest und erhalten Sie einen druckfertigen Adapter. Werkstattsauger an Werkzeuganschluss, Absauganlage an Bandsäge, Teichpumpe an Gartenschlauch: Die Geometrie baut sich live als echtes CAD neu auf.",
      whyPoints: [
        "Innen- oder Außenmaß je Anschluss – so, wie Sie einen Schlauch tatsächlich messen",
        "Glatter Innenkonus hält den Luftstrom in Absaugleitungen hoch",
        "Standardmäßig luftdichte Wände aus 6 Perimetern, PETG-freundlich",
        "Bogen, Schlauchtülle oder Anschlagflansch gebraucht? Fragen Sie den KI-Agenten",
      ],
      faqs: [
        {
          q: "Wie messe ich die Schlauchenden richtig?",
          a: "Wird unser Ende IN einen Schlauch oder Anschluss gesteckt, stellen Sie dieses Ende auf „outer“ und geben den Innendurchmesser des Teils ein, in das es gesteckt wird. Wird ein Schlauch IN unser Ende gesteckt, wählen Sie „inner“ und geben den Außendurchmesser des Schlauchs ein. Rechnen Sie nichts hinzu – 0,2 mm Passungsspiel sind bereits eingerechnet.",
        },
        {
          q: "Aus welchem Material sollte ich Adapter drucken?",
          a: "PETG ist der beste Kompromiss: leicht flexibel, sodass konische Anschlüsse luftdicht sitzen, und es verträgt die Wärme in den Schläuchen von Werkstattsaugern. PLA reicht für leichte Beanspruchung; TPU nur, wenn Sie eine dehnbare Steckverbindung brauchen.",
        },
      ],
    },
    params: {
      END1_D: { label: "Durchmesser Ende 1", desc: "Durchmesser des ersten Anschlusses." },
      END1_MODE: { label: "Passung Ende 1", desc: "outer: Der Anschluss steckt in einem Schlauch oder Stutzen, END1_D ist dessen Innendurchmesser. inner: Ein Schlauch oder Rohr steckt im Anschluss, END1_D ist dessen Außendurchmesser." },
      END1_LEN: { label: "Länge Ende 1", desc: "Stecklänge des ersten Anschlusses." },
      END2_D: { label: "Durchmesser Ende 2", desc: "Durchmesser des zweiten Anschlusses." },
      END2_MODE: { label: "Passung Ende 2", desc: "Wie bei Ende 1, mit END2_D." },
      END2_LEN: { label: "Länge Ende 2", desc: "Stecklänge des zweiten Anschlusses." },
      TRANSITION: { label: "Übergangslänge", desc: "Länge des konischen Abschnitts zwischen den Anschlüssen." },
      WALL: { label: "Wandstärke", desc: "2,4 mm = sechs Perimeter, luftdicht und steif." },
    },
    example: "ein 35-mm-Schlauch steckt im einen Ende, das andere Ende in einem 58-mm-Anschluss",
    step: [
      "Wird als 10 exakte Flächen exportiert: Beide Muffen sind echte Zylinder, Übergang und Einführfasen echte Kegel – die Bohrung verjüngt sich mit der Außenseite, die Wand behält also ihre Stärke.",
      "Praktisch, wenn der Adapter auf der Drehbank gedreht wird oder zu einem Anschluss passen muss, den jemand im CAD gezeichnet hat.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich einen Adapter von einem 35-mm-Saugschlauch auf einen 58-mm-Absaugstutzen?",
        a: "Legen Sie fest, wie jedes Ende passt. Der Schlauch steckt in unserem Ende – „inner“, Außendurchmesser des Schlauchs eingeben –, und unser anderes Ende steckt im Absaugstutzen – „outer“, Innendurchmesser des Stutzens eingeben: https://www.forgent3d.com/de/generators/hose-adapter-generator?END1_D=35&END1_MODE=inner&END2_D=58&END2_MODE=outer. Das Passungsspiel wird automatisch hinzugefügt.",
      },
      {
        q: "Kann ich den Adapter abwinkeln oder eine Schlauchtülle bzw. einen Anschlagflansch ergänzen?",
        a: "Klicken Sie im Generator auf „AI edit“ und beschreiben Sie es („in der Mitte um 45° abwinkeln“, „ein 3-mm-Flansch an Ende 2“); die KI ändert die model.py des Adapters direkt auf der Seite. Für größere Änderungen kopieren Sie ihn in Ihre Modelle und arbeiten mit dem KI-Agenten weiter.",
      },
    ],
    keywords: [
      "schlauchadapter generator",
      "absaugadapter 3d druck",
      "staubsauger adapter 3d druck",
      "staubsauger adapter stl",
    ],
  },

  "funnel-generator": {
    copy: {
      name: "Trichter-Generator",
      title: "Trichter-Generator — nach Maß für den 3D-Druck (STL) | Forgent3D",
      description:
        "Trichter nach Maß: Öffnungs- und Auslaufdurchmesser, Kegelhöhe, Wandstärke, Aufhängeöse. Passt auf Gläser, Tanks, Öleinfüllstutzen. STL / STEP gratis.",
      h1: "Trichter-Generator: genau der Trichter, den man nirgends kaufen kann",
      intro:
        "Legen Sie Einfüllöffnung, Auslauf und Kegelhöhe fest und erhalten Sie einen Trichter, der wirklich auf Ihr Glas, Ihren Kanister oder Ihre Filament-Trockenbox passt. Er entsteht als wasserdichtes CAD-Modell mit glatter Innenseite, auf Wunsch mit einer Öse zum Aufhängen und Abtropfen.",
      whyPoints: [
        "Auslauf passend zum Hals Ihres Behälters – Schluss mit Universaltrichtern, die nirgends passen",
        "Der Kegelwinkel ergibt sich aus der eingestellten Höhe, innen durchgehend glatt",
        "Optionale Aufhängeöse zum Abtropfen und Aufbewahren",
        "Siebeinsatz oder versetzter Auslauf gewünscht? Mit dem KI-Agenten remixen",
      ],
      faqs: [
        {
          q: "Ist ein 3D-gedruckter Trichter lebensmittelecht?",
          a: "FDM-Drucke haben Schichtrillen, in denen sich Rückstände festsetzen können; betrachten Sie gedruckte Trichter daher grundsätzlich als Werkstattwerkzeug. Für die Küche drucken Sie in PETG, spülen den Trichter sofort und behandeln ihn als kurzlebiges Utensil; wo es auf Lebensmittelsicherheit ankommt, kaufen Sie einen lebensmittelechten Trichter.",
        },
        {
          q: "Wie verhindere ich, dass der Trichter gluckert?",
          a: "Gluckern bedeutet, dass die Luft nicht aus dem Behälter entweichen kann. Machen Sie den Auslauf etwas schmaler als den Behälterhals, damit die Luft daneben entweicht, oder lassen Sie den KI-Agenten Rippen außen am Auslauf anbringen – das klassische Mittel gegen Gluckern.",
        },
        {
          q: "Mit welchen Einstellungen wird der Trichter dicht?",
          a: "Drei bis vier Perimeter (die voreingestellte Wandstärke von 1,6 mm), 0,2 mm Schichthöhe und leichte Überextrusion – oder den Kegel „bügeln“ (Ironing), wenn Ihr Slicer das kann. PETG dichtet sich bei höheren Temperaturen besser selbst ab als PLA.",
        },
      ],
    },
    params: {
      MOUTH_D: { label: "Öffnungsdurchmesser", desc: "Durchmesser der oberen Öffnung." },
      SPOUT_D: { label: "Auslaufdurchmesser", desc: "Innendurchmesser des Auslaufrohrs." },
      SPOUT_LEN: { label: "Auslauflänge", desc: "Länge des geraden Auslaufrohrs." },
      CONE_H: { label: "Kegelhöhe", desc: "Höhe des kegelförmigen Abschnitts." },
      WALL: { label: "Wandstärke", desc: "1,6 mm = vier Perimeter." },
      HANG_LOOP: { label: "Aufhängeöse", desc: "Lasche am Rand mit Loch zum Aufhängen des Trichters." },
    },
    example: "Öffnung 120 mm, Auslauf innen 8 mm, Auslauflänge 30 mm",
    step: [
      "Wird als 15 exakte Flächen exportiert: Trichterschale und Übergang in den Auslauf sind echte Kegel, Auslauf und Rand echte Zylinder.",
      "So lässt sich der Auslauf im CAD an einem gezeichneten Flaschenhals oder Einfüllstutzen prüfen, bevor überhaupt etwas gedruckt wird.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich einen Trichter für eine Flasche, deren Halsöffnung innen 16 mm misst?",
        a: "Der Außendurchmesser des Auslaufs ist SPOUT_D plus zwei Wandstärken (standardmäßig je 1,6 mm); für eine 16-mm-Öffnung nehmen Sie also SPOUT_D=12 – außen 15,2 mm, mit Platz, damit Luft entweichen kann: https://www.forgent3d.com/de/generators/funnel-generator?SPOUT_D=12&MOUTH_D=100. Laden Sie STL zum Drucken herunter.",
      },
      {
        q: "Geht auch ein abgewinkelter Auslauf, eine Entlüftung oder ein Griff?",
        a: "Klicken Sie im Generator auf „AI edit“ und beschreiben Sie es; die KI ändert die model.py des Trichters direkt auf der Seite, und er baut sich in Ihrem Browser neu auf. Ein paar Änderungen pro Tag sind ohne Anmeldung kostenlos.",
      },
    ],
    keywords: ["trichter 3d druck", "trichter stl", "trichter generator", "trichter nach maß drucken"],
  },

  "spur-gear-generator": {
    copy: {
      name: "Zahnrad-Generator",
      title: "Zahnrad-Generator — Evolvente, Modul & Zähnezahl (STL / STEP) | Forgent3D",
      description:
        "Zahnrad-Generator online: Evolventen-Stirnräder mit Modul, Zähnezahl, Eingriffswinkel, Zahnbreite, Bohrung (rund oder Sechskant). Echte Evolvente, STL/STEP gratis.",
      h1: "Zahnrad-Generator für Stirnräder mit echter Evolventenverzahnung",
      intro:
        "Stellen Sie Modul, Zähnezahl, Eingriffswinkel, Zahnbreite und Bohrung ein – der Generator berechnet ein echtes Evolventenprofil statt einer kosmetischen Näherung, sodass gedruckte Zahnradpaare wirklich kämmen. Weil das Ergebnis parametrisches CAD ist, sind Naben, Passfedernuten und Erleichterungsbohrungen nur eine KI-Änderung entfernt.",
      whyPoints: [
        "Echte Evolventenflanken – Paare mit gleichem Modul kämmen korrekt",
        "Eingriffswinkel 20° oder 25°, 8 bis 120 Zähne",
        "Runde oder Sechskantbohrung für Wellen und Normteile",
        "Passfedernut, Nabe oder passende Zahnstange gebraucht? Fragen Sie den KI-Agenten",
      ],
      faqs: [
        {
          q: "Welches Modul eignet sich für den FDM-Druck?",
          a: "Mit einer 0,4-mm-Düse bleiben Sie bei Modul 1 oder darüber; Modul 1,5–2 ist der ideale Bereich für feste, leise gedruckte Zahnräder. Unter Modul 1 verlieren die Zahnflanken durch den Düsenradius ihre Evolventenform.",
        },
        {
          q: "Wie erstelle ich zwei Zahnräder, die miteinander kämmen?",
          a: "Erzeugen Sie beide mit gleichem Modul und gleichem Eingriffswinkel, die Zähnezahlen sind frei wählbar. Achsabstand = Modul × (Zähnezahl₁ + Zähnezahl₂) / 2. Für das Flankenspiel gedruckter Räder addieren Sie 0,1–0,2 mm zu diesem Abstand.",
        },
        {
          q: "Welches Material und welche Einstellungen für gedruckte Zahnräder?",
          a: "PETG für den allgemeinen Einsatz, Nylon bei hohem Verschleiß. Flach drucken, 100 % Infill oder mindestens 5 Perimeter, damit die Zähne massiv sind; 0,15 mm Schichthöhe hält die Flanken glatt.",
        },
      ],
      sizes: {
        title: "Gängige Größen",
        intro: "Teilkreisdurchmesser = Modul × Zähnezahl, Kopfkreisdurchmesser = Modul × (Zähnezahl + 2), Fußkreisdurchmesser = Modul × (Zähnezahl − 2,5). Jede Zeile öffnet den Generator mit diesem Zahnrad.",
        head: ["Modul", "Zähne", "Teilkreis-Ø", "Kopfkreis-Ø", "Fußkreis-Ø", ""],
        open: "Öffnen",
        note: "Zwei Zahnräder kämmen beim Achsabstand = Modul × (Zähnezahl₁ + Zähnezahl₂) / 2: Modul 2 mit 15 und 30 Zähnen ergibt 45 mm.",
      },
    },
    params: {
      MODULE: { label: "Modul", desc: "Zahngröße; Zahnräder, die miteinander kämmen, brauchen dasselbe Modul." },
      TEETH: { label: "Zähnezahl", desc: "Teilkreisdurchmesser = Modul × Zähnezahl." },
      PRESSURE_ANGLE: { label: "Eingriffswinkel", desc: "20° ist Standard; 25° für gedrungenere, tragfähigere Zähne." },
      FACE_WIDTH: { label: "Zahnbreite", desc: "Dicke des Zahnrads in Achsrichtung." },
      BORE_STYLE: { label: "Bohrungsart", desc: "Mittelloch: rund für die Welle oder als Sechskantaufnahme." },
      BORE_D: { label: "Bohrungsmaß", desc: "Wellendurchmesser oder Schlüsselweite des Sechskants." },
    },
    example: "Modul 1,5, 40 Zähne, 6-mm-Bohrung",
    step: [
      "Jede Zahnflanke ist eine einzige glatte Fläche: die exakte Evolvente, über die Zahnbreite gezogen. Das Standardzahnrad mit 20 Zähnen wird als 83 Flächen exportiert – 40 Flanken, 41 Zylinderflächen (Kopfflächen, Fußrundungen, Bohrung) und 2 Planflächen –, ohne eine einzige Facette.",
      "Die Zähne sind das, was ein Wälzfräser schneiden würde: eine Zahnstange mit Bezugsprofil A nach ISO 53, um den Rohling abgewälzt. Deshalb behält der Zahnfuß die Kopfrundung der Zahnstange, und Ritzel unter etwa 17 Zähnen (bei 20°) bekommen einen Unterschnitt – wie echte gefräste Ritzel.",
      "Geprüft gegen einen simulierten Wälzfräsvorgang: Flankenform, Zahndicke und Zahnweite stimmen auf einen Mikrometer genau überein.",
    ],
    aiFaqs: [
      {
        q: "Wie bekomme ich eine STEP-Datei eines Stirnrads mit Modul 2 und 30 Zähnen?",
        a: "Schreiben Sie die Werte in den Link: https://www.forgent3d.com/de/generators/spur-gear-generator?MODULE=2&TEETH=30 öffnet den Generator mit genau diesem Zahnrad. Prüfen Sie es in 3D und laden Sie dann STEP (oder STL) herunter. Das ist kostenlos, braucht kein Konto, und die Datei öffnet sich direkt in SolidWorks, Fusion, FreeCAD oder Inventor.",
      },
      {
        q: "Kann der Generator eine Passfedernut, eine Nabe oder ein Loch für eine Madenschraube hinzufügen?",
        a: "Nicht per Schieberegler – per Satz. Klicken Sie im Generator auf „AI edit“ und schreiben Sie „eine Passfedernut, 3 mm breit, 1,4 mm tief“: Die KI ändert die model.py des Zahnrads selbst (Breite und Tiefe der Nut können zu neuen Parametern werden), das Teil baut sich in Ihrem Browser neu auf und lässt sich wie gewohnt exportieren. Ein paar Änderungen pro Tag sind ohne Anmeldung kostenlos.",
      },
    ],
    keywords: [
      "zahnrad generator",
      "zahnrad generator stl",
      "zahnrad erstellen online",
      "stirnrad generator",
      "evolventenverzahnung",
      "zahnrad 3d druck",
    ],
  },

  "washer-spacer-generator": {
    copy: {
      name: "Unterlegscheiben- & Distanzhülsen-Generator",
      title: "Unterlegscheiben-Generator — auch Distanzhülsen (STL / STEP) | Forgent3D",
      description:
        "Unterlegscheiben, Distanzhülsen und Passscheiben nach Maß: Innen- und Außendurchmesser, Dicke, Fase – von 0,4 mm bis zur hohen Distanzhülse. STL / STEP gratis.",
      h1: "Unterlegscheiben- und Distanzhülsen-Generator: exaktes Maß, in Minuten gedruckt",
      intro:
        "Im Baumarkt gibt es nie genau die Größe, die Sie brauchen. Stellen Sie Innendurchmesser, Außendurchmesser und Dicke ein – von der 0,4-mm-Passscheibe bis zur 30 mm hohen Distanzhülse – und drucken Sie genau die Unterlegscheibe (in Österreich: Beilagscheibe) oder Distanzhülse, die Ihre Baugruppe verlangt.",
      whyPoints: [
        "Bohrungen für M3–M10 nach der ISO-Norm für Unterlegscheiben, unten aufgelistet (M8 → 8,4 mm)",
        "Ein Modell für Unterlegscheiben, Passscheiben, Distanzscheiben und Distanzhülsen",
        "Gefaste Kanten: leichtes Einführen, kein Nacharbeiten am Elefantenfuß",
        "Langloch, Vierkantloch oder Bund gebraucht? Nur eine KI-Änderung entfernt",
      ],
      faqs: [
        {
          q: "Welcher Innendurchmesser passt zu welcher Schraube?",
          a: "Unterlegscheiben nach ISO 7089 nutzen die feine Reihe der Durchgangsbohrungen nach ISO 273: M3 → 3,2, M4 → 4,3, M5 → 5,3, M6 → 6,4, M8 → 8,4, M10 → 10,5 mm. Für mehr Spiel nehmen Sie die mittlere Reihe: M3 → 3,4, M4 → 4,5, M5 → 5,5, M6 → 6,6, M8 → 9, M10 → 11 mm.",
        },
        {
          q: "Sind gedruckte Unterlegscheiben stabil genug?",
          a: "Unter einem Schraubenkopf in statischen Baugruppen auf jeden Fall – PETG mit 100 % Infill hält typische Klemmkräfte aus. Verzichten Sie auf gedruckte Scheiben, wo Temperatur, Kriechen unter dauerhaft hohem Anzugsmoment oder elektrische Leitfähigkeit eine Rolle spielt.",
        },
        {
          q: "Wie genau wird die gedruckte Dicke?",
          a: "Die Dicke landet auf Vielfachen der Schichthöhe: Bei 0,2 mm Schichthöhe wird eine 3-mm-Distanzscheibe exakt. Für Genauigkeit unterhalb einer Schicht (z. B. eine 1,1-mm-Passscheibe) drucken Sie mit 0,1 mm Schichthöhe oder lassen sich vom Agenten einen Satz Testscheiben in abgestuften Dicken erzeugen.",
        },
      ],
    },
    params: {
      INNER_D: { label: "Innendurchmesser", desc: "Durchgangsloch für die Schraube: M8 → 8,4 mm." },
      OUTER_D: { label: "Außendurchmesser", desc: "Gesamtdurchmesser der Scheibe." },
      THICKNESS: { label: "Dicke", desc: "Von der hauchdünnen Passscheibe bis zur hohen Distanzhülse." },
      CHAMFER: { label: "Kantenfase", desc: "Erleichtert das Einführen und beseitigt den Elefantenfuß." },
    },
    example: "Distanzscheibe M5: 5,3-mm-Loch, 12 mm Außendurchmesser, 2 mm dick",
    step: [
      "Ein Rotationskörper, der als 8 exakte Flächen exportiert wird: zwei Planflächen, Bohrung und Außenmantel als echte Zylinder und die vier 45°-Fasen als echte Kegel.",
      "Weil die Bohrung ein echter Zylinder ist, lesen CAD-, CAM- und Messsoftware ihren Durchmesser direkt ab – nützlich, wenn die Distanzhülse auf der Drehbank gedreht statt gedruckt wird.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich eine M5-Distanzscheibe mit 12 mm Außendurchmesser und 2 mm Dicke?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/washer-spacer-generator?INNER_D=5.3&OUTER_D=12&THICKNESS=2 – 5,3 mm ist die Bohrung einer Standard-Unterlegscheibe für M5 (ISO 7089) – und laden Sie dann STL zum Drucken herunter oder STEP für den Zerspaner.",
      },
      {
        q: "Geht auch eine Scheibe mit Lochkreis, einer Lasche oder einem Langloch?",
        a: "Ja. Klicken Sie im Generator auf „AI edit“ und beschreiben Sie es („sechs 3-mm-Löcher auf einem Lochkreis von 22 mm“). Die KI ändert die model.py der Scheibe direkt auf der Seite, und die neuen Maße werden zu Parametern, an denen Sie weiterdrehen können. Ein paar Änderungen pro Tag sind ohne Anmeldung kostenlos.",
      },
    ],
    keywords: [
      "unterlegscheibe 3d druck",
      "distanzhülse 3d druck",
      "abstandshalter 3d druck",
      "unterlegscheibe stl",
      "beilagscheibe 3d druck",
    ],
  },

  "tool-tray-generator": {
    copy: {
      name: "Werkzeugeinlagen-Generator",
      title: "Werkzeugeinlagen-Generator — für Koffer & Schublade (STL) | Forgent3D",
      description:
        "Werkzeugeinlage, deren Aussparung die Kontur Ihres Teils hat – kein Rechteck. Acht Punkte auf Ihre Maße ziehen, in 3D prüfen, STL oder STEP gratis exportieren.",
      h1: "Werkzeugeinlagen-Generator: Die Aussparung hat die Kontur des Werkzeugs, kein Rechteck",
      intro:
        "Die meisten Einlagen-Customizer bieten Rechtecke und Kreise. Hier ist die Aussparung die Grundfläche des Gegenstands selbst. Die Aussparung unten ist ein Körper mit einem Ansatz – acht Punkte, die die vier Maße abbilden, die Sie mit dem Messschieber abnehmen würden: Länge und Breite des Körpers, Breite und Höhe des Ansatzes. Ziehen Sie die Punkte auf der Skizzenfläche zurecht, und die Form wird zu IHREM Teil. Bemessen Sie die Einlage nach Ihrer Schublade, stellen Sie die Passung ein und drucken Sie flach.",
      whyPoints: [
        "Acht ziehbare Punkte, vier echte Maße: Teil messen, Punkte ziehen, fertig",
        "Gemessene Kontur und Passungsspiel bleiben zwei getrennte Werte – eine lockerere Passung verändert nie die Form des Werkzeugs",
        "Die Tiefe der Aussparung ist begrenzt, sodass immer 1,5 mm Boden stehen bleiben – per Schieberegler lässt sich die Einlage nicht durchschneiden",
        "Wird flach ohne Stützen gedruckt – und was die Schieberegler nicht abdecken, ändert der KI-Agent am selben Modell",
      ],
      faqs: [
        {
          q: "Die Aussparung hat nicht die Form meines Teils. Kann ich das ändern?",
          a: "Genau darum geht es – und es sind nur acht Punkte zum Ziehen. Die Kontur steht als konkrete Koordinaten im Code; Sie formen sie also auf der Skizzenfläche um, wie Sie auf Papier skizzieren würden – Punkte hinzufügen oder verschieben für eine Kerbe, eine Stufe, einen zweiten Ansatz –, oder Sie geben dem Agenten Maße (oder ein Foto) und lassen gleich eine andere Silhouette zeichnen. Einlage, Tiefe und Passung bleiben in beiden Fällen auf den Schiebereglern.",
        },
        {
          q: "Wie viel Spiel sollte ich lassen?",
          a: "0,25 mm pro Seite für einen satten, lagegenauen Sitz, 0,5 mm, damit das Werkzeug einhändig hineinfällt, 1,0 mm, wenn mit Handschuhen gearbeitet wird. Das Modell legt das Spiel rund um die Kontur an; die acht Punkte bleiben also die eigenen Maße des Gegenstands – eine lockerere Passung zeichnet die Form nie neu.",
        },
        {
          q: "Lässt sich die Einlage ohne Stützen drucken?",
          a: "Ja. Eine von oben eingeschnittene Aussparung hat einen ebenen Boden und senkrechte Wände – nichts hängt über. Drucken Sie die Einlage flach auf dem Druckbett in PLA oder PETG mit 0,2 mm Schichthöhe, ohne Stützen und ohne Brim. Halten Sie die Tiefe aber unter etwa zwei Dritteln der Höhe des Teils, sonst bekommen Ihre Finger das Teil nicht zu fassen, um es herauszuheben.",
        },
      ],
    },
    params: {
      CORNER_R: {
        label: "Eckenradius",
        desc: "Rundet jede Ecke der gezeichneten Kontur ab – auch ein scharfkantiges Teil bekommt so eine druckbare Innenecke.",
      },
      CLEARANCE: {
        label: "Passungsspiel",
        desc: "Wird auf jeder Seite rund um die Kontur aufgeschlagen; 0,25 satt, 0,5 zum Hineinlegen, 1,0 locker.",
      },
      PART_DEPTH: { label: "Tiefe der Aussparung", desc: "Wie tief das Teil einsinkt. Begrenzt, sodass immer 1,5 mm Boden bleiben." },
      TRAY_L: { label: "Einlagenlänge X", desc: "Außenlänge – messen Sie die Schublade, nicht das Teil." },
      TRAY_W: { label: "Einlagenbreite Y", desc: "Außenbreite der Einlage." },
      TRAY_T: { label: "Einlagendicke", desc: "Muss die Tiefe der Aussparung plus 1,5 mm Boden fassen." },
    },
    example: "Einlage 200 × 120 mm, 15 mm dick, Aussparung 12 mm tief",
    step: [
      "Wird als 23 exakte Flächen exportiert: ein ebener Boden und senkrechte Wände, jede gerundete Ecke der Aussparung ein echter Zylinder mit dem eingestellten Radius – eine CNC-Fräse kann die Einlage direkt aus der STEP-Datei fräsen.",
    ],
    aiFaqs: [
      {
        q: "Kann die Aussparung der Kontur meines eigenen Werkzeugs folgen?",
        a: "Ja. Ziehen Sie die acht Konturpunkte auf der Skizzenfläche, oder klicken Sie auf „AI edit“ und geben Sie die Maße an („ein Körper von 150 × 22 mm mit einem Griff von 40 × 30 mm“) – dann schreibt die KI die Kontur neu. Sie arbeiten nach einem Foto? Kopieren Sie die Einlage in Ihre Modelle und geben Sie das Foto dem KI-Agenten.",
      },
      {
        q: "Wie erstelle ich eine Einlage mit 200 × 120 mm und 12 mm tiefer Aussparung?",
        a: "https://www.forgent3d.com/de/generators/tool-tray-generator?TRAY_L=200&TRAY_W=120&TRAY_T=15&PART_DEPTH=12 – die Einlage muss mindestens 1,5 mm dicker sein, als die Aussparung tief ist; 12 mm Tiefe brauchen also 13,5 mm oder mehr.",
      },
    ],
    keywords: [
      "werkzeugeinlagen 3d druck",
      "werkzeugeinlage nach maß",
      "werkzeugeinlagen drucken",
      "schubladeneinsatz werkzeug stl",
      "alternative zu schaumstoffeinlagen",
    ],
  },

  "2020-corner-bracket-generator": {
    copy: {
      name: "2020-Winkelverbinder-Generator",
      title: "2020-Winkelverbinder-Generator — für Aluprofile (STL / STEP) | Forgent3D",
      description:
        "3D-druckbarer Winkelverbinder für 2020-Aluprofil: Nut 6/5/4 mm, M3–M5, Schenkellänge, Langlöcher, Führungsnasen, Seitenwände. STL/STEP gratis, ohne CAD-Installation.",
      h1: "2020-Winkelverbinder-Generator: der Druckgusswinkel – druckbar und in der Größe anpassbar",
      intro:
        "Ausgangspunkt ist der Druckguss-Eckwinkel 20 × 20 × 17, den Adafruit, OpenBuilds und Misumi verkaufen; dann passen Sie ihn an Ihren Rahmen an: Nutstandard Ihres Profils und Schraube wählen, Schenkel verlängern, Platte verstärken. Das Modell baut sich in Ihrem Browser als echtes CAD neu auf, die STEP-Datei lässt sich also direkt in Fusion oder FreeCAD übernehmen.",
      whyPoints: [
        "Passt in Nuten nach EU / B-type / V-slot (6 mm), I-type (5 mm) und chinesischer GB-Norm (4 mm)",
        "4 mm breite Führungsnasen wie bei den Druckgusswinkeln – keine Nase muss in eine enge Nut gezwängt werden",
        "Langlöcher mit 3 mm Verstellweg, um den Rahmen rechtwinklig auszurichten",
        "Export als STEP und STL; was die Schieberegler nicht abdecken, ändert der KI-Agent",
      ],
      faqs: [
        {
          q: "Welche Schrauben und Nutensteine brauche ich?",
          a: "M5 ist der Standard für 2020-Profile mit 6-mm-Nut (die Winkel von Misumi, OpenBuilds und Alux nehmen alle M5×8 mit einem Nutenstein zum Einschieben oder Einschwenken; Misumi bietet auch M4-Versionen an). Mit der voreingestellten gedruckten 4-mm-Platte nehmen Sie M5×10 – die 3-mm-Platte eines Druckgusswinkels braucht M5×8, und gedruckte Winkel auf MakerWorld geben M5×10 an, oder ×12 mit Unterlegscheibe.",
        },
        {
          q: "Passen die Nasen in mein Profil?",
          a: "Die Nasen sind 4 mm breit, genau wie bei den Druckgusswinkeln von OpenBuilds und Adafruit, und gleiten daher mit Luft in 6-mm- und 5-mm-Nuten; für eine 4-mm-GB-Nut wird die Nase 3,2 mm breit. Zu stramme Nasen sind die häufigste Klage über gedruckte Winkel – ist Ihr Profil ungewöhnlich, schalten Sie die Nasen ab.",
        },
        {
          q: "Mit welchem Material und welchen Einstellungen soll ich drucken?",
          a: "PETG, ASA oder ABS – Maker berichten, dass sich PLA-Winkel unter Last langsam verformen. Mehr Perimeter bringen mehr als mehr Infill: 4–5 Wände sind die übliche Empfehlung. Drucken Sie den Winkel auf einer Seitenwand liegend; nichts braucht Stützen.",
        },
      ],
    },
    params: {
      SLOT: { label: "Profilnut", desc: "6 mm: EU / B-type / V-slot. 5 mm: I-type. 4 mm: chinesische GB-Norm." },
      SCREW: { label: "Schraube", desc: "Durchgangslöcher nach ISO 273, Reihe mittel: 3,4 / 4,5 / 5,5 mm." },
      LEG: {
        label: "Schenkellänge",
        desc: "20 entspricht dem Druckgusswinkel 20×20×17; längere Schenkel bekommen alle 20 mm ein weiteres Loch.",
      },
      WIDTH: { label: "Breite", desc: "17 ist die Breite des Druckgusswinkels; 20 füllt die ganze Profilseite." },
      THICKNESS: { label: "Plattendicke", desc: "Druckgusswinkel haben 3 mm; gedruckte meist 4 mm oder mehr." },
      SLOTTED: { label: "Langlöcher", desc: "3 mm Verstellweg entlang des Schenkels, um den Rahmen rechtwinklig auszurichten." },
      TABS: {
        label: "Führungsnasen",
        desc: "Zwei 4-mm-Nasen pro Schenkel greifen in die Nut und verhindern, dass sich der Winkel verdreht.",
      },
      SIDE_WALLS: { label: "Seitenwände", desc: "Dreieckige Wände auf beiden Seiten, wie beim Druckgusswinkel." },
    },
    example: "6-mm-Nut (EU / B-type / V-slot), M5-Schrauben, 30-mm-Schenkel",
    step: [
      "Wird als 40 exakte Flächen exportiert: 36 Planflächen plus die gerundeten Enden der beiden Langlöcher als echte Zylinder – echte Lochachsen, an denen Sie den Winkel im CAD in einer Rahmenbaugruppe ausrichten können.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich einen 2020-Winkelverbinder für 6-mm-Nut mit M5-Schrauben und 30-mm-Schenkeln?",
        a: "https://www.forgent3d.com/de/generators/2020-corner-bracket-generator?SLOT=6&SCREW=M5&LEG=30 öffnet genau diesen Winkel. Laden Sie STL zum Drucken herunter (PETG ist die übliche Wahl) oder STEP für Ihre Rahmenbaugruppe.",
      },
      {
        q: "Gibt es auch eine Dreiwege-Ecke oder einen anderen Winkel als 90°?",
        a: "Nicht mit den Schiebereglern – der Winkel folgt dem Druckgussteil 20 × 20 × 17. Klicken Sie im Generator auf „AI edit“ und beschreiben Sie die Änderung, oder kopieren Sie den Winkel in Ihre Modelle und arbeiten Sie sie mit dem KI-Agenten aus.",
      },
    ],
    keywords: [
      "2020 winkelverbinder",
      "winkelverbinder aluprofil 20x20",
      "2020 eckwinkel stl",
      "aluprofil 20x20 winkel 3d druck",
      "2020 corner bracket stl",
    ],
  },

  "pillow-block-bearing-holder-generator": {
    copy: {
      name: "Stehlager-Generator",
      title: "Stehlager-Generator — 608, 625, 6000, 6800 (STL / STEP) | Forgent3D",
      description:
        "3D-druckbares Stehlager für 14 Standard-Kugellager; mit 608 im KP08-Lochbild (Lochabstand 42, Achshöhe 15 mm). Presspassung, Bund, Wand, Fuß einstellbar. STL/STEP gratis.",
      h1: "Stehlager-Generator: KP08-Lochbild, jedes gängige Kugellager",
      intro:
        "Wählen Sie Ihr Lager – 608, 625, 688, 6000er-Reihe, 6800er-Reihe – und erhalten Sie einen gedruckten Lagerbock, der es aufnimmt. Mit dem voreingestellten 608 trifft er die Befestigungslöcher und die Achshöhe des KP08 und passt damit genau dorthin, wo ein KP08 saß. Die Passung des Lagersitzes ist ein Schieberegler, weil jeder Drucker Löcher etwas anders druckt.",
      whyPoints: [
        "Voreinstellung 608 entspricht dem KP08: 55 mm lang, 42 mm Lochabstand, 15 mm Achshöhe, M4",
        "14 Lager aus der Tabelle der DIN 625, einzeln oder zwei nebeneinander",
        "Sitzpassung von −0,20 bis +0,30 mm, 2 mm Anlagebund und 0,5 mm Einführfase",
        "Wird mit der Bundseite nach unten ohne Stützen gedruckt; STEP-Export für Ihr CAD",
      ],
      faqs: [
        {
          q: "Welche Sitzpassung soll ich nehmen?",
          a: "Beginnen Sie mit den voreingestellten +0,10 mm: Ein Autor auf Printables stellte fest, dass sich ein 608 aus Metall in einem 22,1-mm-Sitz ohne Werkzeug ein- und ausbauen lässt. Sitzt Ihres zu locker, gehen Sie enger – in einer Studie von 2024 wurden Lager in PETG-Sitze mit 0,1 und 0,2 mm Untermaß gepresst. Drucker sind verschieden, gehen Sie also in Schritten von 0,05 vor.",
        },
        {
          q: "Kann es ein KP08-Stehlager ersetzen?",
          a: "Es hat das Lochbild des KP08 – 42 mm Lochabstand, 15 mm Achshöhe, Löcher Ø4,5 – und lässt sich daher an dieselben Löcher schrauben. Es nimmt ein einfaches 608 auf, nicht den selbstausrichtenden Lagereinsatz mit Madenschrauben des KP08; richten Sie die Wellen also sorgfältig aus.",
        },
        {
          q: "Wie drucke ich es, und wie presse ich das Lager ein?",
          a: "Drucken Sie es mit der Bundseite nach unten in PETG oder ABS; Maker berichten, dass Lagerböcke aus PLA bei strammer Passung reißen. Pressen Sie das Lager mit Schraubstock oder Zwinge ein, nicht mit dem Hammer – die 0,5-mm-Einführfase hilft, dass es gerade ansetzt.",
        },
      ],
    },
    params: {
      BEARING: { label: "Lager", desc: "14 gängige Rillenkugellager, Maße aus der Tabelle der DIN 625." },
      FIT: {
        label: "Sitzpassung",
        desc: "Wird zum Außendurchmesser des Lagers addiert. Mit +0,10 lässt sich ein 608 aus Metall von Hand einpressen; negative Werte ergeben eine strammere Presspassung.",
      },
      COUNT: { label: "Lager nebeneinander", desc: "Zwei Lager in einem Block für eine steifere Welle." },
      LIP: { label: "Anlagebund", desc: "Eine 2-mm-Schulter, an der der Außenring anliegt." },
      WALL: { label: "Wand über dem Lager", desc: "3 mm entspricht der Wand, die ein KP08 über einem 608 lässt." },
      BASE: { label: "Fußdicke", desc: "KP08: 5, KP000: 6, KP001: 7." },
      SCREW: { label: "Befestigungsschraube", desc: "M4 passt zu den Ø4,5-Löchern des KP08." },
    },
    example: "Lager 6201 (12 × 32 × 10), M5-Schrauben",
    step: [
      "Wird als 19 exakte Flächen exportiert: Lagersitz und Schraubenlöcher sind echte Zylinder, die Einführfase an der offenen Seite ist ein echter Kegel. Der Sitzdurchmesser ist exakt der Außendurchmesser des Lagers plus die eingestellte Passung.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich ein Stehlager für ein 6201-Lager mit M5-Schrauben?",
        a: "https://www.forgent3d.com/de/generators/pillow-block-bearing-holder-generator?BEARING=6201&SCREW=M5 – die Sitzpassung steht standardmäßig auf +0,10 mm im Durchmesser; stimmen Sie sie nach einem Testdruck ab.",
      },
      {
        q: "Kann es zwei Lager aufnehmen oder eine Schmierbohrung bzw. eine Madenschraube bekommen?",
        a: "Zwei Lager nebeneinander sind ein Parameter (COUNT=2). Für eine Schmierbohrung oder eine Madenschraube klicken Sie im Generator auf „AI edit“ und sagen, wo; die KI ändert die model.py des Lagerbocks direkt auf der Seite.",
      },
    ],
    keywords: [
      "stehlager 3d druck",
      "lagerbock 3d druck",
      "kp08 stehlager ersatz",
      "kugellager halterung 608",
      "stehlager stl",
    ],
  },

  "fan-grill-generator": {
    copy: {
      name: "Lüftergitter-Generator",
      title: "Lüftergitter-Generator — 40/80/92/120/140 mm (STL / STEP) | Forgent3D",
      description:
        "3D-Druck-Lüftergitter, 25–140 mm: Ringe und Speichen wie ein Drahtgitter, Lochabstand nach ARCTIC-Zeichnungen und Messtabellen, alle Maße einstellbar. STL/STEP gratis.",
      h1: "Lüftergitter-Generator: das Drahtgitter-Muster zum Drucken",
      intro:
        "Wählen Sie die Lüftergröße und erhalten Sie ein druckbares Schutzgitter, das sich direkt anschrauben lässt – Lochabstand nach den Zeichnungen von ARCTIC und der gemessenen Lüftertabelle von NopSCADlib, 2 mm Abstand zu den Lüfterblättern. Das Muster kopiert bewusst das Drahtschutzgitter aus Stahl: Im Windkanal kosteten Drahtgitter kaum Luftdurchsatz, eine zur Hälfte offene Wabenplatte dagegen etwa ein Fünftel.",
      whyPoints: [
        "10 Größen von 25 bis 140 mm, Lochabstände nach ARCTIC-Zeichnungen und gemessenen Lüftertabellen",
        "Ringe und Speichen wie beim Drahtgitter: das Muster mit dem geringsten Luftverlust in Tests",
        "Keine Öffnung überschreitet Ihr Limit – mit maximal 12,7 mm bleiben Finger draußen",
        "Wird flach ohne Brücken gedruckt; Export als STEP und STL",
      ],
      faqs: [
        {
          q: "Warum Ringe und Speichen statt Waben?",
          a: "Weil das mehr Luft durchlässt und leiser ist. hwcooling hat gemessen: Ein Drahtgitter kostet 0–2 % des Luftdurchsatzes eines 120-mm-Lüfters, ein zur Hälfte mit Metall bedecktes Sechseckblech dagegen etwa 20 % – und ist 3 dBA lauter. Auch im Gittertest von Puget Systems schnitten Drahtgitter am besten ab. Gedruckte Gitter hat noch niemand gemessen; dünnere Stege und größere Öffnungen sind also die sicherere Seite.",
        },
        {
          q: "Welche Schrauben brauche ich?",
          a: "Ab 50 mm geht die übliche selbstschneidende Lüfterschraube durch das Gitter in den Lüfter; die Löcher haben 5 mm, so groß wie die Ösen der Stahlgitter von ARCTIC. Lüfter mit 40 mm und kleiner nehmen M3 (M2,5 bei 25 mm). Das Gitter bringt seine eigene Dicke mit, die Schraube muss also um so viel länger sein als beim nackten Lüfter.",
        },
        {
          q: "Wie sollte ich es drucken?",
          a: "Flach, mit der Ringseite nach unten, genau so, wie es erzeugt wird – nichts überbrückt, also keine Stützen. Halten Sie die Stege mit einer 0,4-mm-Düse bei 1,2 mm oder breiter. Nehmen Sie PETG, wenn das Gitter nahe an einer Wärmequelle sitzt.",
        },
      ],
    },
    params: {
      FAN: {
        label: "Lüftergröße",
        desc: "Lochabstand nach den Zeichnungen von ARCTIC (40, 80, 92, 120, 140 mm) und der gemessenen Lüftertabelle von NopSCADlib (25, 30, 50, 60, 70 mm).",
      },
      BAR: { label: "Stegbreite", desc: "Ab 1,2 mm druckt eine 0,4-mm-Düse sauber." },
      GAP: {
        label: "Max. Öffnungsweite",
        desc: "Die Ringe sind gleichmäßig verteilt, sodass keine Lücke breiter ist als dieser Wert. 12,7 mm (½ Zoll) ist der OSHA-Grenzwert für Lüfterschutzgitter.",
      },
      GRILL_T: { label: "Gitterdicke", desc: "Die Ringlage, flach auf dem Druckbett gedruckt." },
      STANDOFF: {
        label: "Abstand zum Lüfter",
        desc: "Abstand zwischen Ringen und Lüfterblättern; die Stahlgitter von Noctua stehen 5 mm ab.",
      },
      SCREW: { label: "Schraubenloch", desc: "Auto: M2,5 unter 30 mm, M3 für 30–40 mm, ab 50 mm die 5-mm-Lüfterschraube." },
    },
    example: "92-mm-Lüfter (82,5 mm Lochabstand), M3-Löcher",
    step: [
      "Wird beim Standardgitter für 120 mm als 156 exakte Flächen exportiert: jeder Ring und jedes Schraubenloch ein echter Zylinder, Speichen und Rahmen eben – echte Lochpositionen, wenn das Gitter im CAD in eine Gehäusebaugruppe kommt.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich ein Lüftergitter für einen 92-mm-Lüfter mit M3-Schrauben?",
        a: "https://www.forgent3d.com/de/generators/fan-grill-generator?FAN=92&SCREW=M3 – der Lochabstand (82,5 mm) ergibt sich aus der Lüftergröße. Laden Sie STL herunter; das Gitter wird flach ohne Stützen gedruckt.",
      },
      {
        q: "Kann ich einen Filterschlitz, ein Logo oder ein anderes Muster ergänzen?",
        a: "Klicken Sie im Generator auf „AI edit“ und beschreiben Sie es; die KI ändert die model.py des Gitters direkt auf der Seite. Lassen Sie die Öffnungen groß: Das Muster aus Ringen und Speichen gibt es, weil Gitter nach Art der Drahtgitter den geringsten Luftverlust verursachen.",
      },
    ],
    keywords: [
      "lüftergitter 3d druck",
      "lüftergitter 120mm stl",
      "lüfterschutzgitter drucken",
      "lüftergitter generator",
      "pc lüfter gitter stl",
    ],
  },
};
