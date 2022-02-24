import { cleanup } from "@testing-library/react";
import { NumberInput } from "../components/NumberInput";
import { SpellContainer } from "../components/SpellContainer";

import renderer from "react-test-renderer"

afterEach(cleanup);

it("Renders proper loading number input", () => {
    const view = renderer.create(<NumberInput label="Number" name="number" value="30"/>);

    expect(view).toMatchSnapshot();
});

it("Renders proper loading spell container", () => {
    const view = renderer.create(<SpellContainer label="Spelling" name="spelling" value="Tiga Puluh"/>);

    expect(view).toMatchSnapshot();
});