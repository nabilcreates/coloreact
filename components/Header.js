function Header(props){
    
    return(
        <div className='header'>
            <h1 >COLOREACT</h1>
            <h4 >Place your color below in the textbox <br></br> or type in 'random' to get a random color</h4>
            <p >{props.fastGenerateMode ? props.generated + ' / 16,777,216 Possible Colors': null}</p>
        </div>
    )
}