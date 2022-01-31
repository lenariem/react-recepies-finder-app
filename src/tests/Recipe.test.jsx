import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Recipe page:", () => {
    test("correct rendering first recipe page:", async () => {
        render(<App />);

        const seafoodOpenBtn = await screen.findByTestId("seafoodOpenBtn");
        userEvent.click(seafoodOpenBtn);
        const salmonRecipe = await screen.findByRole("img", {
            name: /baked salmon with fennel & tomatoes recipe/i,
        });
        userEvent.click(salmonRecipe);

        //image to be on the page
        const recipeImg = await screen.findByAltText(
            /baked salmon with fennel & tomatoes/i
        );
        expect(recipeImg).toBeInTheDocument();

        //title correct displayed on the page
        const recipeTitle = screen.getByRole("heading", {
            name: /baked salmon with fennel & tomatoes/i,
        });
        expect(recipeTitle).toBeInTheDocument();

        //table to be on the page
        const recipeTable = screen.getByTestId("recipeTable");
        expect(recipeTable).toBeInTheDocument();
        expect(recipeTable).not.toContain("");

        //go back button on the page
        expect(
            screen.getByRole("button", { name: /go back/i })
        ).toBeInTheDocument();
    });
});
