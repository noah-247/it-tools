import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

import { presetScrollbar } from 'unocss-preset-scrollbar';

export default defineConfig({
  presets: [presetUno(), presetAttributify({ ignoreAttributes: ['size'] }), presetTypography(), presetScrollbar()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: '#a78bfa',
      void: {
        bg: '#03050c',
        ink: '#f5f7ff',
        muted: 'rgba(245, 247, 255, 0.68)',
        accent: '#a78bfa',
        line: '#252338',
      },
    },
  },
  shortcuts: {
    'pretty-scrollbar': 'scrollbar scrollbar-rounded scrollbar-thumb-color-gray-300 scrollbar-track-color-gray-100 dark:scrollbar-thumb-color-#252338 dark:scrollbar-track-color-#0b0e1a',
    'divider': 'h-1px bg-current op-10',
    'bg-surface': 'bg-#ffffff dark:bg-#0b0e1a',
    'bg-background': 'bg-#f1f5f9 dark:bg-#03050c',
  },
});
