import { Splide, SplideSlide } from '@splidejs/react-splide';
import PropTypes from 'prop-types'
// Default theme
import '@splidejs/react-splide/css';
const ImageSlider = ({ data }) => {
    return (
        <Splide options={options} aria-label="My Favorite Images">
            {
                data?.map((item, index) => (
                    <SplideSlide key={index}>
                        <img src={item} alt="Image 1" />
                    </SplideSlide>
                ))
            }
        </Splide>

    );
};

ImageSlider.propTypes = {
    data: PropTypes.array
}

export default ImageSlider;

const options = {
    rewind: true,
    width: 1000,
    height: 540,
    gap: '1rem',
    autoPlay: true,
    perPage: 1,
    pauseOnHover: true,
    autoplay: true,
    interval: 3000,
} 