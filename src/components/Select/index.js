import React from 'react';
import Select from 'react-select';

import PropTypes from 'prop-types';

import styles, { Container, Title } from './styles';

const colourOptions = [
  { value: 'Masculino', label: 'Masculino', color: '#145ca7' },
  { value: 'Feminino', label: 'Feminino', color: '#145ca7' },
  { value: 'Outro', label: 'Outro', color: '#145ca7' },
];

export default function SelectInput({ title, data, placeholder, style }) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <Select
        placeholder={placeholder}
        options={data || colourOptions}
        styles={styles}
        theme={theme => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            primary25: '#145ca7',
            primary: '#145ca7',
          },
        })}
      />
    </Container>
  );
}

SelectInput.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object]),
};

SelectInput.defaultProps = {
  data: null,
  style: {},
};
