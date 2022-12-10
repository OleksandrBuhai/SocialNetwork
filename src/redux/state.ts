export type profileType = {
    posts:postsType[]
}
export type postsType = {
    id:number
    message:string,
    likescount:number
}

export type DialogsType = {
    dialogsData : Array<dialogType>
    messagesData: Array<messagesData>
}

export type dialogType = {
    id:number,
    name:string
}
export type messagesData = {
    id:number
    message:string
}
export type sideBarType = {

}
export type RootStateType = {
    profilePage : profileType
    dialogPage: DialogsType
    sideBar : sideBarType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id:1 ,message: "hello", likescount: 5},
            {id:2,message: "hello", likescount: 5},
            {id:3,message: "hello", likescount: 5}
        ]
    },
    dialogPage:{
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ]
        ,
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id:6,message:'Yo'}
    ]},
    sideBar: {}
}
export default state

