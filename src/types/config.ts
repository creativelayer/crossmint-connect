import { BlockchainTypes } from ".";

export interface CrossmintEmbedParams {
    /**
     * API key
     * Get yours at {@link https://console.crossmint.com | Developer Dashboard}
     */
    apiKey: string;

    chain: BlockchainTypes;

    environment?: CrossmintEnvironment;

    autoConnect?: boolean;
    maxTimeAutoConnectMs?: number;

    /**
     * Dapp Metadata
     * If metadata is not provided, it will be extracted from your application automatically
     */
    appMetadata?: AppMetadata;

    /**
     * Iframe element to use for the embed, if not set a popup will be used.
     */
    iframe?: HTMLIFrameElement;
}

export interface AppMetadata {
    name?: string;
    icon?: string;
}

export interface CrossmintEmbedConfig {
    libVersion: string;

    apiKey: string;

    chain: BlockchainTypes;

    environment: CrossmintEnvironment;

    autoConnect: boolean;
    maxTimeAutoConnectMs: number;

    appMetadata?: AppMetadata;

    /**
     * Iframe element to use for the embed, if not set a popup will be used.
     */
    iframe?: HTMLIFrameElement;
}

export enum CrossmintEnvironment {
    PROD = "https://www.crossmint.com",
    STAGING = "https://staging.crossmint.com",
    LOCAL = "http://localhost:3001",
}

export interface CrossmintStore {
    accounts: {
        [key in BlockchainTypes]: string | null;
    };
}
