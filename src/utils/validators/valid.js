
const requiredField = (value) => {
    if (value) return undefined;

    return 'Field is requeried';
}

export default requiredField;