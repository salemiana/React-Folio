const AnimatedLetters = ({letterClass, strArray, idx }) =>{
    return(
        <span>
            {
                // Takes in a character and the index 
                strArray.map((char,i)=>(
                    <span key={char+i} className={`${letterClass} _${i+idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters;