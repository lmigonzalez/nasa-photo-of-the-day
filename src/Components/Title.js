import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
h1{
	color: ${props => props.theme.darkgreen};
	&::before{
		content: '→';
		
	}
}




`


const Title = (props) => {
	return (
		<StyledTitle>
			<h1>
				{props.title}
			</h1>
		</StyledTitle>
	)
}

export default Title;