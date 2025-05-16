export function AcademicItem({ linkImg, urlImg, collegeName, courseName, status, graduationDate, description }) {
    const handleClick = () => {
        window.location.href = linkImg;
    };
    return (
        <div className='flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800'>
            <div className='min-h-[60px] min-w-[60px] rounded-md overflow-clip relative'>
                {/* filter grayscale */}
                <img className='absolute  inset-0 w-full h-full text-transparent  hover:cursor-pointer' onClick={handleClick} src={urlImg} alt="PUC Minas logo" />
            </div>

            <div className='flex flex-col items-start'>
                <h3 className='text-xl font-bold'>{collegeName}</h3>
                <p>{courseName}</p>
                <p className="text-sm text-zinc-500 mt-2 tracking-widest">{status}</p>
                <small className='text-sm text-zinc-500 mt-2 tracking-widest uppercase'>
                    {graduationDate}
                </small>

                <p className='text-sm text-zinc-400 my-4'>{description}</p>
            </div>
        </div>
    )
}