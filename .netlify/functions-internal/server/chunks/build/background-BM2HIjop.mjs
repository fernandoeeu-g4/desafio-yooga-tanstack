import { jsxs, jsx } from 'react/jsx-runtime';
import I from 'colorthief';
import { useState, useCallback, useRef } from 'react';
import * as m from 'zod';

m.object({ dominantColor: m.string().regex(/^#([0-9A-Fa-f]{3}){1,2}$/), contrastColor: m.string().regex(/^#([0-9A-Fa-f]{3}){1,2}$/) });
const R = m.object({ image: m.instanceof(File) }), j = ({ children: a, variant: r = "primary", onClick: n }) => {
  let e = "px-4 py-2 rounded ";
  switch (r) {
    case "primary":
      e += "bg-blue-500 text-white hover:bg-blue-700";
      break;
    case "secondary":
      e += "bg-gray-200 text-gray-700 hover:bg-gray-300";
      break;
    case "outline":
      e += "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
      break;
  }
  return jsx("button", { className: e, onClick: n, children: a });
}, A = ({ onImageUpload: a }) => {
  const r = useCallback((n) => {
    var _a;
    const e = (_a = n.target.files) == null ? void 0 : _a[0];
    if (e) try {
      R.parse({ image: e }), a(e);
    } catch (l) {
      l instanceof m.ZodError ? (console.error("Erro de valida\xE7\xE3o:", l.errors), alert("Por favor, selecione um arquivo de imagem v\xE1lido.")) : (console.error("Erro ao processar o arquivo:", l), alert("Ocorreu um erro ao processar o arquivo."));
    }
  }, [a]);
  return jsxs("div", { children: [jsx("input", { type: "file", id: "image-upload", accept: "image/*", onChange: r, style: { display: "none" } }), jsx("label", { htmlFor: "image-upload", children: jsx(j, { variant: "outline", children: "Selecionar Imagem" }) })] });
}, L = ({ imageUrl: a, backgroundColor: r }) => jsx("div", { style: { backgroundColor: r, padding: "20px" }, children: jsx("img", { src: a, alt: "Imagem Analisada", style: { maxWidth: "100%", maxHeight: "400px" } }) }), E = () => {
  const [a, r] = useState(null), [n, e] = useState("#FFFFFF"), [l, s] = useState(false), [h, c] = useState(null), p = useRef(null), u = useCallback(async (i) => {
    s(true), c(null);
    try {
      const g = URL.createObjectURL(i), t = new Image();
      t.src = g, t.onload = async () => {
        p.current = t;
        const b = new I().getColor(t), F = C(b);
        r(F);
        const v = x(b);
        e(v), s(false);
      }, t.onerror = () => {
        c("Erro ao carregar a imagem."), s(false);
      };
    } catch {
      c("Erro ao analisar a imagem."), s(false);
    }
  }, []);
  function C(i) {
    return "#" + i.map((g) => {
      const t = g.toString(16);
      return t.length === 1 ? "0" + t : t;
    }).join("");
  }
  function x(i) {
    return (i[0] * 299 + i[1] * 587 + i[2] * 114) / 1e3 > 128 ? "#000000" : "#FFFFFF";
  }
  return { analyzeImage: u, dominantColor: a, contrastColor: n, isLoading: l, error: h };
}, H = function() {
  const [r, n] = useState(null), { analyzeImage: e, dominantColor: l, contrastColor: s, isLoading: h, error: c } = E(), p = useCallback((u) => {
    n(URL.createObjectURL(u)), e(u);
  }, [e]);
  return jsxs("div", { style: { padding: "20px" }, children: [jsx("h1", { children: "Analisador de Imagem" }), jsx(A, { onImageUpload: p }), h && jsx("p", { children: "Analisando..." }), c && jsx("p", { style: { color: "red" }, children: c }), r && l && s && jsx(L, { imageUrl: r, backgroundColor: s })] });
};

export { H as component };
//# sourceMappingURL=background-BM2HIjop.mjs.map
