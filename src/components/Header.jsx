import NavBar from "./NavBar"
import PromotionalBanner from "./PromocionalBanner"
import Logo from "/burgermarron.png"

function Header () {
    return (
        <header className=" bg-zinc-300 p-4 flex-colums">
            <PromotionalBanner></PromotionalBanner>
            <img src={Logo} alt="" className="flex h-40"></img>
            <NavBar></NavBar>
        </header>
    )
}

export default Header