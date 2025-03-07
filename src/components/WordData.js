import React from 'react'

function WordData({ words, getCharClass }) {
    
  return (
  
            <div className="content">
              {words.map((word, i) => (
                <span key={i}>
                  <span>
                    {word.split('').map((char, idx) => (
                      <span style={{flex:1, justifyContent:'center'}} className={getCharClass(i, idx, char)} key={idx}>
                        {char}
                      </span>
                    ))}
                  </span>
                  <span>&nbsp;&nbsp;</span>
                </span>
              ))}
            </div>
         
  )
}

export default WordData
