/** Template file contents as plain strings for Father/npm consumers. */

export const mainTemplate = `import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
`;

export const appTemplate = `import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
`;

export const appCssTemplate = `:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(255 255 255 / 87%);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  background-color: #242424;
  color-scheme: light dark;
  font-synthesis: none;
}

#root {
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
}

body {
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  place-items: center;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  padding: 0.6em 1.2em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #fff;
  }

  button {
    background-color: #f9f9f9;
  }
}
`;

export const importMapTemplate = `{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"
  }
}
`;

export const iframeTemplate = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview</title>
</head>
<body>
<script>
    window.addEventListener('error', (e) => {
        window.parent.postMessage({type: 'ERROR', message: e.message})
    })
</script>
<script type="importmap"></script>
<script type="module" id="appSrc"></script>
<div id="root"></div>
</body>
</html>
`;
