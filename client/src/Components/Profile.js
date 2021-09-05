import React from 'react'

function Profile() {
    return (
        <div style={{maxWidth:"600px", margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid gray"
            }}>
                <div>
                    <img style={{width : "160px", height:"160px", borderRadius:"50%"}}
                    src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                </div>
                <div>
                    <h4>Aman Jha</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between", 
                        width:"108%",
                        }}>
                        <h6>20 Posts</h6>
                        <h6>20 Followers</h6>
                        <h6>20 Following</h6>
                    </div>
                </div>
            </div>
            
            {/* gallery container */}
            <div className="gallery">
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className = "item" src ="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>

            </div>
        </div>
    )
}

export default Profile
