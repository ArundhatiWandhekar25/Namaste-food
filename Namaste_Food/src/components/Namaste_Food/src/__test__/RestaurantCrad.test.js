import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../__test__/Mocks/resCardMock.json"
import RestaurantCards from "../components/RestaurantCard";
import "@testing-library/jest-dom";

it("should render the Restaurant card component",()=>{

    render(<RestaurantCards resData={MOCK_DATA} />);
    const resName = screen.getByText("Pizza Hut");
    expect(resName).toBeInTheDocument();
});