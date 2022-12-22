import { TextInput, Button, } from "@mantine/core";
import Navigation from "./Navigation";
import { IconSearch } from "@tabler/icons";
import Footer from "./Footer";
import Header from "./Header";


export interface LayoutOptions {
    hasNavigation: boolean
    children: any[]
}


export default function Layout({hasNavigation, children}: LayoutOptions) {
    return (
        <>
        <Header></Header>

        {children}

        <Footer></Footer>
      </>
    )
}