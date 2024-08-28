import { modifier } from 'ember-modifier';

export default modifier((element, [callback]) => {
  function handleClick(event) {
    console.log("click event")
    if (!element.contains(event.target)) {
      callback();
    }
  }

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
});