export default defineAppConfig({
  arch: {
    general: {
      locale: 'en',
      title: 'Arch',
      image: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/cover.jpg',
      description: 'Arch is a Nuxt 3 template for creating your personal website less than a minute.',
      keywords: 'nuxt arch, nuxt content, nuxt layers',
      favicon: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/favicon.ico',
      themeColor: '#00cfff',
    },
    banner: {
      image: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/images/banner.jpg',
      alt: 'Arch Banner',
    },
    aside: {
      name: 'John Doe',
      job: 'Full Stack Developer',
      image: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/images/logo.jpg',
      imageHover: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/images/logo-hover.jpg',
      email: 'arashi.sheyda@gmail.com',
      company: '@',
      location: 'World',
    },
    footer: {
      copyright: {
        name: 'Developer',
        link: '/',
      },
      links: [],
      poweredBy: true,
    },
    socials: [
      {
        title: 'Github',
        icon: 'uil:github',
        url: 'https://github.com/arashsheyda/arch',
        color: '#000000',
        target: '_blank',
      },
    ],
  },
})
