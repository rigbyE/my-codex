export const myCurryFunction = a => {
  return b => {
    return c => {
      return a + b + c;
    };
  };
};

export const mySecondCurry = () => {
  const add1 = myCurryFunction(2);
  const add2 = add1(5);
  const add3 = add2(3);
  return add3;
};
