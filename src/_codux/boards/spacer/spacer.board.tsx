import { createBoard } from '@wixc3/react-board';
import { Spacer } from '../../../components/spacer/spacer';

export default createBoard({
    name: 'Spacer',
    Board: () => <Spacer />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 224,
        canvasHeight: 204,
    },
});
