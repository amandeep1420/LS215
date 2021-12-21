function isValidEmail(email) {
  return !!email.match(/^[A-Z0-9]+@([A-Z]+\.)+[A-Z]+$/i);
}
