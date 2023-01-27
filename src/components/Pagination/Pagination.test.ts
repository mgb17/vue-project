import Pagination from "./Pagination.vue"
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from "vitest"

import { render, fireEvent, screen, within } from '@testing-library/vue';


test("mount component",async()=>{
   expect(Pagination).toBeTruthy();

   const wrapper = mount(Pagination, {
    // props: {
    //     title: "asd"
    // }
   });
   

   expect(wrapper.text()).toContain("1");

//    console.log(wrapper.html())

   expect(wrapper.html()).toContain("click mee");
//    expect(wrapper.text()).toMatchSnapshot();
})

// Testing click events
test("text of button", async () => {
    expect(Pagination).toBeTruthy();
 
    const wrapper = mount(Pagination);
    await wrapper.find("button").trigger("click")
    expect(wrapper.find("button").text()).toEqual("click me")
 })

