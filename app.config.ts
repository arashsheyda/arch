export default defineAppConfig({
  arch: {
    general: {
      locale: 'en',
      title: 'Arch',
      image: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/cover.jpg',
      description: 'Nuxt Arch Template',
      keywords: 'nuxt arch template, nuxt content',
      favicon: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/favicon.ico',
      themeColor: '#00cfff',
    },
    banner: {
      image: 'https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/images/banner.jpg',
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
      copyright: 'Arash Sheyda',
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
