const TOGGLE_IS_SHOWED = "TOGGLE-IS-SHOWED";

const initialState = {
    friends: [
        {id: 1, img: 'https://s0.rbk.ru/v6_top_pics/media/img/8/22/755895443908228.jpg'},
        {
            id: 2,
            img: 'https://www.moya-planeta.ru/upload/images/xl/19/a7/19a713c5edb6c69c5a0c31b875d732b3.jpg'
        },
        {id: 3, img: 'https://brammels.com/wp-content/uploads/2018/06/krasivye-lyudi-umnee.jpg'},
        {id: 4, img: 'https://www.kino-teatr.ru/art/5823/82736.jpg'}
    ],
    isShowed: false
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_SHOWED:
            return {
                ...state,
                isShowed: action.isShowed
            }
        default:
            return state;
    }
}

export const toggleIsShowed = isShowed => ({type: TOGGLE_IS_SHOWED, isShowed});

export default sidebarReducer;
