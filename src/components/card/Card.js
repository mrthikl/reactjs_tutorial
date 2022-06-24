import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
	position: relative;
`;

const CardImage = styled.div`
	height: 400px;
	width: 100%;
	border-radius: 8px;
`;
const CardImg = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`;

const CardContent = styled.div`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 50%);
	background-color: #fff;
	z-index: 10;
	border-radius: 20px;
	padding: 20px;
	width: 80%;
`;

const CardTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
`;

const CardUser = styled.div`
	display: flex;
	align-items: center;
`;

const UserAvatar = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
	flex-shrink: 0;
`;

const UserName = styled.span`
	font-weight: 300;
	font-size: 16px;
	color: ${(props) => props.theme.colors.orange}; ;
`;

const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CartTitle = styled.h3`
	font-size: 18px;
	font-weight: 500;
	color: ${(props) => props.theme.colors.blue}; ;
`;

const CardAmout = styled.span`
	font-size: 18px;
	font-weight: bold;
	background: linear-gradient(
		86.88deg,
		#7d6aff 1.38%,
		#ffb86c 64.35%,
		#fc2872 119.91%
	);
	${(props) =>
		props.secondary &&
		css`
			background: linear-gradient(86.88deg, #20e3b2, #2cccff);
		`};
	color: transparent;
	-webkit-background-clip: text;
	background-clip: text;
`;

const Card = (prop) => {
	return (
		<StyledCard>
			<CardImage>
				<CardImg
					src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
					alt=""
				/>
			</CardImage>

			<CardContent>
				<CardTop>
					<CardUser>
						<UserAvatar
							src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?compress=1&resize=1200x900&vertical=top"
							alt=""
						/>
						<UserName>@luanthi</UserName>
					</CardUser>
					<div>256</div>
				</CardTop>
				<CardFooter>
					<CartTitle>Cosmic Perspective</CartTitle>
					<CardAmout secondary={prop.secondary}>12,200 SPL</CardAmout>
				</CardFooter>
			</CardContent>
		</StyledCard>
	);
};

export default Card;
