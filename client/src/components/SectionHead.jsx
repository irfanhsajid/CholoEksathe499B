
import PropTypes from 'prop-types'
const SectionHead = ({
    title = "This is A Section Title",
    description = "Section Description Here" }) => {
    return (
        <div className="container flex flex-col items-center justify-center py-4">
            <h2 className='font-bold text-primary text-[24px]'>{title}</h2>
            <p className="text-gray-500 w-1/2 text-center">
                {description}
            </p>
            <div className='w-[10%] border mt-2 border-secondary'></div>
        </div>
    );
};

SectionHead.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}
export default SectionHead;

