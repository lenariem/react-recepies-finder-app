import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../../api";
import Preloader from "../Preloader/Preloader";

export default function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    const goBack = useNavigate();
    const {
        strMealThumb = "no image",
        strMeal,
        strCategory,
        strArea,
        strInstructions = "no instructions found",
        strYoutube,
    } = recipe;

    const generateKey = () => Math.floor(Math.random() * 10000000);

    // separate steps of instruction
    function replaceJSX(str, find, replace) {
        const parts = str.split(find);
        const result = [];
        for (let i = 0; i < parts.length; i++) {
            result.push(parts[i]);
            if (i < parts.length - 1) result.push(replace);
        }
        return result;
    }

    const instr = replaceJSX(strInstructions, /(\r\n|\r|\n)/g, <br />);

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <div className="recipePage">
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <img
                        src={strMealThumb}
                        alt={strMeal}
                        className="recipeImg"
                    />
                    <h1>{strMeal}</h1>
                    <h6>
                        Category: <b>{strCategory}</b>
                    </h6>
                    {strArea ? (
                        <h6>
                            Area: <b>{strArea}</b>
                        </h6>
                    ) : null}
                    <table className="centered" data-testid="recipeTable">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map(key => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={generateKey()}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    <p>{instr}</p>
                    {strYoutube ? (
                        <div className="row">
                            <h5>Video Recipe</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn" onClick={() => goBack(-1)}>
                Go Back
            </button>
        </div>
    );
}
