import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import packageJson from './package.json';

const { publicVars } = loadEnv({ prefixes: [process.env.ENV_PREFIX ?? 'FRONT_'] });

const publicUrl = process.env.PUBLIC_URL ?? packageJson.homepage ?? '/';
const publicPath = new URL(publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`, 'http://localhost').pathname;
const disableSourceMap = (process.env.DISABLE_SOURCE_MAP ?? 'false') === 'true' ? false : 'source-map';
const resolveModule = (module: string) => {
  try {
    require.resolve(module);
    return true;
  } catch {
    return false;
  }
};

console.log((process.env.DISABLE_SOURCE_MAP ?? 'false') === 'true');

export default defineConfig(({ env }) => {
  const isProduction = env === 'production';

  return {
    plugins: [
      pluginReact(),
      pluginSass(),
      !isProduction &&
        pluginEslint({
          enable: (process.env.DISABLE_ESLINT_PLUGIN ?? 'false') === 'true' || !resolveModule('eslint'),
        }),
    ].filter(Boolean),
    source: {
      entry: {
        index: 'src/main.ts',
      },
      define: publicVars,
    },
    output: {
      assetPrefix: publicPath,
      sourceMap: {
        js: isProduction ? disableSourceMap : 'cheap-module-source-map',
        css: (process.env.DISABLE_SOURCE_MAP ?? 'false') !== 'true',
      },
      distPath: {
        root: 'build',
      },
      copy: [
        {
          from: 'public',
          to: '.',
        },
      ],
    },
    server: {
      port: parseInt(process.env.PORT ?? '3000', 10),
      open: (process.env.BROWSER ?? 'false') === 'true',
    },
    html: {
      template: './index.html',
    },
  };
});
