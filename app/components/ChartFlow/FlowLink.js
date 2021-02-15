import React from 'react';
import PropTypes from 'prop-types';

import { sankeyLinkHorizontal } from 'd3-sankey';

const FlowLink = ({ link, color }) => (
  <path
    d={sankeyLinkHorizontal()(link)}
    style={{
      fill: 'none',
      strokeOpacity: '.3',
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
