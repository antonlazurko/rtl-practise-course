import { screen, render } from "@testing-library/react";

import {NotFound} from '../NotFound'

describe('NotFound', () => {
    it('sohuld render NotFound correctly', ()=> {
        render(<NotFound/>)
        expect(screen.getByRole('heading')).toMatchSnapshot()
    })
})