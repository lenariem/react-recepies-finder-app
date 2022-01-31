import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("Home page:", () => {
    beforeEach(() => {
        render(<App />);
    });
    
    test("expect loading to be displayed", () => {
        const loading = screen.getByText(/loading/i);
        expect(loading).toBeInTheDocument();
    });

    test("categories are on the page", async () => {
        const categories = await screen.findAllByRole("img", {
            name: /category$/i,
        });
        expect(categories).toHaveLength(14);
    });

    test("there are beef and vegetarian categories on the page", async () => {
        const beefCategory = await screen.findByRole("img", {
            name: /beef category/i,
        });

        const vegetarianCategory = await screen.findByRole("img", {
            name: /vegetarian category/i,
        });

        expect(beefCategory).toBeInTheDocument();
        expect(vegetarianCategory).toBeInTheDocument();
    });

    test("category has a description longer than 80 characters and ends with ...", async () => {
        const chickenCategoryDescr = await screen.findByText(
            /chicken is a type of domesticated fowl, a subspecies of the red junglefowl/i,
            { exact: false }
        );

        expect(chickenCategoryDescr).toHaveTextContent(/\.\.\.$/i);
    });

    test("open category buttons are displayed", async () => {
        const categoryBtn = await screen.findAllByRole("link", {
            name: /open category$/i,
        });

        expect(categoryBtn).toHaveLength(14);
    });
});
