import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterClassStats from './CharacterClassStats';

// Making test data
const mockCharacterClassStatsProps: { characterClassName: string, characterClassLevel: number } = {
    characterClassName: 'Guardian',
    characterClassLevel: 1
}

test("CharacterClassStats renders correctly", () => {
    
    // Render Component
    render(<CharacterClassStats characterClassName={mockCharacterClassStatsProps.characterClassName} characterClassLevel={mockCharacterClassStatsProps.characterClassLevel} />);

    // Grab elements the Component should have rendered
    const characterClassNameElement = screen.getByText(mockCharacterClassStatsProps.characterClassName);
    const characterClassLevelElement = screen.getByText(mockCharacterClassStatsProps.characterClassLevel);
    
    // Assertion: correct elements exist and display correct information
    expect(characterClassNameElement).toBeInTheDocument
    expect(characterClassLevelElement).toBeInTheDocument
})