import styled from "styled-components";

const SCSideBar = styled.section`
background: linear-gradient(0deg, ${({ theme }) => theme.color.tertiary} 0%, ${({ theme }) => theme.color.primary} 100%);
	width: 80px;
	position: fixed;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: calc(100% - 60px);
	margin-right: 100px;

	.sidebar-icon {
		font-size: 60px;
		color: ${({ theme }) => theme.color.letterColor1};
	}

	.active > .sidebar-icon{
		color: ${({ theme }) => theme.color.letterColor3Sel};
	}
`;

export default SCSideBar;
