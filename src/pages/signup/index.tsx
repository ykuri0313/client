import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { SignUpForm } from "@/type/form/signUpForm";
import useSignUpPage from "../../hooks/pages/useSignUpPage";

const SignUp = () => {
  const { onValid, onInValid, isLoading } = useSignUpPage();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <Flex>
          <Box w="50%" ml="60" mt="100">
            <Heading as="h3" size="lg">
              Sign Up
            </Heading>
            <Box>
              <Input
                {...register("email", { required: "email is required" })}
                w="30%"
                size="lg"
                type="email"
                variant="flushed"
                placeholder="email"
                focusBorderColor="whiteAlpha"
                mt="100"
              />
            </Box>
            <Box>
              <Input
                {...register("password", { required: "password is required" })}
                type="password"
                w="30%"
                mt="50"
                variant="flushed"
                placeholder="password"
                focusBorderColor="whiteAlpha"
              />
            </Box>
            <Box>
              <Input
                {...register("passwordConfirmation", {
                  required: "passwordConfirmation is required",
                })}
                type="password"
                w="30%"
                mt="50"
                variant="flushed"
                placeholder="password confirmation"
                focusBorderColor="whiteAlpha"
              />
            </Box>
            <Box>
              <Button
                type="submit"
                isLoading={isLoading}
                colorScheme="teal"
                mt="150"
                px="10"
              >
                SignUp
              </Button>
            </Box>
          </Box>
          <Spacer />
          <Box bg="teal" w="20%" h="100vh" position="relative">
            <Image
              src="/SignUp/SignUp.svg"
              alt="SignUp"
              position="absolute"
              top="55%"
              left="-220"
            />
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default SignUp;
