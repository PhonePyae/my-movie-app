// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const Card = ({title}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
        </div>
    )
}

const App = () => {
    return (
        <div className="card-container">
            <Card title="Avatar" rating={5} isCool={true} actors={[{name:"Actor Name"}]}/>
            <Card title="Moana"/>
            <Card title="John Wick"/>
            <Card title="Avangers"/>
        </div>

    )
}

export default App
