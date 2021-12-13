import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../../api";
import Preloader from "../Preloader/Preloader";

export default function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState([]);
    const goBack = useNavigate();
    const {strMealThumb="no image", strMeal, strCategory, strArea, strInstructions="no instructions found", strYoutube} = recipe;
    
    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <div>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe">
                    <img src={strMealThumb} alt={strMeal} />
                    <h1>{strMeal}</h1>
                    <h6>Category: <b>{strCategory}</b></h6>
                    {strArea? <h6>Area: <b>{strArea}</b></h6> : null}
                    <p>{strInstructions}</p>
                    {strYoutube ? (
                        <div className="row">
                            <h5>Video Recipe</h5>
                            <iframe 
                                title={id} 
                                src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn" onClick={() => goBack(-1)}>Go Back</button>
        </div>
    )
}
