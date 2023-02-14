export default defineNuxtConfigSchema({
  appConfig: {
    /**
     * Arch theme configuration.
     *
     * @studio-icon material-symbols:docs
     */
    arch: {
      /**
       * Website language, used for html lang attribute.
       *
       * @studio-icon material-symbols:language
       */
      locale: 'en',
      /**
       * Website base url, used for meta url.
       *
       * @studio-icon material-symbols:link
       *
       * @studio-placeholder https://example.com
       */
      baseUrl: '',
      /**
       * Website title, used as header default title and meta title.
       *
       * @studio-icon material-symbols:title
       */
      title: 'Nuxt Arch Template',
      /**
       * Website image, used for meta image.
       *
       * @studio-icon material-symbols:image
       */
      image: 'https://raw.githubusercontent.com/arashsheyda/arch/main/example/public/cover.jpg',
      /**
       * Website description, used for meta description.
       *
       * @studio-icon material-symbols:description
       */
      description: 'Nuxt Arch Template',
      /**
       * Website keywords, used for meta keywords.
       *
       * @studio-icon material-symbols:label
       */
      keywords: 'nuxt arch template',
      /**
       * Additonal info used for sidebar.
       *
       * @studio-icon material-symbols:info
       */
      /**
       * Website favicon, used for meta favicon.
       *
       * @studio-icon material-symbols:link
       */
      favicon: 'https://raw.githubusercontent.com/arashsheyda/arch/main/example/public/favicon.png',
      /**
       * website theme color, used for meta theme color.
       *
       * @studio-icon material-symbols:palette
       */
      themeColor: '#ffffff',
      info: {
        image: 'https://raw.githubusercontent.com/arashsheyda/arch/main/example/public/assets/images/logo.png',
        hoverImage: '',
        name: '',
        job: '',
        email: '',
        phone: '',
        company: '',
        location: ''
      },
      layout: {},
      /**
       * Website Banner Configuration.
       */
      banner: {
        /**
         * Banner image.
         *
         * @studio-icon material-symbols:image
         */
        image: 'https://raw.githubusercontent.com/arashsheyda/arch/main/example/public/assets/images/banner.png'
      },
      navigation: {
        exclude: []
      },
      sidebar: {},
      footer: {
        copyright: 'Arash Sheyda',
        links: {
          $schema: {
            type: 'array',
            items: {
              type: 'object',
              required: ['title', 'url'],
              properties: {
                title: {
                  type: 'string',
                  description: 'Title of the link'
                },
                url: {
                  type: 'string',
                  description: 'URL when clicking on the link'
                }
              }
            }
          }
        }
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
            required: ['name', 'icon', 'url'],
            properties: {
              name: {
                type: 'string',
                description: 'Name of the social network'
              },
              icon: {
                type: 'string',
                description: 'check https://icones.js.org/ for icons'
              },
              url: {
                type: 'string',
                description: 'URL when clicking on the link'
              },
              color: {
                type: 'string',
                description: 'Color when hover on the link'
              },
              target: {
                type: 'string',
                default: '_blank',
                description: 'Target attribute of the link'
              }
            }
          }
        }
      }
    }
  }
})
