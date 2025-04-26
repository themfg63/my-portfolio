import { Info } from "../User"

const Footer = () => {
    return <div className="px-16 mx-20 my-10 font-mono">
        <div>{Info.name}</div>
        <div>Copyright &copy; {new Date().getFullYear()} {Info.name} | Tüm Hakları Saklıdır.</div>
    </div>
}

export default Footer;