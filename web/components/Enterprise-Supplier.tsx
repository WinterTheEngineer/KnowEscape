import { BentoGrid } from "./ui/bento-grid";


const esdServices = [
    {
        name: "Enterprise Development",
        description:
            "Support for developing and strengthening businesses through strategic planning, mentorship, business development, and capacity building.",
        href: "/services/enterprise-development",
        cta: "Explore Enterprise Development",
    },
    {
        name: "Supplier Development",
        description:
            "Developing capable, competitive suppliers through business support, capacity building, procurement readiness, and market access.",
        href: "/services/supplier-development",
        cta: "Explore Supplier Development",
    },
    {
        name: "B-BBEE & ESD Advisory",
        description:
            "Practical guidance to help businesses develop effective ESD strategies and align their initiatives with B-BBEE requirements.",
        href: "/services/bbbee-esd-advisory",
        cta: "Explore ESD Advisory",
    },
    {
        name: "Business Growth Support",
        description:
            "Strategic support designed to help businesses strengthen their operations, identify opportunities, and build sustainable growth.",
        href: "/services/business-growth-support",
        cta: "Explore Growth Support",
    },
]

export default function Enterprise_Supplier () {

    return (
        <section id="enterprise-supplier">
            <div className="esd-container">
                {/* <BentoGrid>

                </BentoGrid> */}
            </div>
        </section>
    )
}