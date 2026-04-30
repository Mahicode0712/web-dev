import React, { use } from "react";
import { useParams } from "react-router-dom";


function Profile() {
    const username=useParams()

  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
    )
}
export default Profile