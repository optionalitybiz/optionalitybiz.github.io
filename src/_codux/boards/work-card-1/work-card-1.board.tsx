import { createBoard } from '@wixc3/react-board';
import { WorkCard1 } from '../../../components/work-card-1/work-card-1';

export default createBoard({
    name: 'WorkCard1',
    Board: () => <WorkCard1 />,
    isSnippet: true,
});
