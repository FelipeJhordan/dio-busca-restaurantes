import Slider from 'react-slick'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 16%;
    height: 100vh;
    overflow-y: auto; 
`

export const Search  = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 1rem 0.2rem 1rem 0.2rem;
`

export const Logo =  styled.img`
    max-width: 55%;
    height: auto;
    margin-bottom: 1rem;
`

export const Title = styled(Text)`
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;



export const Map = styled.div`
    background-color: red;
    width: 84%;
`

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`
