import styles from './GalleryImage.module.scss';

// eslint-disable-next-line react/prop-types
const GalleryImage = ({ image, title, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={image} alt={title} />
        </div>
    );
};

export default GalleryImage;