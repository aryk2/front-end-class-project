import React from 'react'
import { render } from '@testing-library/react'
import NewsStories from '.'

describe('NewsStories', () => {
  it('should render the NewsStories component', () => {
    const props = {} as any
    const { container } = render(<NewsStories { ...props } />)
    expect(container).toBeTruthy()
  })
})
