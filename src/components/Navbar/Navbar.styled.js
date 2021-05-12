import styled from "styled-components";

const SCNavbar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.color.secondary};
	height: 60px;
	padding: 0px 30px;

	.login-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 120px;
	}
	.logged-user-box,
    .logged-user-box a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
	}
    .logged-user-box{
        width: 200px;
    }
	#avatar {
		height: 40px;
        margin-right: 15px;
	}
`;

export default SCNavbar;
