import { Single } from './Product.stories';
import Product from "./Product.vue"
import { describe, expect, it, test } from "vitest"
import { render, fireEvent, screen, within } from '@testing-library/vue';
import { mount } from '@vue/test-utils'

 
test("try", async() => {
  // expect(Product).toBeTruthy()

  const wrapper = mount(Product);

expect(wrapper.text()).toContain("Sample Product 1st");


  // const { getByTestId, getByText } = render(Product
   
  // );
  // expect(screen.getByRole("h4")).toHaveTextContent.toBe(/Sample Product 1st/i);

  // getByText("Sample Product 1st");

  // expect(isFormValid).toBeInTheDocument();

    // render(<Product/>);
    // it('Product Button Test', () => {
    //   expect(screen.getByRole("h4")).toHaveTextContent.toBe(/Sample Product 1st/i);
    // })
  })

