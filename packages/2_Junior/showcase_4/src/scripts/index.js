const form = document.querySelector('#contact-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const fieldValidities = [];

  const firstnameInput = document.querySelector('#firstname');
  const firstname = firstnameInput.value;
  const firstnameClasses = document.querySelector('#firstname + p').className;
  fieldValidities.push(firstnameInput.validity.valid);
  if (!firstnameInput.validity.valid) {
    document.querySelector('#firstname + p').className = firstnameClasses + ' ' + 'active';
  } else  {
    document.querySelector('#firstname + p').className = firstnameClasses.replace('active', '');
  }

  const lastnameInput = document.querySelector('#lastname');
  const lastname = lastnameInput.value;
  const lastnameClasses = document.querySelector('#lastname + p').className;
  fieldValidities.push(lastnameInput.validity.valid);
  if (!lastnameInput.validity.valid) {
    document.querySelector('#lastname + p').className = lastnameClasses + ' ' + 'active';
  } else  {
    document.querySelector('#lastname + p').className = lastnameClasses.replace('active', '');
  }

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;
  const emailClasses = document.querySelector('#email + p').className;
  fieldValidities.push(emailInput.validity.valid);
  if (!emailInput.validity.valid) {
    document.querySelector('#email + p').className = emailClasses + ' ' + 'active';
  } else  {
    document.querySelector('#email + p').className = emailClasses.replace('active', '');
  }

  const generalEnquiryInput = document.querySelector('#general-enquiry');
  const isGeneralInquiry =  generalEnquiryInput.checked;
  const supportRequestInput = document.querySelector('#support-request');
  const isSupportRequest =  supportRequestInput.checked;
  // const firstnameClasses = document.querySelector('#firstname + p').className;
  fieldValidities.push(generalEnquiryInput.validity.valid);

  const messageInput = document.querySelector('#message');
  const message = messageInput.value;
  const messageClasses = document.querySelector('#message + p').className;
  fieldValidities.push(messageInput.validity.valid);
  if (!messageInput.validity.valid) {
    document.querySelector('#message + p').className = messageClasses + ' ' + 'active';
  } else  {
    document.querySelector('#message + p').className = messageClasses.replace('active', '');
  }

  const hasConsentInput = document.querySelector('#consent-checkbox');
  const hasConsent = hasConsentInput.checked;
  // const haConsentClasses = document.querySelector('#consent-checkbox + p').className;
  fieldValidities.push(hasConsentInput.validity.valid);
  //   if (!hasConsentInput.validity.valid) {
  //   document.querySelector('#email + p').className = emailClasses + ' ' + 'active';
  // } else  {
  //   document.querySelector('#email + p').className = emailClasses.replace('active', '');
  // }

  const areAllFieldsValid = fieldValidities.every((fieldValidity) => fieldValidity);
  console.log({ areAllFieldsValid });
  console.log({
    firstname: { value: firstname, isValid: firstnameInput.validity.valid },
    lastname: { value: lastname, isValid: lastnameInput.validity.valid },
    email: { value: email, isValid: emailInput.validity.valid },
    isGeneralInquiry: { value: isGeneralInquiry, isValid: generalEnquiryInput.validity.valid },
    isSupportRequest: { value: isSupportRequest, isValid: supportRequestInput.validity.valid },
    message: { value: message, isValid: messageInput.validity.valid },
    hasConsent: { value: hasConsent, isValid: hasConsentInput.validity.valid },
  });

  alert('Form sent');
});