import "./Template.css";

const Template = ({ children, todoLength }) => {
	return (
		<div className="Template">
			<div className="title">Today To Do ({todoLength})</div>
			<div>{ children }</div>
		</div>
	);
};

export default Template;
