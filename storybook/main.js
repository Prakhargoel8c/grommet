module.exports = {
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-toolbars',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-a11y',
  ],
  stories: [
    '../src/js/components/**/stories/typescript/*.tsx',
    '../src/js/components/**/stories/*.@(ts|tsx|js|jsx)',
    '../src/js/components/**/stories/CustomThemed/*.@(ts|tsx|js|jsx)',
    '../src/js/components/**/*stories.js',
    '../src/js/contexts/**/*stories.js',
    '../src/js/contexts/**/stories/typescript/*.tsx',
    '../src/js/contexts/**/stories/*.@(ts|tsx|js|jsx)',
    '../src/js/all/**/stories/*.@(ts|tsx|js|jsx)',
    '../src/js/all/stories/typescript/*.tsx',
  ],
  features: {
    postcss: false,
  },
  reactOptions: {
    strictMode: true,
  },
  staticDirs: ['./public'],
};
