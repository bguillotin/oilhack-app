import Vimeo from '@u-wave/react-vimeo';
import MainLayout from '../js/components/MainLayout';

// export default Index;
export default () => (
    <MainLayout>
        <p>Welcome to Oilhack Website ! Running now on node Server with the lastest videos !!</p>
        <Vimeo video="302238593" autoplay muted={true} loop={true}/>
    </MainLayout>
);