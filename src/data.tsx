import { Architecture, Construction, Equipment, Facebook, Instagram, Pipelines, Subsea, Tiktok } from "./assets";
import procurement from "./assets/procurement.svg";
import engineering from "./assets/engineering.svg";
import specialized from "./assets/specialized.svg";

export const navLinks = [
    {
        name: "HOME",
        url: "#",
    },
    {
        name: "SERVICES",
        url: "#services",
    },
    {
        name: "ABOUT",
        url: "#about",
    },
    {
        name: "SUBSEA",
        url: "#capabilities",
    },
    {
        name: "CONTACT",
        url: "#contact",
    }
];

export const services = [
    {
        name: "Specialized Projects",
        url: "#",
        body: "Working on field development either directly with project engineers or via the design contractor. Complete process from negotiation and award to shipping and submission of final document. Supply Market analysis, Technical Specification Writing, Management of tender Processes and evaluation of proposals, procurement planning and management, Logistics Management etc",
        thumbnail: specialized,
    },
    {
        name: "Engineering Services",
        url: "#",
        body: "High and Low Pressure Leak Repairs- Flow lines, Pipelines and Storage Tanks Corrosion Control, Reinforcements-mechanical damage, corrosion damage, dents etc. Painting Steel and Concrete Fence Installations  Hoist Installation, Building Refurbishment/Construction Telecommunication tower construction, Swamp Clearing Steel fabrication and Installation Minor and Major Civil Works. We provide innovative and cost saving repair and maintenance services to whatsoever Equipment/ Machinery / Facility that needs our expertise.",
        thumbnail: engineering,
    },
    {
        name: "Procurement",
        url: "#",
        body: "Our procurement services are carried out by professional solutions providers, who provide effective sourcing solutions. We're able to understand technical specifications, and deliver on time. We have experience with sourcing Global materials for safety equipment, tubes, pipes and fittings, electrical and mechanical equipment, compressors, turbines, and more. Our procurement team can get you the equipment you need, when you need it",
        thumbnail: procurement,
    },
];

export const growth = {
    "Year Established": 2019,
    "Contractors Appointed": 8,
    "Projects Completed": 105,
    "Awards Won": 2
};

export const capabilities = [
    {
        img: <Pipelines />,
        title: "Pipelines & Risers Design",
        items: [
            "Strength design", "Hydraulic and thermal sizing", "Material selection", "Corrosion protection", "On-bottom stability", "Mechanical protection", "Free-span studies", "Dynamic analysis", "Pipelines requalification"
        ]
    },
    {
        img: <Subsea />,
        title: "Subsea Structures Design",
        items: [
            "Structural design", "Foundation design", "Corrosion protection", "Mechanical protection", "ROV interfaces",
        ]
    },
    {
        img: <Architecture />,
        title: "Field Architectural Screening",
        items: [
            "Field general arrangement and", "Subsea layout including subsea", "process", "Pipe routing integrating", "thermal, hydraulic and", "operating constraints", "Production network concept", "including riser & flowline", "conceptual design"
        ]
    },
    {
        img: <Subsea />,
        title: "Subsea Systems Engineering",
        items: [
            "Design of Flowline/Pipeline, Risers, Subsea Structures & Component § Flow Assurance & Operability", "Control Systems & Umbilical Specification", "Route Selection", "Cost Estimating, Scheduling, Specifications, SoW & Bid Packages"
        ]
    },
    {
        img: <Equipment />,
        title: "Equipment Solutions",
        items: [
            "Design, manufacture and sale of subsea equipment and component including Structures, Manifolds, Umbilicals, Risers, Flowlines, Turret & Mooring Systems",
        ]
    },
    {
        img: <Construction />,
        title: "Construction & Installation",
        items: [
            " We leverage our partners’ fleet of SURF installation specialist vessels, high specification ROVs and trenching systems."
        ]
    },
];

export const smIcons = [<Facebook />, <Instagram />, <Tiktok />];

export const contactInfo = {
    "Email: ": "info@slzltd.com",
    "Tel: ": " +23408027590356, +23409027219196",
    "UK: ": "+4407484811190",
    "Fax: ": "123-456-7890"
}