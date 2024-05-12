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
      { text: '玩法介绍', link: '/introduce/决斗场.md' },
      { text: '查看攻略', link: '/guide/accessories' },
      { text: '加入我们', link: '/join/club' },
    ],

    //左部侧边栏
    sidebar: {
      '/introduce/': [
        {
          text: '游戏玩法介绍',
          items: [
            { text: '决斗场', link: '/guide/club/组织购买' },
            { text: '小队突袭', link: '/guide/club/叛忍来袭' },
            { text: '组织', link: '/guide/club/追击晓组织' },
            { text: '任务集会所', link: '/guide/club/天地战场' },
            { text: '忍话剧', link: '/guide/club/要塞争夺战' },
            { text: '积分赛', link: '/guide/club/组织商店' },
            { text: '战区赛事', link: '/guide/club/组织争霸' },
            { text: '忍者大赛', link: '/guide/club/巅峰对决' },
            { text: '丰饶之间', link: '/guide/club/锦标赛' },
            { text: '忍者挑战', link: '/guide/club/锦标赛' },
            { text: '小队突袭', link: '/guide/club/锦标赛' },
            { text: '试炼之地', link: '/guide/club/锦标赛' },
            { text: '招募', link: '/guide/club/锦标赛' },
            { text: '活动', link: '/guide/club/锦标赛' },
            { text: '商店', link: '/guide/club/锦标赛' },
            { text: '奖励', link: '/guide/club/锦标赛' },
            { text: '忍法帖', link: '/guide/club/锦标赛' },
            { text: '探险', link: '/guide/club/锦标赛' },
            { text: '功能手册', link: '/guide/club/锦标赛' },
          ]
        },
        {
          text: '攒金币总结',
          items: [
            { text: '金币收集', link: '/guide/club/组织购买' },
          ]
        },
        {
          text: '组织玩法攻略',
          items: [
            { text: '组织购买', link: '/guide/club/组织购买' },
            { text: '叛忍来袭', link: '/guide/club/叛忍来袭' },
            { text: '追击晓组织', link: '/guide/club/追击晓组织' },
            { text: '天地战场', link: '/guide/club/天地战场' },
            { text: '要塞争夺战', link: '/guide/club/要塞争夺战' },
            { text: '组织商店', link: '/guide/club/组织商店' },
            { text: '组织争霸', link: '/guide/club/组织争霸' },
            { text: '巅峰对决', link: '/guide/club/巅峰对决' },
            { text: '锦标赛', link: '/guide/club/锦标赛' },

          ]
        },
        {
          text: '饰品攻略', link: '/guide/accessories'
        },
        {
          text: '忍具攻略', link: '/guide/accessories'
        },
        {
          text: '通灵攻略', link: '/guide/accessories'
        },
        {
          text: '决斗场攻略', link: '/guide/accessories'
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
