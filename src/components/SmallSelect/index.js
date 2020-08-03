import React, { useEffect, useRef } from 'react';
import Select from 'react-select';
import { useField } from '@unform/core';

import PropTypes from 'prop-types';

import styles, { Container, Title } from './styles';

const colourOptions = [
  { value: 'Masculino', label: 'Masculino', color: '#145ca7' },
  { value: 'Feminino', label: 'Feminino', color: '#145ca7' },
  { value: 'Outro', label: 'Outro', color: '#145ca7' },
];

export default function SelectInput({
  title,
  data,
  placeholder,
  style,
  name,
  ...rest
}) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField /* error */ } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue(ref) {
        if (rest.isMulti) {
          if (!ref.state.value) return [];

          return ref.state.value.map(option => option.value);
        }

        if (!ref.state.value) return '';

        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container style={style}>
      <Title>{title}</Title>
      <Select
        {...rest}
        ref={selectRef}
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
