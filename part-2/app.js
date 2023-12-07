const App = ()=>{
return(
    <div>
        <Tweet username = "MoMoney" name="Marcus" 
        tweet="One day this app will be called X" 
        date = "12/5/2023" />

        <Tweet username = "MoMoney" name="Marcus" 
        tweet="One day this app will be called Y" 
        date = "12/5/2023" />

        <Tweet username = "MoMoney" name="Marcus" 
        tweet="One day this app will be called Z" 
        date = "12/5/2023" />


    </div>
)
}

ReactDOM.render(<App/>, document.getElementById("root"))