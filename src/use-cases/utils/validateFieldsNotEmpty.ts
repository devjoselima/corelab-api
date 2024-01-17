interface FieldsToValidate {
    title?: string;
    description?: string;
    color?: string;
}

export function validateFieldsNotEmpty(fields: FieldsToValidate): void {
    if (
        (fields.title !== undefined && fields.title.trim() === "") ||
        (fields.description !== undefined &&
            fields.description.trim() === "") ||
        (fields.color !== undefined && fields.color.trim() === "")
    ) {
        throw new Error("Fields cannot be empty");
    }
}
