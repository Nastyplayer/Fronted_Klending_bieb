
import { useForm } from "react-hook-form";

export const useFormUtils = () => {
    const { register, formState, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const resetFormFields = (additionalResets = []) => {
        reset();
        additionalResets.forEach(resetFunction => resetFunction());
    };

    return {
        register,
        errors,
        handleSubmit,
        reset,
        resetFormFields
    };
};
