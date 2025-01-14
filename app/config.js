import {
  Explore,
  Intro,
  Policy,
  PolicyTopic0,
  PolicyTopic1,
  PolicyTopic2,
  PolicyTopic3,
  PolicyTopic4,
} from 'components/Icons';
import React from 'react';

// application routes and paths
export const ROUTES = {
  INTRO: 'stories',
  EXPLORE: 'explore',
  POLICY: 'policy',
};

export const PAGES = {
  about: {
    path: 'about',
    header: true,
  },
  privacy: {
    path: 'privacy',
    footer: true,
  },
};

export const POLICY_TOPIC_ICONS = {
  0: p => <PolicyTopic0 color={p.color || 'black'} {...p} />,
  1: p => <PolicyTopic1 color={p.color || 'black'} {...p} />,
  2: p => <PolicyTopic2 color={p.color || 'black'} {...p} />,
  3: p => <PolicyTopic3 color={p.color || 'black'} {...p} />,
  4: p => <PolicyTopic4 color={p.color || 'black'} {...p} />,
};

export const MODULES = {
  stories: {
    path: ROUTES.INTRO,
    icon: <Intro color="white" />,
    iconActive: <Intro color="black" />,
    iconS: <Intro color="white" size="26px" />,
    iconActiveS: <Intro color="black" size="26px" />,
  },
  policy: {
    path: ROUTES.POLICY,
    featuredLayer: 'policy-commitments',
    icon: <Policy color="white" />,
    iconActive: <Policy color="black" />,
    iconS: <Policy color="white" size="26px" />,
    iconActiveS: <Policy color="black" size="26px" />,
    layers: ['surface-concentration'],
  },
  explore: {
    path: ROUTES.EXPLORE,
    icon: <Explore color="white" />,
    iconActive: <Explore color="black" />,
    iconS: <Explore color="white" size="26px" />,
    iconActiveS: <Explore color="black" size="26px" />,
    layers: ['surface-concentration'],
  },
};

// data/config & content locations

// use local, relative resources for production and remote resources during development
export const RESOURCES = {
  // TODO: consider local resource for data
  DATA:
    process && process.env && process.env.NODE_ENV === 'production'
      ? './data-dev'
      : 'https://wwf-deutschland.github.io/marine-plastic-explorer-test/data-dev',
  // resources are generated by jekyll as a static site, path is determined by resource permalink
  CONTENT:
    process && process.env && process.env.NODE_ENV === 'production'
      ? './content'
      : 'https://wwf-deutschland.github.io/marine-plastic-explorer-test/content',
  IMAGES:
    process && process.env && process.env.NODE_ENV === 'production'
      ? './assets/uploads'
      : 'https://plasticnavigator.wwf.de/assets/uploads',
};

export const LAYER_CONTENT_PATH = 'layers';

export const CONFIG = {
  stories: 'stories.json',
  explore: 'explore.json',
  layers: 'layers.json',
  projects: {
    file: 'projects.csv',
    type: 'csv',
  },
};

