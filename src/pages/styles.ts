import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    font-family: "Merriweather", sans-serif;
    /* margin-right: 15rem; */
    /* padding: 0 2rem; */
    /* height: 5px; */

    display: block;
    align-items: center;
    justify-content: space-between;

    h2 {
        position: absolute;
        display: block;
        margin-left:32rem;
        font-size: 32px;
        margin-bottom: 2rem;
        padding-bottom:.3rem;
        border-bottom: 1px solid var(--yellow-500);
  
    }

    .Card {
        /* position: relative; */
        margin-left: 30rem;
    }

  
`

export const Content = styled.div`
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    /* margin-bottom: 1.75rem; */
    margin-left: 15rem;
    margin-right: 15rem;
    font-family: "Merriweather", sans-serif;

    h1 {
        display: block;
        align-items: center;
        /* box-sizing: 560px; */
        justify-content: center;
        max-width: 70%;
        margin-top: 2rem;
        margin-bottom: 10px;
        padding-bottom: 2rem;
        
        font-weight: bold;
        font-size: 2.5rem;
      
    }

    span {
        border-radius: 50%;
    }

    p {
        display: block;
        /* box-sizing: 10px; */
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        line-height: 1.5rem;
        margin-bottom: 2rem;
    }

    
`