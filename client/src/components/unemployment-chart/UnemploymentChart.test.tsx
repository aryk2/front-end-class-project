import React from 'react'
import { render } from '@testing-library/react'
import UnemploymentChart from '.'

describe('UnemploymentChart', () => {
  it('should render the UnemploymentChart component', () => {
    const props = {} as any
    const { container } = render(<UnemploymentChart { ...props } />)
    expect(container).toBeTruthy()
  })
})
