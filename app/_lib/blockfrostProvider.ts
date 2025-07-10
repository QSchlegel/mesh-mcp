import { env } from "@/app/env";
import { BlockfrostProvider } from "@meshsdk/core";

export type ProviderContext = {
  network: number;
  mainnetKey?: string;
  preprodKey?: string;
};

export function getProvider(context: ProviderContext) {
  return new BlockfrostProvider(
    context.network === 0
      ? (context.preprodKey || env.NEXT_PUBLIC_BLOCKFROST_API_KEY_PREPROD)
      : (context.mainnetKey || env.NEXT_PUBLIC_BLOCKFROST_API_KEY_MAINNET)
  );
}
