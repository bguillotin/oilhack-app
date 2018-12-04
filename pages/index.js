import Vimeo from '@u-wave/react-vimeo';
import Head from 'next/head';
import MainLayout from '../js/components/MainLayout';

// export default Index;
export default () => (
    <React.Fragment>
        <Head>
            <title>Oilhack website</title>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
            <style jsx global>{`
                body { 
                    background: #000;
                    margin: 0
                }
            `}</style>
        </Head>
        <MainLayout>
            <p>Welcome to Oilhack Website ! Running now on node Server with the lastest videos !!</p>
            <Vimeo video="302238593" autoplay muted={true} loop={true}/>
        </MainLayout>
    </React.Fragment>
);