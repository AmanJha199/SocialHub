import React from 'react'

function CreatePost() {
    return (
        <div className="card input-feild" style={{
            maxWidth: "600px",
            height: "max-content",
            margin: "20px auto",
            textAlign: "center",
            padding: "20px"
        }}>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="body" />

            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload File</span>
                    <input type="file" multiple />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                </div>
            </div>

            <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
              Submit Post
          </button>

        </div>
                )
            }
            
            export default CreatePost
