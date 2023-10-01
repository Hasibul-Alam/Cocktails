import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
    if (!drinks) {
        return (
            <h4 style={{ textAlign: 'center' }}>No matching cocktail found</h4>
        );
    }
    const formattedDrinks = drinks.map((item) => {
        const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
            item;
        // console.log(item);
        return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
        };
    });
    return (
        <Wrapper>
            {formattedDrinks.map((drink) => {
                // console.log(drink);
                return <CocktailCard key={drink.id} {...drink} />;
            })}
        </Wrapper>
    );
};
export default CocktailList;
