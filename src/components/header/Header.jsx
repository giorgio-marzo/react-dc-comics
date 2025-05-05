import React from 'react'

const header = () => {
    return (

        <header>
            <div className="container">
                <div className="row d-flex al-center">
                    <div className="col-50">
                        <img src="src/assets/img/dc-logo.png" alt="Logo" />
                    </div>
                    <div className="col-60">
                        <ul className='d-flex space-bet'>
                            <li><a href="#">CHARACTERS</a></li>
                            <li><a className='active' href="#">COMICS</a></li>
                            <li><a href="#">MOVIES</a></li>
                            <li><a href="#">TV</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </header>


    )
}

export default header
