import React from "react"
import renderer from "react-test-renderer";
import CardEntry from "../../pages/CardEntry/index"

test('renders correctly', () => {
    const tree = renderer.create(<CardEntry />).toJSON();
    expect(tree).toMatchSnapshot();
});