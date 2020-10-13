import React from 'react'
import { render } from '@testing-library/react'
import AppBar from '.'

describe('AppBar', () => {
  it('should render the AppBar component', () => {
    const props = {} as any
    const { container } = render(<AppBar { ...props } />)
    expect(container).toBeTruthy()
  })
})
