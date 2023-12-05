import { createBoard } from '@wixc3/react-board';
import { WorkCardSix } from '../../../components/work-card-six/work-card-six';

export default createBoard({
    name: 'WorkCardSix',
    Board: () => <WorkCardSix />,
    isSnippet: true,
});
