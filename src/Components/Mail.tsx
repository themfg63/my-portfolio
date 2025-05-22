const Mail = () => {
    return <div className="flex  md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 -right-48 rotate-90">
        <div className="flex text-xl" data-aos-duraiton="800" data-aos="fade-down-left">
            <a href="mailto:themfg.63@gmail.com" className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
                themfg.63@gmail.com
            </a>
        </div>
        <hr className="border w-40 rounded-full bg-textColor border-textColor" />
    </div>
}

export default Mail;