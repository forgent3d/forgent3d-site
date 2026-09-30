// The mesh-STEP vs B-rep-STEP figure on /[locale]/openscad-to-step (and, as the same numbers, public/og/openscad-to-step-*.svg).
// One tube (outer r 2 : inner r 1) in an oblique view, drawn twice from the same numbers. The mesh
// panel draws exactly what OpenSCAD's STL of it holds at $fn = 32: 32 quads per wall and 64 triangles
// per annulus, 4 × 64 = 256 triangles — the count in the caption. The B-rep panel is the same outline
// as true ellipses: two planar rings and two cylinders.

const TUBE = { cx: 160, cy: 52, rx: 120, ry: 44, irx: 60, iry: 22, h: 132, fn: 32 };

const round1 = (v) => Math.round(v * 10) / 10;

/** Ring vertices; index i sits at angle 2πi/n, so 0..n/2 is the front (lower) half on screen. */
function ring(rx, ry, dy = 0) {
  return Array.from({ length: TUBE.fn }, (_, i) => {
    const a = (2 * Math.PI * i) / TUBE.fn;
    return [round1(TUBE.cx + rx * Math.cos(a)), round1(TUBE.cy + dy + ry * Math.sin(a))];
  });
}

const polyPath = (points) => `M${points.map((p) => p.join(",")).join("L")}Z`;

export function MeshTube({ label }) {
  const { fn, h } = TUBE;
  const half = fn / 2;
  const top = ring(TUBE.rx, TUBE.ry);
  const bottom = ring(TUBE.rx, TUBE.ry, h);
  const inner = ring(TUBE.irx, TUBE.iry);
  const front = top.slice(0, half + 1);
  const frontBottom = bottom.slice(0, half + 1);
  const line = (a, b, key) => <line key={key} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />;

  return (
    <svg viewBox="0 0 320 236" role="img" aria-label={label} className="h-auto w-full">
      <defs>
        <clipPath id="scad-mesh-hole">
          <path d={polyPath(inner)} />
        </clipPath>
      </defs>
      <path className="fill-muted" d={polyPath([...front, ...frontBottom.slice().reverse()])} />
      <g className="stroke-muted-foreground/45" strokeWidth="0.75">
        {front.map((p, i) => line(p, frontBottom[i], `v${i}`))}
        {front.slice(0, half).map((p, i) => line(p, frontBottom[i + 1], `d${i}`))}
      </g>
      <polyline className="fill-none stroke-muted-foreground/70" strokeWidth="1" points={frontBottom.map((p) => p.join(",")).join(" ")} />
      <path className="fill-foreground/10" d={polyPath(inner)} />
      <g className="stroke-muted-foreground/45" strokeWidth="0.75" clipPath="url(#scad-mesh-hole)">
        {inner.slice(half).map((p, i) => line(p, [p[0], p[1] + h], `w${i}`))}
      </g>
      <path className="fill-card stroke-muted-foreground/70" strokeWidth="1" fillRule="evenodd" d={`${polyPath(top)}${polyPath(inner)}`} />
      <g className="stroke-muted-foreground/45" strokeWidth="0.75">
        {top.map((p, i) => line(p, inner[i], `r${i}`))}
        {top.map((p, i) => line(p, inner[(i + 1) % fn], `t${i}`))}
      </g>
    </svg>
  );
}

export function BrepTube({ label }) {
  const { cx, cy, rx, ry, irx, iry, h } = TUBE;
  const ellipse = (erx, ery, y) => `M${cx + erx},${y}A${erx},${ery} 0 1 1 ${cx - erx},${y}A${erx},${ery} 0 1 1 ${cx + erx},${y}Z`;
  const side = `M${cx + rx},${cy}A${rx},${ry} 0 0 1 ${cx - rx},${cy}L${cx - rx},${cy + h}A${rx},${ry} 0 0 0 ${cx + rx},${cy + h}Z`;

  return (
    <svg viewBox="0 0 320 236" role="img" aria-label={label} className="h-auto w-full">
      <defs>
        <linearGradient id="scad-brep-side" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--color-brand)" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="var(--color-brand)" stopOpacity="0.06" />
          <stop offset="1" stopColor="var(--color-brand)" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="scad-brep-bore" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--color-brand)" stopOpacity="0.08" />
          <stop offset="1" stopColor="var(--color-brand)" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path d={side} fill="url(#scad-brep-side)" />
      <path className="fill-none stroke-brand" strokeWidth="1.5" d={`M${cx - rx},${cy}L${cx - rx},${cy + h}A${rx},${ry} 0 0 0 ${cx + rx},${cy + h}L${cx + rx},${cy}`} />
      <path d={ellipse(irx, iry, cy)} fill="url(#scad-brep-bore)" />
      <path className="fill-card stroke-brand" strokeWidth="1.5" fillRule="evenodd" d={`${ellipse(rx, ry, cy)}${ellipse(irx, iry, cy)}`} />
    </svg>
  );
}
