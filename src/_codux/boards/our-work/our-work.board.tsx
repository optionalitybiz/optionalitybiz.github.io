import { createBoard } from '@wixc3/react-board';
import { OurWork } from '../../../components/our-work/our-work';

export default createBoard({
    name: 'OurWork',
    Board: () => <OurWork />,
    isSnippet: true,
});
