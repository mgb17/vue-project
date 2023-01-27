import Product from "./Product.vue"
import { describe, expect, it, test } from "vitest"
import { mount } from '@vue/test-utils'

import { render, fireEvent, screen, within } from '@testing-library/vue';


test("mount component",async()=>{
   expect(Product).toBeTruthy();

   const wrapper = mount(Product);

   expect(wrapper.text()).toContain("€  € / Stück");
})



