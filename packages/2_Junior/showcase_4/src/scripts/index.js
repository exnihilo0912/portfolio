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
    document.querySelector(inputSelector).querySelector(inputErrorSelector).className = classes.replace('error', '');
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
      errorSelector: '.radio-input-group',
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

  // const generalEnquiryInput = document.querySelector('#general-enquiry');
  // const isGeneralInquiry =  generalEnquiryInput.checked;
  // const supportRequestInput = document.querySelector('#support-request');
  // const isSupportRequest =  supportRequestInput.checked;
  // const requestTypeClasses = document.querySelector('.radio-input-list + p').className;
  // fieldValidities.push(generalEnquiryInput.validity.valid);
  // if (!generalEnquiryInput.validity.valid) {
  //   document.querySelector('.radio-input-list + p').className = requestTypeClasses + ' ' + 'active';
  // } else  {
  //   document.querySelector('.radio-input-list + p').className = requestTypeClasses.replace('active', '');
  // }

  // const hasConsentInput = document.querySelector('#consent-checkbox');
  // const hasConsent = hasConsentInput.checked;
  // const haConsentClasses = document.querySelector('#consent-checkbox ~ p').className;
  // fieldValidities.push(hasConsentInput.validity.valid);
  //   if (!hasConsentInput.validity.valid) {
  //   document.querySelector('#consent-checkbox ~ p').className = haConsentClasses + ' ' + 'active';
  // } else  {
  //   document.querySelector('#consent-checkbox ~ p').className = haConsentClasses.replace('active', '');
  // }

  const areAllFieldsValid = fieldValidities.every((fieldValidity) => fieldValidity);
  console.log({ areAllFieldsValid });
  // console.log({
  //   firstname: { value: firstname, isValid: firstnameInput.validity.valid },
  //   lastname: { value: lastname, isValid: lastnameInput.validity.valid },
  //   email: { value: email, isValid: emailInput.validity.valid },
  //   isGeneralInquiry: { value: isGeneralInquiry, isValid: generalEnquiryInput.validity.valid },
  //   isSupportRequest: { value: isSupportRequest, isValid: supportRequestInput.validity.valid },
  //   message: { value: message, isValid: messageInput.validity.valid },
  //   hasConsent: { value: hasConsent, isValid: hasConsentInput.validity.valid },
  // });

  // alert('Form sent');
});