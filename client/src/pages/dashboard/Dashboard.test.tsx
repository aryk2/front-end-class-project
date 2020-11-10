import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from '.'

describe('Dashboard', () => {
  it('should render the Dashboard component', () => {
    const props = {} as any
    const { container } = render(<Dashboard { ...props } />)
    expect(container).toBeTruthy()
  })
})
