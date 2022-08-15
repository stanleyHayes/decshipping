import leader1 from "./../assets/images/leaders/leader1.jpg";
import leader2 from "./../assets/images/leaders/leader2.jpg";
import leader3 from "./../assets/images/leaders/leader3.jpg";
import leader4 from "./../assets/images/leaders/leader4.jpg";
import {FlightTakeoffOutlined, SailingOutlined, WarehouseOutlined} from "@mui/icons-material";

const LEADERSHIP = [
    {
        image: leader1,
        name: 'Inigo Lopez',
        position: 'Superior General',
        email: 'inigo.lopez@jesuit.org',
        linkedIn: 'https://linkedIn.com/inigi.lopez',
        twitter: 'https://twitter.com/inigo',
        instagram: 'https://instagram.com/inogo'
    },
    {
        image: leader2,
        name: 'Adolfo Nicolás',
        position: 'Superior General',
        email: 'inigo.lopez@jesuit.org',
        linkedIn: 'https://linkedIn.com/adolfo.nocolas',
        twitter: 'https://twitter.com/adolfo',
        instagram: 'https://instagram.com/adolfo'
    },
    {
        image: leader3,
        name: 'Wlodimir Ledóchowski',
        position: 'Superior General',
        email: 'inigo.lopez@jesuit.org',
        linkedIn: 'https://linkedIn.com/wlodimir.ledóchowski',
        twitter: 'https://twitter.com/wlodimir',
        instagram: 'https://instagram.com/wlodimir'
    },
    {
        image: leader4,
        name: 'Arturo Sosa',
        position: 'Superior General',
        email: 'arturo.sosa@jesuit.org',
        linkedIn: 'https://linkedIn.com/arturo.sosa',
        twitter: 'https://twitter.com/arturo',
        instagram: 'https://instagram.com/arturo'
    },
];


const FAQ = [
    {
        question: 'Can I purchase a Tribute Medallion for personal profile?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'Do I need to activate the Tribute Medallion?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: "I don't want to order a Tribute Medallion, can I still use Tribute?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'Where is the QR Code connected at my Medallion?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'How many profiles can be connected to one Tribute Medallion?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'What is the material of Tribute Medallions?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'Can I see my purchase history of purchased Tribute Medallions?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
]

const FEATURES = [];

const SERVICES = [
    {
        icon: <FlightTakeoffOutlined />,
        name: 'Air Freight',
        description: 'Providing an independent advice, Innovation and varied use of technology on the road, ocean, railways, and in the air.'
    },
    {
        icon: <WarehouseOutlined />,
        name: 'Warehousing',
        description: 'Providing an independent advice, Innovation and varied use of technology on the road, ocean, railways, and in the air.'
    },
    {
        icon: <SailingOutlined />,
        name: 'Ocean Freight',
        description: 'Providing an independent advice, Innovation and varied use of technology on the road, ocean, railways, and in the air.'
    }
];

const REVIEWS = [
    {
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user: {
            name: 'Inigo Lopez',
            role: 'Superior General'
        },
        company: 'Jesuit'
    },
    {
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user: {
            name: 'Inigo Lopez',
            role: 'Superior General'
        },
        company: 'Jesuit'
    },
    {
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user: {
            name: 'Inigo Lopez',
            role: 'Superior General'
        },
        company: 'Jesuit'
    },
    {
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user: {
            name: 'Inigo Lopez',
            role: 'Superior General'
        },
        company: 'Jesuit'
    },
    {
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user: {
            name: 'Inigo Lopez',
            role: 'Superior General'
        },
        company: 'Jesuit'
    },
    {
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user: {
            name: 'Inigo Lopez',
            role: 'Superior General'
        },
        company: 'Jesuit'
    }
];

export const DEC_SHIPPING_DATA = {LEADERSHIP, FAQ, SERVICES, FEATURES, REVIEWS};
