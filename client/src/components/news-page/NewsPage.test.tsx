import React from 'react'
import { render } from '@testing-library/react'
import NewsPage from '.'

describe('NewsPage', () => {
  it('should render the NewsPage component', () => {
    const props = {} as any
    const { container } = render(<NewsPage { ...props } />)
    expect(container).toBeTruthy()
  })
})
