import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, post: 'Hi how are you', likesCount: 15},
    ],
};

test('length of posts should be incremented', () => {
    const action = addPost("Hey");

    const newState = profileReducer(state, action);
    // eslint-disable-next-line jest/valid-expect
    expect(newState.posts.length).toBe(2);
})

test('text of new post should be correct', () => {
    const action = addPost("Hey");

    const newState = profileReducer(state, action);
    // eslint-disable-next-line jest/valid-expect
    expect(newState.posts[1].post).toBe("Hey");
})

test('after deleting length of posts should be decremented', () => {
    const action = deletePost(1);

    const newState = profileReducer(state, action);
    // eslint-disable-next-line jest/valid-expect
    expect(newState.posts.length).toBe(0);
})

test("after deleting length shouldn't be decrement if it is incorrect", () => {
    const action = deletePost(10);

    const newState = profileReducer(state, action);
    // eslint-disable-next-line jest/valid-expect
    expect(newState.posts.length).toBe(1);
})
