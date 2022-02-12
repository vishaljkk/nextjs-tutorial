const Sub = ({message}) => {
    return <div>
        {message}
    </div>
}
// the notFound property is used to redirect to the error page when data is not retrieved from the database
// There is also a redirection option in the serverside props object
export const getServerSideProps = (context) => {
    return { props : {message : "hey whats up"}, 
            notFound : false} 
            // notFound : Object ? true : false
            // redirect : prop here with the destination
}
export default Sub;