export const POLICY_LAYER = 'policy-commitments';
export const POLICY_CATEGORY = 'policy';
export const PROJECT_CATEGORY = 'projects';
export const PROJECT_CONFIG = {
  id: 'projects',
  type: 'csv',
  source: 'data',
  file: 'layers/project_locations.csv',
  data: {
    'layer-id': 'project_id',
  },
  render: {
    type: 'marker',
  },
  key: {
    icon: {
      size: { x: '24', y: '24' },
      background: '#ffffff',
      // panda icon only
      datauri:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEIElEQVRoge1a3XEaMRDeZPKO84D0aFIBpAJwBSYVmBLowE4HTgUhFcSpwLgC4w7gUfcSqIDMwicjpF2dwIcznvE3c+NDP3f6tLufVjp/WK/X9Jbx8U2P/p1ABtaaM722OTROwFozttYsieivtWZtrblJGjWIRoPYWjMhoqukgui7c9VJiDRGwFozIKL7pGKLhXNVJylNn9Ejolsi6qPogYhGzlXzpDHQpAsNkpIdzjE4FYiZaTB4wv0s17dJAsukZIdVTT1jREStpHRbprrfUQTgLjHukpIt/hBRL+cGwDAp2UF63wYHEWBTWmtmRCT5cwcz7cH335yrhgWDJ8zyKindQu1fTMBaM4KPclBNhDofwBesOph1zSoJnKummISnpFK3LhGrUN1lTHtkTHvNf+O2QR1f45Ln5S5j2mfGtCfBMye59rUyaq1h3/zNvszuENWxOjziZ5FUlgLvnTtXzXJdPiUl+wNkafPuMk4abDXbQ1WKY1DqfnUxMIaM/YoDEUoUanaxvzeJEgLa4EKLPDhXiTqvSG5jUAnAB/3CMk0aEF0G94nMsTIhqbtn6T1VdqoSYBn0N/HsCrMauxeT/xlMQFeKISZlrZkia51IJPldUnkJAT9ISZfrcCvUS640CeLoSnHVgdK3loBHNylJHxj/Pk96RLmQtYYl9zJq0xcSt07oDTFyBNROnCEe0JZgxVFUxoQWSct0MnpK6rJBjsAzBJ+PFaeFdMLjIbhfIf3Y64Pfkqs9+zus1D2WQDjLcaYozfhNEGxD5EM+J9JW04mQwIVxULs45giEGEVKIKkC+z0ryhnPLm8hcSUS6wErhOr0w5NFLEjb02ICofa3JBkU0AWJPZdDGn6DaxgGKjLbz3w5V41pl8JIipQgRyA2+7WgEBK6weLl27MrXOPixPAxjBlYbEm7eJtHSqa5YDaZk1KDKQJLqosRWmMECzKBBWb32cJo00G7fvKkzPtyBCS0MBulmWcLgTrEgHkgdxwXWIVnyjoTQ40jdT9Qc0xyKFYg3sf9HfReWvAkXGDHliAXAyrrI9DCoL/AGocMnrTBU84CtLXCUjnqeE08OVep4pGzAJ1ok7I5rYhW6xzU2acGCGjHIDmMsV2U0ggJxxPAi6SEy2NWUy9hGvStw6pub5wlAOQks19TnyCXWgjIDp5KCGCpz83y8khXUjPMAC8nAAwzg+wd4M9xvxwWJUcrRQSQIQ4US8xAQCO4hyDRqyNQ5JrFqQRIdJALefPPvU/zpyVs5OvQQyDnXOgpPn/VkF3IDgWfMCjJWAg+Q+KTBnaPeE9MsPKgNNibJuC/stQlaF+xKQpzrRVc8VY7JJPQ+Jf6QhKbj36hO+bynRxO9q8G2LCMBSK1H+4Owav9r4TfKycVL8T7P3v8b7xtAkT0D07Q+SjGDmWxAAAAAElFTkSuQmCC',
    },
  },
  icon: {
    size: { x: '34', y: '47' },
    align: 'bottom',
    datauri: {
      default:
        'data:image/png;base64,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',
      active:
        'data:image/png;base64,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',
      'semi-active':
        'data:image/png;base64,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',
    },
  },
  tooltip: {
    supTitle: {
      propertyByLocale: {
        en: 'location_title_en',
        de: 'location_title_en',
      },
    },
    title: {
      propertyFromLayer: {
        propertyByLocale: {
          en: 'project_title_en',
          de: 'project_title_en',
        },
      },
    },
    more: 'true',
  },
};

export const MAX_LOAD_ATTEMPTS = 5;
export const MAX_NAV_ATTEMPTS = 100;
export const RETRY_LOAD_DELAY = 100;
export const RETRY_NAV_DELAY = 20;

// map config

export const MAPBOX = {
  TOKEN:
    'pk.eyJ1Ijoid3dmZGV1dHNjaGxhbmQiLCJhIjoiY2tlaXJyaDZoMGM1azJ4cGltZTFtdXlwcyJ9.uGjcVZhB69LLbtIWu73L0w',
  USER: 'wwfdeutschland',
  RASTER_URL_TEMPLATE:
    'https://api.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}',
  STYLE_URL_TEMPLATE:
    'https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}',
};

export const URL_SEARCH_SEPARATOR = '|';

export const MAP_OPTIONS = {
  CENTER: [20, 180],
  ZOOM: {
    INIT: 2,
    MIN: 1,
    MAX: 7,
  },
  BOUNDS: {
    N: 85,
    W: -270,
    S: -85,
    E: 540,
  },
};

export const LOCALE_TOGGLE = true;
