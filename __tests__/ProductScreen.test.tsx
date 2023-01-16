import 'react-native';
import React from 'react';
import {ProductScreen} from '../src/screens/Product';
import {render, fireEvent} from '@testing-library/react-native';

describe('Product Detail Screen test', () => {
  const product = {
    createdAt: 'Comprado el  de diciembre, 2022',
    product: 'Rustic Rubber Bacon',
    points: 69814,
    image: 'https://loremflickr.com/640/480/people',
    is_redemption: true,
    id: '5',
  };
  const createTestProps = (props: Object) => {
    return {
      navigation: {
        navigate: jest.fn(),
        goBack: jest.fn(),
      },
      route: {
        params: {
          product,
        },
      },
      ...props,
    };
  };
  const route: any = {
    params: {
      product: product,
    },
  };

  const props = createTestProps({route});
  it('renders correctly', () => {
    const {getByTestId} = render(<ProductScreen {...props} />);
    const container = getByTestId('product-screen-container');
    expect(container).toBeTruthy();
  });

  it('displays the product name in the header', () => {
    const {getByText} = render(<ProductScreen {...props} />);

    const header = getByText(product.product);
    expect(header).toBeTruthy();
  });

  it('displays the product image', async () => {
    const {findByTestId} = render(<ProductScreen {...props} />);

    const image = await findByTestId('product-image');
    expect(image.props.source.uri).toEqual(product.image);
  });

  it('should navigate to the previous screen', () => {
    const {getByText} = render(<ProductScreen {...props} />);

    const acceptButton = getByText('accept');
    fireEvent.press(acceptButton);
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
