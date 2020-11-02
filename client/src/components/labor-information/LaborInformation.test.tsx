import React from 'react'
import { render } from '@testing-library/react'
import LaborInformation from '.'

describe('LaborInformation', () => {
  it('should render the LaborInformation component', () => {
    const props = {} as any
    const { container } = render(<LaborInformation { ...props } />)
    expect(container).toBeTruthy()
  })
})
