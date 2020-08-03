import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';
import TextArea from './textarea';

export default function CustomTextArea({ name, title, full, ...rest }) {
  return (
    <Container full={full}>
      <Title>{title}</Title>
      <TextArea name={name} full={full} {...rest} />
    </Container>
  );
}

CustomTextArea.propTypes = {
  title: PropTypes.string.isRequired,
  full: PropTypes.bool,
};

CustomTextArea.defaultProps = {
  full: false,
};
