import { useEffect } from "react";
const About = () => {
    useEffect(()=>{
        throw new Error('Youreally broke it')
    })
    return <div>
        This is the about page
    </div>
}
export default About;