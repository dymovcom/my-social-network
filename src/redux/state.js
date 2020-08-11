const
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum distinctio, excepturi ipsum laborum nihil perferendis reprehenderit voluptatum? Deserunt dolorem excepturi itaque iure laborum nostrum officia quam quia repudiandae tempora.',
                    likeCount: 4
                },
                {
                    id: 2,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum distinctio, excepturi ipsum laborum nihil perferendis reprehenderit voluptatum? Deserunt dolorem excepturi itaque iure laborum nostrum officia quam quia repudiandae tempora.',
                    likeCount: 2
                },
                {
                    id: 3,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum distinctio, excepturi ipsum laborum nihil perferendis reprehenderit voluptatum? Deserunt dolorem excepturi itaque iure laborum nostrum officia quam quia repudiandae tempora.',
                    likeCount: 22
                },
            ],
            newPostText: '',
            friends: [
                {id: 1, name: 'Иван', avaSrc: 'https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg'},
                {id: 2, name: 'Сергей', avaSrc: 'https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg'},
                {id: 3, name: 'Артем', avaSrc: 'https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg'},
                {id: 4, name: 'Наташа', avaSrc: 'https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg'},
                {id: 5, name: 'Женя', avaSrc: 'https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg'},
                {id: 6, name: 'Дима', avaSrc: 'https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg'}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Антон'},
                {id: 2, name: 'Наташа'},
                {id: 3, name: 'Константин'},
                {id: 4, name: 'Артем'},
                {id: 5, name: 'Дима'},
            ],
            messages: [
                {id: 1, author: 'Антон', text: 'Привет! Как дела?'},
                {id: 2, author: 'Константин', text: 'Здорово! Все нормально!'},
                {id: 3, author: 'Антон', text: 'Когда в отпуск?'},
                {id: 4, author: 'Константин', text: 'Yo'},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('no subscribers');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;

            case ADD_MESSAGE:
                const newMessage = {
                    id: 5,
                    author: action.author,
                    text: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;

            default:
                break;
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = (author) => {
    return {
        type: ADD_MESSAGE,
        author: author
    }
}

export const updateNewMessageTextActionCreator = (author, text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        author: author,
        newText: text
    }
}

export default store;

window.store = store;