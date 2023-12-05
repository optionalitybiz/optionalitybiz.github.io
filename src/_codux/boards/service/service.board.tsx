import { createBoard } from '@wixc3/react-board';
import { Service } from '../../../components/service/service';

export default createBoard({
    name: 'Service',
    Board: () => <Service />,
    isSnippet: true,
});
