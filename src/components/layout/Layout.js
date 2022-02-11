import Navbar from "../NavBar";
const Layout = (props) => {
    return <>
        <Navbar/>
        {props.children}
    </>
}
export default Layout;