import { forwardRef, useState } from 'react';

// radio
// name
// value
function RadioInputCollection(props, ref) {
  const {
    radios = [],
    name,
    onChange
  } = props;

  const radioElements = radios.map((radio) => (
    <li key={radio.id}>
      <input
        name={name}
        type="radio"
        value={radio.value}
        onChange={onChange}
        id={radio.id}
      />
      <label htmlFor={radio.id}>{radio.label}</label>
    </li>
  ));

  return (
    <fieldset>
      <legend></legend>
      <ul>
        {radioElements}
      </ul>
    </fieldset>
  )
}

export default forwardRef(RadioInputCollection);