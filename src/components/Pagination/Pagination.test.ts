import Pagination from "./Pagination.vue"
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from "vitest"
import { render, fireEvent, screen, within } from '@testing-library/vue';

test("mount component",async()=>{
   expect(Pagination).toBeTruthy();

   const wrapper = mount(Pagination, {
      props: {
         currentPage: 2,
         totalPageNumber: 10,
         
      }
   });

   console.log(wrapper.text())
   
   expect(wrapper.text()).toContain("5"); 

   expect(wrapper.html()).toContain("click me");

   // expect(wrapper.find('[data-type="page"]')).toHaveStyle(`background-color: green`)
})

describe('Counter', () => {
   const wrapper = mount(Pagination, {
      props: {
         currentPage: 2
      }
   });

   // increment
   it('should incerement correctly', async () => {

      // console.log(wrapper.find('[data-type="increment"]').html())

      await wrapper.find('[data-type="increment"]').trigger('click') 
      expect(wrapper.html()).toContain("Counter is: 1")

   })})
   

// Testing click events
test("text of button", async () => {
    expect(Pagination).toBeTruthy();
 
    const wrapper = mount(Pagination);
    expect(wrapper.find("button").text()).toEqual("click me")
 })

