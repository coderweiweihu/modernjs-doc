import docTools, { defineConfig } from '@modern-js/doc-tools';
import path from 'path';

export default defineConfig({
  doc: {
    root: path.join(__dirname, 'docs'),
  },
  plugins: [docTools()],
});