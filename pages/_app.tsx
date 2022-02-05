import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { wrapper } from "@redux/store";

import "@styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
