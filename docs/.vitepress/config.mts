import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Jim\'s blog', // 博客的标题
  description: 'Jim 的个人博客', // 博客的介绍
  base: '/me/', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '更多', link: '/markdown-main' }
    ],

    sidebar: [
      {
        text: '更多',
        items: [
          { text: '我在北京搬砖的这7年', link: '/markdown-main' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dividez' }
    ]
  }
})
