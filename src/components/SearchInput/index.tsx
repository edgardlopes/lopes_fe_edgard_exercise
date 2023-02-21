import * as React from 'react';
import {Input} from './styles';

interface Props {
    onQueryUpdated: (query: string) => void;
}

const SearchInput = ({onQueryUpdated}: Props): JSX.Element => {
    const [searchTerm, setSearchTerm] = React.useState('');

    
    function setQuery(e) {
        setSearchTerm(e.target.value);
        onQueryUpdated(e.target.value);
    }

    return (
        <Input placeholder='Type here your search term...' type="text" value={searchTerm} onChange={e => setQuery(e)} data-testid="search-input" />
    );
};

export default SearchInput;
