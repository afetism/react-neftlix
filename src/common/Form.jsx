import React, { useCallback } from 'react';
import FormInput from './FormInput';

const Form = ({
    headerText,
    setFormData,
    formItems = [],
    formButtons = [],
    formStyle = "flex flex-col gap-5 max-w-[400px] mx-auto pt-12"
}) => {
    const handleInputChange = useCallback((name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }, [setFormData]);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className={formStyle}
        >
            {headerText?.title && (
                <h1 className={headerText.style || ""}>
                    {headerText.title}
                </h1>
            )}

            {Array.isArray(formItems) &&
                formItems.map((item, index) => (
                    <FormInput
                        key={index}
                        value={item?.value}
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        placeholder={item.placeholder}
                        handleInputChange={handleInputChange}
                        inputStyle={item.inputStyle}
                    />
                ))}

            {Array.isArray(formButtons) &&
                formButtons.map((button, index) => (
                    <button
                        key={index}
                        onClick={button.action}
                        className={button.style}
                    >
                        {button.title}
                    </button>
                ))}
        </form>
    );
};

export default Form;
