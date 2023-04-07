import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}
function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}
function Website({ Component, pageProps, router }) {
  return (
    <SafeHydrate>
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
    </SafeHydrate>
  );
}

export default Website;
