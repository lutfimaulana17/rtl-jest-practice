import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import TextInput from './index';

describe('TextInput', () => {
    it('should allow users to type in the input', () => {
        render(<TextInput placeholder="Name"/>);
        const input = screen.getByTestId('text-input');

        fireEvent.change(input, {
            target: {
                value: 'Lutfi Maulana'
            }
        });
        expect(input.value).toBe('Lutfi Maulana');
    });

    it('should call the onChange callback when the input value is changed', () => {
        const onChange = jest.fn();
        render(<TextInput placeholder="Name" onChange={onChange}/>);
        const input = screen.getByTestId('text-input');

        fireEvent.change(input, {
            target: {
                value: 'Lutfi Maulana'
            }
        });
        expect(onChange).toHaveBeenCalled();
    });
});