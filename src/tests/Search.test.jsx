import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("Search component rendering:", () => {
    let searchInput;

    beforeEach(async () => {
        render(<App />);
        searchInput = await screen.findByRole("textbox");
    });

    afterEach(() => {
        cleanup();
    });

    test("rendering search input element", () => {
        expect(searchInput).toBeInTheDocument();
    });

    test("rendering search button element", () => {
        const searchBtn = screen.getByRole("button", { name: /search/i });
        expect(searchBtn).toBeInTheDocument();
    });

    test("search term displays correct", () => {
        userEvent.clear(searchInput);
        userEvent.type(searchInput, "hello");

        expect(searchInput.value).toBe("hello");
    });

    test("user types incorrect search term", async () => {
        userEvent.clear(searchInput);
        userEvent.type(searchInput, "chakin");

        const errorMsg = await screen.findByText(/no results/i);

        expect(errorMsg).toBeInTheDocument();
    });

    test("user types correct search term", async () => {
        const searchBtn = screen.getByRole("button", { name: /search/i });
        userEvent.clear(searchInput);
        userEvent.type(searchInput, "seafood");
        userEvent.click(searchBtn);

        const searchResult = await screen.findByRole("img", {
            name: /seafood category/i,
        });
        await waitFor(() => expect(searchResult).toBeInTheDocument());
    });

    test("searching is case insensitive and starts on enter press key", async () => {
        //const searchBtn = screen.getByRole("button", { name: /search/i });
        userEvent.clear(searchInput);
        userEvent.type(searchInput, "VeGetaRiAN {enter}");
        //userEvent.click(searchBtn);
        const searchResult = await screen.findByAltText(/vegetarian category/i);

        await waitFor(() => expect(searchResult).toBeInTheDocument());
    });
});
