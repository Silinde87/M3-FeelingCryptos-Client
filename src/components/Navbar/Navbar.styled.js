import styled from "styled-components";


const getRandomColor = () => "#" + ((1<<24)*Math.random() | 0).toString(16);

const SCNavbar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding-right: 25px;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 99;
	background-color: white;

	#home-btn{
		height: 100%;
        width: 15vw;
		min-width: 170px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#reg{
		margin-bottom: 5px;
	}
	#home-btn > a{
		display: flex;
	}
	#heart-icon{
		font-size: 20px;
		transform: translate(0px,3px);
	}
	#heart-icon:hover{
		color: ${getRandomColor()}

	}

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
		border-radius: 10px;
	}
`;

export default SCNavbar;
