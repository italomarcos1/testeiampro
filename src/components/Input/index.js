import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

import Input from './input';

export default function CustomInput({ name, title, full, style, ...rest }) {
  return (
    <Container full={full} style={style}>
      <Title>{title}</Title>
      <Input name={name} {...rest} />
    </Container>
  );
}

CustomInput.propTypes = {
  title: PropTypes.string.isRequired,
  full: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object]),
};

CustomInput.defaultProps = {
  full: false,
  style: {},
};
