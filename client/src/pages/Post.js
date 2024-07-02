import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
function Post() {
    let {id} = useParams();

    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
          })
    })
    return(
        <div className="PostPage">
            <div className="leftSide">
                <div className="postTitle">{postObject.title}</div>
                <div className="postText">{postObject.postText}</div>
                <div className="postFooter">{postObject.username}</div>
            </div>
            <div className="rightSide">Comment section</div>
        </div>
    )
}

export default Post;