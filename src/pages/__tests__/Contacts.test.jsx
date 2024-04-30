import { screen, render } from "@testing-library/react";

import {Contact} from '../Contact'

describe('Contact', () => {
    it('sohuld render Contact correctly', ()=> {
        render(<Contact/>)
        expect(screen.getByRole('heading')).toMatchSnapshot()
    })
})