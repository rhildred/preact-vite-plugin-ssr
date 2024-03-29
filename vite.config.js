import preact from '@preact/preset-vite'
import ssr from 'vite-plugin-ssr/plugin'
import mdx from '@mdx-js/rollup';

const config = {
  plugins: [preact(), 
    mdx(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
    })],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  optimizeDeps: {
    include: ['preact/devtools', 'preact/debug', 'preact/jsx-dev-runtime', 'preact', 'preact/hooks']
  }
}

export default config
