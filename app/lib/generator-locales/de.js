// Generator landing pages in this language (/de/generators/…), merged into GENERATORS by ../generators.js.
// Translated from the English entries: a generator is published in this language once its entry has `copy`.
// Shape and rules (numbers, links, lengths): scripts/check-generator-locales.mjs — run it after any change here.
export const shared = {
  catalogLabel: "Generatoren",
  catalogTitle: "3D-Druck-Generatoren — kostenlose parametrische Modelle | Forgent3D",
  catalogDescription:
    "Kostenlose 3D-Druck-Generatoren online: Gridfinity-Bins und -Baseplates, parametrische Boxen, Schlauchadapter, Trichter, Stirn-, Schrägzahn- und Kegelräder, Zahnstangen, GT2-Riemenscheiben, Wellenkupplungen, Unterlegscheiben, Werkzeugeinlagen, Winkelverbinder für 2020-Aluprofile, Stehlager, Lüftergitter, Kabeldurchführungen für den Schreibtisch, 18650-Akkuhalter, Rohrschellen, Bithalter, Filament-Spulenhalter, Raspberry-Pi- und Arduino-Gehäuse, Lochwandhaken, Regalhalter, Wandhaken und Handyständer. Parameter einstellen, in 3D prüfen, STL / STEP exportieren.",
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
        "Passende Zahnstange: Der Zahnstangen-Generator nutzt dieselbe Zahnform",
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

  "gear-rack-generator": {
    copy: {
      name: "Zahnstangen-Generator",
      title: "Zahnstangen-Generator — passend zu den Zahnrädern (STL / STEP) | Forgent3D",
      description:
        "Zahnstange nach Modul und Zähnezahl: Zähne nach ISO 53, die mit unseren Stirnrädern kämmen, anreihbare Enden, seitliche Befestigungslöcher. STL / STEP gratis.",
      h1: "Zahnstangen-Generator: Zahnstangen, die mit den Stirnrädern kämmen",
      intro:
        "Wählen Sie Modul und Eingriffswinkel Ihres Ritzels, dann die Zähnezahl – die Zahnstange ist genau so viele Teilungen lang, und beide Enden liegen mitten in einer Zahnlücke, sodass sich gedruckte Stücke zu einer längeren Strecke aneinanderreihen lassen. Sie nutzt die Zahnform nach ISO 53, mit der unsere Stirnräder wälzgefräst werden; das Paar kämmt also mit den vorgesehenen 0,2 mm Flankenspiel.",
      whyPoints: [
        "Dieselbe Zahnform nach ISO 53 wie beim Zahnrad-Generator – das Paar kämmt wie ausgelegt",
        "Länge in ganzen Teilungen, Enden mitten in der Zahnlücke: Stücke lassen sich stumpf aneinandersetzen",
        "Standardmäßig 20 mm hoch bei Modul 2, Wälzgerade auf 18 wie bei Zahnstangen mit quadratischem Querschnitt; jede Höhe einstellbar",
        "Optional seitliche Befestigungslöcher M3–M6 mit Senkbohrung, wie bei den Zahnstangen von KHK und MISUMI",
      ],
      faqs: [
        {
          q: "Wo sitzt das Ritzel?",
          a: "Seine Mitte liegt auf der Höhe der Wälzgeraden der Zahnstange plus dem Teilkreisradius des Ritzels (Modul × Zähnezahl / 2): mit den Standardwerten 18 + 20 = 38 mm für ein Ritzel mit 20 Zähnen und Modul 2. Das ist das Einbaumaß, das KHK für jede Paarung aus Zahnstange und Ritzel angibt.",
        },
        {
          q: "Wie lang kann ich eine Zahnstange am Stück drucken?",
          a: "Bei Modul 2 passen 40 Zähne (251,33 mm) gerade auf ein 256-mm-Druckbett oder 53 Zähne über dessen Diagonale; auf ein 220-mm-Druckbett 35 Zähne (219,91 mm, ohne Platz für einen Brim). Für eine längere Strecke drucken Sie Teilstücke und setzen sie aneinander – die Enden sind genau dafür gemacht.",
        },
        {
          q: "Wie herum soll ich sie drucken?",
          a: "Anleitungen zum Zahnraddruck legen das Zahnprofil flach aufs Druckbett – glatte Flanken, feste Zahnfüße –; drucken Sie die Zahnstange also auf der Seite liegend. Die seitlichen Befestigungslöcher werden dann zu sauberen senkrechten Bohrungen. PETG für eine Zahnstange im Einsatz, 4 oder mehr Wände.",
        },
      ],
    },
    params: {
      MODULE: { label: "Modul", desc: "Muss dem Modul des Ritzels entsprechen." },
      PRESSURE_ANGLE: { label: "Eingriffswinkel", desc: "20° bei jeder Katalog-Zahnstange; 25° nur passend zu einem Ritzel mit 25°." },
      TEETH: {
        label: "Zähnezahl",
        desc: "Länge = Zähnezahl × π × Modul; 15 bei Modul 2 ist die 100-mm-Standardzahnstange von MISUMI (94,25 mm).",
      },
      FACE_WIDTH: { label: "Zahnbreite", desc: "Mindestens so breit wie das Ritzel." },
      PITCH_HEIGHT: {
        label: "Höhe bis zur Wälzgeraden",
        desc: "18 ist bei Modul 2 die Wälzgerade einer Zahnstange mit quadratischem Querschnitt (HPC, MISUMI Edelstahl: 9 × Modul); die Stahlzahnstangen von KHK und MISUMI haben 23.",
      },
      HOLES: { label: "Befestigungslöcher", desc: "Seitlich quer durch die Zahnbreite, gleichmäßig verteilt, wie bei den Zahnstangen SRFD von KHK." },
      SCREW: { label: "Schraube", desc: "Loch- und Senkungsmaße aus den Zahnstangentabellen von MISUMI." },
      COUNTERBORE: { label: "Senkbohrung", desc: "Versenkt die Schraubenköpfe in der -Y-Seite." },
    },
    example: "Modul 1,5, 40 Zähne (188,5 mm), 2 Befestigungslöcher",
    step: [
      "Die Standard-Zahnstange mit 15 Zähnen wird als 96 exakte Flächen exportiert: Jede Zahnflanke ist eine echte Ebene – die geradflankige Zahnstangenform nach ISO 53 – und jede Fußrundung ein echter Zylinder (66 Ebenen, 30 Zylinder); im CAD lassen sich Flankenwinkel und Höhe der Wälzgeraden also direkt messen.",
      "Die Länge ist eine ganze Zahl von Teilungen (15 × π × 2 = 94,25 mm), und beide Enden liegen mitten in einer Zahnlücke – wie bei den anreihbaren Zahnstangen SRF von KHK und RGEA von MISUMI –, sodass zwei Zahnstangen stumpf aneinanderstoßen und die Teilung durchläuft.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich eine Zahnstange mit Modul 2 und etwa 200 mm Länge für ein Ritzel mit 20 Zähnen?",
        a: "200 / (π × 2) abgerundet ergibt 31 Zähne, 194,78 mm: https://www.forgent3d.com/de/generators/gear-rack-generator?MODULE=2&TEETH=31 – die Mitte des Ritzels liegt dann 18 + 20 = 38 mm über der Unterseite der Zahnstange (Höhe der Wälzgeraden + Teilkreisradius). Das Ritzel erstellen Sie mit dem Zahnrad-Generator im selben Modul.",
      },
      {
        q: "Kann ich gedruckte Zahnstangen zu einer längeren Strecke verbinden?",
        a: "Ja: Jede Zahnstange hier ist eine ganze Zahl von Teilungen lang, mit beiden Enden mitten in der Zahnlücke. Setzen Sie sie stumpf aneinander, legen Sie ein kurzes Stück Zahnstange kämmend über die Stoßstelle, um die Teilung auszurichten – so beschreiben es KHK und MISUMI für ihre Zahnstangen –, und schrauben oder verstiften Sie dann beide auf der Unterlage.",
      },
    ],
    keywords: [
      "zahnstange 3d druck",
      "zahnstange stl",
      "zahnstange generator",
      "zahnstange modul 1",
      "zahnstange und ritzel 3d druck",
    ],
  },

  "helical-gear-generator": {
    copy: {
      name: "Schrägzahnrad-Generator",
      title: "Schrägzahnrad-Generator — Modul, Schrägungswinkel, links/rechts | Forgent3D",
      description:
        "Schrägverzahnte Evolventen-Zahnräder online: Normalmodul, Zähnezahl, Schrägungswinkel, links- oder rechtssteigend, Zahnbreite, Bohrung. Wälzgefräst, STL/STEP gratis.",
      h1: "Schrägzahnrad-Generator mit echter Evolventenverzahnung",
      intro:
        "Stellen Sie Normalmodul, Zähnezahl, Schrägungswinkel und Flankenrichtung ein – der Generator schneidet den Zahn quer zur Achse mit derselben Zahnstange nach ISO 53 wie unsere Stirnräder und verdreht ihn dann entlang der Achse; ein links- und ein rechtssteigendes Zahnrad mit gleichem Modul und Schrägungswinkel kämmen so auf parallelen Wellen. Schräge Zähne nehmen die Last allmählich auf, ein Paar läuft daher leiser als geradverzahnte Stirnräder.",
      whyPoints: [
        "Normalmodul und Normaleingriffswinkel – so, wie KHK SH, MISUMI und chinesische Kataloge sie angeben",
        "Links- oder rechtssteigend: Parallele Wellen brauchen entgegengesetzte Flankenrichtungen, um 90° gekreuzte Wellen dieselbe bei 45°",
        "Die Standard-Zahnbreite umfasst eine Axialteilung (Sprungüberdeckung ≈ 1), wie bei Katalogzahnrädern",
        "Runde oder Sechskantbohrung, nach dem Verdrehen als echter Zylinder bzw. echtes Prisma geschnitten",
      ],
      faqs: [
        {
          q: "Welchen Achsabstand brauchen zwei Schrägzahnräder?",
          a: "Normalmodul × (Zähnezahl₁ + Zähnezahl₂) / (2 × cos Schrägungswinkel). Die Achsabstandstabelle von KHK stimmt damit auf das Hundertstel überein: SH2-15 und SH2-20 mit 15° liegen 36,23 mm auseinander.",
        },
        {
          q: "Lassen sich Schrägzahnräder ohne Stützen drucken?",
          a: "Ja: Jedes gedruckte Schräg- und Pfeilzahnrad mit angegebenen Druckeinstellungen, das wir gefunden haben, wird flach auf dem Druckbett ohne Stützen gedruckt, bei Schrägungswinkeln von 15–30°. Nehmen Sie 4–6 Wände, 0,16–0,2 mm Schichthöhe und für Last PETG oder Nylon.",
        },
        {
          q: "Warum ist bei 40 Zähnen Schluss?",
          a: "Jede Änderung baut das Zahnrad in Ihrem Browser neu auf, und die verdrehten Zahnflächen kosten zusätzlich zum übrigen Aufbau etwa 0,12 s pro Zahn: Bei 40 Zähnen braucht das langsamste zulässige Zahnrad etwa 6 s. 8–40 deckt Ritzel und Räder bis zum Extruderzahnrad von Wade mit 39 Zähnen ab; für ein größeres Rad kopieren Sie das Zahnrad in Ihre Modelle und bitten den KI-Agenten darum – es baut sich nur langsamer neu auf.",
        },
      ],
    },
    params: {
      MODULE: {
        label: "Normalmodul",
        desc: "Normalmodul, wie es KHK SH, MISUMI und chinesische Kataloge angeben; Zahnräder, die miteinander kämmen, haben dasselbe.",
      },
      TEETH: { label: "Zähnezahl", desc: "Teilkreisdurchmesser = Modul × Zähnezahl / cos(Schrägungswinkel)." },
      PRESSURE_ANGLE: { label: "Normaleingriffswinkel", desc: "20° ist Standard." },
      HELIX_ANGLE: {
        label: "Schrägungswinkel",
        desc: "15–21,5° bei Katalogzahnrädern für parallele Wellen; 45° für um 90° gekreuzte Wellen.",
      },
      HAND: {
        label: "Flankenrichtung",
        desc: "Parallele Wellen: entgegengesetzte Richtungen. Um 90° gekreuzte Wellen: dieselbe Richtung.",
      },
      FACE_WIDTH: {
        label: "Zahnbreite",
        desc: "20 umfasst bei Modul 2 und 20° eine Axialteilung (Sprungüberdeckung ≈ 1), wie bei Katalogzahnrädern.",
      },
      BORE_STYLE: { label: "Bohrungsart", desc: "Rund für die Welle oder als Sechskantaufnahme." },
      BORE_D: { label: "Bohrungsmaß", desc: "Wellendurchmesser oder Schlüsselweite des Sechskants; 5 passt auf einen NEMA-17-Motor." },
    },
    example: "Modul 1,5, 30 Zähne, Schrägungswinkel 20°, linkssteigend",
    step: [
      "Jede Zahnfläche ist eine einzige glatte B-Spline-Fläche, die der Schraubenlinie folgt: Das Standardzahnrad mit 20 Zähnen wird als 83 Flächen exportiert – 80 Zahnflächen, die beiden Stirnflächen und die Bohrung als echter Zylinder, nach dem Verdrehen geschnitten, sodass sich ihr Durchmesser im CAD exakt ablesen lässt.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich ein Paar Schrägzahnräder mit 15 und 30 Zähnen, Modul 2?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/helical-gear-generator?MODULE=2&TEETH=15&HAND=right und https://www.forgent3d.com/de/generators/helical-gear-generator?MODULE=2&TEETH=30&HAND=left – parallele Wellen brauchen denselben Schrägungswinkel und entgegengesetzte Flankenrichtungen. Beim voreingestellten Winkel von 20° kämmen sie bei 2 × (15 + 30) / (2 × cos 20°) = 47,89 mm Achsabstand.",
      },
      {
        q: "Welchen Schrägungswinkel soll ich nehmen?",
        a: "Katalogzahnräder für parallele Wellen haben 15° (KHK SH) bis 21,5° (KHK KHG); gedruckte Schrägzahnräder liegen bei 15–30° und werden flach ohne Stützen gedruckt. Für um 90° gekreuzte Wellen nehmen Sie an beiden Zahnrädern 45° mit derselben Flankenrichtung, wie MISUMI und HPC: https://www.forgent3d.com/de/generators/helical-gear-generator?HELIX_ANGLE=45&FACE_WIDTH=10",
      },
    ],
    keywords: [
      "schrägzahnrad 3d druck",
      "schrägverzahntes zahnrad stl",
      "schrägverzahnung generator",
      "schrägstirnrad",
      "zahnrad schrägverzahnt 3d druck",
    ],
  },

  "bevel-gear-generator": {
    copy: {
      name: "Kegelrad-Generator",
      title: "Kegelrad-Generator — Kegelradpaare nach Modul & Übersetzung | Forgent3D",
      description:
        "Gerade Kegelräder online: Modul, Zähnezahlen beider Räder, Achswinkel 45–120°, Bohrung und Nabe. Kegelradpaare 1:1 sowie 1:2 oder 1:3, STL / STEP gratis.",
      h1: "Kegelrad-Generator für Kegelradpaare – mit und ohne Übersetzung",
      intro:
        "Geben Sie Modul, die Zähnezahl dieses Rads und die des Gegenrads sowie den Achswinkel an – daraus legt der Generator beide Teilkegel fest, sodass sich die zwei Räder, die Sie erzeugen, in einer gemeinsamen Kegelspitze treffen und kämmen. Die Zähne sind die wälzgefräste Evolvente unserer Stirnräder, auf den Rückenkegel jedes Rads gelegt (Tredgold-Näherung) und gerade bis zur Kegelspitze geführt.",
      whyPoints: [
        "Jedes Paar: 1:1 oder 1:1,5, 1:2, 1:3 – das Gegenrad entsteht, wenn Sie die beiden Zähnezahlen tauschen",
        "Achswinkel von 45° bis 120°, wie bei den 1:1-Kegelrädern von KHK für schräge Achsen",
        "Zahnbreite höchstens ein Drittel der Teilkegellänge, so wie KHK sie auslegt",
        "Nabe auf der Rückseite und Bohrung wie beim PM1.5-20 von KHK; 0,1 mm Flankenspiel pro Rad",
      ],
      faqs: [
        {
          q: "Wie baue ich ein Kegelradpaar ein?",
          a: "Die Teilkegel beider Räder müssen eine gemeinsame Spitze haben – dort, wo sich die beiden Wellen kreuzen. Mit den Standardwerten (Modul 1,5, 20/20 bei 90°) liegt die Kegelspitze 15 mm über dem großen Ende der Verzahnung – 28 mm über der Unterseite der 13 mm langen Nabe.",
        },
        {
          q: "Wie herum soll ich ein Kegelrad drucken?",
          a: "Auf dem Rücken – Nabe unten, Zähne oben –, so wie Maker sie drucken; einem Maker, der kleine Kegelräder mit den Zähnen nach unten auf einem Ring druckte, sind Zähne abgeschert. Keine Stützen nötig; 3–6 Wände, PETG für Zahnräder im Einsatz.",
        },
        {
          q: "Warum entsteht immer nur ein Rad?",
          a: "Jede Änderung baut das Rad in Ihrem Browser neu auf, und nur das eine aufzubauen, das Sie gerade ansehen, hält das schnell. Beide Räder entstehen auf derselben Seite: Für das Gegenrad tauschen Sie TEETH und MATE_TEETH.",
        },
      ],
    },
    params: {
      MODULE: { label: "Modul (großes Ende)", desc: "Am großen Ende gemessen, wie KHK und MISUMI es angeben; beide Räder haben dasselbe." },
      TEETH: { label: "Zähnezahl", desc: "Die dieses Rads." },
      MATE_TEETH: {
        label: "Zähnezahl des Gegenrads",
        desc: "Das andere Rad; zusammen mit dem Achswinkel legt sie beide Teilkegel fest.",
      },
      SHAFT_ANGLE: { label: "Achswinkel", desc: "Winkel zwischen den beiden Wellen." },
      PRESSURE_ANGLE: { label: "Eingriffswinkel", desc: "20° bei jedem Katalog-Kegelrad." },
      BORE_STYLE: { label: "Bohrungsart", desc: "Rund für die Welle oder als Sechskantaufnahme." },
      BORE_D: {
        label: "Bohrungsmaß",
        desc: "Wellendurchmesser oder Schlüsselweite des Sechskants; das PM1.5-20 von KHK hat eine 8-mm-Bohrung.",
      },
      HUB_LENGTH: {
        label: "Nabenlänge",
        desc: "Nabe auf der Rückseite, bemessen wie beim PM1.5-20 von KHK (Ø26 × 13), aber knapp innerhalb der Zahnfüße: Ø24,1 bei den Voreinstellungen.",
      },
    },
    example: "Ritzel mit 15 Zähnen aus einem Paar 1:2 (Gegenrad: 30 Zähne)",
    step: [
      "Das Standardrad wird als 85 exakte Flächen exportiert: 40 Zahnflanken, dazu die Kopf- und Fußflächen als 40 echte Kegelflächen, die alle auf die Spitze des Teilkegels zeigen – die Geometrie eines geradverzahnten Kegelrads, kein Stapel von Scheiben –, außerdem 3 Planflächen sowie Nabe und Bohrung als echte Zylinder.",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich ein Paar 90°-Kegelräder mit Übersetzung 1:2?",
        a: "Beide auf derselben Seite: https://www.forgent3d.com/de/generators/bevel-gear-generator?TEETH=15&MATE_TEETH=30 ist das Ritzel und https://www.forgent3d.com/de/generators/bevel-gear-generator?TEETH=30&MATE_TEETH=15 sein Gegenrad – das 1:2-Paar, das KHK ab Lager führt. Bauen Sie sie so ein, dass sich ihre Kegelspitzen dort treffen, wo sich die Wellen kreuzen.",
      },
      {
        q: "Kann ich 1:1-Kegelräder für Wellen unter 60° oder 120° erstellen?",
        a: "Ja, stellen Sie den Achswinkel ein: https://www.forgent3d.com/de/generators/bevel-gear-generator?SHAFT_ANGLE=60 – KHK verkauft 1:1-Kegelräder für 45°, 60° und 120°, und der Generator nimmt jeden Wert von 45° bis 120°.",
      },
    ],
    keywords: [
      "kegelrad 3d druck",
      "kegelrad stl",
      "kegelrad generator",
      "kegelzahnrad stl",
      "kegelradgetriebe 3d druck",
    ],
  },

  "gt2-pulley-generator": {
    copy: {
      name: "GT2-Riemenscheiben-Generator",
      title: "GT2-Riemenscheiben-Generator — Nabe & Madenschrauben (STL) | Forgent3D",
      description:
        "GT2-Zahnriemenscheiben für 2- oder 3-mm-Riemen: Zähnezahl, Riemenbreite, Bordscheiben, Bohrung 2–8 mm, Nabe mit Madenschrauben, Passung der Zahnlücken. STL/STEP gratis.",
      h1: "GT2-Riemenscheiben-Generator für 3D-Drucker und kleine CNC-Maschinen",
      intro:
        "Wählen Sie Zähnezahl, Riemenbreite und Bohrung – der Außendurchmesser wird genau wie bei GT2-Riemenscheiben aus Aluminium (20 Zähne: 12,22 mm), mit Bordscheiben, einer Nabe und zwei Madenschrauben in Mutterntaschen. Gates veröffentlicht das Profil der GT2-Zahnlücke nicht; jede Zahnlücke entsteht daher aus der veröffentlichten Zahnform des Riemens, mit einer Passung, die Sie auf Ihren Drucker abstimmen.",
      whyPoints: [
        "Außendurchmesser = Teilkreisdurchmesser − 2 × 0,254, geprüft an Riemenscheiben von MISUMI, SDP/SI und Adafruit",
        "Zahnlücken nach dem veröffentlichten Zahn des GT2-Riemens, dazu eine Passung, die Sie in Schritten von 0,1 mm einstellen",
        "Bordscheiben mit Außendurchmesser + 5, eine Nabe mit zwei um 90° versetzten Madenschrauben in Mutterntaschen",
        "Umlenkrollen-Modus: keine Nabe, nur der verzahnte Körper und die Bordscheiben",
      ],
      faqs: [
        {
          q: "Welches ist die kleinste GT2-Riemenscheibe, die sich zu drucken lohnt?",
          a: "Dieser Generator geht bis 16 Zähne hinunter. Unter etwa 20 sind nur wenige Riemenzähne im Eingriff, und die Zahnköpfe der Riemenscheibe sind bei jeder Zähnezahl nur wenige Zehntelmillimeter breit – etwa eine einzige 0,4-mm-Linie –; viele Maker drucken daher 20 oder mehr.",
        },
        {
          q: "Wie drucke ich eine GT2-Riemenscheibe sauber?",
          a: "Flach auf dem Druckbett, Bordscheibe nach unten, ohne Stützen; 0,1–0,16 mm Schichthöhe für die Zähne, Außenwände zuerst, mindestens 4 Wände. PETG, ABS, ASA oder Nylon; PLA nur für leichte Lasten.",
        },
        {
          q: "Wie viele Schritte/mm braucht eine Riemenscheibe mit 20 Zähnen?",
          a: "Eine Umdrehung bewegt Zähnezahl × 2 mm Riemen: 40 mm bei 20 Zähnen. Ein Motor mit 200 Schritten macht bei 16 Mikroschritten 3200 Schritte pro Umdrehung, also 3200 / 40 = 80 Schritte/mm.",
        },
      ],
    },
    params: {
      PROFILE: { label: "Riemenprofil", desc: "2 mm Teilung ist der Riemen der 3D-Drucker." },
      TEETH: {
        label: "Zähnezahl",
        desc: "Außendurchmesser = Zähnezahl × 2 / π − 0,508 (20 Zähne: 12,22 mm); eine Umdrehung bewegt Zähnezahl × 2 mm Riemen. Bis 60, die größte MISUMI-2GT-Scheibe ab Lager.",
      },
      BELT_WIDTH: { label: "Riemenbreite", desc: "Der verzahnte Teil ist 1 mm breiter, wie bei den Riemenscheiben von MISUMI." },
      FIT: { label: "Passung der Zahnlücken", desc: "Weitet jede Zahnlücke für den Druck; in Schritten von 0,1 verstellen." },
      FLANGES: { label: "Bordscheiben", desc: "Außendurchmesser + 5 mm, 1,5 mm dick: Sie halten den Riemen auf der Scheibe." },
      BORE_D: { label: "Bohrung", desc: "Wellenmaß; 0,15 mm Druckspiel werden hinzugefügt. 5 für NEMA-17-Motoren." },
      HUB: { label: "Nabe", desc: "Ohne Nabe (none) entsteht eine Umlenkrolle: nur der verzahnte Körper und die Bordscheiben." },
      SET_SCREWS: {
        label: "Madenschrauben",
        desc: "In der Nabe, um 90° versetzt, mit Mutterntaschen; M3 bis 5 mm Bohrung, darüber M4.",
      },
    },
    example: "40 Zähne, 8-mm-Bohrung",
    step: [
      "Jede der 20 Zahnlücken wird als eine einzige glatte extrudierte Fläche exportiert – ein Spline, kein Polygon –, die Zahnköpfe dazwischen als echte Zylinder auf dem Außendurchmesser von 12,22 mm: insgesamt 63 Flächen, sodass das CAD Außendurchmesser, Bohrung und Bordscheibe direkt misst.",
    ],
    aiFaqs: [
      {
        q: "Wie bekomme ich eine GT2-Riemenscheibe mit 20 Zähnen für eine 5-mm-Motorwelle und einen 6-mm-Riemen?",
        a: "https://www.forgent3d.com/de/generators/gt2-pulley-generator?TEETH=20&BORE_D=5&BELT_WIDTH=6 – 12,22 mm Außendurchmesser wie bei den Aluminiumscheiben, Bordscheiben und zwei M3-Madenschrauben in Mutterntaschen. Laden Sie STL herunter und drucken Sie die Scheibe mit der Bordscheibe nach unten, ohne Stützen.",
      },
      {
        q: "Meine gedruckte Riemenscheibe ist zu stramm für den Riemen, oder der Riemen springt über. Was ändere ich?",
        a: "FIT weitet jede Zahnlücke: Beginnen Sie bei 0,2 (dem Standardwert von droftarts) und verstellen Sie in Schritten von 0,1 – https://www.forgent3d.com/de/generators/gt2-pulley-generator?FIT=0.3 – und drucken Sie die Zähne dann mit 0,1–0,16 mm Schichthöhe, Außenwänden zuerst und 4 oder mehr Wänden.",
      },
    ],
    keywords: [
      "gt2 riemenscheibe stl",
      "gt2 zahnriemenscheibe 3d druck",
      "gt2 pulley stl",
      "gt2 riemenscheibe 20 zähne",
      "zahnriemenscheibe drucken",
    ],
  },

  "shaft-coupling-generator": {
    copy: {
      name: "Wellenkupplungs-Generator",
      title: "Wellenkupplungs-Generator — 5 × 8 mm, Motor auf Gewindespindel | Forgent3D",
      description:
        "Starre Wellenkupplungen: zwei Bohrungen 3–14 mm, Klemmschlitz oder Madenschrauben, M2,5–M4 mit eingelegten Muttern, Bohrungsspiel für den Druck. STL / STEP gratis.",
      h1: "Wellenkupplungs-Generator: starre Kupplungen für Motoren und Gewindespindeln",
      intro:
        "Geben Sie die beiden Wellenmaße ein – standardmäßig 5-mm-Motorwelle auf 8-mm-Gewindespindel – und Sie erhalten eine starre Kupplung mit Klemmschlitz oder Madenschrauben, die Muttern sitzen in gedruckten Mutterntaschen. Starr mit Absicht: An der Z-Achse eines 3D-Druckers kann sich eine flexible Kupplung als Streifenbildung (Banding) im Druck zeigen, und gedruckte Wendelkupplungen sind zu schwach, um sich zu lohnen.",
      whyPoints: [
        "Zwei beliebige Bohrungen von 3 bis 14 mm, dazu eine Spieleinstellung für gedruckte Löcher",
        "Geschlitzte Klemmung wie bei den einteiligen Kupplungen von BuildModHack und Ruland – oder zwei um 90° versetzte Madenschrauben",
        "Mutterntaschen für Sechskantmuttern und Senkbohrungen, bemessen für M2,5, M3 oder M4",
        "Standardmäßig 20 × 25 mm; größer nur, wenn Bohrung und Schraube mehr Wandstärke brauchen",
      ],
      faqs: [
        {
          q: "Starre oder flexible Kupplung?",
          a: "Starr für die Z-Achse eines 3D-Druckers: Ooznest weist darauf hin, dass eine flexible Kupplung dort die Druckqualität verschlechtern kann, und Wendelkupplungen sind nicht dafür gedacht, die axiale Last zu tragen. Flexible Kupplungen gleichen Fluchtfehler an Maschinen aus, die das brauchen – eine gedruckte starre Kupplung kann das nicht.",
        },
        {
          q: "Wie viel Bohrungsspiel brauche ich?",
          a: "Beginnen Sie mit den voreingestellten +0,3 mm (5,3 für eine 5-mm-Welle): Maker geben kleinen gedruckten Löchern +0,25–0,4, bei PETG etwas mehr als bei PLA. Zu locker, und die Kupplung rutscht durch; zu stramm, und sie reißt auf.",
        },
        {
          q: "Wie soll ich sie drucken?",
          a: "Stehend, damit die Bohrungen als runde, senkrechte Löcher entstehen; 4 Perimeter, mindestens 35 % Infill, PETG. Keine Stützen nötig.",
        },
      ],
    },
    params: {
      BORE_1: { label: "Bohrung 1 (Motor)", desc: "5 für einen NEMA-17-Motor." },
      BORE_2: { label: "Bohrung 2 (Gewindespindel)", desc: "8 für eine T8-Gewindespindel." },
      CLEARANCE: { label: "Bohrungsspiel", desc: "Wird zu beiden Bohrungen addiert: Gedruckte Löcher fallen zu klein aus." },
      FASTENING: {
        label: "Befestigung",
        desc: "Klemmung (clamp): ein Schlitz und eine Schraube pro Welle. Madenschrauben (set-screws): zwei pro Welle, um 90° versetzt.",
      },
      LENGTH: { label: "Länge", desc: "Jede Welle reicht bis zur halben Länge hinein." },
      SCREW: {
        label: "Schraube",
        desc: "Mit Mutter in einer Sechskanttasche; der Körper wird dicker als 20 mm, wenn Bohrung und Schraube es verlangen.",
      },
    },
    example: "6,35 mm (1/4\") auf 8 mm, Klemmung",
    step: [
      "Wird als 36 exakte Flächen exportiert – 27 Ebenen und 9 echte Zylinder (beide Bohrungen, der Außenmantel, die Schraubenlöcher und Senkbohrungen) –, sodass das CAD den Durchmesser jeder Bohrung und die Lage der Schrauben direkt abliest.",
    ],
    aiFaqs: [
      {
        q: "Wie drucke ich eine Kupplung für einen NEMA-17-Motor (5 mm) und eine T8-Gewindespindel (8 mm)?",
        a: "https://www.forgent3d.com/de/generators/shaft-coupling-generator?BORE_1=5&BORE_2=8 ist genau das: eine starre Klemmkupplung, 20 × 25 mm, mit einer M3-Schraube und Mutter pro Welle. Drucken Sie sie stehend in PETG, 4 Perimeter, mindestens 35 % Infill.",
      },
      {
        q: "Meine gedruckte Kupplung rutscht auf der Motorwelle durch. Was hilft?",
        a: "Drucken Sie sie in PETG statt PLA (eine warme Schrittmotorwelle macht PLA bei 50–60 °C weich, PETG bei 70–80 °C), nehmen Sie die Klemmung statt Madenschrauben – oder Madenschrauben um 90° versetzt: https://www.forgent3d.com/de/generators/shaft-coupling-generator?FASTENING=set-screws – und verringern Sie CLEARANCE, wenn die Bohrung zu locker ist. Bei einer Motorwelle mit D-Abflachung klicken Sie auf „AI edit“ und geben die Abflachung Ihrer Welle an.",
      },
    ],
    keywords: [
      "wellenkupplung 5mm 8mm",
      "kupplung 5 auf 8 mm",
      "starre wellenkupplung 3d druck",
      "wellenkupplung stl",
      "kupplung gewindespindel schrittmotor",
    ],
  },

  "desk-grommet-generator": {
    copy: {
      name: "Kabeldurchführungs-Generator",
      title: "Kabeldurchführungs-Generator — Schreibtisch, Ø30–100 mm (STL) | Forgent3D",
      description:
        "Kabeldurchführung für Ihr Tischloch: Hülse zum Einpressen und bündiger Deckel mit Kabelschlitz, geschlossen oder ohne. Gemessenes Loch 30–100 mm. STL/STEP gratis.",
      h1: "Kabeldurchführungs-Generator: Hülse und Deckel für jedes Kabelloch im Schreibtisch",
      intro:
        "Messen Sie das gebohrte Loch – standardmäßig 60 mm – und Sie erhalten die zwei Teile, die Hersteller als Kabeldurchführung verkaufen: eine Hülse mit Kragen, die ins Loch gepresst wird, und einen Deckel, der bündig mit dem Kragen darin liegt – mit U-Schlitz für die Kabel, geschlossen oder ganz ohne Deckel. Stellen Sie die Hülsentiefe passend zur Tischplatte ein und exportieren Sie STL zum Drucken oder STEP für das Möbel-CAD.",
      whyPoints: [
        "Jedes gemessene Loch von 30 bis 100 mm, mit einstellbarem Spiel für die Presspassung",
        "Deckel mit Kabelschlitz, geschlossener Deckel oder nur die Hülse – der Deckel liegt bündig, wie bei den Sets von Mockett, Häfele und Sugatsune",
        "Hülsentiefe 8–45 mm: 16 mm passt zu jeder Tischplatte ab 16 mm Stärke, oder Sie stellen die Stärke Ihrer Platte ein",
        "Beide Teile liegen so, wie sie gedruckt werden: keine Stützen",
      ],
      faqs: [
        {
          q: "Welches Maß gebe ich ein: die Lochsäge oder das Loch?",
          a: "Das gemessene Loch. Lochsägen schneiden etwas größer – eine gedruckte Kabeldurchführung für „70 mm“ passte am Ende in ein 65-mm-Loch –, messen Sie das Loch also mit dem Messschieber und geben Sie diesen Wert ein. Die Hülse wird standardmäßig 0,3 mm kleiner.",
        },
        {
          q: "Wie stramm soll die Hülse sitzen?",
          a: "Maker legen die Hülse 0,2–0,5 mm unter das Lochmaß, damit sie sich ohne Kraft einschieben lässt; Standard ist 0,3. Geht sie nicht hinein, erhöhen Sie das Spiel um 0,1; fällt sie heraus, verringern Sie es um 0,1. Ein zu groß geratenes Loch lässt sich noch mit einer dünnen Raupe Dichtmasse um die Hülse retten.",
        },
        {
          q: "Wie soll ich sie drucken?",
          a: "So, wie die Teile liegen: die Hülse mit dem Kragen nach unten, den Deckel mit der Oberseite nach unten, beide ohne Stützen. Die meisten gedruckten Kabeldurchführungen sind aus PLA; ABS oder PETG ergeben eine etwas griffigere Presspassung. Drucken Sie mit etwas Infill – um 15 % statt 0 % –, denn am Deckel wird immer wieder an Kabeln gezogen.",
        },
      ],
      sizes: {
        title: "Gängige Lochgrößen",
        intro: "Kragen = Loch + 12 mm (6 mm Rand je Seite); die Kabelöffnung ist der Innendurchmesser der Hülse, bei Standardspiel und 2,4 mm Wand also Loch − 5,1 mm; der Schlitz ist etwa ein Drittel des Lochs, wie bei Herstellerdeckeln. Jede Zeile öffnet den Generator mit dieser Größe.",
        head: ["Loch-Ø", "Kragen-Ø", "Öffnungs-Ø", "Schlitz", ""],
        open: "Öffnen",
        note: "35, 50, 60 und 80 mm sind die gängigen Lochsägengrößen; chinesische Angebote nennen am häufigsten 50 mm, dann 53 mm, und 63,5 mm (2½\") ist bei US-Bürotischen verbreitet.",
      },
    },
    params: {
      HOLE_D: { label: "Lochdurchmesser", desc: "Das gebohrte Loch wie gemessen, nicht das Maß der Lochsäge." },
      DEPTH: { label: "Hülsentiefe", desc: "Wie weit die Hülse unter die Tischoberfläche reicht; höchstens die Plattenstärke." },
      RIM: { label: "Kragenüberstand", desc: "Wie weit der Kragen auf jeder Seite über das Loch greift." },
      CLEARANCE: { label: "Passungsspiel", desc: "Um so viel fällt die Hülse kleiner aus als das Loch." },
      CAP: { label: "Deckel", desc: "Mit Kabelschlitz (slot), geschlossen (solid) oder ohne Deckel (none)." },
      SLOT_WIDTH: { label: "Schlitzbreite", desc: "Höchstens zwei Drittel des Lochs; üblich ist ein Drittel." },
    },
    example: "50-mm-Loch, 17-mm-Kabelschlitz",
    step: [
      "Wird als zwei exakte Körper exportiert, Hülse und Deckel, mit 21 Flächen – 10 Ebenen, 8 echte Zylinder (Hülse, Kragen, Bohrung und die Ansenkung, in der der Deckel sitzt; Rand und Schürze des Deckels und das runde Ende des Schlitzes) und 3 Kegel (die Fasen) –, sodass Möbel-CAD das Lochmaß und den Sitz des Deckels direkt abliest.",
    ],
    aiFaqs: [
      {
        q: "Wie bekomme ich eine Kabeldurchführung für ein 50-mm-Loch im Schreibtisch?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/desk-grommet-generator?HOLE_D=50&SLOT_WIDTH=17 – eine Hülse mit 49,7 mm für das 50-mm-Loch, ein Kragen mit 62 mm und ein Deckel mit 17 mm breitem Kabelschlitz. Exportieren Sie STL zum Drucken oder STEP für das CAD.",
      },
      {
        q: "Geht auch ein geschlossener Deckel oder eine Hülse, die durch eine 25 mm starke Tischplatte reicht?",
        a: "Ja: CAP=solid ergibt einen Deckel ohne Schlitz, und mit DEPTH=25 schließt die Hülse bündig mit der Unterseite ab – https://www.forgent3d.com/de/generators/desk-grommet-generator?CAP=solid&DEPTH=25. Bei jeder Tischplatte ab 16 mm Stärke reicht die voreingestellte 16-mm-Hülse; Kabeldurchführungen der Hersteller sind genauso gebaut.",
      },
    ],
    keywords: [
      "kabeldurchführung schreibtisch",
      "kabeldurchführung 3d druck",
      "kabeldurchlass schreibtisch",
      "kabeldurchführung 60 mm",
      "kabeldurchführung stl",
    ],
  },

  "18650-battery-holder-generator": {
    copy: {
      name: "18650-Akkuhalter-Generator",
      title: "18650-Akkuhalter-Generator — Zellenhalter für Akkupacks (STL) | Forgent3D",
      description:
        "Zellenhalter 18650, 21700 oder 26650 für punktgeschweißte Akkupacks: gerade oder versetzt, Nickelband-Kanäle, Balancerkabel-Löcher, Ober- und Unterteil. STL/STEP gratis.",
      h1: "18650-Akkuhalter-Generator: Zellenhalter für den Bau von Akkupacks",
      intro:
        "Wählen Sie Zelle und Raster – standardmäßig 3 × 5 Zellen 18650 – und Sie erhalten die zwei Platten, in denen ein Akkupack gebaut wird: Jede Zelle sitzt in einer Bohrung mit einem Rand auf der Außenseite, der Rand lässt ein Fenster für das Nickelband frei, und ein 8 mm breiter Kanal führt das Band über die Platte. Die untere Platte ist so angelegt, dass sie passt, wenn Sie sie umgedreht auf die Zellen setzen.",
      whyPoints: [
        "Zellen 18650, 21700 und 26650, gerades Raster oder versetzte Reihen (Wabenmuster)",
        "Standardmäßig 20,2 mm Zellabstand – das übliche Maß von Haltern und vorgestanztem Nickelband –, nie unter 1 mm zwischen den Zellen",
        "Kanäle für 7–8 mm breites Nickelband, optional Löcher für Balancerkabel, offen zum Punktschweißen oder geschlossen zur Aufbewahrung",
        "Platten lassen sich im Zellabstand aneinandersetzen, für Packs, die größer als eine Platte sind",
      ],
      faqs: [
        {
          q: "Mit welchem Filament soll ich drucken?",
          a: "PETG, ASA oder ABS. Zellen dürfen bei bis zu 60 °C Umgebungstemperatur entladen werden, wobei der Zellbecher 75 °C erreicht, und gedrucktes PLA gibt ab etwa 60 °C nach – gut für die Aufbewahrung, nicht im arbeitenden Akkupack.",
        },
        {
          q: "Warum kann ich nicht die 19 mm Zellabstand einstellen, die manche versetzten Halter nutzen?",
          a: "Die Zelldatenblätter von Samsung verlangen mehr als 1 mm zwischen den Zellen, und bei 19 mm Zellabstand bleibt etwa die Hälfte davon. Die kleinste Wand hier (1 mm plus Bohrungsspiel) hält diesen Abstand ein; die voreingestellten 20,2 mm passen außerdem zu vorgestanztem Nickelband, das für diesen Abstand verkauft wird.",
        },
        {
          q: "Wie werden die beiden Platten zusammengesetzt?",
          a: "Drücken Sie die Zellen in eine Platte, Rand nach außen, und setzen Sie dann die zweite Platte umgedreht auf die anderen Zellenden: Sie wird spiegelbildlich erzeugt, sodass die Bohrungen auch bei versetzten Anordnungen mit gerader Reihenzahl übereinstimmen.",
        },
      ],
      sizes: {
        title: "Zellformate",
        intro: "Bohrung = Zelldurchmesser + 0,3 mm Spiel; Zellabstand = Bohrung + 1,5 mm Wand, beides mit den Standardwerten. Jede Zeile öffnet den Generator für diese Zelle.",
        head: ["Zelle", "Zell-Ø", "Bohrungs-Ø", "Zellabstand", ""],
        open: "Öffnen",
        note: "Zellen unterscheiden sich je nach Hersteller: 18650er messen höchstens 18,4–18,6 mm, geschützte Zellen sind dicker. Passen Ihre nicht hinein, erhöhen Sie das Spiel.",
      },
    },
    params: {
      CELL: { label: "Zelle", desc: "Nenndurchmesser 18,4 / 21,5 / 26,4 mm." },
      CLEARANCE: { label: "Bohrungsspiel", desc: "Wird zum Zelldurchmesser addiert: 18,7-mm-Bohrungen bei 18650." },
      LAYOUT: {
        label: "Anordnung",
        desc: "Gerades Raster (square) oder versetzte Reihen (staggered, Wabenmuster), um einen halben Zellabstand verschoben.",
      },
      ROWS: { label: "Reihen", desc: "Bis zu 3 pro Platte; für größere Packs mehrere Platten drucken." },
      COLS: { label: "Spalten", desc: "Bis zu 5 pro Platte." },
      WALL: { label: "Wand zwischen den Zellen", desc: "1,5 ergibt bei 18650 den üblichen Zellabstand von 20,2 mm." },
      WIRE_HOLES: { label: "Löcher für Balancerkabel", desc: "Ø3-Löcher zwischen den Zellen für die BMS-Leitungen." },
      HEIGHT: { label: "Halterhöhe", desc: "Wie tief jede Zelle in der Platte sitzt." },
      FRAME: { label: "Außenrahmen", desc: "Mit 0 lassen sich Platten im Zellabstand aneinandersetzen." },
      END: {
        label: "Abschluss",
        desc: "Offen mit Rand zum Punktschweißen (open) oder mit geschlossenem Boden zur Aufbewahrung (closed).",
      },
      LIP: {
        label: "Randüberdeckung",
        desc: "Wie weit der Rand über das Zellende greift; der Rest ist das Fenster für das Nickelband.",
      },
      STRIP_WIDTH: {
        label: "Breite des Bandkanals",
        desc: "0,8 mm tiefe Kanäle für 7–8 mm breites Nickelband; 0 für eine glatte Fläche.",
      },
    },
    example: "Zellen 21700, versetzt (Wabenmuster)",
    step: [
      "Jede 3 × 5-Platte wird als ein exakter Körper mit 188 Flächen exportiert – 158 Ebenen und 30 echte Zylinder (die 15 Zellbohrungen und die 15 Bandfenster) –, sodass Zellabstand, Bohrung und Fenster im CAD direkt ablesbar sind, wenn Sie den Akkupack darum herum planen.",
    ],
    aiFaqs: [
      {
        q: "Wie drucke ich Zellenhalter für einen 18650-Akkupack 3S5P?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/18650-battery-holder-generator?ROWS=3&COLS=5 – eine obere und eine untere Platte für 15 Zellen mit dem üblichen Zellabstand von 20,2 mm, Ø18,7-Bohrungen und 8-mm-Kanälen für das Nickelband. Drucken Sie beide, drücken Sie die Zellen in die eine und setzen Sie die andere umgedreht darauf.",
      },
      {
        q: "Mein Pack ist größer als 3 × 5. Kann ich eine Platte für 13S4P erstellen?",
        a: "Eine Platte fasst höchstens 3 × 5 Zellen; drucken Sie mehrere. Mit FRAME=0 enden die Platten genau einen halben Zellabstand hinter den äußeren Zellen und lassen sich daher im selben Abstand aneinandersetzen: https://www.forgent3d.com/de/generators/18650-battery-holder-generator?ROWS=3&COLS=5&FRAME=0",
      },
    ],
    keywords: [
      "18650 akkuhalter",
      "18650 zellenhalter",
      "18650 halter 3d druck",
      "21700 zellenhalter stl",
      "akkupack zellenhalter",
    ],
  },

  "pipe-clamp-generator": {
    copy: {
      name: "Rohrschellen-Generator",
      title: "Rohrschellen-Generator — DIN 3015 & Rohrbügel, Ø6–101,6 mm | Forgent3D",
      description:
        "Rohrschellen für Außendurchmesser von 6 bis 101,6 mm: Kunststoff-Schellenhälften nach DIN 3015-1 aus der Normtabelle oder Rohrbügel mit zwei Senklöchern. STL/STEP gratis.",
      h1: "Rohrschellen-Generator: Schellenhälften nach DIN 3015 und Rohrbügel mit zwei Laschen",
      intro:
        "Geben Sie den Außendurchmesser des Rohrs ein – standardmäßig 20 mm – und Sie erhalten entweder die Kunststoff-Schellenhälften einer Rohrschelle nach DIN 3015-1, leichte Baureihe, aus der Normtabelle bemessen und mit M6-Schraubenlöchern, oder einen einteiligen Rohrbügel mit zwei Laschen, um ein Rohr oder Elektroinstallationsrohr an die Wand zu schrauben. Die DIN-Hälften stehen um den Spannspalt der Norm auseinander, sodass das Anziehen der Schrauben das Rohr klemmt.",
      whyPoints: [
        "Baugrößen 1–8 nach DIN 3015-1, aus dem Rohrdurchmesser gewählt: Körperlänge, Schraubenabstand und Höhe aus der Tabelle von STAUFF",
        "Rohrbügel mit zwei Laschen, Durchgangslöchern nach ISO 273 und Senkungen nach ISO 10642 für M3–M5",
        "Bohrungsspiel für Rohre, die über Nennmaß messen",
        "Exakte STEP für Anlagen- und Maschinen-CAD, STL zum Drucken",
      ],
      faqs: [
        {
          q: "Was brauche ich außer den gedruckten Schellenhälften?",
          a: "Eine Rohrschelle nach DIN 3015-1 besteht aus den zwei Schellenhälften zwischen einer Deckplatte aus Stahl oben und einer Schweißplatte (oder Tragschiene) unten, zusammengehalten von zwei M6-Schrauben; Baugröße 3 nimmt M6 × 40. Platten und Schrauben sind genormte Kaufteile – der Generator erzeugt die Kunststoff-Schellenhälften.",
        },
        {
          q: "In welchem Abstand setze ich die Rohrschellen?",
          a: "Der von HYDAC empfohlene Abstand für Schellen der leichten Baureihe wächst mit dem Rohr: 1,0 m bis 12,7 mm, 1,2 m bis 22 mm, 1,5 m bis 32 mm, 2,0 m bis 38 mm, 2,7 m bis 57 mm, 3,0 m bis 75 mm.",
        },
        {
          q: "Warum ist zwischen den beiden Hälften ein Spalt?",
          a: "Das ist der Spannspalt der DIN 3015 (0,4–0,8 mm je nach Baugröße bei den Schellenkörpern von STAUFF): Die Hälften berühren das Rohr, bevor sie einander berühren, sodass das Anziehen der Schrauben das Rohr klemmt. Lassen Sie ihn – schleifen Sie die Flächen nicht plan.",
        },
      ],
      sizes: {
        title: "DIN-3015-Baugrößen für gängige Rohre",
        intro: "Die Baugröße, die der Generator beim Standardspiel von 0,4 mm wählt, mit der Länge des Hälftenpaars, dem Abstand der M6-Schrauben und der Höhe aus der Tabelle von STAUFF (alle 30 mm breit). Jede Zeile öffnet den Generator mit diesem Rohr.",
        head: ["Rohr-Ø", "Baugröße", "Länge", "Schraubenabstand", "Höhe", ""],
        open: "Öffnen",
        note: "PP-R-Wasserrohr: 20 (½\"), 25 (¾\"), 32 (1\"); eine Bohrung, die neben einem Schraubenloch weniger als 0,5 mm Kunststoff ließe, rückt eine Baugröße höher.",
      },
    },
    params: {
      PIPE_OD: { label: "Rohraußendurchmesser", desc: "Messen Sie das Rohr; bei DIN 3015 bestimmt er die Baugröße." },
      TYPE: {
        label: "Schellentyp",
        desc: "Kunststoff-Schellenhälften nach DIN 3015-1 (din3015) oder Rohrbügel mit zwei Laschen (saddle).",
      },
      CLEARANCE: {
        label: "Bohrungsspiel",
        desc: "Wird zum Rohrdurchmesser addiert; Kunststoffrohr misst oft etwas über Nennmaß.",
      },
      WIDTH: { label: "Bügelbreite (Rohrbügel)", desc: "Entlang des Rohrs gemessen." },
      TAB: { label: "Laschenlänge (Rohrbügel)", desc: "Jede Schraubenlasche jenseits des Bogens." },
      SCREW: { label: "Schraube (Rohrbügel)", desc: "Durchgangslöcher nach ISO 273, Reihe mittel." },
      COUNTERSINK: { label: "Senklöcher (Rohrbügel)", desc: "Senkungen für Senkkopfschrauben nach ISO 10642." },
    },
    example: "Rohrbügel mit zwei Laschen für ein 25-mm-Rohr",
    step: [
      "Eine Schellenhälfte nach DIN 3015 wird als ein exakter Körper mit 10 Flächen exportiert – 7 Ebenen und 3 echte Zylinder (die halbe Bohrung und die beiden M6-Löcher) –, dieselbe Hälfte zweimal in der Datei. Der Rohrbügel hat 18 Flächen: 12 Ebenen, 4 Zylinder und 2 Kegel für die Senkungen.",
    ],
    aiFaqs: [
      {
        q: "Wie bekomme ich eine Rohrschelle nach DIN 3015 für ein 20-mm-Rohr?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/pipe-clamp-generator?PIPE_OD=20 – die zwei Kunststoff-Schellenhälften einer Schelle der leichten Baureihe, Baugröße 3: 50 × 30 mm, M6-Schrauben im Abstand von 33 mm, 20,4-mm-Bohrung. Deckplatte und Schweißplatte aus Stahl sowie die Schrauben sind Kaufteile; exportieren Sie STEP, um die Schelle im CAD zu platzieren.",
      },
      {
        q: "Ich brauche einen Rohrbügel mit zwei Laschen für ein 25-mm-Elektrorohr und M4-Schrauben.",
        a: "https://www.forgent3d.com/de/generators/pipe-clamp-generator?TYPE=saddle&PIPE_OD=25&SCREW=M4 – ein U-förmiger Bügel, 25 mm breit, mit Senklöchern für M4 in beiden Laschen. Er wird auf der Seite liegend gedruckt, sodass die Schichten um den Bogen herum laufen.",
      },
    ],
    keywords: [
      "rohrschelle 3d druck",
      "din 3015 rohrschelle",
      "rohrschellen din 3015 stl",
      "kunststoff rohrschelle",
      "rohrschelle stl",
    ],
  },

  "hex-bit-holder-generator": {
    copy: {
      name: "Bithalter-Generator",
      title: "Bithalter-Generator — Bit-Aufbewahrung 1/4\", Gridfinity, Wand | Forgent3D",
      description:
        "Halter für Sechskant-Bits 1/4\", 4 mm, 5/16\": senkrechte Löcher, gerade oder versetzt, bis 80 Bits, freistehend, auf Gridfinity-Füßen oder an der Wand. STL/STEP gratis.",
      h1: "Bithalter-Generator: ein Block mit Sechskantlöchern für Schrauberbits",
      intro:
        "Wählen Sie Bitgröße und Raster – standardmäßig 20 Bits mit 1/4\" – und Sie erhalten einen Block mit senkrechten Sechskantlöchern, bemessen nach dem Sechskantschaft der ISO 1173, 10 mm tief und mit Einführfase. Stellen Sie ihn auf die Werkbank, setzen Sie ihn in eine Gridfinity-Baseplate oder schrauben Sie ihn an die Wand oder eine Lochwand. Das Lochspiel ist einstellbar, weil jeder Drucker anders druckt.",
      whyPoints: [
        "Sechskantschäfte 1/4\" (6,35), 4 mm und 5/16\", Löcher nach ISO 1173 bemessen",
        "Bis zu 10 × 8 Bits, gerade oder versetzt, mit einstellbarer Wand zwischen den Löchern",
        "Gridfinity-Füße identisch mit unseren Gridfinity-Bins, oder eine Wandplatte im 25-mm-Raster der Lochwand",
        "Wird so gedruckt, wie er steht, ohne Stützen",
      ],
      faqs: [
        {
          q: "Wie fest sitzen die Bits?",
          a: "Das hängt von Ihrem Drucker ab: Löcher, die bei anderen Makern Bits hielten, reichen von 6,25 bis etwa 6,9 mm Schlüsselweite, und einem Maker waren 6,5 mm zu locker. Standard ist 6,35 + 0,15 = 6,5. Drucken Sie zuerst einen kleinen Block und verstellen Sie das Spiel in Schritten von 0,05 mm.",
        },
        {
          q: "Passen auch lange Power-Bits?",
          a: "Ja. Einsatzbits sind 25 mm lang, Power-Bits 50, 70 oder 90 mm (Bosch, Wiha, Vessel, DeWalt), aber sie haben denselben 1/4\"-Sechskantschaft und sitzen daher in denselben Löchern – die langen stehen nur höher.",
        },
        {
          q: "Welche Schrauben halten die Wandversion?",
          a: "Senkkopf-Holzschrauben mit etwa 3,5 mm (US-Größe #6): Die Platte hat 3,9-mm-Löcher mit 8,3-mm-Senkungen im Abstand von 25 mm, passend zur Lochwand.",
        },
      ],
    },
    params: {
      BIT_SIZE: { label: "Bitschaft", desc: "Sechskantschaft, Schlüsselweite nach ISO 1173: 3,96 / 6,35 / 7,93 mm." },
      CLEARANCE: { label: "Lochspiel", desc: "Wird zur Schlüsselweite addiert; 0,15 ist der Median veröffentlichter Halter." },
      DEPTH: { label: "Lochtiefe", desc: "Wie tief jedes Bit sitzt, über einem 2 mm starken Boden." },
      COLUMNS: { label: "Spalten", desc: "Bits pro Reihe." },
      ROWS: { label: "Reihen", desc: "Bis zu 80 Bits in einem Block." },
      GAP: { label: "Wand zwischen den Löchern", desc: "Mehr Abstand = die Bits lassen sich leichter greifen." },
      PATTERN: { label: "Anordnung", desc: "Gerades Raster (square) oder versetzte Reihen (staggered, Wabenmuster)." },
      MOUNT: {
        label: "Befestigung",
        desc: "Freistehend (none), Gridfinity-Füße (gridfinity) oder Schraubplatte im 25-mm-Raster der Lochwand (wall).",
      },
    },
    example: "24 Bits auf einer Wand- / Lochwandplatte",
    step: [
      "Der Standardblock für 20 Bits wird als ein exakter Körper mit 270 Flächen exportiert, 266 davon Ebenen – jede Sechskantwand und jede Einführfase ist eine echte ebene Fläche, sodass das CAD Schlüsselweite und Lochabstand direkt misst. Die Gridfinity-Version fügt die Zylinder und Kegel der Standardfüße hinzu (320 Flächen).",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich einen Gridfinity-Halter für 1/4\"-Schrauberbits?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/hex-bit-holder-generator?MOUNT=gridfinity – 20 senkrechte Sechskantlöcher, verteilt auf einen Gridfinity-Block 2 × 1 mit denselben Füßen wie unsere Gridfinity-Bins, sodass er in eine Standard-Baseplate passt. Ändern Sie COLUMNS und ROWS für mehr oder weniger Bits.",
      },
      {
        q: "Mein gedruckter Bithalter ist zu stramm (oder zu locker). Was ändere ich?",
        a: "Das Lochspiel: Drucker sind verschieden, und Löcher, die bei anderen Makern funktionierten, reichen für 6,35-mm-Bits von 6,25 bis etwa 6,9 mm Schlüsselweite. Drucken Sie zuerst einen Testblock mit drei Löchern – https://www.forgent3d.com/de/generators/hex-bit-holder-generator?COLUMNS=3&ROWS=1&CLEARANCE=0.05 – und verstellen Sie CLEARANCE in Schritten von 0,05 mm, bis ein Bit hält.",
      },
    ],
    keywords: [
      "bithalter 3d druck",
      "bit halter stl",
      "bit aufbewahrung gridfinity",
      "bithalter wand",
      "bit organizer 3d druck",
    ],
  },

  "spool-holder-generator": {
    copy: {
      name: "Filament-Spulenhalter-Generator",
      title: "Filament-Spulenhalter-Generator — Abroller & Wandhalter (STL) | Forgent3D",
      description:
        "Filament-Spulenhalter: Abroller auf 608-Lagern mit Sicherungsstange für 1–5-kg-Spulen, bis zu vier nebeneinander, oder Wandhalter für eine Stange. STL/STEP gratis.",
      h1: "Spulenhalter-Generator: Abroller und Wandhalter, passend zu Ihren Spulen",
      intro:
        "Geben Sie die größte und die breiteste Spule ein, die Sie verwenden – standardmäßig Ø200 × 70 mm –, und Sie erhalten einen Abroller: Die Spule liegt mit ihren Rändern auf zwei Rollen, die sich auf 608-Lagern drehen, und berührt nie das Nabenloch, das sich von Marke zu Marke am stärksten unterscheidet; eine Sicherungsstange verhindert, dass eine fast leere Spule von den Rollen klettert. Oder Sie erhalten zwei Wandhalter für eine Stange. Die Rollen sitzen in der Geometrie, die am beliebten Halter von Lattenberg gemessen wurde.",
      whyPoints: [
        "Rollenabstand und -höhe aus der Spulengröße berechnet: Eine Ø200-Spule liegt bei 42,5°, wie beim Halter von Lattenberg",
        "Lager 608, 626 oder 6001 in den Rollenenden, auf gekaufter Gewindestange – keine gedruckten Achsen, die brechen",
        "Sicherungsstange gegen das Abheben einer fast leeren Spule",
        "Ein bis vier Spulen nebeneinander, oder Wandhalter für eine Stange",
      ],
      faqs: [
        {
          q: "Was brauche ich außer den gedruckten Teilen?",
          a: "Für einen Abroller: vier Lager (zwei pro Rolle), zwei Gewindestangen mit Muttern als Achsen (M8 bei 608) und eine Stange oder einen Rundstab als Sicherungsstange. Gedruckte Achsen wurden absichtlich weggelassen – Nutzer von Haltern mit gedruckten Stiften berichten, dass sie brechen.",
        },
        {
          q: "Mit welchem Filament soll ich drucken?",
          a: "Die beliebten Wandhalter für Stangen werden in PETG gedruckt; Abroller meist mit 4–5 Wänden und 15–25 % Infill, und der Halter eines Makers mit 3 Wänden und 20 % brach sofort. Drucken Sie die Wandhalter auf der Seite liegend, so wie sie angeordnet sind: Stehend gedruckt können die Schichten unter dem Gewicht einer vollen Spule brechen.",
        },
        {
          q: "Passen kleine und große Spulen?",
          a: "Der Halter trägt alles von der größten eingegebenen Spule bis zu einer daraus abgeleiteten kleinsten (etwa Ø150 beim Standard von Ø200), sodass eine 1-kg-Spule auch auf einen Halter für 3–5 kg passt. Für Minispulen mit 250–500 g stellen Sie den Spulendurchmesser auf die Minigröße ein.",
        },
      ],
    },
    params: {
      TYPE: { label: "Haltertyp", desc: "Abroller (rollers) oder Wandhalter für eine Stange (wall)." },
      SPOOL_D: { label: "Größter Spulendurchmesser", desc: "1-kg-Spulen haben etwa 195–203 mm, 3 kg etwa 250, 5 kg 300." },
      SPOOL_W: { label: "Breiteste Spule", desc: "1-kg-Spulen sind 57–69 mm breit." },
      BEARING: { label: "Lager", desc: "Zwei pro Rolle, in die Enden eingepresst." },
      BEARING_FIT: { label: "Passung der Lageraufnahme", desc: "Wird zum Außendurchmesser des Lagers addiert." },
      COUNT: { label: "Spulen nebeneinander", desc: "Plätze in einem Halter." },
      ROD_D: { label: "Stangendurchmesser", desc: "Die Sicherungsstange (Abroller) oder die Spulenstange (Wandhalter)." },
      ROD_FIT: { label: "Passung des Stangenlochs", desc: "Wird zum Stangendurchmesser addiert." },
    },
    example: "Abroller für 3-kg-Spulen (Ø250 × 110)",
    step: [
      "Wird als drei exakte Körper exportiert – Seitenteil, Rolle und Distanzring, so oft platziert, wie der Halter sie braucht – mit 33 Flächen: 19 Ebenen, 12 echte Zylinder (die Lageraufnahmen, die Löcher für Achse und Sicherungsstange, die Rollen) und 2 Kegel (die Einführungen der Lageraufnahmen).",
    ],
    aiFaqs: [
      {
        q: "Wie erstelle ich einen Abroller für 1-kg-Spulen?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/spool-holder-generator?SPOOL_D=200&SPOOL_W=70 – zwei Seitenteile und zwei Rollen mit 608-Lagern in den Enden; eine Spule Ø200 × 70 liegt mit ihren Rändern in der Geometrie auf, die am vielfach gedruckten Rollenhalter von Lattenberg gemessen wurde. Dazu kommen vier 608-Lager, M8-Gewindestange mit Muttern für die Achsen und eine Ø22-Stange als Sicherungsstange.",
      },
      {
        q: "Kann er Wandhalter für eine Stange erzeugen, die mehrere Spulen trägt?",
        a: "Ja: https://www.forgent3d.com/de/generators/spool-holder-generator?TYPE=wall&ROD_D=16 ergibt zwei Halter für eine 16-mm-Stange, deren Mitte weit genug von der Wand entfernt ist für eine Ø200-Spule. Wählen Sie eine Stange, die durch die Nabenlöcher Ihrer Spulen passt – 1-kg-Spulen haben 50–72 mm große Löcher, 5–8-kg-Spulen aber nur 32–36 mm.",
      },
    ],
    keywords: [
      "filament spulenhalter",
      "spulenhalter 3d druck",
      "filament rollenhalter",
      "spulenhalter 608 kugellager",
      "filament halter wand",
    ],
  },

  "shelf-bracket-generator": {
    copy: {
      name: "Regalhalter-Generator",
      title: "Regalhalter-Generator — Wand-Regalwinkel mit Strebe (STL) | Forgent3D",
      description:
        "3D-Druck-Regalhalter passend zu Ihrem Brett: 100–250 mm tiefe Regale, Diagonalstrebe, erreichbare Senkkopfschrauben 4 oder 5 mm oder eine Haltekante. STL/STEP gratis.",
      h1: "Regalhalter-Generator: Wandhalter passend zu Ihrem Regalbrett",
      intro:
        "Geben Sie die Tiefe Ihres Regalbretts ein – standardmäßig 200 mm – und Sie erhalten einen Wandhalter mit Diagonalstrebe. Der Arm endet wie bei gekauften Haltern 10 mm hinter der Vorderkante des Bretts, der Wandschenkel ist drei Viertel so lang wie der Arm, und je zwei Senkkopfschrauben gehen in die Wand und von unten ins Brett, jede mit geradem Weg für den Schraubendreher. Oder wählen Sie eine Haltekante: Ein Brett genau dieser Tiefe wird dahinter eingelegt, ohne Schrauben im Regalbrett.",
      whyPoints: [
        "Arm und Wandschenkel folgen der Regaltiefe, in den Proportionen gekaufter Halter (Knape & Vogt, Everbilt)",
        "Jede Schraube ist erreichbar: ein gerader 12-mm-Weg für den Schraubendreher, die obere Wandschraube durch ein Loch in der Strebe",
        "Schrauben von unten ins Brett, oder eine Haltekante, hinter die das Brett eingelegt wird",
        "Auf der Seite liegend exportiert, so wie er gedruckt werden sollte",
      ],
      faqs: [
        {
          q: "Wie herum drucke ich ihn?",
          a: "Auf der Seite, genau wie exportiert, sodass jede Schicht den ganzen Halter umfasst. Stehend gedruckt laufen die Schichten quer durch einen Schenkel: Bei einem Maker brachen drei stehend gedruckte Halter innerhalb von fünf Minuten unter 2,5 kg, und in den Tests von CNC Kitchen hielten stehend gedruckte Haken nur etwa die Hälfte der Last, die dieselben Haken liegend gedruckt hielten.",
        },
        {
          q: "Welches Filament und welche Schrauben?",
          a: "Senkkopf-Holzschrauben, 4 mm (US-Größe #8) oder 5 mm (#10). Dass Halter beim Anziehen der Schrauben reißen, ist die häufigste Beschwerde über beliebte gedruckte Halter; ein Nutzer merkt an, dass PETG nicht so leicht spaltet. Nehmen Sie lieber PETG und hören Sie auf anzuziehen, sobald der Kopf bündig sitzt.",
        },
        {
          q: "Wie viel Gewicht hält er?",
          a: "Wir nennen keine Zahl: Keiner der gedruckten Regalhalter, die wir gefunden haben, hat einen definierten Belastungstest, und das Ergebnis hängt von Filament, Wänden, Infill und Schrauben ab. Erhöhen Sie bei schweren Regalen die Stegstärke, und testen Sie Ihren Druck unter Last, bevor Sie ihm vertrauen.",
        },
      ],
    },
    params: {
      SHELF_D: {
        label: "Regaltiefe",
        desc: "Das Brett, von vorn nach hinten. Halter für 8 und 10 Zoll verkaufen sich am besten; 250 passt noch auf ein 256-mm-Druckbett.",
      },
      FIXING: {
        label: "Befestigung des Bretts",
        desc: "Zwei Schrauben von unten ins Brett, oder eine Kante, hinter die das Brett eingelegt wird (genau für diese Tiefe gemacht; 7 mm länger als sie).",
      },
      SCREW: { label: "Holzschraube", desc: "Senkkopf-Holzschrauben, US-Größe #8 oder #10." },
      WIDTH: { label: "Halterbreite", desc: "Entlang der Wand; 25 wie bei den meisten gedruckten Haltern." },
      BAR_T: {
        label: "Stegstärke",
        desc: "Schenkel, Arm und Strebe. Dicker für schwerere Lasten; bei kleinen Haltern mit dicken Stegen wird daraus ein massives Dreieck.",
      },
    },
    example: "Kräftiger Halter für ein 250-mm-Regal, 5-mm-Schrauben",
    step: [
      "Wird als ein exakter Körper mit 32 Flächen exportiert: 20 Ebenen, 8 echte Zylinder (die vier Schraubenlöcher, das Durchgangsloch für den Schraubendreher in der Strebe und die abgerundeten Ecken der Aussparung) und 4 Kegel (die Senkungen).",
    ],
    aiFaqs: [
      {
        q: "Wie kann ich einen Halter für ein 20 cm tiefes Regal 3D-drucken?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/shelf-bracket-generator?SHELF_D=200 – ein Wandhalter mit Diagonalstrebe, 190 mm Arm und 142,5 mm Wandschenkel, je zwei Senkkopfschrauben 4 mm in die Wand und von unten ins Brett, jede mit geradem 12-mm-Weg für den Schraubendreher. Drucken Sie ihn auf der Seite liegend, wie exportiert.",
      },
      {
        q: "Mein Regal ist ein 18-mm-Brett, 195 mm tief, und ich will keine Schrauben darin.",
        a: "https://www.forgent3d.com/de/generators/shelf-bracket-generator?FIXING=Front%20lip&SHELF_D=195 – der Arm endet in einer 10-mm-Kante, und das 195-mm-Brett wird zwischen Wand und Kante eingelegt, mit 1 mm Luft; nur die Wandschrauben bleiben.",
      },
    ],
    keywords: [
      "regalhalter 3d druck",
      "regalwinkel 3d druck",
      "regalhalterung stl",
      "regalträger 3d gedruckt",
      "wandregal halter",
    ],
  },

  "pegboard-hook-generator": {
    copy: {
      name: "Lochwandhaken-Generator",
      title: "Lochwandhaken-Generator — für Skådis & 1/4\"-Lochwände (STL) | Forgent3D",
      description:
        "3D-Druck-Lochwandhaken: Skådis-kompatibel, US-Lochwand 1/4\" und 3/16\", Metall, 6-mm-Löcher im 25- oder 16-mm-Raster; Ausladung und Spitze einstellbar. STL/STEP gratis.",
      h1: "Lochwandhaken-Generator: Haken, die zu Ihrer Lochwand passen",
      intro:
        "Wählen Sie Ihre Platte – standardmäßig Skådis-kompatible Schlitze, oder eine US- oder metrische Lochwand mit runden Löchern – und stellen Sie ein, wie weit der Haken nach vorn reicht und wie hoch seine Spitze nach oben steht. Der Haken hängt in zwei Öffnungen übereinander und fällt deshalb nicht herunter, wenn Sie ein Werkzeug abnehmen; nichts rastet ein oder wird verdreht, er wird so eingehängt, wie er abgenommen wird. Lochgröße, Raster und Plattenstärke stammen aus den Angaben der Plattenhersteller und von den meistgedruckten Haken für jede Platte.",
      whyPoints: [
        "Acht Plattentypen, von Skådis-artigen Schlitzen bis zu US-Hartfaserplatten 1/4\" und 1,2 mm starken Metallplatten",
        "Stifte nach dem echten Loch bemessen, z. B. 9/32\" bei US-Lochwand 1/4\", mit einstellbarem Passungsspiel",
        "Zwei Verankerungen übereinander, sodass der Haken an seinem Platz bleibt, wenn Sie ein Werkzeug abheben",
        "Einfach- oder Doppelhaken, Ausladung 10–100 mm",
      ],
      faqs: [
        {
          q: "Der Haken sitzt zu stramm oder wackelt. Was ändere ich?",
          a: "Platten sind verschieden: Skådis-artige Platten sind 4,5–5,5 mm stark, Metallplatten 1,2–1,7 mm. Erhöhen Sie das Passungsspiel, wenn der Haken nicht ganz sitzt; ein beliebter Designer hat den Plattenspalt auf 5,2 mm verbreitert, damit sein Haken auf 5-mm-Platten gleitet. Wackelt er auf einer dünnen Metallplatte, wählen Sie die Metallplatte in der Liste: Haken für 5-mm-Platten sitzen auf 1,2 mm Metall locker.",
        },
        {
          q: "Warum sitzen Haken für metrische Lochwände in meiner US-Lochwand locker?",
          a: "Die US-Lochwand „1/4 inch“ hat tatsächlich Löcher mit 9/32\" (7,1 mm), metrische Platten dagegen oft 6-mm-Löcher. Nutzer eines beliebten metrischen Hakensets berichten, dass sie es für US-Platten um 6,5 % hochskalieren. Wählen Sie hier die US-Platte, dann sind die Stifte für ihre Löcher bemessen.",
        },
        {
          q: "Wie und womit drucke ich ihn?",
          a: "Legen Sie ihn auf die Seite, sodass die Schichten entlang des Arms laufen – Maker berichten, dass liegend gedruckte Haken weit stabiler sind als stehend gedruckte. Mehrere bevorzugen PETG gegenüber PLA; PETG druckt außerdem etwas lockerer, sodass Sie eventuell weniger Spiel brauchen. Skådis ist eine Marke von IKEA; diese Haken sind kompatibel, aber keine IKEA-Produkte.",
        },
      ],
    },
    params: {
      BOARD: {
        label: "Platte",
        desc: "Legt Lochform, Lochgröße, Raster und Plattenstärke gemeinsam fest: Skådis-artige Schlitze (5-mm-Platte oder 1,2 mm Metall), US-Lochwand 1/4\" und 3/16\", US-Metall-Lochwand, 6-mm-Löcher im 25- oder 16-mm-Raster, 5-mm-Löcher im 25-mm-Raster.",
      },
      CLEARANCE: {
        label: "Passungsspiel",
        desc: "Wird von Stiften und Laschen abgezogen; die Hälfte davon weitet den Spalt, in dem die Platte sitzt. Erhöhen Sie es, wenn der Haken nicht ganz sitzt.",
      },
      STYLE: { label: "Ausführung", desc: "Der Doppelhaken wiederholt den Haken um ein Lochraster entlang der Platte." },
      REACH: { label: "Ausladung", desc: "Innere Tiefe von der Rückenplatte bis zur Spitze." },
      TIP: { label: "Höhe der Spitze", desc: "Wie weit die Spitze nach oben steht; 0 für einen geraden Stift." },
    },
    example: "50-mm-Haken für US-Lochwand 1/4\"",
    step: [
      "Der Standardhaken, Skådis-kompatibel, wird als ein exakter Körper mit 25 Flächen exportiert: 21 Ebenen und 4 echte Zylinder (die runden Laschen, die in den Schlitzenden sitzen). Bei Platten mit runden Löchern fügt der gebogene Stift Kegel hinzu.",
    ],
    aiFaqs: [
      {
        q: "Wie mache ich einen 3D-gedruckten Haken für eine Standard-US-Lochwand mit 1/4 Zoll?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/pegboard-hook-generator?BOARD=US%20pegboard%201%2F4&REACH=50 – ein 50-mm-Haken, dessen oberer Stift durch die Platte geht und sich dahinter nach unten biegt, mit einem kurzen unteren Stift im Loch darunter. Die Stifte sind für die echten Löcher von 9/32\" (7,1 mm) der 1/4\"-Hartfaserplatte bemessen – deshalb sitzen Haken für metrische 25-mm-Platten dort locker.",
      },
      {
        q: "Ich brauche einen breiten Doppelhaken für eine Skådis-artige Platte.",
        a: "https://www.forgent3d.com/de/generators/pegboard-hook-generator?STYLE=Double%20hook&REACH=40&TIP=8 – zwei Hakenarme im Abstand eines Schlitzrasters (40 mm) auf einer gemeinsamen Rückenplatte; jeder hängt in zwei Schlitzen, mit runden Laschen, die in die Schlitzböden fallen. Gerade hineinschieben, absinken lassen, auf dieselbe Weise abheben.",
      },
    ],
    keywords: [
      "lochwand haken 3d druck",
      "lochwandhaken",
      "skadis haken stl",
      "lochwand haken stl",
      "skadis zubehör 3d druck",
    ],
  },

  "raspberry-pi-case-generator": {
    copy: {
      name: "Raspberry-Pi- & Arduino-Gehäuse-Generator",
      title: "Raspberry-Pi-Gehäuse-Generator — Pi 5, 4, Zero & Arduino (STL) | Forgent3D",
      description:
        "3D-Druck-Gehäuse für Raspberry Pi 5, 4 B, 3 B+, Zero 2 W oder Arduino Uno R3 / R4: alle Anschlüsse nach offiziellen Zeichnungen, verschraubter Deckel. STL/STEP gratis.",
      h1: "Raspberry-Pi- und Arduino-Gehäuse-Generator: Öffnungen nach den offiziellen Zeichnungen",
      intro:
        "Wählen Sie Ihr Board – standardmäßig den Raspberry Pi 5 – und Sie erhalten ein zweiteiliges Gehäuse, angelegt nach der offiziellen Maßzeichnung oder STEP-Datei des Boards. Jeder Anschluss bekommt eine Öffnung, die bis zur Trennfuge offen ist, sodass sich der Deckel über die Buchsen stülpen lässt; die Öffnungen für USB-C und Micro-USB sind für den Stecker bemessen, nicht nur für die Buchse. Die Befestigungsschrauben des Boards halten es auf Abstandshaltern und schließen den Deckel – kein Klemmdeckel, der sich lockert.",
      whyPoints: [
        "Sechs Boards, jedes Loch und jeder Anschluss nach den offiziellen Zeichnungen: Pi 5, Pi 4 B, Pi 3 B+, Pi Zero 2 W, Arduino Uno R3 und R4",
        "Öffnungen für USB-Stecker bemessen, mit einem Spiel, das Sie für klobige HDMI- oder DC-Stecker erhöhen können",
        "Verschraubter Deckel: Die Befestigungsschrauben des Boards schließen das Gehäuse",
        "Schlitze über den Stiftleisten, Lüftungsschlitze über dem Prozessor, die SD-Karte von außen erreichbar",
      ],
      faqs: [
        {
          q: "Welche Schrauben brauche ich?",
          a: "Raspberry-Pi-Boards: vier Senkkopfschrauben M2,5 × 12. Arduino Uno R3: vier M3 × 16; der Uno R4 nimmt drei plus einen gedruckten Zentrierstift. Sie gehen von unten durch den Boden, die Abstandshalter und das Board in Säulen im Deckel. Klemmdeckel sind die häufigste Beschwerde über beliebte gedruckte Gehäuse („der Deckel sitzt etwas locker“), deshalb wird dieser verschraubt.",
        },
        {
          q: "Passen meine Kabel?",
          a: "Die Öffnungen für USB-C und Micro-USB sind für die Steckerumspritzung bemessen, die die USB-Spezifikationen angeben – eine häufige Beschwerde über Gehäuse mit buchsengroßen Öffnungen ist, dass Micro-HDMI-Kabel nicht passen. HDMI-, Audio- und DC-Stecker haben keine genormte Größe: Ist Ihrer klobig, erhöhen Sie das Anschlussspiel.",
        },
        {
          q: "Welches Filament für einen Raspberry Pi 5?",
          a: "PETG oder besser: Ein Maker berichtet, dass ein Pi 5 einen Boden aus PLA erweicht hat. Lassen Sie die Lüftungsschlitze im Deckel an. Das Gehäuse lässt außerdem rundum 0,5 mm Platz um das Board, denn Gehäuse, die eng an der Platine anliegen, haben beim Zusammenbau Boards zerbrochen.",
        },
        {
          q: "Warum ist das ESP32 DevKit nicht in der Liste?",
          a: "Die DevKitC-Boards von Espressif haben keine Befestigungslöcher, und für die vielen Nachbauten gibt es keine offizielle Zeichnung, nach der man arbeiten könnte. Wählen Sie das nächstliegende Board und ändern Sie es mit „AI edit“. Raspberry Pi und Arduino sind Marken ihrer jeweiligen Inhaber; dieser Generator erzeugt kompatible Gehäuse und steht in keiner Verbindung zu ihnen.",
        },
      ],
    },
    params: {
      BOARD: {
        label: "Board",
        desc: "Umriss, Befestigungslöcher und jeder Anschluss stammen aus den offiziellen Zeichnungen und STEP-Dateien.",
      },
      WALL: { label: "Wandstärke", desc: "2 mm wie bei den meistgedruckten Gehäusen." },
      PORT_CLEARANCE: {
        label: "Anschlussspiel",
        desc: "Wird rundum um jeden Anschluss freigelassen. Erhöhen Sie es für klobige HDMI-, Audio- oder DC-Stecker.",
      },
      HEADER_SLOTS: {
        label: "Stiftleisten-Schlitze im Deckel",
        desc: "Ein Schlitz über den GPIO- / Arduino-Stiftleisten für Jumperkabel.",
      },
      VENTS: { label: "Lüftungsschlitze im Deckel", desc: "Schlitze über dem Prozessor." },
    },
    example: "Pi-4-Gehäuse mit dickeren Wänden und großzügigeren Anschlussöffnungen",
    step: [
      "Das Gehäuse für den Raspberry Pi 5 wird als zwei exakte Körper exportiert, Unterteil und Deckel, mit 196 Flächen: 160 Ebenen, 32 echte Zylinder (Abstandshalter, Deckelsäulen, Schraubenlöcher und Vorbohrungen, abgerundete Ecken) und 4 Kegel (die Senkungen unter dem Boden).",
    ],
    aiFaqs: [
      {
        q: "Wie bekomme ich ein Gehäuse für einen Raspberry Pi 4 zum 3D-Drucken?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/raspberry-pi-case-generator?BOARD=Raspberry%20Pi%204%20Model%20B – ein zweiteiliges Gehäuse, angelegt nach der offiziellen Maßzeichnung: Jeder Anschluss bekommt eine Öffnung, die GPIO-Leiste einen Schlitz im Deckel, und vier Senkkopfschrauben M2,5 × 12 gehen von unten durch den Boden und das Board in Säulen im Deckel – dieselben Schrauben halten das Board und schließen das Gehäuse.",
      },
      {
        q: "Kann er ein Arduino-Uno-Gehäuse ohne Lüftungsschlitze erzeugen?",
        a: "Ja: https://www.forgent3d.com/de/generators/raspberry-pi-case-generator?BOARD=Arduino%20Uno%20R3&VENTS=false – Öffnungen für USB-B und DC-Buchse, für die Stecker bemessen, Schlitze für die Stiftleisten im Deckel, verschlossen mit vier Schrauben M3 × 16. Für den Uno R4 Minima oder WiFi wählen Sie stattdessen dieses Board; eines seiner Löcher sitzt zu nah an der DC-Buchse für eine Säule, deshalb bekommt es einen Zentrierstift und drei Schrauben.",
      },
    ],
    keywords: [
      "raspberry pi gehäuse 3d druck",
      "raspberry pi 5 gehäuse stl",
      "raspberry pi 4 gehäuse 3d druck",
      "arduino uno gehäuse 3d druck",
      "raspberry pi gehäuse generator",
    ],
  },

  "wall-hook-generator": {
    copy: {
      name: "Wandhaken-Generator",
      title: "Wandhaken-Generator — Schraub-, Klebe- & Türhaken (STL) | Forgent3D",
      description:
        "3D-Druck-Wandhaken zum Schrauben, für Command-Klebestreifen oder über Schrank- und Zimmertüren. Einzeln, doppelt oder bis zu fünf in Reihe. STL/STEP gratis.",
      h1: "Wandhaken-Generator: zum Schrauben, Kleben oder über die Tür",
      intro:
        "Wählen Sie die Befestigung – Senkkopfschrauben, einen Command-Streifen von 3M oder über eine Tür Ihrer Stärke – und stellen Sie dann Tiefe, Spitze und Breite ein. Die Schraubenlöcher sitzen über dem Haken, damit ein Schraubendreher sie erreicht; die Klebeplatte ist nach den Streifenmaßen von 3M bemessen, die Abziehlasche bleibt frei; der Türbügel passt mit 0,8 mm Luft auf die Tür. Ein Haken, zwei übereinander oder eine Reihe mit bis zu fünf.",
      whyPoints: [
        "Drei Befestigungsarten: Senkkopfschrauben, Command-Streifen Medium oder Large, über eine 19–45 mm starke Tür",
        "Schraubenlöcher über dem Haken, mit dem Schraubendreher erreichbar, mit Kunststoff unter der Senkung gegen Spalten",
        "Einzeln, doppelt übereinander oder bis zu fünf in einer Reihe für Schlüssel und Mäntel",
        "Zum Drucken auf der Seite exportiert, sodass die Schichten entlang des Hakens laufen",
      ],
      faqs: [
        {
          q: "Wie herum drucke ich ihn?",
          a: "Auf der Seite, sodass die Schichten um das J herum laufen. In den Tests von CNC Kitchen brachen dieselben Haken stehend gedruckt bei der Hälfte der Last oder weniger, gespalten zwischen den Schichten. Für schwere Lasten nehmen Sie PETG oder ASA und mehr Wände; von gedruckten Türhaken aus PLA wird berichtet, dass sie an der oberen Ecke reißen.",
        },
        {
          q: "Wie viel hält die Klebeversion?",
          a: "So viel wie der Streifen: 3M gibt Command-Streifen Large mit 5 lb (etwa 2,3 kg) und Medium mit 3 lb (etwa 1,4 kg) an, nicht für Feuchträume. Drücken Sie die Platte fest an, warten Sie eine Stunde, bevor Sie etwas aufhängen, und entfernen Sie den Streifen, indem Sie ihn gerade nach unten an der Wand entlang dehnen – niemals zu sich hin ziehen. Maker berichten, dass das Klebeband vor dem Kunststoff nachgibt.",
        },
        {
          q: "Die Schraube hat den Haken gespalten. Was jetzt?",
          a: "Zu fest angezogene oder zu dicke Schrauben, die die Platte spalten, sind die häufigste Beschwerde über gedruckte Wandhaken. Die Löcher hier sind Durchgangslöcher nach ISO 273 mit Senkungen für normale Holzschraubenköpfe und 3 mm Kunststoff darunter; hören Sie auf, sobald der Kopf bündig sitzt. Command ist eine Marke von 3M; die Klebeversion ist passend für deren Streifen gemacht.",
        },
      ],
    },
    params: {
      MOUNT: {
        label: "Befestigung",
        desc: "Senkkopfschrauben 3,5, 4 oder 5 mm; ein Command-Streifen Medium (16 × 46) oder Large (19 × 69); oder über eine 19-mm-Schranktür oder eine 35, 40 oder 45 mm starke Tür.",
      },
      STYLE: { label: "Ausführung", desc: "Ein J, oder zwei übereinander auf einer Platte." },
      HOOKS: { label: "Haken in einer Reihe", desc: "Nebeneinander auf einer Platte: ein Schlüsselbrett oder eine Garderobenleiste." },
      DEPTH: { label: "Tiefe", desc: "Innere Tiefe von der Platte bis zur Spitze." },
      TIP: { label: "Höhe der Spitze", desc: "Wie weit die Spitze nach oben steht; 0 für einen geraden Stift." },
      WIDTH: { label: "Breite", desc: "Wird automatisch verbreitert, wenn ein Schraubenkopf oder ein Streifen mehr braucht." },
      THICKNESS: { label: "Stärke", desc: "Von Platte und J; dicker für schwere Taschen und Werkzeuge." },
    },
    example: "Schlüsselbrett: vier kleine Haken in einer Reihe",
    step: [
      "Der geschraubte Standardhaken wird als ein exakter Körper mit 16 Flächen exportiert: 8 Ebenen, 6 echte Zylinder (die Schraubenlöcher sowie die Innenrundung und die Spitze des Hakens) und 2 Kegel (die Senkungen).",
    ],
    aiFaqs: [
      {
        q: "Kann ich einen Handtuchhaken 3D-drucken, der ohne Bohren hält?",
        a: "Ja: https://www.forgent3d.com/de/generators/wall-hook-generator?MOUNT=Adhesive%20strip%2019&STYLE=Double&DEPTH=25 – zwei Haken übereinander auf einer Rückenplatte, bemessen für einen großen Command-Streifen von 3M (19 × 69 mm), die Abziehlasche bleibt unten frei. 3M gibt den großen Streifen mit 5 lb an und sagt, er sei nicht für Feuchträume gedacht – hängen Sie das Handtuch also außerhalb der Dusche auf.",
      },
      {
        q: "Ich brauche einen Haken, der über eine 40 mm starke Tür gehängt wird.",
        a: "https://www.forgent3d.com/de/generators/wall-hook-generator?MOUNT=Over%20a%2040%20mm%20door&STYLE=Double – ein 3 mm starker Bügel geht mit 0,8 mm Luft über die Türoberkante, und zwei Haken hängen auf der Innenseite. Prüfen Sie zuerst den Spalt über Ihrer Tür: Ein zu dicker Bügel verhindert, dass die Tür schließt – die häufigste Beschwerde über gedruckte Türhaken.",
      },
    ],
    keywords: [
      "wandhaken 3d druck",
      "wandhaken stl",
      "klebehaken 3d druck",
      "türhaken 3d druck",
      "command strip haken",
    ],
  },

  "phone-stand-generator": {
    copy: {
      name: "Handyständer-Generator",
      title: "Handyständer-Generator — Handyhalter für den Schreibtisch (STL) | Forgent3D",
      description:
        "3D-Druck-Handyständer passend zu Ihrem Handy mit Hülle: Blickwinkel 45–75°, Auflagehöhe zum Laden, Kabeldurchlass für Stecker, hoch, quer oder Tablet. STL/STEP gratis.",
      h1: "Handyständer-Generator: ein Schreibtischständer, der zu Ihrem Handy samt Hülle passt",
      intro:
        "Geben Sie die Dicke Ihres Handys über der Hülle gemessen ein – standardmäßig 11 mm –, wählen Sie den Blickwinkel und die Höhe der Auflage, und Sie erhalten einen einteiligen A-förmigen Ständer wie die meistheruntergeladenen gedruckten. Die Rückenlehne ist lang genug, um das Handy über seine Mitte hinaus zu stützen, eine Lücke in der vorderen Lippe lässt die Ladebuchse und den unteren Bildschirmrand frei, und das Kabel geht hinten durch eine Öffnung hinaus, durch die der Stecker passt.",
      whyPoints: [
        "Die Auflage passt zu Ihrem Handy mit Hülle, nicht zum nackten Handy",
        "Auflagehöhe zum Laden im Stehen, mit einer Kabelöffnung, durch die der Stecker passt",
        "Rückenlehne nach dem Gerät bemessen – hochkant, quer oder Tablet –, damit nichts nach hinten kippt",
        "Aussparungen für vier 8-mm-Gummifüße, damit er auf dem Schreibtisch nicht rutscht",
      ],
      faqs: [
        {
          q: "Mein Handy mit Hülle passt nicht in den Ständer, den ich gedruckt habe.",
          a: "Das ist die häufigste Beschwerde über gedruckte Handyständer, und die Versionen „für dickere Handys“ beliebter Ständer werden häufiger heruntergeladen als die Originale. Messen Sie Ihr Handy über der Hülle und geben Sie diesen Wert ein; die Auflage gibt 1 mm Spiel dazu.",
        },
        {
          q: "Wie lade ich das Handy, während es steht?",
          a: "Lassen Sie den Kabelschlitz an und erhöhen Sie die Auflagehöhe, bis Ihr Stecker unter das Handy passt; Winkelstecker brauchen weniger. Die hintere Öffnung ist größer als der Freiraum für USB-C-Stecker, den Apple vorgibt (12,45 × 6,60 mm), sodass der Stecker hindurchpasst, und die Lücke in der Lippe lässt die Buchse und den unteren Bildschirmrand zum Wischen frei.",
        },
        {
          q: "Wie drucke ich ihn?",
          a: "Legen Sie ihn im Slicer auf die Seite, sodass das Profil auf dem Druckbett liegt: keine Stützen, und die Schichten laufen entlang der Biegungen. Kleben Sie vier 8-mm-Silikonfüße in die Aussparungen auf der Unterseite, wenn er auf Ihrem Schreibtisch rutscht.",
        },
      ],
    },
    params: {
      DEVICE: {
        label: "Gerät",
        desc: "Bemisst die Rückenlehne: 163,3 mm für ein großes Handy hochkant, 77,9 quer, 179,5 für ein Tablet.",
      },
      THICKNESS: {
        label: "Handydicke mit Hülle",
        desc: "Über der Hülle messen: Ein Handy in einer MagSafe-Hülle hat etwa 11, in einer Outdoor-Hülle bis zu 17.",
      },
      ANGLE: { label: "Blickwinkel", desc: "Wie weit sich das Handy vom Tisch aus nach hinten neigt." },
      REST_HEIGHT: { label: "Höhe der Auflage", desc: "Erhöhen, damit ein Ladestecker unter ein hochkant stehendes Handy passt." },
      WIDTH: { label: "Ständerbreite", desc: "Breiter für Tablets." },
      CABLE: { label: "Ladekabelschlitz", desc: "Eine Öffnung hinten für das Kabel, groß genug, dass der Stecker hindurchpasst." },
    },
    example: "Für ein Handy in einer dicken Hülle, etwas steiler",
    step: [
      "Wird als ein exakter Körper mit 33 Flächen exportiert: 27 Ebenen und 6 echte Zylinder (die beiden abgerundeten Biegungen oben und die vier Aussparungen für Gummifüße).",
    ],
    aiFaqs: [
      {
        q: "Wie kann ich einen Handyständer 3D-drucken, in dem das Handy aufrecht laden kann?",
        a: "Öffnen Sie https://www.forgent3d.com/de/generators/phone-stand-generator?THICKNESS=12&REST_HEIGHT=35&WIDTH=80 – die Auflage liegt 35 mm über dem Tisch, sodass ein USB-C-Stecker unter ein hochkant stehendes Handy passt, eine Lücke in der vorderen Lippe lässt die Buchse frei, und das Kabel geht hinten durch eine Öffnung hinaus, durch die der ganze Stecker passt. Stellen Sie THICKNESS auf die Dicke Ihres Handys, über der Hülle gemessen.",
      },
      {
        q: "Kann derselbe Ständer ein Tablet in einer dicken Hülle halten?",
        a: "Ja: https://www.forgent3d.com/de/generators/phone-stand-generator?DEVICE=Tablet%2C%20landscape&THICKNESS=16&WIDTH=100 – die Rückenlehne ist für ein quer gehaltenes Tablet bemessen (179,5 mm, die Breite eines 11-Zoll-iPads), und die Auflage nimmt 16 mm samt Hülle auf. Ständer dieser Form werden auf dieselbe Weise für Tablets verkauft, mit breiterer Auflage.",
      },
    ],
    keywords: [
      "handyständer 3d druck",
      "handyhalter schreibtisch",
      "handyhalterung schreibtisch stl",
      "handyständer mit ladekabel",
      "tablet ständer 3d druck",
    ],
  },
};
