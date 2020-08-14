/*
 * Common Messages
 *
 * This contains all the common text
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.common';

export default defineMessages({
  appTitle: {
    id: `${scope}.appTitle`,
    defaultMessage: 'Marine Plastic Explorer',
  },
  module_explore: {
    id: `${scope}.module_explore`,
    defaultMessage: 'Explore',
  },
  module_stories: {
    id: `${scope}.module_stories`,
    defaultMessage: 'Intro',
  },
  module_explore_metaTitle: {
    id: `${scope}.module_explore_metaTitle`,
    defaultMessage: 'Explore',
  },
  module_stories_metaTitle: {
    id: `${scope}.module_stories_metaTitle`,
    defaultMessage: 'Introduction',
  },
  page_about: {
    id: `${scope}.page_about`,
    defaultMessage: 'About',
  },
  page_glossary: {
    id: `${scope}.page_glossary`,
    defaultMessage: 'Glossary',
  },
  locations: {
    id: `${scope}.locations`,
    defaultMessage: 'Locations',
  },
  projectLocation: {
    id: `${scope}.projectLocation`,
    defaultMessage: 'Project location',
  },
  countries: {
    id: `${scope}.countries`,
    defaultMessage: 'Countries',
  },
});
