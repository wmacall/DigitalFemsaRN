import {IProducts} from '../api';
import {translate} from '../i18n';

export const onFormatProducts = (
  products: IProducts[] | undefined,
): IProducts[] => {
  if (products) {
    return products.map(
      ({createdAt, id, image, is_redemption, points, product}) => {
        let date = new Date(createdAt);
        let day = date.getUTCDate();
        let month = date.toLocaleString('es-ES', {month: 'long'});
        let year = date.getUTCFullYear();
        let dateFormatted = translate('date_formatted', {day, month, year});

        return {
          id,
          image,
          is_redemption,
          points,
          product,
          createdAt: dateFormatted,
        };
      },
    );
  }

  return [];
};

const formatPoints = (num: number) => {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const getPoints = (products: IProducts[] | undefined) => {
  if (products) {
    const points = products
      .filter(({is_redemption}) => !is_redemption)
      .reduce((acc, current) => acc + current.points, 0);

    return formatPoints(points);
  }
  return String(0);
};
