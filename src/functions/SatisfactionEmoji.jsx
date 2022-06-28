import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SatisfactionEmoji = (props) => {
  const { value } = props;

  const satisfaction = [
    '😠',
    '🤮',
    '😞',
    '😔',
    '😑',
    '😐',
    '😒',
    '🙂',
    '😁',
    '🤩',
  ];

  return satisfaction[value - 1];
};

export default SatisfactionEmoji;
