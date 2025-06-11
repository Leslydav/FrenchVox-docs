// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FrenchVox Docs',
  tagline: 'Documentation and tutorials',
  favicon: 'img/fav.svg',

  // Set the production url of your site here
  url: 'https://leslydav.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/FrenchVox-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Leslydav', // Usually your GitHub org/user name.
  projectName: 'FrenchVox-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-image-zoom'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      zoom: {
        selector: '.zoomable',
        config: {
          background: 'rgba(0, 0, 0, 0.5)',
        },
      },
      navbar: {
        title: 'FrenchVox Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/fav.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docusaurusSidebar',
            position: 'left',
            label: 'Dicosaurus Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'templateSidebar',
            position: 'left',
            label: 'Bubble.io Templates Docs',
          },
         // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://frenchvox.fr/',
            label: 'FrenchVox',
            position: 'right',
          },
        ],
      },
      footer: {
        //style: 'dark',
    
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Templates',
                to: 'docs/intro-smart-reception',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'www.linkedin.com/in/lesly-davilmar-frenchvox-07372836a',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCLHTPzy5loGRhBkXGq0eSAA',
              },
              {
                label: 'X',
                href: 'https://x.com/LeslyAi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Leslydav/FrenchVox-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FrenchVox Docs, Inc. Built with Docusaurus on React.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
