import { myCurryFunction, mySecondCurry } from "./currying";

const myFunction = myCurryFunction(5)(1)(3);
describe("Making curry out of functions", () => {
  it("will return the sum of the args", () => {
    expect(myFunction).toEqual(9);
    console.log(myFunction);
  });
});

describe("Making another curry out of functions", () => {
  it("will return the sum of the args", () => {
    expect(mySecondCurry()).toEqual(10);
    console.log(mySecondCurry());
  });
});
