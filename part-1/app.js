const FirstComponent = () =>{
    return (
        <div>
            <h1>My very first component</h1>
        </div>
    )
}

const App = () =>{
    return (
        <div>
            <FirstComponent />
            <Name name="Simeon" />
            
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))