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
import { SignInForm } from "@/type/form/signInForm";
import useSignInPage from "../../hooks/pages/useSignInPage";

const SignIn = () => {
  const { onValid, onInValid, isLoading } = useSignInPage();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <Flex>
          <Box w="50%" ml="60" mt="100">
            <Heading as="h3" size="lg">
              Sign In
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
              <Button
                type="submit"
                isLoading={isLoading}
                colorScheme="blue"
                mt="150"
                px="10"
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Spacer />
          <Box bg="blue.500" w="20%" h="100vh" position="relative">
            <Image
              src="/SignIn/SignIn.svg"
              alt="SignIn"
              boxSize="xs"
              position="absolute"
              top="50%"
              left="-180"
            />
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default SignIn;
