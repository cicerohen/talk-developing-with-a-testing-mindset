const simpleHighOrderFunction = (simpleFunction, arg) => {
  return simpleFunction && simpleFunction(arg);
};

export default simpleHighOrderFunction;
