import User from "./User";
import UserClass from "./UserClass";


const AboutUs = ()=>{
    return (
        <div >
            <h1>About</h1>
            <h2>This is Namaste react AboutUs components</h2>
            {/* <User /> */}
            <UserClass name={"aaru Class"} location = {"Pune Class"}/>
        </div>
    );
}


export default AboutUs;