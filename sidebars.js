module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'overview'
    },
    {
      type: 'category',
      label: 'Service hosting',
      items: ['service/setup', 'service/admin'],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Apps',
      items: [
        'apps/overview',
        {
          type: 'link',
          label: 'API reference',
          href: 'http://trtlapps.com/openapi/'
        },
        {
          type: 'doc',
          id: 'apps/integrations'
        },
        {
          type: 'doc',
          id: 'apps/webhooks'
        }
      ],
      collapsed: false
    },
    {
      type: 'doc',
      id: 'development'
    }
  ]
};
