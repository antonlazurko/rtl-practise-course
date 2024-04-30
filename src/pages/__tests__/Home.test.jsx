import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithRouter } from "../../utils/testing";

import * as api from '../../api'

const apiSpy = jest.spyOn(api, 'getAllCategories')

const categories = [
    {idCategory: 1, strCategory: "Beef", strCategoryThumb: "https://www.themealdb.com/images/category/beef.png", strCategoryDescription: "Test 1"},
            {idCategory: 2, strCategory: "Chicken", strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png", strCategoryDescription: "Test 2"}
]

import { Home } from '../Home'

describe('sohuld render Home correctly', () => {
    it('sohuld render Home correctly default state', async()=> {
        apiSpy.mockResolvedValueOnce({ categories })
        renderWithRouter(<Home/>)
        const preloader = screen.getByRole('progressbar')
        expect(preloader).toBeInTheDocument()
        expect(screen.getByRole('searchbox')).toBeInTheDocument()
        await waitForElementToBeRemoved(preloader)
        expect(screen.getAllByRole('article')).toHaveLength(2)
    })
    it('sohuld render Home correctly with search', async()=> {
        apiSpy.mockResolvedValueOnce({ categories })
        renderWithRouter(<Home/>, {
            initialEntries: ['/?search=Chicken']
        })
        const preloader = screen.getByRole('progressbar')
        expect(preloader).toBeInTheDocument()
        await waitForElementToBeRemoved(preloader)
        expect(screen.getAllByRole('article')).toHaveLength(1)
    })
    it('sohuld render Home correctly with user search', async()=> {
        apiSpy.mockResolvedValue({ categories })
        renderWithRouter(<Home/>)
        const preloader = screen.getByRole('progressbar')
        const input = screen.getByRole('searchbox')
        expect(preloader).toBeInTheDocument()
        await waitForElementToBeRemoved(preloader)
        expect(screen.getAllByRole('article')).toHaveLength(2)
        await userEvent.type(input, 'Chicken')
        await userEvent.click(screen.getByRole('button'))
        expect(screen.getAllByRole('article')).toHaveLength(1)
    })
})