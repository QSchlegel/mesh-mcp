import { getProvider } from "@/app/_lib/blockfrostProvider";

export async function getAddressBalance(address: string, network: number, mainnetKey?: string, preprodKey?: string) {
    const provider = getProvider(network, mainnetKey, preprodKey);
    try {
        const balance = await provider.get(`/addresses/${address}`);
        return balance;
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Failed to fetch balance for address ${address}:`, error);
        return {
            error: true,
            message: `Failed to fetch balance for address ${address}: ${message}`
        };
    }
}

export async function getAddressUtxos(address: string, network: number, mainnetKey?: string, preprodKey?: string) {
    const provider = getProvider(network, mainnetKey, preprodKey);
    try {
        const utxos = await provider.get(`/addresses/${address}/utxos`);
        return utxos;
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Failed to fetch UTXOs for address ${address}:`, error);
        return {
            error: true,
            message: `Failed to fetch UTXOs for address ${address}: ${message}`
        };
    }
}

export async function getAddressTransactions(address: string, network: number, mainnetKey?: string, preprodKey?: string) {
    const provider = getProvider(network, mainnetKey, preprodKey);
    try {
        const txs = await provider.get(`/addresses/${address}/transactions`);
        return txs;
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Failed to fetch transactions for address ${address}:`, error);
        return {
            error: true,
            message: `Failed to fetch transactions for address ${address}: ${message}`
        };
    }
}

export async function getAccount(stakeAddress: string, network: number, mainnetKey?: string, preprodKey?: string) {
    const provider = getProvider(network, mainnetKey, preprodKey);

    console.log(`Fetching account for stake address ${stakeAddress} on network ${network}`);
    try {
        const account = await provider.get(`/accounts/${stakeAddress}`);
        console.log(`Account for stake address ${stakeAddress}:`, account);
        return account;
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Failed to fetch account for stake address ${stakeAddress}:`, error);
        return {
            error: true,
            message: `Failed to fetch account for stake address ${stakeAddress}: ${message}`
        };
    }
}

export async function getAccountRewards(stakeAddress: string, network: number, mainnetKey?: string, preprodKey?: string) {
    const provider = getProvider(network, mainnetKey, preprodKey);

    console.log(`Fetching rewards for stake address ${stakeAddress} on network ${network}`);
    try {
        const rewards = await provider.get(`/accounts/${stakeAddress}/rewards`);
        console.log(`Rewards for stake address ${stakeAddress}:`, rewards);
        return rewards;
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Failed to fetch rewards for stake address ${stakeAddress}:`, error);
        return {
            error: true,
            message: `Failed to fetch rewards for stake address ${stakeAddress}: ${message}`
        };
    }
}

export async function getAccountUtxos(stakeAddress: string, network: number, mainnetKey?: string, preprodKey?: string) {
    const provider = getProvider(network, mainnetKey, preprodKey);

    console.log(`Fetching UTXOs for stake address ${stakeAddress} on network ${network}`);
    try {
        const utxos = await provider.get(`/accounts/${stakeAddress}/utxos`);
        console.log(`UTXOs for stake address ${stakeAddress}:`, utxos);
        return utxos;
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Failed to fetch UTXOs for stake address ${stakeAddress}:`, error);
        return {
            error: true,
            message: `Failed to fetch UTXOs for stake address ${stakeAddress}: ${message}`
        };
    }
}