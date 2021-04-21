import React from 'react';
import PropTypes from 'prop-types';

import { sankeyLinkHorizontal } from 'd3-sankey';

import { CODE_OFFSHORE } from 'config';

const getOpacity = link => {
  if (link.type === 'active') return '0.75';
  if (link.type === CODE_OFFSHORE) return '0.25';
  return '0.5';
};

const FlowLink = ({ link, color }) => (
  <path
    d={sankeyLinkHorizontal()(link)}
    style={{
      fill: 'none',
      strokeOpacity: getOpacity(link),
      stroke: color,
      strokeWidth: Math.max(1, link.width),
    }}
  />
);

FlowLink.propTypes = {
  link: PropTypes.object,
  color: PropTypes.string,
};

export default FlowLink;
