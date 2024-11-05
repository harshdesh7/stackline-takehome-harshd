interface Props {
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  tags: string[];
}

const ProductCard = ({ title, image, subtitle, brand, tags }: Props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p className="card-text">{brand}</p>
          <ul className="nav nav-pills">
            {tags.map((tag) => (
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
