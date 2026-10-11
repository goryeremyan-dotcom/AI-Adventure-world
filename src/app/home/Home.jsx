import './home.css'
import {Button} from './components/button/Button'
const Home = (props) => {
    console.log(props)
    return (
        <div className='home'>
        <h1>{props.title}</h1>
        <p>welcome home</p>
        <Button />
        </div>
    )
}
export default Home