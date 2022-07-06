import { mockTest } from "./api";

test("api", () => {
  return mockTest().then((data) => {
    expect(data).toBeTruthy();
  });
});
