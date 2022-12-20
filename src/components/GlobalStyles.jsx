import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1,h2 {
  padding: 0;
  margin: 0;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}
p{
  padding: 0;
  margin: 0;
}
button{
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  cursor: pointer;  
  :hover{
    background-color: #928ce4;
  }
}
`;