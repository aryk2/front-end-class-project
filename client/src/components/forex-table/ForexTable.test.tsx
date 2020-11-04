import React from 'react'
import { render } from '@testing-library/react'
import ForexTable from '.'

describe('ForexTable', () => {
  it('should render the ForexTable component', () => {
    const props = {} as any
    const { container } = render(<ForexTable { ...props } />)
    expect(container).toBeTruthy()
  })
})
