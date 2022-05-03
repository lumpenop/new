export const SET_IS_CLICKED = "SET_IS_CLICKED";


// 컴포넌트에서 dispatch 시 들어갈 값을 인자로 받아야 함
export const setIsClicked = (isClicked) => {
    return {
        type: SET_IS_CLICKED,
        isClicked
    }
}

