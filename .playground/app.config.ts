export default defineAppConfig({
  arch: {
    baseUrl: 'http://localhost:3000',
    title: 'Arash Sheyda',
    image: '/public/cover.jpg',
    description: 'Nuxt Arch Template',
    keywords: 'arch, nuxt, arash sheyda',
    favicon: '/favicon.ico',
    themeColor: '#015eea',
    navigation: {
      exclude: ['/debug']
    },
    layout: {},
    banner: {
      image: '/public/images/banner.jpg'
    },
    info: {
      image: '/public/images/logo.jpg',
      hoverImage: '/public/images/logo-hover.jpg',
      name: 'Arash Sheyda',
      job: 'Full Stack Developer',
      email: 'info@arashshyeda.com',
      phone: '+1 (732) 807-5358',
      company: '',
      location: 'Alberta, CA',
    },
    socials: [
      {
        name: 'Github',
        icon: 'uil:github',
        url: 'https://github.com/arashsheyda/arch',
        color: '#000000',
        target: '_blank'
      },
      {
        name: 'Twitter',
        icon: 'uil:twitter',
        url: 'https://twitter.com/arash_sheyda',
        color: '#1da1f2',
        target: '_blank'
      }
    ]
  }
})
