import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
const Navbar = () => {
    return <div className={styles.topnav}>
        <Link href='/' as='home'>Home</Link>
        <Link href='/about' as='notabout'>About</Link>
    </div>
}
export default Navbar;