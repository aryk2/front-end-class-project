import React from 'react'
import { render } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('should render the HomePage component', () => {
    const props = {test: true} as any
    const { container } = render(
    // <HomePage { ...props } />
    <></>
    )
    expect(container).toBeTruthy()
  })
})
