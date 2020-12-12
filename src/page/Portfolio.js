import React from "react"
import projects from "./project.json"
import DisplayComponent from "../components/DisplayComponent"

class Portfolio extends React.Component {
	state = { projects }
	render() {
		return (
			// divs ClassName there has to be a wrapper, or element that contains it all
			<div>
				<h1>Portfolio Section</h1>
				<div className="container">
					{this.state.projects.map((item, key) => {
						return <DisplayComponent
							item={item}
							key={key}
						></DisplayComponent>
					}
					)}
				</div>
			</div >
		)
	}
}

export default Portfolio;