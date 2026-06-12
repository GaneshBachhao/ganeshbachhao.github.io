import "./ArchitectureLightbox.css";

interface Props {
  image: string | null;
  title: string;
  onClose: () => void;
}

const ArchitectureLightbox = ({ image, title, onClose }: Props) => {
  if (!image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          ×
        </button>

        <h2>{title}</h2>

        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ArchitectureLightbox;
