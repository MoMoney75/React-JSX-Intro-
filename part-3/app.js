const App = ()=>{

 return(
    <div>
        <Person name="Optimussssssssss" age ={19} hobbies= {["fishing", "running"]} />
        <Person name="Mars" age={17}  hobbies= {["fishing", "jogging", "reading"]} />
        <Person name="Mercury" age={99}  hobbies= {["flying", "walking", "smoking"]} />
    </div>
 )
}

ReactDOM.render(<App/>, document.getElementById("root"))