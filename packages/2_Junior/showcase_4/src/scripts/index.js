const form = document.querySelector('#contact-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const firstnameInput = document.querySelector('#firstname');
  const lastnameInput = document.querySelector('#lastname');
  const emailInput = document.querySelector('#email');
  const generalEnquiryInput = document.querySelector('#general-enquiry');
  const supportRequestInput = document.querySelector('#support-request');
  const messageInput = document.querySelector('#message');
  const hasConsentInput = document.querySelector('#consent-checkbox');

  const firstname = firstnameInput.value;
  const lastname = lastnameInput.value;
  const email = emailInput.value;
  const isGeneralInquiry =  generalEnquiryInput.checked;
  const isSupportRequest =  supportRequestInput.checked;
  const message = messageInput.value;
  const hasConsent = hasConsentInput.checked;

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