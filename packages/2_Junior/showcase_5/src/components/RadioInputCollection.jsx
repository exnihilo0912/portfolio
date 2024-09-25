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
    <li className="radio-group__item" key={radio.id}>
      <div className="radio-input-group">
        <input
          name={name}
          type="radio"
          value={radio.value}
          onChange={onChange}
          id={radio.id}
        />
        <label htmlFor={radio.id}>{radio.label}</label>
      </div>
    </li>
  ));

  return (
    <fieldset className='radio-group'>
      <legend></legend>
      <ul className="radio-group__container">
        {radioElements}
      </ul>
    </fieldset>
  )
}

export default forwardRef(RadioInputCollection);