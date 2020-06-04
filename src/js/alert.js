const clearAlert = () => {
  const currentAlert = document.querySelector('.alert');
  if (currentAlert) {
    currentAlert.remove();
  }
};

export default (message, className) => {
  clearAlert();

  // CREATE DIV
  const div = document.createElement('div');
  // Add classes
  div.className = className;
  // ADD text
  div.appendChild(document.createTextNode(message));

  // Get Parent
  const container = document.querySelector('.page-container');

  container.insertAdjacentElement('afterbegin', div);

  // TIMEOUT
  setTimeout(() => {
    clearAlert();
  }, 3000);
};
