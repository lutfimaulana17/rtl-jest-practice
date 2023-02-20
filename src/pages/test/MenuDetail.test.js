import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import axios from 'axios';
import MenuDetail from '../MenuDetail';

jest.mock('axios');

describe('MenuDetail', () => {
    it('render menu detail information when the API request is successful', async () => {
        const data = {
            id: 5,
            title: 'Sample Menu Title',
            body: 'This is sample body menu',
          };
        const response = { data };
        axios.get.mockResolvedValue(response);

        await act( async () => render(<MenuDetail/>));

        const menuTitle = screen.getByTestId('title');
        const menuBody = screen.getByTestId('body');

        expect(menuTitle).toHaveTextContent(data.title)
        expect(menuBody).toHaveTextContent(data.body)
    });

    it('render error message when the API request failed', async () => {
        const message = "Data not Found!"
        const error = new Error(message);
        axios.get.mockRejectedValue(error);
    
        await act( async () => render(<MenuDetail/>));
        const messageComp = screen.getByTestId('err-message');

        expect(messageComp).toHaveTextContent(message)
    });
});