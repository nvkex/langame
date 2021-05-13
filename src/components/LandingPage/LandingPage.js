import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AppInfo from '../../common/AppInfo/AppInfo'


const PageContainer = styled.div`
color: white;
width: 100vw;
height: 100vh;
`;
const CardContainer = styled.div`
margin: auto;
max-width: 50vw;
height: 50vh;
a{
    text-decoration: none;
    color: #2C3A47;
}

@media (max-width: 768px){
    max-width:  80vw !important;
}
`;
const Card = styled.div`
font-weight: 700;
text-shadow: 1px 1px 2px #343434,2px 2px 4px rgba(0, 0, 0, 0.2);
cursor: pointer;
text-transform: uppercase;
transition: 0.3s;
font-size: 30px;
height: 200px;
border-radius: 10px;
box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
border: 1px solid rgba(255, 255, 255, 0.2);
background-color: rgba(255,255,255, 0.4);
color: ${({ theme }) => theme.color};
display: flex;
justify-content: center;
align-items: center;
:hover{
    font-size: 34px;
    letter-spacing: 2px;
}
@media (max-width: 768px){
    font-size: 20px;
}
`;


const LandingPage = () => {
    return (
        <PageContainer>
            <div className={`container`}>
                <AppInfo />
                <CardContainer className={`row align-items-center`}>
                    <div className="col-6 col-md-6 col-lg-6">
                        <Link to="/guess">
                            <Card className={`my-2`}>
                                Guess
                            </Card>
                        </Link>

                    </div>
                    <div className="col-6 col-md-6 col-lg-6">
                        <Link to="/mahjong">
                            <Card className={`my-2`}>
                                Mahjong
                            </Card>
                        </Link>
                    </div>
                </CardContainer>
            </div>
        </PageContainer>
    )
}

export default LandingPage
