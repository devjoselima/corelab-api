import validator from "validator";

export interface ParamsProps {
    title?: string;
    description?: string;
    color?: string;
    isFavorited?: string;
}

const allowedFields: Array<keyof ParamsProps> = [
    "title",
    "description",
    "color",
    "isFavorited",
];

export const validateFieldsIsNotAllowed = (params: ParamsProps): boolean => {
    return Object.keys(params).some(
        (field) => !allowedFields.includes(field as keyof ParamsProps)
    );
};

export const validateFieldsNotEmpty = (params: ParamsProps) => {
    const fieldIsEmpty = allowedFields.find((field) => {
        const currentField = params[field];

        return validator.isEmpty(String(currentField), {
            ignore_whitespace: true,
        });
    });

    return fieldIsEmpty ? true : false;
};
