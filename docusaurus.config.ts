import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Scaling Search and Retrieval for Contextual AI',
  tagline: 'From Data Structures to Distributed Systems',
  favicon: 'img/lucenia-logo-small.png',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'vector search, hybrid search, RAG, retrieval-augmented generation, contextual AI, information retrieval, inverted index, dense embeddings, search infrastructure, distributed search, search engine architecture, AI infrastructure, multimodal retrieval, HNSW, OpenSearch, Elasticsearch, Lucene, scalable search, LLM context, enterprise AI search',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Nicholas Knize',
      },
    },
  ],

  future: {
    v4: true,
  },

  // Custom domain
  url: 'https://scalingsearch.ai',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'nknize',
  projectName: 'scalingsearch',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/nknize/scalingsearch-examples/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/nknize/scalingsearch-examples/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarShortcutHint: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/book-cover.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Scaling Search & Retrieval',
      logo: {
        alt: 'Lucenia Logo',
        src: 'img/lucenia-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Examples',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://lucenia.io',
          label: 'Lucenia',
          position: 'right',
        },
        {
          href: 'https://github.com/nknize/scalingsearch-examples',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {
              label: 'Code Examples',
              to: '/docs/intro',
            },
            {
              label: 'Become a Reviewer',
              to: '/#reviewer-signup',
            },
          ],
        },
        {
          title: 'Lucenia',
          items: [
            {
              label: 'Lucenia Platform',
              href: 'https://lucenia.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lucenia',
            },
          ],
        },
        {
          title: 'O\'Reilly Media',
          items: [
            {
              label: 'O\'Reilly Books',
              href: 'https://www.oreilly.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nicholas Knize, PhD`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
