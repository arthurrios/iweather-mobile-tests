import { render, screen } from '@testing-library/react-native'
import { NextDays } from '@components/NextDays'

import clearDay from '@assets/clear_day.svg'

describe('Component: NextDays', () => {
  it('should render next days', () => {
    render(
      <NextDays
        data={[
          {
            day: '18/07',
            min: '30ºc',
            max: '34ºc',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '19/07',
            min: '20ºc',
            max: '31ºc',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '20/07',
            min: '25ºc',
            max: '33ºc',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '21/07',
            min: '27ºc',
            max: '29ºc',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '22/07',
            min: '28ºc',
            max: '34ºc',
            icon: clearDay,
            weather: 'Céu limpo',
          },
        ]}
      />,
    )

    expect(screen.getByText('21/07')).toBeTruthy()
  })
})
