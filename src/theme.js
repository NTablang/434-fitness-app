import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            // Apply global styles to the body
            body: {
                bg: 'gray.50',
                color: 'gray.800',
            },
        },
    },
    colors: {
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
        // You can add more color palettes here
    },
    fonts: {
        heading: "'Open Sans', sans-serif",
        body: "'Raleway', sans-serif",
    },
    components: {
        Button: {
            // Style for the base style of Button
            baseStyle: {
                fontWeight: 'bold', // Normally, it's "semibold"
            },
            // Styles for different sizes of Buttons
            sizes: {
                sm: {
                    fontSize: 'sm',
                    px: 4, // padding left and right
                    py: 3, // padding top and bottom
                },
                // Add more sizes here
            },
        },
    },
});

export default theme;
