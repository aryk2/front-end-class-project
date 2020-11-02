import React from 'react'
import { render } from '@testing-library/react'
import Newsfeed from './Newsfeed'
import fetch from 'jest-fetch-mock';


describe('Newsfeed', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should render the Newsfeed component', () => {

    fetch.mockResponseOnce({} as any)
    
    const props = {} as any
    const { container } = render(<Newsfeed { ...props } />)
    expect(container).toBeTruthy()
  })
})
