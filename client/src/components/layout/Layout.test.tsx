import React from 'react'
import { render } from '@testing-library/react'
import Layout from '.'

describe('Layout', () => {
  it('should render the Layout component', () => {
    const props = {
      searchForex: {} as any
    } as any
    const { container } = render(<Layout { ...props } />)
    expect(container).toBeTruthy()
  })
})
