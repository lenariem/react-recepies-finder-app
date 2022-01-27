import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Footer from "../components/Footer/Footer";

describe("Footer component:", () => {
    beforeEach(() => {
        render(<Footer />);
    });

    test("copyright rendering", () => {
        const author = screen.getByText('Copyright Elena Riemer', { exact: false });
        expect(author).toBeInTheDocument();
    });

    test("copyright rendering correct year", () => {
        const author = screen.getByText('Copyright Elena Riemer', { exact: false });
        const year = new Date().getFullYear();
        
        expect(author).toHaveTextContent(year);
    });

    test("top button should be enabled", () => {
        const topButton = screen.getByRole("button", {
            name: /go to top/i,
        });
        expect(topButton).toBeEnabled();
    });
});
