import * as React from "react"
// import "@testing-library/jest-dom/extend-expect"
import renderer from "react-test-renderer";
// import { cleanup } from "@testing-library/react"
import Dashboard from "../../pages/Dashboard/index"

// afterEach(cleanup);
test('renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
});