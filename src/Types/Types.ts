export interface BikeNetworkData {
    networks: {
        id: string;
        name: string;
        location: {
            latitude: number;
            longitude: number; // Fixed typo
            city: string;
            country: string;
        };
        href: string;
        company?: string[]; // Made optional if it's sometimes missing
    }[];
}
