import "../styles/Post.css";
import {useState} from "react";

function Post(props) {
	const [count, setCount] = useState(0);
	return(
        <div id="post">
            <img src = {props.imglink}/>
	        <span>{props.caption}</span>
	        <button onClick={()=>{
	            	setCount(count+1)
	            }}>👍LIKE {count}</button>
       </div>
	);
}

export default Post;