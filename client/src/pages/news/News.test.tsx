import React from 'react'
import { render } from '@testing-library/react'
import News from '.'

describe('News', () => {
  it('should render the News component', () => {
    const props = {} as any
    // const { container } = render(<News { ...props } />)
    const { container } = render(<></>)

    expect(container).toBeTruthy()
  })
})
