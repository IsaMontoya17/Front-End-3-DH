import './App.css'
import Saludo from './components/Saludo'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  return (
    <>
      <Saludo nombre="Juan">Hola</Saludo>
      <Card>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quas, qui voluptatibus rerum saepe vitae sapiente reiciendis nam itaque, nisi illo quos animi ipsam cumque delectus sint nostrum consequuntur ipsum?
        Optio sit sequi fugiat sunt reprehenderit possimus voluptate consequatur nostrum et unde, iure ad dolor autem cum animi quasi cumque, in odit laudantium harum nihil, facere dignissimos. Reiciendis, fugit eum?</p>
       <Button text='Agregar' />
      </Card>
    </>
  )
}

export default App
