const min = 1000;
const max = 4000;

export function fakeRandomDelay() {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * (max - min + 1)) + min);
  });
}
