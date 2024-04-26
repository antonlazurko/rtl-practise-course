import { renderWithRouter } from '../../utils/testing'
import { screen } from '@testing-library/react'

import { Header } from '../Header'

describe('Header', () => {
    it('renders Header correctly', () => {
        renderWithRouter(<Header/>)
        expect(screen.getByText(/react food/i)).toBeInTheDocument()
        expect(screen.getAllByRole('link')).toHaveLength(3)
    })
})