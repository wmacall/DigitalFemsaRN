import 'react-native';
import React from 'react';
import {HomeScreen} from '../src/screens/Home';
import {render} from '@testing-library/react-native';

jest.mock('axios');
jest.useFakeTimers();

describe('Home Screen test', () => {
  const createTestProps = (props: Object) => {
    return {
      navigation: {
        navigate: jest.fn(),
        goBack: jest.fn(),
      },
      ...props,
    };
  };
  const route: any = {
    params: {},
  };

  const props = createTestProps({route});
  it('renders correctly when loading', () => {
    jest.mock('../src/hooks/useProducts', () => {
      return {
        useProducts: jest.fn(() => ({
          isLoading: true,
          products: [],
          points: 0,
          filter: null,
          onFilterProducts: jest.fn(),
          onResetFilter: jest.fn(),
        })),
      };
    });

    const {getByTestId} = render(<HomeScreen {...props} />);

    const container = getByTestId('home-screen-container');
    const loader = getByTestId('home-screen-loader');

    expect(container).toBeDefined();
    expect(loader).toBeDefined();
  });
});
