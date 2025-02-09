import { j, u } from './index-DKKPUp6f.mjs';
import '@tanstack/react-router';
import '../nitro/nitro.mjs';
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
import 'react/jsx-runtime';
import '@tanstack/react-query';
import '@tanstack/react-router-with-query';
import '@tanstack/router-devtools';
import 'react';
import 'zod';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-select';
import 'lucide-react';
import 'react-dom/server';
import 'node:stream/web';

const r = 1e3, o = 4e3;
function i() {
  return new Promise((e) => {
    setTimeout(e, Math.floor(Math.random() * (o - r + 1)) + r);
  });
}
const n = j("app_api_stores_use-product_ts--fetchStore_createServerFn_handler", "/_server", (e) => s.__executeServer(e)), c = { id: "1", name: "Vila do A\xE7a\xED - Jardim da Penha", price: 100, image: "https://avatar.iran.liara.run/public/1", category: "A\xE7aiteria", distance: "6,3 km", deliveryTimeEstimate: "Hoje, 80-90 min", minPrice: "Min. R$ 10,00", status: "open" }, s = u({ method: "GET" }).validator((e) => e).handler(n, async ({ data: e }) => (await i(), console.info(`Fetching store with id ${e}...`), c));

export { n as fetchStore_createServerFn_handler };
//# sourceMappingURL=use-product-ChNU--N_.mjs.map
