import { FC } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { buildOptions } from '../../utils/charts';

import { ChartProps } from './types';

export const Chart: FC<ChartProps> = ({ data }) => {
  const options = buildOptions(data);

  /**
   *
   * Component.
   *
   */

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
