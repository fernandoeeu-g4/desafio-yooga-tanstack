import a from 'redaxios';
import { a as O } from '../nitro/nitro.mjs';
import { u } from './json-Bq9mxVgN.mjs';
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
import '@tanstack/react-router';
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

const d = O("/api/users")({ GET: async ({ request: o }) => {
  console.info("Fetching users... @", o.url);
  const s = (await a.get("https://jsonplaceholder.typicode.com/users")).data.slice(0, 10);
  return u(s.map((e) => ({ id: e.id, name: e.name, email: e.email })));
} });

export { d as APIRoute };
//# sourceMappingURL=users.mjs.map
