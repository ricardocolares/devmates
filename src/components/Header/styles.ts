import styled from 'styled-components'

export const Container = styled.div`
    height: 5rem;
    align-items: center;
`
export const Content = styled.div`
  li {
        justify-content: space-between;
        max-width: 1120px;
        /* height: 5rem; */
        margin: 0 auto;
        padding: 1rem;
    

        display: flex;
        align-items: center;
    }

    a {
        display: block;
        position: relative;
        color: var(--gray-900);
        transition: color 0.2s;
       
        border-bottom: 1px solid var(--yellow-500);
    
    &:hover {
        position: relative;
       
        padding: 0 0.2rem;
        background: linear-gradient(to top, var(--yellow-500) 50%, transparent 50%);

     }

     &.active {
        color: var(--white);
        font-weight: bold;
     }

     &.active::after {
       content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: linear-gradient(to top, var(--yellow-500) 50%, transparent 50%);
     }


}
    
`