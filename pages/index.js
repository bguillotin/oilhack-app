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
                <section>
                    Videos -->
                </section>
                <section>
                    Gallery -->
                </section>
                <section>
                    About Me -->
                </section>
            </MainLayout>
        );
    }
}

export default Index;
