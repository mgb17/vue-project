import getters from './getters';
// import mutations from './mutations';
// import actions from './actions';


export default {
    namespaced: true,
    state() {
        return {
            products:[
                {
                    id: 1,
                    title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 1st',
                    variant: '2',
                    price: '64,99',
                    oldPrice: '44,95',
                    info: 'wenige',
                    availability: 'medium',
                  },
                  {
                    id: 2,
                    title: 'Lorem asdqw ahashdasjd 2nd',
                    variant: '2',
                    price: '128,99',
                    oldPrice: '22,95',
                    info: 'mehrere',
                    availability: 'medium',
                  },
                  {
                    id: 3,
                    title: 'Lorem asdqw ahashdasjd 3rd',
                    variant: '2',
                    price: '128,99',
                    oldPrice: '22,95',
                    info: 'mehrere',
                    availability: 'high',
                  },
                  {
                    id: 4,
                    title:
                      'GARDENA combisystem-Vertikutier-Boy asdasdasd GARDENA combisystem-Vertikutier-Boy asdasdasd 4th',
                    variant: '2',
                    price: '64,99',
                    oldPrice: '44,95',
                    info: 'wenige',
                    availability: 'low',
                  },
                  {
                    id: 5,
                    title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 5th',
                    variant: '2',
                    price: '64,99',
                    oldPrice: '44,95',
                    info: 'wenige',
                    availability: 'low',
                  },
                  {
                    id: 6,
                    title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 6th',
                    variant: '2',
                    price: '64,99',
                    oldPrice: '44,95',
                    info: 'wenige',
                    availability: 'low',
                  },
                  {
                    id: 7,
                    title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 7th',
                    variant: '2',
                    price: '64,99',
                    oldPrice: '44,95',
                    info: 'wenige',
                    availability: 'low',
                  },
            ]
        };
    },
    getters
    // mutations,
    // actions,
};