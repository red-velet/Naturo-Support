import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Naturo",
  description: "愿岁并榭，与友长兮",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    //上部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '玩法介绍', link: '/introduce/决斗场.md' },
      { text: '查看攻略', link: '/guide/accessories' },
      { text: '最新活动', link: '/news/木叶快报' },
      { text: '加入我们', link: '/join/club' },
    ],

    //左部侧边栏
    sidebar: {
      '/introduce/': [
        {
          text: '游戏玩法介绍',
          items: [
            { text: '决斗场', link: '/决斗场' },
            { text: '小队突袭', link: '/小队突袭' },
            { text: '组织', link: '/组织' },
            { text: '任务集会所', link: '/任务集会所' },
            { text: '忍话剧', link: '/忍话剧' },
            { text: '积分赛', link: '积分赛' },
            { text: '战区赛事', link: '/战区赛事' },
            { text: '忍者大赛', link: '/忍者大赛' },
            { text: '丰饶之间', link: '/丰饶之间' },
            { text: '忍者挑战', link: '/忍者挑战' },
            { text: '小队突袭', link: '/小队突袭' },
            { text: '试炼之地', link: '/试炼之地' },
            { text: '招募', link: '/招募' },
            { text: '活动', link: '/活动' },
            { text: '商店', link: '/商店' },
            { text: '奖励', link: '/奖励' },
            { text: '忍法帖', link: '/忍法帖' },
            { text: '探险', link: '/探险' },
            { text: '功能手册', link: '/功能手册' },
          ]
        },
      ],
      '/guide/': [
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
          text: '饰品攻略',
          items: [
            { text: '饰品攻略', link: '/guide/饰品攻略' },
          ]
        },
        {
          text: '忍具攻略',
          items: [
            { text: '忍具攻略', link: '/guide/忍具攻略' },
          ]
        },
        {
          text: '通灵攻略', link: '/guide/accessories'
        },
        {
          text: '决斗场攻略', link: '/guide/accessories'
        },
      ],
      '/news/': [
        {
          text: '游戏玩法介绍',
          items: [
            { text: '木叶快报', link: '/news/木叶快报' },
            { text: '活动攻略', link: '/news/本周活动解析' },
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
