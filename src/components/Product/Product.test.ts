import Product from "./Product.vue"
import { describe, expect, it, test } from "vitest"
import { mount } from '@vue/test-utils'
import { ProductType } from '../../interface'

// import { render, fireEvent, screen, within } from '@testing-library/vue';

const productData: ProductType =  {
      code: 1,
      title: 'Sample Product 1st',
      variant: 2,
      availability: '',
      price: 123,
      oldPrice: 456,
      info: 'wenige',
      priceOffer: true
}

test("mount component",async()=>{
   expect(Product).toBeTruthy();

   const wrapper = mount(Product, {
         props: {
            product: productData
         }
      });

   // console.log(wrapper.text())
   expect(wrapper.text()).toContain("Sample");
})



