import { createBoard } from '@wixc3/react-board';
import { MainStatement } from '../../../components/main-statement/main-statement';

export default createBoard({
    name: 'MainStatement',
    Board: () => <MainStatement />,
    isSnippet: true,
});
