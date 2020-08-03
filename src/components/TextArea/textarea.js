import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

export default function TextArea({ name, label, ...rest }) {
  const textAreaRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <textarea id={fieldName} ref={textAreaRef} {...rest} />;
}
