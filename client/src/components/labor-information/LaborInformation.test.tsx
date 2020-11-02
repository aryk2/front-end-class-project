import React from 'react'
import { render } from '@testing-library/react'
import LaborInformation from './LaborInformation'
import fetch from 'jest-fetch-mock';


describe('LaborInformation', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('should render the LaborInformation component', () => {
    
    fetch.mockResponseOnce({} as any)

    const props = {} as any
    const { container } = render(<LaborInformation { ...props } />)
    expect(container).toBeTruthy()
  })
})
