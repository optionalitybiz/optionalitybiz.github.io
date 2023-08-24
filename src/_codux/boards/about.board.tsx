import { createBoard } from '@wixc3/react-board';
import { NavHeader } from '../../components/nav-header/nav-header';

export default createBoard({
    name: 'About',
    Board: () => (
        <div>
            <NavHeader />
        </div>
    ),
    isSnippet: true,
});
