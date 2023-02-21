import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '..';

describe('SearchInput', () => {
    it('should call the onQueryUpdated when the user type some value', () => {
        const onQueryUpdated = jest.fn();

        render(<SearchInput onQueryUpdated={onQueryUpdated}/>);

        userEvent.type(screen.getByTestId('search-input'), 'blablabla');
        
        expect(onQueryUpdated).toHaveBeenCalledWith('blablabla');
        
    });

   
});
