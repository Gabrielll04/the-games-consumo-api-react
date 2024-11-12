import Head from "next/head";
import Container from "@/Components/Container";
import Menu from "@/Components/Menu";
import Footer from "@/Components/Footer";
import HomeContent from "@/Components/HomeContent";

export default function Homepage() {
    return (
        <>
            <Head>
                <title>The Games &copy; 2024</title>
                <meta 
                    name="description"
                    content="Consumo em React de uma API de Games"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Menu />
                <Container>
                    <HomeContent />
                </Container>
            </main>
            <Footer />
        </>
    )
}
