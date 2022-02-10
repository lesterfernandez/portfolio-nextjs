import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field as={Input} {...props} {...field} autoComplete="off" />
      <FormErrorMessage>
        {meta.error && meta.touched && meta.error}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
