import 'react-native';
import React from 'react';
import {HomeScreen} from '../src/screens/Home';
import {render, fireEvent} from '@testing-library/react-native';
import {EAppRoutes} from '../src/routes';

describe('Product Detail Screen test', () => {
  jest.mock('../src/hooks/useProducts', () => ({
    useProducts: jest.fn(() => ({
      isLoading: false,
      products: [
        {
          createdAt: 'Comprado el  de diciembre, 2022',
          product: 'Rustic Rubber Bacon',
          points: 69814,
          image: 'https://loremflickr.com/640/480/people',
          is_redemption: true,
          id: '5',
        },
      ],
      points: '69814',
      filter: null,
      onFilterProducts: jest.fn(),
      onResetFilter: jest.fn(),
    })),
  }));
  const createTestProps = (props: Object) => {
    return {
      navigation: {
        navigate: jest.fn(),
      },
      ...props,
    };
  };
  const props = createTestProps({});
  it('renders correctly', () => {
    const {getByTestId} = render(<HomeScreen {...props} />);
    const container = getByTestId('product-screen-container');
    expect(container).toBeTruthy();
  });
});
