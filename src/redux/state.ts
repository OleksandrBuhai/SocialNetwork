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
    avatar:string
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
                {id: 1, name: 'Dimych', avatar:'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'},
                {id: 2, name: 'Andrew',avatar:'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'},
                {id: 3, name: 'Sveta',avatar:'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'},
                {id: 4, name: 'Sasha',avatar:'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'},
                {id: 5, name: 'Viktor',avatar:'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'},
                {id: 6, name: 'Valera',avatar:'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'}
            ]
        ,
    messagesData: [
        {id: 1, message: 'Hiiiiiiiiiiiiiiiiiiiiiisdfdsfdsfasdf     iiiiiiiiiii'},
        {id: 2, message: 'hello how it your it-kamasutra?'},
        {id: 3, message: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
        {id: 4, message: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
        {id: 5, message: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
        {id:6,  message:'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'}
    ]},
    sideBar: {}
}
export default state

