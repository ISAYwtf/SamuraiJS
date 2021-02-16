import {render} from '@testing-library/react';
import SamuraiJSApp from "./App";

test('renders without crashing', () => {
    render(<SamuraiJSApp/>);
});
