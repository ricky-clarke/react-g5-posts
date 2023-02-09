// @import '../../sass/mixins.scss';

import styled from 'styled-components';

export const NavMenu = styled.div.attrs({
    className: 'nav_menu',
})`
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    background: rgba(10, 10, 10, .65);
    box-shadow: 0 8px 32px rgb(2, 4, 24);
    border-right: 2px solid rgba(255, 255, 255, .09);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size:1rem;
    height: 100%;
    opacity: 1;
    position: fixed;
  
  

    &.nav_menu  {

        width:300px;
        transition: 1s width ease;

        &--closed {

            width:80px;

             nav {
                opacity: 0;
                visibility: hidden;
                transition: 0.2s opacity ease-in-out, 0.5s visibility ease;
             }
    
        }

    }

    @media (min-width:768px) {
        font-size:1.5vw;
    }



`;

export const Nav = styled.nav`

    display: flex;
    flex-direction: column;
    margin:8rem 2rem;
    opacity: 1;
    visibility: visible;
    transition: 3s opacity ease-in-out, 0.5s visibility ease;

    ul {
        list-style: none;
        margin:0;
        padding:0;

        li:not(:last-child){
            margin-bottom:0.75em;
        }

        li {

            a {
                color:#fff;
                text-decoration: none;
        
                &.active,
                &:hover {
                    color: var(--color-pink);
                }
        
            }

            &.menu-active {
                a {
                    color: var(--color-pink);
                }
            }

        }

    }

`;

// .navigation {
//     backdrop-filter: blur(3px);
//     -webkit-backdrop-filter: blur(3px);
//     background: rgba(10, 10, 10, .65);
//     box-shadow: 0 8px 32px rgb(2, 4, 24);
//     border-right: 2px solid rgba(255, 255, 255, .09);
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     font-size:1rem;
//     height: 100%;
//     opacity: 1;
//   position: fixed;
//     @include transition(width);
//     width:300px;

//     @media (min-width:768px) {
//         font-size:1.5vw;
//     }

//     nav {
//         display: flex;
//         flex-direction: column;
//         margin:8rem 2rem;
//         opacity: 1;
//         visibility: visible;
//         transition: 3s opacity ease-in-out, 0.5s visibility ease;

//         ul {
//             list-style: none;
//             margin:0;
//             padding:0;

//             li:not(:last-child){
//                 margin-bottom:0.75em;
//             }

//             li {

//                 a {
//                     color:#fff;
//                     text-decoration: none;
            
//                     &.active,
//                     &:hover {
//                         color: var(--color-pink);
//                     }
            
//                 }

//                 &.menu-active {
//                     a {
//                         color: var(--color-pink);
//                     }
//                 }

//             }

//         }

//     }

//     &--closed {

//         width:80px;
//          @include transition(width);

//          nav {
//             opacity: 0;
//             visibility: hidden;
//             transition: 0.2s opacity ease-in-out, 0.5s visibility ease;
//          }

//     }


// }
