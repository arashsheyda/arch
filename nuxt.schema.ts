export default defineNuxtSchema({
  // TODO: fixed schema
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

          },
        },
      },

      banner: {
        $schema: {
          type: 'object',
          properties: {

          },
        },
      },

      aside: {
        $schema: {
          type: 'object',
          properties: {

          },
        },
      },

      footer: {
        $schema: {
          type: 'object',
          properties: {

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
