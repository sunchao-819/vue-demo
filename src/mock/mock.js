import Mock from 'mockjs'
Mock.mock(/getNewsList/,{
  'list': [
    {
      url: 'xxxxxx',
      title: 'title1'
    },
    {
      url: 'xxxxxx',
      title: 'title2'
    },
    {
      url: 'xxxxxx',
      title: 'title3'
    }
  ]
})
