import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils/testing'
import { CategoryList } from '../CategoryList'

describe('CategoryList', () => {
    it('renders CategoryList correctly', () => {
        renderWithRouter(<CategoryList catalog={[
            {idCategory: 1, strCategory: "Beef", strCategoryThumb: "https://www.themealdb.com/images/category/beef.png", strCategoryDescription: "Test 1"},
            {idCategory: 2, strCategory: "Chicken", strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png", strCategoryDescription: "Test 2"},
        ]}/>)
        expect(screen.getByRole('list')).toMatchSnapshot()
    })
    it('renders CategoryList correctly without items', () => {
        renderWithRouter(<CategoryList catalog={[]}/>)
        expect(screen.getByRole('list')).toMatchSnapshot()
    })
})