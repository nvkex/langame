import React from 'react'
import Logo from '../Logo'
import styled from 'styled-components'

const AppDescription = styled.p`
padding: 4px;
background-color: #18bb5c;
max-width: 500px;
margin: auto;
font-weight: 700;
`;

const H4 = styled.h4`
font-weight: 900 !important;
text-shadow: 1px 1px 2px #343434, 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const AppInfo = () => {
        return (
            <div className="container">
                <Logo width={'60px'} />
                <H4 className="display-3 text-center text-light">The Langame</H4>
                <AppDescription className={`text-center text-light`}>A very offensive way to learn and boost language skills</AppDescription>
            </div>
        )
    }

export default AppInfo
