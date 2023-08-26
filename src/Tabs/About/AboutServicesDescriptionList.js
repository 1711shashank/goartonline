import React, { useState } from 'react';
import AboutServicesDescriptionItem from './AboutServicesDescriptionItem';

const AboutServicesDescriptionList = ({ data }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div>
            {data.map((item, index) => (
                <AboutServicesDescriptionItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    expanded={index === expandedIndex}
                    onClick={() => handleExpand(index)}
                />
            ))}
        </div>
    );
};

export default AboutServicesDescriptionList;
