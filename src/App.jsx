import {useEffect, useState} from "react";

const Card = ({title}) => {
    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);
    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            <h2>{title} <br/> {count}</h2>
            <button onClick={()=>setHasLiked(!hasLiked)}>
                {hasLiked ? '❤️' : '🤍'}
            </button>
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
