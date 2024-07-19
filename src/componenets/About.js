import React from 'react'

export default function About(props) {
    
    return (
        <div>
            <div className="container about" >
                <h2>About Us</h2>
                <div className="container c-2" style={props.myStyle}>
                    <p>Hy i M Developer of this website ,Here You Can Perform Many Tasks Likes:</p>
                    <ul>
                        <li>CONVERT TEXT UPPER CASE</li>
                        <li>CONVERT TEXT LOWER CASE</li>
                        <li>SAVE HISTORY</li>
                        <li>CAPATILIZE TEXT</li>
                        <li>COPY TO CLIPBOARD</li>
                        <li>DELETE</li>
                        <li>DELETE THE LAST WORD</li>
                    </ul>
                </div>
            </div>
              
        </div>
    )
}
