import Pagination from "./Pagination.vue"
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from "vitest"
import { render, fireEvent, screen, within } from '@testing-library/vue';

test("mount component",async()=>{
   expect(Pagination).toBeTruthy();

   const wrapper = mount(Pagination, {
   //    propsData: {
   //       currentPage: 1
   //  }
   });
   
   expect(wrapper.text()).toContain("1"); // just the first pagination number

   expect(wrapper.html()).toContain("click me");

   // increment
   // await wrapper.find('[data-type="increment"]').trigger('click')
   // expect(wrapper.html()).toContain("Counter is: 0")


   // expect(wrapper.find('[data-type="page"]')).toHaveStyle(`background-color: green`)
   //expect(wrapper.text()).toMatchSnapshot();
})

describe('Counter', () => {
   const wrapper = mount(Pagination)

   it('should incerement correctly', async () => {
      await wrapper.find('[data-type="increment"]').trigger('click')
      expect(wrapper.html()).toContain("Counter is: 0")

   })})
   

// Testing click events
test("text of button", async () => {
    expect(Pagination).toBeTruthy();
 
    const wrapper = mount(Pagination);
   //  await wrapper.find("button").trigger("click")
    expect(wrapper.find("button").text()).toEqual("click me")
 })

