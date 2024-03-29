import { type } from "os"


type FriendsType = {
    id: number,
    name: string,
    avatar: string
}

type NavbarPageType = {
    friends: Array<FriendsType>
}

type ActionsType = {
    
}

let initialState = {
    friends: [
        {
            id: 1,
            name: 'Marina',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFD7rVDIsj77R6CBhfwmiidoHUQY76Ze4ShORloVE-_ECfbYnDCVri9odpInT7eHXyHw&usqp=CAU'
        },
        {
            id: 2,
            name: 'Sasha',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTze-2AbWgVO2gec7MY8iqNNg8wq-EQHAfX_X8gb7TR-znW5qTS0cWvHQl8BpRH3Up0Sic&usqp=CAU'
        },
        {
            id: 3,
            name: 'Honzo',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU'
        }
    ]
}


const sidebarReducer = (state:NavbarPageType = initialState,action:ActionsType) => {
    return state
}
export default  sidebarReducer