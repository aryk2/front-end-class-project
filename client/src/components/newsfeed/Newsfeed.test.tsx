import React from 'react'
import { render } from '@testing-library/react'
import Newsfeed from '.'

describe('Newsfeed', () => {
  it('should render the Newsfeed component', () => {
    const props = {} as any
    const { container } = render(<Newsfeed { ...props } />)
    expect(container).toBeTruthy()
  })
})
