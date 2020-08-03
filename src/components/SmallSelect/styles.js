import styled from 'styled-components';
import chroma from 'chroma-js';

export const Container = styled.div`
  width: 160px;
  height: 60px;
`;

export const Title = styled.small`
  text-align: left;
  font: 14px 'SFPro';
  letter-spacing: 0.28px;
  color: #666;
`;

export default {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    height: 50,
    marginTop: 7,
    width: 160,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma('#145ca7');
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? '#145ca7'
        : isFocused
        ? color.alpha(0.7).css()
        : null,
      color: 'black',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,

      backgroundColor: data.color,
      display: 'flex',
      height: 30,
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'Arial',
    };
  },
  multiValueLabel: styles => ({
    ...styles,

    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 30,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,

    color: 'white',
    display: 'flex',
    paddingTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 30,

    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};
