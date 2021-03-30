const mocks = [];
const originalFetch = fetch;

const proxiedFetch = new Proxy(fetch, {
  apply: (target, thisArg, argumentsList) => {
    for (const mock of mocks) {
      if (new RegExp(mock.test).test(argumentsList[0])) {
        /* eslint-disable no-console */
        console.debug(
          `Response from ${argumentsList[0]} mocked to`,
          mock.response,
        );
        /* eslint-enable no-console */
        return new Promise((resolve, reject) => {
          resolve({
            ok: true,
            json: () =>
              new Promise((resolve, reject) => resolve(mock.response)),
          });
        });
      }
    }
    return target(...argumentsList);
  },
});

module.exports = {
  addMock: newMock => {
    if (
      newMock &&
      Object.prototype.hasOwnProperty.call(newMock, 'test') &&
      Object.prototype.hasOwnProperty.call(newMock, 'response')
    ) {
      mocks.push(newMock);
    }
  },
  removeMock: removedMock => {
    if (removedMock && mocks.indexOf(removedMock) > 0) {
      mocks.splice(mocks.indexOf(removedMock), 1);
    }
  },
  startMocking: () => {
    if (fetch !== proxiedFetch) {
      /* eslint-disable no-global-assign */
      fetch = proxiedFetch;
      /* eslint-enable no-global-assign */
      /* eslint-disable no-console */
      console.debug('Mocking fetch responses.');
      /* eslint-enable no-console */
    }
  },
  stopMocking: () => {
    if (fetch !== originalFetch) {
      /* eslint-disable no-global-assign */
      fetch = originalFetch;
      /* eslint-enable no-global-assign */
      /* eslint-disable no-console */
      console.debug('Unmocking fetch responses.');
      /* eslint-enable no-console */
    }
  },
  originalFetch,
  proxiedFetch,
  mocks,
};
