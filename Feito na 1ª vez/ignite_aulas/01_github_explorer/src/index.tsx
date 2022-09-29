import { render } from 'react-dom'
import { App } from './App' // Como no webpack já utilizamos o resolve, o programa já entende que ele é um arquivo .jsx

render(<App />, document.getElementById('root'))