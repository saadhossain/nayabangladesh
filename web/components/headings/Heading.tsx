const Heading = ({ title }: { title: string }) => {
    return (
        <h2 className='text-xl md:text-2xl font-semibold text-primary border-l-4 border-secondary pl-2 mb-5 hover:text-secondary duration-200 ease-in-out'>{title}</h2>
    )
}

export default Heading