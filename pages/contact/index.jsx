import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Heading, HStack, VStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/Contact/InputField";
import SocialLinks from "../../components/Contact/SocialLinks";

const ContactMe = () => {
  return (
    <>
      <Heading textAlign="center" my="1rem">
        Contact
      </Heading>
      <HStack my="3rem" alignItems="start">
        <SocialLinks spacing={4} mt="2rem" />
        <Formik
          initialValues={{ subject: "", body: "" }}
          validationSchema={Yup.object({
            subject: Yup.string()
              .required("Subject required")
              .min(4, "Invalid subject")
              .max(300, "Invalid subject"),
            body: Yup.string()
              .required("Body required")
              .min(10, "Invalid body")
              .max(1200, "Invalid body"),
          })}
          onSubmit={(values, actions) => {
            const url = `mailto:lester.inquiry@gmail.com?subject=${encodeURIComponent(
              values.subject
            )}&body=${encodeURIComponent(values.body)}`;
            actions.resetForm();
            window.open(url, "_blank");
          }}
        >
          <VStack flex="1" as={Form} px="3rem" spacing={4}>
            <InputField
              as={Input}
              label="Subject"
              name="subject"
              placeholder="Enter subject..."
            />
            <InputField
              as={Textarea}
              minH="7rem"
              label="Body"
              name="body"
              placeholder="Enter body..."
            />
            <Box>
              <Button colorScheme="blue" type="submit" mt="1rem">
                Send Email
              </Button>
            </Box>
          </VStack>
        </Formik>
      </HStack>
    </>
  );
};

export default ContactMe;
