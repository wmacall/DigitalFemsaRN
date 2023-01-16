/* eslint-disable no-undef */
jest.mock('i18n-js', () => ({
  I18n: () => {
    return {
      t: jest.fn(str => str),
    };
  },
}));

jest.mock('axios');
