import React from 'react'
import { render } from '@testing-library/react'
import HomePage from '.'

describe('HomePage', () => {
  it('should render the HomePage component', () => {
    const props = {} as any
    const { container } = render(<HomePage { ...props } />)
    expect(container).toBeTruthy()
  })
})
