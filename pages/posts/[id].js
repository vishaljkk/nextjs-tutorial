const PostPage = () => {
    return <h1>I'm a post</h1>
}

export const getServerSideProps = (context) => {
    console.log(context)
    return { props: {} }
}

export default PostPage;