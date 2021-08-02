import * as React from "react";

type NativeElement = React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>;

export function useForm<T>(
    initialValues: T,
    onSubmit?: (data: T) => void
): [
    T,
    (event: NativeElement) => void,
    (event: React.SyntheticEvent) => void
] {
    const [formData, setFormData] = React.useState<T>(initialValues);

    const handleInputChange = (event: NativeElement) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    return [formData, handleInputChange, handleSubmit];
}
