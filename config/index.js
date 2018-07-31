import { Platform } from 'react-native';

const config = {
  SERVER: 'https://loteriasamericanas.com/mobile-api-new',

  // ADMOB
  ADMOB: {
    REWARDED_MAX: 4,
  },

  SETTINGS: {
    REFRESH_INTERVAL: 18000,
    APP_NAME: 'app_americanas',
  },

  VIEW_OPTIONS: {
    THEME: 'blue1',
    INITIAL_MENU: {
      ID: 'companies',
      OPTIONS: {
        toggle: true,
        trigger: true,
      },
    },
    MENUS: {
      SHOW_COMPANIES: true,
      SHOW_POOLS: false,
      SHOW_STATS: false,
    },
    LAYOUTS: {
      LOGO_ASPECT_RATIO: 247 / 110,
      SHOW_ALL_GAMES_AT_COMPANY: true,
      BREED_CRUMB_COMPANY_DISTINCTION: true,
      MENU_PRIMARY_DISTINCTION: true,
    },
    NAVIGATIONS: {
      SHOW_TITLE: true,
    },
  },
  ENUMS: {
    SCREEN_TYPE: {
      HOME: 1,
      MENU: 2,
      COMPANY: 3,
      GAME: 4,
      STAT_PREVIOUS_YEARS: 5,
      STAT_HOT_NUMBERS: 6,
      STAT_COLD_NUMBERS: 7,
      STAT_FORECASTS: 8,
      STAT_CHECK_NUMBERS: 9,
    },
    MENU_TYPE: {
      PRIMARY: 1,
      COMPANY: 2,
      GAME: 3,
      STAT: 4,
    },
  },

  VARIABLES: {
    app: null,
  },
};

if (Platform.OS === 'android') {
  config.ADMOB.SECRETS = {
    BANNER: 'ca-app-pub-1196303242456869/9126587770',
    INTERSTITIAL: 'ca-app-pub-1196303242456869/8551872701',
  };
} else {
  config.ADMOB.SECRETS = {
    BANNER: 'ca-app-pub-1196303242456869/4620126274',
    INTERSTITIAL: 'ca-app-pub-1196303242456869/9800725790',
  };
}

export default config;
