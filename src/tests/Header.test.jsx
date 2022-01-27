import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("Header component:", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("welcome text", () => {
        const text = screen.getByText(/what would you like to cook today\?/i);
        expect(text).toBeInTheDocument();
    });

    test("logo", () => {
        const logo = screen.getByRole("img", { name: /logo/i });
        expect(logo).not.toBeNull();
        expect(logo).toBeInTheDocument();
    });

    test("menu", () => {
        const homeLink = screen.getByRole("link", { name: /home/i });
        const aboutLink = screen.getByRole("link", { name: /about/i });
        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
    });

    test("gitHub link", () => {
        const gitHubLink = screen.getByRole("img", { name: /github link/i });
        expect(gitHubLink).toBeInTheDocument();
    });
});
