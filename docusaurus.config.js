module.exports = {
  title: 'TRTL Apps',
  tagline: 'Powerup your app or game with TurtleCoin',
  url: 'https://zoidbergza.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'zoidbergZA',
  projectName: 'trtl-apps-docs',
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'TRTL Apps',
      logo: {
        alt: 'TurtleCoin Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/turtlecoin/trtl-apps',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Reference',
              href: 'https://trtlapps.com/openapi',
            },
            {
              label: 'SDKs',
              to: 'docs/apps/integrations',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/ubFVGH6',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/trtlapps',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/turtlecoin/trtl-apps',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TRTL Apps.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'overview',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
