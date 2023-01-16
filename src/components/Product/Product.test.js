import { Single } from './Product.stories.ts';
import { describe, expect, it } from "vitest"
import { render, fireEvent, screen, within, userEvent } from '@testing-library/vue';


describe("try", () => {
    render(<Single {...Single.args }/>);
    it('Product Button Test', () => {
      expect(screen.getByRole("h4")).toHaveTextContent.toBe(/Sample Product 1st/i);
    })
  })


//   describe("try", () => {
//     render(<MyProduct/>)
//     it('adds 1 + 2 to equal 3', () => {
//       expect(sum(1,2)).toBe(3)
//     })
//   })
