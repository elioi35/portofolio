const IconContainer = ({ link, children }) => {

    return (
        <a href={link} target='_blank'>
            <div
                className='text-[var(--main-color)] border w-[30px] h-[30px] flex justify-center items-center rounded-full hover:text-black hover:bg-[var(--main-color)] cursor-pointer transition'
            >
                {children}
            </div>
        </a>
    )
}

export default IconContainer