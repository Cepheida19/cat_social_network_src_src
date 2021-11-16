import React from "react";
import s from "./../Dialogs.module.css";

// let newAreaLink = React.createRef();

// let NewMessage = () => {
// 	let text = newAreaLink.current.value;
// 	alert(text);
// }

const Message = (props) => {
	return(
		<div>
			<div 
				className={s.message}>{props.message}
			</div>
			
		</div>
	

		);
}


export default Message;