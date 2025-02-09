import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { l as ln, O as Or, d as dn, P as Pr, I as Ir, k as k$1 } from '../nitro/nitro.mjs';
import { getRouteApi, Await } from '@tanstack/react-router';
import { Gift, ArrowLeft, ArrowRight } from 'lucide-react';
import * as n from 'react';
import { Suspense } from 'react';
import * as R from '@radix-ui/react-separator';
import Q from 'embla-carousel-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:async_hooks';
import '@tanstack/react-query';
import '@tanstack/react-router-with-query';
import '@tanstack/router-devtools';
import 'zod';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-select';
import 'react-dom/server';
import 'node:stream/web';

const P = { open: { label: "Aberto", color: "text-success" }, closed: { label: "Fechado", color: "text-error" } }, S = [{ label: "Pronta Entrega", value: "fast-delivery" }, { label: "Retirada", value: "pickup" }, { label: "Entrega agendada", value: "schedule" }];
function X({ status: r }) {
  return jsx("span", { className: `${P[r].color} py-1 rounded-full text-sm font-semibold`, children: P[r].label });
}
const Y = ({ store: r }) => {
  const { image: t, name: a, category: o, distance: c, minPrice: u, deliveryTimeEstimate: m, status: p } = r;
  return jsxs("div", { className: "flex flex-col gap-4", children: [jsxs("div", { className: "flex gap-4", children: [jsx("img", { src: t, alt: a, width: 60, height: 60, className: "h-15 min-h-15 w-15 min-w-15 rounded-lg" }), jsxs("div", { className: "flex flex-col gap-2", children: [jsx("h1", { className: "text-lg font-bold", children: a }), jsxs("div", { className: "text-secondary flex items-center gap-1 text-sm", children: [jsx("span", { children: o }), jsx("span", { children: "\u2022" }), jsx("span", { children: c }), jsx("span", { children: "\u2022" }), jsx("span", { children: u })] })] })] }), jsxs("div", { className: "flex items-center gap-4", children: [jsxs(ln, { defaultValue: S[0].value, children: [jsx(Or, { className: "w-max", children: jsx(dn, { placeholder: "Theme" }) }), jsx(Pr, { children: S.map((h) => jsx(Ir, { value: h.value, children: h.label }, h.value)) })] }), jsxs("div", { className: "flex items-center gap-1  text-sm text-secondary ", children: [jsx("span", { children: m }), jsx("span", { children: "\u2022" }), jsx(X, { status: p })] })] }), jsxs("div", { className: "flex py-2 items-center gap-2 rounded-full bg-sky-100 text-sky-800 justify-center", children: [jsx(Gift, { className: "size-4" }), jsx("span", { className: "font-semibold text-sm", children: "Fidelidade: pe\xE7a 5 vezes, ganhe R$ 30" })] })] });
}, g = n.forwardRef(({ className: r, orientation: t = "horizontal", decorative: a = true, ...o }, c) => jsx(R.Root, { ref: c, decorative: a, orientation: t, className: k$1("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", r), ...o }));
g.displayName = R.Root.displayName;
const Z = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3", lg: "h-11 rounded-md px-8", icon: "h-10 w-10" } }, defaultVariants: { variant: "default", size: "default" } }), y = n.forwardRef(({ className: r, variant: t, size: a, asChild: o = false, ...c }, u) => jsx(o ? Slot : "button", { className: k$1(Z({ variant: t, size: a, className: r })), ref: u, ...c }));
y.displayName = "Button";
const k = n.createContext(null);
function v() {
  const r = n.useContext(k);
  if (!r) throw new Error("useCarousel must be used within a <Carousel />");
  return r;
}
const D = n.forwardRef(({ orientation: r = "horizontal", opts: t, setApi: a, plugins: o, className: c, children: u, ...m }, p) => {
  const [h, d] = Q({ ...t, axis: r === "horizontal" ? "x" : "y" }, o), [E, j] = n.useState(false), [A, F] = n.useState(false), x = n.useCallback((f) => {
    f && (j(f.canScrollPrev()), F(f.canScrollNext()));
  }, []), N = n.useCallback(() => {
    d == null ? void 0 : d.scrollPrev();
  }, [d]), b = n.useCallback(() => {
    d == null ? void 0 : d.scrollNext();
  }, [d]), B = n.useCallback((f) => {
    f.key === "ArrowLeft" ? (f.preventDefault(), N()) : f.key === "ArrowRight" && (f.preventDefault(), b());
  }, [N, b]);
  return n.useEffect(() => {
    !d || !a || a(d);
  }, [d, a]), n.useEffect(() => {
    if (d) return x(d), d.on("reInit", x), d.on("select", x), () => {
      d == null ? void 0 : d.off("select", x);
    };
  }, [d, x]), jsx(k.Provider, { value: { carouselRef: h, api: d, opts: t, orientation: r || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"), scrollPrev: N, scrollNext: b, canScrollPrev: E, canScrollNext: A }, children: jsx("div", { ref: p, onKeyDownCapture: B, className: k$1("relative", c), role: "region", "aria-roledescription": "carousel", ...m, children: u }) });
});
D.displayName = "Carousel";
const I = n.forwardRef(({ className: r, ...t }, a) => {
  const { carouselRef: o, orientation: c } = v();
  return jsx("div", { ref: o, className: "overflow-hidden", children: jsx("div", { ref: a, className: k$1("flex", c === "horizontal" ? "-ml-4" : "-mt-4 flex-col", r), ...t }) });
});
I.displayName = "CarouselContent";
const z = n.forwardRef(({ className: r, ...t }, a) => {
  const { orientation: o } = v();
  return jsx("div", { ref: a, role: "group", "aria-roledescription": "slide", className: k$1("min-w-0 shrink-0 grow-0 basis-full", o === "horizontal" ? "pl-4" : "pt-4", r), ...t });
});
z.displayName = "CarouselItem";
const ee = n.forwardRef(({ className: r, variant: t = "outline", size: a = "icon", ...o }, c) => {
  const { orientation: u, scrollPrev: m, canScrollPrev: p } = v();
  return jsxs(y, { ref: c, variant: t, size: a, className: k$1("absolute  h-8 w-8 rounded-full", u === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", r), disabled: !p, onClick: m, ...o, children: [jsx(ArrowLeft, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Previous slide" })] });
});
ee.displayName = "CarouselPrevious";
const re = n.forwardRef(({ className: r, variant: t = "outline", size: a = "icon", ...o }, c) => {
  const { orientation: u, scrollNext: m, canScrollNext: p } = v();
  return jsxs(y, { ref: c, variant: t, size: a, className: k$1("absolute h-8 w-8 rounded-full", u === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", r), disabled: !p, onClick: m, ...o, children: [jsx(ArrowRight, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Next slide" })] });
});
re.displayName = "CarouselNext";
const T = n.forwardRef(({ className: r, ...t }, a) => jsx("div", { ref: a, className: k$1("rounded-lg border bg-card text-card-foreground shadow-xs", r), ...t }));
T.displayName = "Card";
const te = n.forwardRef(({ className: r, ...t }, a) => jsx("div", { ref: a, className: k$1("flex flex-col space-y-1.5 p-6", r), ...t }));
te.displayName = "CardHeader";
const ae = n.forwardRef(({ className: r, ...t }, a) => jsx("div", { ref: a, className: k$1("text-2xl font-semibold leading-none tracking-tight", r), ...t }));
ae.displayName = "CardTitle";
const le = n.forwardRef(({ className: r, ...t }, a) => jsx("div", { ref: a, className: k$1("text-sm text-muted-foreground", r), ...t }));
le.displayName = "CardDescription";
const L = n.forwardRef(({ className: r, ...t }, a) => jsx("div", { ref: a, className: k$1("p-6 pt-0", r), ...t }));
L.displayName = "CardContent";
const oe = n.forwardRef(({ className: r, ...t }, a) => jsx("div", { ref: a, className: k$1("flex items-center p-6 pt-0", r), ...t }));
oe.displayName = "CardFooter";
function ne({ image: r, className: t }) {
  return jsx("img", { src: r, alt: "Product", className: k$1("aspect-[7/5] object-cover rounded-xl", t) });
}
function se({ children: r, className: t }) {
  return jsx("span", { className: k$1("text-secondary font-semibold text-xs text-wrap", t), children: r });
}
function ie({ children: r, className: t }) {
  return jsx(L, { className: k$1("flex gap-4 p-0", t), children: r });
}
function l({ children: r, className: t }) {
  return jsx(T, { className: k$1(" border-none shadow-none", t), children: r });
}
function ce({ children: r, className: t }) {
  return jsx("div", { className: k$1("flex items-center gap-1 text-primary font-semibold text-sm", t), children: r });
}
function de({ children: r, className: t }) {
  return jsx("div", { className: k$1("flex flex-1 flex-col gap-2 w-full", t), children: r });
}
function ue({ children: r, className: t }) {
  return jsx("h3", { className: k$1("text-primary text-xs font-semibold", t), children: r });
}
function me({ children: r, className: t }) {
  return jsx("span", { className: k$1("text-tertiary text-[11px] line-through", t), children: r });
}
function fe({ children: r, className: t }) {
  return jsx("span", { className: k$1("text-primary text-xs font-semibold", t), children: r });
}
function pe({ children: r, className: t }) {
  return jsx("span", { className: k$1(" text-xs rounded-full px-1.5 py-1 text-blue-primary bg-blue-secondary", t), children: r });
}
l.Image = ne;
l.Description = se;
l.Content = ie;
l.Pricing = ce;
l.DiscountedPrice = me;
l.Price = fe;
l.ProductInfo = de;
l.Name = ue;
l.DiscountTag = pe;
const he = ({ product: r }) => {
  const { name: t, discountedPriceLabel: a, priceLabel: o, discountTagLabel: c, image: u } = r;
  return jsxs(l, { className: "rounded-lg overflow-hidden flex flex-col gap-2", children: [jsx(l.Image, { image: u }), jsxs(l.ProductInfo, { children: [jsx(l.Name, { children: t }), jsxs(l.Pricing, { children: [jsx(l.Price, { children: a }), jsx(l.DiscountedPrice, { children: o }), jsx(l.DiscountTag, { children: c })] })] })] });
}, xe = ({ productsInSale: r }) => jsxs("section", { className: " flex flex-col gap-3", children: [jsx("h2", { className: "text-xl font-bold", children: "Produtos em oferta \u{1F499}" }), jsx(D, { children: jsx(I, { children: r.map((t, a) => jsxs(z, { className: "basis-1/2 flex flex-col gap-3", children: [jsx(he, { product: t }), a > r.length - 1 ? jsx(g, {}) : null] }, t.id)) }) })] });
function ge({ product: r }) {
  const { name: t, priceLabel: a, description: o, discountedPriceLabel: c, image: u, discountTagLabel: m } = r;
  return jsxs(l.Content, { className: "grid grid-cols-[4fr_7fr] gap-4 items-start", children: [jsx("div", { className: "relative w-full h-full flex-shrink-0 rounded-lg overflow-hidden", children: jsx(l.Image, { image: u }) }), jsxs(l.ProductInfo, { children: [jsx(l.Name, { children: t }), jsx(l.Description, { children: o }), jsxs(l.Pricing, { children: [jsx(l.Price, { children: c }), jsx(l.DiscountedPrice, { children: a }), jsx(l.DiscountTag, { children: m })] })] })] });
}
function ve({ bestSellersProducts: r }) {
  return jsxs("div", { className: "flex flex-col gap-3", children: [jsx("h2", { className: "text-xl font-bold", children: "Melhores da casa" }), jsx("div", { className: "flex gap-4 flex-col", children: r.map((t, a) => jsxs("div", { className: "flex flex-col gap-2", children: [jsx(ge, { product: t }, t.id), a < r.length - 1 ? jsx(g, {}) : null] })) })] });
}
const Ne = getRouteApi("/stores/$storeId");
function be() {
  const { store: r, productsInSale: t, bestSellers: a } = Ne.useLoaderData();
  return r ? jsx("div", { className: "h-full bg-white rounded-t-[40px]", children: jsxs("div", { className: "p-4 flex flex-col gap-4", children: [jsx(Y, { store: r }), jsx(g, {}), jsx(Suspense, { children: jsx(Await, { promise: t, children: (o) => jsxs(Fragment, { children: [jsx(xe, { productsInSale: o }), jsx(g, {})] }) }) }), jsx(Suspense, { children: jsx(Await, { promise: a, children: (o) => jsx(ve, { bestSellersProducts: o }) }) })] }) }) : jsx("div", { children: "Loading..." });
}
const He = () => jsx("div", { className: " bg-red-200 pt-[30%]", children: jsx(be, {}) });

export { He as component };
//# sourceMappingURL=route-BjesqUPL.mjs.map
