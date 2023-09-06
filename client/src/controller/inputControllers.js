/* UTILITY METHODS */

const hasCapitalLetters = (InputValue) => {
  for (let i = 0; i < InputValue.length; i++) {
    if (InputValue[i] >= "A" && InputValue[i] <= "Z") {
      return true;
    }
  }

  return false;
};

const hasSpecialCharacters = (InputValue) => {
  for (let i = 0; i < InputValue.length; i++) {
    let charAt = InputValue.charCodeAt(i);

    if (
      (charAt >= 33 && charAt <= 47) ||
      (charAt >= 58 && charAt <= 64) ||
      (charAt >= 91 && charAt <= 96) ||
      (charAt >= 123 && charAt <= 126)
    ) {
      return true;
    }
  }

  return false;
};

const hasNumbers = (InputValue) => {
  for (let i = 0; i < InputValue.length; i++) {
    if (InputValue.charCodeAt(i) >= 48 && InputValue.charCodeAt(i) <= 57) {
      return true;
    }
  }

  return false;
};

/* USABLE METHODS */
export const isCorrectEmail = (email, setError, setSubmissionClear) => {
  if (email.length === 0) {
    setError("");
    setSubmissionClear(false);
    return;
  }

  if (!email.includes("@")) {
    setError("Not a valid email");
    setSubmissionClear(false);
    return;
  }

  if (email.length < 5) {
    setError("Shorter emails are invalid");
    setSubmissionClear(false);
    return;
  }

  setError("");
  setSubmissionClear(true);
  return;
};

export const isCorrectPassword = (password, setError, setSubmissionClear) => {
  if (password.length === 0) {
    setError("");
    setSubmissionClear(false);
    return;
  }

  // Password length should be more than 5 and less than 20
  if (password.length < 5 || password.length > 20) {
    if (password.length < 5) {
      setError("Password should be more than 5 characters");
    } else {
      setError("Password should be less than 20 characters");
    }

    setSubmissionClear(false);
    return;
  }

  // If password does not includes a capital letter
  if (!hasCapitalLetters(password)) {
    setError("Password should contain a uppercase character");
    setSubmissionClear(false);
    return;
  }

  // Password should be having a special character
  if (!hasSpecialCharacters(password)) {
    setError("Password should contain a special character");
    setSubmissionClear(false);
    return;
  }

  setError("");
  setSubmissionClear(true);
  return;
};

export const isCorrectName = (name, setError, setSubmissionClear) => {
  if (name.length === 0) {
    setError("");
    setSubmissionClear(false);
    return;
  }

  if (hasNumbers(name)) {
    setError("Name should not contain a number");
    setSubmissionClear(false);
    return;
  }

  setError("");
  setSubmissionClear(true);
  return;
};

export const isCorrectPhone = (phone, setError, setSubmissionClear) => {
  if (phone.length === 0) {
    setError("");
    setSubmissionClear(false);
    return;
  }

  if (phone.length < 10 || phone.length > 10) {
    setError("Phone number should be 10 digits");
    setSubmissionClear(false);
    return;
  }

  setError("");
  setSubmissionClear(true);
  return;
};

export const isCheckBoxFilled = (checkbox, setError, setSubmissionClear) => {
  if (checkbox === false) {
    setError("Please fill the checkbox");
    setSubmissionClear(false);
    return;
  }

  setError("");
  setSubmissionClear(true);
  return;
};

export const isPasswordConfirmCorrect = (
  passConfirm,
  setError,
  setSubmissionClear
) => {
  if (passConfirm.length === 0) {
    setError("");
    setSubmissionClear(false);
    return;
  }

  setError("");
  setSubmissionClear(true);
  return;
};
