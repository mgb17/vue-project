import MyProduct from './Product.vue';

export default {
    title: 'Product',
    component: MyProduct,
    argTypes: {
      onClick: {},
      availability: {
        control: { type: 'select' },
        options: ['low', 'medium', 'high'],
      },
    },
};

const Template = (args) => ({
    components: { MyProduct },
    setup() {
      return { args };
    },
    template: '<my-product v-bind="args" />',
  });

  export const Single = Template.bind({});

  Single.args = {
    title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 1st',
};
