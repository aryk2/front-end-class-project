import React from 'react'
import { render } from '@testing-library/react'
import Error from '.'

describe('Error', () => {
  it('should render the Error component', () => {
    const props = {} as any
    const { container } = render(<Error { ...props } />)
    expect(container).toBeTruthy()
  })
})
