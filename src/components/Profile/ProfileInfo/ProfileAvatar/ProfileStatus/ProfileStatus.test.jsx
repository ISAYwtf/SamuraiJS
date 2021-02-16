import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state",
        () => {
            const component = create(<ProfileStatus status={"bla bla bla"}/>);
            const instance = component.getInstance();
            expect(instance.state.status).toBe("bla bla bla");
        });

    test("after creation span with status should be displayed",
        () => {
            const component = create(<ProfileStatus status={"bla bla bla"}/>);
            const root = component.root;
            const span = root.findByType("span");
            expect(span).not.toBeNull();
        });

    test("after creation span should contain correct status text",
        () => {
            const component = create(<ProfileStatus status={"bla bla bla"}/>);
            const root = component.root;
            const span = root.findByType("span");
            expect(span.children[0]).toBe("bla bla bla");
        });

    test("after creation input shouldn't be displayed",
        () => {
            const component = create(<ProfileStatus status={"bla bla bla"}/>);
            const root = component.root;
            expect(() => root.findByType("input")).toThrow();
        });

    test("input should be displayed in edit mode instead of span",
        () => {
            const component = create(<ProfileStatus status={"bla bla bla"}/>);
            const root = component.root;
            const span = root.findByType("span");
            span.parent.props.onDoubleClick();
            const input = root.findByType("input");
            expect(input.props.value).toBe("bla bla bla");
        });

    test("callback should be called",
        () => {
            const mockCallback = jest.fn();
            const component = create(<ProfileStatus status={"bla bla bla"} updateStatus={mockCallback} />);
            const instance = component.getInstance();
            instance.deactivateEditMode();
            expect(mockCallback.mock.calls.length).toBe(1);
        });
});
