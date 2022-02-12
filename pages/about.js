import { useEffect } from "react";
const About = () => {
    useEffect(()=>{
        throw new Error('Youreally broke it')
    })
    return <div>
        This is the about page
    </div>
}
export const getStaticProps = (context) => {
    return { props : {},
                revalidate: 10
    } 
            // notFound : Object ? true : false
            // redirect : prop here with the destination
}
export default About;