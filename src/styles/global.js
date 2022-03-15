import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Open Sans', sans-serif;

}

input, button, textarea{
    font-family: 'Open Sans', sans-serif;
}

ul{
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 1;
}

button{
    cursor: pointer;
}

a { 
    color: inherit;
    text-decoration:none;
} 

#root{
    width: 100%;
    height: 100vh;
}
`
