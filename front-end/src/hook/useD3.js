import React from 'react';
import * as d3 from 'd3';

// https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app use hook to allow D3.js to interact directly
// with the DOM hh
export const useD3 = (renderChartFn, dependencies) => {
    const ref = React.useRef();

    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
    }, dependencies);
    return ref;
};
