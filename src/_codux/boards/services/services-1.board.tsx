import { createBoard } from '@wixc3/react-board';
import { Services } from '../../../components/services/services';

export default createBoard({
    name: 'Services 1',
    Board: () => <Services services={[]} />,
    isSnippet: true,
});
