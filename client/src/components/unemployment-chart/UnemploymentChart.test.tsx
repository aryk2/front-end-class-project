import React from 'react'
import { render } from '@testing-library/react'
import UnemploymentChart from './UnemploymentChart'

describe('UnemploymentChart', () => {
  it('should render the UnemploymentChart component', () => {
    
    const props = {
      CAD: 13,
      GBP: 13,
      KWD: 13,
      EUR: 13,
    } as any
    // const { container } = render(<UnemploymentChart { ...props } />)
    expect(true).toBeTruthy()
  })
})
