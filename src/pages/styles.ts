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
        /* position: absolute; */
        display: block;
        justify-content: space-between;
        align-items: center;
        padding-left:30rem;
        font-size: 1.75rem;
        margin-bottom: 3rem;
        padding-bottom:.3rem;
        box-sizing: inherit;
        position: relative;
    
    :after {
        content: "";
        position: absolute;
        height: 2px;
        bottom: -4px; 
        margin: 0 auto;
		  left: 0;
        right: 3.5rem;
		  width: 6%;
		  background: var(--yellow-500);
    }
    
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
        border-radius: 60%;
        background-color: var(--white);

        .icons{
            height: 30px;
            width: 30px;
            margin-left: 8px;
        }
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