import * as React from 'react';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import theme from '../theme';
import {MDXProvider} from '@mdx-js/react';

import { ChakraProvider, Code, Heading, Text } from '@chakra-ui/react';

const components = {
  h1: (props: any) => <Heading as="h1" apply='mdx.h1' {...props} />,
  h2: (props: any) => <Heading as="h2" apply='mdx.h2' fontSize='4xl' {...props} />,
  h3: (props: any) => <Heading as="h3" apply='mdx.h3' fontSize='3xl' {...props} />,
  h4: (props: any) => <Heading as="h4" apply='mdx.h4' fontSize='2xl' {...props} />,
  p:  (props: any) => <Text    as="p" apply='mdx.p' fontSize='xl'  {...props} />,
  a:  (props: any) => <Text    as="a" apply='mdx.a' fontSize='xl'  {...props} />,
  code:  (props: any) => <Code apply='mdx.code' fontSize='xl' color='red'  {...props} />,
  ul: (props: any) => <Text as="ul" apply='mdx.ul' fontSize='xl'  {...props} />,
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
        <NextHead>
          <title>chainlink-ref-guide</title>
        </NextHead>

        <MDXProvider components={components}><Component {...pageProps} /></MDXProvider>
    </ChakraProvider>
  );
};

export default App;
