import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testing";
import * as api from '../../api'

import { Recipe } from '../Recipe'

const apiSpy = jest.spyOn(api, 'getMealById')

describe('Recipe', () => {
    it('sohuld render Recipe correctly', async()=> {
        apiSpy.mockResolvedValueOnce({meals: [
            {
                idMeal: '1',
                strMeal: 'First',
                strCategory: 'Category',
                strArea: 'Area',
                strInstructions: 'Instructions',
                strMealThumb: 'Thumb',
                strIngredient1: 'Ingredient1',
                strMeasure1: 'Measure1',
                strYoutube: 'Youtube',
            }
        ]})
        renderWithRouter(<Recipe/>)
        const preloader = screen.getByRole('progressbar')
        expect(preloader).toBeInTheDocument()
        await waitForElementToBeRemoved(preloader)
        expect(screen.getByRole('article')).toBeInTheDocument()
    })
    it('sohuld render Recipe correctly without youtube', async()=> {
        apiSpy.mockResolvedValueOnce({meals: [
            {
                idMeal: '1',
                strMeal: 'First',
                strCategory: 'Category',
                strArea: 'Area',
                strInstructions: 'Instructions',
                strMealThumb: 'Thumb',
                strIngredient1: 'Ingredient1',
                strMeasure1: 'Measure1',
            }
        ]})
        renderWithRouter(<Recipe/>)
        const preloader = screen.getByRole('progressbar')
        expect(preloader).toBeInTheDocument()
        await waitForElementToBeRemoved(preloader)
        expect(screen.getByRole('article')).toBeInTheDocument()
    })
})