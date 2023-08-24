import { createBoard } from '@wixc3/react-board';
import { SpacerBlack } from '../../../components/spacer-black/spacer-black';

export default createBoard({
    name: 'SpacerBlack',
    Board: () => <SpacerBlack />,
    isSnippet: true,
});
