
import PropTypes from 'prop-types'
const SectionHead = ({
    className,
    title = "This is A Section Title",
    description = "" }) => {
    return (
        <div className={ `container flex flex-col items-center justify-center py-4 ${className}`}>
            <h2 className='font-bold text-primary text-[24px] py-2' dangerouslySetInnerHTML={{__html:title}}></h2>
            {
                description && <p className="text-gray-500 w-1/2 text-center">
                    {description}
                </p>
            }
            <div className='w-[10%] border mt-2 border-secondary'></div>
        </div>
    );
};

SectionHead.propTypes = {
    className: PropTypes.string,
    title: PropTypes.any,
    description: PropTypes.string
}
export default SectionHead;

