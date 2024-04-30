import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testing";
import * as api from '../../api'

import { Category } from '../Category'

const apiSpy = jest.spyOn(api, 'getFilteredCategory')

describe('Category', () => {
    it('sohuld render Category correctly', async()=> {
        apiSpy.mockResolvedValueOnce({meals: [
            {
                idMeal: '1',
                strMeal: 'First',
                strMealThumb: 'Thumb'
            },
            {
                idMeal: '2',
                strMeal: 'Second',
                strMealThumb: 'Second Thumb'
            }
        ]})
        renderWithRouter(<Category/>)
        const preloader = screen.getByRole('progressbar')
        expect(preloader).toBeInTheDocument()
        await waitForElementToBeRemoved(preloader)
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText('First')).toBeInTheDocument()
        expect(screen.getByText('Second')).toBeInTheDocument()
    })
    it('sohuld render Category correctly without items', async()=> {
        apiSpy.mockResolvedValueOnce({meals: []})
        renderWithRouter(<Category/>)
        const preloader = await screen.findByRole('progressbar')
        const button = await screen.findByRole('button')
        expect(preloader).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })
})