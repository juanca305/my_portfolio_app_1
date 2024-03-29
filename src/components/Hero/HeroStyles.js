import styled from 'styled-components';

export const Hero_Wrapper = styled.div`
 display: flex; 
 flex-direction: row;
  
   @media ${(props) => props.theme.breakpoints.md} {
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   //margin-left:20px;
   }
   @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: left;
    margin: 0 auto;
   }

`;


export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 12px;
  }
`;

export const BlogCard2 = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 240px;
  height: 380px;
  margin-top: 120px;
  margin-left: 40px;
  margin-right: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 90%;
  height: auto;
  padding: auto;
  margin: auto auto 40px auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60%;
    //margin: auto;
    height: auto;
    margin-bottom: 20px;

    padding: auto;
  }
`;

export const LinkItem2 = styled.a`


	display: flex;
  margin-bottom: 14px;  

  font-size: 14px;
	line-height: 18px;
	color: rgba(255, 255, 255, 0.75);
  
	transition: .3s ease;
	position: relative;
  margin-left: 8px;
	left: 0;

	&:hover {
		color: #fff;
		left: 7px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 15px;
		line-height: 24px;
		display: flex;
		flex-direction: row;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 12px;
		line-height: 14px;
		margin-bottom: 10px;
		display: flex;
		align-items: flex-start;
	}
`;

export const Img2 = styled.img`
  width:96%;
  height:70%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  margin-bottom: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: auto;
    height : auto;
    max-height: 100%;
    max-width: 100%;
  }
`;


export const Wrapper_Links = styled.div`
// border: 1px solid #fff;
text-align: left;
padding-left: 10px;
padding-bottom: 20px;
@media ${(props) => props.theme.breakpoints.md} {
  padding-bottom: 0px;
}
`;




