import React from 'react'

function projectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section projectDetails">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Project Title - {id}</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <div >Created By <a href="/">Syed Farhan</a></div>
                    <div>20th July, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default projectDetails;
