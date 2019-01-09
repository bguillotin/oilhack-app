import MainLayout from '../js/components/MainLayout';
import RandomImage from '../js/components/RandomImage';

// export default Index;
class Index extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            refToScrollTo: null,
        }
    }

    render() {
        return (
            <MainLayout>
                <RandomImage refToScrollTo={this.state.refToScrollTo} />
                <p ref={ (ref) => this.setState({ refToScrollTo: ref })}>I am a French artist based in Lyon (1985)
Inspired by nature since my childhood. My creation are an alchemy of colors, materials, textures, an alloy of energies that come alive on a support. It is the movement and assembly that will create diversity. My work is the result of combinations of varied artistic practices, captured at a specific moment, then captured, enhanced with photography, video and the live projection of moving painting.
 My work has been presented in various festivals and exhibitions around the world, such as the festival of Silenzio in Milan, the Springstudio in New York, the artechouse art gallery of Washington DC, at the dome of Society of Technology Art of Montreal, currently I am exhibiting in Paris at Atelier des Lumieres in an immersive space. I also worked with Thomas Blanchard on the Iphone X projects for Apple and Sony for the public square in Tokyo.</p>
            </MainLayout>
        );
    }
}

export default Index;
