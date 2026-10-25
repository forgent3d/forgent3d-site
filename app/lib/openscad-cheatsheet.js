// The OpenSCAD cheat sheet on the viewer page (app/[locale]/openscad-viewer/page.js): the statements people use
// most, each with its syntax, how it works and where it trips people up, and a runnable example the row opens in
// the viewer (#code=, the same link format as the page's sample). It is the content a search for "openscad在线" /
// "openscad online" finds useful on landing: one click and an example is rendered, ready to change.
//
// Every example was rendered with the real OpenSCAD (cad-build rebuild, the bundled wasm build) before it went in:
// change one, render it again. No imports here, so a node script can load this file to do that.
//
// en and zh were written; ko, de, ja and es are translations whose examples are the English code with only the
// comments translated, so they render what the English one does. scripts/check-openscad-viewer-locales.mjs fails
// when a translated example differs from the English outside its comments.

const ROWS = [
  {
    id: "primitives",
    syntax: "cube · cylinder · sphere",
    text: {
      en: "Box, cylinder, sphere. A cube starts with one corner on the origin, a cylinder with the centre of its base, a sphere with its centre; center = true centres a cube or cylinder on the origin. A cylinder with d1 ≠ d2 is a cone; $fn is the number of segments in a circle.",
      zh: "长方体、圆柱、球。cube 默认一个角在原点，cylinder 底面圆心在原点，sphere 球心在原点；cube 和 cylinder 加 center = true 改成以原点为中心。cylinder 的 d1 ≠ d2 就是圆台，$fn 是圆的分段数。",
      ko: "직육면체, 원기둥, 구. cube는 한 꼭짓점이 원점에, cylinder는 밑면 중심이 원점에, sphere는 중심이 원점에 놓입니다. cube와 cylinder에 center = true를 주면 원점을 중심으로 놓입니다. cylinder의 d1 ≠ d2이면 원뿔대가 되고, $fn은 원을 나누는 분할 수입니다.",
      de: "Quader, Zylinder, Kugel. Ein cube beginnt mit einer Ecke im Ursprung, ein cylinder mit dem Mittelpunkt seiner Grundfläche, eine sphere mit ihrem Mittelpunkt; center = true zentriert cube oder cylinder auf den Ursprung. Ein Zylinder mit d1 ≠ d2 ist ein Kegelstumpf; $fn ist die Anzahl der Segmente eines Kreises.",
      ja: "直方体、円柱、球。cube は角の1つが原点に、cylinder は底面の中心が原点に、sphere は中心が原点に置かれます。cube と cylinder は center = true で原点を中心に置けます。cylinder で d1 ≠ d2 にすると円錐台になり、$fn は円の分割数です。",
      es: "Caja, cilindro, esfera. Un cube empieza con una esquina en el origen, un cylinder con el centro de su base y una sphere con su centro; center = true centra un cube o un cylinder en el origen. Un cylinder con d1 ≠ d2 es un cono; $fn es el número de segmentos de un círculo.",
    },
    code: {
      en: `$fn = 64;  // segments per circle
cube([30, 20, 10]);                                          // one corner on the origin
translate([45, 10, 0]) cylinder(h = 20, d1 = 20, d2 = 10);   // d1 ≠ d2: a cone
translate([75, 10, 10]) sphere(d = 20);                      // centred on its point
translate([15, 40, 5]) cube([30, 20, 10], center = true);    // center = true: centred too`,
      zh: `$fn = 64;  // 圆的分段数
cube([30, 20, 10]);                                          // 一个角在原点
translate([45, 10, 0]) cylinder(h = 20, d1 = 20, d2 = 10);   // d1 ≠ d2：圆台
translate([75, 10, 10]) sphere(d = 20);                      // 球心在这一点
translate([15, 40, 5]) cube([30, 20, 10], center = true);    // center = true：以这一点为中心`,
      ko: `$fn = 64;  // 원의 분할 수
cube([30, 20, 10]);                                          // 한 꼭짓점이 원점에
translate([45, 10, 0]) cylinder(h = 20, d1 = 20, d2 = 10);   // d1 ≠ d2: 원뿔대
translate([75, 10, 10]) sphere(d = 20);                      // 이 점이 구의 중심
translate([15, 40, 5]) cube([30, 20, 10], center = true);    // center = true: 이 점이 중심`,
      de: `$fn = 64;  // Segmente pro Kreis
cube([30, 20, 10]);                                          // eine Ecke im Ursprung
translate([45, 10, 0]) cylinder(h = 20, d1 = 20, d2 = 10);   // d1 ≠ d2: ein Kegelstumpf
translate([75, 10, 10]) sphere(d = 20);                      // Mittelpunkt auf diesem Punkt
translate([15, 40, 5]) cube([30, 20, 10], center = true);    // center = true: ebenfalls zentriert`,
      ja: `$fn = 64;  // 円の分割数
cube([30, 20, 10]);                                          // 角の1つが原点
translate([45, 10, 0]) cylinder(h = 20, d1 = 20, d2 = 10);   // d1 ≠ d2：円錐台
translate([75, 10, 10]) sphere(d = 20);                      // この点が球の中心
translate([15, 40, 5]) cube([30, 20, 10], center = true);    // center = true：この点が中心`,
      es: `$fn = 64;  // segmentos por círculo
cube([30, 20, 10]);                                          // una esquina en el origen
translate([45, 10, 0]) cylinder(h = 20, d1 = 20, d2 = 10);   // d1 ≠ d2: un cono
translate([75, 10, 10]) sphere(d = 20);                      // centrada en su punto
translate([15, 40, 5]) cube([30, 20, 10], center = true);    // center = true: también centrado`,
    },
  },
  {
    id: "transforms",
    syntax: "translate · rotate · mirror",
    text: {
      en: "Move, rotate (in degrees: about X, then Y, then Z), mirror. A transform goes in front of the object and the one nearest it acts first: translate(…) rotate(…) cube() rotates, then moves. mirror flips without copying — write the original again to keep both.",
      zh: "移动、旋转（单位是度，先绕 X、再绕 Y、再绕 Z）、镜像。变换写在物体前面，离物体近的先生效：translate(…) rotate(…) cube() 是先转再移。mirror 只翻转、不复制，要留原件就再写一遍。",
      ko: "이동, 회전(단위는 도: X축, Y축, Z축 순서로 회전), 대칭. 변환은 물체 앞에 쓰고, 물체에 가까운 것부터 적용됩니다. translate(…) rotate(…) cube()는 먼저 회전한 뒤 이동합니다. mirror는 복사하지 않고 뒤집기만 하므로, 원본도 남기려면 한 번 더 써야 합니다.",
      de: "Verschieben, drehen (in Grad: um X, dann Y, dann Z), spiegeln. Eine Transformation steht vor dem Objekt, und die ihm nächste wirkt zuerst: translate(…) rotate(…) cube() dreht erst und verschiebt dann. mirror spiegelt, ohne zu kopieren – für beide Teile das Original noch einmal schreiben.",
      ja: "移動、回転（単位は度。X、Y、Z の順に回転）、鏡像。変換は物体の前に書き、物体に近いものから先に効きます。translate(…) rotate(…) cube() は回転してから移動します。mirror は反転するだけでコピーしないので、元の形も残すならもう一度書きます。",
      es: "Mover, girar (en grados: alrededor de X, luego Y, luego Z) y reflejar. Una transformación va delante del objeto y actúa primero la más cercana a él: translate(…) rotate(…) cube() gira y luego mueve. mirror refleja sin copiar: para conservar los dos, vuelve a escribir el original.",
    },
    code: {
      en: `$fn = 48;
cylinder(h = 20, d = 6);                                            // the original
translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);   // tilted 30°, then moved
mirror([1, 0, 0])                                                   // the tilted one, flipped across the YZ plane
  translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);`,
      zh: `$fn = 48;
cylinder(h = 20, d = 6);                                            // 原件
translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);   // 先倾斜 30°，再移过去
mirror([1, 0, 0])                                                   // 把倾斜的那根沿 YZ 平面翻过去
  translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);`,
      ko: `$fn = 48;
cylinder(h = 20, d = 6);                                            // 원본
translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);   // 30° 기울인 다음 이동
mirror([1, 0, 0])                                                   // 기울인 것을 YZ 평면 기준으로 뒤집기
  translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);`,
      de: `$fn = 48;
cylinder(h = 20, d = 6);                                            // das Original
translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);   // um 30° gekippt, dann verschoben
mirror([1, 0, 0])                                                   // der gekippte, an der YZ-Ebene gespiegelt
  translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);`,
      ja: `$fn = 48;
cylinder(h = 20, d = 6);                                            // 元の形
translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);   // 30°傾けてから移動
mirror([1, 0, 0])                                                   // 傾けたほうを YZ 平面で反転
  translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);`,
      es: `$fn = 48;
cylinder(h = 20, d = 6);                                            // el original
translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);   // inclinado 30° y luego movido
mirror([1, 0, 0])                                                   // el inclinado, reflejado respecto al plano YZ
  translate([20, 0, 0]) rotate([0, 30, 0]) cylinder(h = 20, d = 6);`,
    },
  },
  {
    id: "difference",
    syntax: "difference() · union() · intersection()",
    text: {
      en: "Booleans. difference keeps the first object and subtracts everything after it: holes, slots, pockets. Let a cutter stick out 1 mm past both faces instead of ending flush, or the preview shows flickering leftovers and the render may complain. union joins; intersection keeps only the overlap.",
      zh: "布尔运算。difference 用第一个物体减去后面所有物体：打孔、开槽、挖腔都靠它。挖孔的物体两头各多伸出 1 mm，别和表面正好齐平，否则预览里会留下闪烁的残面，渲染也可能报错。union 合并，intersection 只留重叠的部分。",
      ko: "불리언 연산. difference는 첫 번째 물체에서 그 뒤의 모든 물체를 뺍니다. 구멍, 홈, 포켓을 만들 때 씁니다. 빼는 물체는 표면과 딱 맞추지 말고 양쪽으로 1 mm씩 튀어나오게 하세요. 그렇지 않으면 미리보기에 깜빡이는 잔여 면이 남고 렌더링에서 오류가 날 수도 있습니다. union은 합치고, intersection은 겹치는 부분만 남깁니다.",
      de: "Boolesche Operationen. difference behält das erste Objekt und zieht alles danach ab: Bohrungen, Schlitze, Taschen. Lassen Sie einen Schneidkörper auf beiden Seiten 1 mm überstehen, statt bündig zu enden – sonst zeigt die Vorschau flackernde Reste, und das Rendern kann scheitern. union vereinigt; intersection behält nur die Überschneidung.",
      ja: "ブーリアン演算。difference は最初の物体から、後ろに書いたすべての物体を引きます。穴、溝、ポケットはこれで作ります。削る物体は表面ぴったりで止めず、両側に 1 mm ずつはみ出させてください。ぴったりだとプレビューにちらつく面が残り、レンダーでエラーになることもあります。union は合体、intersection は重なった部分だけを残します。",
      es: "Operaciones booleanas. difference conserva el primer objeto y le resta todo lo que va después: agujeros, ranuras, cajeados. Haz que la pieza que corta sobresalga 1 mm por ambas caras en vez de quedar a ras; si no, la vista previa muestra restos que parpadean y el renderizado puede fallar. union une; intersection conserva solo la parte común.",
    },
    code: {
      en: `$fn = 48;
difference() {
  cube([40, 30, 6]);                                // the first object: the plate
  translate([10, 15, -1]) cylinder(h = 8, d = 5);   // the cutters start 1 mm below and end 1 mm above it
  translate([30, 15, -1]) cylinder(h = 8, d = 5);
}`,
      zh: `$fn = 48;
difference() {
  cube([40, 30, 6]);                                // 第一个物体：板子
  translate([10, 15, -1]) cylinder(h = 8, d = 5);   // 挖孔的圆柱从板下 1 mm 起、到板上 1 mm 止
  translate([30, 15, -1]) cylinder(h = 8, d = 5);
}`,
      ko: `$fn = 48;
difference() {
  cube([40, 30, 6]);                                // 첫 번째 물체: 판
  translate([10, 15, -1]) cylinder(h = 8, d = 5);   // 구멍용 원기둥은 판 아래 1 mm에서 시작해 위 1 mm에서 끝남
  translate([30, 15, -1]) cylinder(h = 8, d = 5);
}`,
      de: `$fn = 48;
difference() {
  cube([40, 30, 6]);                                // das erste Objekt: die Platte
  translate([10, 15, -1]) cylinder(h = 8, d = 5);   // die Schneidkörper beginnen 1 mm darunter und enden 1 mm darüber
  translate([30, 15, -1]) cylinder(h = 8, d = 5);
}`,
      ja: `$fn = 48;
difference() {
  cube([40, 30, 6]);                                // 最初の物体：板
  translate([10, 15, -1]) cylinder(h = 8, d = 5);   // 穴あけ用の円柱は板の 1 mm 下から 1 mm 上まで
  translate([30, 15, -1]) cylinder(h = 8, d = 5);
}`,
      es: `$fn = 48;
difference() {
  cube([40, 30, 6]);                                // el primer objeto: la placa
  translate([10, 15, -1]) cylinder(h = 8, d = 5);   // los cortadores empiezan 1 mm por debajo y acaban 1 mm por encima
  translate([30, 15, -1]) cylinder(h = 8, d = 5);
}`,
    },
  },
  {
    id: "hull",
    syntax: "hull()",
    text: {
      en: "Wraps its children in one convex hull. Four cylinders make a plate with rounded corners; two make a slot. It only ever fills outwards — pair it with difference for anything concave.",
      zh: "把里面的物体包成一个凸壳。四个圆柱 hull 起来是圆角板，两个圆柱 hull 起来是腰形孔。它只会往外包，凹进去的形状要和 difference 配着用。",
      ko: "안에 있는 물체들을 하나의 볼록 껍질로 감쌉니다. 원기둥 네 개를 hull하면 모서리가 둥근 판, 두 개를 hull하면 장공(긴 구멍)이 됩니다. 바깥쪽으로만 채우므로, 오목한 모양은 difference와 함께 써야 합니다.",
      de: "Hüllt seine Kinder in eine einzige konvexe Hülle. Vier Zylinder ergeben eine Platte mit runden Ecken, zwei ein Langloch. Die Hülle füllt immer nur nach außen – für alles Konkave mit difference kombinieren.",
      ja: "中の物体をまとめて1つの凸包で包みます。円柱4本を hull すると角の丸い板、2本なら長穴になります。外側にしか膨らまないので、へこんだ形は difference と組み合わせます。",
      es: "Envuelve a sus hijos en una sola envolvente convexa. Cuatro cilindros dan una placa con esquinas redondeadas; dos, una ranura alargada. Solo rellena hacia fuera: para formas cóncavas, combínalo con difference.",
    },
    code: {
      en: `$fn = 48;
difference() {
  hull() {                                   // four corner cylinders: a plate with rounded corners
    translate([5, 5, 0]) cylinder(h = 4, r = 5);
    translate([55, 5, 0]) cylinder(h = 4, r = 5);
    translate([5, 35, 0]) cylinder(h = 4, r = 5);
    translate([55, 35, 0]) cylinder(h = 4, r = 5);
  }
  hull() {                                   // two cylinders: a slot
    translate([20, 20, -1]) cylinder(h = 6, d = 6);
    translate([40, 20, -1]) cylinder(h = 6, d = 6);
  }
}`,
      zh: `$fn = 48;
difference() {
  hull() {                                   // 四个角上的圆柱：圆角板
    translate([5, 5, 0]) cylinder(h = 4, r = 5);
    translate([55, 5, 0]) cylinder(h = 4, r = 5);
    translate([5, 35, 0]) cylinder(h = 4, r = 5);
    translate([55, 35, 0]) cylinder(h = 4, r = 5);
  }
  hull() {                                   // 两个圆柱：腰形孔
    translate([20, 20, -1]) cylinder(h = 6, d = 6);
    translate([40, 20, -1]) cylinder(h = 6, d = 6);
  }
}`,
      ko: `$fn = 48;
difference() {
  hull() {                                   // 네 모서리의 원기둥: 모서리가 둥근 판
    translate([5, 5, 0]) cylinder(h = 4, r = 5);
    translate([55, 5, 0]) cylinder(h = 4, r = 5);
    translate([5, 35, 0]) cylinder(h = 4, r = 5);
    translate([55, 35, 0]) cylinder(h = 4, r = 5);
  }
  hull() {                                   // 원기둥 두 개: 장공
    translate([20, 20, -1]) cylinder(h = 6, d = 6);
    translate([40, 20, -1]) cylinder(h = 6, d = 6);
  }
}`,
      de: `$fn = 48;
difference() {
  hull() {                                   // vier Eckzylinder: eine Platte mit runden Ecken
    translate([5, 5, 0]) cylinder(h = 4, r = 5);
    translate([55, 5, 0]) cylinder(h = 4, r = 5);
    translate([5, 35, 0]) cylinder(h = 4, r = 5);
    translate([55, 35, 0]) cylinder(h = 4, r = 5);
  }
  hull() {                                   // zwei Zylinder: ein Langloch
    translate([20, 20, -1]) cylinder(h = 6, d = 6);
    translate([40, 20, -1]) cylinder(h = 6, d = 6);
  }
}`,
      ja: `$fn = 48;
difference() {
  hull() {                                   // 四隅の円柱：角の丸い板
    translate([5, 5, 0]) cylinder(h = 4, r = 5);
    translate([55, 5, 0]) cylinder(h = 4, r = 5);
    translate([5, 35, 0]) cylinder(h = 4, r = 5);
    translate([55, 35, 0]) cylinder(h = 4, r = 5);
  }
  hull() {                                   // 円柱2本：長穴
    translate([20, 20, -1]) cylinder(h = 6, d = 6);
    translate([40, 20, -1]) cylinder(h = 6, d = 6);
  }
}`,
      es: `$fn = 48;
difference() {
  hull() {                                   // cuatro cilindros en las esquinas: una placa con esquinas redondeadas
    translate([5, 5, 0]) cylinder(h = 4, r = 5);
    translate([55, 5, 0]) cylinder(h = 4, r = 5);
    translate([5, 35, 0]) cylinder(h = 4, r = 5);
    translate([55, 35, 0]) cylinder(h = 4, r = 5);
  }
  hull() {                                   // dos cilindros: una ranura alargada
    translate([20, 20, -1]) cylinder(h = 6, d = 6);
    translate([40, 20, -1]) cylinder(h = 6, d = 6);
  }
}`,
    },
  },
  {
    id: "minkowski",
    syntax: "minkowski()",
    text: {
      en: "Sweeps the second object over the whole surface of the first: a box with a small sphere becomes a box with every edge rounded. The result grows by the sphere's diameter on every axis, so make the box that much smaller first.",
      zh: "让第二个物体沿着第一个物体的表面走一圈：方块配一个小球，就是所有边都倒了圆角的盒子。结果在每个方向都会长大一个球的直径，所以方块要先减掉这么多。",
      ko: "두 번째 물체를 첫 번째 물체의 표면 전체를 따라 쓸고 지나갑니다. 상자에 작은 구를 주면 모든 모서리가 둥근 상자가 됩니다. 결과는 모든 축 방향으로 구의 지름만큼 커지므로, 상자를 그만큼 먼저 줄여 두세요.",
      de: "Führt das zweite Objekt über die gesamte Oberfläche des ersten: Ein Quader mit einer kleinen Kugel wird zu einem Quader mit rundum verrundeten Kanten. Das Ergebnis wächst auf jeder Achse um den Kugeldurchmesser, also machen Sie den Quader vorher um so viel kleiner.",
      ja: "2つ目の物体を、1つ目の物体の表面全体に沿って動かします。箱に小さな球を組み合わせると、すべての辺が丸まった箱になります。結果はどの軸方向にも球の直径ぶん大きくなるので、箱をその分だけ先に小さくしておきます。",
      es: "Pasa el segundo objeto por toda la superficie del primero: una caja con una esfera pequeña se convierte en una caja con todas las aristas redondeadas. El resultado crece el diámetro de la esfera en cada eje, así que antes reduce la caja en esa medida.",
    },
    code: {
      en: `$fn = 32;
minkowski() {
  cube([36, 26, 16]);   // for a 40 × 30 × 20 box: the sphere's diameter (4) off every axis
  sphere(r = 2);        // the edge radius
}`,
      zh: `$fn = 32;
minkowski() {
  cube([36, 26, 16]);   // 想要 40 × 30 × 20：每个方向先减掉球的直径 4
  sphere(r = 2);        // 圆角半径
}`,
      ko: `$fn = 32;
minkowski() {
  cube([36, 26, 16]);   // 40 × 30 × 20 상자를 원하면: 축마다 구의 지름(4)만큼 빼기
  sphere(r = 2);        // 모서리 반경
}`,
      de: `$fn = 32;
minkowski() {
  cube([36, 26, 16]);   // für eine Box 40 × 30 × 20: auf jeder Achse den Kugeldurchmesser (4) abziehen
  sphere(r = 2);        // der Kantenradius
}`,
      ja: `$fn = 32;
minkowski() {
  cube([36, 26, 16]);   // 40 × 30 × 20 の箱にするなら：各軸で球の直径（4）を引く
  sphere(r = 2);        // 角の丸みの半径
}`,
      es: `$fn = 32;
minkowski() {
  cube([36, 26, 16]);   // para una caja de 40 × 30 × 20: resta el diámetro de la esfera (4) en cada eje
  sphere(r = 2);        // el radio del redondeo
}`,
    },
  },
  {
    id: "linear-extrude",
    syntax: "linear_extrude()",
    text: {
      en: "Pulls a 2D shape (square, circle, polygon, text) up along Z into a solid. twist turns it as it rises (in degrees); scale shrinks or grows the top. A circle with $fn = 6 is a hexagon.",
      zh: "把 2D 图形（square、circle、polygon、text）沿 Z 轴拉成实体。twist 让它边拉边转（单位是度），scale 让顶面按比例缩放。circle 配 $fn = 6 就是六边形。",
      ko: "2D 도형(square, circle, polygon, text)을 Z축 방향으로 끌어올려 입체로 만듭니다. twist는 올라가면서 돌아가는 각도(도), scale은 윗면을 줄이거나 키웁니다. circle에 $fn = 6을 주면 육각형입니다.",
      de: "Zieht eine 2D-Form (square, circle, polygon, text) entlang Z zu einem Körper hoch. twist dreht sie dabei (in Grad); scale verkleinert oder vergrößert die Oberseite. Ein circle mit $fn = 6 ist ein Sechseck.",
      ja: "2D の図形（square、circle、polygon、text）を Z 軸方向に引き伸ばして立体にします。twist は伸ばしながらねじる角度（度）、scale は上面を縮小・拡大します。circle に $fn = 6 を指定すると六角形です。",
      es: "Estira una forma 2D (square, circle, polygon, text) hacia arriba a lo largo de Z hasta formar un sólido. twist la gira mientras sube (en grados); scale reduce o agranda la cara superior. Un circle con $fn = 6 es un hexágono.",
    },
    code: {
      en: `linear_extrude(height = 40, twist = 60, scale = 0.6)   // 60° of twist, the top at 60 % size
  circle(d = 30, $fn = 6);                             // six segments: a hexagon`,
      zh: `linear_extrude(height = 40, twist = 60, scale = 0.6)   // 拧 60°，顶面缩到 60 %
  circle(d = 30, $fn = 6);                             // 六段：六边形`,
      ko: `linear_extrude(height = 40, twist = 60, scale = 0.6)   // 60° 비틀고 윗면은 60 % 크기로
  circle(d = 30, $fn = 6);                             // 6분할: 육각형`,
      de: `linear_extrude(height = 40, twist = 60, scale = 0.6)   // 60° Verdrehung, Oberseite auf 60 % Größe
  circle(d = 30, $fn = 6);                             // sechs Segmente: ein Sechseck`,
      ja: `linear_extrude(height = 40, twist = 60, scale = 0.6)   // 60°ねじり、上面は 60 % の大きさ
  circle(d = 30, $fn = 6);                             // 6分割：六角形`,
      es: `linear_extrude(height = 40, twist = 60, scale = 0.6)   // 60° de giro, la cara superior al 60 %
  circle(d = 30, $fn = 6);                             // seis segmentos: un hexágono`,
    },
  },
  {
    id: "rotate-extrude",
    syntax: "rotate_extrude()",
    text: {
      en: "Spins a 2D cross-section around the Z axis: cups, flanges, pulleys. The cross-section is the outline of one half of the part cut in two, and all of it must lie right of the Y axis (x ≥ 0).",
      zh: "把 2D 截面绕 Z 轴转一圈，做杯子、法兰、皮带轮这类回转体。截面就是零件剖成两半后一半的轮廓，要整个在 Y 轴右边（x ≥ 0）。",
      ko: "2D 단면을 Z축을 중심으로 한 바퀴 돌려 컵, 플랜지, 풀리 같은 회전체를 만듭니다. 단면은 부품을 반으로 잘랐을 때 한쪽의 윤곽이며, 전부 Y축 오른쪽(x ≥ 0)에 있어야 합니다.",
      de: "Dreht einen 2D-Querschnitt um die Z-Achse: Becher, Flansche, Riemenscheiben. Der Querschnitt ist der Umriss einer Hälfte des durchgeschnittenen Teils und muss vollständig rechts der Y-Achse liegen (x ≥ 0).",
      ja: "2D の断面を Z 軸のまわりに1回転させて、カップ、フランジ、プーリーのような回転体を作ります。断面は部品を半分に切ったときの片側の輪郭で、すべて Y 軸の右側（x ≥ 0）に置く必要があります。",
      es: "Hace girar una sección 2D alrededor del eje Z: vasos, bridas, poleas. La sección es el contorno de una mitad de la pieza cortada en dos, y debe quedar entera a la derecha del eje Y (x ≥ 0).",
    },
    code: {
      en: `$fn = 96;
rotate_extrude()
  // a cup's cross-section, all of it at x ≥ 0: a 3 mm bottom, walls flaring out to the rim
  polygon([[0, 0], [25, 0], [30, 50], [27, 50], [22, 3], [0, 3]]);`,
      zh: `$fn = 96;
rotate_extrude()
  // 杯子的截面，整个在 x ≥ 0：杯底 3 mm，杯壁往上张开
  polygon([[0, 0], [25, 0], [30, 50], [27, 50], [22, 3], [0, 3]]);`,
      ko: `$fn = 96;
rotate_extrude()
  // 컵의 단면, 전부 x ≥ 0: 바닥 3 mm, 벽은 입구로 갈수록 벌어짐
  polygon([[0, 0], [25, 0], [30, 50], [27, 50], [22, 3], [0, 3]]);`,
      de: `$fn = 96;
rotate_extrude()
  // Querschnitt eines Bechers, ganz bei x ≥ 0: 3 mm Boden, Wände zum Rand hin ausgestellt
  polygon([[0, 0], [25, 0], [30, 50], [27, 50], [22, 3], [0, 3]]);`,
      ja: `$fn = 96;
rotate_extrude()
  // カップの断面。すべて x ≥ 0：底は 3 mm、壁は口に向かって広がる
  polygon([[0, 0], [25, 0], [30, 50], [27, 50], [22, 3], [0, 3]]);`,
      es: `$fn = 96;
rotate_extrude()
  // la sección de un vaso, toda en x ≥ 0: fondo de 3 mm, paredes que se abren hacia el borde
  polygon([[0, 0], [25, 0], [30, 50], [27, 50], [22, 3], [0, 3]]);`,
    },
  },
  {
    id: "for",
    syntax: "for",
    text: {
      en: "Repeats a shape: a bolt circle, a row of vents. A range [start : step : end] includes the end, so [0 : 5] is six values, 0 to 5. Inside a difference it cuts all the holes at once.",
      zh: "重复生成：一圈螺栓孔、一排散热孔。范围 [开始 : 步长 : 结束] 包含结束值，[0 : 5] 是 0 到 5 共 6 个数。放进 difference 里就是一次挖出所有孔。",
      ko: "모양을 반복합니다. 볼트 구멍을 원형으로, 통풍구를 한 줄로 배치할 때 씁니다. 범위 [시작 : 간격 : 끝]은 끝 값을 포함하므로 [0 : 5]는 0부터 5까지 6개입니다. difference 안에 넣으면 구멍을 한 번에 모두 뚫습니다.",
      de: "Wiederholt eine Form: ein Lochkreis, eine Reihe Lüftungsschlitze. Ein Bereich [Start : Schritt : Ende] schließt das Ende ein, [0 : 5] sind also sechs Werte, 0 bis 5. In einem difference schneidet er alle Löcher auf einmal.",
      ja: "形を繰り返します。ボルト穴の円配置や、通気穴の列に使います。範囲 [開始 : 刻み : 終了] は終了値を含むので、[0 : 5] は 0 から 5 までの6個です。difference の中に入れると、すべての穴を一度にあけます。",
      es: "Repite una forma: un círculo de pernos, una fila de rejillas. Un rango [inicio : paso : fin] incluye el final, así que [0 : 5] son seis valores, de 0 a 5. Dentro de un difference corta todos los agujeros de una vez.",
    },
    code: {
      en: `$fn = 64;
difference() {
  cylinder(h = 6, d = 60);
  translate([0, 0, -1]) cylinder(h = 8, d = 20);   // the centre bore
  for (i = [0 : 5])                                // i = 0, 1, … 5: six bolt holes
    rotate([0, 0, i * 60]) translate([22, 0, -1]) cylinder(h = 8, d = 5);
}`,
      zh: `$fn = 64;
difference() {
  cylinder(h = 6, d = 60);
  translate([0, 0, -1]) cylinder(h = 8, d = 20);   // 中心孔
  for (i = [0 : 5])                                // i = 0, 1, … 5：6 个螺栓孔
    rotate([0, 0, i * 60]) translate([22, 0, -1]) cylinder(h = 8, d = 5);
}`,
      ko: `$fn = 64;
difference() {
  cylinder(h = 6, d = 60);
  translate([0, 0, -1]) cylinder(h = 8, d = 20);   // 가운데 구멍
  for (i = [0 : 5])                                // i = 0, 1, … 5: 볼트 구멍 6개
    rotate([0, 0, i * 60]) translate([22, 0, -1]) cylinder(h = 8, d = 5);
}`,
      de: `$fn = 64;
difference() {
  cylinder(h = 6, d = 60);
  translate([0, 0, -1]) cylinder(h = 8, d = 20);   // die Mittelbohrung
  for (i = [0 : 5])                                // i = 0, 1, … 5: sechs Schraubenlöcher
    rotate([0, 0, i * 60]) translate([22, 0, -1]) cylinder(h = 8, d = 5);
}`,
      ja: `$fn = 64;
difference() {
  cylinder(h = 6, d = 60);
  translate([0, 0, -1]) cylinder(h = 8, d = 20);   // 中心の穴
  for (i = [0 : 5])                                // i = 0, 1, … 5：ボルト穴6個
    rotate([0, 0, i * 60]) translate([22, 0, -1]) cylinder(h = 8, d = 5);
}`,
      es: `$fn = 64;
difference() {
  cylinder(h = 6, d = 60);
  translate([0, 0, -1]) cylinder(h = 8, d = 20);   // el taladro central
  for (i = [0 : 5])                                // i = 0, 1, … 5: seis agujeros para pernos
    rotate([0, 0, i * 60]) translate([22, 0, -1]) cylinder(h = 8, d = 5);
}`,
    },
  },
  {
    id: "module",
    syntax: "module",
    text: {
      en: "Wraps geometry into a part with parameters that you call like a function. Give the parameters defaults and pass only the ones you change.",
      zh: "把一段几何包成带参数的零件，像函数一样反复调用。参数可以给默认值，调用时只写要改的那几个。",
      ko: "형상을 파라미터가 있는 부품으로 묶어 함수처럼 불러 씁니다. 파라미터에 기본값을 주면, 부를 때 바꿀 것만 쓰면 됩니다.",
      de: "Fasst Geometrie zu einem Teil mit Parametern zusammen, das Sie wie eine Funktion aufrufen. Geben Sie den Parametern Standardwerte und übergeben Sie nur die, die Sie ändern.",
      ja: "形状をパラメーター付きの部品にまとめ、関数のように呼び出して使います。パラメーターに既定値を付けておけば、呼ぶときは変えたいものだけ書けば済みます。",
      es: "Agrupa geometría en una pieza con parámetros a la que llamas como a una función. Da valores por defecto a los parámetros y pasa solo los que cambies.",
    },
    code: {
      en: `$fn = 48;
// a PCB standoff: height, outside diameter, screw hole
module standoff(h = 10, d = 7, hole = 3) {
  difference() {
    cylinder(h = h, d = d);
    translate([0, 0, -1]) cylinder(h = h + 2, d = hole);
  }
}
standoff();                                     // all defaults
translate([15, 0, 0]) standoff(h = 15);         // only the height changed
translate([30, 0, 0]) standoff(h = 20, d = 9, hole = 4);`,
      zh: `$fn = 48;
// PCB 铜柱：高度、外径、螺丝孔
module standoff(h = 10, d = 7, hole = 3) {
  difference() {
    cylinder(h = h, d = d);
    translate([0, 0, -1]) cylinder(h = h + 2, d = hole);
  }
}
standoff();                                     // 全用默认值
translate([15, 0, 0]) standoff(h = 15);         // 只改高度
translate([30, 0, 0]) standoff(h = 20, d = 9, hole = 4);`,
      ko: `$fn = 48;
// PCB 스페이서: 높이, 바깥지름, 나사 구멍
module standoff(h = 10, d = 7, hole = 3) {
  difference() {
    cylinder(h = h, d = d);
    translate([0, 0, -1]) cylinder(h = h + 2, d = hole);
  }
}
standoff();                                     // 모두 기본값
translate([15, 0, 0]) standoff(h = 15);         // 높이만 바꿈
translate([30, 0, 0]) standoff(h = 20, d = 9, hole = 4);`,
      de: `$fn = 48;
// ein Platinen-Abstandshalter: Höhe, Außendurchmesser, Schraubenloch
module standoff(h = 10, d = 7, hole = 3) {
  difference() {
    cylinder(h = h, d = d);
    translate([0, 0, -1]) cylinder(h = h + 2, d = hole);
  }
}
standoff();                                     // alles Standardwerte
translate([15, 0, 0]) standoff(h = 15);         // nur die Höhe geändert
translate([30, 0, 0]) standoff(h = 20, d = 9, hole = 4);`,
      ja: `$fn = 48;
// 基板用スペーサー：高さ、外径、ネジ穴
module standoff(h = 10, d = 7, hole = 3) {
  difference() {
    cylinder(h = h, d = d);
    translate([0, 0, -1]) cylinder(h = h + 2, d = hole);
  }
}
standoff();                                     // すべて既定値
translate([15, 0, 0]) standoff(h = 15);         // 高さだけ変更
translate([30, 0, 0]) standoff(h = 20, d = 9, hole = 4);`,
      es: `$fn = 48;
// un separador para PCB: altura, diámetro exterior, agujero del tornillo
module standoff(h = 10, d = 7, hole = 3) {
  difference() {
    cylinder(h = h, d = d);
    translate([0, 0, -1]) cylinder(h = h + 2, d = hole);
  }
}
standoff();                                     // todo por defecto
translate([15, 0, 0]) standoff(h = 15);         // solo cambia la altura
translate([30, 0, 0]) standoff(h = 20, d = 9, hole = 4);`,
    },
  },
  {
    id: "customizer",
    syntax: "// [min : step : max]",
    text: {
      en: "Put a comment like // [20:5:120] after a variable at the top of the file and the viewer's parameter panel shows a slider for it; a comment on the line above becomes its label, and /* [Size] */ starts a group. Drag a slider and the number in the source changes with it.",
      zh: "文件开头的变量后面写 // [20:5:120] 这样的注释，预览器的参数面板就出现一个滑块；上一行的注释是它的说明，/* [尺寸] */ 给参数分组。拖滑块，源码里的数字跟着改。",
      ko: "파일 맨 위 변수 뒤에 // [20:5:120] 같은 주석을 달면 뷰어의 파라미터 패널에 슬라이더가 생깁니다. 바로 윗줄의 주석은 그 설명이 되고, /* [크기] */는 그룹을 시작합니다. 슬라이더를 움직이면 소스의 숫자도 함께 바뀝니다.",
      de: "Schreiben Sie oben in der Datei einen Kommentar wie // [20:5:120] hinter eine Variable, und das Parameter-Panel des Viewers zeigt dafür einen Schieberegler; ein Kommentar in der Zeile darüber wird zur Beschriftung, und /* [Größe] */ beginnt eine Gruppe. Ziehen Sie den Regler, und die Zahl im Quelltext ändert sich mit.",
      ja: "ファイル先頭の変数の後ろに // [20:5:120] のようなコメントを書くと、ビューアのパラメーターパネルにスライダーが出ます。すぐ上の行のコメントがその説明になり、/* [サイズ] */ でグループを作れます。スライダーを動かすと、ソースの数字も一緒に変わります。",
      es: "Pon un comentario como // [20:5:120] después de una variable al principio del archivo y el panel de parámetros del visor mostrará un deslizador para ella; un comentario en la línea de encima se convierte en su etiqueta, y /* [Tamaño] */ abre un grupo. Mueve el deslizador y el número del código cambia con él.",
    },
    code: {
      en: `/* [Size] */
// Inner width
width = 40;   // [20:5:120]
// Inner depth
depth = 30;   // [20:5:120]
// Height
height = 20;  // [10:5:60]

/* [Walls] */
// Wall and floor thickness
wall = 2;     // [1:0.5:4]

difference() {
  cube([width + 2 * wall, depth + 2 * wall, height]);
  translate([wall, wall, wall]) cube([width, depth, height]);
}`,
      zh: `/* [尺寸] */
// 内宽
width = 40;   // [20:5:120]
// 内深
depth = 30;   // [20:5:120]
// 高度
height = 20;  // [10:5:60]

/* [壁厚] */
// 侧壁和底的厚度
wall = 2;     // [1:0.5:4]

difference() {
  cube([width + 2 * wall, depth + 2 * wall, height]);
  translate([wall, wall, wall]) cube([width, depth, height]);
}`,
      ko: `/* [크기] */
// 안쪽 너비
width = 40;   // [20:5:120]
// 안쪽 깊이
depth = 30;   // [20:5:120]
// 높이
height = 20;  // [10:5:60]

/* [벽] */
// 벽과 바닥 두께
wall = 2;     // [1:0.5:4]

difference() {
  cube([width + 2 * wall, depth + 2 * wall, height]);
  translate([wall, wall, wall]) cube([width, depth, height]);
}`,
      de: `/* [Größe] */
// Innenbreite
width = 40;   // [20:5:120]
// Innentiefe
depth = 30;   // [20:5:120]
// Höhe
height = 20;  // [10:5:60]

/* [Wände] */
// Wand- und Bodenstärke
wall = 2;     // [1:0.5:4]

difference() {
  cube([width + 2 * wall, depth + 2 * wall, height]);
  translate([wall, wall, wall]) cube([width, depth, height]);
}`,
      ja: `/* [サイズ] */
// 内側の幅
width = 40;   // [20:5:120]
// 内側の奥行き
depth = 30;   // [20:5:120]
// 高さ
height = 20;  // [10:5:60]

/* [壁] */
// 壁と底の厚さ
wall = 2;     // [1:0.5:4]

difference() {
  cube([width + 2 * wall, depth + 2 * wall, height]);
  translate([wall, wall, wall]) cube([width, depth, height]);
}`,
      es: `/* [Tamaño] */
// Ancho interior
width = 40;   // [20:5:120]
// Fondo interior
depth = 30;   // [20:5:120]
// Altura
height = 20;  // [10:5:60]

/* [Paredes] */
// Grosor de paredes y fondo
wall = 2;     // [1:0.5:4]

difference() {
  cube([width + 2 * wall, depth + 2 * wall, height]);
  translate([wall, wall, wall]) cube([width, depth, height]);
}`,
    },
  },
  {
    id: "text",
    syntax: "text()",
    text: {
      en: "Lettering. text() gives a 2D outline: linear_extrude it for raised letters, or subtract that from a part to engrave; halign and valign = \"center\" centre it on its position. The built-in fonts are the Liberation family; for other fonts and scripts, see the FAQ below.",
      zh: "写字。text() 出来的是 2D 轮廓，套上 linear_extrude 是凸字，再从零件里减掉就是刻字；halign、valign 设成 \"center\" 让文字以所在点为中心。内置字体是 Liberation，没有汉字；写中文要自带字体，见下方常见问题。",
      ko: "글자 넣기. text()는 2D 윤곽을 만듭니다. linear_extrude로 올리면 양각, 부품에서 빼면 음각이 됩니다. halign과 valign을 \"center\"로 하면 놓인 점을 중심으로 정렬됩니다. 내장 글꼴은 Liberation이라 한글이 없습니다. 한글을 쓰려면 글꼴 파일을 함께 넣어야 하며, 아래 자주 묻는 질문을 참고하세요.",
      de: "Beschriftung. text() liefert einen 2D-Umriss: mit linear_extrude erhabene Schrift, von einem Teil abgezogen eine Gravur; halign und valign = \"center\" zentrieren ihn auf seiner Position. Die eingebauten Schriften sind die Liberation-Familie; für andere Schriften siehe die Fragen unten.",
      ja: "文字入れ。text() は 2D の輪郭を作ります。linear_extrude で押し出せば浮き文字、部品から引けば彫り文字です。halign と valign を \"center\" にすると、置いた点を中心にそろえます。内蔵フォントは Liberation で、日本語の文字は入っていません。日本語を使うにはフォントファイルを一緒に入れる必要があります。下のよくある質問を見てください。",
      es: "Rotulado. text() da un contorno 2D: con linear_extrude, letras en relieve; restado de una pieza, grabado. halign y valign = \"center\" lo centran en su posición. Las fuentes incluidas son la familia Liberation; para otras fuentes, mira las preguntas frecuentes más abajo.",
    },
    code: {
      en: `difference() {
  cube([85, 20, 4]);
  translate([42.5, 10, 2])                   // the plate's centre, 2 mm deep into the top face
    linear_extrude(height = 3)
      text("OpenSCAD", size = 10, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
}`,
      zh: `difference() {
  cube([85, 20, 4]);
  translate([42.5, 10, 2])                   // 板子中心，从顶面往下刻 2 mm
    linear_extrude(height = 3)
      text("OpenSCAD", size = 10, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
}`,
      ko: `difference() {
  cube([85, 20, 4]);
  translate([42.5, 10, 2])                   // 판의 중심, 윗면에서 2 mm 깊이로 새김
    linear_extrude(height = 3)
      text("OpenSCAD", size = 10, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
}`,
      de: `difference() {
  cube([85, 20, 4]);
  translate([42.5, 10, 2])                   // Mitte der Platte, 2 mm tief in die Oberseite
    linear_extrude(height = 3)
      text("OpenSCAD", size = 10, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
}`,
      ja: `difference() {
  cube([85, 20, 4]);
  translate([42.5, 10, 2])                   // 板の中心。上面から 2 mm 彫る
    linear_extrude(height = 3)
      text("OpenSCAD", size = 10, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
}`,
      es: `difference() {
  cube([85, 20, 4]);
  translate([42.5, 10, 2])                   // el centro de la placa, 2 mm hacia dentro de la cara superior
    linear_extrude(height = 3)
      text("OpenSCAD", size = 10, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
}`,
    },
  },
];

/** The rows in one locale: `syntax` (code, the same in every language), `text`, and the example's `code`. */
export function cheatsheetRows(locale) {
  return ROWS.map((row) => {
    const lang = row.text[locale] ? locale : "en";
    return { id: row.id, syntax: row.syntax, text: row.text[lang], code: row.code[lang] };
  });
}

/** Every row in every language, for scripts/check-openscad-viewer-locales.mjs. */
export const CHEATSHEET_ROWS = ROWS;
