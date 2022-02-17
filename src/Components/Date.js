import React  from "react";
import styled from "styled-components";

const StyledDate = styled.div`

h2{
	color: ${props => props.theme.lightgreen}
}


`




const Date = (props) =>{
	return(
	<StyledDate>
		<h2>
			{props.date}
		</h2>
	</StyledDate>
	)
}


export default Date;
