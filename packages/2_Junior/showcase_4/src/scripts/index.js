const form = document.querySelector('#contact-form');
  function isInputValid(inputElement) {
    return inputElement.validity.valid;
  }
  function showInputError(inputSelector, inputErrorSelector) {
    const classes = document.querySelector(inputSelector).closest(inputErrorSelector)?.className;
    if (!classes) {
      console.log(inputErrorSelector);
      return;
    }
    document.querySelector(inputSelector).closest(inputErrorSelector).className = classes + ' ' + 'error';
  }
  function hideInputError(inputSelector, inputErrorSelector) {
    const classes = document.querySelector(inputSelector).closest(inputErrorSelector).className;
    if (!classes) {
      console.log(inputErrorSelector);
      return;
    }
    document.querySelector(inputSelector).closest(inputErrorSelector).className = classes.replace('error', '');
  }

  const formInputs = [
    {
      selector: '#firstname',
      errorSelector: '.input-group',
      validator: isInputValid,
      showError: showInputError,
      hideError: hideInputError,
    },
    {
      selector: '#lastname',
      errorSelector: '.input-group',
      validator: isInputValid,
      showError: showInputError,
      hideError: hideInputError,
    },
    {
      selector: '#email',
      errorSelector: '.input-group',
      validator: isInputValid,
      showError: showInputError,
      hideError: hideInputError,
    },
    {
      selector: '#message',
      errorSelector: '.input-group',
      validator: isInputValid,
      showError: showInputError,
      hideError: hideInputError,
    },
    {
      selector: '#general-enquiry',
      errorSelector: '.input-group',
      validator: isInputValid,
      showError: showInputError,
      hideError: hideInputError,
    },
    {
      selector: '#consent-checkbox',
      errorSelector: '.checkbox-input-group',
      validator: isInputValid,
      showError: showInputError,
      hideError: hideInputError,
    }
  ];

const radioElements = document.querySelectorAll('input[type="radio"');
for (const radioElement of radioElements) {
  radioElement.addEventListener('change', function (event) {
    for( const radioElement of radioElements) {
      const container = radioElement.closest('.radio-input-group');
      radioElement === this
        ? container.className = `${container.className} checked`
        : container.className = container.className.replace('checked', '')
    }
  })
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const fieldValidities = [];


  for (formInput of formInputs) {
    const {
      selector,
      errorSelector,
      validator,
      showError,
      hideError,
    } = formInput;
    const inputElement = document.querySelector(selector);
    const isValidInput = validator(inputElement);

    fieldValidities.push(isValidInput);
    if (!isValidInput) {
      showError(selector, errorSelector);
    } else  {
      hideError(selector, errorSelector);
    }
  }

  const areAllFieldsValid = fieldValidities.every((fieldValidity) => fieldValidity);

  if (areAllFieldsValid) {
    const toastElement = document.querySelector('.toast');
    toastElement.className = toastElement.className + ' ' + 'toast--displayed';
    setTimeout(() => {
      toastElement.className = toastElement.className.replace('toast--displayed', '');
    },
    2000,
  );
  }
});