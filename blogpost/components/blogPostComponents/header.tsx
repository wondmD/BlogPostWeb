

const Header = () => {
    return (
        <div className="grid grid-cols-2 w-[80%] ml-[10%] mb-8">
            <div><p className="text-3xl font-bold">Blog</p></div>
            <div className="grid grid-cols-2"> 
                <div>
                    <form action="">
                        <input type="text"  className="h-[45px] w-[300px] px-5 rounded-3xl border-solid border-2 " placeholder="Search for ..."/>
                    </form>
                </div>
                <div>
                    <button className="bg-[#264FAD] w-[123px] h-[45px] text-white rounded-3xl">
                        + New Blog
                    </button>
                </div>
            </div>
        </div> 
    )
}
export default Header;