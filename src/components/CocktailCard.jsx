import Wrapper from '../assets/wrappers/CocktailCard';
import { Link } from 'react-router-dom';

const CocktailCard = ({ id, name, image, info, glass }) => {
    return (
        <Wrapper>
            <div className="img-container">
                <img src={image} alt={name} className="img" />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{glass}</h5>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className="btn">
                    Details
                </Link>
            </div>
        </Wrapper>
    );
};
export default CocktailCard;
