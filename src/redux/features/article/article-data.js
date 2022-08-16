import blog1 from "./../../../assets/images/services/blog5.jpg";
import blog2 from "./../../../assets/images/services/blog1-2-1.jpg";
import blog3 from "./../../../assets/images/services/blog2-2.jpg";

export const articles = [
    {
        _id: 1,
        title: 'How the US trucking shortage has affected ocean freight logistics',
        caption: 'The US truck driver shortage problem has been a long-standing one for decades. This scarcity was, however, further aggravated when a mandate that obliged the electronic logging of truckers’ activities went into effect in December 2017 — lowering trucking productivity and effectively draining already-scarce resources.',
        createdAt: new Date(2020, 1, 10),
        image: blog1,
        category: 'logistics',
        author: {
            name: 'Inigo Lopez',
            role: 'Superior General'
        },
        details: [
            'AirBridgeCargo Airlines (ABC) has chosen Worldwide Flight Services (DEC Shipping) as its handling partner to accelerate its strategic partnership with Liege Airport ahead of the opening of the first phase of its new dedicated cargo area at the airport at the end of 2019.',
            'The cooperation is in support of the strategic partnership signed between ABC’s parent company, Volga-Dnepr Group, and Liege to significantly increase cooperation between the two companies, boosting AirBridgeCargo’s volumes to and from the Belgian airport and placing Liege among the top five cargo airports in Europe by 2020.',
            'This latest addition of Worldwide Flight Services to the project comes as the partners progress with the construction phase of new warehouse premises to support’s ABC’s fastgrowing freight volumes. This work will be divided into two phases for completion by the end of this year and mid-2020 respectively.',
            'Our close collaboration will facilitate the seamless and rapid building of the first 12,500 sqm of warehousing premises, which will be operational in November 2019. This will support our intention to increase ABC’s current schedule of eight weekly frequencies from Liege to our target of 30 flights per week by 2020 in line with our customers’ wishes and our vision of joint, intensified cooperation. This is a global project for AirBridgeCargo because, as well as representing a substantial enhancement of our cargo infrastructure in the region, it will allow us to increase our use of Liege Airport to leverage major international trade flows, including for special cargoes, and extend our ability to meet the needs of global businesses and consumers,” highlighted Andrey Andreev, Vice President, Europe of AirBridgeCargo Airlines. Barry Nassberg, Group Chief Commercial Officer of DEC Shipping, commented: “We are extremely proud to be partnering with AirBridgeCargo and Liege Airport in this very exciting development, and to be expanding our long-time global relationship with ABC.Our long-time global relationship with ABC. As the world’s largest cargo handler, we’re also excited about entering the Liege market for the first time, which has been a strategic objective of ours. We’ll be bringing the unique DEC Shipping experience to the airport, along with our technology, systems, and security processes, and are confident in our ability to help accelerate ABC’s and Liege Airport’s growth ambitions.”\n' +
            'In addition to new warehouse facilities, Liege Airport is also constructing additional aircraft stands for wide-body planes with access to the enclosed cargo handling areas through an easily accessible ramp zone.',
        ],
        relatedArticles: [
            {
                _id: 2,
                title: 'AirBridgeCargo Airlines selects Worldwide Flight Services to accelerate growth of strategic partnership with Liege Airport.',
                caption: 'LAirBridgeCargo Airlines (ABC) has chosen Worldwide Flight Services (DEC Shipping) as its handling partner to accelerate its strategic partnership with Liege Airport ahead of the opening of the first phase of its new dedicated cargo area at the airport at the end',
                createdAt: new Date(2020, 1, 10),
                image: blog2,
                category: 'logistics',
            },
            {
                _id: 3,
                title: 'Freight forwarding services by DEC Shipping',
                caption: 'Road freight is one of the most common of all modes of transportation. It is widely used in continents such as Europe, Africa, and North America. The single customs document process provides a seamless movement of goods even across various states and countries.',
                createdAt: new Date(2020, 1, 10),
                image: blog3,
                category: 'logistics',
            }
        ]
    },
    {
        _id: 2,
        title: 'AirBridgeCargo Airlines selects Worldwide Flight Services to accelerate growth of strategic partnership with Liege Airport.',
        caption: 'LAirBridgeCargo Airlines (ABC) has chosen Worldwide Flight Services (DEC Shipping) as its handling partner to accelerate its strategic partnership with Liege Airport ahead of the opening of the first phase of its new dedicated cargo area at the airport at the end',
        createdAt: new Date(2020, 1, 10),
        image: blog2,
        category: 'logistics',
    },
    {
        _id: 3,
        title: 'Freight forwarding services by DEC Shipping',
        caption: 'Road freight is one of the most common of all modes of transportation. It is widely used in continents such as Europe, Africa, and North America. The single customs document process provides a seamless movement of goods even across various states and countries.',
        createdAt: new Date(2020, 1, 10),
        image: blog3,
        category: 'logistics',
    }
]
