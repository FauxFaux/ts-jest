import { Thing } from "./main";

export const thing: Thing = { a: 1 };

function doTheThing() {
  return 1 + 2;
}

it("should do the thing", () => {
  expect(doTheThing()).toEqual(3);
});
