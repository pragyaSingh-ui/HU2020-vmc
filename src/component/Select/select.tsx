import * as React from 'react';
import './select.styles.scss';
import chevronDown from '../../assets/images/down.svg';
import chevronUp from '../../assets/images/up.svg';

interface SelectPropsInterface {
    options: SelectOptionInterface[];
    default?: SelectOptionInterface;
    customClassPrefix?: string;
}

interface SelectOptionInterface {
    label: string;
    value: any;
}

interface SelectMenuOptionInterface {
    option: SelectOptionInterface;
    onSelect: (option: SelectOptionInterface) => void;
}
const SelectMenuOption: React.FC<SelectMenuOptionInterface> = (props: SelectMenuOptionInterface) => {
    const { option, onSelect } = props;

    const onItemClick = (): void => onSelect(option);

    return (
        <li className={`menu-list--item`} onClick={onItemClick} role="option">
            {option.label}
        </li>
    );
};

export const Select: React.FC<SelectPropsInterface> = (props: SelectPropsInterface) => {
    const { options } = props;
    const [selectedOption, setSelectedOption] = React.useState<SelectOptionInterface | undefined>(props.default);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const customClassPrefix = props.customClassPrefix ? `${props.customClassPrefix}-` : ``;

    const onOptionSelect = (option: SelectOptionInterface): void => {
        setSelectedOption(option);
        setIsMenuOpen(false);
    };

    return (
        <div className={`${customClassPrefix} react-selector`}>
            <button className={`react-selector--control`} onClick={(): void => setIsMenuOpen(state => !state)}>
                <div className={`react-selector--control--label`}>{selectedOption?.label || 'Select'}</div>
                <span className={`react-selector--dropdown-indicator`}>
                    <img
                        src={isMenuOpen ? chevronUp : chevronDown}
                        alt={`dropdown indicator ${isMenuOpen ? 'up' : 'down'}`}
                    />
                </span>
            </button>
            {isMenuOpen && (
                <div className={`react-selector--menu`}>
                    <ul className={`react-selector--menu--list`} role="menu-list">
                        {options.map((option: SelectOptionInterface) => (
                            <SelectMenuOption option={option} key={option.value} onSelect={onOptionSelect} />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

