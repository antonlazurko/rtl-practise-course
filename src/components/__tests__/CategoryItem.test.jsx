import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils/testing'
import { CategoryItem } from '../CategoryItem'

describe('CategoryItem', () => {
    it('renders CategoryItem correctly', () => {
        renderWithRouter(<CategoryItem
            strCategory="Beef"
            strCategoryThumb="https://www.themealdb.com/images/category/beef.png"
            strCategoryDescription="Test Description"/>)
        expect(screen.getByRole('article')).toMatchSnapshot()
    })
})