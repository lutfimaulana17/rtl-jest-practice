import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Button from './index';

describe('Button', () => {
    it('renders the button with the correct text', () => {
        render(<Button title="Click me!"/>);
        const button = screen.getByTestId('button');
        expect(button).toHaveTextContent('Click me!');
    });

    it('calls the onClick function when clicked', () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Click me!</Button>);
        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('is disabled when the disabled prop is set to true', () => {
        render(<Button disabled="disabled">Click me!</Button>);
        const button = screen.getByTestId('button');
        expect(button).toBeDisabled();
    });
});