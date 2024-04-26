import { screen, render } from '@testing-library/react'
import { Preloader } from '../Preloader'

describe('Preloader', () => {
    it('renders Preloader correctly', () => {
        render(<Preloader/>)
        expect(screen.getByRole('progressbar')).toMatchSnapshot()
    })
})