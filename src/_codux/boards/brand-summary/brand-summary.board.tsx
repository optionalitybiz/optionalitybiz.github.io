import { createBoard } from '@wixc3/react-board';
import { BrandSummary } from '../../../components/brand-summary/brand-summary';

export default createBoard({
    name: 'BrandSummary',
    Board: () => <BrandSummary />,
    isSnippet: true,
});
