import React from 'react';
import c from './Posts.module.css'

type PostsPropsType = {
    message:string
}

const Posts = (props:PostsPropsType) => {
    return (
        <div>
            <div className={c.item}>
                <img src={'https://media.cnn.com/api/v1/images/stellar/prod/150324154003-01-internet-cats-restricted.jpg?q=w_3000,h_1688,x_0,y_0,c_fill/w_1280'}/>
                {props.message}
            </div>
            <span>likes:</span>
        </div>
    );
};

export default Posts;