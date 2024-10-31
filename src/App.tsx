
import './App.css'
import Typography from './componets/atom/typography/Typography'

function App() {


  return (
   <>
   
   <Typography text={'Welcome to Typography'} tag="h1" className='title' role='heading' aria_label='welcome to typography' aria_labelledby='title' style={{color:'blue'}}  ><div> hii</div></Typography>
   <Typography text={'lets go for coding'} tag='h3' />
   <Typography ></Typography>
   </>
  )
}

export default App
