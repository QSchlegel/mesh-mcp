import { getProvider } from "@/app/_lib/blockfrostProvider";

export async function getAddressBalance(address: string, network: number) {
    const provider = getProvider(network);

    console.log(`Fetching balance for address ${address} on network ${network}`);
    try {
        const balance = await provider.get(`/addresses/${address}`);
        console.log(`Balance for address ${address}:`, balance);
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

export async function getAddressUtxos(address: string, network: number) {
    const provider = getProvider(network);

    console.log(`Fetching UTXOs for address ${address} on network ${network}`);
    try {
        const utxos = await provider.get(`/addresses/${address}/utxos`);
        console.log(`UTXOs for address ${address}:`, utxos);
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

export async function getAddressTransactions(address: string, network: number) {
    const provider = getProvider(network);

    console.log(`Fetching transactions for address ${address} on network ${network}`);
    try {
        const txs = await provider.get(`/addresses/${address}/transactions`);
        console.log(`Transactions for address ${address}:`, txs);
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