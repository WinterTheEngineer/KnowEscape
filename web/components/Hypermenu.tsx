'use client';

import { useEffect, useState } from "react";

    const skillsPanels = [
        {
            title: "Skills Development Training",
            description: "Practical training programmes designed to build employee capabilities, strengthen workplace performance, and support meaningful skills development."
        },
        {
            title: "Workplace Skills Planning",
            description: "Structured skills planning to help businesses identify development needs, align training with organisational goals, and meet applicable workplace skills requirements."
        },
        {
            title: "Learnerships & Workplace Training",
            description: "Workplace-based learning and learnership solutions that combine structured training with practical experience to develop capable, work-ready individuals."
        },
        {
            title: "Employee Development",
            description: "Targeted employee development programmes that strengthen skills, improve performance, and support long-term professional growth within your organisation."
        },
        {
            title: "Skills Development Compliance",
            description: "Guidance to help businesses meet skills development requirements, maintain the necessary documentation, and align their training activities with compliance objectives."
        }
    ];

    const skillsSlides = [
        {
            id: 1,
            slideTitle: "Skills Development",
            slideDescription: `Knowescape Consulting provides comprehensive Skills Development solutions 
                                that help businesses develop their people, strengthen workplace capabilities, 
                                and meet South Africa's skills development requirements. From skills development 
                                training and learnerships to workplace skills planning, employee development, and 
                                compliance support, we help organisations turn training into measurable business value 
                                while creating meaningful opportunities for individual growth.`,
            panels: skillsPanels
        }
    ]

export default function Hypermenu() {
    
    const [activeSlide, setActiveSlide] = useState(skillsSlides[0])

    const updateActiveSlide = (slideId: number) => {
        const slide = skillsSlides.find((slide) => slide.id === slideId);

        if (slide) {
            setActiveSlide(slide);
        }
    }

    return (
        <div id="hypermenu">
            <aside id="hypermenu-sidebar">
                <div className="hypermenu-header">
                    <h1 className="hm-header-heading site-heading">{activeSlide.slideTitle}</h1>
                    <p className="hm-header-description site-body">
                        {activeSlide.slideDescription}
                    </p>
                </div>
                <ul id="hypermenu-options">
                    {skillsSlides.map((slide, idx) => (
                        <li className="hypermenu-option" key={idx} onMouseOver={(e) => updateActiveSlide(slide.id)}>
                            {slide.slideTitle}
                        </li>
                    ))}
                </ul>
            </aside>
            <div id="hypermenu-panels">
                {skillsPanels.map((panel, idx) => (
                    <div className="hypermenu-panel" key={idx}>
                        <h3 className="site-heading">{panel.title}</h3>
                        <p className="site-body">
                            {panel.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}