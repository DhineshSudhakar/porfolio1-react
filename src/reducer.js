export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

export const initialState = {
    projects: [
        {
            id: 1111,
            imageUrl: "/images/react-todo-app.png",
            title: "To Do App",
            demoLink: "https://todo-app-7a457.web.app/",
            repoLink: "https://github.com/DhineshSudhakar/react-toDoApp",
        },
        {
            id: 1112,
            imageUrl: "/images/discord-clone.png",
            title: "React Discord clone",
            demoLink: "https://discord-clone-9611a.web.app/",
            repoLink: "https://github.com/DhineshSudhakar/discord-clone",
        },
        {
            id: 1113,
            imageUrl: "/images/react_amazon_clone.png",
            title: "React Amazon clone",
            demoLink: "https://clone-react-ed2b3.web.app/",
            repoLink: "https://github.com/DhineshSudhakar/react-amazonClone",
        },

    ],
    skills: [
        {
            id: 11,
            technology: "HTML 5",
            percent: 0.8
        },
        {
            id: 12,
            technology: "CSS 3",
            percent: 0.7
        },
        {
            id: 13,
            technology: "Javascript",
            percent: 0.6
        },
        {
            id: 14,
            technology: "React JS",
            percent: 0.6
        },
        {
            id: 15,
            technology: "Node JS",
            percent: 0.5
        },
        {
            id: 16,
            technology: "Git",
            percent: 0.7
        },
        {
            id: 17,
            technology: "Firebase",
            percent: 0.6
        },
        {
            id: 18,
            technology: "Redux",
            percent: 0.5
        }
    ],
    messages: [],
}

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case "ADD_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.newMessage]
            }
        default:
            return state;

    }
}

export default reducer