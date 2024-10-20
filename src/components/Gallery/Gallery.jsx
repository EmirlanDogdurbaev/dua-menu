import {useState} from 'react';
import ModalSwiper from './ModalSwiper/ModalSwiper';
import classes from './Gallery.module.scss';
import GalleryImage from "./GalleryImage/GalleryImage.jsx";

const images = [
    'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
    'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
    'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
    'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',

];

const Gallery = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleCardClick = (index) => {
        setSelectedImageIndex(index);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={classes.gallery}>
            <div className={classes.inner_cont}>
                <section>
                    <h2>Gallery</h2>
                    <div className={classes.small_line}></div>
                </section>
                <div className={classes.cards}>
                    {images.map((image, index) => (
                        <GalleryImage
                            key={index}
                            image={image}
                            title={`Image ${index + 1}`}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}

                </div>
            </div>

            <ModalSwiper
                isOpen={isModalOpen}
                images={images}
                initialIndex={selectedImageIndex}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default Gallery;
