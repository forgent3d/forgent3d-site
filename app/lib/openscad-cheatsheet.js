// The OpenSCAD cheat sheet on the viewer page (app/[locale]/openscad-viewer/page.js): the statements people use
// most, each with its syntax, how it works and where it trips people up, and a runnable example the row opens in
// the viewer (#code=, the same link format as the page's sample). It is the content a search for "openscad在线" /
// "openscad online" finds useful on landing: one click and an example is rendered, ready to change.
//
// Every example was rendered with the real OpenSCAD (cad-build rebuild, the bundled wasm build) before it went in:
// change one, render it again. No imports here, so a node script can load this file to do that.

const ROWS = [
  {
    id: "primitives",
    syntax: "cube · cylinder · sphere",
    text: {
      en: "Box, cylinder, sphere. A cube starts with one corner on the origin, a cylinder with the centre of its base, a sphere with its centre; center = true centres a cube or cylinder on the origin. A cylinder with d1 ≠ d2 is a cone; $fn is the number of segments in a circle.",
      zh: "长方体、圆柱、球。cube 默认一个角在原点，cylinder 底面圆心在原点，sphere 球心在原点；cube 和 cylinder 加 center = true 改成以原点为中心。cylinder 的 d1 ≠ d2 就是圆台，$fn 是圆的分段数。",
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
    },
  },
  {
    id: "transforms",
    syntax: "translate · rotate · mirror",
    text: {
      en: "Move, rotate (in degrees: about X, then Y, then Z), mirror. A transform goes in front of the object and the one nearest it acts first: translate(…) rotate(…) cube() rotates, then moves. mirror flips without copying — write the original again to keep both.",
      zh: "移动、旋转（单位是度，先绕 X、再绕 Y、再绕 Z）、镜像。变换写在物体前面，离物体近的先生效：translate(…) rotate(…) cube() 是先转再移。mirror 只翻转、不复制，要留原件就再写一遍。",
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
    },
  },
  {
    id: "difference",
    syntax: "difference() · union() · intersection()",
    text: {
      en: "Booleans. difference keeps the first object and subtracts everything after it: holes, slots, pockets. Let a cutter stick out 1 mm past both faces instead of ending flush, or the preview shows flickering leftovers and the render may complain. union joins; intersection keeps only the overlap.",
      zh: "布尔运算。difference 用第一个物体减去后面所有物体：打孔、开槽、挖腔都靠它。挖孔的物体两头各多伸出 1 mm，别和表面正好齐平，否则预览里会留下闪烁的残面，渲染也可能报错。union 合并，intersection 只留重叠的部分。",
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
    },
  },
  {
    id: "hull",
    syntax: "hull()",
    text: {
      en: "Wraps its children in one convex hull. Four cylinders make a plate with rounded corners; two make a slot. It only ever fills outwards — pair it with difference for anything concave.",
      zh: "把里面的物体包成一个凸壳。四个圆柱 hull 起来是圆角板，两个圆柱 hull 起来是腰形孔。它只会往外包，凹进去的形状要和 difference 配着用。",
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
    },
  },
  {
    id: "minkowski",
    syntax: "minkowski()",
    text: {
      en: "Sweeps the second object over the whole surface of the first: a box with a small sphere becomes a box with every edge rounded. The result grows by the sphere's diameter on every axis, so make the box that much smaller first.",
      zh: "让第二个物体沿着第一个物体的表面走一圈：方块配一个小球，就是所有边都倒了圆角的盒子。结果在每个方向都会长大一个球的直径，所以方块要先减掉这么多。",
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
    },
  },
  {
    id: "linear-extrude",
    syntax: "linear_extrude()",
    text: {
      en: "Pulls a 2D shape (square, circle, polygon, text) up along Z into a solid. twist turns it as it rises (in degrees); scale shrinks or grows the top. A circle with $fn = 6 is a hexagon.",
      zh: "把 2D 图形（square、circle、polygon、text）沿 Z 轴拉成实体。twist 让它边拉边转（单位是度），scale 让顶面按比例缩放。circle 配 $fn = 6 就是六边形。",
    },
    code: {
      en: `linear_extrude(height = 40, twist = 60, scale = 0.6)   // 60° of twist, the top at 60 % size
  circle(d = 30, $fn = 6);                             // six segments: a hexagon`,
      zh: `linear_extrude(height = 40, twist = 60, scale = 0.6)   // 拧 60°，顶面缩到 60 %
  circle(d = 30, $fn = 6);                             // 六段：六边形`,
    },
  },
  {
    id: "rotate-extrude",
    syntax: "rotate_extrude()",
    text: {
      en: "Spins a 2D cross-section around the Z axis: cups, flanges, pulleys. The cross-section is the outline of one half of the part cut in two, and all of it must lie right of the Y axis (x ≥ 0).",
      zh: "把 2D 截面绕 Z 轴转一圈，做杯子、法兰、皮带轮这类回转体。截面就是零件剖成两半后一半的轮廓，要整个在 Y 轴右边（x ≥ 0）。",
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
    },
  },
  {
    id: "for",
    syntax: "for",
    text: {
      en: "Repeats a shape: a bolt circle, a row of vents. A range [start : step : end] includes the end, so [0 : 5] is six values, 0 to 5. Inside a difference it cuts all the holes at once.",
      zh: "重复生成：一圈螺栓孔、一排散热孔。范围 [开始 : 步长 : 结束] 包含结束值，[0 : 5] 是 0 到 5 共 6 个数。放进 difference 里就是一次挖出所有孔。",
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
    },
  },
  {
    id: "module",
    syntax: "module",
    text: {
      en: "Wraps geometry into a part with parameters that you call like a function. Give the parameters defaults and pass only the ones you change.",
      zh: "把一段几何包成带参数的零件，像函数一样反复调用。参数可以给默认值，调用时只写要改的那几个。",
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
    },
  },
  {
    id: "customizer",
    syntax: "// [min : step : max]",
    text: {
      en: "Put a comment like // [20:5:120] after a variable at the top of the file and the viewer's parameter panel shows a slider for it; a comment on the line above becomes its label, and /* [Size] */ starts a group. Drag a slider and the number in the source changes with it.",
      zh: "文件开头的变量后面写 // [20:5:120] 这样的注释，预览器的参数面板就出现一个滑块；上一行的注释是它的说明，/* [尺寸] */ 给参数分组。拖滑块，源码里的数字跟着改。",
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
    },
  },
  {
    id: "text",
    syntax: "text()",
    text: {
      en: "Lettering. text() gives a 2D outline: linear_extrude it for raised letters, or subtract that from a part to engrave; halign and valign = \"center\" centre it on its position. The built-in fonts are the Liberation family; for other fonts and scripts, see the FAQ below.",
      zh: "写字。text() 出来的是 2D 轮廓，套上 linear_extrude 是凸字，再从零件里减掉就是刻字；halign、valign 设成 \"center\" 让文字以所在点为中心。内置字体是 Liberation，没有汉字；写中文要自带字体，见下方常见问题。",
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
    },
  },
];

/** The rows in one locale: `syntax` (code, the same in every language), `text`, and the example's `code`. */
export function cheatsheetRows(locale) {
  const lang = locale === "zh" ? "zh" : "en";
  return ROWS.map((row) => ({ id: row.id, syntax: row.syntax, text: row.text[lang], code: row.code[lang] }));
}
