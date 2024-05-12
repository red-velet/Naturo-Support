import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一花一世界",
  description: "愿岁并榭，与友长兮",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    //上部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '查看攻略', link: '/guide/accessories' },
      { text: '加入我们', link: '/join/club' },
    ],

    //左部侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '饰品攻略',
          items: [
            { text: 'Markdown Examples', link: '/guide/accessories' },
          ]
        },
      ],
      '/join/': [
        {
          text: '加入我们', link: '/join/club'
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

  }
})
