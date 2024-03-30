import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CVCpsIZ2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_2wwi7lxm.mjs');
const _page1 = () => import('./chunks/404_DCkhH8_4.mjs');
const _page2 = () => import('./chunks/about_NGbKHtSD.mjs');
const _page3 = () => import('./chunks/mi-primer-articulo_5Zwb3FTF.mjs');
const _page4 = () => import('./chunks/example_Be9Vy52a.mjs');
const _page5 = () => import('./chunks/_id__D5pkSH2d.mjs');
const _page6 = () => import('./chunks/index_BWf4XD2P.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.12_typescript@5.4.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/mi-primer-articulo.md", _page3],
    ["src/pages/example.html", _page4],
    ["src/pages/launch/[id].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "71e3d11f-efc8-4411-a667-ac7626100d93"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
