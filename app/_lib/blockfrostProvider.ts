import { env } from "@/app/env";
import { BlockfrostProvider } from "@meshsdk/core";

export function getProvider(network: number, mainnetKey?: string, preprodKey?: string) {
  return new BlockfrostProvider(
    network == 0
      ? (preprodKey || env.NEXT_PUBLIC_BLOCKFROST_API_KEY_PREPROD)
      : (mainnetKey || env.NEXT_PUBLIC_BLOCKFROST_API_KEY_MAINNET),
  );
}
