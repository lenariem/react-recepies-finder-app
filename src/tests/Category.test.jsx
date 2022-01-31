import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Category page:", () => {
    test("correct rendering seafood category:", async () => {
        render(<App />);

        const seafoodOpenBtn = await screen.findByTestId("seafoodOpenBtn");
        userEvent.click(seafoodOpenBtn);

        //Recipes are on the page
        const categories = await screen.findAllByRole("img", {
            name: /recipe$/i,
        });
        expect(categories).toHaveLength(27);

        //Length of found recipes should be displayed
        expect(screen.getByText(/found 27 recipes/i)).toBeInTheDocument();

        // Button to back to the main page should be displayed
        expect(
            screen.getByRole("link", {
                name: /arrow_back go back to main page/i,
            })
        ).toBeInTheDocument();

        //Last recipe in the list should be displayed with image
        expect(
            screen.getByRole("img", { name: /tuna nicoise recipe/i })
        ).toBeInTheDocument();
    });
});
