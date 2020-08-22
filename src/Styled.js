import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const StyledBody = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f7f7f7;
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: 100vh;
    overflow-y:scroll;

    .row {
        display:flex;
        flex-direction: row;
        justify-content: stretch;
    }

`

export const StyledPaper = styled(Paper)`

    margin: 20px;
    padding: 5px;
    width: ${props => props.width}
`

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 15px;
        font-weight: 600;
        margin-top: 10px;
        margin-left: 10px;
    }

    .subtitle {
        font-size: 30px;
        font-weight: 800;
        margin-left: 10px;
    }
`

export const StyledSideNav = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
    overflow-x: hidden;
    box-shadow: 4px 0px 10px #bcbcbc;
    background: #505766;
    transition: 0.6s;

    .selected {
        background: #3b4049;
    }
    .selected:hover {
        background: #3b4049;
    }
    &:hover {
        width: 270px;
    }

    .MuiSvgIcon-root {
        fill: white;
    }

    .MuiTypography-root{
        color:white;
    }

    .MuiTypography-displayBlock {
        font-size: 2rem;
        font-weight: lighter;
    }
`
