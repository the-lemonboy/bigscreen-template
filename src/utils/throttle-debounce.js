export const throttle = function (func, delay) {
  let timerId = null;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = currentTime;
      }, delay);
    }
  };
};

export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(
      () => {
        if (typeof fn === 'function') {
          fn.apply(null, args);
        }
        clearTimeout(timer);
      },
      delay > 0 ? delay : 100,
    );
  };
}
