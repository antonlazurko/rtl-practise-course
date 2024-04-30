import { screen, render } from "@testing-library/react";

import {About} from '../About'

describe('About', () => {
    it('sohuld render About correctly', ()=> {
        render(<About/>)
        expect(screen.getByRole('heading')).toMatchSnapshot()
    })
})