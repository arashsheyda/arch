export default defineNuxtSchema({
  appConfig: {
    /**
     * Arch theme configuration.
     *
     * @studio-icon material-symbols:docs
     */
    arch: {
      /**
       * General Information
       * @studioIcon material-symbols:info-outline
       *
       */
      general: {
        $schema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              default: 'Arch',
              required: false,
              description: 'Title of the website',
            },
            description: {
              type: 'string',
              default: 'Nuxt Arch Template',
              description: 'Description of the website',
            },
            keywords: {
              type: 'string',
              default: 'nuxt arch template',
              description: 'Keywords of the website',
            },
            image: {
              type: 'string',
              default: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/cover.jpg',
              description: 'Image of the website',
            },
            locale: {
              type: 'string',
              default: 'en',
              description: 'Locale of the website',
            },
            favicon: {
              type: 'string',
              default: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/favicon.ico',
              description: 'Favicon of the website',
            },
            themeColor: {
              type: 'string',
              default: '#ffffff',
              description: 'Theme color of the website (for mobile)',
            },
            sponsor: {
              type: 'string',
              default: null,
              description: 'A link to your sponsorship page',
            },
          },
        },
      },

      /**
       * Navigation links
       * @studioIcon material-symbols:menu-outline
       *
       * Will be used in Banner component.
       */
      banner: {
        $schema: {
          type: 'object' | 'boolean',
          properties: {
            image: {
              type: 'string',
              default: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/images/banner.jpg',
              description: 'Image of the banner',
            },
            alt: {
              type: 'string',
              default: 'Arch Banner',
              description: 'Description of the banner',
            },
          },
        },
      },

      /**
       * Navigation links
       * @studioIcon material-symbols:menu-outline
       *
       * Will be used in Sidebar component.
       *
       */
      aside: {
        $schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              default: 'John Doe',
              description: 'Name of the person',
            },
            job: {
              type: 'string',
              default: 'Full Stack Developer',
              description: 'Job of the person',
            },
            image: {
              type: 'string',
              default: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/images/logo.jpg',
              description: 'Image of the person',
            },
            imageHover: {
              type: 'string',
              default: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/images/logo-hover.jpg',
              description: 'Image of the person when hovering',
            },
            email: {
              type: 'string',
              default: 'arashi.sheyda@gmail.com',
              description: 'Email of the person',
            },
            phone: {
              type: 'string',
              description: 'Phone of the person',
            },
            company: {
              type: 'string',
              description: 'Company of the person',
            },
            location: {
              type: 'string',
              description: 'Location of the person',
            },
          },
        },
      },

      /**
       * Navigation links
       * @studioIcon material-symbols:menu-outline
       *
       * Will be used in Footer component.
       */
      footer: {
        $schema: {
          type: 'object',
          properties: {
            copyright: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  default: 'Developer',
                  description: 'Name of author',
                },
                link: {
                  type: 'string',
                  default: '/',
                  description: 'link of author',
                },
              },
            },
            poweredBy: {
              type: 'boolean',
              default: true,
              description: 'Show powered by Arch & Nuxt',
            },
            links: {
              type: 'array',
              items: {
                type: 'object',
                required: ['title', 'url'],
                properties: {
                  title: {
                    type: 'string',
                    description: 'Title of the link',
                  },
                  url: {
                    type: 'string',
                    description: 'URL when clicking on the link',
                  },
                  icon: {
                    type: 'string',
                    description: 'check https://icones.js.org/ for icons',
                  },
                  target: {
                    type: 'string',
                    default: '_blank',
                    description: 'Target attribute of the link',
                  },
                },
              },
            },
          },
        },
      },

      /**
       * Social links
       *
       * Will be used in AppSocialIcons component.
       *
       * @studioIcon material-symbols:share-outline
       */
      socials: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['title', 'icon', 'url'],
            properties: {
              title: {
                type: 'string',
                description: 'Title of the social network',
              },
              icon: {
                type: 'string',
                description: 'check https://icones.js.org/ for icons',
              },
              url: {
                type: 'string',
                description: 'URL when clicking on the link',
              },
              color: {
                type: 'string',
                description: 'Color when hover on the link',
              },
              target: {
                type: 'string',
                default: '_blank',
                description: 'Target attribute of the link',
              },
            },
          },
        },
      },
    },
  },
})
