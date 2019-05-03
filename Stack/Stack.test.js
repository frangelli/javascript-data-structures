const Stack = require("./Stack");

describe("Stack", () => {
  let countryStack = null;
  beforeAll(() => {
    countryStack = new Stack();
  });

  it("should start as an empty stack", () => {
    expect(countryStack.size()).toBe(0);
  });

  it("should return undefined if poping or peeking an empty Stack", () => {
    let lastCountry = countryStack.pop();
    expect(lastCountry).toBeUndefined();
    lastCountry = countryStack.peek();
    expect(lastCountry).toBeUndefined();
  });

  it("should return the correct size of the Stack", () => {
    expect(countryStack.size()).toBe(0);
    countryStack.push("Argentina");
    expect(countryStack.size()).toBe(1);
    countryStack.pop();
    expect(countryStack.size()).toBe(0);
  });

  it("should increase the Stack size by 1 each time we push an item", () => {
    countryStack.push("Brazil");
    expect(countryStack.size()).toBe(1);
    countryStack.push("New Zealand");
    expect(countryStack.size()).toBe(2);
    countryStack.push("Germany");
    expect(countryStack.size()).toBe(3);
    countryStack.push("Canada");
    expect(countryStack.size()).toBe(4);
  });

  it("should decrease the size by 1 each time we pop an item and return the last item pushed to the Stack", () => {
    let lastCountry = countryStack.pop();
    expect(lastCountry).toBe("Canada");
    lastCountry = countryStack.pop();
    expect(lastCountry).toBe("Germany");
  });

  it("should return last item but not remove it from the stack when peeking", () => {
    expect(countryStack.size()).toBe(2);
    const lastCountry = countryStack.peek();
    expect(lastCountry).toBe("New Zealand");
    expect(countryStack.size()).toBe(2);
  });
});
