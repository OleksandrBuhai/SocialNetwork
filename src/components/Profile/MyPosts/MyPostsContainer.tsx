import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostActionCreator, PostType, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/redux-state";
import { MyPosts } from './MyPosts';


type mapStateToProps = {
    posts:Array<PostType>,
    newPostText:string
}
type mapDispatchToProps = {
        addPost: ()=>void,
        onPostChange:(e:string)=>void
}

let mapStateToProps = (state: AppStateType):mapStateToProps => {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}


let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
    return {
      addPost:()=>{
        dispatch(addPostActionCreator())
      },
      onPostChange: (e:string)=>{
        dispatch(updateNewPostTextActionCreator(e))
      }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;