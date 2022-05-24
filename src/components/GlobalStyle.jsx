import { createGlobalStyle as globalStyle } from 'styled-components'
const bakgroundImage = [
    'https://images.unsplash.com/photo-1652533254543-fe7c026e1544?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500',
    'https://images.unsplash.com/photo-1652487953978-1dd03d4d5c59?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500',
    'https://images.unsplash.com/photo-1652533254284-5f9af8b46fc5?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500',
    'https://images.unsplash.com/photo-1652487954274-08bf38f0cb3b?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500',

]

const GlobalStyle = globalStyle`
    body{
        background-image: linear-gradient(to bottom, rgba(18,42, 66, .4), rgba(18,42, 66, .85)), url(${
            ({background}) =>
             background == 0 ? bakgroundImage[background] :
             background == 1 ? bakgroundImage[background] :
             background == 2 ? bakgroundImage[background] :
             background == 3 ? bakgroundImage[background] :
             background == 4 || bakgroundImage[background] 
            });
            background-repeat: no-repeat; 
            background-size: cover;
    }
`

export default GlobalStyle