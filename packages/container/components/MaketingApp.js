import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

const MaketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);
    return (
        <>
            <div ref={ref}></div>
        </>
    );
}

export default MaketingApp;