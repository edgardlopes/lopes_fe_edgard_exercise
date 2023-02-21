import * as React from 'react';
import {fireEvent, render, screen, waitFor, act} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import * as API from '../../api';
import Teams from '../Teams';

function promiseDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function renderWithRouter(children) {
    return render(
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
}

describe('Teams', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render spinner while loading', async () => {
        jest.spyOn(API, 'getTeams').mockImplementation(async () => {
            await promiseDelay(100);
            return [{
                id: '1',
                name: 'Team1',
            }];
        });



        renderWithRouter(<Teams />);


        await screen.findByTestId('spinner');

        jest.advanceTimersByTime(100);

        await waitFor(() => {
            expect(screen.getByText('Team1')).toBeInTheDocument();
        });
    });

    it('should render teams list', async () => {
        jest.spyOn(API, 'getTeams').mockResolvedValue([
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ]);

        renderWithRouter(<Teams />);

        await waitFor(() => {
            expect(screen.getByText('Team1')).toBeInTheDocument();
        });
        expect(screen.getByText('Team2')).toBeInTheDocument();
    });

    it('should navigate to team overview when clicked', async () => {
        jest.spyOn(API, 'getTeams').mockResolvedValue([
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ]);


        renderWithRouter(<Teams />);


        fireEvent.click(await screen.findByText(/team1/i));
        expect(window.location.pathname).toBe('/team/1');
    });
});
