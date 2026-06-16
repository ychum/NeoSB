const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2026-06-13', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到魔剑中文站2026！', url: 'https://www.shadowbane.online' },
    { title: '快来加入魔剑大家庭！！！', url: '/tag/最新动态' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '魔剑家园',
  HEO_HERO_TITLE_2: '奇幻体验',
  HEO_HERO_TITLE_3: 'shadowbane.online',
  HEO_HERO_TITLE_4: '新版上线',
  HEO_HERO_TITLE_5: '快来加入！',
  HEO_HERO_TITLE_LINK: 'https://www.shadowbane.online/article/zhaoxin',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '最新动态', url: '/tag/最新动态' },
  HEO_HERO_CATEGORY_2: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_3: { title: '热门文章', url: '/tag/热门文章' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片
  
  // 英雄区右侧推荐文章遮罩控制
  HEO_HERO_RECOMMEND_COVER_ENABLE: true, // 是否显示推荐文章遮罩图片，true显示遮罩需点击查看，false直接显示推荐文章

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '赶紧加入吧：',
    '❤️ 团结友爱大家庭',
    '💯 脚踏实地行动派'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://www.shadowbane.online/',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.shadowbane.online/',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Aelfborn',
      img_1: '/images/heo/Ael.webp',
      color_1: '#1f1f1f',
      title_2: 'Aracoix',
      img_2: '/images/heo/Ara.webp',
      color_2: '#1f1f1f'
    },
    {
      title_1: 'Centaur',
      img_1: '/images/heo/Cen.webp',
      color_1: '#1f1f1f',
      title_2: 'Dwarf',
      img_2: '/images/heo/Dwa.webp',
      color_2: '#1f1f1f'
    },
    {
      title_1: 'Elf',
      img_1: '/images/heo/Elf.webp',
      color_1: '#1f1f1f',
      title_2: 'Irekei',
      img_2: '/images/heo/Ire.webp',
      color_2: '#1f1f1f'
    },
    {
      title_1: 'Fighter',
      img_1: '/images/heo/Fight.webp',
      color_1: '#1f1f1f',
      title_2: 'Healer',
      img_2: '/images/heo/Heal.webp',
      color_2: '#1f1f1f'
    },
    {
      title_1: 'Halfgiant',
      img_1: '/images/heo/HGi.webp',
      color_1: '#1f1f1f',
      title_2: 'Human',
      img_2: '/images/heo/Hum.webp',
      color_2: '#1f1f1f'
    },
    {
      title_1: 'Mage',
      img_1: '/images/heo/Mage.webp',
      color_1: '#1f1f1f',
      title_2: 'Minotaur',
      img_2: '/images/heo/Min.webp',
      color_2: '#1f1f1f'
    },
    {
      title_1: 'Rogue',
      img_1: '/images/heo/Rogue.webp',
      color_1: '#1f1f1f',
      title_2: 'Shade',
      img_2: '/images/heo/Shade.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '随时交流沟通',
  HEO_SOCIAL_CARD_TITLE_2: 'YY频道：1508110360',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入微信群',
  HEO_SOCIAL_CARD_URL: 'https://qrcode.igamer.vip/wechatgrp',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
