export function debounce(delay = 300) {
  let debounceId;

  return (callback) => {
    clearTimeout(debounceId);
    debounceId = setTimeout(() => {
      callback();
    }, delay);
  };
}
