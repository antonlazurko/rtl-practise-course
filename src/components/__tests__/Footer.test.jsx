import { renderWithRouter } from '../../utils/testing'
import { screen } from '@testing-library/react'

import { Footer } from '../Footer'

describe('Footer', () => {
    it('renders Footer correctly', () => {
        renderWithRouter(<Footer/>)
        expect(screen.getByText(/Copyright Text/i)).toBeInTheDocument()
        expect(screen.getByRole('link')).toBeInTheDocument()
    })
})