import React from "react";

import styled from "styled-components";


const StyledP = styled.div`
p{
	color: ${props =>props.theme.darkgreen}
}

`


const Paragraph = (props) =>{
	return (
		<StyledP>
			<p>
			{props.explanation}
			</p>
		</StyledP>
	)
}

export default Paragraph