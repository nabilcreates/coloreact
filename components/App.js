class App extends React.Component{

    constructor(){
        super();
        this.state = {
            color: this.generateRandomColor(),
            generated: 0,
            fastGenerateMode: false,

            fastRandomSecretCode: 'rrf'
        }

        this.handleChange = this.handleChange.bind(this)
        this.blankColor = this.blankColor.bind(this)
    }

    handleChange(event){
        this.setState({
            color: event.target.value,
        })

    }

    generateRandomColor(){
        return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
    }


    blankColor(){
        this.setState({
            color: '',
        })
    }
    
    render(){

        // This will run when anything changes in the component (such as text)
        $(body).css('background', this.state.color)

        if(this.state.color == 'rrr'){

            this.setState((prevState) => {
                return{
                    color: this.generateRandomColor(),
                }
            })

        }else if(this.state.color == this.state.fastRandomSecretCode){

            setInterval(() => {
                this.setState((prevState) => {
                    return{
                        color: this.generateRandomColor(),
                        generated: prevState.generated + 1,
                        fastGenerateMode: true,
                    }
                })
            }, 1);

        }

        return(
            <div>
                <Header generated={this.state.generated} fastGenerateMode={this.state.fastGenerateMode} currentColor={this.state.color} />

                <div className='formandbutton'>
                    <input type='text' value={this.state.color} onChange={this.handleChange}></input>

                    <button onClick={this.blankColor} >Clear</button>
                </div>
            </div>
        )
    }
}