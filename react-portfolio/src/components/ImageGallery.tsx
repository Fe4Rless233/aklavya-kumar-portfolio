import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Image {
  src: string;
  title: string;
  description: string;
  category: string;
}

interface ImageGalleryProps {
  images: Image[];
  category?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, category }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState(category || 'all');

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="image-gallery">
      {/* Filter buttons */}
      <div className="gallery-filters">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Image grid */}
      <motion.div 
        className="gallery-grid"
        layout
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${filter}`}
              className="gallery-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => openModal(index)}
            >
              <div className="gallery-item-overlay">
                <img src={image.src} alt={image.title} />
                <div className="gallery-item-info">
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              
              <button className="modal-prev" onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              
              <button className="modal-next" onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>

              <img 
                src={filteredImages[selectedImage].src} 
                alt={filteredImages[selectedImage].title} 
              />
              
              <div className="modal-info">
                <h3>{filteredImages[selectedImage].title}</h3>
                <p>{filteredImages[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
