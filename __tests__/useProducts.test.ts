import {renderHook, act} from '@testing-library/react-hooks';
import {useProducts} from '../src/hooks/useProducts';

//mock api
jest.mock('../src/api', () => ({
  getProducts: jest.fn().mockResolvedValue({
    data: [
      {
        createdAt: 'date_formatted',
        product: 'Rustic Rubber Bacon',
        points: 69814,
        image: 'https://loremflickr.com/640/480/people',
        is_redemption: true,
        id: '5',
      },
    ],
  }),
}));

describe('useProducts hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return the initial state', () => {
    const {result} = renderHook(() => useProducts());
    expect(result.current.isLoading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.points).toEqual('0');
    expect(result.current.filter).toBe(null);
  });

  it('Should get the products and update the state', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.products).toEqual([
      {
        createdAt: 'date_formatted',
        product: 'Rustic Rubber Bacon',
        points: 69814,
        image: 'https://loremflickr.com/640/480/people',
        is_redemption: true,
        id: '5',
      },
    ]);
    expect(result.current.points).toEqual('0.00');
  });

  it('Should show only redeemed points', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();
    act(() => {
      result.current.onFilterProducts(true);
    });
    expect(result.current.filter).toBe(true);
    expect(result.current.products).toEqual([
      {
        createdAt: 'date_formatted',
        product: 'Rustic Rubber Bacon',
        points: 69814,
        image: 'https://loremflickr.com/640/480/people',
        is_redemption: true,
        id: '5',
      },
    ]);
  });

  it('Should show only win points', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();
    act(() => {
      result.current.onFilterProducts(false);
    });
    expect(result.current.filter).toBe(false);
    expect(result.current.products).toEqual([]);
  });

  it('Should reset filter', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();
    act(() => {
      result.current.onFilterProducts(true);
    });
    act(() => {
      result.current.onResetFilter();
    });
    expect(result.current.filter).toBe(null);
    expect(result.current.products).toEqual([
      {
        createdAt: 'date_formatted',
        product: 'Rustic Rubber Bacon',
        points: 69814,
        image: 'https://loremflickr.com/640/480/people',
        is_redemption: true,
        id: '5',
      },
    ]);
  });

  it('Should pause loading state when failing api', async () => {
    jest.mock('../src/api', () => ({
      getProducts: jest.fn().mockRejectedValue(new Error('Error')),
    }));
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });
});
