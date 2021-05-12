import React from 'react'
import styled from 'styled-components';


const CardQuote = styled.span`
font-weight: 600;
color: black;
border-radius: 4px 4px 0 0;
position: absolute;
left: 0;
top: 0;
bottom: 100%;
width: 100%;
height: 0;
transition: 0.4s ease;
overflow: hidden;
padding-top: 6px;
`;

const Card = styled.div`
cursor: pointer;
position: relative;
height: 200px;
margin: 8px 0;
:hover ${CardQuote}{
    bottom: 0;
    height: 20%;
    background-color: rgba(255, 255, 255, 0.4);
}
img{
    cursor: pointer
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
    border-radius: 4px;
    width: 100%;
    height: 100%;
}
`;


const ImageCard1 = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <Card onClick={() => props.checkImage(props.i)}>
                <img src={props.image} alt={`option_${props.i}`} className={`img-fluid`} />
                <CardQuote className={`text-center`}>{props.quotes[props.i]}</CardQuote>
            </Card>
        </div>
    )
}

export default ImageCard1
