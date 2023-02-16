import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import CheckBox from './index';

describe('CheckBox', () => {
    it('should allow users to toggle the checkbox', () => {
        render(<CheckBox label="Check me!"/>);
        const checkbox = screen.getByTestId('check-box');

        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();

        fireEvent.click(checkbox);
        expect(checkbox)
            .not
            .toBeChecked();
    });

    it('should call the onChange callback when the checkbox is toggled', () => {
        const onChange = jest.fn();
        render(<CheckBox label="Check me!" onChange={onChange}/>);
        const checkbox = screen.getByTestId('check-box');

        fireEvent.click(checkbox);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();
    });
});