import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props shold be in the state", () => {
        const component = create(<ProfileStatus status="BORODARYDA" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("BORODARYDA");
    });

    test("After creation 'span' should be displayed" , () => {
        const component = create(<ProfileStatus status="BORODARYDA" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("After creation 'input' shouldn't be displayed" , () => {
        const component = create(<ProfileStatus status="BORODARYDA" />);
        const root = component.root;
        expect( () => root.findByType("input") ).toThrow();
    });

    test("After creation 'span' should be contains correct status" , () => {
        const component = create(<ProfileStatus status="BORODARYDA" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("BORODARYDA");
    });

    test("Input should be displayed in editMode instead of span" , () => {
        const component = create(<ProfileStatus status="BORODARYDA" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("BORODARYDA");
    });
});