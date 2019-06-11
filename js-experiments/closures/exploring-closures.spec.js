import { closures } from "./closures";

describe("Exploring Closures", () => {
  it("should return the color", () => {
    expect(closures()()).toEqual("blue-rasberry");
  });
});
