const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'google',
      key: '*',
      url: 'https://google.com',
      search: '/search?q={}'
    },
    {
      category: 'General',
      name: 'Instapaper',
      key: 'i',
      url: 'https://www.instapaper.com/u',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Innoreader',
      key: 'in',
      url: 'https://www.innoreader.com',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Google Calendar',
      key: 'c',
      url: 'https://calendar.google.com',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Drive',
      key: 'd',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: true,
    },
    {
      category: 'Learn',
      name: 'Motamem',
      key: 'mo',
      url: 'https://motamem.org',
      quickLaunch: true,
    },
    {
      category: 'Learn',
      name: 'Shabanali Blog',
      key: 'mr',
      url: 'https://mrshabanali.com',
      quickLaunch: true,
    }, 
    
    {
      category: 'Tools',
      name: 'Accuweather',
      key: 'w',
      url: 'https://www.accuweather.com/en/ir/yazd/211668/weather-forecast/211668',
      quickLaunch: true,
    },
    {
      category: 'Tools',
      name: 'Windy',
      key: 'wi',
      url: 'https://www.windy.com/-Temperature-temp?temp,32.073,55.140,7,m:eyoahJk',
      quickLaunch: true,
    },
    {
      category: 'Tools',
      name: 'Iran Calendar',
      key: 'ic',
      url: 'https://new.time.ir',
      quickLaunch: true,
    }
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 5,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: true,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
