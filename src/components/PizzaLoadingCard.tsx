import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoadingCard: FC = () => {
  return (
    <ContentLoader
      className='pizza-card'
      speed={2}
      width={290}
      height={455}
      viewBox='0 0 290 455'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='265' rx='5' ry='5' width='290' height='25' />
      <rect x='1' y='310' rx='10' ry='10' width='290' height='75' />
      <rect x='0' y='420' rx='5' ry='5' width='90' height='25' />
      <rect x='155' y='410' rx='23' ry='23' width='135' height='40' />
      <circle cx='145' cy='120' r='120' />
    </ContentLoader>
  );
};

export default PizzaLoadingCard;
