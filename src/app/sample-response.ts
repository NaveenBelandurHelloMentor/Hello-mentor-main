type CommunityData = {
    id: string,
    channel_name : string,
    whatsapp_link : null | string,
    telegram_link: null | string,
    subcriber_count: null | number
}

type LinkData = {
    id: string,
    title: string,
    link: string,
    isOpened : boolean,
    event_start: string | number | Date,
    event_end : string | number | Date,
    createdAt: string,
    updatedAt: string
}

type OtherLinkData = {
    id: string,
    title: string,
    link: string,
    tag: string,
    isOpened : boolean,
    event_start: null | string,
    event_end : null | string,
    createdAt: string,
    updatedAt: string
}

export const communityResponseData: CommunityData[] = [
    {
        id: "06b4ec1d-c7b9-4fef-895a-2d09d510d167",
        channel_name: "Karnataka",
        whatsapp_link: "https://chat.whatsapp/karnataka",
        telegram_link: "https://api.telegram/karnataka",
        subcriber_count : 10045
    },
    {
        id: "2e726af6-ebcf-47ff-a9c1-809dd3e70de9",
        channel_name: "Tamil Nadu",
        whatsapp_link: "https://chat.whatsapp/karnataka",
        telegram_link: "https://api.telegram/karnataka",
        subcriber_count : 12000
    },
    {
        id: "31647caa-b2ae-47d6-966b-ef190a1c6cb7",
        channel_name: "MCC",
        whatsapp_link: "https://chat.whatsapp/karnataka",
        telegram_link: "https://api.telegram/karnataka",
        subcriber_count : 28000
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        channel_name: "Kerala",
        whatsapp_link: "https://chat.whatsapp/karnataka",
        telegram_link: "https://api.telegram/karnataka",
        subcriber_count : 7000
    },
]

// News & Updates, Application Links, Couselling Links will follow the same response structure
// use updatedAt property to render the orange icon
export const linkResponseData: LinkData[] = [
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MBBS Management Quota Seat Available in Karnataka | Negotiated Fee Package | Medical Mentor",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        event_start: "2023-11-07 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-06T13:13:05.101Z",
        updatedAt: "2023-12-05T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "Candidates whose nationality has already been converted to NRI in earlier rounds NEED NOT send their documents again.",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: true,
        event_start: "2023-12-10 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-02T13:13:05.101Z",
        updatedAt: "2023-12-05T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "KEA Mock Results Analysis | KEA Counselling 2023 | UG NEET 2023 | Medical Mentor",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: true,
        event_start: "2023-12-07 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-06T13:13:05.101Z",
        updatedAt: "2023-12-03T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "Haryana Registration & Choice Filling | Haryana State Counselling 2023 | Medical Mentor",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        event_start: "2023-12-07 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-05T13:13:05.101Z",
        updatedAt: "2023-12-02T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MBBS Management Quota Seat Available in Karnataka | Negotiated Fee Package | Medical Mentor",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        event_start: "2023-12-07 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-02T13:13:05.101Z",
        updatedAt: "2023-12-05T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "Candidates whose nationality has already been converted to NRI in earlier rounds NEED NOT send their documents again.",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: true,
        event_start: "2023-12-06 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-05T13:13:05.101Z",
        updatedAt: "2023-12-03T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "KEA Mock Results Analysis | KEA Counselling 2023 | UG NEET 2023 | Medical Mentor",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: true,
        event_start: "2023-12-08 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-06T13:13:05.101Z",
        updatedAt: "2023-12-04T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "Haryana Registration & Choice Filling | Haryana State Counselling 2023 | Medical Mentor",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-06T13:13:05.101Z",
        updatedAt: "2023-12-05T13:13:05.101Z"
    },
]


export const otherLinkResponseData: OtherLinkData[] = [
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MBBS Management Quota Seat Available in Karnataka | Negotiated Fee Package | Medical Mentor",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        tag: "Resources",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MCC Seat Matrix Analysis",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: true,
        tag: "Resources",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MBBS Management Quota Seat Available in Karnataka Analysis",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: true,
        tag: "Resources",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "Conversion of Nationality Indian to NRI Analysis",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        tag: "Resources",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "KEA Mock Results Analysis",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        tag: "Resources",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MBBS Management Quota Seat Available in Karnataka",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        tag: "Essential Links",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MBBS Management Quota Seat Available in Karnataka | Negotiated Fee Package",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        tag: "Essential Links",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MBBS Management Quota Seat Available in Karnataka Analysis",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        tag: "Essential Links",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MBBS & Medical PG Seat Increment Analysis in the last 4 years, according to NMC Analysis",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        tag: "Essential Links",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
    {
        id: "33148ebc-08ac-4a80-babe-43ab6d12043b",
        title: "MCC Seat Matrix Analysis",
        link: "https://nic.karnataka.gov.in/mbbs-management-quota/",
        isOpened: false,
        tag: "Essential Links",
        event_start: "2023-12-04 10:50:25.212+05:30",
        event_end: "2023-12-08 10:50:25.212+05:30",
        createdAt: "2023-12-01T13:13:05.101Z",
        updatedAt: "2023-12-01T13:13:05.101Z"
    },
]