export const closures = () => {
  let color = "blue";
  return function showColor() {
    return (color += "-rasberry");
  };
};

// const myClosure = closures();

// myClosure();
